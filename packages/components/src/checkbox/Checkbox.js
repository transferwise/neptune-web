import React from 'react';
import Types from 'prop-types';

const Checkbox = ({ checked, required, disabled, label, onChange }) => {
  const handleClick = () => (!disabled ? onChange(!checked) : null);
  const errorClass = required && !disabled && !checked ? 'has-error' : '';
  return (
    <div className={`checkbox ${errorClass} ${disabled ? 'disabled' : ''}`}>
      {/* eslint-disable jsx-a11y/label-has-for */}
      <label>
        {/* eslint-enable jsx-a11y/label-has-for */}
        {label + (required ? '*' : '')}
        <button
          type="button"
          className={`tw-checkbox-button ${errorClass} ${checked ? 'checked' : ''}`}
          aria-pressed={checked}
          onClick={handleClick}
          disabled={disabled}
        >
          <span className="tw-checkbox-check glyphicon glyphicon-ok" />
        </button>
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
