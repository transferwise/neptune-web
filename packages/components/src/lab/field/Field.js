import React, { useState, useEffect } from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

import Alert from '../../alert';
import { getValidationFailures } from './utils';
import WithNormaliser from '../../withNormaliser';

/**
 * Field component performs basic validation and provides a styled message to wrapped components.
 *
 * @param {boolean} [submitted=false] - Flag that indicates whether the field has been submitted or not.
 * @param {string} type - Type of the value to validate. This prop switches the type of validation perfomed. Currently 'string', 'number', 'boolean' are the value supported.
 * @param {function} onChange - Handler for onChange event.
 * @param {object} children - Element that needs to be validated. Currently the supported types are native html input type text or number, DateInput and Checkbox.
 * @param {object} [error=null] - Translatable message for manual error messages. If specified it has priority over validation error.
 * @param {object} validation - Object that contains the value to be validated against and the translatable message that will appear on validation failure.
 * @param {string|number|boolean} [initValue=null] - Initial value for the field type text or number.
 * @param {string} id - Field id. Required for accessibility in order to couple label and field with via htmlFor attribute.
 * @param {object} [help=null] - Help message displayed to assist customer on typing.
 * @param {object} [label=null] - Label associated to field.
 *
 * @usage `<Field
 *          submitted={false}
 *          type='number'
 *          onChange={(val) => console.log(val)}
 *          error={"an error message"}
 *          validation={{
 *             minimum: { value: 3, message: "The value should bigger than 3" },
 *             maximum: { value: 10, message: "The value should smaller than 10" },
 *             required: { value: true, message: "This field is required" },
 *          }}
 *          initValue={1}
 *          id="id"
 *          help="Please fill this form with a value between 3 and 10"
 *          label="Input type number"
 *       >
 *         <input type="number" className="form-control" />
 *     </Field>`
 * */

const Field = (props) => {
  const [model, setModel] = useState(props.initValue);
  const [changed, setChanged] = useState(false);
  const [focused, setFocused] = useState(false);
  const [blurred, setBlurred] = useState(false);
  const [validationFailures, setValidationFailures] = useState([]);
  const [validations] = useState(() => getValidations(props.validation));

  const onChange = (newModel) => {
    setChanged(true);
    setModelAndBroadcast(newModel);
  };

  const onFocus = () => {
    setFocused(true);
    setBlurred(false);
  };

  const onBlur = () => {
    setFocused(false);
    setBlurred(true);
  };

  useEffect(() => {
    const newValidationFailures = getValidationFailures(
      model,
      props.type,
      validations.validationRules,
    );
    setValidationFailures(newValidationFailures);
  }, [props.submitted]);

  const setModelAndBroadcast = (newModel) => {
    if (newModel === model) {
      return;
    }
    setModel(newModel);
    const newValidationFailures = getValidationFailures(
      newModel,
      props.type,
      validations.validationRules,
    );
    const isValid = newValidationFailures.length === 0;
    setValidationFailures(newValidationFailures);
    props.onChange(newModel, isValid);
  };
  const { submitted, error, help } = props;
  const { messageType, message, formGroupClasses } = getMessage({
    submitted,
    error,
    help,
    changed,
    blurred,
    focused,
    validationFailures,
    validations,
  });

  const childProps = {
    onChange,
    onBlur,
    onFocus,
    id: props.id,
  };

  if (props.type === 'boolean') {
    childProps.checked = model;
  } else {
    childProps.value = model;
  }

  return (
    <div className={classNames(formGroupClasses)}>
      {props.label && (
        <label className="control-label" htmlFor={props.id}>
          {props.label}
        </label>
      )}
      <WithNormaliser>{React.cloneElement(props.children, childProps)}</WithNormaliser>
      {message && (
        <Alert type={messageType} size="sm">
          {message}
        </Alert>
      )}
    </div>
  );
};

function getValidations(validation) {
  const validations = {
    validationRules: {},
    validationMessages: {},
  };
  Object.keys(validation).forEach((key) => {
    validations.validationRules[key] = validation[key].value;
    validations.validationMessages[key] = validation[key].message;
  });
  return validations;
}

function getMessage({
  submitted,
  error,
  help,
  changed,
  blurred,
  focused,
  validationFailures,
  validations,
}) {
  let messageType = 'error';
  let message = null;
  const formGroupClasses = ['form-group'];

  const isErrorVisible = !changed && error;
  const isValidationVisible = (submitted || (changed && blurred)) && !!validationFailures.length;
  const isHelpVisible = focused && help && !isValidationVisible;

  if (isErrorVisible) {
    formGroupClasses.push('has-error');
    message = error;
  } else if (isValidationVisible) {
    formGroupClasses.push('has-error');
    message = validationFailures.map((validation) => (
      <div key={validation}>{validations.validationMessages[validation]}</div>
    ));
  } else if (isHelpVisible) {
    formGroupClasses.push('has-info');
    messageType = 'info';
    message = help;
  }

  return { messageType, message, formGroupClasses };
}

Field.propTypes = {
  children: Types.node.isRequired,
  error: Types.node,
  help: Types.node,
  id: Types.string.isRequired,
  initValue: Types.oneOfType([Types.string, Types.number, Types.bool]),
  onChange: Types.func.isRequired,
  submitted: Types.bool,
  label: Types.node,
  type: Types.oneOf(['string', 'number', 'boolean']).isRequired,
  validation: Types.shape({
    value: Types.oneOfType([Types.bool, Types.number]),
    message: Types.node,
  }).isRequired,
};

Field.defaultProps = {
  error: null,
  help: null,
  initValue: null,
  submitted: false,
  label: null,
};

export default Field;
