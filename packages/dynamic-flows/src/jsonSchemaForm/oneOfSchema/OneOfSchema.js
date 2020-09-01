import React, { useState, useEffect } from 'react';
import Types from 'prop-types';

import GenericSchema from '../genericSchema';
import SchemaFormControl from '../schemaFormControl';

import { getValidModelParts } from '../../common/validation/valid-model';
import { isValidSchema } from '../../common/validation/schema-validators';
import { isArray } from '@transferwise/neptune-validation';

const OneOfSchema = (props) => {
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

    props.onChange(model, schema);
  };

  const onChooseNewSchema = (index) => {
    setSchemaIndex(index);

    const newSchema = props.schema.oneOf[index];

    if (isConstSchema(newSchema)) {
      // If new schema is a const we want to share the parent schema, not the const
      props.onChange(newSchema.const || newSchema.enum[0], props.schema);
    } else {
      props.onChange(models[index], newSchema);
    }
  };

  const isConstSchema = (schema) => {
    return schema.const || (schema.enum && schema.enum.length === 1);
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
    return { ...schema, oneOf: schema.oneOf.map(mapOneOfToConst) };
  };

  const schemaForSelect = mapSchemas(props.schema);

  return (
    <>
      {props.schema.oneOf.length > 1 && (
        <div className="form-group">
          {props.schema.title && (
            <label className="control-label" htmlFor={id}>
              {props.schema.title}
            </label>
          )}
          <SchemaFormControl
            id={id}
            schema={schemaForSelect}
            onChange={onChooseNewSchema}
            value={schemaIndex}
            translations={props.translations}
            locale={props.locale}
          />
        </div>
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
    control: Types.string,
    oneOf: Types.arrayOf(Types.object).isRequired,
  }).isRequired,
  model: Types.oneOfType([Types.string, Types.number, Types.bool, Types.array, Types.shape({})]),
  errors: Types.oneOfType([Types.string, Types.array, Types.shape({})]),
  locale: Types.string,
  translations: Types.shape({}),
  onChange: Types.func.isRequired,
  submitted: Types.bool.isRequired,
};

OneOfSchema.defaultProps = {
  model: null,
  errors: null,
  locale: 'en-GB',
  translations: {},
};

export default OneOfSchema;
