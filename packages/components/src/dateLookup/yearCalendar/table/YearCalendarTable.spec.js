import React from 'react';
import { shallow } from 'enzyme';
import * as formatting from '@transferwise/formatting';

import YearCalendarTable from '.';
import TableLink from '../../tableLink';

jest.mock('@transferwise/formatting', () => ({
  formatDate: jest.fn().mockReturnValue('XXXX'),
}));

describe('YearCalendarTable', () => {
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
    component = shallow(<YearCalendarTable {...props} />);
  });

  it('generates 5x4 table', () => {
    expect(component.find('tbody tr')).toHaveLength(5);
    expect(component.find('tbody td')).toHaveLength(20);
    expect(component.find(TableLink)).toHaveLength(20);
  });

  it('starts with year 2000, 2020, 2040 etc', () => {
    expect(getTableLinkAt(0).prop('item')).toBe(2000);
    component.setProps({ viewYear: 2020 });
    expect(getTableLinkAt(0).prop('item')).toBe(2020);
    component.setProps({ viewYear: 2021 });
    expect(getTableLinkAt(0).prop('item')).toBe(2020);
    component.setProps({ viewYear: 2039 });
    expect(getTableLinkAt(0).prop('item')).toBe(2020);
    component.setProps({ viewYear: 2040 });
    expect(getTableLinkAt(0).prop('item')).toBe(2040);
  });

  it('passes year value and type to TableLink', () => {
    expect(getTableLinkAt(0).prop('item')).toBe(2000);
    expect(getTableLinkAt(0).prop('type')).toBe('year');
  });

  it('shows formatted years', () => {
    expect(getTableLinkAt(0).prop('title')).toBe('XXXX');
    expect(formatting.formatDate).toHaveBeenCalledWith(new Date(2018, 0), locale, {
      year: 'numeric',
    });
  });

  it('show selectedDate as active', () => {
    component.setProps({ selectedDate: new Date(2018, 11, 27) });
    expect(getTableLinkAt(17).prop('active')).toBe(false);
    expect(getTableLinkAt(18).prop('active')).toBe(true);
  });

  it('disables dates outside of min and max range', () => {
    component.setProps({
      selectedDate: new Date(2017, 11, 27),
      min: new Date(2016, 1),
      max: new Date(2018, 11),
    });
    expect(getTableLinkAt(15).prop('disabled')).toBe(true);
    expect(getTableLinkAt(16).prop('disabled')).toBe(false);
    expect(getTableLinkAt(17).prop('disabled')).toBe(false);
    expect(getTableLinkAt(18).prop('disabled')).toBe(false);
    expect(getTableLinkAt(19).prop('disabled')).toBe(true);
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
    ).toBe(today.getFullYear());
  });

  it('passes onSelect to TableLink', () => {
    expect(getTableLinkAt(0).prop('onClick')).toBe(props.onSelect);
  });

  it('shows placeholder for screen-readers', () => {
    expect(component.find('.sr-only').text()).toBe('Enter date..');
  });

  const getTableLinkAt = i => component.find(TableLink).at(i);
});
