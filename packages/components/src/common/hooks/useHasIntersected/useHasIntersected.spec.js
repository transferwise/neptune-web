import { renderHook } from '@testing-library/react-hooks';
import useHasIntersected from '.';

describe('useHasIntersected', () => {
  const originalIntersectionObserver = window.IntersectionObserver;
  let observe;
  let unobserve;
  let loading;
  let elRef;

  beforeEach(() => {
    observe = jest.fn();
    unobserve = jest.fn();
    loading = 'lazy';
  });
  afterEach(() => {
    window.IntersectionObserver = originalIntersectionObserver;
  });
  describe('when loading is set to eager', () => {
    it('returns false', () => {
      const { result } = renderHook(() => useHasIntersected({ elRef, loading: 'eager' }));
      expect(result.current).toEqual([false]);
    });
  });

  describe('when loading is set to lazy', () => {
    beforeEach(() => {
      elRef = { current: 'a valid ref' };
    });
    describe('when element is not visible', () => {
      it('returns true if ref is an invalid ref', () => {
        const { result } = renderHook(() => useHasIntersected({ elRef: null, loading }));
        expect(result.current).toEqual([true]);
      });
      it('returns true if ref is valid and IntersectionObserver is not supported', () => {
        window.IntersectionObserver = null;

        const { result } = renderHook(() => useHasIntersected({ elRef, loading }));
        expect(result.current).toEqual([true]);
      });
      it('returns false if ref is valid', () => {
        window.IntersectionObserver = jest.fn(callback => {
          callback([{ isIntersecting: false }], { unobserve });
          return {
            observe,
            unobserve,
          };
        });

        const { result } = renderHook(() => useHasIntersected({ elRef, loading }));
        expect(result.current).toEqual([false]);
      });
    });

    describe('when element is visible', () => {
      it('returns true if ref is valid and IntersectionObserver is supported', () => {
        window.IntersectionObserver = jest.fn(callback => {
          callback([{ isIntersecting: true }], { unobserve });
          return {
            observe,
            unobserve,
          };
        });

        const { result } = renderHook(() => useHasIntersected({ elRef, loading }));
        expect(observe).toHaveBeenCalledTimes(1);
        expect(result.current).toEqual([true]);
      });

      it('calls observer', () => {
        window.IntersectionObserver = jest.fn(() => ({
          observe,
          unobserve,
        }));

        renderHook(() => useHasIntersected({ elRef, loading }));
        expect(observe).toHaveBeenCalledTimes(1);
        expect(observe).toHaveBeenCalledWith(elRef.current);
        expect(unobserve).not.toHaveBeenCalled();
      });
    });

    describe('calls unobserve', () => {
      it('when element is intersecting ', () => {
        window.IntersectionObserver = jest.fn(callback => {
          callback([{ isIntersecting: true }], { unobserve });
          return {
            observe,
            unobserve,
          };
        });

        renderHook(() => useHasIntersected({ elRef, loading }));
        expect(unobserve).toHaveBeenCalledTimes(1);
        expect(unobserve).toHaveBeenCalledWith(elRef.current);
      });
    });
  });
});
