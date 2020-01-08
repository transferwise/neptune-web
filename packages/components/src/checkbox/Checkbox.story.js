import React from 'react';
import Checkbox from './Checkbox';
import { action } from '@storybook/addon-actions';
import { boolean, text } from '@storybook/addon-knobs';

export default {
  component: Checkbox,
  title: 'Checkbox',
};

export const basic = () => {
  const checked = boolean('checked', false);
  const required = boolean('required', false);
  const disabled = boolean('disabled', false);
  const label = text('label', 'Checkbox');
  return (
    <Checkbox
      label={label}
      onChange={action('Checked')}
      checked={checked}
      required={required}
      disabled={disabled}
    />
  );
};
