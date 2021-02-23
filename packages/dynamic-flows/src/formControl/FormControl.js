import React, { PureComponent } from 'react';
import Types from 'prop-types';
import {
  Checkbox,
  DateInput,
  DateLookup,
  InputWithDisplayFormat,
  PhoneNumberInput,
  RadioGroup,
  Select,
  TextareaWithDisplayFormat,
  Upload,
  Tabs,
} from '@transferwise/components';

import { Size, MonthFormat, DateMode, FormControlType } from '../common';

import './FormControl.css';

const ACCEPTED_FORMAT = ['*', 'image/*', 'application/*'];

export default class FormControl extends PureComponent {
  static Type = FormControlType;

  static Size = Size;

  static MonthFormat = MonthFormat;

  static DateMode = DateMode;

  constructor(props) {
    super(props);
    this.state = {
      selectedOption: props.selectedOption,
      touched: false,
      prevValue: props.value,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.prevValue !== nextProps.value) {
      return { prevValue: nextProps.value, value: nextProps.value };
    }
    return null;
  }

  /**
   * autocomplete hides our form help so we need to disable it when help text
   * is present. Chrome ignores autocomplete=off, the only way to disable it is
   * to provide an 'invalid' value, for which 'disabled' serves.
   */
  getAutocompleteStatus = () => (this.props.autoComplete ? 'on' : 'disabled');

  getValue(event) {
    let value;
    const { type } = this.props;

    if (event && typeof event === 'object') {
      if (event.target) {
        // This is a SyntheticEvent coming from React
        // Input type number target value is a string and needs to be a number.
        if (type === FormControlType.NUMBER) {
          value = parseFloat(event.target.value);
        } else {
          ({ value } = event.target);
        }
      } else if (event.value || event.value === 0) {
        // If we don't have a target but the emitted event
        // has a value it's coming from our Select or Radio
        // components
        ({ value } = event);
      } else {
        // In any other case we just emit the event as it is
        value = event;
      }
    } else {
      // This is coming from our Checkbox component which is
      // a boolean basically, so we must emit that value
      value = event;
    }
    return value;
  }

  handleOnChange = (event) => {
    const value = this.getValue(event);

    this.props.onChange(value);
  };

  handleOnFocus = (event) => this.props.onFocus && this.props.onFocus(this.getValue(event));

  handleOnBlur = (event) => this.props.onBlur && this.props.onBlur(this.getValue(event));

  getSelectedOption = (options) => {
    let selectedOption;
    if (this.state.selectedOption !== null && typeof this.state.selectedOption !== 'undefined') {
      selectedOption = options.find((option) => this.state.selectedOption.value === option.value);
    }
    if (this.props.value !== null && typeof this.props.value !== 'undefined') {
      selectedOption = options.find((option) => this.props.value === option.value);
    }
    return selectedOption;
  };

  getSelectedOptionFromIndex = (options, newIndex) => {
    return options.find((option) => option.value === newIndex);
  };

  mapOption = (option) => {
    return {
      ...option,
      disabled: option.disabled || this.props.disabled,
      readOnly: this.props.readOnly,
    };
  };

