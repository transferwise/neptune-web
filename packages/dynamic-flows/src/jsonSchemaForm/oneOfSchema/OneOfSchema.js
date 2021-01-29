import React, { useEffect, useState } from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

import { isArray, isEmpty } from '@transferwise/neptune-validation';
import GenericSchema from '../genericSchema';
import SchemaFormControl from '../schemaFormControl';
import ControlFeedback from '../controlFeedback';

import { getValidModelParts } from '../../common/validation/valid-model';
import { getValidationFailures } from '../../common/validation/validation-failures';
import { isValidSchema } from '../../common/validation/schema-validators';

import DynamicAlert from '../../layout/alert';

function isConstSchema(schema) {
  return !!schema && (schema.const || (schema.enum && schema.enum.length === 1));
}

function isNoNConstSchema(schema) {
  return !!schema && !isConstSchema(schema);
}

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
    const indexFromModel = schema.oneOf.findIndex((childSchema) =>
      isValidSchema(model, childSchema),
    );
    // If our model satisfies one of the schemas, use that schema.
    if (indexFromModel >= 0) {
      return indexFromModel;
    }

    // If we have a non-const oneOf and there's only one, active index must be the first one
    if (schema.oneOf.length === 1 && isNoNConstSchema(schema.oneOf[0])) {
      return 0;
    }

    if (isConstSchema(schema.oneOf[0])) {
      const indexFromDefault = schema.oneOf.findIndex((childSchema) =>
        isValidSchema(schema.default, childSchema),
      );
      // If the default value satisfies one of the schemas, use that schema.
      if (indexFromDefault >= 0) {
        return indexFromDefault;
      }
    }

    // Otherwise do not default
    return null;
  };

  const onChildModelChange = (index, model, triggerSchema, triggerModel) => {
    models[index] = model;
    setModels(models);
    setChanged(true);
    props.onChange(model, triggerSchema, triggerModel);
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
      const model = newSchema.const || newSchema.enum[0];
      props.onChange(model, props.schema, model);

      // Apply validations for the change
      setValidations(getValidationFailures(newSchema.const, props.schema, props.required));
    } else {
      props.onChange(models[index], newSchema, models[index]);
    }
  };

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
    return {
      ...schema,
      oneOf: schema.oneOf.map(mapOneOfToConst),
    };
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
              disabled={props.disabled}
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
          {props.schema.alert && <DynamicAlert component={props.schema.alert} />}
        </>
      )}

      {isNoNConstSchema(props.schema.oneOf[schemaIndex]) && (
        <GenericSchema
          schema={props.schema.oneOf[schemaIndex]}
          model={models[schemaIndex]}
          errors={props.errors}
          locale={props.locale}
          translations={props.translations}
          onChange={(model, triggerSchema, triggerModel) =>
            onChildModelChange(schemaIndex, model, triggerSchema, triggerModel)
          }
          submitted={props.submitted}
          hideTitle
          disabled={props.disabled}
          onPersistAsync={props.onPersistAsync}
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
  disabled: Types.bool,
  onPersistAsync: Types.func.isRequired,
};

OneOfSchema.defaultProps = {
  model: null,
  errors: null,
  locale: 'en-GB',
  required: false,
  translations: {},
  disabled: false,
};

export default OneOfSchema;
