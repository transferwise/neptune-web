import { useEffect } from 'react';

/**
 * useIsClickOutside detects whether the click is coming from within an element/s or not.
 *
 * @param {array} refs - array of refs.
 * @param {function} [callBack] - callBack called with true if the click is not coming from the eleme ie is outside of the element.
 *
 * @usage `useIsClickOutside({refs: [insideClick, triggerRef], callBack: (val) => setOpen(val)});`
 *
 * */
export const useIsClickOutside = ({ refs, callBack, attachListener }) => {
  useEffect(() => {
    const updateIsClickOutside = (event) => {
      // If the click is triggered from at least one of the elements provided set isClickOutsideElements to false
      const isClickOutsideElements = !refs.some((el) => el?.current?.contains(event.target));

      callBack(isClickOutsideElements);
    };

    if (attachListener) {
      document.addEventListener('click', updateIsClickOutside);
    }

    return () => document.removeEventListener('click', updateIsClickOutside);
  }, [attachListener]);
};
