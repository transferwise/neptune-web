import { renderHook } from '@testing-library/react-hooks';
import { useRTL } from './useRTL';

describe('useRTL', () => {
  it('returns 0', () => {
    const {
      result: { current },
    } = renderHook(() => useRTL());

    expect(current).toEqual([false]);
  });
});
