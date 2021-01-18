import React from 'react';
import { useIntl } from 'react-intl';
import { shallow } from 'enzyme';
import * as formatting from '@transferwise/formatting';

import DayCalendar from '.';
import Header from '../header';
import DayCalendarTable from './table';

jest.mock('react-intl');
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
      monthFormat: 'long',
      onSelect: jest.fn(),
      onLabelClick: jest.fn(),
      onViewDateUpdate: jest.fn(),
    };
    useIntl.mockReturnValue({ locale: 'en' });
    component = shallow(<DayCalendar {...props} />);
  });

  it('shows the header', () => {
    expect(header()).toHaveLength(1);
  });

  it('shows formatted date as header label in long format', () => {
    expect(header().prop('label')).toBe('MonthName XXXX');
    expect(formatting.formatDate).toHaveBeenCalledWith(new Date(2018, 10), 'en', {
      month: 'long',
      year: 'numeric',
    });
  });

  it('shows formatted date as header label in short format', () => {
    component.setProps({ monthFormat: 'short' });
    expect(header().prop('label')).toBe('MonthName XXXX');
    expect(formatting.formatDate).toHaveBeenCalledWith(new Date(2018, 10), 'en', {
      month: 'short',
      year: 'numeric',
    });
  });

  it('passes onLabelClick to header component', () => {
    expect(header().prop('onLabelClick')).toBe(props.onLabelClick);
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
  });

  it('passes onSelect to table component', () => {
    expect(table().prop('onSelect')).toBe(props.onSelect);
  });

  const header = () => component.find(Header);
  const table = () => component.find(DayCalendarTable);
});
