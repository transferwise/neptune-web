import { Position } from '../common';

const { TOP, RIGHT, BOTTOM, BOTTOM_RIGHT, BOTTOM_LEFT, LEFT, RIGHT_TOP, LEFT_TOP } = Position;

export function getPlacement(popover, preferredPlacement) {
  if (!popover) {
    return '';
  }

  const documentBounds = {
    right: document.documentElement.clientWidth,
    left: 0,
  };
  return overridePlacementGivenDocumentBounds(preferredPlacement, popover, documentBounds);
}

function overridePlacementGivenDocumentBounds(preferredPlacement, popover, documentBounds) {
  const rightPlacementOverflows = calculateOverflows(popover, RIGHT, documentBounds);
  const leftPlacementOverflows = calculateOverflows(popover, LEFT, documentBounds);

  if (!rightPlacementOverflows.overflowsRight && !leftPlacementOverflows.overflowsLeft) {
    return preferredPlacement;
  }
  if (rightPlacementOverflows.overflowsRight && leftPlacementOverflows.overflowsLeft) {
    return determineBestBottomPlacement(popover, documentBounds);
  }
  if (rightPlacementOverflows.overflowsRight) {
    if (preferredPlacement === RIGHT) {
      return LEFT;
    }
    if (preferredPlacement === RIGHT_TOP) {
      return LEFT_TOP;
    }
    if (preferredPlacement === BOTTOM || preferredPlacement === BOTTOM_RIGHT) {
      return BOTTOM_LEFT;
    }
  }
  if (leftPlacementOverflows.overflowsLeft) {
    if (preferredPlacement === LEFT) {
      return RIGHT;
    }
    if (preferredPlacement === LEFT_TOP) {
      return RIGHT_TOP;
    }
    if (preferredPlacement === BOTTOM || preferredPlacement === BOTTOM_LEFT) {
      return BOTTOM_RIGHT;
    }
  }
  return preferredPlacement;
}

function determineBestBottomPlacement(popover, documentBounds) {
  const overflowsWithBottomPlacement = calculateOverflows(popover, BOTTOM, documentBounds);
  if (overflowsWithBottomPlacement.overflowsLeft && !overflowsWithBottomPlacement.overflowsRight) {
    return BOTTOM_RIGHT;
  }
  if (overflowsWithBottomPlacement.overflowsRight && !overflowsWithBottomPlacement.overflowsLeft) {
    return BOTTOM_LEFT;
  }
  return BOTTOM;
}

function calculateOverflows(popover, placement, documentBounds) {
  const pos = getPositionRelativeToViewport(popover, placement);
  return {
    overflowsRight: pos.right > documentBounds.right,
    overflowsLeft: pos.left < documentBounds.left,
  };
}

export function getPositionRelativeToParent(popover, placement) {
  if (!popover) {
    return {};
  }
  const trigger = popover.previousElementSibling;
  const triggerPos = {
    top: trigger.offsetTop,
    left: trigger.offsetLeft,
    width: trigger.offsetWidth,
    height: trigger.offsetHeight,
  };
  return getPopoverPosition(popover, placement, triggerPos);
}

function getPositionRelativeToViewport(popover, placement) {
  if (!popover) {
    return {};
  }
  return getPopoverPosition(
    popover,
    placement,
    popover.previousElementSibling.getBoundingClientRect(),
  );
}

const ARROW_OFFSET = 30;

function getPopoverPosition(popover, placement, trigger) {
  const { offsetWidth: popoverWidth, offsetHeight: popoverHeight } = popover;

  switch (placement) {
    case TOP:
      return enrichWithRightPosition(
        {
          top: trigger.top - popoverHeight,
          left: trigger.left + trigger.width / 2 - popoverWidth / 2,
        },
        popoverWidth,
      );
    case RIGHT:
      return enrichWithRightPosition(
        {
          top: trigger.top + trigger.height / 2 - popoverHeight / 2,
          left: trigger.left + trigger.width,
        },
        popoverWidth,
      );
    case BOTTOM:
      return enrichWithRightPosition(
        {
          top: trigger.top + trigger.height,
          left: trigger.left + trigger.width / 2 - popoverWidth / 2,
        },
        popoverWidth,
      );
    case BOTTOM_RIGHT:
      return enrichWithRightPosition(
        {
          top: trigger.top + trigger.height,
          left: trigger.left + trigger.width / 2 - ARROW_OFFSET,
        },
        popoverWidth,
      );
    case BOTTOM_LEFT:
      return enrichWithRightPosition(
        {
          top: trigger.top + trigger.height,
          left: trigger.left + trigger.width / 2 - popoverWidth + ARROW_OFFSET,
        },
        popoverWidth,
      );
    case LEFT:
      return enrichWithRightPosition(
        {
          top: trigger.top + trigger.height / 2 - popoverHeight / 2,
          left: trigger.left - popoverWidth,
        },
        popoverWidth,
      );
    case RIGHT_TOP:
      return enrichWithRightPosition(
        {
          top: trigger.top + trigger.height / 2 - ARROW_OFFSET,
          left: trigger.left + trigger.width,
        },
        popoverWidth,
      );
    case LEFT_TOP:
      return enrichWithRightPosition(
        {
          top: trigger.top + trigger.height / 2 - ARROW_OFFSET,
          left: trigger.left - popoverWidth,
        },
        popoverWidth,
      );
    default:
      return {};
  }
}

function enrichWithRightPosition(pos, popoverWidth) {
  return {
    right: pos.left + popoverWidth,
    ...pos,
  };
}
