import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import Close from '@transferwise/icons/react/close';
import '@transferwise/neptune-css/dist/css/chip.css';

const Chip = props => {
  const { className, hasError, label, onRemove } = props;
  return (
    <div className={classNames('chip', { 'has-error': hasError }, className)}>
      {label}
      <button className="btn-unstyled chip-remove" onClick={onRemove}>
        <Close size="sm" />
      </button>
    </div>
  );
};

Chip.propTypes = {
  label: Types.string.isRequired,
  onRemove: Types.func.isRequired,
  className: Types.string,
  hasError: Types.bool,
};

Chip.defaultProps = {
  className: '',
  hasError: false,
};

export default Chip;
