import React, { useState } from 'react';
import Types from 'prop-types';
import { usePopper } from 'react-popper';

import classnames from 'classnames';
import { Position } from '../common';
import './Detached.css';

const Detached = ({
  arrow,
  children,
  extraStyles,
  fallbackPlacements,
  flip,
  offset,
  placement,
  referenceElement,
}) => {
  const [arrowElement, setArrowElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const modifiers = [];

  const modifiersOptions = {
    arrow: { element: arrowElement },
    flip: { fallbackPlacements },
  };

  modifiers.push({ name: 'offset', options: { offset } });

  if (arrow) {
    modifiers.push({ name: 'arrow', options: modifiersOptions.arrow });
  }
  if (flip) {
    modifiers.push({ name: 'flip', options: modifiersOptions.flip });
  }

  const { styles, attributes } = usePopper(referenceElement.current, popperElement, {
    placement,
    modifiers,
  });

  return (
    <div
      ref={setPopperElement}
      style={{ ...styles.popper, ...extraStyles }}
      {...attributes.popper}
      className={classnames('np-dropdown')}
    >
      {arrow && <div id="arrow" ref={setArrowElement} style={styles.arrow} />}
      {children}
    </div>
  );
};

Detached.Position = {
  TOP: Position.TOP,
  RIGHT: Position.RIGHT,
  BOTTOM: Position.BOTTOM,
  LEFT: Position.LEFT,
};

Detached.defaultProps = {
  arrow: false,
  extraStyles: undefined,
  fallbackPlacements: Detached.Position.TOP,
  flip: true,
  intialOpen: false,
  offset: undefined,
  placement: Detached.Position.TOP,
};

Detached.propTypes = {
  arrow: Types.bool,
  children: Types.element.isRequired,
  fallbackPlacements: Types.arrayOf(
    Types.oneOf([
      Detached.Position.TOP,
      Detached.Position.RIGHT,
      Detached.Position.BOTTOM,
      Detached.Position.LEFT,
    ]),
  ),
  extraStyles: Types.shapeOf({}),
  flip: Types.bool,
  intialOpen: Types.bool,
  offset: Types.arrayOf(Types.number),
  placement: Types.oneOf([
    Detached.Position.TOP,
    Detached.Position.RIGHT,
    Detached.Position.BOTTOM,
    Detached.Position.LEFT,
    'top-start',
    'top-end',
    'bottom-start',
    'bottom-end',
    'right-start',
    'right-end',
    'left-start',
    'left-end',
  ]),
  referenceElement: Types.shape({ current: Types.instanceOf(Element) }).isRequired,
};

export default Detached;
