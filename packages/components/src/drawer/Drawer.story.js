import React from 'react';
import { boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Drawer from './Drawer';
import Button from '../button';

export default {
  component: Drawer,
  title: 'Drawer',
};

export const basic = () => {
  const open = boolean('open', true);
  const position = select('position', Object.values(Drawer.Position), Drawer.Position.RIGHT);

  return (
    <Drawer
      open={open}
      position={position}
      onClose={action('closed')}
      footerContent={
        <Button onClick={action('button clicked')} block>
          Action
        </Button>
      }
      headerTitle="A title"
    >
      <label htmlFor="id">Label</label>
      <input type="text" className="form-control" id="id" />
      <p className="m-t-3">Cat ipsum dolor sit amet, purr when being pet.</p>
    </Drawer>
  );
};
