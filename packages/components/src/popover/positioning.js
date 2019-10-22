import Placement from './Placement';

const { TOP, RIGHT, BOTTOM, BOTTOM_RIGHT, BOTTOM_LEFT, LEFT, RIGHT_TOP, LEFT_TOP } = Placement;

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
  if (rightPlacementOverflows.overflowsRight && preferredPlacement === RIGHT) {
    return LEFT;
  }
  if (rightPlacementOverflows.overflowsRight && preferredPlacement === RIGHT_TOP) {
    return LEFT_TOP;
  }
  if (leftPlacementOverflows.overflowsLeft && preferredPlacement === LEFT) {
    return RIGHT;
  }
  if (leftPlacementOverflows.overflowsLeft && preferredPlacement === LEFT_TOP) {
    return RIGHT_TOP;
  }
  return preferredPlacement;
}

function determineBestBottomPlacement(popover, documentBounds) {
  const overflowsWithBottomPlacement = calculateOverflows(popover, BOTTOM, documentBounds);
  if (overflowsWithBottomPlacement.overflowsLeft && !overflowsWithBottomPlacement.overflowsRight) {
    return BOTTOM_RIGHT;
  } else if (
    overflowsWithBottomPlacement.overflowsRight &&
    !overflowsWithBottomPlacement.overflowsLeft
  ) {
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

function getPopoverPosition(popover, placement, trigger) {
  const { offsetWidth: popoverWidth, offsetHeight: popoverHeight } = popover;

  const arrowStyles = getComputedStyle(popover, ':before');
  const arrowTop = toInt(arrowStyles.top);
  const arrowHeight = toInt(arrowStyles.height);
  const arrowWidth = toInt(arrowStyles.width);
  const arrowLeft = toInt(arrowStyles.left);
  const arrowRight = toInt(arrowStyles.right);
  const arrowMarginTop = toInt(arrowStyles['margin-top']);
  const arrowMarginLeft = toInt(arrowStyles['margin-left']);

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
          left: trigger.left + trigger.width / 2 - (arrowLeft + arrowMarginLeft + arrowWidth / 2),
        },
        popoverWidth,
      );
    case BOTTOM_LEFT:
      return enrichWithRightPosition(
        {
          top: trigger.top + trigger.height,
          left:
            trigger.left +
            trigger.width / 2 -
            (popoverWidth - arrowRight + arrowMarginLeft + arrowWidth / 2),
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
          top: trigger.top + trigger.height / 2 - (arrowTop + arrowMarginTop + arrowHeight / 2),
          left: trigger.left + trigger.width,
        },
        popoverWidth,
      );
    case LEFT_TOP:
      return enrichWithRightPosition(
        {
          top: trigger.top + trigger.height / 2 - (arrowTop + arrowMarginTop + arrowHeight / 2),
          left: trigger.left - popoverWidth,
        },
        popoverWidth,
      );
    default:
      return {};
  }
}

function toInt(str) {
  return parseInt(str, 10);
}

function enrichWithRightPosition(pos, popoverWidth) {
  return {
    right: pos.left + popoverWidth,
    ...pos,
  };
}
