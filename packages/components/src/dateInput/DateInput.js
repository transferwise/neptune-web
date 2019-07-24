import React, { PureComponent } from 'react';
import Types from 'prop-types';

import Select from '../select';

import { explodeDate, convertToLocalMidnight } from './utils';
import { getMonthNames, isDateValid } from '../common/dateUtils';

const DEFAULT_LOCALE = 'en-GB';
const DEFAULT_MONTH_FORMAT = 'long';

const MonthBeforeDay = ['en-US', 'ja-JP'];
const INITIAL_DEFAULT_STATE = { year: null, month: 0, day: null };

class DateInput extends PureComponent {
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
    monthFormat: Types.string,
  };

  static defaultProps = {
    disabled: false,
    size: 'md',
    value: null,
    locale: DEFAULT_LOCALE,
    onFocus: null,
    onBlur: null,
    dayLabel: 'Day',
    monthLabel: 'Month',
    yearLabel: 'Year',
    monthFormat: DEFAULT_MONTH_FORMAT,
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
    };
  }

  getDateAsString = date =>
    [date.getFullYear(), `0${date.getMonth() + 1}`.slice(-2), `0${date.getDate()}`.slice(-2)].join(
      '-',
    );

  getSelectElement = () => {
    const { disabled, size, locale, monthLabel, monthFormat } = this.props;
    const { month } = this.state;
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
    const { locale, monthFormat } = this.props;
    const months = getMonthNames(locale, monthFormat);

    months.forEach((month, index) => {
      options.push({ value: index, label: month });
    });
    return options;
  };

  returnValue = value => {
    let returnValue = null;
    if (+value !== +this.state.value) {
      if (isDateValid(value)) {
        returnValue = this.getDateAsString(value);
      }
      this.props.onChange(returnValue);
    }
  };

  handleDayChange = event => {
    const { month, year } = this.state;
    const day = event.target.value;
    const { checkedDay } = this.checkDate(day, month, year);

    let value = new Date(year, month, checkedDay);
    value = isDateValid(value) ? value : null;

    this.setState({ day: checkedDay }, () => {
      this.returnValue(value);
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
      this.returnValue(value);
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
        this.returnValue(date);
        // Prevents returning already returned values
        this.setState({ value: date });
      });
    } else {
      this.setState({ year: slicedYear }, () => {
        let date = new Date(slicedYear, month, day);
        date = isDateValid(date) ? date : null;
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
