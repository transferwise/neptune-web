import React, { useRef } from 'react';
import Types from 'prop-types';

import { Position } from '..';
import { useConditionalListener } from '../hooks';
import BottomSheet from '../bottomSheet';
import Panel from '../panel';
import SizeSwapper from '../../sizeSwapper';

import keyCodes from '../keyCodes';

const ResponsivePanel = ({ arrow, onClose, children, open, position, triggerRef }) => {
  const windowRef = typeof window === 'undefined' ? undefined : window;

  const ref = useRef(null);

  useConditionalListener({
    eventType: 'click',
    callback: (event) =>
      onClose(![ref, triggerRef].some((el) => el?.current?.contains(event.target))),
    attachListener: open,
  });

  useConditionalListener({
    eventType: 'keydown',
    callback: (event) => onClose(event.keyCode === keyCodes.ESCAPE),
    attachListener: open,
  });

  const items = [
    {
      items: [
        <BottomSheet open={open} ref={ref} key="bottomSheet">
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
          triggerRef={triggerRef}
          key="panel"
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
  onClose: undefined,
  position: ResponsivePanel.Position.TOP,
};

ResponsivePanel.propTypes = {
  onClose: Types.func,
  children: Types.node.isRequired,
  position: Types.oneOf([
    ResponsivePanel.Position.TOP,
    ResponsivePanel.Position.RIGHT,
    ResponsivePanel.Position.LEFT,
    ResponsivePanel.Position.BOTTOM,
  ]),
  arrow: Types.bool,
  open: Types.bool.isRequired,
  triggerRef: Types.shape({ current: Types.shape({}) }).isRequired,
};

export default ResponsivePanel;
