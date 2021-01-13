import React, { useEffect, useState, useRef, useCallback } from 'react';
import Types from 'prop-types';

import './Popover.css';

import { Position } from '../common';
import Dropdown from './Dropdown';

const Popover = ({
  children,
  content,
  fallbackPlacements,
  flip,
  intialOpen,
  preferredPlacement,
  title,
}) => {
  const referenceElement = useRef(null);
  const [open, setOpen] = useState(intialOpen || false);
  // This instance has to be stored this way so it won't change and can be removed with removeEventListener
  const closePopoverOnOutsideClick = useCallback((event) => {
    if (!referenceElement.current.contains(event.target)) {
      setOpen(false);
    }
  }, []);

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      document.addEventListener('click', closePopoverOnOutsideClick, true);
    } else {
      document.removeEventListener('click', closePopoverOnOutsideClick, true);
    }
  }, [open]);

  return (
    <span ref={referenceElement} className="d-inline-block">
      {/* setting ref on child wont work for React components without forwardRef  */}
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          onClick: () => handleClick(),
        });
      })}

      {open && (
        <div className="np-popover__dropdown">
          <Dropdown
            arrow
            flip={flip}
            referenceElement={referenceElement}
            fallbackPlacements={fallbackPlacements}
            placement={preferredPlacement}
            open={open}
            extraStyles={{ maxWidth: 252 }}
            offset={[0, 12]}
          >
            {title && <div className="h5">{title}</div>}
            <div className="np-popover__content m-t-1">{content}</div>
          </Dropdown>
        </div>
      )}
    </span>
  );
};

Popover.Placement = {
  TOP: Position.TOP,
  RIGHT: Position.RIGHT,
  BOTTOM: Position.BOTTOM,
  LEFT: Position.LEFT,
};

Popover.defaultProps = {
  fallbackPlacements: Popover.Placement.TOP,
  flip: true,
  intialOpen: false,
  preferredPlacement: Popover.Placement.TOP,
  title: undefined,
};

Popover.propTypes = {
  children: Types.element.isRequired,
  content: Types.node.isRequired,
  fallbackPlacements: Types.arrayOf(
    Types.oneOf([
      Popover.Placement.TOP,
      Popover.Placement.RIGHT,
      Popover.Placement.BOTTOM,
      Popover.Placement.LEFT,
    ]),
  ),
  flip: Types.bool,
  intialOpen: Types.bool,
  preferredPlacement: Types.oneOf([
    Popover.Placement.TOP,
    Popover.Placement.RIGHT,
    Popover.Placement.BOTTOM,
    Popover.Placement.LEFT,
    'top-start',
    'top-end',
    'bottom-start',
    'bottom-end',
    'right-start',
    'right-end',
    'left-start',
    'left-end',
  ]),
  title: Types.string,
};

export default Popover;
