import { useEffect } from 'react';

/**
 * useConditionalListener attaches an event to the document when a condition is met.
 *
 * @param {bool} attachListener - condition to be met for the listener to be attached
 * @param {function} callback - function registered with the event listener
 * @param {string} eventType - type of event to attach to document
 *
 * @usage `useConditionalListener({
    eventType: 'click',
    callback,
    attachListener: condition,
  });`
 *
 * */
export const useConditionalListener = ({ attachListener, callback, eventType }) => {
  useEffect(() => {
    if (attachListener) {
      document.addEventListener(eventType, callback, true);
    }

    return () => document.removeEventListener(eventType, callback, true);
  }, [attachListener]);
};
