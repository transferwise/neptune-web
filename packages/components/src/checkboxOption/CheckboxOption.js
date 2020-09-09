import React from 'react';
import Types from 'prop-types';

import Option from '../common/Option';
import CheckboxButton from '../common/CheckboxButton';

const CheckboxOption = ({
  media,
  title,
  content,
  name,
  checked,
  onChange,
  complex,
  disabled,
  ariaLabel,
}) => {
  return (
    <Option
      media={media}
      title={title}
      content={content}
      name={name}
      complex={complex}
      disabled={disabled}
      onClick={(event) => {
        event.preventDefault();
        if (!disabled) {
          onChange(!checked);
        }
      }}
      button={<CheckboxButton checked={checked} disabled={disabled} ariaLabel={ariaLabel} />}
    />
  );
};

CheckboxOption.propTypes = {
  media: Types.node,
  ariaLabel: Types.node.isRequired,
  name: Types.string.isRequired,
  title: Types.node.isRequired,
  content: Types.node,
  checked: Types.bool,
  onChange: Types.func.isRequired,
  complex: Types.bool,
  disabled: Types.bool,
};

CheckboxOption.defaultProps = {
  media: null,
  content: null,
  checked: false,
  complex: false,
  disabled: false,
};

export default CheckboxOption;
