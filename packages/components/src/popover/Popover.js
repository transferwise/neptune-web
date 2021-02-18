import React, { useRef } from 'react';
import Types from 'prop-types';
import classnames from 'classnames';

import { logActionRequiredIf, deprecated } from '../utilities';
import { Position } from '../common';
import ResponsivePanel from '../common/responsivePanel';
import { useAttachEvent } from '../common/hooks';
import keyCodes from '../common/keyCodes';

import './Popover.css';

const expiryDate = new Date('17-08-2021');

const Popover = ({
  children,
  classNames,
  content,
  onClose,
  open,
  preferredPlacement,
  position = preferredPlacement,
  title,
}) => {
  logActionRequired({ position });

  const triggerRef = useRef(null);
  const responsivePanelRef = useRef(null);

  const callBack = (val) => val && onClose(true);

  useAttachEvent({
    eventType: 'click',
    condition: (event) =>
      ![responsivePanelRef, triggerRef].some((el) => el?.current?.contains(event.target)),
    callBack,
    attachListener: open,
  });

  useAttachEvent({
    eventType: 'keydown',
    condition: (event) => event.keyCode === keyCodes.ESCAPE,
    callBack,
    attachListener: open,
  });

  return (
    <span className={classnames('np-popover', classNames)}>
      <span className="d-inline-block" ref={triggerRef}>
        {children}
        {open && (
          <span role="status" className="sr-only">
            {title}
            {content}
          </span>
        )}
      </span>
      <ResponsivePanel
        open={open}
        ref={responsivePanelRef}
        triggerRef={triggerRef}
        position={deprecatedPositions[position] || position}
        arrow
      >
        <div className="np-popover__content" aria-hidden={!open} role="tooltip">
          <div className="h5">{title}</div>
          {content}
        </div>
      </ResponsivePanel>
    </span>
  );
};

const logActionRequired = ({ position }) => {
  logActionRequiredIf(
    `Popover has deprecated the ${position} value for the 'position' prop. Please use ${deprecatedPositions[position]} instead.`,
    deprecatedPositions[position],
  );
};

Popover.Position = {
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
  classNames: undefined,
  onClose: undefined,
  open: false,
  position: Popover.Position.TOP,
  title: undefined,
};

Popover.propTypes = {
  children: Types.node.isRequired,
  classNames: Types.string,
  content: Types.node.isRequired,
  onClose: Types.func,
  open: Types.bool,
  /** @DEPRECATED please use position instead */
  // eslint-disable-next-line
  preferredPlacement: deprecated(
    Types.oneOf([
      Popover.Position.TOP,
      Popover.Position.RIGHT,
      Popover.Position.BOTTOM,
      Popover.Position.LEFT,
      Popover.Position.LEFT_TOP,
      Popover.Position.RIGHT_TOP,
      Popover.Position.BOTTOM_RIGHT,
      Popover.Position.BOTTOM_LEFT,
    ]),
    {
      component: 'Popover',
      newProp: 'position',
      expiryDate,
    },
  ),
  position: Types.oneOf([
    Popover.Position.BOTTOM,
    Popover.Position.LEFT,
    Popover.Position.RIGHT,
    Popover.Position.TOP,
    /* @DEPRECATED Please use BOTTOM instead. */
    Popover.Position.BOTTOM_LEFT,
    /* @DEPRECATED Please use BOTTOM instead. */
    Popover.Position.BOTTOM_RIGHT,
    /* @DEPRECATED Please use TOP instead. */
    Popover.Position.LEFT_TOP,
    /* @DEPRECATED Please use TOP instead. */
    Popover.Position.RIGHT_TOP,
  ]),
  title: Types.node,
};

export const deprecatedPositions = {
  [Position.BOTTOM_LEFT]: Popover.Position.BOTTOM,
  [Position.BOTTOM_RIGHT]: Popover.Position.BOTTOM,
  [Position.LEFT_TOP]: Popover.Position.TOP,
  [Position.RIGHT_TOP]: Popover.Position.TOP,
};

export default Popover;
