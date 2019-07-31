import React from 'react';
import serializer from 'jest-emotion';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import renderer from 'react-test-renderer';

import Flex from './';

const Direction = { xs: 'row', sm: 'row-reverse', md: 'column', lg: 'column-reverse', xl: 'row' };

const customMediaQueries = [0, 10, 20, 30, 40].map(bp => `@media (min-width: ${bp}px)`);

expect.addSnapshotSerializer(serializer);

const props = {
  direction: Direction,
  marginX: 0,
  marginY: 1,
  paddingX: 2,
  paddingY: 3,
};

describe('Box', () => {
  it('renders correctly', () => {
    const component = renderer.create(
      <Flex {...props}>
        <div>This is a children.</div>
      </Flex>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('renders correctly with custom media queries', () => {
    const component = renderer.create(
      <Flex {...props} customMediaQueries={customMediaQueries}>
        <div>This is a children.</div>
      </Flex>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
