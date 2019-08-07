import React from 'react';
import Types from 'prop-types';

import Option from '../common/Option';
import CheckboxButton from '../common/CheckboxButton';

const CheckboxOption = ({ media, title, content, name, checked, onChange, complex, disabled }) => {
  const sharedProps = { media, title, content, name, complex, disabled };

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
  content: Types.node,
  checked: Types.bool,
  onChange: Types.func.isRequired,
  complex: Types.bool,
  disabled: Types.bool,
};

CheckboxOption.defaultProps = {
  content: null,
  checked: false,
  complex: false,
  disabled: false,
};

export default CheckboxOption;
