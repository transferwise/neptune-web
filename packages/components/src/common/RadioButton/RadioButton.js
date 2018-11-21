import React, { Fragment } from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

import './RadioButton.less';

const RadioButton = ({ id, name, checked, onChange, disabled }) => (
  <Fragment>
    <input
      type="radio"
      className="sr-only"
      id={id}
      value={id}
      name={name}
      checked={checked}
      onChange={() => {
        onChange(!checked);
      }}
      disabled={disabled}
    />
    <button
      type="button"
      className={classNames('tw-radio-button', { checked })}
      disabled={disabled}
      aria-pressed={checked}
      tabIndex="-1"
    >
      <span className="tw-radio-check" />
    </button>
  </Fragment>
);

RadioButton.propTypes = {
  id: Types.string,
  name: Types.string.isRequired,
  checked: Types.bool,
  onChange: Types.func,
  disabled: Types.bool,
};

RadioButton.defaultProps = {
  checked: false,
  onChange: () => {},
  disabled: false,
  id: null,
};

export default RadioButton;
