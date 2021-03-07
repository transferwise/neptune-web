import React from 'react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Dimmer } from './Dimmer';

export default {
  component: Dimmer,
  title: 'Dimmer',
};

export const basic = () => {
  const open = boolean('open', false);
  const fadeContentOnExit = boolean('fadeContentOnExit', false);
  const fadeContentOnEnter = boolean('fadeContentOnEnter', false);

  return (
    <Dimmer
      open={open}
      onClose={action('closed')}
      fadeContentOnExit={fadeContentOnExit}
      fadeContentOnEnter={fadeContentOnEnter}
    />
  );
};
