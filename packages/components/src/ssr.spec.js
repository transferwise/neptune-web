/**
 * @jest-environment node
 */

import React from 'react';
import { renderToString } from 'react-dom/server';
import * as components from '.';
import en from '../i18n/en.json';

const excluded = ['useSnackbar', 'Provider'];

function isNotExcluded(componentName) {
  return !excluded.includes(componentName);
}

describe('Server side rendering', () => {
  const componentNames = Object.keys(components).filter(isNotExcluded);
  expect(componentNames.length).toBeGreaterThan(0);

  // stick all possible properties we might need to render all components in here
  const allProps = {
    currencies: [],
    steps: [],
    stepper: {
      steps: [],
    },
    items: [],
    children: 'yo',
    id: '1',
    title: 'trolo',
    name: 'lolo',
    label: 'hello',
    content: 'world',
    currency: 'XYZ',
    amount: 0,
    options: [],
    model: {},
    fields: {},
    media: <h1>Hello</h1>,
    onClick: jest.fn(),
    onChange: jest.fn(),
    status: 'processing',
    size: 'sm',
    body: 'body',
    onClose: jest.fn(),
    onDismiss: jest.fn(),
    onRemove: jest.fn(),
    radios: [
      {
        id: 'id-test-0',
        label: 'Radio1',
      },
      {
        id: 'id-test-0',
        label: 'Radio1',
      },
    ],
    position: 'left',
    open: true,
    tabs: [],
    direction: {
      xs: 'column',
      sm: 'row',
      md: 'column',
      lg: 'row',
    },
    alt: '',
    src: '',
    details: 'yo',
    icon: <svg />,
    badge: <svg />,
    link: 'link',
    href: '#',
    description: 'description',
    'aria-label': 'a label',
    logo: <svg />,
  };

  // Override props in case of name collision.
  const overrideProps = {
    Alert: { children: undefined, message: 'Fluffy kittens', size: undefined },
    Card: { isExpanded: true },
    CheckboxButton: { children: undefined, onChange: jest.fn() },
    Typeahead: { size: 'md' },
    InputWithDisplayFormat: { displayPattern: '**-**' },
    TextareaWithDisplayFormat: { displayPattern: '**-**' },
    Sticky: { position: 'top' },
    MoneyInput: { selectedCurrency: { currency: 'EUR' } },
    Tabs: { selected: 1, onTabSelect: jest.fn() },
    Markdown: { children: '# Markdown string' },
    SnackbarConsumer: {
      children: jest.fn(),
    },
    SnackbarContext: {
      children: jest.fn(),
    },
    Popover: {
      children: <div />,
    },
    Field: {
      model: 'a model',
      type: 'text',
      children: <input />,
    },
    Summary: {
      status: 'done',
      content: undefined,
    },
    Tile: {
      media: <img alt="img" />,
    },
    Modal: { position: 'top' },
  };

  const { Provider } = components;
  componentNames.forEach((componentName) => {
    it(`works for ${componentName} components`, () => {
      const Component = components[componentName];

      const newProps = { ...allProps };
      if (overrideProps[componentName]) {
        Object.keys(overrideProps[componentName]).forEach((propToOverrideKey) => {
          newProps[propToOverrideKey] = overrideProps[componentName][propToOverrideKey];
        });
      }

      const string = renderToString(
        <Provider i18n={{ locale: 'en-GB', messages: en }}>
          {componentName.endsWith('Context') ? (
            <Component.Provider {...newProps} />
          ) : (
            <Component {...newProps} />
          )}
        </Provider>,
      );
      expect(string).toEqual(expect.any(String));
    });
  });
});
