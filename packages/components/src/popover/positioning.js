import Placement from './Placement';

const { TOP, RIGHT, BOTTOM, LEFT, RIGHT_TOP, LEFT_TOP } = Placement;

export function getPlacement(popover, preferredPlacement) {
  if (!popover) {
    return '';
  }

  const { parentNode: trigger, offsetWidth: popoverWidth } = popover;
  const triggerLeft = trigger.getBoundingClientRect().left;
  const { offsetWidth: triggerWidth } = trigger;
  const documentRight = document.documentElement.clientWidth;

  const popoverRight = triggerLeft + triggerWidth + popoverWidth;
  const popoverLeft = triggerLeft - popoverWidth;

  const overflowsRight = popoverRight > documentRight;
  const overflowsLeft = popoverLeft < 0;

  return getPlacementForOverflows(preferredPlacement, overflowsLeft, overflowsRight);
}

function getPlacementForOverflows(placement, overflowsLeft, overflowsRight) {
  if (!overflowsRight && !overflowsLeft) {
    return placement;
  }
  if (overflowsRight && overflowsLeft) {
    return BOTTOM;
  }
  if (overflowsRight && placement === RIGHT) {
    return LEFT;
  }
  if (overflowsRight && placement === RIGHT_TOP) {
    return LEFT_TOP;
  }
  if (overflowsLeft && placement === LEFT) {
    return RIGHT;
  }
  if (overflowsLeft && placement === LEFT_TOP) {
    return RIGHT_TOP;
  }
  return placement;
}

export function getPopoverPosition(popover, placement) {
  if (!popover) {
    return {};
  }

  const { parentNode: trigger, offsetWidth: popoverWidth, offsetHeight: popoverHeight } = popover;
  const {
    offsetTop: triggerTop,
    offsetLeft: triggerLeft,
    offsetWidth: triggerWidth,
    offsetHeight: triggerHeight,
  } = trigger;
  const arrowStyles = getComputedStyle(popover, ':before');
  const arrowTop = toInt(arrowStyles.top);
  const arrowHeight = toInt(arrowStyles.height);
  const arrowMarginTop = toInt(arrowStyles['margin-top']);

  switch (placement) {
    case TOP:
      return {
        top: triggerTop - popoverHeight,
        left: triggerLeft + triggerWidth / 2 - popoverWidth / 2,
      };
    case RIGHT:
      return {
        top: triggerTop + triggerHeight / 2 - popoverHeight / 2,
        left: triggerLeft + triggerWidth,
      };
    case BOTTOM:
      return {
        top: triggerTop + triggerHeight,
        left: triggerLeft + triggerWidth / 2 - popoverWidth / 2,
      };
    case LEFT:
      return {
        top: triggerTop + triggerHeight / 2 - popoverHeight / 2,
        left: triggerLeft - popoverWidth,
      };
    case RIGHT_TOP:
      return {
        top: triggerTop + triggerHeight / 2 - (arrowTop + arrowMarginTop + arrowHeight / 2),
        left: triggerLeft + triggerWidth,
      };
    case LEFT_TOP:
      return {
        top: triggerTop + triggerHeight / 2 - (arrowTop + arrowMarginTop + arrowHeight / 2),
        left: triggerLeft - popoverWidth,
      };
    default:
      return {};
  }
}

function toInt(str) {
  return parseInt(str, 10);
}
