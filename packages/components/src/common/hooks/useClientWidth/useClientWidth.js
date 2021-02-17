import { useLayoutEffect, useState, useEffect } from 'react';
import throttle from 'lodash.throttle';

const THROTTLE_MS = 100;

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export const useClientWidth = ({ ref, throttleMs = THROTTLE_MS }) => {
  const [clientWidth, setClientWidth] = useState(null);

  useIsomorphicLayoutEffect(() => {
    const updateClientWidth = () => {
      if (ref) {
        // if ref is referencing to window we check the window.innerWidth
        if (ref.innerWidth) {
          setClientWidth(ref.innerWidth);
        } else if (ref.current) {
          setClientWidth(ref.current.clientWidth);
        }
      }
    };
    window.addEventListener('resize', throttle(updateClientWidth, throttleMs));

    updateClientWidth();

    return () => window.removeEventListener('resize', updateClientWidth);
  }, []);

  return [clientWidth];
};

useClientWidth.THROTTLE_MS = THROTTLE_MS;
