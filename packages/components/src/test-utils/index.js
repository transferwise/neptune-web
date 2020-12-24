import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { mount } from 'enzyme';

import { Provider } from '..';
import en from '../../i18n/en.json';

function customMount(ui, providerProps = { locale: 'en', messages: en }) {
  return mount(ui, {
    // eslint-disable-next-line react/prop-types
    wrappingComponent: ({ children }) => {
      return <Provider i18n={providerProps}>{children}</Provider>;
    },
  });
}

export { customMount };

/**
 * Custom `render` function which wraps passed elements in Provider component
 * Source: https://testing-library.com/docs/example-react-intl/#creating-a-custom-render-function
 */
function customRender(ui, { locale = 'en', messages = en, ...renderOptions } = {}) {
  // eslint-disable-next-line react/prop-types
  function Wrapper({ children }) {
    return <Provider i18n={{ locale, messages }}>{children}</Provider>;
  }
  return render(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { userEvent };
export { customRender as render };
