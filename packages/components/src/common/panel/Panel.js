import React, { useState, forwardRef } from 'react';
import Types from 'prop-types';
import classnames from 'classnames';

import { usePopper } from 'react-popper';
import { Position } from '..';
import './Panel.css';

const Panel = forwardRef(({ arrow, children, className, open, position, triggerRef }, ref) => {
  const [arrowElement, setArrowElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);

  const modifiers = [
    {
      name: 'computeStyles',
      options: {
        adaptive: false,
      },
    },
    // This flips the position if that position does not fit, the opposite position will be used.
    { name: 'flip' },
  ];

  if (arrow) {
    modifiers.push({ name: 'arrow', options: { padding: 5, element: arrowElement } });
    // This lets you displace a popper element from its reference element.
    modifiers.push({ name: 'offset', options: { offset: [0, 12] } });
  }

  const { styles, attributes } = usePopper(triggerRef.current, popperElement, {
    placement: position,
    modifiers,
  });

  return (
    <div ref={ref}>
      <div
        className={classnames('np-panel', { 'np-panel--open': open }, className)}
        ref={setPopperElement}
        style={{ ...styles.popper }}
        {...attributes.popper}
      >
        {arrow && <div className="np-panel__arrow" ref={setArrowElement} style={styles.arrow} />}
        {children}
      </div>
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
