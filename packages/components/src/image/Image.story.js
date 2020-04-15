import React from 'react';
import Image from './Image';
import { action } from '@storybook/addon-actions';

import { text, select } from '@storybook/addon-knobs';

export default {
  component: Image,
  title: 'Image',
};

export const basic = () => {
  const src = text('src', 'https://i.picsum.photos/id/1025/600/200.jpg');
  const loading = select(
    'loading',
    {
      lazy: 'lazy',
      eager: 'eager',
    },
    'lazy',
  );

  return (
    <>
      <Image
        alt="test"
        src={src}
        id="id1"
        onLoad={action('load 1')}
        onError={e => action(e)}
        loading={loading}
        className="m-t-5"
      />
      <Image
        alt="test"
        src={src}
        id="id2"
        onLoad={action('load 2')}
        onError={e => action(e)}
        loading={loading}
        className="m-t-5"
      />
      <Image
        alt="test"
        src={src}
        id="id3"
        onLoad={action('load 3')}
        onError={e => action(e)}
        loading={loading}
        className="m-t-5"
      />
    </>
  );
};
