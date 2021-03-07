import { addNoScrollBodyClass, removeNoScrollBodyClass } from './DOMOperations';

describe('DOM operations', () => {
  describe('add no-scroll operations', () => {
    afterEach(() => {
      removeNoScrollBodyClass();
    });

    it('adds no-scroll class to body tag', () => {
      expect(bodyHasNoScrollClass()).toBe(false);
      addNoScrollBodyClass();
      expect(bodyHasNoScrollClass()).toBe(true);
    });
  });

  describe('remove no-scroll operations', () => {
    beforeEach(() => {
      addNoScrollBodyClass();
    });

    it('removes no-scroll class from body tag', () => {
      expect(bodyHasNoScrollClass()).toBe(true);
      removeNoScrollBodyClass();
      expect(bodyHasNoScrollClass()).toBe(false);
    });
  });

  function bodyHasNoScrollClass() {
    return document.body.classList.contains('no-scroll');
  }
});
