import React from 'react';
import Types from 'prop-types';
import GenericSchema from './genericSchema';
import { isValidSchema } from './validation/schema-validators';

const JsonSchemaForm = props => {
  const onChange = model => {
    props.onChange(model, isValidSchema(model, props.schema));
  };
  return <GenericSchema {...props} onChange={onChange} />;
};

JsonSchemaForm.propTypes = {
  schema: Types.shape({}).isRequired,
  model: Types.oneOfType([Types.string, Types.number, Types.bool, Types.array, Types.shape({})]),
  errors: Types.oneOfType([Types.string, Types.array, Types.shape({})]),
  locale: Types.string,
  translations: Types.shape({}),
  onChange: Types.func.isRequired,
  submitted: Types.bool.isRequired,
};

JsonSchemaForm.defaultProps = {
  model: null,
  errors: null,
  locale: 'en-GB',
  translations: {},
};

export default JsonSchemaForm;
