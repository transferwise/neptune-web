import React from 'react';
import { select, number, text } from '@storybook/addon-knobs';
import Tooltip from './Tooltip';
import Button from '../button';

export default {
  component: Tooltip,
  title: 'Tooltip',
};

export const basic = () => {
  const label = text('label', 'Hey edit me!!!!!!');
  const offset = number('offset', 0);
  const position = select('position', Object.values(Tooltip.Position), Tooltip.Position.BOTTOM);
  return (
    <Tooltip label={label} position={position} offset={offset}>
      <Button onClick={() => {}}>Hover me</Button>
    </Tooltip>
  );
};
