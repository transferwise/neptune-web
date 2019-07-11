import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import CSSTransition from 'react-transition-group/CSSTransition';
import '@transferwise/neptune-css/dist/css/sliding-panel.css';

export const EXIT_ANIMATION = 350;

const SlidingPanel = ({
  open,
  position,
  children,
  slidingPanelPositionFixed,
  showSlidingPanelBorder,
}) => (
  <CSSTransition
    in={open}
    // Wait for animation to finish before unmount.
    timeout={{ enter: 0, exit: EXIT_ANIMATION }}
    classNames={classNames(
      `sliding-panel--open-${position}`,
      showSlidingPanelBorder && `sliding-panel--border-${position}`,
      {
        'sliding-panel--fixed': slidingPanelPositionFixed,
      },
      'sliding-panel',
    )}
    appear
    unmountOnExit
  >
    <div className="sliding-panel">{children}</div>
  </CSSTransition>
);

SlidingPanel.propTypes = {
  open: Types.bool,
  slidingPanelPositionFixed: Types.bool,
  showSlidingPanelBorder: Types.bool,
  position: Types.oneOf(['top', 'bottom', 'left', 'right']),
  children: Types.node,
};

SlidingPanel.defaultProps = {
  open: false,
  slidingPanelPositionFixed: false,
  showSlidingPanelBorder: false,
  position: 'left',
  children: null,
};

export default SlidingPanel;
