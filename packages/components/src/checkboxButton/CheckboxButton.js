import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

import './CheckboxButton.css';

const CheckboxButton = ({ checked, className, disabled, onChange, ...rest }) => (
  <span className={classNames('np-checkbox-button', className)}>
    <input {...rest} type="checkbox" disabled={disabled} checked={checked} onChange={onChange} />
    <span className="tw-checkbox-button">
      <span className="tw-checkbox-check" />
    </span>
  </span>
);

CheckboxButton.propTypes = {
  /* Provide this if the CheckboxButton is being used without a label */
  'aria-label': Types.string,
  checked: Types.bool,
  className: Types.string,
  disabled: Types.bool,
  onChange: Types.func.isRequired,
};

CheckboxButton.defaultProps = {
  'aria-label': undefined,
  checked: false,
  className: undefined,
  disabled: false,
};

export default CheckboxButton;
