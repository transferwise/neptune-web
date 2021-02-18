import React, { forwardRef } from 'react';
import Types from 'prop-types';

import { Position } from '..';
import BottomSheet from '../bottomSheet';
import Panel from '../panel';
import SizeSwapper from '../../sizeSwapper';

const ResponsivePanel = forwardRef(({ arrow, children, open, position, triggerRef }, ref) => {
  const windowRef = typeof window !== 'undefined' && window;

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
});

ResponsivePanel.Position = {
  BOTTOM: Position.BOTTOM,
  LEFT: Position.LEFT,
  RIGHT: Position.RIGHT,
  TOP: Position.TOP,
};

ResponsivePanel.defaultProps = {
  position: ResponsivePanel.Position.TOP,
  arrow: false,
};

ResponsivePanel.propTypes = {
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
