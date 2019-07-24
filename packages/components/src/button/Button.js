import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import './Button.less';

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

const State = {
  Default: 'default',
  Loading: 'loading',
  Disabled: 'disabled',
};

const Button = ({ label, state, size, type, block, onClick }) => {
  const isDisabled = state === State.Disabled;
  const isLoading = state === State.Loading;

  const classes = classNames(`btn btn-${size}`, {
    'btn-loading': isLoading,
    'btn-primary': type === Type.Primary,
    'btn-success': type === Type.Pay,
    'btn-default': type === Type.Secondary,
    'btn-danger': type === Type.Danger,
    'btn-block': block,
  });

  return (
    <button
      type="button"
      className={classes}
      onClick={e => onClick(e)}
      disabled={isDisabled || state === State.Loading}
    >
      {label}
      {isLoading && <span className={classNames('btn-loader', { 'm-l-2': !block })} />}
    </button>
  );
};

Button.Type = Type;
Button.Size = Size;
Button.State = State;

Button.propTypes = {
  type: Types.oneOf(Object.values(Type)),
  size: Types.oneOf(Object.values(Size)),
  state: Types.oneOf(Object.values(State)),
  block: Types.bool,
  onClick: Types.func.isRequired,
  label: Types.string.isRequired,
};

Button.defaultProps = {
  size: Button.Size.Medium,
  type: Button.Type.Primary,
  state: Button.State.Default,
  block: false,
};

export default Button;
