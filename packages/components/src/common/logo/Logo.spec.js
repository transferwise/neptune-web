import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Logo from '.';

const props = {
  className: 'className',
  theme: Logo.Theme.LIGHT,
  type: Logo.Type.FULL,
};
describe('Logo', () => {
  it(`renders as expected for theme ${Logo.Theme.LIGHT} and type ${Logo.Type.FULL}`, () => {
    expect(render(<Logo {...props} />).container).toMatchSnapshot();
  });
  it(`renders as expected for theme ${Logo.Theme.LIGHT} and type ${Logo.Type.FLAG}`, () => {
    expect(render(<Logo {...props} type={Logo.Type.FLAG} />).container).toMatchSnapshot();
  });
  it(`renders as expected for theme ${Logo.Theme.DARK} and type ${Logo.Type.FULL}`, () => {
    expect(render(<Logo {...props} theme={Logo.Theme.DARK} />).container).toMatchSnapshot();
  });
});
