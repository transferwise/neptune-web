import React, { useState, useEffect } from 'react';
import Types from 'prop-types';
import { Profile as ProfileIcon, Briefcase as BriefcaseIcon } from '@transferwise/icons';
import Avatar from '../../avatar';

const ProfileType = {
  BUSINESS: 'BUSINESS',
  PERSONAL: 'PERSONAL',
};

export default function AvatarWrapper({ url, profileType }) {
  const [hasImageLoadError, setImageLoadError] = useState(false);
  const renderImage = url && !hasImageLoadError;
  const isBusinessProfile = profileType === ProfileType.BUSINESS;

  // Reset the errored state when url changes
  useEffect(() => setImageLoadError(false), [url]);

  return (
    <>
      {!renderImage && (
        <Avatar type={Avatar.Type.ICON} size={Avatar.Size.MEDIUM}>
          {isBusinessProfile ? <BriefcaseIcon /> : <ProfileIcon />}
        </Avatar>
      )}
      {renderImage && (
        <Avatar type={Avatar.Type.THUMBNAIL} size={Avatar.Size.MEDIUM}>
          {renderImage && <img src={url} alt="avatar" onError={() => setImageLoadError(true)} />}
        </Avatar>
      )}
    </>
  );
}

AvatarWrapper.ProfileType = ProfileType;

AvatarWrapper.defaultProps = {
  url: '',
  profileType: AvatarWrapper.ProfileType.PERSONAL,
};

AvatarWrapper.propTypes = {
  url: Types.string,
  profileType: Types.oneOf([
    AvatarWrapper.ProfileType.PERSONAL,
    AvatarWrapper.ProfileType.BUSINESS,
  ]),
};
