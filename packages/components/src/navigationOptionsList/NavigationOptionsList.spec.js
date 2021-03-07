import React from 'react';
import { render } from '@testing-library/react';

import NavigationOptionsList from '.';
import NavigationOption from '../navigationOption';

describe('NavigationOptionsList', () => {
  it('renders the children in a list', () => {
    const { container } = render(
      <NavigationOptionsList>
        <NavigationOption title="1" />
        <NavigationOption title="2" />
      </NavigationOptionsList>,
    );

    expect(container.querySelectorAll('li')).toHaveLength(2);
  });
});
