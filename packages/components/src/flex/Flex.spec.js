import React from 'react';
import serializer from 'jest-emotion';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import renderer from 'react-test-renderer';

import Flex from './';
import Box from '../box';

const Direction = { xs: 'row', sm: 'row-reverse', md: 'column', lg: 'column-reverse', xl: 'row' };

const Size = { xs: 1 / 8, sm: 1 / 4, md: 1 / 2, lg: 100, xl: 100 };

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
        <Box size={Size}>This is a children.</Box>
      </Flex>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
  it('renders correctly with custom media queries', () => {
    const component = renderer.create(
      <Flex {...props} customMediaQueries={customMediaQueries}>
        <Box size={Size}>This is a children.</Box>
      </Flex>,
    );
    expect(component.toJSON()).toMatchSnapshot();
  });
});
