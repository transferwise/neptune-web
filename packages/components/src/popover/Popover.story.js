import React from 'react';
import Popover from './Popover';
import Button from '../button';
import { select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  component: Popover,
  title: 'Popover',
};

export const basic = () => {
  const title = text('title', 'I am the Popover title');
  const content = text('content', 'Lorem ipsum dolor sit amet');
  const preferredPlacement = select(
    'preferredPlacement',
    Object.values(Popover.Placement),
    Popover.Placement.BOTTOM,
  );

  return (
    <Popover
      title={title}
      content={content}
      preferredPlacement={preferredPlacement}
      key={preferredPlacement}
    >
      <Button onClick={action('clicked')} disabled={false} block={false} size={Button.Size.Medium}>
        Click here to Open Popover!
      </Button>
    </Popover>
  );
};
