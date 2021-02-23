import React, { useState, useEffect } from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

import SchemaFormControl from '../schemaFormControl';
import ControlFeedback from '../controlFeedback';

import { getValidationFailures } from '../../common/validation/validation-failures';
import { getValidModelParts } from '../../common/validation/valid-model';
import DynamicAlert from '../../layout/alert';
import Help from './help';

const BasicTypeSchema = (props) => {
  const onChange = (newModel) => {
    setChanged(true);
    setModelAndBroadcast(sanitiseModel(newModel));
  };

  const getValidationKeys = (newModel) =>
    getValidationFailures(newModel, props.schema, props.required);

  const setModelAndBroadcast = (newModel) => {
    setModel(newModel);
    const validationKeys = getValidationKeys(newModel);
    setValidations(validationKeys);

    const broadcastModel = newModel;

    setLastModel(broadcastModel);

    if (broadcastModel !== lastModel) {
      props.onChange(broadcastModel, props.schema, broadcastModel);
    }
  };

  const sanitiseModel = (newModel) => getValidModelParts(newModel, props.schema);

  const onFocus = () => setFocused(true);
  const onBlur = () => {
    setFocused(false);
    setBlurred(true);
    if (props.onBlur) {
      props.onBlur();
    }
  };

  const generateId = () => String(Math.floor(100000000 * Math.random()));

  const [id, setId] = useState('');
  const [model, setModel] = useState(props.model);
  const [lastModel, setLastModel] = useState(props.model);
  const [changed, setChanged] = useState(false);
  const [focused, setFocused] = useState(false);
  const [blurred, setBlurred] = useState(false);
  const [validations, setValidations] = useState([]);

  const onSchemaChange = () => {
    // if no model, change to the default, only run this when the schema changes
    if (!model && props.schema.default) {
      setModelAndBroadcast(props.schema.default);
    }

    if (props.schema.const) {
      setModelAndBroadcast(props.schema.const);
    }

    if (props.schema.enum && props.schema.enum.length === 1) {
      setModelAndBroadcast(props.schema.enum[0]);
    }

    setId(generateId());
  };

  const refreshValidations = () => {
    setValidations(getValidationKeys(model));
  };

  const isConst = props.schema.const || (props.schema.enum && props.schema.enum.length === 1);
  const isHidden = props.schema.hidden || isConst;

  useEffect(onSchemaChange, [props.schema]);
  useEffect(refreshValidations, [props.model, props.submitted]);

  const formGroupClasses = {
    'form-group': true,
    'has-error':
      ((props.submitted || !changed) && !!props.errors) ||
      ((props.submitted || (changed && blurred)) && !!validations.length),
    'has-info': (focused && !!props.schema.description) || !!props.validationAsyncSuccessMessage,
  };

  const showLabel = props.schema.format !== 'file' && props.schema.type !== 'boolean';

  const hasHelp = !!props.schema.help;

  return (
    !isHidden && (
      <>
        <div className={classNames(formGroupClasses)}>
          {showLabel && (
            <label className="control-label" htmlFor={id}>
              {props.schema.title}
            </label>
          )}
          {hasHelp && <Help help={props.schema.help} />}
          <SchemaFormControl
            id={id}
            schema={props.schema}
            value={model}
            locale={props.locale}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            disabled={props.disabled}
          />
          <ControlFeedback
            changed={changed}
            focused={focused}
            blurred={blurred}
            submitted={props.submitted}
            errors={props.errors}
            schema={props.schema}
            validations={validations}
            validationAsyncSuccessMessage={props.validationAsyncSuccessMessage}
          />
        </div>
        {props.schema.alert && <DynamicAlert component={props.schema.alert} />}
      </>
    )
  );
};

BasicTypeSchema.propTypes = {
  schema: Types.shape({
    type: Types.oneOf(['string', 'number', 'integer', 'boolean']),
    alert: Types.shape({
      context: Types.string,
      markdown: Types.string,
    }),
    enum: Types.arrayOf(Types.oneOfType([Types.string, Types.number, Types.bool])),
    const: Types.oneOfType([Types.string, Types.number, Types.bool]),
    format: Types.string,
    title: Types.string,
    values: Types.arrayOf(Types.shape({})),
    default: Types.oneOfType([Types.string, Types.number, Types.bool]),
    disabled: Types.bool,
    hidden: Types.bool,
    help: Types.shape({ markdown: Types.string }),
    description: Types.string,
  }).isRequired,
  model: Types.oneOfType([Types.string, Types.number, Types.bool]),
  errors: Types.string,
  translations: Types.shape({}),
  onChange: Types.func.isRequired,
  submitted: Types.bool.isRequired,
  required: Types.bool,
  locale: Types.string,
  disabled: Types.bool,
  onBlur: Types.func,
  validationAsyncSuccessMessage: Types.string,
};

BasicTypeSchema.defaultProps = {
  model: null,
  errors: null,
  translations: {},
  required: false,
  locale: 'en-GB',
  disabled: false,
  onBlur: null,
  validationAsyncSuccessMessage: null,
};

export default BasicTypeSchema;
