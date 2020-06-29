import React from 'react';
import Avatar from './Avatar';
import { boolean, radios, text } from '@storybook/addon-knobs';

export default {
  component: Avatar,
  title: 'Avatar',
};

export const basic = () => {
  const type = radios(
    'type',
    {
      Thumbnail: Avatar.Type.THUMBNAIL,
      Initials: Avatar.Type.INITIALS,
      Icon: Avatar.Type.ICON,
      Emoji: Avatar.Type.EMOJI,
    },
    Avatar.Type.EMOJI,
  );
  const size = radios(
    'size',
    {
      Small: Avatar.Size.SMALL,
      Medium: Avatar.Size.MEDIUM,
      Large: Avatar.Size.LARGE,
    },
    Avatar.Size.MEDIUM,
  );
  const outlined = boolean('outlined', true);
  const avatarContent = text('avatarContent', '✈️');
  const sampleImage = boolean('Use placeholder image as content?', false);
  const sampleImageUrl = text('Placeholder Image URL', 'http://placehold.it/100x100');

  return (
    <Avatar size={size} type={type} outlined={outlined}>
      {sampleImage ? <img src={sampleImageUrl} alt="" /> : avatarContent}
    </Avatar>
  );
};
