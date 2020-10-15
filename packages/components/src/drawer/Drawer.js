import React, { useEffect } from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import { Cross as CrossIcon } from '@transferwise/icons';
import SlidingPanel from '../slidingPanel';
import Dimmer from '../dimmer';
import { addNoScrollBodyClass, removeNoScrollBodyClass } from '../common';
import './Drawer.css';
import { Position } from '../common/propsValues/position';

import KEY_CODES from '../common/keyCodes';

const Drawer = ({ children, footerContent, headerTitle, onClose, open, position }) => {
  const handleOnKeyDown = (event) => {
    if (
      event.keyCode === KEY_CODES.ESCAPE ||
      event.key === 'Escape' ||
      event.keyCode === KEY_CODES.ENTER ||
      event.key === KEY_CODES.ENTER
    ) {
      onClose(event);
    }
  };

  useEffect(() => {
    return () => {
      if (open) {
        removeNoScrollBodyClass();
      }
    };
  }, []);

  const handleOnEnter = () => {
    addNoScrollBodyClass();
  };

  const handleOnExit = () => {
    removeNoScrollBodyClass();
  };

  return (
    <Dimmer open={open} onClose={onClose}>
      <SlidingPanel open={open} position={position} onEnter={handleOnEnter} onExit={handleOnExit}>
        <div className="drawer">
          <div
            className={classNames('drawer-header', 'drawer-p-x', {
              'drawer-header--withborder': headerTitle,
            })}
          >
            <div
              role="button"
              className="drawer-header close"
              tabIndex={0}
              onClick={onClose}
              onKeyDown={handleOnKeyDown}
              aria-label="Close"
            >
              <CrossIcon size={24} />
            </div>
            {headerTitle && (
              <div className="align-heading m-l-2">
                <h3 className="drawer-header--title">{headerTitle}</h3>
              </div>
            )}
          </div>
          {children && (
            <div className={classNames('drawer-content', 'drawer-p-x', 'drawer-p-y')}>
              {children}
            </div>
          )}
          {footerContent && (
            <div className={classNames('drawer-footer', 'drawer-p-x')}>{footerContent}</div>
          )}
        </div>
      </SlidingPanel>
    </Dimmer>
  );
};

Drawer.Position = { LEFT: Position.LEFT, RIGHT: Position.RIGHT };

Drawer.propTypes = {
  /** The content to appear in the drawer body. */
  children: Types.node,
  /** The content to appear in the drawer footer. */
  footerContent: Types.node,
  /** The content to appear in the drawer header. */
  headerTitle: Types.string,
  /** The action to perform on close click. */
  onClose: Types.func.isRequired,
  /** The status of Drawer either open or not. */
  open: Types.bool,
  /** The placement of Drawer on the screen either left or right. */
  position: Types.oneOf([Drawer.Position.LEFT, Drawer.Position.RIGHT]),
};

Drawer.defaultProps = {
  children: null,
  footerContent: null,
  headerTitle: null,
  open: false,
  position: Drawer.Position.RIGHT,
};

export default Drawer;
