import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

import { Size, Key } from '../common';

import './Tile.css';

export const Tile = ({ className, description, disabled, href, media, onClick, size, title }) => {
  const isSmall = size === Tile.Size.SMALL;

  return (
    <a
      className={classNames(
        'decision',
        'flex-column',
        'np-tile',
        'text-no-decoration',
        'text-xs-center',
        className,
        {
          'p-y-5 p-x-4': !isSmall,
          'np-tile--small p-a-2': isSmall,
          disabled,
        },
      )}
      href={href}
      onClick={disabled ? null : onClick}
      onKeyDown={
        disabled
          ? null
          : ({ key }) => {
              if (key === Key.ENTER || Key.SPACE.indexOf(key) > -1) {
                onClick();
              }
            }
      }
      aria-label={title}
    >
      <div className="np-tile__media d-flex justify-content-center">{media}</div>
      <div className="np-tile__title">{title}</div>
      {description && <div className="np-tile__description">{description}</div>}
    </a>
  );
};

Tile.Size = Size;

Tile.propTypes = {
  /** Classes to apply to the Tile container */
  className: Types.string,
  description: Types.node,
  disabled: Types.bool,
  href: Types.string.isRequired,
  /** Accepts only Avatar and images */
  media: Types.node.isRequired,
  /** Function called onClick or onKeyDown */
  onClick: Types.func.isRequired,
  /** The size applied to Tile */
  size: Types.oneOf([Tile.Size.SMALL, Tile.Size.MEDIUM]),
  title: Types.node.isRequired,
};

Tile.defaultProps = {
  className: '',
  description: null,
  disabled: false,
  size: Tile.Size.MEDIUM,
};

export default Tile;
