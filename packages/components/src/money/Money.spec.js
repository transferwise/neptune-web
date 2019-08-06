import React from 'react';
import { shallow } from 'enzyme';
import { formatMoney } from '@transferwise/formatting';

import Money from '.';

jest.mock('@transferwise/formatting', () => ({
  formatMoney: jest.fn(),
}));

describe('Money', () => {
  it('formats the string with amount, currency & default `en` locale', () => {
    shallow(<Money amount={4.98} currency="GBP" />);
    expect(formatMoney).toBeCalledWith(4.98, 'GBP', 'en');
  });

  it('formats the string with amount, currency & the passed in locale', () => {
    shallow(<Money amount={4.98} currency="GBP" locale="pt" />);
    expect(formatMoney).toBeCalledWith(4.98, 'GBP', 'pt');
  });
});
