import React, { PropTypes as Types } from 'react';

const Checkbox = ({ checked, required, disabled, label, onChange }) => {
  const handleClick = () => !disabled ? onChange(!checked) : null;
  const errorClass = required && !disabled && !checked ? 'has-error' : '';
  return (
    <div className={`checkbox ${errorClass} ${disabled ? 'disabled' : ''}`}>
      <label>
        {label + (required ? '*' : '')}
        <button
          className={`tw-checkbox-button ${errorClass} ${checked ? 'checked' : ''}`}
          aria-pressed={checked}
          onClick={handleClick}
          disabled={disabled}>
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

export default Checkbox;
