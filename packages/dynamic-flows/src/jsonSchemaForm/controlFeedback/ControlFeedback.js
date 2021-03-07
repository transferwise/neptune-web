import React from 'react';
import Types from 'prop-types';

import { Alert } from '@transferwise/components';

const ControlFeedback = (props) => {
  // Use validation messages from the schema if possible.
  const validationMessages = {
    ...props.validationMessages,
    ...props.schema.validationMessages,
  };

  const isErrorVisible = (props.submitted || !props.changed) && !!props.errors;
  const isValidationVisible =
    (props.submitted || (props.changed && props.blurred)) && !!props.validations.length;
  const isHelpVisible = props.focused && props.schema.help && !isValidationVisible;

  return (
    <div>
      {isErrorVisible && (
        <Alert type="error" size="sm">
          {props.errors}
        </Alert>
      )}
      {isValidationVisible && (
        <Alert type="error" size="sm">
          {props.validations.map((validation) => (
            <div key={validation}>{validationMessages[validation]}</div>
          ))}
        </Alert>
      )}
      {isHelpVisible && (
        <Alert type="info" size="sm">
          {props.schema.help.message && <div>{props.schema.help.message}</div>}
          {props.schema.help.list && (
            <ul className="list-unstyled">
              {props.schema.help.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </Alert>
      )}
    </div>
  );
};

const validationMessagesProps = Types.shape({
  min: Types.string,
  max: Types.string,
  minLength: Types.string,
  maxLength: Types.string,
  pattern: Types.string,
  required: Types.string,
});

ControlFeedback.propTypes = {
  changed: Types.bool.isRequired, // Has the control been iteracted with
  blurred: Types.bool.isRequired, // Has the control been blurred at least once
  focused: Types.bool.isRequired, // Is the control in focus
  submitted: Types.bool.isRequired,
  errors: Types.string,
  validations: Types.arrayOf(Types.string),
  validationMessages: validationMessagesProps,
  schema: Types.shape({
    help: Types.shape({
      message: Types.string,
      list: Types.arrayOf(Types.string),
    }),
    validationMessages: validationMessagesProps,
  }).isRequired,
};

ControlFeedback.defaultProps = {
  errors: '',
  validations: [],
  validationMessages: {
    type: 'Incorrect type',
    min: 'Value is too low',
    max: 'Value it too high',
    minLength: 'Value is too short',
    maxLength: 'Value is too long',
    pattern: 'Incorrect format',
    required: 'Value is required...',
  },
};

export default ControlFeedback;
