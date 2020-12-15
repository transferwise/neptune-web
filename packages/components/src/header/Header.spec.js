import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Header from './Header';

describe('Header', () => {
  const props = {
    leftContent: 'leftContent',
    rightContent: 'rightContent',
    bottomContent: 'bottomContent',
    className: 'className',
  };
  it('renders as expected', () => {
    expect(render(<Header {...props} />).container).toMatchSnapshot();
  });

  it('renders as expected with vertical layout', () => {
    expect(
      render(<Header {...props} layout={Header.Layout.VERTICAL} />).container,
    ).toMatchSnapshot();
  });
});
