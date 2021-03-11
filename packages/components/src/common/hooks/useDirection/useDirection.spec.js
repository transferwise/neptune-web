import { renderHook } from '@testing-library/react-hooks';
import { useDirection } from './useDirection';

describe('useDirection', () => {
  it('returns 0', () => {
    const {
      result: { current },
    } = renderHook(() => useDirection());

    expect(current).toEqual([false]);
  });
});
