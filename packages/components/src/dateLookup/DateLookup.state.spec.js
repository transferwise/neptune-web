import React from 'react';
import { shallow } from 'enzyme';

import DateLookup from '.';

jest.mock('react-intl', () => ({
  injectIntl: (Component) => (props) => <Component {...props} intl={{ locale: 'en' }} />,
  useIntl: () => ({ locale: 'en' }),
}));

// Tests for getDerivedStateFromProps results
describe('DateLookup state', () => {
  let component;
  let defaultProps;

  beforeEach(() => {
    defaultProps = { onChange: jest.fn() };
    component = shallow(<DateLookup {...defaultProps} />).dive();
  });

  it('sets correct defaults', () => {
    const { selectedDate, min, max, viewMonth, viewYear, open, mode } = component.instance().state;
    expect(selectedDate).toBeNull();
    expect(min).toBeNull();
    expect(max).toBeNull();
    expect(viewMonth).not.toBeNull();
    expect(viewYear).not.toBeNull();
    expect(open).toBe(false);
    expect(mode).toBe('day');
  });
});
