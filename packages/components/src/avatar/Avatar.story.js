import React from 'react';
import { boolean, radios, text, select } from '@storybook/addon-knobs';

import Avatar from './Avatar';

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
  const theme = select('Theme', [Avatar.Theme.LIGHT, Avatar.Theme.DARK], Avatar.Theme.LIGHT);
  const backgroundColor = text('Background colour', '');
  const avatarContent = text('avatarContent', '✈️');
  const sampleImage = boolean('Use image as content?', false);
  const sampleImageUrl = text(
    'Image URL',
    'https://wise.com/public-resources/assets/flags/square/gbp.svg',
  );

  return (
    <Avatar
      size={size}
      type={type}
      outlined={outlined}
      theme={theme}
      backgroundColor={backgroundColor}
    >
      {sampleImage ? <img src={sampleImageUrl} alt="" /> : avatarContent}
    </Avatar>
  );
};

export const table = () => {
  const theme = select('Theme', [Avatar.Theme.LIGHT, Avatar.Theme.DARK], Avatar.Theme.LIGHT);
  const flag = select('Flag', ['gbp', 'jpy', 'eur'], 'gbp');

  const flagResource = `https://wise.com/public-resources/assets/flags/square/${flag}.svg`;
  return (
    <div
      style={{
        padding: '50px',
        backgroundColor: theme === Avatar.Theme.DARK ? '#37517e' : 'white',
      }}
    >
      <table style={{ background: 'transparent' }}>
        <tr>
          <td>
            <Avatar size={Avatar.Size.LARGE} type={Avatar.Type.THUMBNAIL} outlined theme={theme}>
              <img src={flagResource} alt="" />
            </Avatar>
          </td>
          <td>
            <Avatar size={Avatar.Size.MEDIUM} type={Avatar.Type.THUMBNAIL} outlined theme={theme}>
              <img src={flagResource} alt="" />
            </Avatar>
          </td>
          <td>
            <Avatar size={Avatar.Size.SMALL} type={Avatar.Type.THUMBNAIL} outlined theme={theme}>
              <img src={flagResource} alt="" />
            </Avatar>
          </td>
        </tr>
        <tr>
          <td>
            <Avatar size={Avatar.Size.LARGE} type={Avatar.Type.THUMBNAIL} theme={theme}>
              <img src={flagResource} alt="" />
            </Avatar>
          </td>
          <td>
            <Avatar size={Avatar.Size.MEDIUM} type={Avatar.Type.THUMBNAIL} theme={theme}>
              <img src={flagResource} alt="" />
            </Avatar>
          </td>
          <td>
            <Avatar size={Avatar.Size.SMALL} type={Avatar.Type.THUMBNAIL} theme={theme}>
              <img src={flagResource} alt="" />
            </Avatar>
          </td>
        </tr>
        <tr>
          <td>
            <Avatar size={Avatar.Size.LARGE} type={Avatar.Type.EMOJI} theme={theme}>
              <img
                style={{ width: 44, height: 44 }}
                src="https://wise.com/public-resources/assets/balances/savings-emoji/google/✈️.png"
                alt=""
              />
            </Avatar>
          </td>
          <td>
            <Avatar size={Avatar.Size.MEDIUM} type={Avatar.Type.EMOJI} theme={theme}>
              <img
                style={{ width: 30, height: 30 }}
                src="https://wise.com/public-resources/assets/balances/savings-emoji/google/✈️.png"
                alt=""
              />
            </Avatar>
          </td>
          <td>
            <Avatar size={Avatar.Size.SMALL} type={Avatar.Type.EMOJI} theme={theme}>
              <img
                style={{ width: 16, height: 16 }}
                src="https://wise.com/public-resources/assets/balances/savings-emoji/google/✈️.png"
                alt=""
              />
            </Avatar>
          </td>
        </tr>
        <tr>
          <td>
            <Avatar
              size={Avatar.Size.LARGE}
              type={Avatar.Type.EMOJI}
              theme={theme}
              backgroundColor="#D6F5E3"
            >
              <img
                style={{ width: 44, height: 44 }}
                src="https://wise.com/public-resources/assets/balances/savings-emoji/google/🌱.png"
                alt=""
              />
            </Avatar>
          </td>
          <td>
            <Avatar
              size={Avatar.Size.MEDIUM}
              type={Avatar.Type.EMOJI}
              theme={theme}
              backgroundColor="#D6F5E3"
            >
              <img
                style={{ width: 30, height: 30 }}
                src="https://wise.com/public-resources/assets/balances/savings-emoji/google/🌱.png"
                alt=""
              />
            </Avatar>
          </td>
          <td>
            <Avatar
              size={Avatar.Size.SMALL}
              type={Avatar.Type.EMOJI}
              theme={theme}
              backgroundColor="#D6F5E3"
            >
              <img
                style={{ width: 16, height: 16 }}
                src="https://wise.com/public-resources/assets/balances/savings-emoji/google/🌱.png"
                alt=""
              />
            </Avatar>
          </td>
        </tr>
      </table>
    </div>
  );
};
