import React, { Component, createRef } from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import Transition from 'react-transition-group/Transition';

import Option from './option';
import KeyCodes from '../common/keyCodes';
import {
  addClickClassToDocumentOnIos,
  removeClickClassFromDocumentOnIos,
} from '../common/domHelpers';
import { addClassAndTriggerReflow, removeClass } from './domHelpers';

import './Select.less';

function clamp(from, to, value) {
  return Math.max(Math.min(to, value), from);
}

function actionableOption(option) {
  return !option.header && !option.separator;
}

function stopPropagation(event) {
  event.stopPropagation();
  event.preventDefault();
  if (event.nativeEvent && event.nativeEvent.stopImmediatePropagation) {
    event.nativeEvent.stopImmediatePropagation();
  }
  // document listener does not use SyntheticEvents
}

const BOOTSTRAP_DROPDOWN_ANIMATION_TIME = 200;

const defer = fn => setTimeout(fn, 0);

export default class Select extends Component {
  static propTypes = {
    placeholder: Types.string,
    id: Types.string,
    required: Types.bool,
    disabled: Types.bool,
    inverse: Types.bool,
    dropdownRight: Types.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    dropdownWidth: Types.oneOf(['sm', 'md', 'lg']),
    size: Types.oneOf(['sm', 'md', 'lg']),
    block: Types.bool,
    selected: Types.shape({
      value: Types.any.isRequired,
      label: Types.node,
      icon: Types.string,
      currency: Types.string,
      note: Types.node,
      secondary: Types.node,
    }),
    onChange: Types.func.isRequired,
    onFocus: Types.func,
    onBlur: Types.func,
    options: Types.arrayOf(
      Types.shape({
        value: Types.any,
        label: Types.node,
        header: Types.node,
        icon: Types.string,
        currency: Types.string,
        note: Types.node,
        secondary: Types.node,
        separator: Types.bool,
      }),
    ).isRequired,
    onSearchChange: Types.func,
    searchValue: Types.string,
    searchPlaceholder: Types.string,
    classNames: Types.objectOf(Types.string),
    dropdownUp: Types.bool,
  };

  static defaultProps = {
    id: undefined,
    placeholder: 'Select an option...',
    size: 'md',
    dropdownRight: null,
    dropdownWidth: null,
    inverse: false,
    required: false,
    disabled: false,
    block: true,
    selected: null,
    onFocus: null,
    onBlur: null,
    onSearchChange: undefined,
    searchValue: '',
    searchPlaceholder: 'Search...',
    classNames: {},
    dropdownUp: false,
  };

  static getDerivedStateFromProps(props, state) {
    const hasActiveOptions = !!props.options.length;

    if (state.open && props.searchValue !== '') {
      if (hasActiveOptions && state.keyboardFocusedOptionIndex === null) {
        return {
          keyboardFocusedOptionIndex: 0,
        };
      } else if (!hasActiveOptions && state.keyboardFocusedOptionIndex !== null) {
        return {
          keyboardFocusedOptionIndex: null,
        };
      }
    }

    return null;
  }

  constructor(props) {
    super(props);
    this.state = { open: false, keyboardFocusedOptionIndex: null };
    this.searchBoxRef = createRef();
    this.dropdownMenuRef = createRef();
  }

  componentWillUnmount() {
    this.close();
  }

  getIndexWithoutHeadersForIndexWithHeaders(index) {
    return this.props.options.reduce((sum, option, currentIndex) => {
      if (currentIndex < index && actionableOption(option)) {
        return sum + 1;
      }
      return sum;
    }, 0);
  }

  handleOnFocus = event => this.props.onFocus && this.props.onFocus(event);

  handleOnBlur = event => this.props.onBlur && this.props.onBlur(event);

  handleSearchChange = event => {
    this.props.onSearchChange(event.target.value);
  };

  handleKeyDown = event => {
    const { open } = this.state;
    switch (event.keyCode) {
      case KeyCodes.UP:
        if (open) {
          this.moveFocusWithDifference(-1);
        } else {
          this.open();
        }
        event.preventDefault();
        break;
      case KeyCodes.DOWN:
        if (open) {
          this.moveFocusWithDifference(1);
        } else {
          this.open();
        }
        event.preventDefault();
        break;
      case KeyCodes.SPACE:
        if (event.target !== this.searchBoxRef.current) {
          if (open) {
            this.selectKeyboardFocusedOption();
          } else {
            this.open();
          }
          event.preventDefault();
        }
        break;
      case KeyCodes.ENTER:
        if (open) {
          this.selectKeyboardFocusedOption();
        } else {
          this.open();
        }
        event.preventDefault();
        break;
      case KeyCodes.ESCAPE:
        this.close();
        event.preventDefault();
        break;
      case KeyCodes.TAB:
        if (open) {
          event.preventDefault();
        }
        break;
      default:
        break;
    }
  };

