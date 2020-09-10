import React from 'react';
import { boolean, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Chip from './Chip';

export default {
  component: Chip,
  title: 'Chip',
};

export const basic = () => {
  const label = text('orientation', `A beautiful chip`);
  const hasError = boolean('hasError', false);

  return <Chip label={label} hasError={hasError} onRemove={action('I have been removed!!!')} />;
};
