import React from 'react';
import DefinitionList from './DefinitionList';
import { select, object, boolean } from '@storybook/addon-knobs';

export default {
  component: DefinitionList,
  title: 'DefinitionList',
};

export const basic = () => {
  const items = [
    {
      title: <span>First title</span>,
      value: <span>first value</span>,
      key: 'first',
    },
    {
      title: 'Second title',
      value: 'second value happenstobereallylongtodemonstratethewordbreak',
      key: 'second',
    },
    {
      title: <span>Third title</span>,
      value: <span>third value</span>,
      key: 'third',
    },
  ];

  const definitions = object('items', items);
  const muted = boolean('muted', false);
  const layout = select(
    'layout',
    Object.values(DefinitionList.Layout),
    DefinitionList.Layout.VERTICAL_TWO_COLUMN,
  );

  return <DefinitionList layout={layout} muted={muted} definitions={definitions} />;
};
