import React, { Component, createRef } from 'react';
import { createPortal } from 'react-dom';
import Types from 'prop-types';
import classNames from 'classnames';
import Transition from 'react-transition-group/Transition';

import { Search as SearchIcon } from '@transferwise/icons';
import Option from './option';
import Chevron from '../chevron';
import KeyCodes from '../common/keyCodes';
import { Breakpoint } from '../common';
import {
  addClickClassToDocumentOnIos,
  removeClickClassFromDocumentOnIos,
} from '../common/domHelpers';
import { addClassAndTriggerReflow, removeClass } from './domHelpers';

function clamp(from, to, value) {
  return Math.max(Math.min(to, value), from);
}

function actionableOption(option) {
  return !option.header && !option.separator && !option.disabled;
}

const isFunction = (functionToCheck) =>
  functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';

function stopPropagation(event) {
  event.stopPropagation();
  event.preventDefault();
  if (event.nativeEvent && event.nativeEvent.stopImmediatePropagation) {
    event.nativeEvent.stopImmediatePropagation();
  }
  // document listener does not use SyntheticEvents
}

function getShouldRenderWithPortal() {
  return (
    typeof document !== 'undefined' &&
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia(`(max-width: ${Breakpoint.SMALL}px)`).matches
  );
}

const BOOTSTRAP_DROPDOWN_ANIMATION_TIME = 200;

const defer = (fn) => setTimeout(fn, 0);

const includesString = (str1, str2) => str1.toLowerCase().indexOf(str2.toLowerCase()) > -1;

const arrayIncludesString = (arrayToSearch, keyword) =>
  arrayToSearch.some((str) => includesString(str, keyword));

const defaultFilterFunction = (option, keyword) =>
  (option.label && includesString(option.label, keyword)) ||
  (option.currency && includesString(option.currency, keyword)) ||
  (option.searchStrings && arrayIncludesString(option.searchStrings, keyword));

