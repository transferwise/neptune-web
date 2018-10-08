import React, { Fragment } from 'react';
import { createPortal } from 'react-dom';
import Types from 'prop-types';

import { dialogPropTypes, dialogDefaultProps } from './props';
import Backdrop from './Backdrop';
import ModalDialog from './ModalDialog';
import WithInTransition from './WithInTransition';

const Modal = ({ open, ...dialogProps }) => (
  <Fragment>
    <WithInTransition isIn={open}>
      <Backdrop />
    </WithInTransition>

    <WithInTransition isIn={open}>
      <ModalDialog {...dialogProps} />
    </WithInTransition>
  </Fragment>
);

Modal.propTypes = { open: Types.bool, ...dialogPropTypes };
Modal.defaultProps = { open: false, ...dialogDefaultProps };

export { Modal };
export default props => {
  const mountPoint = getMountPoint();
  return mountPoint ? createPortal(<Modal {...props} />, mountPoint) : '';
};

function getMountPoint() {
  return typeof document !== 'undefined' ? document.body : null;
}
