import React from 'react';
import Types from 'prop-types';

import { InlineAlert } from '@transferwise/components';

const ControlFeedback = (props) => {
  // Use validation messages from the schema if possible.
  const validationMessages = {
    ...props.validationMessages,
    ...props.schema.validationMessages,
  };

  const isErrorVisible = (props.submitted || !props.changed) && !!props.errors;
  const isValidationVisible =
    (props.submitted || (props.changed && props.blurred)) && !!props.validations.length;
  const isDescriptionVisible = props.focused && props.schema.description && !isValidationVisible;
  const isValidationAsyncSuccessMessageVisible = !!props.validationAsyncSuccessMessage;

  return (
    <div>
      {isErrorVisible && <InlineAlert type="error">{props.errors}</InlineAlert>}
      {isValidationVisible && (
        <InlineAlert type="error">
          {props.validations.map((validation) => (
            <div key={validation}>{validationMessages[validation]}</div>
          ))}
        </InlineAlert>
      )}
      {(isDescriptionVisible || isValidationAsyncSuccessMessageVisible) && (
        <InlineAlert type="info">
          {isDescriptionVisible && <div>{props.schema.description}</div>}
          {isValidationAsyncSuccessMessageVisible && (
            <div>{props.validationAsyncSuccessMessage}</div>
          )}
        </InlineAlert>
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
  changed: Types.bool.isRequired, // Has the control been interacted with
  blurred: Types.bool.isRequired, // Has the control been blurred at least once
  focused: Types.bool.isRequired, // Is the control in focus
  submitted: Types.bool.isRequired,
  errors: Types.string,
  validations: Types.arrayOf(Types.string),
  validationMessages: validationMessagesProps,
  schema: Types.shape({
    description: Types.string,
    validationMessages: validationMessagesProps,
  }).isRequired,
  validationAsyncSuccessMessage: Types.string,
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
  validationAsyncSuccessMessage: null,
};

export default ControlFeedback;
