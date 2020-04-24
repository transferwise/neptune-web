import React, { useState } from 'react';
import Types from 'prop-types';

import GenericSchema from '../genericSchema';
import RadioGroup from '../../radioGroup';

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

  const onSchemaChange = (index) => {
    setSchemaIndex(index);
    props.onChange(models[index], props.schema.oneOf[index]);
  };

  const getRadioOptions = (schemas) =>
    schemas.map((schema, value) => {
      return { value, label: schema.title };
    });

  const [schemaIndex, setSchemaIndex] = useState(getActiveSchemaIndex(props.schema, props.model));

  const [models, setModels] = useState(getModelPartsForSchemas(props.model, props.schema.oneOf));

  const options = getRadioOptions(props.schema.oneOf);

  return (
    <div>
      {props.schema.title && <small className="control-label"> {props.schema.title} </small>}

      {props.schema.oneOf.length > 1 && (
        <div className="m-b-3">
          <RadioGroup
            selectedValue={schemaIndex}
            radios={options}
            name="radio-group"
            onChange={onSchemaChange}
          />
        </div>
      )}

      <GenericSchema
        schema={props.schema.oneOf[schemaIndex]}
        model={models[schemaIndex]}
        errors={props.errors}
        locale={props.locale}
        translations={props.translations}
        onChange={(model) => onChange(model, schemaIndex)}
        submitted={props.submitted}
        hide-title
      />
    </div>
  );
};

OneOfSchema.propTypes = {
  schema: Types.shape({
    title: Types.string,
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
