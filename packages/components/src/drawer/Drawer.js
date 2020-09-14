import React, { useEffect } from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import { Cross as CrossIcon } from '@transferwise/icons';
import SlidingPanel from '../slidingPanel';
import Dimmer from '../dimmer';
import { addNoScrollBodyClass, removeNoScrollBodyClass } from '../common';
import './Drawer.css';

import KEY_CODES from '../common/keyCodes';

const Drawer = ({ open, position, onClose, children, headerTitle, footerContent }) => {
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

Drawer.propTypes = {
  open: Types.bool,
  position: Types.oneOf(['left', 'right']),
  children: Types.node,
  onClose: Types.func,
  headerTitle: Types.string,
  footerContent: Types.node,
};

Drawer.defaultProps = {
  open: false,
  children: null,
  position: 'right',
  onClose: null,
  headerTitle: null,
  footerContent: null,
};

export default Drawer;
