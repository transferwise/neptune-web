import React, { useRef } from 'react';
import Types from 'prop-types';

import { Position } from '..';
import { useConditionalListener } from '../hooks';
import BottomSheet from '../bottomSheet';
import Panel from '../panel';
import SizeSwapper from '../../sizeSwapper';

import keyCodes from '../keyCodes';

const ResponsivePanel = ({ anchorRef, arrow, children, className, onClose, open, position }) => {
  const windowRef = typeof window === 'undefined' ? undefined : window;

  const ref = useRef(null);

  useConditionalListener({
    eventType: 'click',
    callback: (event) =>
      // onClose gets called when click is outside of popover.
      ![ref, anchorRef].some((el) => el?.current?.contains(event.target)) && onClose(),
    attachListener: open,
  });

  useConditionalListener({
    eventType: 'keydown',
    // onClose gets called when key down is ESCAPE.
    callback: (event) => event.keyCode === keyCodes.ESCAPE && onClose(),
    attachListener: open,
  });

  const items = [
    {
      items: [
        <BottomSheet open={open} ref={ref} key="bottomSheet" className={className}>
          {children}
        </BottomSheet>,
      ],
    },
    {
      items: [
        <Panel
          arrow={arrow}
          open={open}
          position={position}
          ref={ref}
          anchorRef={anchorRef}
          key="panel"
          className={className}
        >
          {children}
        </Panel>,
      ],
      breakpoint: SizeSwapper.Breakpoint.SMALL,
    },
  ];
  return <SizeSwapper items={items} ref={windowRef} />;
};

ResponsivePanel.Position = {
  BOTTOM: Position.BOTTOM,
  LEFT: Position.LEFT,
  RIGHT: Position.RIGHT,
  TOP: Position.TOP,
};

ResponsivePanel.defaultProps = {
  arrow: false,
  className: undefined,
  open: false,
  position: ResponsivePanel.Position.TOP,
};

ResponsivePanel.propTypes = {
  arrow: Types.bool,
  children: Types.node.isRequired,
  className: Types.string,
  /** Function attached to document click and keydown. It gets called when a close condition provided is met. */
  onClose: Types.func.isRequired,
  open: Types.bool,
  anchorRef: Types.shape({ current: Types.shape({}) }).isRequired,
  position: Types.oneOf([
    ResponsivePanel.Position.TOP,
    ResponsivePanel.Position.RIGHT,
    ResponsivePanel.Position.LEFT,
    ResponsivePanel.Position.BOTTOM,
  ]),
};

export default ResponsivePanel;
