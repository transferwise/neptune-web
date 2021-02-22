import React from 'react';
import { select } from '@storybook/addon-knobs';

import Popover from './Popover';

import Button from '../button';

export default {
  component: Popover,
  title: 'Popover',
};

export const basic = () => {
  const position = select('position', Object.values(Popover.Position), Popover.Position.TOP);

  return (
    <Popover
      content="You’ll get this rate as long as we receive your 10 EUR within the next 51 hours."
      position={position}
      title="Guaranteed rate"
    >
      <Button type={Button.Type.PRIMARY} onClick={() => console.log(`I'm also triggered`)}>
        Click here to Open Popover!
      </Button>
    </Popover>
  );
};
