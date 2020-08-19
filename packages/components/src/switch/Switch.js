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
 * @param {boolean} [checked=false] - boolean to set the switch status.
 * @param {function} onClick - function that manage the check logic.
 * @param {string} [id=null] - string that identifies the element.It can be use to couple the switch to its label.
 * @param {string} [className=null] - string that contains extra-classes.
 *
 * @usage '<Switch checked={checked} onClick={() => setCheck(!checked)} id='id' className='extra-class-name' />'
 * */

const Switch = ({ onClick, ...htmlProps }) => {
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
          'switch--unchecked': !htmlProps.checked,
          'switch--checked': htmlProps.checked,
        },
        htmlProps.className,
      )}
      onClick={htmlProps.onClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="switch"
      aria-checked={htmlProps.checked}
      aria-label={htmlProps['aria-label']}
      aria-labelledby={htmlProps['aria-labelledby']}
      id={htmlProps.id}
    >
      <span className="switch--thumb">
        {htmlProps.checked ? <CheckCircle filled size={24} /> : <CrossCircle filled size={24} />}
      </span>
      <input type="checkbox" checked={htmlProps.checked} readOnly />
    </span>
  );
};

Switch.propTypes = {
  onClick: Types.func.isRequired,
  // https://www.w3.org/TR/wai-aria/#aria-label
  'aria-label': requiredIf(Types.string, (props) => props['aria-labelledby'] === undefined),
  'aria-labelledby': Types.string,
};

Switch.defaultProps = {
  'aria-label': undefined,
  'aria-labelledby': undefined,
};

export default Switch;
