import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import BackButton from '.';

const props = {
  label: <>label</>,
  className: 'className',
  onClick: jest.fn(),
};
describe('BackButton', () => {
  it(`renders as expected`, () => {
    expect(render(<BackButton {...props} />).container).toMatchSnapshot();
  });
});
