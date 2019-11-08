import React from 'react';
import Types from 'prop-types';

import FormControl from '../../formControl';
import { isNull } from '../validation/type-validators';
import { getValidModelParts } from '../validation/valid-model';

const SchemaFormControl = props => {
  const getSanitisedValue = value =>
    (props.schema.type === 'string' || props.schema.type === 'number') && isNull(value) ? '' : null;

  const onChange = model => {
    // If the model does not satisfy the schema propogate null
    props.onChange(getValidModelParts(model, props.schema));
  };

  const getControlType = schema => {
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
    if (schema.enum) {
      return schema.enum.length >= 3 ? 'select' : 'radio';
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

  return <FormControl type={controlType} value={safeValue} {...events} {...controlProps} />;
};

SchemaFormControl.propTypes = {
  id: Types.string.isRequired,
  value: Types.any, // eslint-disable-line
  schema: Types.shape({
    type: Types.oneOf(['string', 'number', 'integer', 'boolean']),
    format: Types.string,
    values: Types.arrayOf(Types.object), // eslint-disable-line
    title: Types.string,
    placeholder: Types.string,
    help: Types.object, // eslint-disable-line
  }).isRequired,
  onChange: Types.func.isRequired,
  onFocus: Types.func.isRequired,
  onBlur: Types.func.isRequired,
  translations: Types.object, // eslint-disable-line
  locale: Types.string,
};

SchemaFormControl.defaultProps = {
  value: 'one',
  translations: {},
  locale: 'en-GB',
};

export default SchemaFormControl;
