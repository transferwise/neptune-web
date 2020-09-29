import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import { Cross as CrossIcon } from '@transferwise/icons';
import './Chip.css';

const Chip = (props) => {
  const { className, hasError, label, onRemove } = props;
  return (
    <div className={classNames('chip', { 'has-error': hasError }, className)}>
      {label}
      <button type="button" className="btn-unstyled chip-remove m-l-2" onClick={onRemove}>
        <CrossIcon />
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
