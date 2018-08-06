import { getPlacement, getPopoverPosition } from './positioning';
import Placement from './Placement';

describe('Popover positioning', () => {
  describe('placement', () => {
    it('is empty if no popover', () => {
      expect(getPlacement(undefined, Placement.LEFT)).toBe('');
    });

    it('is corrected to bottom if overflows left and right', () => {
      documentWidth(320);
      const popover = new Popover({ width: 150 }).trigger({
        left: 20,
        width: 200,
      });

      expect(getPlacement(popover, Placement.LEFT)).toBe(Placement.BOTTOM);
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
        left: 350,
      });
    });

    it('is correct for right placement', () => {
      const popover = new Popover({ height: 50 }).trigger({
        top: 300,
        left: 300,
        width: 200,
        height: 200,
      });

      expect(getPopoverPosition(popover, Placement.RIGHT)).toEqual({
        top: 375,
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
        left: 350,
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
        left: 200,
      });
    });

    it('is correct for top right placement', () => {
      const popover = new Popover()
        .trigger({ top: 300, left: 300, width: 200, height: 200 })
        .arrow({ top: 20, height: 10, marginTop: 8 });

      expect(getPopoverPosition(popover, Placement.RIGHT_TOP)).toEqual({
        top: 367,
        left: 500,
      });
    });

    it('is correct for top left placement', () => {
      const popover = new Popover({ width: 100 })
        .trigger({ top: 300, left: 300, height: 200 })
        .arrow({ top: 20, height: 10, marginTop: 8 });

      expect(getPopoverPosition(popover, Placement.LEFT_TOP)).toEqual({
        top: 367,
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
      top: styles.top.toString(),
      height: styles.height.toString(),
      'margin-top': styles.marginTop.toString(),
    });

    return this;
  };
}
