import { addModalOpenBodyClass, removeModalOpenBodyClass } from './DOMOperations';

describe('DOM operations', () => {
  describe('modal open operations', () => {
    afterEach(() => {
      removeModalOpenBodyClass();
    });

    it('adds modal open class to body tag', () => {
      expect(bodyHasModalOpenClass()).toBe(false);
      addModalOpenBodyClass();
      expect(bodyHasModalOpenClass()).toBe(true);
    });
  });

  describe('modal close operations', () => {
    beforeEach(() => {
      addModalOpenBodyClass();
    });

    it('removes modal open class from body tag', () => {
      expect(bodyHasModalOpenClass()).toBe(true);
      removeModalOpenBodyClass();
      expect(bodyHasModalOpenClass()).toBe(false);
    });
  });

  function bodyHasModalOpenClass() {
    return document.body.classList.contains('modal-open');
  }
});
