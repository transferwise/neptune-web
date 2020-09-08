import React from 'react';
import Alert from './Alert';
import { select, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  component: Alert,
  title: 'Alert',
};

export const basic = () => {
  const dismissible = boolean('dismissible', true);
  const size = select('size', Object.values(Alert.Size), Alert.Size.LARGE);
  const type = select('type', Object.values(Alert.Type), Alert.Type.SUCCESS);

  const arrow = select('Arrow', Object.values(Alert.ArrowPosition), Alert.ArrowPosition.TOP_LEFT);

  const content = text('Content', 'A change to story');

  return (
    <Alert
      dismissible={dismissible}
      onDismiss={action('Alert dismissed')}
      size={size}
      arrow={arrow}
      type={type}
    >
      {content}
    </Alert>
  );
};
