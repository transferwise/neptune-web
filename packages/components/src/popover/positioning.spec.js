import { getPlacement, getPositionRelativeToParent } from './positioning';
import { Position } from '../common';

const { TOP, RIGHT, BOTTOM, BOTTOM_RIGHT, BOTTOM_LEFT, LEFT, RIGHT_TOP, LEFT_TOP } = Position;

describe('Popover positioning', () => {
  describe('placement', () => {
    it('is empty if no popover', () => {
      expect(getPlacement(undefined, LEFT)).toBe('');
    });

    describe('is corrected to bottom if overflows left and right', () => {
      it('corrects to bottom center if it doesnt overflow in this position', () => {
        documentWidth(360);
        const popover = new Popover({ width: 360 }).triggerRelativeToDocument({
          left: 130,
          width: 100,
        });

        expect(getPlacement(popover, LEFT)).toBe(BOTTOM);
      });

      it('corrects to bottom right if it overflows left when positioned bottom', () => {
        documentWidth(360);
        const popover = new Popover({ width: 360 }).triggerRelativeToDocument({
          left: 129,
          width: 100,
        });

        expect(getPlacement(popover, LEFT)).toBe(BOTTOM_RIGHT);
      });

      it('corrects to bottom left if it overflows right when positioned bottom', () => {
        documentWidth(360);
        const popover = new Popover({ width: 360 }).triggerRelativeToDocument({
          left: 131,
          width: 100,
        });

        expect(getPlacement(popover, LEFT)).toBe(BOTTOM_LEFT);
      });
    });

    it('is corrected to left if right and overflows right', () => {
      documentWidth(320);
      const popover = new Popover({ width: 50 }).triggerRelativeToDocument({
        left: 100,
        width: 200,
      });

      expect(getPlacement(popover, RIGHT)).toBe(LEFT);
    });

    it('is corrected to top left if top right and overflows right', () => {
      documentWidth(320);
      const popover = new Popover({ width: 50 }).triggerRelativeToDocument({
        left: 100,
        width: 200,
      });

      expect(getPlacement(popover, RIGHT_TOP)).toBe(LEFT_TOP);
    });

    it('is corrected to right if left and overflows left', () => {
      documentWidth(320);
      const popover = new Popover({ width: 100 }).triggerRelativeToDocument({
        left: 50,
        width: 100,
      });

      expect(getPlacement(popover, LEFT)).toBe(RIGHT);
    });

    it('is corrected to top right if top left and overflows left', () => {
      documentWidth(320);
      const popover = new Popover({ width: 100 }).triggerRelativeToDocument({
        left: 50,
        width: 100,
      });

      expect(getPlacement(popover, LEFT_TOP)).toBe(RIGHT_TOP);
    });

    it('remains the same if does not overflow', () => {
      documentWidth(320);
      const popover = new Popover({ width: 100 }).triggerRelativeToDocument({
        left: 150,
        width: 100,
      });

      expect(getPlacement(popover, LEFT)).toBe(LEFT);
    });
  });

  describe('position', () => {
    it('is empty if no popover', () => {
      expect(getPositionRelativeToParent(undefined, LEFT)).toEqual({});
    });

    it('is correct for top placement', () => {
      const popover = new Popover({ width: 100, height: 50 }).triggerRelativeToParent({
        top: 300,
        left: 300,
        width: 200,
      });

      expect(getPositionRelativeToParent(popover, TOP)).toEqual({
        top: 250,
        right: 450,
        left: 350,
      });
    });

    it('is correct for right placement', () => {
      const popover = new Popover({ width: 100, height: 50 }).triggerRelativeToParent({
        top: 300,
        left: 300,
        width: 200,
        height: 200,
      });

      expect(getPositionRelativeToParent(popover, RIGHT)).toEqual({
        top: 375,
        right: 600,
        left: 500,
      });
    });

    it('is correct for bottom placement', () => {
      const popover = new Popover({ width: 100 }).triggerRelativeToParent({
        top: 300,
        left: 300,
        width: 200,
        height: 200,
      });

      expect(getPositionRelativeToParent(popover, BOTTOM)).toEqual({
        top: 500,
        right: 450,
        left: 350,
      });
    });

    it('is correct for bottom left placement', () => {
      const popover = new Popover({ width: 100 })
        .triggerRelativeToParent({
          top: 300,
          left: 300,
          width: 200,
          height: 200,
        })
        .arrow({ width: 14, right: 29, marginLeft: -7 });

      expect(getPositionRelativeToParent(popover, BOTTOM_LEFT)).toEqual({
        top: 500,
        right: 430,
        left: 330,
      });
    });

    it('is correct for bottom right placement', () => {
      const popover = new Popover({ width: 100 })
        .triggerRelativeToParent({
          top: 300,
          left: 300,
          width: 200,
          height: 200,
        })
        .arrow({ width: 14, left: 29, marginLeft: -7 });

      expect(getPositionRelativeToParent(popover, BOTTOM_RIGHT)).toEqual({
        top: 500,
        right: 470,
        left: 370,
      });
    });

    it('is correct for left placement', () => {
      const popover = new Popover({ width: 100, height: 50 }).triggerRelativeToParent({
        top: 300,
        left: 300,
        height: 200,
      });

      expect(getPositionRelativeToParent(popover, LEFT)).toEqual({
        top: 375,
        right: 300,
        left: 200,
      });
    });

    it('is correct for top right placement', () => {
      const popover = new Popover({ width: 100 })
        .triggerRelativeToParent({ top: 300, left: 300, width: 200, height: 200 })
        .arrow({ top: 20, height: 10, marginTop: 8 });

      expect(getPositionRelativeToParent(popover, RIGHT_TOP)).toEqual({
        top: 370,
        right: 600,
        left: 500,
      });
    });

    it('is correct for top left placement', () => {
      const popover = new Popover({ width: 100 })
        .triggerRelativeToParent({ top: 300, left: 300, height: 200 })
        .arrow({ top: 20, height: 10, marginTop: 8 });

      expect(getPositionRelativeToParent(popover, LEFT_TOP)).toEqual({
        top: 370,
        right: 300,
        left: 200,
      });
    });
  });
});

