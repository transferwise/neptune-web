import React from 'react';
import Types from 'prop-types';
import classnames from 'classnames';
import './Switch.css';
import { CheckCircle, CrossCircle } from '@transferwise/icons';
import KeyCodes from '../common/keyCodes';

/**
 * Switch component provides a simple switch button.
 *
 * @param {boolean} [checked=false] - boolean to set the switch status.
 * @param {function} onClick - function that manage the check logic.
 * @param {string} [id=null] - string that identifies the element.It can be use to couple the switch to its label.
 * @param {string} [className=null] - string that contains extra-classes.
 *
 * @usage '<Switch checked={checked} onClick={() => setCheck(!checked)} id='id' className='extra-class-name' />'
 * */

const Switch = ({ checked, onClick, className, id }) => {
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
      role="checkbox"
      aria-checked={checked}
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
  checked: Types.bool,
  onClick: Types.func.isRequired,
  className: Types.string,
  id: Types.string,
};
Switch.defaultProps = {
  checked: false,
  className: null,
  id: null,
};

export default Switch;
