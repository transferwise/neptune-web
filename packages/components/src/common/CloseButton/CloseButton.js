import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import { Cross as CrossIcon } from '@transferwise/icons';

import './CloseButton.css';

export const CloseButton = ({ onClick, className }) => (
  <button
    type="button"
    className={classNames('tw-close-button', 'btn-link', 'text-no-decoration', className)}
    aria-label="Close"
    onClick={onClick}
  >
    <CrossIcon size={24} />
  </button>
);

CloseButton.propTypes = {
  onClick: Types.func.isRequired,
  className: Types.string,
};

CloseButton.defaultProps = {
  className: null,
};

export default CloseButton;
