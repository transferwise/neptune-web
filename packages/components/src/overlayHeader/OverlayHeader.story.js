import React from 'react';
import { select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Profile as ProfileIcon, Briefcase as BriefcaseIcon } from '@transferwise/icons';
import OverlayHeader from './OverlayHeader';
import Avatar from '../avatar';
import demoLogo from '../../public/assets/logo_full.svg';
import AvatarWrapper from '../common/avatarWrapper';

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
      logo={<img alt="logo" src={demoLogo} width="138" />}
      onClose={action('Close clicked')}
      avatar={
        <Avatar type={Avatar.Type.ICON} size={Avatar.Size.MEDIUM}>
          {avatarProfiles[showAvatar]}
        </Avatar>
      }
    />
  );
};

export const withAvatarWrapper = () => {
  const avatarURL = text('avatarURL', 'https://github.com/transferwise.png');
  const profileType = select('profileType', Object.keys(AvatarWrapper.ProfileType));
  return (
    <OverlayHeader
      logo={<img alt="logo" src={demoLogo} width="138" />}
      onClose={action('Close clicked')}
      avatar={<AvatarWrapper url={avatarURL} profileType={profileType} />}
    />
  );
};
