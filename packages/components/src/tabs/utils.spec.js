import {
  getElasticDragDifference,
  swipedLeftToRight,
  swipedRightToLeft,
  getSwipeDifference,
  swipeShouldChangeTab,
  getVelocity,
} from './utils';

describe('Tabs Utility', () => {
  let start;
  let end;
  let coords;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('when the ending x axis is greater than the starting x axis', () => {
    beforeEach(() => {
      start = { x: 0, time: 1569538800000 };
      end = { x: 50, time: 1569538800300 };
    });

    it('determines that the swipe was left to right', () => {
      expect(swipedLeftToRight(start, end)).toBe(true);
      expect(swipedRightToLeft(start, end)).toBe(false);
    });

    it('calculates the correct swipe difference', () => {
      expect(getSwipeDifference(start, end)).toBe(50);
    });
  });

  describe('when the ending x axis is less than the starting x axis', () => {
    beforeEach(() => {
      start = { x: 50, time: 1569538800000 };
      end = { x: 0, time: 1569538800300 };
    });

    it('determines that the swipe was right to left', () => {
      expect(swipedRightToLeft(start, end)).toBe(true);
      expect(swipedLeftToRight(start, end)).toBe(false);
    });

    it('calculates the correct swipe difference', () => {
      expect(getSwipeDifference(start, end)).toBe(50);
    });
  });

  describe('checking if a swipe should change tabs', () => {
    it('should change tab when the difference and velocity are significant', () => {
      start = { x: 0, time: 1569538800000 };
      end = { x: 100, time: 1569538800001 };
      expect(swipeShouldChangeTab(start, end)).toBe(true);
    });

    it('should not change tab when the difference is small', () => {
      start = { x: 0, time: 1569538800000 };
      end = { x: 1, time: 1569538800001 };
      expect(swipeShouldChangeTab(start, end)).toBe(false);
    });

    it('should not change tab when the velocity is small', () => {
      start = { x: 0, time: 1569538800000 };
      end = { x: 100, time: 1569538900000 };
      expect(swipeShouldChangeTab(start, end)).toBe(false);
    });
  });

  describe('checking for velocity against an array of touches', () => {
    beforeEach(() => {
      coords = [
        { x: 0, time: 1569538800000 },
        { x: 100, time: 1569538825000 },
        { x: 200, time: 1569538850000 },
        { x: 300, time: 1569538875000 },
        { x: 400, time: 1569538900000 },
      ];
    });

    it('should return the difference in velocity between the first and last touch in an array', () => {
      expect(getVelocity(coords)).toBe(0.004);
    });

    it('should only take into account the last 5 coordinates', () => {
      coords.unshift({ x: 10000, time: 1569538800000 }, { x: 100000, time: 1569538800000 });
      expect(getVelocity(coords)).toBe(0.004);
    });
  });

  describe('applying elasticity to a drag event', () => {
    it('gradually reduces the amount of difference returned toward a maximum distance', () => {
      global.innerWidth = 375;
      const maximumDraggableDistance = 125;

      expect(getElasticDragDifference(0)).toBe(0);
      expect(getApproximateElasticDragDifference(50)).toBe(28);
      expect(getApproximateElasticDragDifference(100)).toBe(49);
      expect(getApproximateElasticDragDifference(150)).toBe(66);
      expect(getApproximateElasticDragDifference(200)).toBe(79);
      expect(getApproximateElasticDragDifference(250)).toBe(89);
      expect(getApproximateElasticDragDifference(300)).toBe(97);
      expect(getApproximateElasticDragDifference(350)).toBe(103);

      expect(getElasticDragDifference(10000)).toBe(maximumDraggableDistance);
    });

    it('limits the maximum dragable distance on larger screens', () => {
      global.innerWidth = 1024;
      const maximumDraggableDistance = 150;
      expect(getElasticDragDifference(10000)).toBe(maximumDraggableDistance);
    });
  });
});

const getApproximateElasticDragDifference = (difference) =>
  Math.round(getElasticDragDifference(difference));
