import React from 'react';
import Types from 'prop-types';

import Option from '../common/Option';
import CheckboxButton from '../common/CheckboxButton';

const CheckboxOption = ({
  media,
  title,
  description,
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
      onClick={() => {
        if (!disabled) {
          onChange(!checked);
        }
      }}
      button={<CheckboxButton checked={checked} disabled={disabled} />}
    />
  );
};

CheckboxOption.propTypes = {
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

CheckboxOption.defaultProps = {
  description: null,
  checked: false,
  complex: false,
  disabled: false,
};

export default CheckboxOption;
