import React from 'react';
import Types from 'prop-types';

import Option from '../common/Option';
import RadioButton from '../common/RadioButton';

const RadioOption = ({
  media,
  title,
  description,
  id,
  name,
  checked,
  onChange,
  complex,
  disabled,
}) => {
  const sharedProps = { media, title, description, name, complex, disabled };

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
  description: Types.node,
  checked: Types.bool,
  onChange: Types.func.isRequired,
  complex: Types.bool,
  disabled: Types.bool,
};

RadioOption.defaultProps = {
  description: null,
  checked: false,
  complex: false,
  disabled: false,
};

export default RadioOption;
