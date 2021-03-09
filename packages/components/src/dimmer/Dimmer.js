import React, { useEffect } from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import CSSTransition from 'react-transition-group/CSSTransition';
import withNextPortal from '../withNextPortal/withNextPortal';
import { addNoScrollBodyClass, removeNoScrollBodyClass } from '../common';

import './Dimmer.css';

import KEY_CODES from '../common/keyCodes';

export const EXIT_ANIMATION = 350;

const Dimmer = ({ open, children, scrollable, onClose, fadeContentOnExit, fadeContentOnEnter }) => {
  const handleOnClose = (event) => {
    if (onClose) {
      onClose(event);
    }
  };

  const handleOnClick = (event) => {
    // Prevents the onclick to be fired by children.
    if (event.target === event.currentTarget) {
      handleOnClose(event);
    }
  };

  return (
    <CSSTransition
      in={open}
      appear
      // Wait for animation to finish before unmount.
      timeout={{ enter: 0, exit: EXIT_ANIMATION }}
      classNames={{
        enter: classNames({ 'dimmer--enter-fade': fadeContentOnEnter }),
        enterDone: classNames('dimmer--enter-done', { 'dimmer--enter-fade': fadeContentOnEnter }),
        exit: classNames('dimmer--exit', { 'dimmer--exit-fade': fadeContentOnExit }),
      }}
      unmountOnExit
    >
      <DimmerContentWrapper handleOnClose={handleOnClose}>
        <div
          role="presentation"
          className={classNames('dimmer', { 'dimmer--scrollable': scrollable })}
          onClick={handleOnClick}
        >
          {children}
        </div>
      </DimmerContentWrapper>
    </CSSTransition>
  );
};

export const DimmerContentWrapper = ({ children, handleOnClose }) => {
  useEffect(() => {
    const handleOnKeyDown = (event) => {
      if (event && (event.keyCode === KEY_CODES.ESCAPE || event.key === 'Escape')) {
        handleOnClose(event);
      }
    };
    addNoScrollBodyClass();
    document.addEventListener('keydown', handleOnKeyDown);

    return () => {
      removeNoScrollBodyClass();
      document.removeEventListener('keydown', handleOnKeyDown);
    };
  }, []);

  return children;
};

Dimmer.propTypes = {
  scrollable: Types.bool,
  open: Types.bool,
  children: Types.node,
  onClose: Types.func,
  fadeContentOnExit: Types.bool,
  fadeContentOnEnter: Types.bool,
};

Dimmer.defaultProps = {
  scrollable: false,
  open: false,
  children: null,
  onClose: null,
  fadeContentOnExit: false,
  fadeContentOnEnter: false,
};

export { Dimmer };

export default withNextPortal(Dimmer);
