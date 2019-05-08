import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import './Button.less';

export const ButtonType = {
  Primary: 'primary',
  Pay: 'pay',
  Secondary: 'secondary',
  Danger: 'danger',
};

export const ButtonSize = {
  ExtraSmall: 'xs',
  Small: 'sm',
  Medium: 'md',
  Large: 'lg',
};

export const ButtonState = {
  Default: 'default',
  Loading: 'loading',
  Disabled: 'disabled',
};

const Button = ({ label, buttonState, size, type, block, onClick }) => {
  const isDisabled = buttonState === ButtonState.Disabled;
  const isLoading = buttonState === ButtonState.Loading;

  const classes = classNames(`btn btn-${size}`, {
    'btn-loading': isLoading,
    'btn-primary': type === ButtonType.Primary,
    'btn-success': type === ButtonType.Pay,
    'btn-default': type === ButtonType.Secondary,
    'btn-danger': type === ButtonType.Danger,
    'btn-block': block,
  });

  return (
    <button
      type="button"
      className={classes}
      onClick={e => onClick(e)}
      disabled={isDisabled || buttonState === ButtonState.Loading}
    >
      {label}
      {isLoading && <span className={classNames('btn-loader', { 'm-l-2': !block })} />}
    </button>
  );
};

Button.propTypes = {
  type: Types.oneOf(Object.values(ButtonType)),
  size: Types.oneOf(Object.values(ButtonSize)),
  buttonState: Types.oneOf(Object.values(ButtonState)),
  block: Types.bool,
  onClick: Types.func.isRequired,
  label: Types.string.isRequired,
};

Button.defaultProps = {
  size: ButtonSize.Medium,
  type: ButtonType.Primary,
  buttonState: ButtonState.Default,
  block: false,
};

export default Button;
