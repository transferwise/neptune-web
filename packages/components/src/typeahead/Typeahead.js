/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

import React, { Component } from 'react';
import Types from 'prop-types';
import debounce from 'lodash.debounce';
import clamp from 'lodash.clamp';
import classNames from 'classnames';

import { Cross as CrossIcon } from '@transferwise/icons';

import KeyCodes from '../common/keyCodes';
import TypeaheadInput from './typeaheadInput/TypeaheadInput';
import TypeaheadOption from './typeaheadOption/TypeaheadOption';
import InlineAlert from '../inlineAlert';
import Chip from '../chip';
import {
  addClickClassToDocumentOnIos,
  removeClickClassFromDocumentOnIos,
} from '../common/domHelpers';

import './Typeahead.css';
import { Size, Sentiment } from '../common';

const DEFAULT_MIN_QUERY_LENGTH = 3;
const SEARCH_DELAY = 200;

export default class Typeahead extends Component {
  static Size = Size;

  static Type = Sentiment;

  constructor(props) {
    super(props);
    const { searchDelay, initialValue, multiple } = props;
    this.handleSearchDebounced = debounce(this.handleSearch, searchDelay);
    const initialQuery = !multiple && initialValue.length > 0 ? initialValue[0].label : '';
    this.state = {
      selected: initialValue,
      errorState: false,
      query: initialQuery,
      keyboardFocusedOptionIndex: null,
    };
  }

