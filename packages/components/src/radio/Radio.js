import React from 'react';
import Types from 'prop-types';

const Radio = ({ label, disabled, name, checked, onChange }) => {
  const handleClick = () => !disabled && onChange(!checked);
  const buttonClass = `tw-radio-button ${checked ? 'checked' : ''}`;
  return (
    <div className="radio">
      <label>
        <input
          type="radio"
          className="sr-only"
          name={name}
          value={checked}
          onChange={handleClick}
          disabled={disabled} />
        <button
          type="button"
          className={buttonClass}
          onClick={handleClick}
          disabled={disabled}
          aria-pressed={checked}>
          <span className="tw-radio-check"/>
        </button>
        {label}
      </label>
    </div>
  );
}

Radio.propTypes = {
  label: Types.string.isRequired,
  name: Types.string.isRequired,
  onChange: Types.func.isRequired,
  checked: Types.bool,
};

export default Radio;
