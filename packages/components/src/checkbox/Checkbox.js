import React from 'react';
import Types from 'prop-types';

import classNames from 'classnames';
import CheckboxButton from '../checkboxButton';

const Checkbox = ({
  id,
  checked,
  required,
  disabled,
  readOnly,
  label,
  secondary,
  onChange,
  onFocus,
  onBlur,
}) => {
  const handleClick = () => (!disabled && !readOnly ? onChange(!checked) : null);

  const hasError = required && !disabled && !readOnly && !checked;

  const classList = classNames({
    checkbox: true,
    'checkbox-lg': secondary,
    'has-error': hasError,
    disabled,
  });

  return (
    <div id={id} className={classList}>
      {/* eslint-disable jsx-a11y/label-has-for */}
      <label>
        {label}
        {required && '*'}
        {secondary && <small>{secondary}</small>}
        <CheckboxButton
          className={classNames({ 'has-error': hasError })}
          checked={checked}
          onFocus={onFocus}
          onClick={handleClick}
          onBlur={onBlur}
          disabled={disabled}
          readOnly={readOnly}
        />
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  id: Types.string,
  checked: Types.bool,
  required: Types.bool,
  disabled: Types.bool,
  readOnly: Types.bool,
  label: Types.node.isRequired,
  secondary: Types.string,
  onFocus: Types.func,
  onChange: Types.func.isRequired,
  onBlur: Types.func,
};

Checkbox.defaultProps = {
  id: null,
  checked: false,
  required: false,
  disabled: false,
  readOnly: false,
  secondary: null,
  onFocus: null,
  onBlur: null,
};

export default Checkbox;
