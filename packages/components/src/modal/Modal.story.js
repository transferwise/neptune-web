/* eslint-disable no-console */
/* eslint-disable no-alert */
import React from 'react';
import { select, text } from '@storybook/addon-knobs';
import { Button, Modal, DateInput } from '..';

export default {
  component: Modal,
  title: 'Modal',
};

export const basic = () => {
  const size = select('size', Object.values(Modal.Size), Modal.Size.MEDIUM);
  const [open, setOpen] = React.useState(false);
  const title = text('title', 'title');
  const scroll = select('scroll', Object.values(Modal.Scroll), Modal.Scroll.CONTENT);
  const position = select('position', Object.values(Modal.Position), Modal.Position.CENTER);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal
        body={
          <>
            <DateInput onChange={console && console.log} value={new Date()} />
            <p className="m-t-4">
              I am baby actually poke kickstarter, street art jean shorts bespoke chambray activated
              charcoal ramps marfa shoreditch tumeric tumblr. Mixtape cred palo santo, cliche lyft
              marfa ethical waistcoat poke jean shorts. Scenester readymade selvage disrupt pok pok.
              La croix stumptown try-hard chartreuse. I am baby actually poke kickstarter, street
              art jean shorts bespoke chambray activated charcoal ramps marfa shoreditch tumeric
            </p>
          </>
        }
        open={open}
        scroll={scroll}
        position={position}
        onClose={() => setOpen(false)}
        size={size}
        title={title}
        className=""
        footer={
          <Button block onClick={() => alert('clicked')}>
            Action
          </Button>
        }
        closeOnClick
      />
    </>
  );
};
