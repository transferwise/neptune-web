import { useEffect } from 'react';

/**
 * useIsConditionMet detects whether a condition is met or not.
 *
 * @param {bool} attachListener - when to attach the event.
 * @param {function} callBack - callBack called when a condition is met.
 * @param {function} condition - condtion to check,
 * @param {string} eventType - type of event to attach to document.
 *
 * @usage `useIsConditionMet({refs: [insideClick, triggerRef], callBack: (val) => setOpen(val)});`
 *
 * */
export const useIsConditionMet = ({ attachListener, callBack, condition, eventType }) => {
  useEffect(() => {
    const updateIsConditionMet = (event) => callBack(condition(event));

    if (attachListener) {
      document.addEventListener(eventType, updateIsConditionMet);
    }

    return () => document.removeEventListener(eventType, updateIsConditionMet);
  }, [attachListener]);
};
