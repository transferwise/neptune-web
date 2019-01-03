import React from 'react';
import { shallow } from 'enzyme';
import * as formatting from '@transferwise/formatting';

import MonthCalendar from '.';
import Header from '../header';
import MonthCalendarTable from './table';

jest.mock('@transferwise/formatting', () => ({
  formatDate: jest.fn().mockReturnValue('XXXX'),
}));

describe('MonthCalendar', () => {
  const selectedDate = new Date(2018, 11, 27);
  const min = new Date(1990, 11, 27);
  const max = new Date(2020, 11, 27);
  let component;
  let props;

  beforeEach(() => {
    props = {
      selectedDate,
      min,
      max,
      viewYear: 2018,
      locale: 'xx',
      placeholder: 'Enter date..',
      onSelect: jest.fn(),
      onLabelClick: jest.fn(),
      onViewDateUpdate: jest.fn(),
    };
    component = shallow(<MonthCalendar {...props} />);
  });

  it('shows the header', () => {
    expect(header()).toHaveLength(1);
  });

  it('shows formatted date as header label', () => {
    expect(header().prop('label')).toBe('XXXX');
    expect(formatting.formatDate).toHaveBeenCalledWith(new Date(2018, 0), 'xx', {
      year: 'numeric',
    });
  });

  it('passes onLabelClick to header component', () => {
    expect(header().prop('onLabelClick')).toBe(props.onLabelClick);
  });

  it('passes selectPreviousYear to header component', () => {
    expect(header().prop('onPreviousClick')).toBe(component.instance().selectPreviousYear);
  });

  it('passes selectNextYear header component', () => {
    expect(header().prop('onNextClick')).toBe(component.instance().selectNextYear);
  });

  it('calls onViewDateUpdate on previous year select', () => {
    component.instance().selectPreviousYear();
    expect(props.onViewDateUpdate).toBeCalledWith({ year: 2017 });
  });

  it('calls onViewDateUpdate on next year select', () => {
    component.instance().selectNextYear();
    expect(props.onViewDateUpdate).toBeCalledWith({ year: 2019 });
  });

  it('shows month calendar table', () => {
    expect(table()).toHaveLength(1);
  });

  it('passes props forward to table component', () => {
    expect(table().prop('selectedDate')).toBe(selectedDate);
    expect(table().prop('min')).toBe(min);
    expect(table().prop('max')).toBe(max);
    expect(table().prop('viewYear')).toBe(2018);
    expect(table().prop('locale')).toBe('xx');
    expect(table().prop('placeholder')).toBe('Enter date..');
  });

  it('passes onMonthSelect to table component', () => {
    expect(table().prop('onSelect')).toBe(component.instance().onMonthSelect);
  });

  it('calls onViewDateUpdate and onSelect on month select', () => {
    component.instance().onMonthSelect(1);
    expect(props.onViewDateUpdate).toBeCalledWith({ month: 1 });
    expect(props.onSelect).toBeCalled();
  });

  const header = () => component.find(Header);
  const table = () => component.find(MonthCalendarTable);
});
