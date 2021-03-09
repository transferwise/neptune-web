/**
 * @jest-environment node
 */

import React from 'react';
import { renderToString } from 'react-dom/server';
import * as components from '.';

const excluded = ['useSnackbar'];

function isNotExcluded(componentName) {
  return !excluded.includes(componentName);
}

describe('Server side rendering', () => {
  const componentNames = Object.keys(components).filter(isNotExcluded);

  expect(componentNames.length).toBeGreaterThan(0);

  // stick all possible properties we might need to render all components in here
  const allProps = {
    schema: {},
    onChange: jest.fn(),
    submitted: false,
    name: 'name',
    field: {
      control: 'text',
      type: 'string',
      label: 'hello',
    },
    onPersistAsync: jest.fn(),
    baseUrl: 'some-url',
  };
  const overrideProps = {};

  componentNames.forEach((componentName) => {
    it(`works for ${componentName} components`, () => {
      const Component = components[componentName];
      const newProps = { ...allProps };
      if (overrideProps[componentName]) {
        Object.keys(overrideProps[componentName]).forEach((propToOverrideKey) => {
          newProps[propToOverrideKey] = overrideProps[componentName][propToOverrideKey];
        });
      }

      const string = renderToString(<Component {...newProps} />);
      expect(string).toEqual(expect.any(String));
    });
  });
});
