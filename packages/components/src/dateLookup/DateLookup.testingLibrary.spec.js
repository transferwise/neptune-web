import React from 'react';
import '@testing-library/jest-dom';
import user from '@testing-library/user-event';

import { render, screen, fireEvent } from '../test-utils';

import DateLookup from '.';
import { Breakpoint } from '../common';

jest.mock('../dimmer', () => {
  // eslint-disable-next-line
  return ({ children }) => <div className="dimmer">{children}</div>;
});

describe('DateLookup (events)', () => {
  const date = new Date(2018, 11, 27);
  const min = new Date(2018, 11, 26);
  const max = new Date(2018, 11, 28);

  let props;
  let container;

  const winWidth = (width) => {
    window.innerWidth = width;
  };

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

  const getActiveYearButton = () =>
    container.querySelector('button.tw-date-lookup-year-option.active');

  const getActiveMonthButton = () =>
    container.querySelector('button.tw-date-lookup-month-option.active');

  const getActiveDayButton = () =>
    container.querySelector('button.tw-date-lookup-day-option.active');

  beforeEach(() => {
    props = {
      value: date,
      min,
      max,
      size: 'lg',
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

  describe('adjust if offscreen', () => {
    const calPosition = (left) => {
      Element.prototype.getBoundingClientRect = jest.fn(() => {
        return {
          width: 200,
          height: 100,
          top: 0,
          left,
          bottom: 0,
          right: left + 200,
        };
      });
    };

    it('will not adjust if the calendar is not offscreen', () => {
      winWidth(600);
      calPosition(0);
      openDateLookup();

      expect(container.querySelector('.tw-date-lookup-menu')).not.toHaveClass(
        'dropdown-menu-xs-right',
      );
    });

    it('will adjust if the calendar is offscreen to the right', () => {
      winWidth(600);
      calPosition(500);
      openDateLookup();

      expect(container.querySelector('.tw-date-lookup-menu')).toHaveClass('dropdown-menu-xs-right');
    });

    it('will add the class on resize if necessary', () => {
      winWidth(700);
      calPosition(500);
      openDateLookup();

      expect(container.querySelector('.tw-date-lookup-menu')).not.toHaveClass(
        'dropdown-menu-xs-right',
      );

      winWidth(600);
      fireEvent(window, new Event('resize'));

      expect(container.querySelector('.tw-date-lookup-menu')).toHaveClass('dropdown-menu-xs-right');
    });
  });

  describe('at extra small breakpoints', () => {
    it('it opens dateLookup using slider', () => {
      winWidth(Breakpoint.SMALL);
      openDateLookup();
      expect(container.querySelector('.dimmer')).toBeInTheDocument();
    });

    it('it opens dateLookup using slider', () => {
      winWidth(Breakpoint.SMALL + 1);
      openDateLookup();
      expect(container.querySelector('.dimmer')).not.toBeInTheDocument();
      winWidth(Breakpoint.SMALL);
      fireEvent(window, new Event('resize'));
      expect(container.querySelector('.dimmer')).toBeInTheDocument();
    });
  });
});
