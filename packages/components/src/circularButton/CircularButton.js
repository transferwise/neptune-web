import React, { cloneElement } from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

import { ControlType, Priority } from '../common';
import { typeClassMap, priorityClassMap } from '../button/classMap';

import './CircularButton.css';

const CircularButton = ({ className, children, disabled, icon, priority, type, ...rest }) => {
  const classes = classNames('btn np-btn', typeClassMap[type], priorityClassMap[priority]);

  const iconEl = icon.props.size !== 24 ? cloneElement(icon, { size: 24 }) : icon;

  return (
    <label
      className={`np-circular-btn ${priority} ${type} ${
        (disabled && 'disabled') || ''
      } ${className}`}
    >
      <input
        type="button"
        aria-label={children}
        className={classes}
        disabled={disabled}
        {...rest}
      />
      {iconEl}
      <span className="np-circular-btn__label">{children}</span>
    </label>
  );
};

CircularButton.Priority = {
  PRIMARY: Priority.PRIMARY,
  SECONDARY: Priority.SECONDARY,
};
CircularButton.Type = ControlType;

CircularButton.propTypes = {
  className: Types.string,
  children: Types.string.isRequired,
  disabled: Types.bool,
  icon: Types.element.isRequired,
  onClick: Types.func.isRequired,
  priority: Types.oneOf([CircularButton.Priority.PRIMARY, CircularButton.Priority.SECONDARY]),
  type: Types.oneOf([
    CircularButton.Type.ACCENT,
    CircularButton.Type.POSITIVE,
    CircularButton.Type.NEGATIVE,
  ]),
};

CircularButton.defaultProps = {
  className: '',
  disabled: false,
  priority: CircularButton.Priority.PRIMARY,
  type: CircularButton.Type.ACCENT,
};

export default CircularButton;
