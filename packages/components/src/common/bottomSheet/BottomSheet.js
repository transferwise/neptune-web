import React, { forwardRef } from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

import Dimmer from '../../dimmer';
import SlidingPanel from '../../slidingPanel';
import './BottomSheet.css';
import { Position } from '../propsValues/position';

const BottomSheet = forwardRef(({ children, open, className }, ref) => (
  <Dimmer open={open}>
    <SlidingPanel
      open={open}
      position={Position.BOTTOM}
      className={classNames('np-bottom-sheet', className)}
      ref={ref}
    >
      {children}
    </SlidingPanel>
  </Dimmer>
));

BottomSheet.propTypes = {
  children: Types.node.isRequired,
  className: Types.string,
  open: Types.bool,
};

BottomSheet.defaultProps = {
  className: undefined,
  open: false,
};

export default BottomSheet;
