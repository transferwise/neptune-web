import React from 'react';
import Types from 'prop-types';
import classnames from 'classnames';
import './Switch.css';
// @TODO Add this once new icons are released
// import { CheckCircle, CrossCircle } from '@transferwise/icons';
import KeyCodes from '../common/keyCodes';

// @TODO Remove this once new icons are released
const CheckCircle = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM7.70712 11.2929L6.29291 12.7072L10.5 16.9143L18.2071 9.20715L16.7929 7.79293L10.5 14.0858L7.70712 11.2929Z"
      fill="#fff"
    />
  </svg>
);
const CrossCircle = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM15.2929 16.7071L12 13.4142L8.70715 16.7071L7.29294 15.2929L10.5858 12L7.29291 8.70712L8.70712 7.29291L12 10.5858L15.2929 7.29291L16.7072 8.70712L13.4142 12L16.7071 15.2929L15.2929 16.7071Z"
      fill="#fff"
    />
  </svg>
);

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
