import { getPlacement, getPopoverPosition } from './positioning';
import Placement from './Placement';

describe('Popover positioning', () => {
  describe('placement', () => {
    it('is empty if no popover', () => {
      expect(getPlacement(undefined, Placement.LEFT)).toBe('');
    });

    describe('is corrected to bottom if overflows left and right', () => {
      it('corrects to bottom center if it doesnt overflow in this position', () => {
        documentWidth(360);
        const popover = new Popover({ width: 360 }).trigger({ left: 130, width: 100 });

        expect(getPlacement(popover, Placement.LEFT)).toBe(Placement.BOTTOM);
      });

      it('corrects to bottom right if it overflows left when positioned bottom', () => {
        documentWidth(360);
        const popover = new Popover({ width: 360 }).trigger({ left: 129, width: 100 });

        expect(getPlacement(popover, Placement.LEFT)).toBe(Placement.BOTTOM_RIGHT);
      });

      it('corrects to bottom left if it overflows right when positioned bottom', () => {
        documentWidth(360);
        const popover = new Popover({ width: 360 }).trigger({ left: 131, width: 100 });

        expect(getPlacement(popover, Placement.LEFT)).toBe(Placement.BOTTOM_LEFT);
      });
    });

    it('is corrected to left if right and overflows right', () => {
      documentWidth(320);
      const popover = new Popover({ width: 50 }).trigger({
        left: 100,
        width: 200,
      });

      expect(getPlacement(popover, Placement.RIGHT)).toBe(Placement.LEFT);
    });

    it('is corrected to top left if top right and overflows right', () => {
      documentWidth(320);
      const popover = new Popover({ width: 50 }).trigger({
        left: 100,
        width: 200,
      });

      expect(getPlacement(popover, Placement.RIGHT_TOP)).toBe(Placement.LEFT_TOP);
    });

    it('is corrected to right if left and overflows left', () => {
      documentWidth(320);
      const popover = new Popover({ width: 100 }).trigger({
        left: 50,
        width: 100,
      });

      expect(getPlacement(popover, Placement.LEFT)).toBe(Placement.RIGHT);
    });

    it('is corrected to top right if top left and overflows left', () => {
      documentWidth(320);
      const popover = new Popover({ width: 100 }).trigger({
        left: 50,
        width: 100,
      });

      expect(getPlacement(popover, Placement.LEFT_TOP)).toBe(Placement.RIGHT_TOP);
    });

    it('remains the same if does not overflow', () => {
      documentWidth(320);
      const popover = new Popover({ width: 100 }).trigger({
        left: 150,
        width: 100,
      });

      expect(getPlacement(popover, Placement.LEFT)).toBe(Placement.LEFT);
    });
  });

  describe('position', () => {
    it('is empty if no popover', () => {
      expect(getPopoverPosition(undefined, Placement.LEFT)).toEqual({});
    });

    it('is correct for top placement', () => {
      const popover = new Popover({ width: 100, height: 50 }).trigger({
        top: 300,
        left: 300,
        width: 200,
      });

      expect(getPopoverPosition(popover, Placement.TOP)).toEqual({
        top: 250,
        right: 450,
        left: 350,
      });
    });

    it('is correct for right placement', () => {
      const popover = new Popover({ width: 100, height: 50 }).trigger({
        top: 300,
        left: 300,
        width: 200,
        height: 200,
      });

      expect(getPopoverPosition(popover, Placement.RIGHT)).toEqual({
        top: 375,
        right: 600,
        left: 500,
      });
    });

    it('is correct for bottom placement', () => {
      const popover = new Popover({ width: 100 }).trigger({
        top: 300,
        left: 300,
        width: 200,
        height: 200,
      });

      expect(getPopoverPosition(popover, Placement.BOTTOM)).toEqual({
        top: 500,
        right: 450,
        left: 350,
      });
    });

    it('is correct for bottom left placement', () => {
      const popover = new Popover({ width: 100 })
        .trigger({
          top: 300,
          left: 300,
          width: 200,
          height: 200,
        })
        .arrow({ width: 14, right: 29, marginLeft: -7 });

      expect(getPopoverPosition(popover, Placement.BOTTOM_LEFT)).toEqual({
        top: 500,
        right: 429,
        left: 329,
      });
    });

    it('is correct for bottom right placement', () => {
      const popover = new Popover({ width: 100 })
        .trigger({
          top: 300,
          left: 300,
          width: 200,
          height: 200,
        })
        .arrow({ width: 14, left: 29, marginLeft: -7 });

      expect(getPopoverPosition(popover, Placement.BOTTOM_RIGHT)).toEqual({
        top: 500,
        right: 471,
        left: 371,
      });
    });

    it('is correct for left placement', () => {
      const popover = new Popover({ width: 100, height: 50 }).trigger({
        top: 300,
        left: 300,
        height: 200,
      });

      expect(getPopoverPosition(popover, Placement.LEFT)).toEqual({
        top: 375,
        right: 300,
        left: 200,
      });
    });

    it('is correct for top right placement', () => {
      const popover = new Popover({ width: 100 })
        .trigger({ top: 300, left: 300, width: 200, height: 200 })
        .arrow({ top: 20, height: 10, marginTop: 8 });

      expect(getPopoverPosition(popover, Placement.RIGHT_TOP)).toEqual({
        top: 367,
        right: 600,
        left: 500,
      });
    });

    it('is correct for top left placement', () => {
      const popover = new Popover({ width: 100 })
        .trigger({ top: 300, left: 300, height: 200 })
        .arrow({ top: 20, height: 10, marginTop: 8 });

      expect(getPopoverPosition(popover, Placement.LEFT_TOP)).toEqual({
        top: 367,
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

  trigger = ({ top, left, width, height }) => {
    this.previousElementSibling = {
      offsetTop: top,
      offsetLeft: left,
      getBoundingClientRect: () => ({ left }),
      offsetWidth: width,
      offsetHeight: height,
    };

    return this;
  };

  left = left => {
    this.getBoundingClientRect = () => ({ left });
    return this;
  };

  arrow = styles => {
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
