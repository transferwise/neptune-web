import React, { useState } from 'react';
import { boolean } from '@storybook/addon-knobs';
import CheckboxButton from './CheckboxButton';

export default {
  component: CheckboxButton,
  title: 'CheckboxButton',
};

export const basic = () => {
  const [checked, setChecked] = useState(true);
  const disabled = boolean('disabled', false);

  /* eslint-disable no-console */
  const onBlur = () => console.log('blur');
  const onClick = () => console.log('click');
  const onFocus = () => console.log('focus');

  return (
    <CheckboxButton
      aria-label="Toggle email updates"
      checked={checked}
      disabled={disabled}
      onBlur={onBlur}
      onClick={onClick}
      onFocus={onFocus}
      onChange={() => setChecked(!checked)}
    />
  );
};
