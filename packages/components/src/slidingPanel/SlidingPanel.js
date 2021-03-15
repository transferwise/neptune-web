import React, { forwardRef } from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import CSSTransition from 'react-transition-group/CSSTransition';
import './SlidingPanel.css';

export const EXIT_ANIMATION = 350;

const SlidingPanel = forwardRef(
  (
    {
      children,
      className,
      open,
      position,
      showSlidingPanelBorder,
      slidingPanelPositionFixed,
      ...rest
    },
    ref,
  ) => {
    return (
      <CSSTransition
        {...rest}
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
        <div className={classNames('sliding-panel', className)} ref={ref}>
          {children}
        </div>
      </CSSTransition>
    );
  },
);

SlidingPanel.propTypes = {
  children: Types.node,
  className: Types.string,
  open: Types.bool,
  position: Types.oneOf(['top', 'bottom', 'left', 'right']),
  showSlidingPanelBorder: Types.bool,
  slidingPanelPositionFixed: Types.bool,
};

SlidingPanel.defaultProps = {
  children: null,
  className: undefined,
  open: false,
  position: 'left',
  showSlidingPanelBorder: false,
  slidingPanelPositionFixed: false,
};

export default SlidingPanel;
