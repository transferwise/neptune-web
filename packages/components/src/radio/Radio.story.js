import React from 'react';

import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Radio from './Radio';

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
