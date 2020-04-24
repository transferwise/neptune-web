import React from 'react';
import Types from 'prop-types';

import BasicTypeSchema from '../basicTypeSchema/';
import ObjectSchema from '../objectSchema/';
import OneOfSchema from '../oneOfSchema/';
import AllOfSchema from '../allOfSchema/';

const GenericSchemaForm = (props) => (
  <>
    {props.schema.enum && <BasicTypeSchema {...props} />}
    {props.schema.type === 'string' && <BasicTypeSchema {...props} />}
    {props.schema.type === 'number' && <BasicTypeSchema {...props} />}
    {props.schema.type === 'integer' && <BasicTypeSchema {...props} />}
    {props.schema.type === 'boolean' && <BasicTypeSchema {...props} />}
    {props.schema.type === 'object' && <ObjectSchema {...props} />}
    {props.schema.oneOf && <OneOfSchema {...props} />}
    {props.schema.allOf && <AllOfSchema {...props} />}
  </>
);

GenericSchemaForm.propTypes = {
  schema: Types.shape({
    type: Types.oneOf(['string', 'number', 'integer', 'boolean', 'object', 'array']),
    enum: Types.arrayOf(Types.oneOfType([Types.string, Types.number])),
    oneOf: Types.arrayOf(Types.shape({})),
    allOf: Types.arrayOf(Types.shape({})),
  }).isRequired,
  model: Types.oneOfType([Types.string, Types.number, Types.bool, Types.array, Types.shape({})]),
  errors: Types.oneOfType([Types.string, Types.array, Types.shape({})]),
  locale: Types.string,
  translations: Types.shape({}),
  onChange: Types.func.isRequired,
  submitted: Types.bool.isRequired,
  hideTitle: Types.bool,
};

GenericSchemaForm.defaultProps = {
  model: null,
  errors: null,
  locale: 'en-GB',
  translations: {},
  hideTitle: false,
};

export default GenericSchemaForm;
