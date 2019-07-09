import React from 'react';
import Types from 'prop-types';

import { SlidingPanel } from '..';

const Sticky = ({ open, position, children }) => (
  <SlidingPanel open={open} position={position} slidingPanelPositionFixed showSlidingPanelBorder>
    {children}
  </SlidingPanel>
);

Sticky.propTypes = {
  open: Types.bool,
  position: Types.oneOf(['top', 'bottom']),
  children: Types.node,
};

Sticky.defaultProps = {
  open: true,
  position: 'bottom',
  children: null,
};

export default Sticky;
