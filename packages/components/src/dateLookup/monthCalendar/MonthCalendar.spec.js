import React from 'react';
import { useIntl } from 'react-intl';
import { shallow } from 'enzyme';
import * as formatting from '@transferwise/formatting';

import MonthCalendar from '.';
import Header from '../header';
import MonthCalendarTable from './table';

jest.mock('react-intl');
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
      placeholder: 'Enter date..',
      onSelect: jest.fn(),
      onLabelClick: jest.fn(),
      onViewDateUpdate: jest.fn(),
    };
    useIntl.mockReturnValue({ locale: 'en' });
    component = shallow(<MonthCalendar {...props} />);
  });

  it('shows the header', () => {
    expect(header()).toHaveLength(1);
  });

  it('shows formatted date as header label', () => {
    expect(header().prop('label')).toBe('XXXX');
    expect(formatting.formatDate).toHaveBeenCalledWith(new Date(2018, 0), 'en', {
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
    expect(table().prop('viewYear')).toBe(2018);
    expect(table().prop('placeholder')).toBe('Enter date..');
  });

  const header = () => component.find(Header);
  const table = () => component.find(MonthCalendarTable);
});
