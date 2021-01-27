import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import Types from 'prop-types';

import '../common/polyfills/closest';
import Select from '../select';

import { Size, DateMode, MonthFormat } from '../common';

import { explodeDate, convertToLocalMidnight } from './utils';
import { getMonthNames, isDateValid, isMonthAndYearFormat } from '../common/dateUtils';
import './DateInput.css';

const MonthBeforeDay = ['en-US', 'ja-JP'];
const INITIAL_DEFAULT_STATE = { year: null, month: null, day: null };

const DateInput = ({
  disabled,
  size,
  value,
  dayLabel,
  monthLabel,
  yearLabel,
  monthFormat,
  mode,
  onChange,
  onFocus,
  onBlur,
  placeholders,
  id,
}) => {
  const { locale } = useIntl();
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
  const [lastBroadcastedValue, setLastBroadcastedValue] = useState(getDateObject);

  const getDateAsString = (date) => {
    if (!isDateValid(date)) {
      return '';
    }
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
      // eslint-disable-next-line
      <label>
        <span className="sr-only">{monthLabel}</span>
        <Select
          name="month"
          className="form-control"
          onChange={(selectedValue) => handleMonthChange(selectedValue)}
          disabled={disabled}
          placeholder={placeholders.month}
          options={getMonthsOptions()}
          size={size}
          selected={month === null ? null : { value: month, label: months[month] }}
        />
      </label>
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
    const dateValue =
      newDay != null && newMonth != null && newYear != null
        ? new Date(newYear, newMonth, newDay)
        : null;

    const newValue = isDateValid(dateValue) ? dateValue : null;

    if (!newValue) {
      broadcastNewValue(INITIAL_DEFAULT_STATE);
    }

    if (mode === DateMode.MONTH_YEAR) {
      if (newMonth >= 0 && newYear && (newMonth !== month || newYear !== year)) {
        broadcastNewValue(newValue);
      }
    } else if (
      newDay &&
      newMonth >= 0 &&
      newYear &&
      (newDay !== day || newMonth !== month || newYear !== year)
    ) {
      broadcastNewValue(newValue);
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
      handleInternalValue(day, null, year);
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
      handleInternalValue(day, month, null);
    }
  };

  const broadcastNewValue = (newValue) => {
    if (newValue !== lastBroadcastedValue) {
      setLastBroadcastedValue(newValue);
      onChange(getDateAsString(newValue) || null);
    }
  };

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
    <div
      className="tw-date"
      id={id}
      onFocus={(e) => (shouldPropagateOnFocus(e) ? onFocus && onFocus() : e.stopPropagation())}
      onBlur={(e) => (shouldPropagateOnBlur(e) ? onBlur && onBlur() : e.stopPropagation())}
    >
      <div className="row">
        {monthBeforeDay && <div className={monthWidth}>{getSelectElement()}</div>}
        {!monthYearOnly && (
          <div className="col-sm-3">
            <div className={`input-group-${size}`}>
              <label>
                <span className="sr-only">{dayLabel}</span>
                <input
                  type="number"
                  name="day"
                  className="form-control"
                  value={day || ''}
                  onChange={(event) => handleDayChange(event)}
                  placeholder={placeholders.day}
                  disabled={disabled}
                />
              </label>
            </div>
          </div>
        )}

        {!monthBeforeDay && <div className={monthWidth}>{getSelectElement()}</div>}

        <div className="col-sm-4">
          <div className={`input-group-${size}`}>
            <label>
              <span className="sr-only">{yearLabel}</span>
              <input
                type="number"
                name="year"
                className="form-control"
                placeholder={placeholders.year}
                value={year || ''}
                onChange={(event) => handleYearChange(event)}
                disabled={disabled}
              />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

// Should only propagate if the relatedTarget is not part of this DateInput component.
function shouldPropagateOnFocus({ target, relatedTarget }) {
  const targetParent = target.closest('.tw-date');
  const relatedParent = relatedTarget && relatedTarget.closest('.tw-date');
  return targetParent !== relatedParent;
}

// Should only propagate if the relatedTarget or the activeElement is not part of this DateInput component.
function shouldPropagateOnBlur({ target, relatedTarget }) {
  const blurElementParent = target.closest('.tw-date');
  // Even though FocusEvent.relatedTarget is supported by IE
  // (https://developer.mozilla.org/en-US/docs/Web/API/FocusEvent/relatedTarget)
  // "IE11 sets document.activeElement to the next focused element before the blur event is called."
  // (https://stackoverflow.com/a/49325196/986241)
  // Therefore if the relatedTarget is null, we try the document.activeElement,
  // which may contain the HTML element that is gaining focus
  const focusElement =
    relatedTarget || (document.activeElement !== target ? document.activeElement : null);
  const focusElementParent = focusElement && focusElement.closest('.tw-date');
  return blurElementParent !== focusElementParent;
}

DateInput.Size = Size;
DateInput.DateMode = DateMode;
DateInput.MonthFormat = MonthFormat;

DateInput.propTypes = {
  disabled: Types.bool,
  size: Types.oneOf([DateInput.Size.SMALL, DateInput.Size.MEDIUM, DateInput.Size.LARGE]),
  value: Types.oneOfType([Types.string, Types.instanceOf(Date)]),
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
  id: Types.string,
};

DateInput.defaultProps = {
  disabled: false,
  size: DateInput.Size.MEDIUM,
  value: null,
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
  id: '',
};

export default DateInput;
