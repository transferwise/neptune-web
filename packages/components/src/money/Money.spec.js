import React from 'react';
import { render } from '../test-utils';

import Money from '.';

describe('Money', () => {
  it('formats the string with amount, currency & default `en` locale', () => {
    const { container } = render(<Money amount={4.98} currency="GBP" />);
    expect(container).toHaveTextContent('4.98 GBP');
  });

  it('formats the string with amount, currency & the passed in locale', () => {
    const { container } = render(<Money amount={4.98} currency="GBP" />, {
      locale: 'fr',
      messages: {},
    });
    expect(container).toHaveTextContent('4,98 GBP');
  });
});
