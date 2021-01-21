import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from '..';
import { DEFAULT_LOCALE } from '../common/locale';
import en from '../../i18n/en-GB.json';

/**
 * Custom `render` function which wraps passed elements in Provider component
 * Source: https://testing-library.com/docs/example-react-intl/#creating-a-custom-render-function
 */
function customRender(ui, { locale = DEFAULT_LOCALE, messages = en, ...renderOptions } = {}) {
  // eslint-disable-next-line react/prop-types
  function Wrapper({ children }) {
    return <Provider i18n={{ locale, messages }}>{children}</Provider>;
  }
  return render(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { userEvent };
export { customRender as render };

export function injectIntlMock(Component) {
  return (props) => <Component {...props} intl={{ locale: DEFAULT_LOCALE }} />;
}
