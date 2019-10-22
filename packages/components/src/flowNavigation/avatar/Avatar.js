import React, { useState, useEffect } from 'react';
import Types from 'prop-types';
import classnames from 'classnames';

import './Avatar.css';

const ProfileType = {
  BUSINESS: 'BUSINESS',
  PERSONAL: 'PERSONAL',
};

export default function Avatar({ url, profileType }) {
  const [hasImageLoadError, setImageLoadError] = useState(false);
  const renderImage = url && !hasImageLoadError;
  const isBusinessProfile = profileType === ProfileType.BUSINESS;

  // Reset the errored state when url changes
  useEffect(() => setImageLoadError(false), [url]);

  return (
    <div
      className={classnames('circle circle-responsive circle-inverse', {
        'tw-avatar--with-image': !isBusinessProfile && renderImage,
      })}
    >
      {isBusinessProfile ? (
        <div className="icon icon-bank" />
      ) : (
        <div className="tw-avatar__icon-container icon icon-profile">
          {renderImage && (
            <img
              className="tw-avatar__image"
              src={url}
              alt="avatar"
              onError={() => setImageLoadError(true)}
            />
          )}
        </div>
      )}
    </div>
  );
}

Avatar.defaultProps = {
  url: '',
  profileType: ProfileType.PERSONAL,
};

Avatar.propTypes = {
  url: Types.string,
  profileType: Types.oneOf(Object.keys(ProfileType)),
};
