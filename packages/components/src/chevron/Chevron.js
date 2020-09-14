import '@transferwise/neptune-css/dist/css/chevron.css';
import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import { Size, Position } from '../common';

import { ChevronUp } from '@transferwise/icons';

const CONTAINER_SIZE = {
  [Size.SMALL]: 16,
  [Size.MEDIUM]: 24,
};

const Chevron = ({ orientation, size, disabled, className }) => {
  const props = {
    className: classNames(
      'tw-chevron',
      { 'chevron-color': !disabled },
      `${[orientation]}`.toLowerCase(),
      className,
    ),
    size: CONTAINER_SIZE[size],
  };
  return <ChevronUp {...props} />;
};

Chevron.Orientation = Position;
Chevron.Size = Size;

Chevron.propTypes = {
  orientation: Types.oneOf([
    Chevron.Orientation.TOP,
    Chevron.Orientation.BOTTOM,
    Chevron.Orientation.LEFT,
    Chevron.Orientation.RIGHT,
  ]),
  size: Types.oneOf([Chevron.Size.SMALL, Chevron.Size.MEDIUM]),
  disabled: Types.bool,
  className: Types.string,
};

Chevron.defaultProps = {
  orientation: Chevron.Orientation.BOTTOM,
  size: Chevron.Size.SMALL,
  disabled: false,
  className: null,
};

export default Chevron;
