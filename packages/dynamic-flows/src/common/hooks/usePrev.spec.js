import { renderHook } from '@testing-library/react-hooks';
import usePrev from './usePrev';

describe('when usePrev is used', () => {
  let val;
  let rerender;

  describe('when used with primitive', () => {
    beforeEach(() => {
      const hook = renderHook(({ state }) => usePrev(state), { initialProps: { state: 0 } });
      val = hook.result;
      rerender = hook.rerender;
    });

    it('should be undefined initially', () => {
      expect(val.current).toBeUndefined();
    });

    describe('when value is updated', () => {
      beforeEach(() => {
        rerender({ state: 1 });
      });

      it('should return previous value', () => {
        expect(val.current).toBe(0);
      });

      describe('when value is updated again', () => {
        beforeEach(() => {
          rerender({ state: 1 });
        });

        it('should still render previous value', () => {
          expect(val.current).toBe(1);
        });
      });
    });
  });

  describe('when used with object', () => {
    beforeEach(() => {
      const hook = renderHook(({ state }) => usePrev(state), {
        initialProps: { state: { foo: 'bar' } },
      });
      val = hook.result;
      rerender = hook.rerender;
    });

    it('should be undefined initially', () => {
      expect(val.current).toBeUndefined();
    });

    describe('when value is updated', () => {
      beforeEach(() => {
        rerender({ state: { foo: 'foo' } });
      });

      it('should return previous value', () => {
        expect(val.current).toMatchObject({ foo: 'bar' });
      });

      describe('when value is updated again', () => {
        beforeEach(() => {
          rerender({ foo: 'foo' });
        });

        it('should still render previous value', () => {
          expect(val.current).toMatchObject({ foo: 'foo' });
        });
      });
    });
  });
});
