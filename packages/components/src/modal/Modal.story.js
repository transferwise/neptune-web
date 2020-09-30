import React from 'react';
import { boolean, select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Modal from './Modal';
import Button from '../button';

export default {
  component: Modal,
  title: 'Modal',
};

export const basic = () => {
  const size = select('size', Object.values(Modal.Size), Modal.Size.MEDIUM);
  const open = boolean('open', false);
  const title = text('title', 'title');
  const body = text('body', 'Lorem Ipsum is simply dummy text of the printing 1500s, when an');

  return (
    <Modal
      body={body}
      open={open}
      onClose={action('closed')}
      size={size}
      title={title}
      className=""
      footer={
        <Button block onClick={action('clicked')}>
          Action
        </Button>
      }
      closeOnClick
    />
  );
};
