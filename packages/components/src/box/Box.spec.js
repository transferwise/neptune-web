import React from 'react';
import serializer from 'jest-emotion';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import renderer from 'react-test-renderer';

import Box from './';

const Width = { xs: 1, sm: 1 / 2, md: 30, lg: 40, xl: 0 };
const customMediaQueries = [0, 10, 20, 30, 40].map(bp => `@media (min-width: ${bp}px)`);

expect.addSnapshotSerializer(serializer);

const props = {
  tagHtml: 'section',
  size: Width,
  marginX: 1,
  marginY: 2,
  paddingX: 3,
  paddingY: 4,
  justifyContent: 'center',
  alignItems: 'end',
  extraClassNames: ['anotherClass1', 'anotherClass2'],
};

describe('Box', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <Box {...props}>
        <div>This is a children.</div>
      </Box>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('renders correctly with custom media queries', () => {
    const component = renderer.create(
      <Box {...props} customMediaQueries={customMediaQueries}>
        <div>This is a children.</div>
      </Box>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
