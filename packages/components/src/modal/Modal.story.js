import React from 'react';
import { boolean, select, text } from '@storybook/addon-knobs';
import { Button, Modal, DateInput } from '..';

export default {
  component: Modal,
  title: 'Modal',
};

export const basic = () => {
  const size = select('size', Object.values(Modal.Size), Modal.Size.MEDIUM);
  const open = boolean('open', true);
  const title = text('title', 'title');
  const scroll = select('scroll', Object.values(Modal.Scroll), Modal.Scroll.CONTENT);
  const position = select('position', Object.values(Modal.Position), Modal.Position.CENTER);

  return (
    <>
      <Modal
        body={
          <>
            <p className="m-t-4">
              I am baby actually poke kickstarter, street art jean shorts bespoke chambray activated
              charcoal ramps marfa shoreditch tumeric tumblr. Mixtape cred palo santo, cliche lyft
              marfa ethical waistcoat poke jean shorts. Scenester readymade selvage disrupt pok pok.
              La croix stumptown try-hard chartreuse. I am baby actually poke kickstarter, street
              art jean shorts bespoke chambray activated charcoal ramps marfa shoreditch tumeric I
              am baby actually poke kickstarter, street art jean shorts bespoke chambray activated
              charcoal ramps marfa shoreditch tumeric tumblr. Mixtape cred palo santo, cliche lyft
              marfa ethical waistcoat poke jean shorts. Scenester readymade selvage disrupt pok pok.
              La croix stumptown try-hard chartreuse. I am baby actually poke kickstarter, street
              art jean shorts bespoke chambray activated charcoal ramps marfa shoreditch tumeric
            </p>
            <DateInput onChange={console && console.log} value={new Date()} />
          </>
        }
        open={open}
        scroll={scroll}
        position={position}
        onClose={() => {
          console.log('close modal');
        }}
        size={size}
        title={title}
        footer={
          <Button block onClick={() => alert('clicked')}>
            Action
          </Button>
        }
      />
    </>
  );
};
