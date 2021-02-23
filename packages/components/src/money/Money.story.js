import React from 'react';
import { text, number } from '@storybook/addon-knobs';
import Money from './Money';

export default {
  component: Money,
  title: 'Money',
};

export const basic = () => {
  const amount = number('amount', 1234.5678);
  const currency = text('currency', 'GBP');
  return <Money amount={amount} currency={currency} />;
};
