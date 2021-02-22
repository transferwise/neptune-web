import React, { useState, forwardRef } from 'react';
import Types from 'prop-types';
import classnames from 'classnames';
import { usePopper } from 'react-popper';

import { Position } from '..';
import './Panel.css';

const Panel = forwardRef(({ arrow, children, className, open, position, triggerRef }, ref) => {
  const [arrowElement, setArrowElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);

  const modifiers = [];

  if (arrow) {
    modifiers.push({ name: 'arrow', options: { padding: 5, element: arrowElement } });
    // This lets you displace a popper element from its reference element.
    modifiers.push({ name: 'offset', options: { offset: [0, 16] } });
  }

  const { styles, attributes } = usePopper(triggerRef.current, popperElement, {
    placement: position,
    modifiers,
  });

  return (
    // Popper recommends to use the popper element as a wrapper around an inner element that can have any CSS property transitioned for animations.
    <div
      ref={setPopperElement}
      style={{ ...styles.popper }}
      {...attributes.popper}
      className={classnames('np-panel')}
    >
      <div
        ref={ref}
        className={classnames('np-panel__content', { 'np-panel--open': open }, className)}
      >
        {children}
      </div>
      {arrow && <div className="np-panel__arrow" ref={setArrowElement} style={styles.arrow} />}
    </div>
  );
});

Panel.Position = {
  BOTTOM: Position.BOTTOM,
  LEFT: Position.LEFT,
  RIGHT: Position.RIGHT,
  TOP: Position.TOP,
};

Panel.defaultProps = {
  arrow: true,
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
  triggerRef: Types.shape({ current: Types.shape({}) }).isRequired,
};

export default Panel;
