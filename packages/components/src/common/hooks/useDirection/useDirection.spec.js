import { renderHook } from '@testing-library/react-hooks';
import { useDirection } from './useDirection';

describe('useRTL', () => {
  it('returns 0', () => {
    const {
      result: { current },
    } = renderHook(() => useDirection());

    expect(current).toEqual({ direction: 'ltr', isRTL: false });
  });
});
