import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import CSSTransition from 'react-transition-group/CSSTransition';
import { createPortal } from 'react-dom';
import '@transferwise/neptune-css/dist/css/dimmer.css';
import { addModalOpenBodyClass, removeModalOpenBodyClass } from '../common';

import KEY_CODES from '../common/keyCodes';

export const EXIT_ANIMATION = 350;

const Dimmer = ({ open, children, onClose, fadeContentOnExit, fadeContentOnEnter }) => {
  const handleOnKeyDown = event => {
    if (event && (event.keyCode === KEY_CODES.ESCAPE || event.key === 'Escape')) {
      handleOnClose(event);
    }
  };

  const handleOnEnter = () => {
    addModalOpenBodyClass();
    document.addEventListener('keydown', handleOnKeyDown);
  };

  const handleOnClick = event => {
    // Prevents the onclick to be fired by children.
    if (event.target === event.currentTarget) {
      handleOnClose(event);
    }
  };

  const handleOnClose = event => {
    removeModalOpenBodyClass();
    document.removeEventListener('keydown', handleOnKeyDown);
    if (onClose) {
      onClose(event);
    }
  };

  return (
    <CSSTransition
      in={open}
      // Wait for animation to finish before unmount.
      timeout={{ enter: 0, exit: EXIT_ANIMATION }}
      onEnter={handleOnEnter}
      onExited={handleOnClose}
      classNames={{
        enter: classNames({ 'dimmer--enter-fade': fadeContentOnEnter }),
        enterDone: classNames('dimmer--enter-done', { 'dimmer--enter-fade': fadeContentOnEnter }),
        exit: classNames('dimmer--exit', { 'dimmer--exit-fade': fadeContentOnExit }),
      }}
      unmountOnExit
    >
      <div role="presentation" className="dimmer" onClick={handleOnClick}>
        {children}
      </div>
    </CSSTransition>
  );
};

Dimmer.propTypes = {
  open: Types.bool,
  children: Types.node,
  onClose: Types.func,
  fadeContentOnExit: Types.bool,
  fadeContentOnEnter: Types.bool,
};

Dimmer.defaultProps = {
  open: false,
  children: null,
  onClose: null,
  fadeContentOnExit: false,
  fadeContentOnEnter: false,
};

export { Dimmer };

export default props =>
  typeof document !== 'undefined' ? createPortal(<Dimmer {...props} />, document.body) : '';
