import React from 'react';
import Types from 'prop-types';
import OneOfSchema from '../oneOfSchema';

const transformToPromotedOneOfSchema = (schema) => {
  const promotedOneofIndex = schema.oneOf.findIndex((one) => one.promoted === true);
  const promotedOneOf = schema.oneOf[promotedOneofIndex];
  schema.oneOf.splice(promotedOneofIndex, 1);
  const otherOneOf = {
    title: schema.promotion.other.title,
    oneOf: schema.oneOf,
  };
  return {
    ...schema,
    control: 'radio',
    oneOf: [promotedOneOf, otherOneOf],
  };
};

const PromotedOneOfSchema = (props) => {
  const transformedSchema = transformToPromotedOneOfSchema(props.schema);

  return <OneOfSchema {...props} schema={transformedSchema} />;
};

PromotedOneOfSchema.propTypes = {
  schema: Types.shape({}).isRequired,
  locale: Types.string,
};

PromotedOneOfSchema.defaultProps = {
  locale: 'en-GB',
};

export default PromotedOneOfSchema;