  // eslint-disable-next-line
  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.multiple !== this.props.multiple) {
      this.setState((prevState) => {
        const { selected } = prevState;
        if (!nextProps.multiple && selected.length > 0) {
          return {
            query: selected[0].label,
            selected: [selected[0]],
          };
        }
        return {
          query: '',
        };
      });
    }
  }

  componentWillUnmount() {
    this.handleSearchDebounced.cancel();
  }

  handleOnFocus = () => {
    const { onFocus } = this.props;
    this.showMenu();

    if (onFocus) {
      this.props.onFocus();
    }
  };

  onOptionSelected = (event, item) => {
    event.preventDefault();
    this.selectItem(item);
  };

  handleOnChange = (event) => {
    const { optionsShown, selected } = this.state;
    const { multiple, onInputChange } = this.props;

    if (!optionsShown) {
      this.showMenu();
    }

    const query = event.target.value;

    if (!multiple && selected.length > 0) {
      this.updateSelectedValue([]);
    }

    this.setState({ query }, () => {
      this.handleSearchDebounced(query);
      if (onInputChange) {
        onInputChange(query);
      }
    });
  };

  handleOnPaste = (event) => {
    const { allowNew, multiple, chipSeparators } = this.props;
    const { selected } = this.state;

    if (allowNew && multiple && chipSeparators.length > 0) {
      event.preventDefault();
      const value = event.clipboardData.getData('text');
      if (value) {
        const regex = new RegExp(chipSeparators.join('|'));
        const pastedChips = value
          .split(regex)
          .map((label) => ({ label: label.trim() }))
          .filter((chip) => chip.label);

        this.updateSelectedValue([...selected, ...pastedChips]);
      }
    }
  };

  handleOnKeyDown = (event) => {
    const { showSuggestions, allowNew, multiple, chipSeparators, options } = this.props;
    const { keyboardFocusedOptionIndex, query, selected } = this.state;
    const chipsMode = !showSuggestions && allowNew && multiple;

    if (
      chipsMode &&
      ['Enter', 'Tab', ...chipSeparators].indexOf(event.key) !== -1 &&
      query.trim()
    ) {
      event.preventDefault();
      this.selectItem({ label: query });
    } else {
      switch (event.keyCode) {
        case KeyCodes.DOWN:
          event.preventDefault();
          this.moveFocusedOption(1);
          break;
        case KeyCodes.UP:
          event.preventDefault();
          this.moveFocusedOption(-1);
          break;
        case KeyCodes.ENTER:
          event.preventDefault();
          if (options[keyboardFocusedOptionIndex]) {
            this.selectItem(options[keyboardFocusedOptionIndex]);
          } else if (allowNew && query.trim()) {
            this.selectItem({ label: query });
          }
          break;
        case KeyCodes.BACKSPACE:
          if (multiple && !query && selected.length > 0) {
            this.updateSelectedValue(selected.slice(0, -1));
          }
          break;
        default:
          break;
      }
    }
  };

  moveFocusedOption(offset) {
    this.setState((prevState) => {
      const { keyboardFocusedOptionIndex } = prevState;
      const { options } = this.props;
      let index = 0;
      if (keyboardFocusedOptionIndex !== null) {
        index = clamp(keyboardFocusedOptionIndex + offset, 0, options.length - 1);
      }
      return {
        keyboardFocusedOptionIndex: index,
      };
    });
  }

  selectItem = (item) => {
    const { multiple } = this.props;
    let selected = [...this.state.selected];
    let query;
    if (multiple) {
      selected.push(item);
      query = '';
    } else {
      selected = [item];
      query = item.label;
    }

    this.updateSelectedValue(selected);
    this.hideMenu();
    this.setState({
      query,
    });
  };

  stopPropagation = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (event.nativeEvent && event.nativeEvent.stopImmediatePropagation) {
      event.nativeEvent.stopImmediatePropagation();
    }
  };

  handleSearch = (query) => {
    const { onSearch } = this.props;
    if (onSearch) {
      onSearch(query);
    }

    this.setState((prevState) => ({
      keyboardFocusedOptionIndex: prevState.keyboardFocusedOptionIndex === null ? null : 0,
    }));
  };

  handleDocumentClick = () => {
    if (this.state.optionsShown) {
      this.hideMenu();
      const { allowNew, onBlur, autoFillOnBlur } = this.props;
      const { query } = this.state;
      this.setState({
        isFocused: false,
      });
      if (allowNew && autoFillOnBlur && query.trim()) {
        this.selectItem({ label: query });
      }

      if (onBlur) {
        onBlur();
      }
    }
  };

  showMenu = () => {
    this.setState(
      {
        isFocused: true,
        optionsShown: true,
      },
      () => {
        addClickClassToDocumentOnIos();
        document.addEventListener('click', this.handleDocumentClick, false);
      },
    );
  };

  hideMenu = () => {
    this.setState(
      {
        optionsShown: false,
        keyboardFocusedOptionIndex: null,
      },
      () => {
        removeClickClassFromDocumentOnIos();
        document.removeEventListener('click', this.handleDocumentClick, false);
      },
    );
  };

  updateSelectedValue = (selected) => {
    const { onChange, validateChip } = this.props;

    const errorState = selected.some((chip) => !validateChip(chip));
    this.setState({ selected, errorState }, () => {
      onChange(selected);
    });
  };

  clear = (event) => {
    event.preventDefault();
    if (this.state.selected.length > 0) {
      this.updateSelectedValue([]);
    }

    this.setState({
      query: '',
    });
  };

  removeChip = (option) => {
    const { selected } = this.state;

    if (selected.length > 0) {
      this.updateSelectedValue([...selected.filter((selectedOption) => selectedOption !== option)]);
    }
  };

  renderChip = (option, idx) => {
    const valid = this.props.validateChip(option);

    return (
      <Chip
        key={idx}
        hasError={!valid}
        label={option.label}
        onRemove={() => this.removeChip(option)}
      />
    );
  };

  renderMenu = ({
    footer,
    options,
    id,
    keyboardFocusedOptionIndex,
    query,
    allowNew,
    showNewEntry,
    dropdownOpen,
  }) => {
    const optionsToRender = [...options];
    if (
      allowNew &&
      query.trim() &&
      options.every((option) => option.label.trim().toUpperCase() !== query.trim().toUpperCase()) &&
      showNewEntry
    ) {
      optionsToRender.push({
        label: query,
      });
    }
    return (
      <div
        className={classNames('dropdown btn-group btn-block', { open: dropdownOpen })}
        id={`menu-${id}`}
      >
        <ul className="dropdown-menu" role="menu" aria-labelledby="dropdownMenu1">
          {optionsToRender.map((option, idx) => (
            <TypeaheadOption
              key={`${option.label}${idx.toString()}`}
              query={query}
              option={option}
              selected={keyboardFocusedOptionIndex === idx}
              onClick={(event) => {
                this.onOptionSelected(event, option);
              }}
            />
          ))}
          {footer}
        </ul>
      </div>
    );
  };

  render() {
    const {
      id,
      placeholder,
      multiple,
      size,
      addon,
      name,
      clearable,
      allowNew,
      footer,
      showSuggestions,
      showNewEntry,
      options,
      minQueryLength,
      autoFocus,
      maxHeight,
      alert,
      inputAutoComplete,
    } = this.props;

    const { errorState, query, selected, optionsShown, keyboardFocusedOptionIndex } = this.state;

    const clearButton = clearable && (query || selected.length > 0);

    const dropdownOpen = optionsShown && showSuggestions && query.length >= minQueryLength;

    const menu = this.renderMenu({
      footer,
      options,
      keyboardFocusedOptionIndex,
      query,
      allowNew,
      showNewEntry,
      dropdownOpen,
    });

    const hasError = errorState || (alert && alert.type === InlineAlert.Type.ERROR);
    const displayAlert = (!errorState && alert) || (alert && alert.type === InlineAlert.Type.ERROR);
    const hasWarning = displayAlert && alert.type === InlineAlert.Type.WARNING;
    return (
      <div
        id={id}
        className={classNames('typeahead', `typeahead-${size}`, {
          'typeahead--has-value': selected.length > 0,
          'typeahead--empty': selected.length === 0,
          'typeahead--multiple': multiple,
          open: dropdownOpen,
        })}
        onClick={this.stopPropagation}
      >
        <div
          className={classNames('form-group', { 'has-error': hasError, 'has-warning': hasWarning })}
        >
          <div className={`input-group input-group-${size}`}>
            {addon && <span className="input-group-addon">{addon}</span>}

            <TypeaheadInput
              {...{
                autoFocus,
                multiple,
                optionsShown,
                placeholder,
                selected,
                maxHeight,
              }}
              name={name}
              value={query}
              typeaheadId={id}
              renderChip={this.renderChip}
              onChange={this.handleOnChange}
              onKeyDown={this.handleOnKeyDown}
              onFocus={this.handleOnFocus}
              onPaste={this.handleOnPaste}
              autoComplete={inputAutoComplete}
            />

            {clearButton && (
              <div className="input-group-addon">
                <button type="button" className="btn-unstyled" onClick={this.clear}>
                  <CrossIcon />
                </button>
              </div>
            )}
          </div>
          {displayAlert && <InlineAlert type={alert.type}>{alert.message}</InlineAlert>}
          {menu}
        </div>
      </div>
    );
  }
}

