import React from 'react';
import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import Button from './Button';

export default {
  component: Button,
  title: 'Button',
};

export const basic = () => {
  const size = select('size', Object.values(Button.Size), Button.Size.SMALL);
  const type = select('type', Object.values(Button.Type), Button.Type.PRIMARY);
  const htmlType = select('htmlType', ['button', 'submit', 'reset'], 'button');
  const disabled = boolean('disabled', false);
  const loading = boolean('loading', false);
  const block = boolean('block', false);
  const buttonText = text('buttonText', 'Button text');
  return (
    <Button
      size={size}
      type={type}
      disabled={disabled}
      loading={loading}
      block={block}
      htmlType={htmlType}
      onClick={action('Button Clicked')}
    >
      {buttonText}
    </Button>
  );
};
