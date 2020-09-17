import React, { useEffect, useState } from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

import GenericSchema from '../genericSchema';
import SchemaFormControl from '../schemaFormControl';
import ControlFeedback from '../controlFeedback';

import { getValidModelParts } from '../../common/validation/valid-model';
import { getValidationFailures } from '../../common/validation/validation-failures';
import { isValidSchema } from '../../common/validation/schema-validators';
import { isArray, isEmpty } from '@transferwise/neptune-validation';
import DynamicAlert from '../../layout/alert';

const OneOfSchema = (props) => {
  const [changed, setChanged] = useState(false);
  const [focused, setFocused] = useState(false);
  const [blurred, setBlurred] = useState(false);
  const [validations, setValidations] = useState(
    getValidationFailures(props.model, props.schema, props.required),
  );

  if (!isArray(props.schema.oneOf)) {
    console.error('Incorrect format', props.schema); // eslint-disable-line
    return '';
  }

  const getModelPartsForSchemas = (model, schemas) =>
    schemas.map((schema) => getValidModelParts(model, schema));

  const getActiveSchemaIndex = (schema, model) => {
    const index = schema.oneOf.findIndex((childSchema) => isValidSchema(model, childSchema));
    // If our model satisfies one of the schemas, use that schema.
    if (index >= 0) {
      return index;
    }
    // Otherwise, default to the first schema if it's not a const
    if (schema.oneOf[0] && !isConstSchema(schema.oneOf[0])) {
      return 0;
    }
    // Otherwise do not default
    return null;
  };

  const onChange = (model, schema, index) => {
    models[index] = model;
    setModels(models);
    setChanged(true);
    props.onChange(model, schema);
  };

  const onFocus = () => {
    setFocused(true);
  };

  const onBlur = () => {
    setFocused(false);
    setBlurred(true);
  };

  const onChooseNewSchema = (index) => {
    setSchemaIndex(index);

    const newSchema = props.schema.oneOf[index];

    if (isConstSchema(newSchema)) {
      // If new schema is a const we want to share the parent schema, not the const
      props.onChange(newSchema.const || newSchema.enum[0], props.schema);

      // Apply validations for the change
      setValidations(getValidationFailures(newSchema.const, props.schema, props.required));
    } else {
      props.onChange(models[index], newSchema);
    }
  };

  function isConstSchema(schema) {
    return schema.const || (schema.enum && schema.enum.length === 1);
  }

  const [id, setId] = useState('');
  const [schemaIndex, setSchemaIndex] = useState(getActiveSchemaIndex(props.schema, props.model));
  const [models, setModels] = useState(getModelPartsForSchemas(props.model, props.schema.oneOf));

  const generateId = () => String(Math.floor(100000000 * Math.random()));

  // When the schema we receive from parent changes
  useEffect(() => {
    setId(generateId());
  }, [props.schema]);

  // We want our model to be the index, so alter the oneOf schemas to be a const
  const mapOneOfToConst = (schema, index) => {
    return {
      title: schema.title,
      description: schema.description,
      const: index,
      disabled: schema.disabled,
      icon: schema.icon,
    };
  };

  const mapSchemas = (schema) => {
    return { ...schema, oneOf: schema.oneOf.map(mapOneOfToConst) };
  };

  const schemaForSelect = mapSchemas(props.schema);

  const formGroupClasses = {
    'form-group': true,
    'has-error':
      (!changed && props.errors && !isEmpty(props.errors)) ||
      ((props.submitted || (changed && blurred)) && validations.length),
  };

  const errorsToString = (errors) => {
    // When oneOf represents a select, errors should be of type string
    if (typeof errors === 'string') {
      return errors;
    }
    return null;
  };

  return (
    <>
      {props.schema.oneOf.length > 1 && (
        <>
          {props.schema.alert && <DynamicAlert component={props.schema.alert} />}
          <div className={classNames(formGroupClasses)}>
            {props.schema.title && (
              <label className="control-label" htmlFor={id}>
                {props.schema.title}
              </label>
            )}
            <SchemaFormControl
              id={id}
              schema={schemaForSelect}
              onChange={onChooseNewSchema}
              onFocus={onFocus}
              onBlur={onBlur}
              value={schemaIndex}
              translations={props.translations}
              locale={props.locale}
            />
            <ControlFeedback
              changed={changed}
              focused={focused}
              blurred={blurred}
              submitted={props.submitted}
              errors={errorsToString(props.errors)}
              schema={props.schema}
              validations={validations}
            />
          </div>
        </>
      )}

      {props.schema.oneOf[schemaIndex] && !isConstSchema(props.schema.oneOf[schemaIndex]) && (
        <GenericSchema
          schema={props.schema.oneOf[schemaIndex]}
          model={models[schemaIndex]}
          errors={props.errors}
          locale={props.locale}
          translations={props.translations}
          onChange={(model, schema) => onChange(model, schema, schemaIndex)}
          submitted={props.submitted}
          hideTitle
        />
      )}
    </>
  );
};

OneOfSchema.propTypes = {
  schema: Types.shape({
    title: Types.string,
    alert: Types.shape({
      context: Types.string,
      markdown: Types.string,
    }),
    control: Types.string,
    placeholder: Types.string,
    oneOf: Types.arrayOf(Types.object).isRequired,
  }).isRequired,
  model: Types.oneOfType([Types.string, Types.number, Types.bool, Types.array, Types.shape({})]),
  errors: Types.oneOfType([Types.string, Types.array, Types.shape({})]),
  locale: Types.string,
  translations: Types.shape({}),
  onChange: Types.func.isRequired,
  submitted: Types.bool.isRequired,
  required: Types.bool,
};

OneOfSchema.defaultProps = {
  model: null,
  errors: null,
  locale: 'en-GB',
  required: false,
  translations: {},
};

export default OneOfSchema;
