import React, { Component } from 'react';
import Types from 'prop-types';

import Option from './option';

import './Select.css';

const KeyCodes = {
  DOWN: 40,
  UP: 38,
  ENTER: 13,
  ESCAPE: 27,
};

function clamp(from, to, value) {
  return Math.max(Math.min(to, value), from);
}

function notHeader(option) {
  return !option.header;
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
    size: Types.oneOf(['xs', 'sm', 'md', 'lg']),
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
      }),
    ).isRequired,
    onSearchChange: Types.func,
    searchValue: Types.string,
    searchPlaceholder: Types.string,
  };

  static defaultProps = {
    id: undefined,
    placeholder: 'Select an option...',
    size: 'md',
    required: false,
    disabled: false,
    block: true,
    selected: null,
    onSearchChange: undefined,
    searchValue: '',
    searchPlaceholder: 'Search...',
  };

  constructor(props) {
    super(props);
    this.state = { open: false, keyboardFocusedOptionIndex: null };
  }

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick, false);
  }

  getIndexWithoutHeadersForIndexWithHeaders(index) {
    return this.props.options.reduce((sum, option, currentIndex) => {
      if (currentIndex < index && notHeader(option)) {
        return sum + 1;
      }
      return sum;
    }, 0);
  }

  handleSearchChange = event => this.props.onSearchChange(event.target.value);

  handleKeyDown = (event) => {
    switch (event.keyCode) {
      case KeyCodes.UP:
        this.moveFocusWithDifference(-1);
        event.preventDefault();
        break;
      case KeyCodes.DOWN:
        this.moveFocusWithDifference(1);
        event.preventDefault();
        break;
      case KeyCodes.ENTER:
        this.selectKeyboardFocusedOption();
        event.preventDefault();
        break;
      case KeyCodes.ESCAPE:
        this.close();
        event.preventDefault();
        break;
      default:
        break;
    }
  };

  selectKeyboardFocusedOption() {
    if (this.state.keyboardFocusedOptionIndex !== null) {
      const index = this.state.keyboardFocusedOptionIndex;
      this.selectOption(this.props.options.filter(notHeader)[index]);
    }
  }

  moveFocusWithDifference(difference) {
    this.setState((previousState, previousProps) => {
      const optionsWithoutHeaders = previousProps.options.filter(notHeader);
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
  }

  close() {
    this.setState({ open: false, keyboardFocusedOptionIndex: null });
  }

  handleButtonClick = (event) => {
    if (!this.props.disabled) {
      stopPropagation(event);
      this.open();
    }
  };

  handleDocumentClick = () => {
    if (this.state.open) {
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
    if (!option.placeholder) {
      this.props.onChange(option);
    } else {
      this.props.onChange(null);
    }
    this.close();
  }

  renderOptions() {
    return this.props.options.map(this.renderOption);
  }

  renderSearchBox() {
    const { searchValue, searchPlaceholder } = this.props;
    return (
      <li className="tw-dropdown-item--divider">
        <a className="tw-select-filter-link p-a-0">
          <div className="input-group">
            <span className="input-group-addon">
              <i className="icon icon-search" />
            </span>
            <input
              type="text"
              className="form-control tw-select-filter"
              placeholder={searchPlaceholder}
              onChange={this.handleSearchChange}
              onClick={stopPropagation}
              value={searchValue}
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
        <a>
          {placeholder}
        </a>
      </li>
    );
  }

  renderOption = (option, index) => {
    if (option.header) {
      return (
        <li // eslint-disable-line jsx-a11y/no-static-element-interactions
          key={index}
          onClick={stopPropagation}
          className="dropdown-header"
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
        className={`tw-dropdown-item--clickable ${isActive ? 'active' : ''}`}
      >
        <a>
          <Option {...option} />
        </a>
      </li>
    );
  };

  renderButtonInternals() {
    const { selected, placeholder } = this.props;
    if (selected) {
      return <Option {...selected} />;
    }
    return (
      <span className="form-control-placeholder">
        {placeholder}
      </span>
    );
  }

  render() {
    const { disabled, required, onSearchChange, size, block, id } = this.props;
    const canSearch = !!onSearchChange;
    const { open } = this.state;
    const groupClass = `btn-group ${block ? 'btn-block' : ''} dropdown ${open ? 'open' : ''}`;
    const buttonClass = `btn btn-input btn-${size} dropdown-toggle`;
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
          <span className="caret" />
        </button>
        {open
          ? <ul className="dropdown-menu" role="menu">
            {!required && !canSearch ? this.renderPlaceHolderOption() : ''}
            {canSearch ? this.renderSearchBox() : ''}
            {this.renderOptions()}
          </ul>
          : ''}
      </div>
    );
  }
}
