import React from 'react';
import { shallow } from 'enzyme';
import * as formatting from '@transferwise/formatting';

import MonthCalendarTable from '.';
import TableLink from '../../tableLink';

jest.mock('@transferwise/formatting', () => ({
  formatDate: jest.fn().mockReturnValue('MonthName'),
}));

describe('MonthCalendarTable', () => {
  const locale = 'xx';
  let component;
  let props;

  beforeEach(() => {
    props = {
      viewYear: 2018,
      locale,
      placeholder: 'Enter date..',
      onSelect: jest.fn(),
    };
    component = shallow(<MonthCalendarTable {...props} />);
  });

  it('generates 3x4 table', () => {
    expect(component.find('tbody tr')).toHaveLength(3);
    expect(component.find('tbody td')).toHaveLength(12);
    expect(component.find(TableLink)).toHaveLength(12);
  });

  it('starts with month 0 and end with 11', () => {
    expect(getTableLinkAt(0).prop('item')).toBe(0);
    expect(getTableLinkAt(11).prop('item')).toBe(11);
  });

  it('passes month value and type to TableLink', () => {
    expect(getTableLinkAt(0).prop('item')).toBe(0);
    expect(getTableLinkAt(0).prop('type')).toBe('month');
  });

  it('shows formatted months', () => {
    expect(getTableLinkAt(0).prop('title')).toBe('MonthName');
    expect(formatting.formatDate).toHaveBeenCalledWith(new Date(2018, 0), locale, {
      month: 'short',
    });
  });

  it('show selectedDate as active', () => {
    component.setProps({ selectedDate: new Date(2018, 11, 27) });
    expect(getTableLinkAt(10).prop('active')).toBe(false);
    expect(getTableLinkAt(11).prop('active')).toBe(true);
  });

  it('disables dates outside of min and max range', () => {
    component.setProps({
      selectedDate: new Date(2018, 6, 1),
      min: new Date(2018, 6, 1),
      max: new Date(2018, 7, 31),
    });
    expect(getTableLinkAt(5).prop('disabled')).toBe(true);
    expect(getTableLinkAt(6).prop('disabled')).toBe(false);
    expect(getTableLinkAt(7).prop('disabled')).toBe(false);
    expect(getTableLinkAt(8).prop('disabled')).toBe(true);
  });

  it('highlights today', () => {
    const today = new Date();
    component.setProps({
      selectedDate: today,
      viewYear: today.getFullYear(),
    });
    expect(
      component
        .find(TableLink)
        .find({ today: true })
        .prop('item'),
    ).toBe(today.getMonth());
  });

  it('passes onSelect to TableLink', () => {
    expect(getTableLinkAt(0).prop('onClick')).toBe(props.onSelect);
  });

  it('shows placeholder for screen-readers', () => {
    expect(component.find('.sr-only').text()).toBe('Enter date..');
  });

  const getTableLinkAt = i => component.find(TableLink).at(i);
});
