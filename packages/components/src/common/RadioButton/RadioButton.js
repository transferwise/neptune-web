import React, { Fragment } from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

import './RadioButton.less';

const RadioButton = ({ id, value, name, checked, onChange, disabled }) => (
  <Fragment>
    <input
      type="radio"
      className="sr-only"
      id={id}
      value={value}
      name={name}
      checked={checked}
      onChange={() => (!checked ? onChange(value) : null)}
      disabled={disabled}
    />
    <button
      type="button"
      className={classNames('tw-radio-button', { checked })}
      disabled={disabled}
      aria-pressed={checked}
      tabIndex="-1"
      onClick={() => (!checked ? onChange(value) : null)}
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
  value: Types.string,
};

RadioButton.defaultProps = {
  checked: false,
  onChange: () => {},
  disabled: false,
  id: null,
  value: '',
};

export default RadioButton;
