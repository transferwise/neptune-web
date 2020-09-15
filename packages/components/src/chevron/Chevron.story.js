import React from 'react';
import Chevron from './Chevron';
import { boolean, select } from '@storybook/addon-knobs';

export default {
  component: Chevron,
  title: 'Chevron',
};

export const basic = () => {
  const orientation = select(
    'orientation',
    Object.values(Chevron.Orientation),
    Chevron.Orientation.TOP,
  );
  const size = select('size', Object.values(Chevron.Size), Chevron.Orientation.MEDIUM);
  const flip = boolean('flip', true);
  const animate = boolean('animate', true);
  return <Chevron orientation={orientation} size={size} flip={flip} animate={animate} />;
};
