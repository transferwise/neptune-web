import React from 'react';
import Accordion from './Accordion';
import { object, select } from '@storybook/addon-knobs';

export default {
  component: Accordion,
  title: 'Accordion',
};

export const basic = () => {
  const items = [
    {
      title: 'Item 1',
      content: 'I can be text',
    },
    {
      title: 'Item 2',
      content: 'I can be text',
    },
    {
      title: 'Item 3',
      content: 'I can be text',
    },
  ];

  const indexOpen = select('indexOpen', [0, 1, 2], 0);
  const value = object('items', items);

  return <Accordion items={value} indexOpen={indexOpen} key={indexOpen} />;
};
