import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';

import DateLookup from '.';

describe('DateLookup (events)', () => {
  const date = new Date(2018, 11, 27);
  const min = new Date(2018, 11, 26);
  const max = new Date(2018, 11, 28);

  let props;
  let container;

  const openDateLookup = () => {
    const button = container.querySelector('button.dropdown-toggle');
    user.click(button);
  };

  const clickDateButton = () => {
    const button = container.querySelector('button.tw-date-lookup-header-current');
    user.click(button);
  };

  // Close dateLookup and removes events attached to documents.
  const closeDateLookup = () => {
    user.click(container);
  };

  const getActiveYearButton = () => container.querySelector('a.tw-date-lookup-year-option.active');

  const getActiveMonthButton = () =>
    container.querySelector('a.tw-date-lookup-month-option.active');

  const getActiveDayButton = () => container.querySelector('a.tw-date-lookup-day-option.active');

  beforeEach(() => {
    props = {
      value: date,
      min,
      max,
      size: 'lg',
      locale: 'xx',
      placeholder: 'Asd..',
      label: 'label',
      onChange: jest.fn(),
      onClick: jest.fn(),
      disabled: false,
    };
    ({ container } = render(<DateLookup {...props} />));
  });

  afterEach(() => {
    closeDateLookup(container);
  });

  it('sets focus to header label', () => {
    openDateLookup();

    expect(container.querySelector('.tw-date-lookup-header-current')).toHaveFocus();
  });

  it('switches to years', () => {
    openDateLookup();
    clickDateButton();

    expect(getActiveYearButton()).toHaveFocus();
  });

  it('switches to months', () => {
    openDateLookup();
    clickDateButton();
    user.click(getActiveYearButton());

    expect(getActiveMonthButton()).toHaveFocus();
  });

  it('switches to days', () => {
    openDateLookup();
    clickDateButton();
    user.click(getActiveYearButton());
    user.click(getActiveMonthButton());

    expect(getActiveDayButton()).toHaveFocus();
  });

  it('updates selected date and closes', () => {
    openDateLookup();
    const d = new Date(2018, 11, 28);
    const newDay = screen.getByText(`${d.getDate()}`);
    user.click(newDay);

    expect(props.onChange).toHaveBeenCalledWith(d);
    expect(container.querySelector('button.dropdown-toggle')).toHaveFocus();
  });
});
