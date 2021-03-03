import React from 'react';
import { Search } from '@transferwise/icons';
// import { action } from '@storybook/addon-actions';

import { text, select, boolean } from '@storybook/addon-knobs';
import Input from './Input';

export default {
  component: Input,
  title: 'Input',
};

export const basic = () => {
  const value = text('value', 'Lorem span');
  const disabled = boolean('disabled', false);
  const required = boolean('required', false);
  return <Input inputmode="email" {...{ value, required, disabled }} icon={<Search />} />;
};
