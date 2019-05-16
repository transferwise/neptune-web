import React from 'react';
import Types from 'prop-types';

import RadioButton from '../common/RadioButton';

const Radio = ({ label, id, ...otherProps }) => (
  <div className="radio">
    <label htmlFor={id}>
      {/* eslint-enable jsx-a11y/label-has-for */}
      <RadioButton id={id} {...otherProps} />
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
  value: Types.string,
};

Radio.defaultProps = {
  checked: false,
  disabled: false,
  id: null,
  secondary: null,
  value: '',
};

export default Radio;
