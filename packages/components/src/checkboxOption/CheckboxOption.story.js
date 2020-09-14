import React from 'react';
import CheckboxOption from './CheckboxOption';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { FastFlag as FastFlagIcon } from '@transferwise/icons';

export default {
  component: CheckboxOption,
  title: 'CheckboxOption',
};

export const basic = () => {
  const content = text('content', 'Normally, the button and icon are vertically centered.');
  const title = text('title', 'Checkbox option');
  return (
    <CheckboxOption
      id="checkbox-option"
      name="checkbox-option"
      title={title}
      content={content}
      onChange={action('value changed')}
      media={<FastFlagIcon />}
    />
  );
};
