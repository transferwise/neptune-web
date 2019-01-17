import React from 'react';
import { shallow } from 'enzyme';

import DateInput from './';
import { LOCALES } from './data/testFixtures';

const TEST_DATE = '1995-12-17';
const newDate = new Date('1995-12-17');

const TEST_DATE_OBJECT = new Date(
  newDate.getUTCFullYear(),
  newDate.getUTCMonth(),
  newDate.getUTCDate(),
);

describe('Date state', () => {
  let component;
  let props;

  const defaultState = {
    day: null,
    month: 0,
    year: null,
    monthBeforeDay: false,
    value: null,
    locale: LOCALES.en,
  };

  beforeEach(() => {
    props = { onChange: jest.fn() };
  });

  it('has the default state', () => {
    component = shallow(<DateInput {...props} />);
    expect(component.state()).toEqual(defaultState);
  });

  it('updates when a new value is provided', () => {
    props = { ...props, value: TEST_DATE };

    expect(DateInput.getDerivedStateFromProps(props, defaultState)).toEqual({
      ...defaultState,
      day: 17,
      month: 11,
      value: new Date(1995, 11, 17),
      year: 1995,
    });
  });

  it("doesn't update when a value equal to state is provided", () => {
    props = { ...props, value: TEST_DATE };
    expect(DateInput.getDerivedStateFromProps(props, { value: TEST_DATE_OBJECT })).toBeNull();
  });

  it('resets to default state if invalid date is provided ', () => {
    props = { ...props, value: 'invalidDate' };
    expect(DateInput.getDerivedStateFromProps(props, defaultState)).toEqual(defaultState);
  });

  it('reset to default State when a value has changed from valid to invalid', () => {
    props = { ...props, value: 'invalidDate' };
    expect(
      DateInput.getDerivedStateFromProps(props, { ...defaultState, value: TEST_DATE_OBJECT }),
    ).toEqual(defaultState);
  });

  it('updates locale ', () => {
    props = { ...props, locale: LOCALES.us };
    expect(DateInput.getDerivedStateFromProps(props, defaultState)).toEqual({
      ...defaultState,
      locale: LOCALES.us,
      monthBeforeDay: true,
      year: null,
    });
  });

  it('updates monthBeforeDay when locale is US', () => {
    props = { ...props, locale: LOCALES.us };
    expect(DateInput.getDerivedStateFromProps(props, defaultState)).toEqual({
      ...defaultState,
      locale: LOCALES.us,
      monthBeforeDay: true,
      year: null,
    });
  });

  it('calls onChange when values change to valid and fields are populated', () => {
    const newDate = '1994-12-17';
    props = { ...props, value: newDate };
    DateInput.getDerivedStateFromProps(props, { ...defaultState, day: 1, month: 2, year: 1990 });
    expect(props.onChange).toHaveBeenCalledWith('1994-12-17');
  });
});
