import React from 'react';
import Types from 'prop-types';

import Option from '../common/Option';
import RadioButton from '../common/RadioButton';

const RadioOption = ({
  media,
  title,
  content,
  id,
  name,
  checked,
  onChange,
  complex,
  disabled,
  value,
}) => {
  const sharedProps = { media, title, content, name, complex, disabled };
  return (
    <Option
      {...sharedProps}
      button={
        <RadioButton
          id={id}
          name={name}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          value={value}
        />
      }
    />
  );
};

RadioOption.propTypes = {
  media: Types.node.isRequired,
  id: Types.string.isRequired,
  name: Types.string.isRequired,
  title: Types.node.isRequired,
  content: Types.node,
  checked: Types.bool,
  onChange: Types.func.isRequired,
  complex: Types.bool,
  disabled: Types.bool,
  value: Types.string,
};

RadioOption.defaultProps = {
  content: null,
  checked: false,
  complex: false,
  disabled: false,
  value: '',
};

export default RadioOption;
