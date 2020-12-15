import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import requiredIf from 'react-required-if';
import { logActionRequiredIf } from '../utilities';

import './Button.css';

import { Size, Type } from '../common';

const Button = ({
  className,
  block,
  children,
  disabled,
  htmlType,
  loading,
  size,
  type,
  ...rest
}) => {
  const classes = classNames(
    `btn btn-${size}`,
    `np-btn np-btn-${size}`,
    {
      'btn-loading': loading,
      'btn-primary': type === Type.PRIMARY,
      'btn-success': type === Type.PAY,
      'btn-default': type === Type.SECONDARY,
      'btn-danger': type === Type.DANGER,
      'btn-link': type === Type.LINK,
      'btn-block np-btn-block': block,
    },
    className,
  );

  logActionRequiredIf(
    'Button has deprecated the `Button.Size.EXTRA_SMALL` value for the `size` prop. Please use Button.Size.SMALL instead.',
    size === Size.EXTRA_SMALL,
  );
  return (
    /* eslint-disable react/button-has-type */
    <button type={htmlType} className={classes} disabled={disabled || loading} {...rest}>
      {children}
      {loading && <span className={classNames('btn-loader', { 'm-l-2': !block })} />}
    </button>
  );
};

Button.Type = Type;
Button.Size = {
  EXTRA_SMALL: Size.EXTRA_SMALL,
  SMALL: Size.SMALL,
  MEDIUM: Size.MEDIUM,
  LARGE: Size.LARGE,
};

Button.propTypes = {
  className: Types.string,
  type: Types.oneOf([
    Button.Type.PRIMARY,
    Button.Type.PAY,
    Button.Type.SECONDARY,
    Button.Type.DANGER,
    Button.Type.LINK,
  ]),
  /** @DEPRECATED Button.Size.EXTRA_SMALL */
  size: Types.oneOf([
    Button.Size.EXTRA_SMALL,
    Button.Size.SMALL,
    Button.Size.MEDIUM,
    Button.Size.LARGE,
  ]),
  disabled: Types.bool,
  block: Types.bool,
  loading: Types.bool,
  // eslint-disable-next-line
  onClick: requiredIf(Types.func, (props) => props.htmlType !== 'submit'),
  children: Types.node.isRequired,
  htmlType: Types.oneOf(['submit', 'reset', 'button']),
};

Button.defaultProps = {
  className: null,
  size: Button.Size.MEDIUM,
  type: Button.Type.PRIMARY,
  disabled: false,
  block: false,
  loading: false,
  htmlType: 'button',
};

export default Button;
