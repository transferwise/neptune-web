import React from 'react';
import Radio from './Radio';

import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  component: Radio,
  title: 'Radio',
};

export const basic = () => {
  const checked = boolean('checked', false);
  const disabled = boolean('disabled', false);
  const label = text('label', 'label');
  const secondary = text('secondary', '');

  return (
    <Radio
      label={label}
      name="name"
      id="id"
      checked={checked}
      disabled={disabled}
      secondary={secondary}
      onChange={action('checked')}
    />
  );
};
