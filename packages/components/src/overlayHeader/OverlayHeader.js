import React from 'react';
import Types from 'prop-types';

import Header from '../header';
import CloseButton from '../common/closeButton';

import './OverlayHeader.css';

const OverlayHeader = ({ avatar, onClose, logo }) => {
  const closeButton = onClose && <CloseButton onClick={onClose} />;
  return (
    <Header
      className="np-overlay-header p-a-3"
      leftContent={logo}
      rightContent={
        <>
          {avatar}
          {avatar && closeButton && <span className="separator" />}
          {closeButton}
        </>
      }
    />
  );
};

OverlayHeader.defaultProps = {
  avatar: null,
  onClose: null,
};

OverlayHeader.propTypes = {
  /** An Avatar */
  avatar: Types.element,
  logo: Types.node.isRequired,
  /** Function called when the close is clicked */
  onClose: Types.func,
};

export default OverlayHeader;
