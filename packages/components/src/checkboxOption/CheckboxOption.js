import React from 'react';
import Types from 'prop-types';

import Option from '../common/Option';
import CheckboxButton from '../checkboxButton';

const CheckboxOption = ({ media, title, content, name, checked, onChange, complex, disabled }) => {
  const sharedProps = { media, title, content, name, complex, disabled };

  return (
    <Option
      {...sharedProps}
      button={
        <CheckboxButton checked={checked} disabled={disabled} onChange={() => onChange(!checked)} />
      }
    />
  );
};

CheckboxOption.propTypes = {
  checked: Types.bool,
  complex: Types.bool,
  content: Types.node,
  disabled: Types.bool,
  id: Types.string,
  media: Types.node,
  name: Types.string.isRequired,
  onChange: Types.func.isRequired,
  title: Types.node.isRequired,
};

CheckboxOption.defaultProps = {
  checked: false,
  complex: false,
  content: null,
  disabled: false,
  id: undefined,
  media: null,
};

export default CheckboxOption;
