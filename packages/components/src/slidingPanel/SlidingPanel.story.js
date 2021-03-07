import React from 'react';
import { boolean, select } from '@storybook/addon-knobs';
import SlidingPanel from './SlidingPanel';

export default {
  component: SlidingPanel,
  title: 'SlidingPanel',
};

export const basic = () => {
  const open = boolean('open', false);
  const position = select('position', ['top', 'right', 'bottom', 'left'], 'top');

  return (
    <SlidingPanel open={open} position={position}>
      <div className="p-y-4 p-x-4 ">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to
      </div>
    </SlidingPanel>
  );
};
