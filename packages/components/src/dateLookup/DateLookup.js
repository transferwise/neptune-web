import React, { createRef, useState, useEffect } from 'react';
import Types from 'prop-types';
import classnames from 'classnames';

import KeyCodes from '../common/keyCodes';
import { Size, MonthFormat, Breakpoint } from '../common';
import { usePrevious } from '../common/hooks';
import { isWithinRange, moveToWithinRange } from '../common/dateUtils';
import { getStartOfDay } from './getStartOfDay';

import OpenButton from './openButton';
import DayCalendar from './dayCalendar';
import MonthCalendar from './monthCalendar';
import YearCalendar from './yearCalendar';

import SlidingPanel from '../slidingPanel';
import Dimmer from '../dimmer';

import './DateLookup.css';

const MODE = {
  DAY: 'day',
  MONTH: 'month',
  YEAR: 'year',
};

DateLookup.Size = Size;

DateLookup.MonthFormat = MonthFormat;
function DateLookup(props) {
  const [selectedDate, setSelectedDate] = useState(getStartOfDay(props.value));
  const [min, setMin] = useState(getStartOfDay(props.min));
  const [max, setMax] = useState(getStartOfDay(props.max));
  const [viewMonth, setViewMonth] = useState((props.value || new Date()).getMonth());
  const [viewYear, setViewYear] = useState((props.value || new Date()).getFullYear());
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState(MODE.DAY);
  const [isMobile, setIsMobile] = useState(false);

  const elementRef = createRef();
  const dropdownRef = createRef();

  function getWindowSize() {
    return (
      (typeof window !== 'undefined' && window.innerWidth) ||
      (typeof document !== 'undefined' && document.documentElement.clientWidth)
    );
  }

  const propsSelected = getStartOfDay(props.value);
  const propsMin = getStartOfDay(props.min);
  const propsMax = getStartOfDay(props.max);
  const hasSelectedChanged = +selectedDate !== +propsSelected;
  const hasMinChanged = +min !== +propsMin;
  const hasMaxChanged = +max !== +propsMax;
  if (hasSelectedChanged || hasMinChanged || hasMaxChanged) {
    const newSelectedDate = hasSelectedChanged ? propsSelected : selectedDate;
    const newMin = hasMinChanged ? propsMin : min;
    const newMax = hasMaxChanged ? propsMax : max;
    // make sure that selected date is within allowed range
    if (!isWithinRange(newSelectedDate, newMin, newMax)) {
      props.onChange(moveToWithinRange(newSelectedDate, newMin, newMax));
      return null;
    }
    setSelectedDate(newSelectedDate);
    setMin(newMin);
    setMax(newMax);
    setViewMonth((newSelectedDate || new Date()).getMonth());
    setViewYear((newSelectedDate || new Date()).getFullYear());
  }

  const previousPropsValue = usePrevious(props.value);
  useEffect(() => {
    if (+props.value !== +previousPropsValue && isOpen) {
      focusOn('.active');
    }
  });

  useEffect(() => {
    adjustIfOffscreen();
    focusOn('.tw-date-lookup-header-current');
  }, [isOpen, mode, isMobile]);

  function open() {
    const { onFocus } = props;

    setIsOpen(true);
    setMode(MODE.DAY);
    setIsMobile(getWindowSize() <= Breakpoint.SMALL);

    if (onFocus) {
      onFocus();
    }
    window.addEventListener('resize', resizeHandler);
    document.addEventListener('click', handleOutsideClick, true);
  }

  function resizeHandler() {
    setIsMobile(getWindowSize() <= Breakpoint.SMALL);
  }

  useEffect(() => {
    adjustIfOffscreen();
  }, [isMobile]);

  function adjustIfOffscreen() {
    if (!isMobile && isOpen && dropdownRef && dropdownRef.current) {
      const dropdown = dropdownRef.current;
      const bounding = dropdown.getBoundingClientRect();

      const rightSideOffscreen = bounding.right > getWindowSize();
      const leftSideOffscreen = bounding.left < 0;

      if (rightSideOffscreen) {
        // It is very unlikely that both sides are offscreen because we are rendering as full width on mobile
        dropdown.classList[leftSideOffscreen ? 'remove' : 'add']('dropdown-menu-xs-right');
      }
    }
  }

  function close() {
    setIsOpen(false);
    const { onBlur } = props;
    if (onBlur) {
      onBlur();
    }
    window.removeEventListener('resize', adjustIfOffscreen);
    document.removeEventListener('click', handleOutsideClick, true);
  }

  function handleOutsideClick(event) {
    if (!isOpen || isMobile) {
      return;
    }

    const dropdown = elementRef.current.querySelector('.dropdown-menu');
    if (dropdown && !dropdown.contains(event.target)) {
      close();
    }
  }

  function handleKeyDown(event) {
    switch (event.keyCode) {
      case KeyCodes.LEFT:
        if (isOpen) {
          adjustDate(-1, -1, -1);
        } else {
          open();
        }
        event.preventDefault();
        break;
      case KeyCodes.UP:
        if (isOpen) {
          adjustDate(-7, -4, -4);
        } else {
          open();
        }
        event.preventDefault();
        break;
      case KeyCodes.RIGHT:
        if (isOpen) {
          adjustDate(1, 1, 1);
        } else {
          open();
        }
        event.preventDefault();
        break;
      case KeyCodes.DOWN:
        if (isOpen) {
          adjustDate(7, 4, 4);
        } else {
          open();
        }
        event.preventDefault();
        break;
      case KeyCodes.ESCAPE:
        close();
        event.preventDefault();
        break;
      default:
        break;
    }
  }

  function adjustDate(daysToAdd, monthsToAdd, yearsToAdd) {
    let date;
    if (selectedDate) {
      date = new Date(
        mode === MODE.YEAR ? selectedDate.getFullYear() + yearsToAdd : selectedDate.getFullYear(),
        mode === MODE.MONTH ? selectedDate.getMonth() + monthsToAdd : selectedDate.getMonth(),
        mode === MODE.DAY ? selectedDate.getDate() + daysToAdd : selectedDate.getDate(),
      );
    } else {
      date = getStartOfDay(new Date());
    }
    date = moveToWithinRange(date, min, max);
    if (+date !== +selectedDate) {
      props.onChange(date);
    }
  }

  function focusOn(preferredElement, fallbackElement) {
    const el = elementRef.current.querySelector(preferredElement);
    if (el) {
      el.focus();
    } else if (fallbackElement) {
      focusOn(fallbackElement);
    }
  }

  function switchMode(newMode) {
    setMode(newMode);
  }

  useEffect(() => {
    focusOn('.active', '.today');
  }, [mode]);

  function switchToDays() {
    switchMode(MODE.DAY);
  }

  function switchToMonths() {
    switchMode(MODE.MONTH);
  }

  function switchToYears() {
    switchMode(MODE.YEAR);
  }

  useEffect(() => {
    props.onChange(selectedDate);
    close();
    focusOn('.btn');
  }, [selectedDate]);

  function handleViewDateUpdate({ month = viewMonth, year = viewYear }) {
    setViewMonth(month);
    setViewYear(year);
  }

  function getCalendar() {
    const { placeholder, monthFormat } = props;
    return (
      <>
        {mode === MODE.DAY && (
          <DayCalendar
            {...{ selectedDate, min, max, viewMonth, viewYear, monthFormat }}
            onSelect={(date) => setSelectedDate(date)}
            onLabelClick={switchToYears}
            onViewDateUpdate={handleViewDateUpdate}
          />
        )}
        {mode === MODE.MONTH && (
          <MonthCalendar
            {...{ selectedDate, min, max, viewYear, placeholder }}
            onSelect={switchToDays}
            onLabelClick={switchToYears}
            onViewDateUpdate={handleViewDateUpdate}
          />
        )}
        {mode === MODE.YEAR && (
          <YearCalendar
            {...{ selectedDate, min, max, viewYear, placeholder }}
            onSelect={switchToMonths}
            onViewDateUpdate={handleViewDateUpdate}
          />
        )}
      </>
    );
  }

  const { size, placeholder, label, monthFormat, disabled } = props;
  return (
    <div // eslint-disable-line jsx-a11y/no-static-element-interactions
      ref={elementRef}
      className={classnames('btn-group', 'btn-block', 'dropdown', { open: isOpen })}
      onKeyDown={handleKeyDown}
    >
      <OpenButton
        {...{ selectedDate, size, placeholder, label, monthFormat, disabled }}
        onClick={open}
      />
      {isMobile ? (
        <Dimmer open={isOpen} onClose={close}>
          <SlidingPanel open={isOpen} position="bottom">
            {getCalendar()}
          </SlidingPanel>
        </Dimmer>
      ) : (
        isOpen && (
          <div ref={dropdownRef} className="dropdown-menu tw-date-lookup-menu">
            {getCalendar()}
          </div>
        )
      )}
    </div>
  );
}

DateLookup.propTypes = {
  value: Types.instanceOf(Date),
  min: Types.instanceOf(Date),
  max: Types.instanceOf(Date),
  size: Types.oneOf([DateLookup.Size.SMALL, DateLookup.Size.MEDIUM, DateLookup.Size.LARGE]),
  placeholder: Types.string,
  label: Types.string,
  monthFormat: Types.oneOf([DateLookup.MonthFormat.LONG, DateLookup.MonthFormat.SHORT]),
  disabled: Types.bool,
  onChange: Types.func.isRequired,
  onFocus: Types.func,
  onBlur: Types.func,
};

DateLookup.defaultProps = {
  value: null,
  min: null,
  max: null,
  size: DateLookup.Size.MEDIUM,
  placeholder: '',
  label: '',
  monthFormat: DateLookup.MonthFormat.LONG,
  disabled: false,
  onFocus: null,
  onBlur: null,
};

export default DateLookup;
