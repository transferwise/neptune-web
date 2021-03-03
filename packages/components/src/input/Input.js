import React from 'react';
import classNames from 'classnames';
import Types from 'prop-types';

export default function Input({ inputmode, disabled, icon, ...restProps }) {
  return (
    <div className="input-group">
      <input
        type="text"
        disabled={disabled}
        className={classNames('form-control', restProps?.className)}
        inputMode={inputmode}
        {...restProps}
      />
      {icon ? (
        <>
          <div className="clearfix" />
          <span className={classNames('input-group-addon', { disabled })} disabled={disabled}>
            {icon}
          </span>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

Input.propTypes = {
  inputmode: Types.oneOf(['none', 'text', 'decimal', 'numeric', 'tel', 'search', 'email', 'url'])
    .isRequired,
  icon: Types.element,
};

Input.defaultProps = {
  icon: undefined,
};