export default class Select extends Component {
  static getDerivedStateFromProps(props, state) {
    const hasActiveOptions = !!props.options.length;

    if (state.open && (props.searchValue !== '' || state.searchValue !== '')) {
      if (hasActiveOptions && state.keyboardFocusedOptionIndex === null) {
        return {
          keyboardFocusedOptionIndex: 0,
        };
      }
      if (!hasActiveOptions && state.keyboardFocusedOptionIndex !== null) {
        return {
          keyboardFocusedOptionIndex: null,
        };
      }
    }

    return null;
  }

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      searchValue: '',
      keyboardFocusedOptionIndex: null,
    };
    this.searchBoxRef = createRef();
    this.dropdownMenuRef = createRef();
  }

  componentDidMount() {
    this.setState({
      shouldRenderWithPortal: getShouldRenderWithPortal(),
    });
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    this.close();
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    this.setState({
      shouldRenderWithPortal: getShouldRenderWithPortal(),
    });
  };

  getIndexWithoutHeadersForIndexWithHeaders(index) {
    return this.getOptions().reduce((sum, option, currentIndex) => {
      if (currentIndex < index && actionableOption(option)) {
        return sum + 1;
      }
      return sum;
    }, 0);
  }

  handleOnFocus = (event) => this.props.onFocus && this.props.onFocus(event);

  handleOnBlur = (event) => {
    const { onBlur } = this.props;
    const { nativeEvent } = event;
    if (nativeEvent) {
      const elementReceivingFocus = nativeEvent.relatedTarget;
      const select = event.currentTarget;
      if (select && elementReceivingFocus && select.contains(elementReceivingFocus)) {
        return;
      }
    }

    if (onBlur) {
      onBlur(event);
    }
  };

  getOptions = (options = this.props.options) => {
    const { search } = this.props;

    if (!search || !this.state.searchValue) {
      return options;
    }

    const filterFunction = isFunction(search) ? search : defaultFilterFunction;

    return options.filter((option) => filterFunction(option, this.state.searchValue));
  };

  handleSearchChange = (event) => {
    if (this.props.onSearchChange) {
      this.props.onSearchChange(event.target.value);
    } else {
      this.setState({
        searchValue: event.target.value,
      });
    }
  };

  handleKeyDown = (event) => {
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
          this.selectKeyboardFocusedOption();
        }
        break;
      default:
        break;
    }
  };

  selectKeyboardFocusedOption() {
    if (this.state.keyboardFocusedOptionIndex !== null) {
      const index = this.state.keyboardFocusedOptionIndex;
      this.selectOption(this.getOptions().filter(actionableOption)[index]);
    }
  }

  moveFocusWithDifference(difference) {
    this.setState((previousState, previousProps) => {
      const optionsWithoutHeaders = this.getOptions(previousProps.options).filter(actionableOption);
      const selectedOptionIndex = optionsWithoutHeaders.reduce((optionIndex, current, index) => {
        if (optionIndex !== null) {
          return optionIndex;
        }
        if (previousProps.selected && previousProps.selected.value === current.value) {
          return index;
        }
        return null;
      }, null);
      const previousFocusedIndex = previousState.keyboardFocusedOptionIndex;
      let indexToStartMovingFrom = previousFocusedIndex;
      if (previousFocusedIndex === null && selectedOptionIndex === null) {
        return { keyboardFocusedOptionIndex: 0 };
      }
      if (previousFocusedIndex === null && selectedOptionIndex !== null) {
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
      const isTouchDevice =
        typeof window !== 'undefined' &&
        window.matchMedia &&
        !!window.matchMedia('(pointer: coarse)').matches;
      const searchable = !!this.props.onSearchChange || !!this.props.search;

      defer(() => {
        if (!isTouchDevice && searchable && this.searchBoxRef.current) {
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

  handleTouchStart = (event) => {
    if (event.currentTarget === event.target && this.state.open) {
      this.close();
    }
  };

  createSelectHandlerForOption(option) {
    return (event) => {
      stopPropagation(event);
      this.selectOption(option);
    };
  }

  selectOption(option) {
    if (option && !option.placeholder) {
      this.props.onChange(option);
    } else {
      this.props.onChange(null);
    }
    this.close();
  }

  style = (className) => this.props.classNames[className] || className;

  renderOptionsList() {
    const {
      dropdownRight,
      dropdownWidth,
      onSearchChange,
      placeholder,
      required,
      search,
    } = this.props;
    const { open, shouldRenderWithPortal } = this.state;
    const s = this.style;

    const canSearch = !!onSearchChange || !!search;

    const dropdownClass = classNames(s('tw-select'), s('dropdown-menu'), {
      [s(`dropdown-menu-${dropdownRight}-right`)]: dropdownRight,
      [s(`dropdown-menu-${dropdownWidth}`)]: dropdownWidth,
      [s(`dropdown-menu--open`)]: open,
    });

    const list = (
      <ul className={dropdownClass} role="menu">
        {!required && !canSearch && placeholder ? this.renderPlaceHolderOption() : ''}
        {canSearch ? this.renderSearchBox() : ''}
        {this.renderOptions()}
      </ul>
    );

    if (shouldRenderWithPortal) {
      return createPortal(list, document.body);
    }

    return list;
  }

  renderOptions() {
    return this.getOptions().map(this.renderOption);
  }

  renderSearchBox() {
    const { searchValue, searchPlaceholder } = this.props;
    return (
      <li className={this.style('tw-dropdown-item--divider')}>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className={`${this.style('tw-select-filter-link')} ${this.style('p-a-0')}`}>
          <div className={this.style('input-group')}>
            <span className={this.style('input-group-addon')}>
              <SearchIcon className={`${this.style('tw-icon')} ${this.style('tw-icon-search')}`} />
            </span>
            <input
              type="text"
              className={`${this.style('tw-select-filter')} ${this.style('form-control')}`}
              placeholder={searchPlaceholder}
              onChange={this.handleSearchChange}
              onClick={stopPropagation}
              value={searchValue || this.state.searchValue}
              ref={this.searchBoxRef}
              spellCheck="false"
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
        [this.style('tw-dropdown-item--focused')]: isFocusedWithKeyboard && !option.disabled,
        [this.style('disabled')]: option.disabled,
      },
    );
    return (
      <li // eslint-disable-line jsx-a11y/no-noninteractive-element-interactions
        key={index}
        onClick={option.disabled ? stopPropagation : this.createSelectHandlerForOption(option)}
        onKeyPress={option.disabled ? stopPropagation : this.createSelectHandlerForOption(option)}
        className={className}
      >
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a disabled={option.disabled}>
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

  renderOverlay() {
    const { open, shouldRenderWithPortal } = this.state;

    if (open && shouldRenderWithPortal) {
      return createPortal(<div className="tw-select select-overlay" />, document.body);
    }

    return null;
  }

  render() {
    const { disabled, size, block, id, dropdownUp, inverse } = this.props;
    const { open } = this.state;
    const s = this.style;

    const groupClass = classNames(s('tw-select'), s('btn-group'), {
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
        {(animationState) => (
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
              <Chevron
                disabled={disabled}
                className={`${s('tw-icon')} ${s('tw-chevron-up-icon')} ${s('tw-chevron')} ${s(
                  'chevron-color',
                )} ${s('bottom')} ${s('tw-select-chevron')}`}
              />
            </button>
            {animationState !== 'exited' && this.renderOptionsList()}
            {animationState !== 'exited' && this.renderOverlay()}
          </div>
        )}
      </Transition>
    );
  }
}

Select.propTypes = {
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
    // eslint-disable-next-line react/forbid-prop-types
    value: Types.any.isRequired,
    label: Types.node,
    icon: Types.node,
    currency: Types.string,
    note: Types.node,
    secondary: Types.node,
  }),
  /**
   * Search toggle
   * if `true` default search functionality being enabled (not case sensitive search in option labels & currency props)
   * if `function` you can define your own search function to implement custom search experience. This search function used while filtering the options array. The custom search function takes two parameters. First is the option the second is the keyword.
   */
  search: Types.oneOfType([Types.bool, Types.func]),
  onChange: Types.func.isRequired,
  onFocus: Types.func,
  onBlur: Types.func,
  options: Types.arrayOf(
    Types.shape({
      // eslint-disable-next-line react/forbid-prop-types
      value: Types.any,
      label: Types.node,
      header: Types.node,
      icon: Types.node,
      currency: Types.string,
      note: Types.node,
      secondary: Types.node,
      separator: Types.bool,
      disabled: Types.bool,
      searchStrings: Types.arrayOf(Types.string),
    }),
  ).isRequired,
  /**
   * To have full controll of your search value and response use `onSearchChange` function combined with `searchValue` and custom filtering on the options array.
   * DO NOT USE TOGETHER WITH `search` PROPERTY
   */
  onSearchChange: Types.func,
  searchValue: Types.string,
  searchPlaceholder: Types.string,
  classNames: Types.objectOf(Types.string),
  dropdownUp: Types.bool,
};

Select.defaultProps = {
  id: undefined,
  placeholder: undefined,
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
  search: false,
  searchValue: '',
  searchPlaceholder: 'Search...',
  classNames: {},
  dropdownUp: false,
};
