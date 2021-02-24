import React from 'react';
import { mount } from 'enzyme';
import { Provider } from '@transferwise/components';
import { act } from 'react-dom/test-utils';

const getMockFetchPromise = (status, jsonFn, delay, signal) => {
  const response = {
    status,
    json: jsonFn,
  };
  return new Promise((resolve) => {
    let aborted = false;
    if (signal) {
      signal.addEventListener('abort', () => {
        aborted = true;
      });
    }
    setTimeout(() => {
      return !aborted && resolve(response);
    }, delay);
  });
};

const wait = (t) => {
  return act(() => {
    return new Promise((resolve) => setTimeout(resolve, t));
  });
};

function mountWithProviders(component, locale = 'en-GB', messages = {}) {
  return mount(<Provider i18n={{ locale, messages }}>{component}</Provider>);
}

export { mountWithProviders as mount, getMockFetchPromise, wait };