Typeahead.propTypes = {
  id: Types.string.isRequired,
  name: Types.string.isRequired,
  options: Types.arrayOf(
    Types.shape({
      label: Types.string.isRequired,
      note: Types.string,
      secondary: Types.string,
    }),
  ).isRequired,
  initialValue: Types.arrayOf(
    Types.shape({
      label: Types.string.isRequired,
      note: Types.string,
      secondary: Types.string,
    }),
  ),
  onChange: Types.func.isRequired,
  allowNew: Types.bool,
  autoFocus: Types.bool,
  clearable: Types.bool,
  multiple: Types.bool,
  showSuggestions: Types.bool,
  showNewEntry: Types.bool,
  searchDelay: Types.number,
  maxHeight: Types.number,
  minQueryLength: Types.number,
  addon: Types.node,
  placeholder: Types.string,
  alert: Types.shape({
    message: Types.string.isRequired,
    type: Types.oneOf([Typeahead.Type.ERROR, Typeahead.Type.WARNING]).isRequired,
  }),
  footer: Types.node,
  validateChip: Types.func,
  onSearch: Types.func,
  onBlur: Types.func,
  onInputChange: Types.func,
  onFocus: Types.func,
  chipSeparators: Types.arrayOf(Types.string),
  size: Types.oneOf([Typeahead.Size.MEDIUM, Typeahead.Size.LARGE]),
  inputAutoComplete: Types.string,
  autoFillOnBlur: Types.bool,
};

Typeahead.defaultProps = {
  allowNew: false,
  autoFocus: false,
  clearable: true,
  multiple: false,
  maxHeight: null,
  showSuggestions: true,
  showNewEntry: true,
  searchDelay: SEARCH_DELAY,
  minQueryLength: DEFAULT_MIN_QUERY_LENGTH,
  addon: null,
  placeholder: null,
  alert: null,
  footer: null,
  size: Typeahead.Size.MEDIUM,
  chipSeparators: [],
  initialValue: [],
  onSearch: null,
  onBlur: null,
  onInputChange: null,
  onFocus: null,
  validateChip: () => true,
  inputAutoComplete: 'new-password',
  autoFillOnBlur: true,
};
