import React from 'react';
import Types from 'prop-types';

import BasicTypeSchema from '../basicTypeSchema';
import ObjectSchema from '../objectSchema';
import OneOfSchema from '../oneOfSchema';
import AllOfSchema from '../allOfSchema';

const basicTypes = ['string', 'number', 'integer', 'boolean'];

const GenericSchemaForm = (props) => {
  const { schema } = props;

  const isObject = schema.type === 'object';
  const isOneOf = !!schema.oneOf;
  const isAllOf = !!schema.allOf;
  const isBasicType = basicTypes.indexOf(schema.type) >= 0 || !!schema.enum || !!schema.const;

  return (
    <>
      {isBasicType && !isOneOf && <BasicTypeSchema {...props} />}
      {isObject && <ObjectSchema {...props} />}
      {isOneOf && <OneOfSchema {...props} />}
      {isAllOf && <AllOfSchema {...props} />}
    </>
  );
};

GenericSchemaForm.propTypes = {
  schema: Types.shape({
    type: Types.oneOf(['string', 'number', 'integer', 'boolean', 'object', 'array']),
    enum: Types.arrayOf(Types.oneOfType([Types.string, Types.number])),
    const: Types.oneOfType([Types.string, Types.number, Types.bool]),
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
  disabled: Types.bool,
};

GenericSchemaForm.defaultProps = {
  model: null,
  errors: null,
  locale: 'en-GB',
  translations: {},
  hideTitle: false,
  disabled: false,
};

export default GenericSchemaForm;
