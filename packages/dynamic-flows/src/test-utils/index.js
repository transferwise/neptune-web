import React from 'react';
import { mount } from 'enzyme';
import { Provider } from '@transferwise/components';

function mountWithProviders(component, locale = 'en', messages = {}) {
  return mount(<Provider i18n={{ locale, messages }}>{component}</Provider>);
}

export { mountWithProviders as mount };
