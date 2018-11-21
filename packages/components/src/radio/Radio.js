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
  label: Types.string.isRequired,
  id: Types.string,
  name: Types.string.isRequired,
  onChange: Types.func.isRequired,
  checked: Types.bool,
  disabled: Types.bool,
};

Radio.defaultProps = {
  checked: false,
  disabled: false,
  id: null,
};

export default Radio;
