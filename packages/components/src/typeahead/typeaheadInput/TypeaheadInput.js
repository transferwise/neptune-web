/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import Types from 'prop-types';
import classnames from 'classnames';

const DEFAULT_INPUT_MIN_WIDTH = 10;

export default class TypeaheadInput extends Component {
  state = {
    inputWidth: DEFAULT_INPUT_MIN_WIDTH,
  };

  static propTypes = {
    typeaheadId: Types.string.isRequired,
    name: Types.string.isRequired,
    autoFocus: Types.bool,
    multiple: Types.bool.isRequired,
    value: Types.string.isRequired,
    selected: Types.arrayOf(Types.object),
    placeholder: Types.string,
    optionsShown: Types.bool,
    maxHeight: Types.number,

    onChange: Types.func.isRequired,
    renderChip: Types.func.isRequired,
    onKeyDown: Types.func.isRequired,
    onFocus: Types.func.isRequired,
    onPaste: Types.func.isRequired,
  };

  static defaultProps = {
    autoFocus: false,
    maxHeight: null,
    placeholder: '',
    optionsShown: false,
    selected: [],
  };

  componentDidMount() {
    const { autoFocus } = this.props;
    if (autoFocus) {
      this.inputRef.focus();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value && this.props.multiple) {
      this.recalculateWidth();
    }
  }

  recalculateWidth = () => {
    requestAnimationFrame(() => {
      this.setState({
        inputWidth: Math.max(DEFAULT_INPUT_MIN_WIDTH, this.sizerRef.scrollWidth + 10),
      });
    });
  };

  renderInput = () => {
    const {
      typeaheadId,
      autoFocus,
      multiple,
      name,
      optionsShown,
      placeholder,
      selected,
      value,
      onChange,
      onKeyDown,
      onFocus,
      onPaste,
    } = this.props;
    const { inputWidth } = this.state;

    const hasPlaceholder = !multiple || selected.length === 0;
    return (
      <input
        className={classnames({
          'typeahead__input form-control': multiple,
          'form-control': !multiple,
        })}
        type="text"
        ref={ref => {
          this.inputRef = ref;
        }}
        name={name}
        id={`input-${typeaheadId}`}
        autoFocus={autoFocus}
        placeholder={hasPlaceholder ? placeholder : ''}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onClick={onFocus}
        onFocus={onFocus}
        onPaste={onPaste}
        aria-autocomplete="list"
        aria-expanded={optionsShown}
        aria-haspopup="listbox"
        aria-controls={`menu-${typeaheadId}`}
        autoComplete="new-password"
        role="combobox"
        value={value}
        style={multiple && selected.length > 0 ? { width: inputWidth } : {}}
      />
    );
  };
  render() {
    const { multiple, selected, value, maxHeight, renderChip } = this.props;

    if (multiple) {
      return (
        <div
          className="form-control typeahead__input-container"
          onClick={() => {
            this.inputRef.focus();
          }}
          style={maxHeight && { maxHeight }}
        >
          <div className="typeahead__input-wrapper">
            {selected && selected.map((chip, idx) => renderChip(chip, idx))}

            {this.renderInput()}
            <div className="typeahead__input-aligner" />
          </div>
          <div
            ref={ref => {
              this.sizerRef = ref;
            }}
            className="sizer form-control typeahead__input"
          >
            {value}
          </div>
        </div>
      );
    } else return this.renderInput();
  }
}
