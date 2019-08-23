/**
 * @jest-environment node
 */

import React from 'react';
import { renderToString } from 'react-dom/server';
import * as components from '.';

describe('Server side rendering', () => {
  const componentNames = Object.keys(components);

  expect(componentNames.length).toBeGreaterThan(0);

  // stick all possible properties we might need to render all components in here
  const allProps = {
    selectedCurrency: { currency: 'EUR' },
    currencies: [],
    steps: [],
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
    displayPattern: '**-**',
    position: 'left',
    open: true,
  };

  // Override props in case of name collision.
  const overrideProps = {
    Typeahead: { size: 'md' },
    Sticky: { position: 'top' },
  };

  componentNames.forEach(componentName => {
    it(`works for ${componentName} components`, () => {
      const Component = components[componentName];
      if (overrideProps[componentName]) {
        const propToOverrideKey = Object.keys(overrideProps[componentName])[0];
        allProps[propToOverrideKey] = overrideProps[componentName][propToOverrideKey];
      }
      const string = renderToString(<Component {...allProps} />);
      expect(string).toEqual(expect.any(String));
    });
  });
});