  render() {
    const {
      name,
      placeholder,
      step,
      countryCode,
      type,
      options,
      disabled,
      readOnly,
      required,
      minLength,
      maxLength,
      min,
      max,
      searchPlaceholder,
      searchValue,
      onSearchChange,
      size,
      uploadProps,
      label,
      monthFormat,
      id,
      minDate,
      maxDate,
      value,
      mode,
    } = this.props;

    switch (type) {
      case FormControlType.RADIO:
        return (
          <RadioGroup
            radios={options.map(this.mapOption)}
            onChange={this.handleOnChange}
            name={name}
            selectedValue={value}
          />
        );

      case FormControlType.CHECKBOX:
        return (
          <Checkbox
            checked={value}
            disabled={disabled}
            label={label}
            onBlur={this.handleOnBlur}
            onChange={this.handleOnChange}
            onFocus={this.handleOnFocus}
            required={required}
            readOnly={readOnly}
          />
        );

      case FormControlType.SELECT:
        return (
          <Select
            id={id}
            selected={this.getSelectedOption(options)}
            options={options}
            onChange={(newValue) => {
              this.setState({ selectedOption: newValue });
              this.handleOnChange(newValue);
            }}
            search={options.length >= 20}
            onFocus={this.handleOnFocus}
            onBlur={this.handleOnBlur}
            required={required}
            disabled={disabled}
            placeholder={placeholder}
            searchPlaceholder={searchPlaceholder}
            searchValue={searchValue}
            onSearchChange={onSearchChange}
          />
        );

      case FormControlType.TAB:
        return (
          <Tabs
            id={id}
            selected={this.getSelectedOption(options)?.value || 0}
            tabs={options.map((option) => ({
              title: option.label,
              content: <></>,
              disabled: option.disabled || false,
            }))}
            onTabSelect={(newIndex) => {
              this.setState({ selectedOption: this.getSelectedOptionFromIndex(options, newIndex) });
              this.handleOnChange(newIndex);
            }}
            name={id}
          />
        );

      case FormControlType.NUMBER:
        return (
          <input
            autoComplete={this.getAutocompleteStatus()}
            className="form-control"
            disabled={disabled}
            id={id}
            max={max}
            min={min}
            onBlur={this.handleOnBlur}
            onChange={this.handleOnChange}
            onFocus={this.handleOnFocus}
            placeholder={placeholder}
            readOnly={readOnly}
            required={required}
            step={step}
            type="number"
            value={value}
          />
        );

      case FormControlType.HIDDEN:
        return <input type="hidden" name={name} value={value} id={id} />;

      case FormControlType.PASSWORD:
        return (
          <input
            autoComplete={this.getAutocompleteStatus()}
            className="form-control"
            disabled={disabled}
            id={id}
            onBlur={this.handleOnBlur}
            onChange={this.handleOnChange}
            onFocus={this.handleOnFocus}
            placeholder={placeholder}
            readOnly={readOnly}
            required={required}
            type="password"
            value={value}
          />
        );

      case FormControlType.DATE:
      case FormControlType.DATETIME:
        return (
          <DateInput
            disabled={disabled}
            onBlur={this.handleOnBlur}
            onChange={this.handleOnChange}
            onFocus={this.handleOnFocus}
            size={size}
            value={value}
            mode={mode}
            monthFormat={monthFormat}
          />
        );

      case FormControlType.DATELOOKUP:
        return (
          <DateLookup
            value={value}
            min={minDate}
            max={maxDate}
            placeholder={placeholder}
            label={label}
            onChange={this.handleOnChange}
            monthFormat={monthFormat}
            disabled={disabled}
            onBlur={this.handleOnBlur}
            onFocus={this.handleOnFocus}
          />
        );

      case FormControlType.TEL:
        return (
          <PhoneNumberInput
            disabled={disabled}
            countryCode={countryCode}
            onBlur={this.handleOnBlur}
            onChange={this.handleOnChange}
            onFocus={this.handleOnFocus}
            placeholder={placeholder}
            required={required}
            searchPlaceholder={searchPlaceholder}
            size={size}
            initialValue={value}
          />
        );

      case FormControlType.TEXTAREA: {
        const textareaProps = {
          className: 'form-control tw-form-control',
          id,
          name,
          placeholder,
          value,
          readOnly,
          required,
          minLength,
          maxLength,
          onChange: this.handleOnChange,
          onFocus: this.handleOnFocus,
          onBlur: this.handleOnBlur,
          disabled,
          autoComplete: this.getAutocompleteStatus(),
        };

        if (this.props.displayPattern) {
          return (
            <TextareaWithDisplayFormat
              displayPattern={this.props.displayPattern}
              {...textareaProps}
            />
          );
        }
        return <textarea {...textareaProps} />;
      }

      case FormControlType.FILE:
      case FormControlType.UPLOAD: {
        return (
          <Upload
            {...uploadProps}
            usDisabled={uploadProps.usDisabled || disabled}
            onSuccess={this.handleOnChange}
            onFailure={this.handleOnChange}
            onStart={this.handleOnChange}
            onCancel={this.handleOnChange}
          />
        );
      }

      case FormControlType.TEXT:
      default: {
        const inputProps = {
          type: 'text',
          className: 'form-control',
          id,
          name,
          placeholder,
          value,
          readOnly,
          required,
          minLength,
          maxLength,
          onChange: this.handleOnChange,
          onFocus: this.handleOnFocus,
          onBlur: this.handleOnBlur,
          disabled,
          autoComplete: this.getAutocompleteStatus(),
        };

        if (this.props.displayPattern) {
          return (
            <InputWithDisplayFormat displayPattern={this.props.displayPattern} {...inputProps} />
          );
        }
        return <input {...inputProps} />;
      }
    }
  }
}