function documentWidth(width) {
  Object.defineProperty(document, 'documentElement', {
    value: { clientWidth: width },
    configurable: true,
  });
}

class Popover {
  constructor({ width, height } = {}) {
    this.offsetWidth = width;
    this.offsetHeight = height;

    window.getComputedStyle = jest.fn().mockReturnValue({
      top: '0',
      height: '0',
      'margin-top': '0',
    });
  }

  triggerRelativeToParent = ({ top, left, width, height }) => {
    this.previousElementSibling = {
      offsetTop: top,
      offsetLeft: left,
      offsetWidth: width,
      offsetHeight: height,
    };

    return this;
  };

  triggerRelativeToDocument = ({ top, left, width, height }) => {
    this.previousElementSibling = {
      getBoundingClientRect: () => ({ top, left, width, height }),
      offsetWidth: width,
      offsetHeight: height,
    };

    return this;
  };

  left = (left) => {
    this.getBoundingClientRect = () => ({ left });
    return this;
  };

  arrow = (styles) => {
    window.getComputedStyle = jest.fn().mockReturnValue({
      top: styles.top ? styles.top.toString() : '',
      right: styles.right ? styles.right.toString() : '',
      left: styles.left ? styles.left.toString() : '',
      height: styles.height ? styles.height.toString() : '',
      width: styles.width ? styles.width.toString() : '',
      'margin-top': styles.marginTop ? styles.marginTop.toString() : '',
      'margin-left': styles.marginLeft ? styles.marginLeft.toString() : '',
    });

    return this;
  };
}
