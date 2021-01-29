import { useLayoutEffect, useState, useEffect } from 'react';
import throttle from 'lodash.throttle';

const THROTTLE_MS = 100;

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export const useClientWidth = ({ ref, throttleMs = THROTTLE_MS }) => {
  const [clientWidth, setClientWidth] = useState(null);

  const updateClientWidth = () => {
    if (ref && ref.current) {
      setClientWidth(ref.current.clientWidth);
    }
  };

  useIsomorphicLayoutEffect(() => {
    window.addEventListener('resize', throttle(updateClientWidth, throttleMs));

    updateClientWidth();

    return () => window.removeEventListener('resize', updateClientWidth);
  }, []);

  return [clientWidth];
};

useClientWidth.THROTTLE_MS = THROTTLE_MS;
