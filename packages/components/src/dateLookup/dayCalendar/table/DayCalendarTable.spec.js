import React from 'react';
import { shallow } from 'enzyme';
import * as formatting from '@transferwise/formatting';

import * as dateUtils from '../../../common/dateUtils';

import DayCalendarTable from '.';
import TableLink from '../../tableLink';

jest.mock('@transferwise/formatting', () => ({
  formatDate: jest.fn().mockReturnValue('XXXX'),
}));

jest.mock('../../../common/dateUtils', () => ({
  getDayNames: () => ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  getMidnight: date => new Date(date.getFullYear(), date.getMonth(), date.getDate()),
  isWithinRange: jest.fn().mockReturnValue(true),
}));

describe('DayCalendarTable', () => {
  const locale = 'xx';
  let component;
  let props;

  beforeEach(() => {
    props = {
      viewMonth: 11,
      viewYear: 2018,
      locale,
      onSelect: jest.fn(),
    };
    component = shallow(<DayCalendarTable {...props} />);
  });

  it('shows weekday names in table header', () => {
    const ths = component.find('thead th');
    expect(ths).toHaveLength(7);
    expect(ths.at(0).text()).toContain('Mon');
    expect(ths.at(6).text()).toContain('Sun');
  });

  it('shows all days of month (2018 December)', () => {
    expect(component.find('tbody tr')).toHaveLength(6);
    expect(component.find('tbody td')).toHaveLength(42);
    expect(component.find(TableLink)).toHaveLength(31);
  });

  it('shows empty items before first day of month (Sat, 1st December 2018)', () => {
    expect(getTableDataAt(0).children()).toHaveLength(0);
    expect(getTableDataAt(4).children()).toHaveLength(0);
    expect(getTableDataAt(5).children()).toHaveLength(1);
    expect(getTableDataAt(6).children()).toHaveLength(1);
  });

  it('display empty cells after the last day (Mon, 31st 2018 December)', () => {
    expect(getTableDataAt(35).children()).toHaveLength(1);
    expect(getTableDataAt(36).children()).toHaveLength(0);
    expect(getTableDataAt(37).children()).toHaveLength(0);
  });

  it('passes day value and type to TableLink', () => {
    expect(getTableLinkAt(0).prop('item')).toBe(1);
    expect(getTableLinkAt(0).prop('type')).toBe('day');
  });

  it('shows formatted days', () => {
    expect(getTableLinkAt(0).prop('title')).toBe('XXXX');
    expect(formatting.formatDate).toHaveBeenCalledWith(new Date(2018, 11, 1), locale, {
      day: 'numeric',
    });
  });

  it('shows full date as link title', () => {
    expect(getTableLinkAt(0).prop('longTitle')).toBe('XXXX');
    expect(formatting.formatDate).toHaveBeenCalledWith(new Date(2018, 11, 1), locale);
  });

  it('show selectedDate as active', () => {
    component.setProps({ selectedDate: new Date(2018, 11, 27) });
    expect(
      component
        .find(TableLink)
        .find({ active: true })
        .prop('item'),
    ).toBe(27);
  });

  it('sets property "disabled" for table links (calls isWithinRange)', () => {
    const selectedDate = new Date(2018, 11, 26);
    const min = new Date(2018, 11, 26);
    const max = new Date(2018, 11, 27);
    component.setProps({ selectedDate, min, max });
    expect(dateUtils.isWithinRange).toHaveBeenCalledWith(selectedDate, min, max);
    expect(getTableLinkAt(0).prop('disabled')).toBe(false);
  });

  it('highlights today', () => {
    const today = new Date();
    component.setProps({
      selectedDate: today,
      viewMonth: today.getMonth(),
      viewYear: today.getFullYear(),
    });
    expect(
      component
        .find(TableLink)
        .find({ today: true })
        .prop('item'),
    ).toBe(today.getDate());
  });

  it('passes selectDay to TableLink', () => {
    expect(getTableLinkAt(0).prop('onClick')).toBe(component.instance().selectDay);
  });

  it('calls onSelect when day gets selected', () => {
    component.instance().selectDay(1);
    expect(props.onSelect).toBeCalledWith(new Date(2018, 11, 1));
  });

  const getTableLinkAt = i => component.find(TableLink).at(i);
  const getTableDataAt = i => component.find('tbody td').at(i);
});
