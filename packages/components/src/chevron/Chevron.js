import '@transferwise/neptune-css/dist/css/chevron.css';
import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import { ChevronUp } from '@transferwise/icons';
import { Size, Position } from '../common';

const CONTAINER_SIZE = {
  [Size.EXTRA_SMALL]: 10,
  [Size.SMALL]: 16,
  [Size.MEDIUM]: 24,
};

const ExtraSmallChevron = ({ className }) => (
  <span
    className={classNames('tw-icon', 'tw-icon-chevron', className)}
    role="presentation"
    aria-hidden
  >
    <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" focusable="false">
      <path
        fillRule="evenodd"
        d="M4.9995 2.0865L0.0635004 6.7645L1.2745 7.9125L4.9995 4.3835L8.7245 7.9135L9.9355 6.7645L4.9995 2.0865Z"
      />
    </svg>
  </span>
);

ExtraSmallChevron.propTypes = {
  className: Types.string,
};

ExtraSmallChevron.defaultProps = {
  className: null,
};

const Chevron = ({ orientation, size, disabled, className }) => {
  const classNameValue = classNames(
    'tw-chevron',
    { 'chevron-color': !disabled },
    `${[orientation]}`.toLowerCase(),
    className,
  );

  const sizeValue = CONTAINER_SIZE[size];

  if (size === Size.EXTRA_SMALL) {
    return <ExtraSmallChevron className={classNameValue} />;
  }

  return <ChevronUp className={classNameValue} size={sizeValue} />;
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
  size: Types.oneOf([Chevron.Size.EXTRA_SMALL, Chevron.Size.SMALL, Chevron.Size.MEDIUM]),
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
