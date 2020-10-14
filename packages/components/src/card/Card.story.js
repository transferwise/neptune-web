import React from 'react';
import { select, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { FastFlag as FastFlagIcon } from '@transferwise/icons';

import Card from '.';

export default {
  component: Card,
  title: 'Card',
};

export const basic = () => {
  const elementType = select('elementType', ['div', 'li'], 'div');
  const isExpanded = boolean('isExpanded', false);
  const title = text('title', 'A card');
  const details = text('details', 'Some details about this card');
  const content = text('content', 'Lorem ipsum dolor sit amet.');

  return (
    <Card
      as={elementType}
      title={title}
      details={details}
      isExpanded={isExpanded}
      onClick={action('onClick')}
      icon={<FastFlagIcon />}
    >
      {content}
    </Card>
  );
};
