import serializer from 'jest-emotion';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import renderer from 'react-test-renderer'; // eslint-disable-line import/no-extraneous-dependencies

import Flex from './';
import Box from '../box';

const Direction = {
  default: 'row',
  xs: 'row-reverse',
  sm: 'column',
  md: 'column-reverse',
  lg: 'row',
  xl: 'row-reverse',
};

const Size = { default: 0, xs: 1 / 8, sm: 1 / 4, md: 1 / 2, lg: 100, xl: 100 };

const customMediaQueries = [10, 20, 30, 40, 50].map(bp => `@media (min-width: ${bp}px)`);

expect.addSnapshotSerializer(serializer);

const props = {
  direction: Direction,
  marginX: 0,
  marginY: 1,
  paddingX: 2,
  paddingY: 3,
  className: 'anotherClass1 anotherClass2',
  as: 'section',
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
