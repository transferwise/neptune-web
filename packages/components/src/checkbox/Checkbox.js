import React from 'react';
import Types from 'prop-types';
import CheckboxButton from '../common/CheckboxButton';

const Checkbox = ({ checked, required, disabled, label, onChange }) => {
  const handleClick = () => (!disabled ? onChange(!checked) : null);
  const errorClass = required && !disabled && !checked ? 'has-error' : '';
  return (
    <div className={`checkbox ${errorClass} ${disabled ? 'disabled' : ''}`}>
      {/* eslint-disable jsx-a11y/label-has-for */}
      <label>
        {label + (required ? '*' : '')}
        <CheckboxButton
          checked={checked}
          className={errorClass}
          onClick={handleClick}
          disabled={disabled}
        />
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  checked: Types.bool,
  required: Types.bool,
  disabled: Types.bool,
  label: Types.string.isRequired,
  onChange: Types.func.isRequired,
};

Checkbox.defaultProps = {
  checked: false,
  required: false,
  disabled: false,
};

export default Checkbox;
