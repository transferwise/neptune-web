import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import { useIntl } from 'react-intl';
import { Cross as CrossIcon } from '@transferwise/icons';

import messages from './CloseButton.messages';

import './CloseButton.css';

export const CloseButton = ({ onClick, className }) => {
  const intl = useIntl();
  return (
    <button
      type="button"
      className={classNames('tw-close-button', 'btn-link', 'text-no-decoration', className)}
      aria-label={intl.formatMessage(messages.ariaLabel)}
      onClick={onClick}
    >
      <CrossIcon size={24} />
    </button>
  );
};

CloseButton.propTypes = {
  onClick: Types.func.isRequired,
  className: Types.string,
};

CloseButton.defaultProps = {
  className: null,
};

export default CloseButton;
