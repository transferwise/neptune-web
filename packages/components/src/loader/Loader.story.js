import React from 'react';
import Loader from './Loader';
import { boolean, select } from '@storybook/addon-knobs';

export default {
  component: Loader,
  title: 'Loader',
};

export const basic = () => {
  const size = select('size', Object.values(Loader.Size), Loader.Size.EXTRA_SMALL);
  const small = boolean('small', false);

  return <Loader small={small} size={size} />;
};
