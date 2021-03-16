import React from 'react';
import { useIntl } from 'react-intl';
import { shallow } from 'enzyme';

import DateLookup from '.';
import { getStartOfDay } from './getStartOfDay';

jest.mock('react-intl');

// Tests for getDerivedStateFromProps results
describe('DateLookup state', () => {
  let component;
  let defaultProps;
  const defaultState = { selectedDate: null, min: null, max: null };

  beforeEach(() => {
    defaultProps = { value: new Date(), onChange: jest.fn() };
    useIntl.mockReturnValue({ locale: 'en-GB' });
    component = shallow(<DateLookup {...defaultProps} />);
  });

  it('sets correct defaults', () => {
    const { selectedDate, min, max, viewMonth, viewYear, open, mode } = component.instance().state;
    const { value } = component.instance().props;
    expect(selectedDate).toEqual(getStartOfDay(value));
    expect(min).toBeNull();
    expect(max).toBeNull();
    expect(viewMonth).not.toBeNull();
    expect(viewYear).not.toBeNull();
    expect(open).toBe(false);
    expect(mode).toBe('day');
  });

  it('does not update when date props did not change', () => {
    const props = { open: true };
    expect(DateLookup.getDerivedStateFromProps(props, defaultState)).toEqual(null);
  });

  it('updates selectedDate on props value change', () => {
    const props = { value: new Date(2018, 11, 27) };
    const newState = DateLookup.getDerivedStateFromProps(props, defaultState);
    expect(+newState.selectedDate).toBe(+new Date(2018, 11, 27));
  });

  it('sets date values to midnight', () => {
    const props = {
      value: new Date(2018, 11, 27, 15, 23),
      min: new Date(2018, 10, 27, 22, 23),
      max: new Date(2018, 11, 28, 0, 30),
    };
    const newState = DateLookup.getDerivedStateFromProps(props, defaultState);
    expect(+newState.selectedDate).toBe(+new Date(2018, 11, 27, 0, 0));
    expect(+newState.min).toBe(+new Date(2018, 10, 27, 0, 0));
    expect(+newState.max).toBe(+new Date(2018, 11, 28, 0, 0));
  });

  it('calls onChange with min when it is < min', () => {
    const onChange = jest.fn();
    const props = { value: new Date(2018, 11, 27), min: new Date(2018, 11, 28), onChange };
    DateLookup.getDerivedStateFromProps(props, defaultState);
    expect(onChange).toHaveBeenCalledWith(new Date(2018, 11, 28));
  });

  it('calls onChange with max when it is > min', () => {
    const onChange = jest.fn();
    const props = { value: new Date(2018, 11, 27), max: new Date(2018, 10, 1), onChange };
    DateLookup.getDerivedStateFromProps(props, defaultState);
    expect(onChange).toHaveBeenCalledWith(new Date(2018, 10, 1));
  });
});
