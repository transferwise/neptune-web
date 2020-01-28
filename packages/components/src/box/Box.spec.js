import serializer from 'jest-emotion';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import renderer from 'react-test-renderer'; // eslint-disable-line import/no-extraneous-dependencies

import Box from './';

const Width = { default: 1 / 2, xs: 1, sm: 1 / 2, md: 30, lg: 40, xl: 0 };
const customMediaQueries = [10, 20, 30, 40, 50].map(bp => `@media (min-width: ${bp}px)`);

expect.addSnapshotSerializer(serializer);

const props = {
  as: 'section',
  size: Width,
  marginX: 1,
  marginY: 2,
  paddingX: 3,
  paddingY: 4,
  justifyContent: 'center',
  alignItems: 'flex-end',
  className: 'anotherClass1 anotherClass2',
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
