import React from 'react';
import { render } from '@testing-library/react';
import MobileNav from './MobileNav';
import { Items } from './__mocks__/items';

describe('MobileNav', () => {
  it('renders', () => {
    expect(() => render(<MobileNav items={Items} activeItemPath={Items[0].path} />)).not.toThrow();
  });
});
