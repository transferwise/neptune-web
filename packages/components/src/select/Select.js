import React, { Component } from 'react';
import Types from 'prop-types';

import Option from './option';

import './Select.css';

export default class Select extends Component {
  static propTypes = {
    placeholder: Types.string,
    required: Types.bool,
    disabled: Types.bool,
    selected: Types.shape({
      value: Types.any.isRequired,
      label: Types.string,
      icon: Types.string,
      currency: Types.string,
      note: Types.string,
      secondary: Types.secondary,
    }),
    onChange: Types.func.isRequired,
    options: Types.arrayOf(Types.shape({
      value: Types.any,
      label: Types.string,
      header: Types.string,
      icon: Types.string,
      currency: Types.string,
      note: Types.string,
      secondary: Types.secondary,
    })).isRequired,
    onSearchChange: Types.func,
    searchValue: Types.string,
    searchPlaceholder: Types.string,
  };

  static defaultProps = {
    placeholder: 'Select an option...',
    required: false,
    disabled: false,
    selected: null,
    onSearchChange: undefined,
    searchValue: '',
    searchPlaceholder: 'Search...',
  };

  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  componentDidMount() {
    document.addEventListener('click', this.handleDocumentClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleDocumentClick, false);
  }

  handleDocumentClick = () => {
    if (this.state.open) {
      this.close();
    }
  };

  handleButtonClick = (event) => {
    if (!this.props.disabled) {
      this.stopPropagation(event);
      this.open();
    }
  }

  open() {
    this.setState({ open: true });
  }

  close() {
    this.setState({ open: false });
  }

  stopPropagation = (event) => {
    event.stopPropagation();
    event.preventDefault();
    event.nativeEvent.stopImmediatePropagation();
    // document listener does not use SyntheticEvents
  };

  handleSearchChange = (event) => {
    this.props.onSearchChange(event.target.value);
  }

  createSelectHandlerForOption(option) {
    return (event) => {
      this.stopPropagation(event);
      if (!option.placeholder) {
        this.props.onChange(option);
      } else {
        this.props.onChange(null);
      }
      this.close();
    };
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
              onClick={this.stopPropagation}
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
        <a>{placeholder}</a>
      </li>
    );
  }

  renderOption = (option, index) => {
    if (option.header) {
      return (
        <li // eslint-disable-line jsx-a11y/no-static-element-interactions
          key={index}
          onClick={this.stopPropagation}
          className="dropdown-header"
        >
          {option.header}
        </li>
      );
    }

    const isActive = this.props.selected && this.props.selected.value === option.value;
    return (
      <li // eslint-disable-line jsx-a11y/no-static-element-interactions
        key={index}
        onClick={this.createSelectHandlerForOption(option)}
        className={`tw-dropdown-item--clickable ${isActive ? 'active' : ''}`}
      >
        <a><Option {...option} /></a>
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
    const { disabled, required, onSearchChange } = this.props;
    const canSearch = !!onSearchChange;
    const { open } = this.state;
    const groupClass = `btn-group btn-block dropdown ${open ? 'open' : ''}`;
    return (
      <div className={groupClass} aria-hidden="false">
        <button
          disabled={disabled}
          className="btn btn-input dropdown-toggle"
          type="button"
          aria-expanded={open}
          onClick={this.handleButtonClick}
        >
          {this.renderButtonInternals()}
          <span className="caret" />
        </button>
        {
          open ? (
            <ul className="dropdown-menu" role="menu">
              {!required && !canSearch ? this.renderPlaceHolderOption() : ''}
              {canSearch ? this.renderSearchBox() : '' }
              {this.renderOptions()}
            </ul>
          ) : ''
        }
      </div>
    );
  }
}
