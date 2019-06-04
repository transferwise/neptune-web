import React, { PureComponent } from 'react';
import Types from 'prop-types';

import Select from '../select';

import { explodeDate, convertToLocalMidnight } from './utils';
import { getMonthNames, isDateValid } from '../common/dateUtils';

const DEFAULT_LOCALE = 'en-GB';

const MonthBeforeDay = ['en-US', 'ja-JP'];
const INITIAL_DEFAULT_STATE = { year: null, month: 0, day: null };

class DateInput extends PureComponent {
  static returnValue = (_props, _state, value) => {
    let returnValue = null;
    if (+value !== +_state.value) {
      if (isDateValid(value)) {
        returnValue = DateInput.getDateAsString(value);
      }
      _props.onChange(returnValue);
    }
  };

  static propTypes = {
    disabled: Types.bool,
    size: Types.oneOf(['sm', 'md', 'lg']),
    value: Types.oneOfType([Types.string, Types.instanceOf(Date)]),
    locale: Types.string,
    onChange: Types.func.isRequired, // eslint-disable-line
    onFocus: Types.func,
    onBlur: Types.func,
    dayLabel: Types.string,
    monthLabel: Types.string,
    yearLabel: Types.string,
  };

  static defaultProps = {
    disabled: false,
    size: 'md',
    value: null,
    locale: DEFAULT_LOCALE,
    onFocus() {},
    onBlur() {},
    dayLabel: 'Day',
    monthLabel: 'Month',
    yearLabel: 'Year',
  };

  constructor(props) {
    super(props);
    const { value, locale } = props;
    let explodedDate = INITIAL_DEFAULT_STATE;
    let dateObject = value;

    if (isDateValid(value)) {
      if (typeof value === 'string') {
        dateObject = convertToLocalMidnight(value);
      }

      explodedDate = explodeDate(dateObject);
    }

    this.state = {
      ...explodedDate,
      value: dateObject,
      monthBeforeDay: MonthBeforeDay.indexOf(locale) > -1,
      locale,
    };
  }

  static getDateAsString = date =>
    [date.getFullYear(), `0${date.getMonth() + 1}`.slice(-2), `0${date.getDate()}`.slice(-2)].join(
      '-',
    );

  static getDerivedStateFromProps(nextProps, state) {
    if (nextProps.locale && nextProps.locale !== state.locale) {
      return {
        ...state,
        locale: nextProps.locale,
        monthBeforeDay: MonthBeforeDay.indexOf(nextProps.locale) > -1,
      };
    }

    if (nextProps.value) {
      if (isDateValid(nextProps.value)) {
        const dateObject =
          typeof nextProps.value === 'string'
            ? convertToLocalMidnight(nextProps.value)
            : nextProps.value;

        if (+dateObject !== +state.value) {
          const explodedDate = explodeDate(dateObject);
          DateInput.returnValue(nextProps, { ...state, ...explodedDate }, dateObject);
          return {
            ...state,
            ...explodedDate,
            value: dateObject,
          };
        }
      } else {
        DateInput.returnValue(nextProps, { ...state, ...INITIAL_DEFAULT_STATE }, null);
        return { ...state, ...INITIAL_DEFAULT_STATE, value: null };
      }
    }
    return null;
  }

  getSelectElement = () => {
    const { disabled, size, locale, monthLabel } = this.props;
    const { month } = this.state;
    const months = getMonthNames(locale);
    return (
      <div>
        <label htmlFor="date-input-month" className="sr-only">
          {monthLabel}
        </label>
        <Select
          id="date-input-month"
          name="month"
          className="form-control"
          selected={{ value: month, label: months[month] }}
          onChange={selectedValue => this.handleMonthChange(selectedValue)}
          disabled={disabled}
          options={this.getMonthsOptions()}
          size={size}
        />
      </div>
    );
  };

  getMonthsOptions = () => {
    const options = [];
    const { locale } = this.props;
    const months = getMonthNames(locale);

    months.forEach((month, index) => {
      options.push({ value: index, label: month });
    });
    return options;
  };

  handleDayChange = event => {
    const { month, year } = this.state;
    const day = event.target.value;
    const { checkedDay } = this.checkDate(day, month, year);

    let value = new Date(year, month, checkedDay);
    value = isDateValid(value) ? value : null;

    this.setState({ day: checkedDay }, () => {
      DateInput.returnValue(this.props, this.state, value);
      // Prevents returning already returned values
      this.setState({ value });
    });
  };

  handleMonthChange = selectedValue => {
    const { day, year } = this.state;
    const month = selectedValue ? selectedValue.value : 0;

    const { checkedDay } = this.checkDate(day, month, year);

    let value = new Date(year, month, checkedDay);
    value = isDateValid(value) ? value : null;

    this.setState({ month, day: checkedDay }, () => {
      DateInput.returnValue(this.props, this.state, value);
      // Prevents returning already returned values
      this.setState({ value });
    });
  };

  handleYearChange = event => {
    const { value } = event.target;
    const slicedYear = value.length > 4 ? value.slice(0, 4) : value;
    const { month, day } = this.state;

    if (slicedYear.length === 4) {
      // Correct day based on year and month.
      const { checkedDay, checkedYear } = this.checkDate(day, month, event.target.value);
      let date = new Date(slicedYear, month, day);

      date = isDateValid(date) ? date : null;

      this.setState({ day: checkedDay, year: checkedYear }, () => {
        DateInput.returnValue(this.props, this.state, date);
        // Prevents returning already returned values
        this.setState({ value: date });
      });
    } else {
      this.setState({ year: slicedYear }, () => {
        let date = new Date(slicedYear, month, day);
        date = isDateValid(date) ? date : null;

        DateInput.returnValue(this.props, this.state, date);
        // Prevents returning already returned values
        this.setState({ value: date });
      });
    }
  };

  checkDate = (day = null, month = 0, year = null) => {
    let checkedDay = day;

    if (day && month) {
      const maxDay = new Date(year || 2000, month + 1, 0).getDate();
      checkedDay = day > maxDay ? maxDay : day;
    }
    if (day < 0) {
      checkedDay = 1;
    }
    if (day > 31) {
      checkedDay = 31;
    }

    return { checkedDay, checkedMonth: month, checkedYear: year };
  };

  render() {
    const { disabled, size, dayLabel, yearLabel } = this.props;
    const { day, year, monthBeforeDay } = this.state;

    return (
      <div className="tw-date">
        <div className="row">
          {monthBeforeDay && <div className="col-sm-5">{this.getSelectElement()}</div>}

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
                onChange={event => this.handleDayChange(event)}
                onFocus={this.props.onFocus}
                onBlur={this.props.onBlur}
                placeholder="DD"
                disabled={disabled}
              />
            </div>
          </div>

          {!monthBeforeDay && <div className="col-sm-5">{this.getSelectElement()}</div>}

          <div className="col-sm-4">
            <div className={`input-group-${size}`}>
              <label className="sr-only" htmlFor="date-input-year">
                {yearLabel}
              </label>
              <input
                id="date-input-year"
                type="text"
                name="year"
                className="form-control"
                placeholder="YYYY"
                value={year || ''}
                onChange={event => this.handleYearChange(event)}
                onFocus={this.props.onFocus}
                onBlur={this.props.onBlur}
                disabled={disabled}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DateInput;
