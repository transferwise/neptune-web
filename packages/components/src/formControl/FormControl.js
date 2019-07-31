import React, { PureComponent, Fragment } from 'react';
import Types from 'prop-types';
import { FormControlType } from './FormControlType';

import {
  Checkbox,
  DateInput,
  DateLookup,
  InputWithDisplayFormat,
  PhoneNumberInput,
  Radio,
  Select,
  TextareaWithDisplayFormat,
  Upload,
} from '..';

import { Sizes } from '../common';

import './FormControl.less';

const ACCEPTED_FORMAT = ['*', 'image/*', 'application/*'];

export default class FormControl extends PureComponent {
  static propTypes = {
    type: Types.oneOf(Object.values(FormControlType)),
    name: Types.string.isRequired,
    id: Types.string,
    placeholder: Types.string,
    step: Types.number,
    locale: Types.string,
    helpImage: Types.string,
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
    displayPattern: Types.string,
    value: Types.oneOfType([Types.string, Types.number, Types.bool, Types.object]),
    // @TODO To be implemented in a second iteration.
    // validationAsync: Types.func
    searchPlaceholder: Types.string,
    size: Types.oneOf(Object.values(Sizes)),
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
      psFailureText: Types.string,
      psProcessingText: Types.string,
      psSuccessText: Types.string,
      size: Types.string,
      usAccept: Types.oneOf(ACCEPTED_FORMAT),
      usButtonText: Types.string,
      usDisabled: Types.bool,
      usDropMessage: Types.string,
      usHelpImage: Types.string,
      usLabel: Types.string,
      usPlaceholder: Types.string,
    }),
    shortDate: Types.bool,
    selectedOption: Types.shape({
      value: Types.any.isRequired,
      label: Types.node,
      icon: Types.string,
      currency: Types.string,
      note: Types.node,
      secondary: Types.node,
    }),
  };

  static defaultProps = {
    type: FormControlType.TEXT,
    id: null,
    placeholder: null,
    locale: null,
    options: [],
    step: 1,
    helpImage: '',
    disabled: false,
    readOnly: false,
    required: true,
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
    size: Sizes.MEDIUM,
    uploadProps: {},
    displayPattern: null,
    label: '',
    shortDate: false,
    selectedOption: null,
  };

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

  setControlTouched = () => {
    if (!this.state.touched) {
      this.setState({ touched: true });
    }
  };

  handleOnChange = event => {
    let value;
    this.setControlTouched();
    const { type } = this.props;

    if (typeof event === 'object') {
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

    this.props.onChange(value);
  };

  handleOnFocus = event => this.props.onFocus && this.props.onFocus(event);

  handleOnBlur = event => {
    this.setControlTouched();
    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  render() {
    const {
      name,
      placeholder,
      step,
      locale,
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
      size,
      uploadProps,
      label,
      shortDate,
      id,
      minDate,
      maxDate,
      value,
    } = this.props;

    switch (type) {
      case FormControlType.RADIO:
        return (
          <Fragment>
            {options.map((option, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Fragment key={index}>
                <Radio
                  label={option.label}
                  id={`${id}-${index}`}
                  name={name}
                  secondary={option.secondary}
                  onFocus={this.handleOnFocus}
                  onChange={() => {
                    this.setState({ selectedOption: option });
                    this.handleOnChange(option);
                  }}
                  onBlur={this.handleOnBlur}
                  checked={
                    this.state.selectedOption && this.state.selectedOption.value === option.value
                  }
                  disabled={disabled}
                />
              </Fragment>
            ))}
          </Fragment>
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
          />
        );

      case FormControlType.SELECT:
        return (
          <Select
            id={id}
            selected={
              this.state.selectedOption &&
              options.find(option => this.state.selectedOption.value === option.value)
            }
            options={options}
            onChange={newValue => {
              this.setState({ selectedOption: newValue });
              this.handleOnChange(newValue);
            }}
            onFocus={this.handleOnFocus}
            onBlur={this.handleOnBlur}
            required={required}
            disabled={disabled}
            placeholder={placeholder}
            searchPlaceholder={searchPlaceholder}
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
            locale={locale}
            onBlur={this.handleOnBlur}
            onChange={this.handleOnChange}
            onFocus={this.handleOnFocus}
            size={size}
            value={value}
          />
        );

      case FormControlType.DATELOOKUP:
        return (
          <DateLookup
            value={value}
            min={minDate}
            max={maxDate}
            locale={locale}
            placeholder={placeholder}
            label={label}
            onChange={this.handleOnChange}
            shortDate={shortDate}
            disabled={disabled}
            onBlur={this.handleOnBlur}
            onFocus={this.handleOnFocus}
          />
        );

      case FormControlType.TEL:
        return (
          <PhoneNumberInput
            disabled={disabled}
            locale={locale}
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
            <TextareaWithDisplayFormat
              displayPattern={this.props.displayPattern}
              {...textareaProps}
            />
          );
        }
        return <textarea {...textareaProps} />;
      }

      case FormControlType.UPLOAD: {
        return (
          <Upload
            {...uploadProps}
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
