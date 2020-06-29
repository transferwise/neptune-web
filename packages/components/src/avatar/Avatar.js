import React from 'react';
import Types from 'prop-types';
import classnames from 'classnames';

import './Avatar.css';

import { Size } from '../common';

const Avatar = ({ size, type, children, outlined, className }) => (
  <div
    className={classnames('avatar', className, `avatar--${size}`, `avatar--${type}`, {
      'avatar--outlined': outlined,
    })}
  >
    <div className="avatar__content">{children}</div>
  </div>
);

Avatar.Size = Size;

Avatar.Type = {
  THUMBNAIL: 'thumbnail',
  ICON: 'icon',
  EMOJI: 'emoji',
  INITIALS: 'initials',
};

Avatar.propTypes = {
  size: Types.oneOf([Avatar.Size.SMALL, Avatar.Size.MEDIUM, Avatar.Size.LARGE]),
  type: Types.oneOf([
    Avatar.Type.THUMBNAIL,
    Avatar.Type.ICON,
    Avatar.Type.EMOJI,
    Avatar.Type.INITIALS,
  ]),
  children: Types.node,
  outlined: Types.bool,
  className: Types.string,
};

Avatar.defaultProps = {
  type: Avatar.Type.THUMBNAIL,
  size: Avatar.Size.MEDIUM,
  outlined: false,
  className: null,
  children: null,
};

export default Avatar;
