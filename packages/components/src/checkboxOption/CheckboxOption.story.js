import React, { useState } from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import { FastFlag as FastFlagIcon } from '@transferwise/icons';
import CheckboxOption from './CheckboxOption';

export default {
  component: CheckboxOption,
  title: 'CheckboxOption',
};

export const basic = () => {
  const [checked, setChecked] = useState(true);
  const content = text('content', 'Normally, the button and icon are vertically centered.');
  const title = text('title', 'Checkbox option');
  const disabled = boolean('disabled', false);

  return (
    <CheckboxOption
      id="checkbox-option"
      name="checkbox-option"
      checked={checked}
      disabled={disabled}
      title={title}
      content={content}
      onChange={(newValue) => setChecked(newValue)}
      media={<FastFlagIcon />}
    />
  );
};
