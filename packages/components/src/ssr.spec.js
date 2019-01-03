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
    children: 'yo',
    id: '1',
    title: 'trolo',
    name: 'lolo',
    label: 'hello',
    content: 'world',
    currency: 'XYZ',
    amount: 0,
    options: [],
    media: <h1>Hello</h1>,
    onChange: () => {},
    onClick: () => {},
  };

  componentNames.forEach(componentName => {
    it(`works for ${componentName} components`, () => {
      const Component = components[componentName];
      const string = renderToString(<Component {...allProps} />);
      expect(string).toEqual(expect.any(String));
    });
  });
});
