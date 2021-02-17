import React, { forwardRef } from 'react';
import Types from 'prop-types';
import Dimmer from '../../dimmer';
import SlidingPanel from '../../slidingPanel';
import './BottomSheet.css';
import { Position } from '../propsValues/position';

const BottomSheet = forwardRef(({ children, open }, ref) => (
  <Dimmer open={open}>
    <SlidingPanel
      open={open}
      position={Position.BOTTOM}
      className="np-bottom-sheet p-x-2 p-t-4 p-b-2"
      ref={ref}
    >
      {children}
    </SlidingPanel>
  </Dimmer>
));

BottomSheet.propTypes = {
  children: Types.node.isRequired,
  open: Types.bool,
};

BottomSheet.defaultProps = {
  open: false,
};

export default BottomSheet;