FormControl.propTypes = {
  type: Types.oneOf([
    FormControl.Type.RADIO,
    FormControl.Type.CHECKBOX,
    FormControl.Type.SELECT,
    FormControl.Type.FILE,
    FormControl.Type.DATE,
    FormControl.Type.DATETIME,
    FormControl.Type.DATELOOKUP,
    FormControl.Type.TEL,
    FormControl.Type.NUMBER,
    FormControl.Type.HIDDEN,
    FormControl.Type.PASSWORD,
    FormControl.Type.TEXT,
    FormControl.Type.TEXTAREA,
    FormControl.Type.UPLOAD,
    FormControl.Type.TAB,
  ]),
  name: Types.string.isRequired,
  id: Types.string,
  placeholder: Types.string,
  step: Types.number,
  countryCode: Types.string,
  options: Types.arrayOf(
    Types.shape({
      label: Types.string.isRequired,
      value: Types.oneOfType([
        Types.number,
        Types.string,
        Types.bool,
        Types.object,
        Types.instanceOf(Date),
      ]).isRequired,
      note: Types.string,
      secondary: Types.string,
    }),
  ),
  label: Types.string,
  disabled: Types.bool,
  readOnly: Types.bool,
  required: Types.bool,
  autoComplete: Types.bool,
  onChange: Types.func.isRequired,
  onBlur: Types.func,
  onFocus: Types.func,
  minLength: Types.number,
  maxLength: Types.number,
  min: Types.number,
  max: Types.number,
  minDate: Types.instanceOf(Date),
  maxDate: Types.instanceOf(Date),
  mode: Types.oneOf([FormControl.DateMode.DAY_MONTH_YEAR, FormControl.DateMode.MONTH_YEAR]),
  displayPattern: Types.string,
  value: Types.oneOfType([Types.string, Types.number, Types.bool, Types.object]),
  // @TODO To be implemented in a second iteration.
  // validationAsync: Types.func
  searchPlaceholder: Types.string,
  searchValue: Types.string,
  onSearchChange: Types.func,
  size: Types.oneOf([
    FormControl.Size.EXTRA_SMALL,
    FormControl.Size.SMALL,
    FormControl.Size.MEDIUM,
    FormControl.Size.LARGE,
    FormControl.Size.EXTRA_LARGE,
  ]),
  uploadProps: Types.shape({
    animationDelay: Types.number,
    csButtonText: Types.string,
    csFailureText: Types.string,
    csSuccessText: Types.string,
    csTooLargeMessage: Types.string,
    csWrongTypeMessage: Types.string,
    httpOptions: Types.shape({}),
    maxSize: Types.number,
    onCancel: Types.func,
    onFailure: Types.func,
    onStart: Types.func,
    onSuccess: Types.func,
    psButtonText: Types.string,
    psProcessingText: Types.string,
    size: Types.string,
    usAccept: Types.oneOf(ACCEPTED_FORMAT),
    usButtonText: Types.string,
    usDisabled: Types.bool,
    usDropMessage: Types.string,
    usHelpImage: Types.string,
    usLabel: Types.string,
    usPlaceholder: Types.string,
  }),
  monthFormat: Types.oneOf([FormControl.MonthFormat.LONG, FormControl.MonthFormat.SHORT]),
  selectedOption: Types.shape({
    // eslint-disable-next-line react/forbid-prop-types
    value: Types.any.isRequired,
    label: Types.node,
    icon: Types.node,
    currency: Types.string,
    note: Types.node,
    secondary: Types.node,
  }),
};

FormControl.defaultProps = {
  type: FormControl.Type.TEXT,
  id: null,
  placeholder: null,
  countryCode: null,
  options: [],
  step: 1,
  disabled: false,
  readOnly: false,
  required: false,
  autoComplete: true,
  onBlur: null,
  onFocus: null,
  min: null,
  max: null,
  minDate: null,
  maxDate: null,
  minLength: null,
  maxLength: null,
  value: null,
  searchPlaceholder: null,
  searchValue: '',
  onSearchChange: null,
  size: FormControl.Size.MEDIUM,
  uploadProps: {},
  displayPattern: null,
  label: '',
  monthFormat: FormControl.MonthFormat.LONG,
  mode: FormControl.DateMode.DAY_MONTH_YEAR,
  selectedOption: null,
};
