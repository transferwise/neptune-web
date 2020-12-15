import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import { Cross as CrossIcon } from '@transferwise/icons';

import './CloseButton.css';

export const CloseButton = ({ onClick, className, size }) => (
  <button
    type="button"
    className={classNames('np-close-button close', className)}
    aria-label="Close"
    onClick={onClick}
  >
    <CrossIcon size={size} />
  </button>
);

CloseButton.Size = {
  SMALL: 16,
  LARGE: 24,
};

CloseButton.propTypes = {
  onClick: Types.func.isRequired,
  className: Types.string,
  size: Types.oneOf(Object.values(CloseButton.Size)),
};

CloseButton.defaultProps = {
  className: null,
  size: CloseButton.Size.LARGE,
};

export default CloseButton;
