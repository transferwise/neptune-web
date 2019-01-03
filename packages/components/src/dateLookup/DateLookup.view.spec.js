import React from 'react';
import { shallow } from 'enzyme';

import DateLookup from '.';
import OpenButton from './openButton';
import DayCalendar from './dayCalendar';
import MonthCalendar from './monthCalendar';
import YearCalendar from './yearCalendar';

describe('DateLookup view', () => {
  const date = new Date(2018, 11, 27);
  const min = new Date(2018, 11, 26);
  const max = new Date(2018, 11, 28);
  let component;
  let props;

  beforeEach(() => {
    props = {
      value: date,
      min,
      max,
      size: 'lg',
      locale: 'xx',
      placeholder: 'Asd..',
      label: 'Date..',
      onChange: jest.fn(),
    };
    component = shallow(<DateLookup {...props} />);
  });

  it('shows open button', () => {
    expect(openButton()).toHaveLength(1);
  });

  it('passes props forward to open button', () => {
    expect(+openButton().prop('selectedDate')).toBe(+date);
    expect(openButton().prop('size')).toBe('lg');
    expect(openButton().prop('locale')).toBe('xx');
    expect(openButton().prop('placeholder')).toBe('Asd..');
    expect(openButton().prop('label')).toBe('Date..');
    expect(openButton().prop('shortDate')).toBe(false);
    expect(openButton().prop('disabled')).toBe(false);
    expect(openButton().prop('onClick')).toBe(component.instance().open);
  });

  it('does not show calendar initially', () => {
    expect(component.find('.dropdown').hasClass('open')).toBe(false);
    expect(component.find('.dropdown-menu')).toHaveLength(0);
  });

  it('shows calendar when opened', () => {
    component.setState({ open: true });
    expect(component.find('.dropdown').hasClass('open')).toBe(true);
    expect(component.find('.dropdown-menu')).toHaveLength(1);
  });

  describe('when in day mode', () => {
    beforeEach(() => {
      component.setState({ open: true, mode: 'day' });
    });

    it('renders day calendar', () => {
      expect(dayCalendar()).toHaveLength(1);
    });

    it('passes props forward to day calendar', () => {
      expect(+dayCalendar().prop('selectedDate')).toBe(+date);
      expect(+dayCalendar().prop('min')).toBe(+min);
      expect(+dayCalendar().prop('max')).toBe(+max);
      expect(dayCalendar().prop('viewMonth')).toBe(11);
      expect(dayCalendar().prop('viewYear')).toBe(2018);
      expect(dayCalendar().prop('locale')).toBe('xx');
      expect(dayCalendar().prop('shortDate')).toBe(false);
    });

    it('passes event handlers forward to day calendar', () => {
      expect(dayCalendar().prop('onSelect')).toBe(component.instance().handleSelectedDateUpdate);
      expect(dayCalendar().prop('onLabelClick')).toBe(component.instance().switchToYears);
      expect(dayCalendar().prop('onViewDateUpdate')).toBe(
        component.instance().handleViewDateUpdate,
      );
    });
  });

  describe('when in month mode', () => {
    beforeEach(() => {
      component.setState({ open: true, mode: 'month' });
    });

    it('renders month calendar', () => {
      expect(monthCalendar()).toHaveLength(1);
    });

    it('passes props forward to month calendar', () => {
      expect(+monthCalendar().prop('selectedDate')).toBe(+date);
      expect(+monthCalendar().prop('min')).toBe(+min);
      expect(+monthCalendar().prop('max')).toBe(+max);
      expect(monthCalendar().prop('viewYear')).toBe(2018);
      expect(monthCalendar().prop('locale')).toBe('xx');
      expect(monthCalendar().prop('placeholder')).toBe('Asd..');
    });

    it('passes event handlers forward to month calendar', () => {
      expect(monthCalendar().prop('onSelect')).toBe(component.instance().switchToDays);
      expect(monthCalendar().prop('onLabelClick')).toBe(component.instance().switchToYears);
      expect(monthCalendar().prop('onViewDateUpdate')).toBe(
        component.instance().handleViewDateUpdate,
      );
    });
  });

  describe('when in year mode', () => {
    beforeEach(() => {
      component.setState({ open: true, mode: 'year' });
    });

    it('renders year calendar', () => {
      expect(yearCalendar()).toHaveLength(1);
    });

    it('passes props forward to year calendar', () => {
      expect(+yearCalendar().prop('selectedDate')).toBe(+date);
      expect(+yearCalendar().prop('min')).toBe(+min);
      expect(+yearCalendar().prop('max')).toBe(+max);
      expect(yearCalendar().prop('viewYear')).toBe(2018);
      expect(yearCalendar().prop('locale')).toBe('xx');
      expect(yearCalendar().prop('placeholder')).toBe('Asd..');
    });

    it('passes event handlers forward to year calendar', () => {
      expect(yearCalendar().prop('onSelect')).toBe(component.instance().switchToMonths);
      expect(yearCalendar().prop('onViewDateUpdate')).toBe(
        component.instance().handleViewDateUpdate,
      );
    });
  });

  const openButton = () => component.find(OpenButton);
  const dayCalendar = () => component.find(DayCalendar);
  const monthCalendar = () => component.find(MonthCalendar);
  const yearCalendar = () => component.find(YearCalendar);
});
