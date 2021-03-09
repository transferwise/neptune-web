import React from 'react';
import Types from 'prop-types';

import { isNull, isUndefined } from '@transferwise/neptune-validation';
import FormControl from '../../formControl';
import { getValidModelParts } from '../../common/validation/valid-model';
import { isOneOfSchema } from '../../common/schemaTypes/schemaTypes';
import { FormControlType } from '../../common';
import { mapConstSchemaToOption } from './optionMapper';

const SchemaFormControl = (props) => {
  const isNativeInput = (propsSchemaType) =>
    propsSchemaType === 'string' || propsSchemaType === 'number';

  const getSanitisedValue = (value) =>
    isNativeInput(props.schema.type) && (isNull(value) || isUndefined(value)) ? '' : value;

  const onChange = (value) => {
    // If the model does not satisfy the schema propagate null
    props.onChange(getValidModelParts(value, props.schema));
  };

  const getControlType = (schema) => {
    if (schema.control) {
      if (isOneOfSchema(schema) && schema.oneOf.length > 3) {
        return FormControlType.SELECT;
      }
      return schema.control;
    }

    if (schema.enum) {
      return schema.enum.length >= 3 ? 'select' : 'radio';
    }

    if (schema.oneOf) {
      return schema.oneOf.length === 1 || schema.oneOf.length >= 3 ? 'select' : 'radio';
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

  const getOptions = (schema) => {
    // DEPRECATED: values is a legacy approach, use oneOf.
    if (schema.values) {
      return schema.values;
    }
    if (schema.enum) {
      return schema.enum.map((value) => {
        return { value, label: value };
      });
    }
    if (schema.oneOf) {
      return schema.oneOf.map(mapConstSchemaToOption);
    }
    return null;
  };

  const controlType = getControlType(props.schema);
  const options = getOptions(props.schema);

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
    options,
    placeholder: props.schema.placeholder,
    autoComplete: !props.schema.help,
    disabled: props.disabled || props.schema.disabled,
    displayPattern: props.schema.displayFormat,
  };

  return <FormControl type={controlType} value={safeValue} {...events} {...controlProps} />;
};

SchemaFormControl.propTypes = {
  id: Types.string.isRequired,
  value: Types.oneOfType([Types.string, Types.number, Types.bool]),
  schema: Types.shape({
    type: Types.oneOf(['string', 'number', 'integer', 'boolean']),
    format: Types.string,
    values: Types.arrayOf(Types.shape({})),
    title: Types.string,
    placeholder: Types.string,
    help: Types.shape({}),
    displayFormat: Types.string,
    disabled: Types.bool,
  }).isRequired,
  onChange: Types.func.isRequired,
  onFocus: Types.func,
  onBlur: Types.func,
  translations: Types.shape({}),
  locale: Types.string,
  disabled: Types.bool,
};

SchemaFormControl.defaultProps = {
  value: 'one',
  translations: {},
  locale: 'en-GB',
  onFocus: null,
  onBlur: null,
  disabled: false,
};

export default SchemaFormControl;
