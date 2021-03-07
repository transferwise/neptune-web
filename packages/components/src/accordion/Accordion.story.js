import React from 'react';
import { object, select } from '@storybook/addon-knobs';
import Accordion from './Accordion';

export default {
  component: Accordion,
  title: 'Accordion',
};

export const basic = () => {
  const items = [
    {
      title: 'Item 1',
      content: 'I can be text',
      id: 'Item 1',
    },
    {
      title: 'Item 2',
      content: 'I can be text',
      id: 'Item 2',
    },
    {
      title: 'Item 3',
      content: 'I can be text',
      id: 'Item 3',
    },
  ];

  const indexOpen = select('indexOpen', [0, 1, 2], 0);
  const value = object('items', items);

  return <Accordion items={value} indexOpen={indexOpen} />;
};
