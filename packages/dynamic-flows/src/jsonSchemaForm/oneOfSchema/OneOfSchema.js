import React, { useState, useEffect } from 'react';
import Types from 'prop-types';

import GenericSchema from '../genericSchema';
import SchemaFormControl from '../schemaFormControl';

import { getValidModelParts } from '../validation/valid-model';
import { isValidSchema } from '../validation/schema-validators';

const OneOfSchema = (props) => {
  const getModelPartsForSchemas = (model, schemas) =>
    schemas.map((schema) => getValidModelParts(model, schema));

  // Determine which schema to show intitially based on validity of model, default to 0
  const getActiveSchemaIndex = (schema, model) => {
    const index = schema.oneOf.findIndex((childSchema) => isValidSchema(model, childSchema));
    return index >= 0 ? index : 0;
  };

  const onChange = (model, index) => {
    models[index] = model;
    setModels(models);
    props.onChange(model, props.schema.oneOf[index]);
  };

  const onChooseNewSchema = (index) => {
    setSchemaIndex(index);

    const newSchema = props.schema.oneOf[index];

    // const schemas broadcast a change automatically
    if (!isConstSchema(newSchema)) {
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
    };
  };

  const mapSchemas = (schema) => {
    return { ...schema, oneOf: schema.oneOf.map(mapOneOfToConst) };
  };

  const schemaForSelect = mapSchemas(props.schema);

  return (
    <div>
      {props.schema.oneOf.length > 1 && (
        <div className="m-b-3">
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

      {props.schema.oneOf[schemaIndex] && (
        <GenericSchema
          schema={props.schema.oneOf[schemaIndex]}
          model={models[schemaIndex]}
          errors={props.errors}
          locale={props.locale}
          translations={props.translations}
          onChange={(model) => onChange(model, schemaIndex)}
          submitted={props.submitted}
          hideTitle
        />
      )}
    </div>
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
