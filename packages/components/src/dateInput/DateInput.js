import React, { useState, useEffect } from 'react';
import Types from 'prop-types';

import Select from '../select';

import { Size, DateMode, MonthFormat } from '../common';

import { explodeDate, convertToLocalMidnight } from './utils';
import { getMonthNames, isDateValid, isMonthAndYearFormat } from '../common/dateUtils';

const DEFAULT_LOCALE = 'en-GB';

const MonthBeforeDay = ['en-US', 'ja-JP'];
const INITIAL_DEFAULT_STATE = { year: null, month: null, day: null };

const DateInput = ({
  disabled,
  size,
  value,
  locale,
  dayLabel,
  monthLabel,
  yearLabel,
  monthFormat,
  mode,
  onChange,
  onFocus,
  onBlur,
  placeholders,
}) => {
  const getDateObject = () => {
    if (value && isDateValid(value)) {
      return typeof value === 'string' ? convertToLocalMidnight(value) : value;
    }
    return null;
  };

  const getExplodedDate = (unit) => {
    let explodedDate = INITIAL_DEFAULT_STATE;

    if (value && isDateValid(value)) {
      const dateObject = getDateObject();
      explodedDate = explodeDate(dateObject);

      if (isMonthAndYearFormat(value)) {
        explodedDate.day = null;
      }
    }
    return explodedDate[unit];
  };

  const [day, setDay] = useState(() => getExplodedDate('day'));
  const [month, setMonth] = useState(() => getExplodedDate('month'));
  const [year, setYear] = useState(() => getExplodedDate('year'));
  const [internalValue, setInternalValue] = useState(getDateObject);

  const getDateAsString = (date) => {
    switch (mode) {
      case DateMode.MONTH_YEAR:
        return [date.getFullYear(), `0${date.getMonth() + 1}`.slice(-2)].join('-');
      case DateMode.DAY_MONTH_YEAR:
      default:
        return [
          date.getFullYear(),
          `0${date.getMonth() + 1}`.slice(-2),
          `0${date.getDate()}`.slice(-2),
        ].join('-');
    }
  };

  const getSelectElement = () => {
    const months = getMonthNames(locale, monthFormat);

    return (
      <div>
        <label htmlFor="date-input-month" className="sr-only">
          {monthLabel}
        </label>
        <Select
          id="date-input-month"
          name="month"
          className="form-control"
          onChange={(selectedValue) => handleMonthChange(selectedValue)}
          disabled={disabled}
          placeholder={placeholders.month}
          options={getMonthsOptions()}
          size={size}
          onFocus={onFocus}
          onBlur={onBlur}
          selected={month === null ? null : { value: month, label: months[month] }}
        />
      </div>
    );
  };

  const getMonthsOptions = () => {
    const options = [];
    const months = getMonthNames(locale, monthFormat);

    months.forEach((label, index) => {
      options.push({ value: index, label });
    });
    return options;
  };

  const handleInternalValue = (newDay = day, newMonth = month, newYear = year) => {
    const dateValue = new Date(newYear, newMonth, newDay);
    const newValue = isDateValid(dateValue) ? dateValue : null;
    // Don't broadcast already broadcasted value.

    if (newValue !== internalValue) {
      if (!newValue) {
        setInternalValue(INITIAL_DEFAULT_STATE);
      }

      if (mode === DateMode.MONTH_YEAR) {
        if (newMonth >= 0 && newYear && (newMonth !== month || newYear !== year)) {
          setInternalValue(newValue);
        }
      } else if (
        newDay &&
        newMonth >= 0 &&
        newYear &&
        (newDay !== day || newMonth !== month || newYear !== year)
      ) {
        setInternalValue(newValue);
      }
    }
  };

  const handleDayChange = (event) => {
    const { checkedDay } = checkDate(event.target.value, month, year);
    setDay(checkedDay);
    handleInternalValue(checkedDay, month, year);
  };

  const handleMonthChange = (selectedValue) => {
    if (!selectedValue) {
      setMonth(null);
      return;
    }
    const selectedMonth = selectedValue ? selectedValue.value : 0;
    const { checkedDay } = checkDate(day, selectedMonth, year);
    setMonth(selectedMonth);
    if (day) {
      if (checkedDay !== day) {
        setDay(checkedDay);
      }
    }
    handleInternalValue(checkedDay, selectedMonth, year);
  };

  const handleYearChange = (event) => {
    const newValue = event.target.value;
    const slicedYear = newValue.length > 4 ? newValue.slice(0, 4) : newValue;

    if (slicedYear.toString().length === 4) {
      // Correct day based on year and month.
      const { checkedDay } = checkDate(day, month, newValue);

      if (day) {
        if (checkedDay !== day) {
          setDay(checkedDay);
        }
      }
      setYear(slicedYear);
      handleInternalValue(checkedDay, month, slicedYear);
    } else {
      setYear(slicedYear);
    }
  };

  useEffect(() => {
    const broadcastValue = internalValue ? getDateAsString(internalValue) : null;
    onChange(broadcastValue);
  }, [internalValue]);

  const checkDate = (newDay = null, newMonth = 0, newYear = null) => {
    let checkedDay = newDay;
    const maxDay = new Date(newYear || 2000, newMonth + 1, 0).getDate();

    if (!newDay) {
      checkedDay = null;
    }

    if ((newDay && newDay < 0) || newDay === '00') {
      checkedDay = 1;
    }

    if ((newDay && newMonth) || newDay > 31) {
      checkedDay = newDay > maxDay ? maxDay : newDay;
    }

    return { checkedDay, checkedMonth: newMonth, checkedYear: newYear };
  };

  const monthYearOnly = mode === DateMode.MONTH_YEAR;
  const monthWidth = monthYearOnly ? 'col-sm-8' : 'col-sm-5';
  const monthBeforeDay = MonthBeforeDay.indexOf(locale) > -1;

  return (
    <div className="tw-date">
      <div className="row">
        {monthBeforeDay && <div className={monthWidth}>{getSelectElement()}</div>}

        {!monthYearOnly && (
          <div className="col-sm-3">
            <div className={`input-group-${size}`}>
              <label className="sr-only" htmlFor="date-input-day">
                {dayLabel}
              </label>
              <input
                id="date-input-day"
                type="number"
                name="day"
                className="form-control"
                value={day || ''}
                onChange={(event) => handleDayChange(event)}
                onFocus={onFocus}
                onBlur={onBlur}
                placeholder={placeholders.day}
                disabled={disabled}
              />
            </div>
          </div>
        )}

        {!monthBeforeDay && <div className={monthWidth}>{getSelectElement()}</div>}

        <div className="col-sm-4">
          <div className={`input-group-${size}`}>
            <label className="sr-only" htmlFor="date-input-year">
              {yearLabel}
            </label>
            <input
              id="date-input-year"
              type="number"
              name="year"
              className="form-control"
              placeholder={placeholders.year}
              value={year || ''}
              onChange={(event) => handleYearChange(event)}
              onFocus={onFocus}
              onBlur={onBlur}
              disabled={disabled}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

DateInput.Size = Size;
DateInput.DateMode = DateMode;
DateInput.MonthFormat = MonthFormat;

DateInput.propTypes = {
  disabled: Types.bool,
  size: Types.oneOf([DateInput.Size.SMALL, DateInput.Size.MEDIUM, DateInput.Size.LARGE]),
  value: Types.oneOfType([Types.string, Types.instanceOf(Date)]),
  locale: Types.string,
  onChange: Types.func.isRequired, // eslint-disable-line
  onFocus: Types.func,
  onBlur: Types.func,
  dayLabel: Types.string,
  monthLabel: Types.string,
  yearLabel: Types.string,
  monthFormat: Types.oneOf([DateInput.MonthFormat.LONG, DateInput.MonthFormat.SHORT]),
  mode: Types.oneOf([DateInput.DateMode.DAY_MONTH_YEAR, DateInput.DateMode.MONTH_YEAR]),
  placeholders: Types.shape({
    day: Types.node,
    month: Types.node,
    year: Types.node,
  }),
};

DateInput.defaultProps = {
  disabled: false,
  size: DateInput.Size.MEDIUM,
  value: null,
  locale: DEFAULT_LOCALE,
  onFocus: null,
  onBlur: null,
  dayLabel: 'Day',
  monthLabel: 'Month',
  yearLabel: 'Year',
  monthFormat: DateInput.MonthFormat.LONG,
  mode: DateInput.DateMode.DAY_MONTH_YEAR,
  placeholders: {
    day: 'DD',
    month: 'Month',
    year: 'YYYY',
  },
};

export default DateInput;
