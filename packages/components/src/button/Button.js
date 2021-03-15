import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import requiredIf from 'react-required-if';

import './Button.css';

import { Size, ControlType, Priority, Type } from '../common';
import { establishNewPriority, establishNewType, logDeprecationNotices } from './legacyUtils';
import { typeClassMap, priorityClassMap } from './classMap';

const Button = (props) => {
  const {
    block,
    children,
    className,
    disabled,
    htmlType,
    loading,
    priority,
    size,
    type,
    ...rest
  } = props;

  logDeprecationNotices(props);

  const newType = establishNewType(type);
  const newPriority = establishNewPriority(priority, type);

  const classes = classNames(
    `btn btn-${size}`,
    `np-btn np-btn-${size}`,
    {
      'btn-loading': loading,
      'btn-block np-btn-block': block,
    },
    typeClassMap[newType],
    priorityClassMap[newPriority],
    className,
  );

  return (
    /* eslint-disable react/button-has-type */
    <button type={htmlType} className={classes} disabled={disabled || loading} {...rest}>
      {children}
      {loading && <span className={classNames('btn-loader', { 'm-l-2': !block })} />}
    </button>
  );
};

Button.Priority = Priority;
Button.Type = { ...Type, ...ControlType };
Button.Size = {
  EXTRA_SMALL: Size.EXTRA_SMALL,
  SMALL: Size.SMALL,
  MEDIUM: Size.MEDIUM,
  LARGE: Size.LARGE,
};

Button.propTypes = {
  block: Types.bool,
  children: Types.node.isRequired,
  className: Types.string,
  disabled: Types.bool,
  htmlType: Types.oneOf(['submit', 'reset', 'button']),
  loading: Types.bool,
  // eslint-disable-next-line
  onClick: requiredIf(Types.func, (props) => props.htmlType !== 'submit'),
  priority: Types.oneOf([
    Button.Priority.PRIMARY,
    Button.Priority.SECONDARY,
    Button.Priority.TERTIARY,
  ]),
  /** @DEPRECATED Type.PRIMARY, Type.PAY, Type.SECONDARY, Type.DANGER, Type.LINK */
  type: Types.oneOf([
    Button.Type.ACCENT,
    Button.Type.POSITIVE,
    Button.Type.NEGATIVE,
    Button.Type.PRIMARY,
    Button.Type.PAY,
    Button.Type.SECONDARY,
    Button.Type.DANGER,
    Button.Type.LINK,
  ]),
  /** @DEPRECATED Size.EXTRA_SMALL */
  size: Types.oneOf([
    Button.Size.EXTRA_SMALL,
    Button.Size.SMALL,
    Button.Size.MEDIUM,
    Button.Size.LARGE,
  ]),
};

Button.defaultProps = {
  block: false,
  className: null,
  disabled: false,
  htmlType: 'button',
  loading: false,
  priority: Button.Priority.PRIMARY,
  size: Button.Size.MEDIUM,
  type: Button.Type.ACCENT,
};

export default Button;