  selectKeyboardFocusedOption() {
    if (this.state.keyboardFocusedOptionIndex !== null) {
      const index = this.state.keyboardFocusedOptionIndex;
      this.selectOption(this.props.options.filter(actionableOption)[index]);
    }
  }

  moveFocusWithDifference(difference) {
    this.setState((previousState, previousProps) => {
      const optionsWithoutHeaders = previousProps.options.filter(actionableOption);
      const selectedOptionIndex = optionsWithoutHeaders.reduce((optionIndex, current, index) => {
        if (optionIndex !== null) {
          return optionIndex;
        } else if (previousProps.selected && previousProps.selected.value === current.value) {
          return index;
        }
        return null;
      }, null);
      const previousFocusedIndex = previousState.keyboardFocusedOptionIndex;
      let indexToStartMovingFrom = previousFocusedIndex;
      if (previousFocusedIndex === null && selectedOptionIndex === null) {
        return { keyboardFocusedOptionIndex: 0 };
      } else if (previousFocusedIndex === null && selectedOptionIndex !== null) {
        indexToStartMovingFrom = selectedOptionIndex;
      }
      const unClampedNewIndex = indexToStartMovingFrom + difference;
      const newIndex = clamp(0, optionsWithoutHeaders.length - 1, unClampedNewIndex);
      return { keyboardFocusedOptionIndex: newIndex };
    });
  }

  open() {
    // TODO: should also add breakpoint-specific overflow:hidden class to body
    this.setState({ open: true }, () => {
      const searchable = !!this.props.onSearchChange;
      defer(() => {
        if (searchable && this.searchBoxRef.current) {
          this.searchBoxRef.current.focus();
        }
      });
    });

    addClickClassToDocumentOnIos();
    document.addEventListener('click', this.handleDocumentClick, false);
  }

  close() {
    this.setState({ open: false, keyboardFocusedOptionIndex: null });

    removeClickClassFromDocumentOnIos();
    document.removeEventListener('click', this.handleDocumentClick, false);
  }

  handleButtonClick = () => {
    if (!this.props.disabled) {
      this.open();
    }
  };

  handleDocumentClick = () => {
    if (this.state.open) {
      this.close();
    }
  };

  handleTouchStart = event => {
    if (event.currentTarget === event.target && this.state.open) {
      this.close();
    }
  };

  createSelectHandlerForOption(option) {
    return event => {
      stopPropagation(event);
      this.selectOption(option);
    };
  }

  selectOption(option) {
    if (!option.placeholder) {
      this.props.onChange(option);
    } else {
      this.props.onChange(null);
    }
    this.close();
  }

  style = className => this.props.classNames[className] || className;

  renderOptions() {
    return this.props.options.map(this.renderOption);
  }

  renderSearchBox() {
    const { searchValue, searchPlaceholder } = this.props;
    return (
      <li className={this.style('tw-dropdown-item--divider')}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className={`${this.style('tw-select-filter-link')} ${this.style('p-a-0')}`}>
          <div className={this.style('input-group')}>
            <span className={this.style('input-group-addon')}>
              <i className={`${this.style('icon')} ${this.style('icon-search')}`} />
            </span>
            <input
              type="text"
              className={`${this.style('tw-select-filter')} ${this.style('form-control')}`}
              placeholder={searchPlaceholder}
              onChange={this.handleSearchChange}
              onClick={stopPropagation}
              value={searchValue}
              ref={this.searchBoxRef}
            />
          </div>
        </a>
      </li>
    );
  }

  renderPlaceHolderOption() {
    const { placeholder } = this.props;
    return (
      /* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */
      <li
        onClick={this.createSelectHandlerForOption({ placeholder })}
        onKeyPress={this.createSelectHandlerForOption({ placeholder })}
        className={classNames(
          this.style('tw-dropdown-item--clickable'),
          this.style('tw-dropdown-item--divider'),
        )}
      >
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>{placeholder}</a>
      </li>
    );
  }

