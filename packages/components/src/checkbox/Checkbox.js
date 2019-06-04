import React from 'react';
import Types from 'prop-types';
import CheckboxButton from '../common/CheckboxButton';

const Checkbox = ({ checked, required, disabled, label, onChange, onFocus, onBlur }) => {
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
          onFocus={onFocus}
          onClick={handleClick}
          onBlur={onBlur}
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
  onFocus: Types.func,
  onChange: Types.func.isRequired,
  onBlur: Types.func,
};

Checkbox.defaultProps = {
  checked: false,
  required: false,
  disabled: false,
  onFocus: null,
  onBlur: null,
};

export default Checkbox;
