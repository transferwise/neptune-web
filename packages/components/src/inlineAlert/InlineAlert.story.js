import React from 'react';
import { select, text } from '@storybook/addon-knobs';

import InlineAlert from './InlineAlert';

export default {
  component: InlineAlert,
  title: 'InlineAlert',
};

export const basic = () => {
  const type = select(
    'type',
    [
      InlineAlert.Type.SUCCESS,
      InlineAlert.Type.ERROR,
      InlineAlert.Type.INFO,
      InlineAlert.Type.WARNING,
    ],
    InlineAlert.Type.ERROR,
  );

  const message = text('message', 'Please enter a password over 5 characters');

  return <InlineAlert type={type}>{message}</InlineAlert>;
};
