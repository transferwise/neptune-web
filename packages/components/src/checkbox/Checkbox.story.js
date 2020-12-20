import React, { useState } from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import Checkbox from './Checkbox';

export default {
  component: Checkbox,
  title: 'Checkbox',
};

export const basic = () => {
  const [checked, setChecked] = useState(true);
  const required = boolean('required', false);
  const disabled = boolean('disabled', false);
  const readOnly = boolean('readOnly', false);
  const label = text('label', 'Checkbox');
  const secondary = text('secondary', '');

  return (
    <Checkbox
      label={label}
      onChange={() => setChecked(!checked)}
      checked={checked}
      required={required}
      disabled={disabled}
      secondary={secondary}
      readOnly={readOnly}
    />
  );
};
