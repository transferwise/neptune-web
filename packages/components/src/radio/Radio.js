import React from 'react';
import Types from 'prop-types';

import RadioButton from '../common/RadioButton';

const Radio = ({ label, id, disabled, ...otherProps }) => (
  <div className="radio" disabled={disabled}>
    <label htmlFor={id}>
      {/* eslint-enable jsx-a11y/label-has-for */}
      <RadioButton id={id} disabled={disabled} {...otherProps} />
      {label}
    </label>
  </div>
);

Radio.propTypes = {
  checked: Types.bool,
  disabled: Types.bool,
  id: Types.string,
  label: Types.string.isRequired,
  name: Types.string.isRequired,
  onChange: Types.func.isRequired,
  secondary: Types.string,
  value: Types.oneOfType([Types.number, Types.string]),
};

Radio.defaultProps = {
  checked: false,
  disabled: false,
  id: null,
  secondary: null,
  value: '',
};

export default Radio;
