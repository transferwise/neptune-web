import React from 'react';
import Types from 'prop-types';

import FormControl from '../../formControl';
import SchemaTypeahead from '../schemaTypeahead';
import { isNull } from '../validation/type-validators';
import { getValidModelParts } from '../validation/valid-model';

const SchemaFormControl = props => {
  const isUndefined = value => typeof value === 'undefined';

  const isNativeInput = schemaType => schemaType === 'string' || schemaType === 'number';

  const getSanitisedValue = value =>
    isNativeInput(props.schema.type) && (isNull(value) || isUndefined(value)) ? '' : value;

  const onChange = (value, option) => {
    // If the model does not satisfy the schema propogate null
    props.onChange(getValidModelParts(value, props.schema), option);
  };

  const getControlType = schema => {
    if (schema.control) {
      return schema.control;
    }

    if (schema.valuesAsync) {
      return 'typeahead';
    }

    if (schema.enum || schema.values) {
      return schema.enum.length >= 3 ? 'select' : 'radio';
    }

    if (schema.type === 'string') {
      switch (schema.format) {
        case 'date':
          return 'date';
        case 'phone':
          return 'tel';
        case 'base64url':
          return 'file';
        default:
          return 'text';
      }
    }

    if (schema.type === 'boolean') {
      return 'checkbox';
    }

    if (schema.type === 'integer') {
      return 'number';
    }

    return schema.type;
  };

  const controlType = getControlType(props.schema);

  const events = {
    onFocus: props.onFocus,
    onBlur: props.onBlur,
    onChange,
  };

  const safeValue = getSanitisedValue(props.value);

  const controlProps = {
    id: props.id,
    name: props.id,
    locale: props.locale,
    label: props.schema.title,
    options: props.schema.values,
    placeholder: props.schema.placeholder,
    autoComplete: !props.schema.help,
  };

  const isTypeahead = controlType === 'typeahead';

  return (
    <div>
      {isTypeahead && (
        <SchemaTypeahead value={safeValue} schema={props.schema} id={props.id} {...events} />
      )}
      {!isTypeahead && (
        <FormControl type={controlType} value={safeValue} {...events} {...controlProps} />
      )}
    </div>
  );
};

SchemaFormControl.propTypes = {
  id: Types.string.isRequired,
  value: Types.oneOfType([Types.string, Types.number, Types.bool]),
  schema: Types.shape({
    type: Types.oneOf(['string', 'number', 'integer', 'boolean']),
    format: Types.string,
    values: Types.arrayOf(Types.shape({})),
    valuesAsync: Types.shape({
      method: Types.string,
      url: Types.string,
      param: Types.string,
    }),
    title: Types.string,
    placeholder: Types.string,
    help: Types.shape({}),
    warning: Types.string,
  }).isRequired,
  onChange: Types.func.isRequired,
  onFocus: Types.func.isRequired,
  onBlur: Types.func.isRequired,
  translations: Types.shape({}),
  locale: Types.string,
};

SchemaFormControl.defaultProps = {
  value: 'one',
  translations: {},
  locale: 'en-GB',
};

export default SchemaFormControl;