  renderOption = (option, index) => {
    if (option.separator) {
      return <li key={index} className={this.style('divider')} />;
    }

    if (option.header) {
      return (
        <li // eslint-disable-line jsx-a11y/no-noninteractive-element-interactions
          key={index}
          onClick={stopPropagation}
          onKeyPress={stopPropagation}
          className={this.style('dropdown-header')}
        >
          {option.header}
        </li>
      );
    }

    const isActive = this.props.selected && this.props.selected.value === option.value;
    const isFocusedWithKeyboard =
      this.state.keyboardFocusedOptionIndex ===
      this.getIndexWithoutHeadersForIndexWithHeaders(index);

    const className = classNames(
      this.style('tw-dropdown-item'),
      this.style('tw-dropdown-item--clickable'),
      {
        [this.style('active')]: isActive,
        [this.style('tw-dropdown-item--focused')]: isFocusedWithKeyboard,
      },
    );
    return (
      <li // eslint-disable-line jsx-a11y/no-noninteractive-element-interactions
        key={index}
        onClick={this.createSelectHandlerForOption(option)}
        onKeyPress={this.createSelectHandlerForOption(option)}
        className={className}
      >
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a>
          <Option {...option} classNames={this.props.classNames} />
        </a>
      </li>
    );
  };

  renderButtonInternals() {
    const { selected, placeholder } = this.props;
    if (selected) {
      return <Option {...selected} classNames={this.props.classNames} selected />;
    }
    return <span className={this.style('form-control-placeholder')}>{placeholder}</span>;
  }

  render() {
    const {
      disabled,
      required,
      onSearchChange,
      size,
      block,
      id,
      dropdownUp,
      inverse,
      dropdownWidth,
      dropdownRight,
    } = this.props;
    const canSearch = !!onSearchChange;
    const { open } = this.state;
    const s = this.style;

    const groupClass = classNames(s('btn-group'), {
      [s('btn-block')]: block,
      [s('dropup')]: dropdownUp,
      [s('dropdown')]: !dropdownUp,
    });

    const buttonClass = classNames(
      s('btn'),
      s('btn-input'),
      {
        [`${s('btn-input-inverse')} ${s('btn-addon')}`]: inverse,
        [s('btn-xs')]: size === 'xs',
        [s('btn-sm')]: size === 'sm',
        [s('btn-md')]: size === 'md',
        [s('btn-lg')]: size === 'lg',
      },
      s('dropdown-toggle'),
    );

    const dropdownClass = classNames(s('dropdown-menu'), {
      [s(`dropdown-menu-${dropdownRight}-right`)]: dropdownRight,
      [s(`dropdown-menu-${dropdownWidth}`)]: dropdownWidth,
    });

    const openClass = s('open');
    return (
      // A transition is used here in order to mount and unmount the dropdown menu while retaining animations
      <Transition
        in={open}
        timeout={BOOTSTRAP_DROPDOWN_ANIMATION_TIME}
        onEntering={() => {
          if (this.dropdownMenuRef.current) {
            addClassAndTriggerReflow(this.dropdownMenuRef.current, openClass);
          }
        }}
        onExit={() => {
          if (this.dropdownMenuRef.current) {
            removeClass(this.dropdownMenuRef.current, openClass);
          }
        }}
      >
        {animationState => (
          <div // eslint-disable-line jsx-a11y/no-static-element-interactions
            className={groupClass}
            ref={this.dropdownMenuRef}
            onKeyDown={this.handleKeyDown}
            onTouchMove={this.handleTouchStart}
            onFocus={this.handleOnFocus}
            onBlur={this.handleOnBlur}
          >
            <button
              disabled={disabled}
              className={buttonClass}
              type="button"
              id={id}
              aria-expanded={open}
              onClick={this.handleButtonClick}
            >
              {this.renderButtonInternals()}
              <span className={this.style('caret')} />
            </button>
            {animationState !== 'exited' ? (
              <ul className={dropdownClass} role="menu">
                {!required && !canSearch ? this.renderPlaceHolderOption() : ''}
                {canSearch ? this.renderSearchBox() : ''}
                {this.renderOptions()}
              </ul>
            ) : (
              ''
            )}
          </div>
        )}
      </Transition>
    );
  }
}
