import React from 'react';
import Popover from './Popover';
import Button from '../button';

export default {
  component: Popover,
  title: 'Popover',
};

export const basic = () => {
  return (
    <Popover
      intialOpen={false}
      title="Guaranteed rate"
      content="You’ll get this rate as long as we receive your 10 EUR within the next 51 hours."
      fallbackPlacements={[Popover.Placement.BOTTOM, Popover.Placement.TOP]}
      preferredPlacement={Popover.Placement.LEFT}
    >
      <Button type={Button.Type.PRIMARY}>Click here to Open Popover!</Button>
    </Popover>
  );
};
