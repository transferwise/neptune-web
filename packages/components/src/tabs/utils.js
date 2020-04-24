const MIN_SWIPE_DISTANCE = 50;
const MIN_SWIPE_VELOCITY = 0.1;

const swipedSignificantDistance = (difference) => Math.abs(difference) > MIN_SWIPE_DISTANCE;

const swipedWithSignificantVelocity = (velocity) => velocity > MIN_SWIPE_VELOCITY;

export const getSwipeVelocity = (start, end) => {
  const timePassed = end.time - start.time;

  return getSwipeDifference(start, end) / timePassed;
};

export const getSwipeDifference = (start, end, axis = 'x') => {
  return Math.abs(start[axis] - end[axis]);
};

export const swipedLeftToRight = (start, end) => {
  return end.x > start.x;
};

export const swipedRightToLeft = (start, end) => {
  return start.x > end.x;
};

export const swipeShouldChangeTab = (start, end) => {
  const difference = getSwipeDifference(start, end);
  const velocity = getSwipeVelocity(start, end);

  return swipedSignificantDistance(difference) && swipedWithSignificantVelocity(velocity);
};

export function getVelocity(coords) {
  const relevant = coords.slice(Math.max(coords.length - 5, 1));
  const first = relevant[0];
  const last = relevant[relevant.length - 1];

  return Math.abs(first.x - last.x) / (last.time - first.time);
}

/*
  `elasticDrag` is the translateX value, which slows down as the difference increases
  `1 - Math.E ** (-0.005 * difference)` provides a % value of how far we want to translate (0.005 being the rate)
  `Math.min(150, window.innerWidth / 3)` provides the maximum translate value
*/
export const getElasticDragDifference = (difference) =>
  Math.min(150, window.innerWidth / 3) * (1 - Math.E ** (-0.005 * difference));
