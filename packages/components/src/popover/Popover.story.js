import React, { useState } from 'react';
import { select } from '@storybook/addon-knobs';

import Popover from './Popover';
import Button from '../button';
import Avatar from '../avatar';

export default {
  component: Popover,
  title: 'Popover',
};

export const basic = () => {
  const position = select('position', Object.values(Popover.Position), Popover.Position.TOP);
  const [open, setOpen] = useState(false);

  return (
    <>
      <Popover
        clickOutsideCallback={(val) => setOpen(!val)}
        content={
          <>
            You’ll get this rate as long as we receive your 10 EUR within the next 51 hours.
            <button
              onClick={(val) => setOpen(!val)}
              type="button"
              aria-label="close"
              className="btn-unstyled pull-right"
            >
              <Avatar type={Avatar.Type.EMOJI} size={Avatar.Size.SMALL} outlined>
                🧜🏼
              </Avatar>
            </button>
          </>
        }
        open={open}
        position={position}
        title="Guaranteed rate"
      >
        <Button type={Button.Type.PRIMARY} onClick={() => setOpen(!open)}>
          Click here to Open Popover!
        </Button>
      </Popover>
    </>
  );
};
