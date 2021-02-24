import { renderHook } from '@testing-library/react-hooks';
import usePrev from './usePrev';

describe('when usePrev is used', () => {
  let val;
  let rerender;

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
