import React, { useState } from 'react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Dimmer } from './Dimmer';
import { Button } from '..';

export default {
  component: Dimmer,
  title: 'Dimmer',
};

export const basic = () => {
  const [open, setOpen] = useState(false);

  const fadeContentOnExit = boolean('fadeContentOnExit', false);
  const fadeContentOnEnter = boolean('fadeContentOnEnter', false);

  const handleClose = () => {
    setOpen(false);
    action('closed');
  };

  return (
    <>
      <Button onClick={() => setOpen((isOpen) => !isOpen)}>Toggle dimmer</Button>
      <Dimmer
        open={open}
        onClose={handleClose}
        fadeContentOnExit={fadeContentOnExit}
        fadeContentOnEnter={fadeContentOnEnter}
      />
    </>
  );
};
