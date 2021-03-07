import React from 'react';
import { select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import ProcessIndicator from './ProcessIndicator';

export default {
  component: ProcessIndicator,
  title: 'ProcessIndicator',
};

export const basic = () => {
  const size = select(
    'size',
    Object.values(ProcessIndicator.Size),
    ProcessIndicator.Size.EXTRA_SMALL,
  );
  const status = select(
    'status',
    Object.values(ProcessIndicator.Status),
    ProcessIndicator.Status.PROCESSING,
  );

  return <ProcessIndicator status={status} size={size} onAnimationCompleted={(s) => action(s)} />;
};
