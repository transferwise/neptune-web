import React from 'react';
import Types from 'prop-types';
import classnames from 'classnames';

import { Size, Theme } from '../common';

import './Avatar.css';

const Avatar = ({ backgroundColor, children, className, outlined, size, theme, type }) => (
  <div
    className={classnames(
      'tw-avatar',
      className,
      `tw-avatar--${size}`,
      `tw-avatar--${type}`,
      `tw-avatar--${theme}`,
      {
        'tw-avatar--outlined': outlined,
      },
    )}
  >
    <div className="tw-avatar__content" style={{ backgroundColor: backgroundColor || undefined }}>
      {children}
    </div>
  </div>
);

Avatar.Size = {
  SMALL: Size.SMALL,
  MEDIUM: Size.MEDIUM,
  LARGE: Size.LARGE,
};

Avatar.Theme = Theme;
Avatar.Type = {
  THUMBNAIL: 'thumbnail',
  ICON: 'icon',
  EMOJI: 'emoji',
  INITIALS: 'initials',
};

Avatar.propTypes = {
  backgroundColor: Types.string,
  children: Types.node,
  className: Types.string,
  outlined: Types.bool,
  size: Types.oneOf([Avatar.Size.SMALL, Avatar.Size.MEDIUM, Avatar.Size.LARGE]),
  theme: Types.oneOf([Theme.LIGHT, Theme.DARK]),
  type: Types.oneOf([
    Avatar.Type.THUMBNAIL,
    Avatar.Type.ICON,
    Avatar.Type.EMOJI,
    Avatar.Type.INITIALS,
  ]),
};

Avatar.defaultProps = {
  backgroundColor: null,
  children: null,
  className: null,
  outlined: false,
  size: Avatar.Size.MEDIUM,
  theme: Theme.LIGHT,
  type: Avatar.Type.THUMBNAIL,
};

export default Avatar;
