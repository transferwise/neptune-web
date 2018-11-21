import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

const CheckboxButton = ({ checked, onClick, disabled, className }) => (
  <button
    type="button"
    className={classNames('tw-checkbox-button', { checked }, className)}
    aria-pressed={checked}
    onClick={() => {
      onClick();
    }}
    disabled={disabled}
  >
    <span className="tw-checkbox-check glyphicon glyphicon-ok" />
  </button>
);

CheckboxButton.propTypes = {
  checked: Types.bool,
  onClick: Types.func,
  disabled: Types.bool,
  className: Types.string,
};

CheckboxButton.defaultProps = {
  checked: false,
  disabled: false,
  onClick: () => {},
  className: '',
};

export default CheckboxButton;
