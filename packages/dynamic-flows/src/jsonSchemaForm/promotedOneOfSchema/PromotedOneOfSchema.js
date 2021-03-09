import React, { useState } from 'react';
import Types from 'prop-types';
import { RadioGroup } from '@transferwise/components';
import ObjectSchema from '../objectSchema';
import GenericSchema from '../genericSchema';

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

  const getOtherOneOf = (schema) => {
    const other = schema.oneOf.filter((one) => !isPromoted(one));
    const title = schema.promotion.other.heading.text;
    if (other.length === 1) {
      return { ...other[0], title };
    }
    if (other.length > 1) {
      return {
        title,
        oneOf: other,
      };
    }
    throw Error('Could not find other schemas for a promoted one of.');
  };

  const promotedObjectSchema = getPromotedObjectSchema(promotedOneOf);

  const otherOneOf = getOtherOneOf(props.schema);

  const radios = [
    {
      value: 'promoted',
      label: promotedOneOf.title,
      secondary: promotedOneOf.description,
    },
    {
      value: 'other',
      label: props.schema.promotion.other.title,
      secondary: props.schema.promotion.other.description,
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
      {selection === 'other' && <GenericSchema {...props} schema={otherOneOf} />}
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
