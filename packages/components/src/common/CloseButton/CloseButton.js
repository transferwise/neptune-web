import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import { Cross as CrossIcon } from '@transferwise/icons';

import './CloseButton.css';

export const CloseButton = ({ ...htmlProps }) => (
  <button
    className={classNames('tw-close-button', 'btn-link', 'text-no-decoration', htmlProps.className)}
    aria-label={htmlProps['aria-label']}
    onClick={htmlProps.onClick}
  >
    <CrossIcon size={24} />
  </button>
);

CloseButton.propTypes = {
  onClick: Types.func.isRequired,
  'aria-label': Types.string.isRequired,
};

export default CloseButton;
