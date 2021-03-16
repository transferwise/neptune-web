import React, { useRef, useState, cloneElement } from 'react';
import Types from 'prop-types';
import classnames from 'classnames';

import { Position } from '../common';
import ResponsivePanel from '../common/responsivePanel';
import { logActionRequiredIf } from '../utilities';

import './Popover.css';

const Popover = ({ children, className, content, preferredPlacement, title }) => {
  logActionRequired({ preferredPlacement });
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const onClose = () => setOpen(false);

  return (
    <span className={classnames('np-popover', className)}>
      <span className="d-inline-block" ref={anchorRef}>
        {cloneElement(children, {
          onClick: () => {
            if (children?.props?.onClick) {
              children.props.onClick();
            }
            setOpen(!open);
          },
        })}
        {open && (
          <span role="status" className="sr-only">
            {title}
            {content}
          </span>
        )}
      </span>
      <ResponsivePanel
        open={open}
        anchorRef={anchorRef}
        position={deprecatedPlacements[preferredPlacement] || preferredPlacement}
        onClose={onClose}
        arrow
        className="np-popover__container"
      >
        <div className="np-popover__content" aria-hidden={!open} role="tooltip">
          {title && <div className="np-popover__title m-b-1">{title}</div>}
          {content}
        </div>
      </ResponsivePanel>
    </span>
  );
};

const logActionRequired = ({ preferredPlacement }) => {
  logActionRequiredIf(
    `Popover has deprecated ${preferredPlacement} value for the 'preferredPlacement' prop. Please use ${deprecatedPlacements[preferredPlacement]} instead.`,
    deprecatedPlacements[preferredPlacement],
  );
};

Popover.Placement = {
  BOTTOM: Position.BOTTOM,
  BOTTOM_LEFT: Position.BOTTOM_LEFT,
  BOTTOM_RIGHT: Position.BOTTOM_RIGHT,
  LEFT: Position.LEFT,
  LEFT_TOP: Position.LEFT_TOP,
  RIGHT: Position.RIGHT,
  RIGHT_TOP: Position.RIGHT_TOP,
  TOP: Position.TOP,
};

Popover.defaultProps = {
  className: undefined,
  preferredPlacement: Popover.Placement.RIGHT,
  title: undefined,
};

Popover.propTypes = {
  children: Types.node.isRequired,
  className: Types.string,
  content: Types.node.isRequired,
  /** @DEPRECATED LEFT_TOP/RIGHT_TOP use TOP instead, @DEPRECATED BOTTOM_RIGHT/BOTTOM_LEFT use BOTTOM instead */
  preferredPlacement: Types.oneOf([
    Popover.Placement.TOP,
    Popover.Placement.RIGHT,
    Popover.Placement.BOTTOM,
    Popover.Placement.LEFT,
    Popover.Placement.LEFT_TOP,
    Popover.Placement.RIGHT_TOP,
    Popover.Placement.BOTTOM_RIGHT,
    Popover.Placement.BOTTOM_LEFT,
  ]),
  title: Types.node,
};

const deprecatedPlacements = {
  [Position.BOTTOM_LEFT]: Popover.Placement.BOTTOM,
  [Position.BOTTOM_RIGHT]: Popover.Placement.BOTTOM,
  [Position.LEFT_TOP]: Popover.Placement.TOP,
  [Position.RIGHT_TOP]: Popover.Placement.TOP,
};

export default Popover;
