import React from 'react';
import '@testing-library/jest-dom';
import { render } from '../../test-utils';

import CloseButton from '.';

const props = {
  className: 'className',
  onClick: jest.fn(),
};
describe('CloseButton', () => {
  it(`renders as expected`, () => {
    expect(render(<CloseButton {...props} />).container).toMatchSnapshot();
  });
});
