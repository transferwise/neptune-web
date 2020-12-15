import React from 'react';
import { select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Profile as ProfileIcon, Briefcase as BriefcaseIcon } from '@transferwise/icons';
import OverlayHeader from './OverlayHeader';
import Avatar from '../avatar';
import Logo from '../common/logo';

export default {
  component: OverlayHeader,
  title: 'OverlayHeader',
};

const avatarProfiles = {
  '': null,
  Business: <BriefcaseIcon />,
  Profile: <ProfileIcon />,
};

export const basic = () => {
  const showAvatar = select('avatar', Object.keys(avatarProfiles), 'Profile');
  return (
    <OverlayHeader
      logo={<Logo />}
      onClose={action('Close clicked')}
      avatar={
        <Avatar type={Avatar.Type.ICON} size={Avatar.Size.MEDIUM}>
          {avatarProfiles[showAvatar]}
        </Avatar>
      }
    />
  );
};
