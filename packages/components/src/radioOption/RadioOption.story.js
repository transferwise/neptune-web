import React from 'react';
import FastFlagIcon from '@transferwise/icons/react/fast-flag';

import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import RadioOption from './RadioOption';

export default {
  component: RadioOption,
  title: 'RadioOption',
};

export const basic = () => {
  const checked = boolean('checked', true);
  const title = text('title', 'title');
  const content = text('content', 'content');
  return (
    <RadioOption
      media={<FastFlagIcon />}
      title={title}
      content={content}
      id="id"
      name="radio-option"
      checked={checked}
      onChange={action('checked')}
      complex={false}
      disabled={false}
      value="value"
    />
  );
};
