import { useLayoutEffect, useState, useEffect } from 'react';
import throttle from 'lodash.throttle';

const THROTTLE_MS = 100;

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export const useClientWidth = ({ ref, throttleMs = THROTTLE_MS }) => {
  const [clientWidth, setClientWidth] = useState(null);

  useIsomorphicLayoutEffect(() => {
    const updateClientWidth = () => {
      if (ref) {
        // when `ref` is a window
        if (ref.innerWidth) {
          setClientWidth(ref.innerWidth);
        }
        // when `ref` is an element
        else if (ref.current) {
          setClientWidth(ref.current.clientWidth);
        }
      }
    };
    // This assignment saves a reference to the function so it will be the same passed to both addEventListener removeEventListener.
    // If throttle gets passed directly to both add and removeEventListenet the results will be that the event
    // won't get removed even if the component is unmounted.
    const attachedFunction = throttle(updateClientWidth, throttleMs);

    window.addEventListener('resize', attachedFunction, true);

    updateClientWidth();

    return () => window.removeEventListener('resize', attachedFunction, true);
  }, []);

  return [clientWidth];
};

useClientWidth.THROTTLE_MS = THROTTLE_MS;
