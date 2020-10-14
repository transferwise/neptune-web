import React from 'react';
import { select, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import OverlayHeader from './OverlayHeader';

export default {
  component: OverlayHeader,
  title: 'OverlayHeader',
};

export const basic = () => {
  const theme = select('theme', Object.values(OverlayHeader.Theme), OverlayHeader.Theme.LIGHT);
  const profileType = select(
    'profileType',
    Object.values(OverlayHeader.ProfileType),
    OverlayHeader.ProfileType.PERSONAL,
  );

  const avatar = object('avatar', { url: 'https://github.com/transferwise.png' });

  return (
    <OverlayHeader
      onClose={action('Close clicked')}
      avatar={avatar}
      profileType={profileType}
      theme={theme}
    />
  );
};
