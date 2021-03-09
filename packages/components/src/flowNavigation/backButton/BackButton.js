import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import { ArrowLeft as ArrowLeftIcon } from '@transferwise/icons';

import './BackButton.css';

const BackButton = ({ label, className, onClick }) => (
  <button
    type="button"
    className={classNames('np-back-button', 'align-items-center', 'btn-unstyled', className)}
    onClick={onClick}
  >
    <ArrowLeftIcon size={24} />
    {label}
  </button>
);

BackButton.propTypes = {
  className: Types.string,
  label: Types.element,
  onClick: Types.func.isRequired,
};

BackButton.defaultProps = {
  className: undefined,
  label: undefined,
};

export default BackButton;
