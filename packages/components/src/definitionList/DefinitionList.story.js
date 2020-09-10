import React from 'react';
import { select, object, boolean } from '@storybook/addon-knobs';
import DefinitionList from './DefinitionList';

export default {
  component: DefinitionList,
  title: 'DefinitionList',
};

export const basic = () => {
  const items = [
    {
      title: 'A simple title',
      value: 'A simple value',
      key: 'first',
    },
    {
      title: <span>Use wrapper elements to style</span>,
      value: <span className="h3">89.45GBP</span>,
      key: 'second',
    },
    {
      title: 'Long strings will wrap',
      value: 'And values with long words will eventuallybreakontothenextline',
      key: 'third',
    },
  ];

  const definitions = object('items', items);
  const muted = boolean('muted', false);
  const layout = select(
    'layout',
    Object.values(DefinitionList.Layout),
    DefinitionList.Layout.HORIZONTAL_LEFT_ALIGNED,
  );

  return <DefinitionList layout={layout} muted={muted} definitions={definitions} />;
};
