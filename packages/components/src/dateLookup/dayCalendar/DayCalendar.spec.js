import React from 'react';
import { shallow } from 'enzyme';
import * as formatting from '@transferwise/formatting';

import DayCalendar from '.';
import Header from '../header';
import DayCalendarTable from './table';

jest.mock('@transferwise/formatting', () => ({
  formatDate: jest.fn().mockReturnValue('MonthName XXXX'),
}));

describe('DayCalendar', () => {
  const selectedDate = new Date(2018, 10, 27);
  const min = new Date(1990, 10, 27);
  const max = new Date(2020, 10, 27);
  let component;
  let props;

  beforeEach(() => {
    props = {
      selectedDate,
      min,
      max,
      viewMonth: 10,
      viewYear: 2018,
      locale: 'xx',
      shortDate: false,
      onSelect: jest.fn(),
      onLabelClick: jest.fn(),
      onViewDateUpdate: jest.fn(),
    };
    component = shallow(<DayCalendar {...props} />);
  });

  it('shows the header', () => {
    expect(header()).toHaveLength(1);
  });

  it('shows formatted date as header label in long format', () => {
    expect(header().prop('label')).toBe('MonthName XXXX');
    expect(formatting.formatDate).toHaveBeenCalledWith(new Date(2018, 10), 'xx', {
      month: 'long',
      year: 'numeric',
    });
  });

  it('shows formatted date as header label in short format', () => {
    component.setProps({ shortDate: true });
    expect(header().prop('label')).toBe('MonthName XXXX');
    expect(formatting.formatDate).toHaveBeenCalledWith(new Date(2018, 10), 'xx', {
      month: 'short',
      year: 'numeric',
    });
  });

  it('passes onLabelClick to header component', () => {
    expect(header().prop('onLabelClick')).toBe(props.onLabelClick);
  });

  it('passes selectPreviousMonth to header component', () => {
    expect(header().prop('onPreviousClick')).toBe(component.instance().selectPreviousMonth);
  });

  it('passes selectNextMonth header component', () => {
    expect(header().prop('onNextClick')).toBe(component.instance().selectNextMonth);
  });

  it('calls onViewDateUpdate on previous month select', () => {
    component.instance().selectPreviousMonth();
    expect(props.onViewDateUpdate).toBeCalledWith({ year: 2018, month: 9 });
  });

  it('calls onViewDateUpdate on previous month select (year before)', () => {
    component.setProps({ viewMonth: 0 });
    component.instance().selectPreviousMonth();
    expect(props.onViewDateUpdate).toBeCalledWith({ year: 2017, month: 11 });
  });

  it('calls onViewDateUpdate on next year select', () => {
    component.instance().selectNextMonth();
    expect(props.onViewDateUpdate).toBeCalledWith({ year: 2018, month: 11 });
  });

  it('calls onViewDateUpdate on next year select (year after)', () => {
    component.setProps({ viewMonth: 11 });
    component.instance().selectNextMonth();
    expect(props.onViewDateUpdate).toBeCalledWith({ year: 2019, month: 0 });
  });

  it('shows month calendar table', () => {
    expect(table()).toHaveLength(1);
  });

  it('passes props forward to table component', () => {
    expect(table().prop('selectedDate')).toBe(selectedDate);
    expect(table().prop('min')).toBe(min);
    expect(table().prop('max')).toBe(max);
    expect(table().prop('viewMonth')).toBe(10);
    expect(table().prop('viewYear')).toBe(2018);
    expect(table().prop('locale')).toBe('xx');
  });

  it('passes onSelect to table component', () => {
    expect(table().prop('onSelect')).toBe(props.onSelect);
  });

  const header = () => component.find(Header);
  const table = () => component.find(DayCalendarTable);
});
