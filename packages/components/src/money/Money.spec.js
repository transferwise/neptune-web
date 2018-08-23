import React from 'react';
import { shallow } from 'enzyme';

import Money from '.';

jest.mock('@transferwise/formatting', () => ({
  formatMoney: (amount, currency) => `${amount} ${currency}`,
}));

describe('Money', () => {
  it('has formatted amount and currency', () => {
    const component = shallow(<Money amount={4.98} currency="GBP" />);

    expect(component.text()).toBe('4.98 GBP');
  });
});
