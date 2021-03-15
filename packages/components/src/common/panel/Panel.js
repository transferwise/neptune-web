import React, { useState, forwardRef } from 'react';
import Types from 'prop-types';
import classnames from 'classnames';
import { usePopper } from 'react-popper';

import { Position } from '..';
import './Panel.css';

const POPOVER_OFFSET = [0, 16];

// By default the flip positioning explores only the opposite alternative. So if left is passed and there's no enough space
// the right one gets chosen. If there's no space on both sides popover goes back to the initially chosen one left.
// This mapping forces popover to try the four available positions before going back to the initial chosen one.
const fallbackPlacements = {
  [Position.TOP]: [Position.BOTTOM, Position.RIGHT, Position.LEFT],
  [Position.BOTTOM]: [Position.TOP, Position.RIGHT, Position.LEFT],
  [Position.LEFT]: [Position.RIGHT, Position.TOP, Position.BOTTOM],
  [Position.RIGHT]: [Position.LEFT, Position.TOP, Position.BOTTOM],
};

const Panel = forwardRef(
  ({ arrow, children, className, open, position: placement, anchorRef }, ref) => {
    const [arrowElement, setArrowElement] = useState(null);
    const [popperElement, setPopperElement] = useState(null);

    const modifiers = [];

    if (arrow) {
      modifiers.push({
        name: 'arrow',
        options: {
          element: arrowElement,
          options: {
            padding: 8, // 8px from the edges of the popper
          },
        },
      });
      // This lets you displace a popper element from its reference element.
      modifiers.push({ name: 'offset', options: { offset: POPOVER_OFFSET } });
    }
    if (fallbackPlacements[placement]) {
      modifiers.push({
        name: 'flip',
        options: {
          fallbackPlacements: fallbackPlacements[placement],
        },
      });
    }

    const { styles, attributes } = usePopper(anchorRef.current, popperElement, {
      placement,
      modifiers,
    });

    return (
      // Popper recommends to use the popper element as a wrapper around an inner element that can have any CSS property transitioned for animations.
      <div
        ref={setPopperElement}
        style={{ ...styles.popper }}
        {...attributes.popper}
        className={classnames('np-panel', { 'np-panel--open': open }, className)}
      >
        <div ref={ref} className={classnames('np-panel__content')}>
          {children}
          {/* Arrow has to stay inside content to get the same animations as the "dialog" and to get hidden when panel is closed. */}
          {arrow && (
            <div
              className={classnames('np-panel__arrow')}
              ref={setArrowElement}
              style={styles.arrow}
            />
          )}
        </div>
      </div>
    );
  },
);

Panel.Position = {
  BOTTOM: Position.BOTTOM,
  LEFT: Position.LEFT,
  RIGHT: Position.RIGHT,
  TOP: Position.TOP,
};

Panel.defaultProps = {
  arrow: false,
  className: undefined,
  open: false,
  position: Panel.Position.TOP,
};

Panel.propTypes = {
  arrow: Types.bool,
  className: Types.string,
  children: Types.node.isRequired,
  open: Types.bool,
  position: Types.oneOf([
    Panel.Position.BOTTOM,
    Panel.Position.LEFT,
    Panel.Position.RIGHT,
    Panel.Position.TOP,
  ]),
  anchorRef: Types.shape({ current: Types.shape({}) }).isRequired,
};

export default Panel;
