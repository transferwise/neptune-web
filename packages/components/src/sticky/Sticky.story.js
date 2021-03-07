import React from 'react';
import { select, boolean } from '@storybook/addon-knobs';
import Sticky from './Sticky';

export default {
  component: Sticky,
  title: 'Sticky',
};

export const basic = () => {
  const open = boolean('open', false);
  const position = select('position', ['top', 'right', 'bottom', 'left'], 'bottom');
  const fullParentWidth = boolean('fullParentWidth', true);
  return (
    <Sticky open={open} position={position} fullParentWidth={fullParentWidth}>
      <div className="d-flex justify-content-start align-items-start flex-wrap p-x-4 p-y-4">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to
      </div>
    </Sticky>
  );
};
