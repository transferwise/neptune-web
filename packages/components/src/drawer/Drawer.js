import React, { useEffect } from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import { Cross as CrossIcon } from '@transferwise/icons';
import SlidingPanel from '../slidingPanel';
import Dimmer from '../dimmer';
import { addNoScrollBodyClass, removeNoScrollBodyClass } from '../common';
import './Drawer.css';
import { Position } from '../common/propsValues/position';
import { logActionRequiredIf } from '../utilities';

import KEY_CODES from '../common/keyCodes';

const Drawer = ({ children, footerContent, headerTitle, onClose, open, position }) => {
  logActionRequiredIf(
    'Drawer now expects `onClose`, and will soon make this prop required. Please update your usage to provide it.',
    !onClose,
  );

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
        <div className="np-drawer">
          <div
            className={classNames('np-drawer-header', 'np-drawer-p-x', {
              'np-drawer-header--withborder': headerTitle,
            })}
          >
            <div
              role="button"
              className="np-drawer-header close"
              tabIndex={0}
              onClick={onClose}
              onKeyDown={onClose && handleOnKeyDown}
              aria-label="Close"
            >
              <CrossIcon size={24} />
            </div>
            {headerTitle && (
              <div className="align-heading m-l-2">
                <div className="np-drawer-header--title h3">{headerTitle}</div>
              </div>
            )}
          </div>
          {children && (
            <div className={classNames('np-drawer-content', 'np-drawer-p-x', 'np-drawer-p-y')}>
              {children}
            </div>
          )}
          {footerContent && (
            <div className={classNames('np-drawer-footer', 'np-drawer-p-x')}>{footerContent}</div>
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
  onClose: Types.func,
  /** The status of Drawer either open or not. */
  open: Types.bool,
  /** The placement of Drawer on the screen either left or right. */
  position: Types.oneOf([Drawer.Position.LEFT, Drawer.Position.RIGHT]),
};

Drawer.defaultProps = {
  children: null,
  footerContent: null,
  headerTitle: null,
  onClose: null,
  open: false,
  position: Drawer.Position.RIGHT,
};

export default Drawer;
