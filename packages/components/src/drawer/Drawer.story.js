import React, { useState } from 'react';
import { select } from '@storybook/addon-knobs';
import Drawer from './Drawer';
import Button from '../button';

export default {
  component: Drawer,
  title: 'Drawer',
};

export const basic = () => {
  const [open, setOpen] = useState(false);
  const position = select('position', Object.values(Drawer.Position), Drawer.Position.RIGHT);

  return (
    <>
      <Button disabled={false} block={false} onClick={() => setOpen(true)}>
        Open drawer
      </Button>
      <Drawer
        open={open}
        position={position}
        onClose={() => setOpen(false)}
        footerContent={
          <Button onClick={() => setOpen(false)} block>
            Action
          </Button>
        }
        headerTitle="A title"
      >
        <input type="text" className="form-control" />
        <p className="m-t-3">Cat ipsum dolor sit amet, purr when being pet.</p>
      </Drawer>
    </>
  );
};
