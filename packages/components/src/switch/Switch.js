import React from 'react';
import Types from 'prop-types';
import classnames from 'classnames';
import requiredIf from 'react-required-if';
import './Switch.css';

import { CheckCircle, CrossCircle } from '@transferwise/icons';
import KeyCodes from '../common/keyCodes';

/**
 * Switch component provides a simple switch button.
 *
 * @param {string} [aria-label=null] - Required IF no aria-labelledby is provided.
 * @param {string} [aria-labelledby=null] - Required IF no aria-label is provided. To be used when an external label needs to be coupled with the switch.
 * @param {boolean} [checked=false] - Boolean to set the switch status.
 * @param {string} [className=''] - String that contains extra-classes.
 * @param {string} [id=''] - Element Id.
 * @param {function} onClick - Function that manages the onCLick event.
 *
 * @usage '<Switch aria-labelledby='A switch with a label' checked={checked} className='extra-class-name' id='switchID' onClick={() => setCheck(!checked)} />'
 * */

const Switch = (props) => {
  const { checked, className, id, onClick } = props;
  const handleKeyDown = (event) => {
    if (event.code === 32 || event.keyCode === KeyCodes.SPACE) {
      event.preventDefault();
      onClick();
    }
  };
  return (
    <span
      className={classnames(
        'switch',
        {
          'switch--unchecked': !checked,
          'switch--checked': checked,
        },
        className,
      )}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="switch"
      aria-checked={checked}
      aria-labelledby={props['aria-labelledby']}
      aria-label={props['aria-label']}
      id={id}
    >
      <span className="switch--thumb">
        {checked ? <CheckCircle filled size={24} /> : <CrossCircle filled size={24} />}
      </span>
      <input type="checkbox" checked={checked} readOnly />
    </span>
  );
};

Switch.propTypes = {
  /** Required IF no aria-labelledby is provided. */
  'aria-label': requiredIf(Types.string, (props) => !props['aria-labelledby']),
  /** Required IF no aria-label is provided. To be used when an external label needs to be coupled with the switch. */
  'aria-labelledby': requiredIf(Types.string, (props) => !props['aria-label']),
  /** Boolean to set the switch status. */
  checked: Types.bool,
  /** String that contains extra-classes. */
  className: Types.string,
  /** Element Id */
  id: Types.string,
  /** Function that manages the click event. */
  onClick: Types.func.isRequired,
};

Switch.defaultProps = {
  'aria-label': null,
  'aria-labelledby': null,
  checked: false,
  className: null,
  id: null,
};

export default Switch;
