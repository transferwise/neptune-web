import React, { Component, Fragment } from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

import Alert, { AlertSize, AlertArrowPosition, AlertType } from '../alert/Alert';
import FormControl from '../formControl';
import { Sizes } from '../common';
import { FormControlType } from '../formControl/FormControlType';
import InstructionsList from '../instructionsList';

import { getControlType } from '../common/requirements';
import { getValidationFailures } from '../common/validation/validation-failures';

export const FieldTypes = {
  STRING: 'string',
  NUMBER: 'number',
  INTEGER: 'integer',
  BOOLEAN: 'boolean',
};

export const FieldFormats = {
  DATE: 'date',
  PHONE: 'phone',
  BASE_64_URL: 'base64url',
  PASSWORD: 'password',
  EMAIL: 'email',
  URI: 'uri',
};

const DefaultValidationMessages = {
  REQUIRED: 'Required',
  PATTERN: 'Incorrect format',
  MINLENGTH: 'The value is too short',
  MAXLENGTH: 'The value is too long',
  MIN: 'The value is too low',
  MAX: 'The value is too high',
};

export default class Field extends Component {
  static propTypes = {
    name: Types.string.isRequired,
    value: Types.oneOfType([
      Types.string,
      Types.number,
      Types.bool,
      Types.object,
      Types.shape({
        value: Types.any.isRequired,
        label: Types.node,
        icon: Types.string,
        currency: Types.string,
        note: Types.node,
        secondary: Types.node,
      }),
    ]),
    field: Types.shape({
      type: Types.oneOf(Object.values(FieldTypes)).isRequired,
      label: Types.string.isRequired,
      required: Types.bool,
      disabled: Types.bool,
      hidden: Types.bool,
      readOnly: Types.bool,
      autoComplete: Types.bool,
      placeholder: Types.string,
      searchPlaceholder: Types.string,
      control: Types.oneOf(Object.values(FormControlType)),
      format: Types.oneOf(Object.values(FieldFormats)),
      displayPattern: Types.string,
      help: Types.shape({
        message: Types.string,
        image: Types.string,
        list: Types.arrayOf(Types.string),
        do: Types.arrayOf(Types.string),
        dont: Types.arrayOf(Types.string),
      }),

      pattern: Types.string,
      minLength: Types.number,
      maxLength: Types.number,

      minimum: Types.number,
      maximum: Types.number,

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
        usAccept: Types.oneOf(['*', 'image/*', 'application/*']),
        usButtonText: Types.string,
        usDisabled: Types.bool,
        usDropMessage: Types.string,
        usHelpImage: Types.string,
        usLabel: Types.string,
        usPlaceholder: Types.string,
      }),

      options: Types.arrayOf(
        Types.shape({
          id: Types.string,
          label: Types.oneOfType([Types.node, Types.string]).isRequired,
          value: Types.oneOfType([
            Types.number,
            Types.string,
            Types.bool,
            Types.object,
            Types.instanceOf(Date),
          ]).isRequired,
          header: Types.node,
          icon: Types.string,
          currency: Types.string,
          note: Types.node,
          secondary: Types.oneOfType([Types.node, Types.string]),
          separator: Types.bool,
          disabled: Types.bool,
        }),
      ),
      size: Types.oneOf(Object.values(Sizes)),

      validationMessages: Types.shape({
        required: Types.string,
        pattern: Types.string,
        minlength: Types.string,
        maxlength: Types.string,
        min: Types.string,
        max: Types.string,
      }),
    }).isRequired,

    locale: Types.string,
    countryCode: Types.string,
    onChange: Types.func.isRequired,
    onFocus: Types.func,
    onBlur: Types.func,
    errorMessage: Types.string,
    warningMessage: Types.string,
    label: Types.string,
  };

  static defaultProps = {
    locale: 'en-GB',
    countryCode: null,
    value: null,
    errorMessage: null,
    warningMessage: null,
    onFocus: null,
    onBlur: null,
    label: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      focused: false,
      changed: false,
      error: props.errorMessage,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errorMessage !== this.props.errorMessage) {
      this.setState({ error: nextProps.errorMessage });
    }
  }

  onFocus(value) {
    const { onFocus } = this.props;
    if (onFocus) {
      onFocus(value);
    }
    this.setState({ focused: true });
  }

  onBlur(value) {
    const { onBlur } = this.props;

    if (onBlur) {
      onBlur(value);
    }
    this.setState({ focused: false });
  }

  onChange(value) {
    this.props.onChange(value);
    this.setState({ changed: true, focused: true, error: null });
  }

  validateValue(newValue) {
    const validationFailures = {};
    const { field } = this.props;
    const validationFailuresKeys = getValidationFailures(newValue, field);
    validationFailuresKeys.forEach(failure => {
      const messageKey = failure.toLowerCase();

      const message =
        (field.validationMessages && field.validationMessages[messageKey]) ||
        DefaultValidationMessages[messageKey.toUpperCase()];

      if (message) {
        validationFailures[messageKey] = message;
      }
    });
    return validationFailures;
  }

  objectSizeOf = obj => (obj ? Object.keys(obj).length : 0);

  updateAlert(control) {
    const { value, field, errorMessage, warningMessage } = this.props;
    const { focused, changed, error } = this.state;

    const validationFailures = changed && !focused ? this.validateValue(value) : {};

    if (this.objectSizeOf(validationFailures) > 0) {
      return {
        type: AlertType.Error,
        content: Object.keys(validationFailures).map(key => (
          <div key={key}>{validationFailures[key]}</div>
        )),
      };
    } else if (error && errorMessage) {
      return {
        type: AlertType.Error,
        content: <Fragment>{errorMessage}</Fragment>,
      };
    } else if (warningMessage) {
      return {
        type: AlertType.Warning,
        content: <Fragment>{warningMessage}</Fragment>,
      };
    } else if (focused && field.help && field.help.message) {
      return {
        type: AlertType.Info,
        content: <Fragment>{field.help.message}</Fragment>,
      };
    } else if (focused && field.help && field.help.list && field.help.list.length > 0) {
      return {
        type: AlertType.Info,
        // eslint-disable-next-line react/no-array-index-key
        content: field.help.list.map((item, index) => <div key={index}>{item}</div>),
      };
    } else if (
      focused &&
      field.help &&
      field.help.do &&
      field.help.do.length > 0 &&
      field.help.dont &&
      field.help.dont.length > 0
    ) {
      return {
        type: AlertType.Info,
        content: (
          <div className="m-b-1">
            <InstructionsList dos={field.help.do} donts={field.help.dont} />
          </div>
        ),
      };
    } else if (focused && control !== FormControlType.FILE && field.help && field.help.image) {
      return {
        type: AlertType.Info,
        content: <img className="thumbnail m-y-2" src={`${field.help.image}`} alt={field.label} />,
      };
    }
    return {
      type: null,
      content: null,
    };
  }

  render() {
    const { name, field, value, locale, label } = this.props;

    const control = field.control || getControlType(field);
    const alert = this.updateAlert(control);

    const showAlert = !!alert.content;
    const showLabel =
      control !== FormControlType.FILE &&
      control !== FormControlType.UPLOAD &&
      control !== FormControlType.CHECKBOX;

    return (
      <div
        className={classNames('form-group', `tw-field-${name}`, {
          'has-info': alert.type === AlertType.Info && showAlert,
          'has-error': alert.type === AlertType.Error && showAlert,
          'has-warning': alert.type === AlertType.Warning && showAlert,
          hidden: field.hidden,
        })}
      >
        {showLabel && (
          // eslint-disable-next-line jsx-a11y/label-has-for
          <label className="control-label">{label}</label>
        )}
        <FormControl
          {...field}
          type={control}
          name={name}
          locale={locale}
          value={value}
          onChange={event => this.onChange(event)}
          onFocus={event => this.onFocus(event)}
          onBlur={event => this.onBlur(event)}
        />
        {showAlert && (
          <Alert type={alert.type} size={AlertSize.Small} arrow={AlertArrowPosition.UpLeft}>
            {alert.content}
          </Alert>
        )}
      </div>
    );
  }
}
