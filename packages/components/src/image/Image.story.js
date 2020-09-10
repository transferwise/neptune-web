import React from 'react';
import { action } from '@storybook/addon-actions';

import { text, select, boolean } from '@storybook/addon-knobs';
import Image from './Image';

export default {
  component: Image,
  title: 'Image',
};

export const basic = () => {
  const src = text('src', 'https://placeholder.pics/svg/300');
  const shrink = boolean('shrink', true);
  const stretch = boolean('stretch', true);
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
        onError={(e) => action(e)}
        loading={loading}
        className="m-t-5"
        shrink={shrink}
        stretch={stretch}
      />
      <Image
        alt="test"
        src={src}
        id="id2"
        onLoad={action('load 2')}
        onError={(e) => action(e)}
        loading={loading}
        className="m-t-5"
        shrink={shrink}
        stretch={stretch}
      />
      <Image
        alt="test"
        src={src}
        id="id3"
        onLoad={action('load 3')}
        onError={(e) => action(e)}
        loading={loading}
        className="m-t-5"
        shrink={shrink}
        stretch={stretch}
      />
    </>
  );
};
