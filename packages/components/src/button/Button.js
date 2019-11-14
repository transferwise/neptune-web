import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import requiredIf from 'react-required-if';

import './Button.css';

const Type = {
  Primary: 'primary',
  Pay: 'pay',
  Secondary: 'secondary',
  Danger: 'danger',
};

const Size = {
  ExtraSmall: 'xs',
  Small: 'sm',
  Medium: 'md',
  Large: 'lg',
};

const Button = ({ block, children, disabled, htmlType, loading, size, type, ...rest }) => {
  const classes = classNames(`btn btn-${size}`, {
    'btn-loading': loading,
    'btn-primary': type === Type.Primary,
    'btn-success': type === Type.Pay,
    'btn-default': type === Type.Secondary,
    'btn-danger': type === Type.Danger,
    'btn-block': block,
  });

  return (
    <button type={htmlType} className={classes} disabled={disabled || loading} {...rest}>
      {children}
      {loading && <span className={classNames('btn-loader', { 'm-l-2': !block })} />}
    </button>
  );
};

Button.Type = Type;
Button.Size = Size;

Button.propTypes = {
  type: Types.oneOf(Object.values(Type)),
  size: Types.oneOf(Object.values(Size)),
  disabled: Types.bool,
  block: Types.bool,
  loading: Types.bool,
  // eslint-disable-next-line
  onClick: requiredIf(Types.func, props => props.htmlType !== 'submit'),
  children: Types.node.isRequired,
  htmlType: Types.oneOf(['submit', 'reset', 'button']),
};

Button.defaultProps = {
  size: Button.Size.Medium,
  type: Button.Type.Primary,
  disabled: false,
  block: false,
  loading: false,
  htmlType: 'button',
};

export default Button;
