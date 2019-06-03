import '@transferwise/neptune-css/dist/css/chevron.css';
import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

export const Orientation = {
  TOP: 'top',
  RIGHT: 'right',
  BOTTOM: 'bottom',
  LEFT: 'left',
};

export const Size = {
  SMALL: 'sm',
  MEDIUM: 'md',
  LARGE: 'lg',
};

const CONTAINER_SIZE = {
  [Size.SMALL]: 16,
  [Size.MEDIUM]: 24,
  [Size.LARGE]: 32,
};

const Chevron = ({ orientation, flip, size, animate }) => {
  const containerSize = CONTAINER_SIZE[size];
  const classes = classNames(orientation, size, {
    flip,
    animate,
  });

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className="chevron"
      width={containerSize}
      height={containerSize}
      viewBox={`0 0 ${containerSize} ${containerSize}`}
      preserveAspectRatio="xMidYMid"
    >
      <g className={`chevron-container ${classes}`}>
        <line className="chevron-line-one" x1="20%" y1="35%" x2="50%" y2="65%" />
        <line className="chevron-line-two" x1="50%" y1="65%" x2="80%" y2="35%" />
      </g>
    </svg>
  );
};

Chevron.propTypes = {
  orientation: Types.oneOf(Object.values(Orientation)),
  animate: Types.bool,
  flip: Types.bool,
  size: Types.oneOf(Object.values(Size)),
};

Chevron.defaultProps = {
  orientation: Orientation.Bottom,
  animate: false,
  flip: false,
  size: Size.SMALL,
};

export default Chevron;
