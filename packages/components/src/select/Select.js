import React, { Component } from 'react';
import Types from 'prop-types';

import Option from './option';
import KeyCodes from '../common/keyCodes';

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
  event.nativeEvent.stopImmediatePropagation();
  // document listener does not use SyntheticEvents
}

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
      label: Types.string,
      icon: Types.string,
      currency: Types.string,
      note: Types.string,
      secondary: Types.string,
    }),
    onChange: Types.func.isRequired,
    options: Types.arrayOf(
      Types.shape({
        value: Types.any,
        label: Types.string,
        header: Types.string,
        icon: Types.string,
        currency: Types.string,
        note: Types.string,
        secondary: Types.string,
        separator: Types.bool,
      }),
    ).isRequired,
    onSearchChange: Types.func,
    searchValue: Types.string,
    searchPlaceholder: Types.string,
    classNames: Types.objectOf(Types.string),
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
    onSearchChange: undefined,
    searchValue: '',
    searchPlaceholder: 'Search...',
    classNames: {},
  };

  constructor(props) {
    super(props);
    this.state = { open: false, keyboardFocusedOptionIndex: null };
    this.searchBox = null;
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

  handleSearchChange = event => this.props.onSearchChange(event.target.value);

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
        if (event.target !== this.searchBox) {
          if (open) {
            this.selectKeyboardFocusedOption();
          } else {
            this.open();
          }
          event.preventDefault();
        }
        break;
      case KeyCodes.ENTER:
        this.selectKeyboardFocusedOption();
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
    this.setState({ open: true });
    document.addEventListener('click', this.handleDocumentClick, false);
  }

  close() {
    this.setState({ open: false, keyboardFocusedOptionIndex: null });
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
      <li className="tw-dropdown-item--divider">
        <a className="tw-select-filter-link p-a-0">
          <div className={this.style('input-group')}>
            <span className={this.style('input-group-addon')}>
              <i className={`${this.style('icon')} ${this.style('icon-search')}`} />
            </span>
            <input
              type="text"
              className={`tw-select-filter ${this.style('form-control')}`}
              placeholder={searchPlaceholder}
              onChange={this.handleSearchChange}
              onClick={stopPropagation}
              value={searchValue}
              ref={el => {
                this.searchBox = el;
              }}
            />
          </div>
        </a>
      </li>
    );
  }

  renderPlaceHolderOption() {
    const { placeholder } = this.props;
    return (
      <li // eslint-disable-line jsx-a11y/no-static-element-interactions
        onClick={this.createSelectHandlerForOption({ placeholder })}
        className="tw-dropdown-item--clickable tw-dropdown-item--divider"
      >
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
        <li // eslint-disable-line jsx-a11y/no-static-element-interactions
          key={index}
          onClick={stopPropagation}
          className={this.style('dropdown-header')}
        >
          {option.header}
        </li>
      );
    }

    const isActive =
      (this.props.selected && this.props.selected.value === option.value) ||
      this.state.keyboardFocusedOptionIndex ===
        this.getIndexWithoutHeadersForIndexWithHeaders(index);
    return (
      <li // eslint-disable-line jsx-a11y/no-static-element-interactions
        key={index}
        onClick={this.createSelectHandlerForOption(option)}
        className={`tw-dropdown-item tw-dropdown-item--clickable ${
          isActive ? this.style('active') : ''
        }`}
      >
        <a>
          <Option {...option} classNames={this.props.classNames} />
        </a>
      </li>
    );
  };

  renderButtonInternals() {
    const { selected, placeholder } = this.props;
    if (selected) {
      return <Option {...selected} classNames={this.props.classNames} />;
    }
    return <span className={this.style('form-control-placeholder')}>{placeholder}</span>;
  }

  render() {
    const { disabled, required, onSearchChange, size, block, id } = this.props;
    const canSearch = !!onSearchChange;
    const { open } = this.state;
    const btn = this.style('btn');
    const openDropdown = this.style('open');
    const btnBlock = this.style('btn-block');
    const btnGroup = this.style('btn-group');
    const btnInput = this.style('btn-input');
    const dropdown = this.style('dropdown');
    const dropdownToggle = this.style('dropdown-toggle');
    const btnSize = {
      xs: this.style('btn-xs'),
      sm: this.style('btn-sm'),
      md: this.style('btn-md'),
      lg: this.style('btn-lg'),
    };
    const groupClass = `${btnGroup} ${block ? btnBlock : ''} ${dropdown} ${
      open ? openDropdown : ''
    }`;
    const inverse = this.props.inverse
      ? `${this.style('btn-input-inverse')} ${this.style('btn-addon')}`
      : '';
    const buttonClass = `${btn} ${btnInput} ${inverse} ${btnSize[size]}  ${dropdownToggle}`;

    const dropdownMenu = this.style('dropdown-menu');
    const dropdownRight = this.props.dropdownRight
      ? this.style(`dropdown-menu-${this.props.dropdownRight}-right`)
      : '';
    const dropdownWidth = this.props.dropdownWidth
      ? this.style(`dropdown-menu-${this.props.dropdownWidth}`)
      : '';
    const dropdownClass = `${dropdownMenu} ${dropdownRight} ${dropdownWidth}`;
    return (
      <div // eslint-disable-line jsx-a11y/no-static-element-interactions
        className={groupClass}
        onKeyDown={this.handleKeyDown}
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
        {open ? (
          <ul className={dropdownClass} role="menu">
            {!required && !canSearch ? this.renderPlaceHolderOption() : ''}
            {canSearch ? this.renderSearchBox() : ''}
            {this.renderOptions()}
          </ul>
        ) : (
          ''
        )}
      </div>
    );
  }
}
