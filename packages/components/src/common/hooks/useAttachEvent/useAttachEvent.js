import { useEffect } from 'react';

/**
 * useAttachEvent attaches an event to the document and return the value of a condition provided.
 *
 * @param {bool} attachListener - condition to be met for the listener to be attached.
 * @param {function} callBack - callBack called when the provided condition is met.
 * @param {function} condition - the returned value of the callback which is the condition to be checked.
 * @param {string} eventType - type of event to attach to document.
 *
 * @usage `useAttachEvent({
    eventType: 'click',
    condition: (event) => event.keyCode === keyCodes.ESCAPE,
    callBack,
    attachListener: open,
  });`
 *
 * */
export const useAttachEvent = ({ attachListener, callBack, condition, eventType }) => {
  useEffect(() => {
    const updateUseAttach = (event) => callBack(condition(event));

    if (attachListener) {
      document.addEventListener(eventType, updateUseAttach, true);
    }

    return () => document.removeEventListener(eventType, updateUseAttach, true);
  }, [attachListener]);
};
