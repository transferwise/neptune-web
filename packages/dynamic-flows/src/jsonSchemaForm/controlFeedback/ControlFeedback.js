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
      {isDescriptionVisible && (
        <InlineAlert type="info">
          {props.schema.description && <div>{props.schema.description}</div>}
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
