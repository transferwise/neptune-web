import { act, renderHook } from '@testing-library/react-hooks';
import { fireEvent } from '../../../test-utils';

import { useClientWidth } from './useClientWidth';

jest.mock('lodash.throttle', () => jest.fn((fn) => fn));

describe('useClientWidth', () => {
  describe('when invalid ref is provided', () => {
    it('returns 0', () => {
      const ref = { invalid: true };
      const {
        result: { current },
      } = renderHook(() => useClientWidth({ ref }));

      expect(current).toEqual([null]);
    });
  });

  describe('when valid ref is provided', () => {
    it('returns initial ref width', () => {
      const ref = { current: { clientWidth: 500 } };
      const {
        result: { current },
      } = renderHook(() => useClientWidth({ ref }));

      expect(current).toEqual([500]);
    });

    it('updates the ref width on window resize', () => {
      const ref = { current: { clientWidth: 500 } };
      const { result } = renderHook(() => useClientWidth({ ref }));

      expect(result.current).toEqual([500]);

      act(() => {
        ref.current.clientWidth = 700;
        fireEvent(window, new Event('resize'));
      });
      expect(result.current).toEqual([700]);
    });
  });
});
