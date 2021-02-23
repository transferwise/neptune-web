import React from 'react';
import { select } from '@storybook/addon-knobs';

import AnimatedLabel from './AnimatedLabel';

export default {
  component: AnimatedLabel,
  title: 'AnimatedLabel',
};

export const Basic = () => {
  const labels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const activeLabel = select('active label', labels, 10);

  return (
    <div style={{ background: '#253655', color: '#fff', width: '120px' }} className="p-a-1">
      <AnimatedLabel labels={labels.map((el) => `label-${el}`)} activeLabel={activeLabel} />
    </div>
  );
};
