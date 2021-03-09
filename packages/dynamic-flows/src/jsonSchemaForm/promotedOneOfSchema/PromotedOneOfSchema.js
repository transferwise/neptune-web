import React, { useState } from 'react';
import Types from 'prop-types';
import { RadioGroup } from '@transferwise/components';
import OneOfSchema from '../oneOfSchema';
import ObjectSchema from '../objectSchema';

const isPromoted = (schema) => schema.promoted === true;

const PromotedOneOfSchema = (props) => {
  const [selection, setSelection] = useState('promoted');

  const promotedOneOf = props.schema.oneOf.find(isPromoted);

  const getPromotedObjectSchema = (promotedSchema) => {
    // We don't need to show this anymore for the object schema
    return {
      ...promotedSchema,
      title: null,
      description: null,
    };
  };

  const promotedObjectSchema = getPromotedObjectSchema(promotedOneOf);

  const otherOneOf = {
    title: props.schema.promotion.other.heading.text,
    oneOf: props.schema.oneOf.filter((one) => !isPromoted(one)),
  };

  const radios = [
    {
      value: 'promoted',
      label: promotedOneOf.title,
      secondary: promotedOneOf.description,
      name: 'name',
    },
    {
      value: 'other',
      label: props.schema.promotion.other.title,
      secondary: props.schema.promotion.other.description,
      name: 'name',
    },
  ];

  return (
    <>
      <div className="form-group">
        <RadioGroup
          name="promoted-selection"
          onChange={(value) => setSelection(value)}
          selectedValue="promoted"
          radios={radios}
        />
      </div>

      {selection === 'promoted' && <ObjectSchema {...props} schema={promotedObjectSchema} />}
      {selection === 'other' && <OneOfSchema {...props} schema={otherOneOf} />}
    </>
  );
};

PromotedOneOfSchema.propTypes = {
  schema: Types.shape({
    oneOf: Types.arrayOf(Types.object).isRequired,
    promotion: Types.shape({
      other: Types.shape({
        title: Types.string,
        heading: Types.shape({
          text: Types.string,
        }),
        description: Types.string,
      }).isRequired,
    }),
  }).isRequired,
};

PromotedOneOfSchema.defaultProps = {};

export default PromotedOneOfSchema;
