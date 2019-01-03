import React, { PureComponent } from 'react';
import Types from 'prop-types';
import { formatDate } from '@transferwise/formatting';

import { getDayNames, getMidnight, isWithinRange } from '../../../common/dateUtils';

import TableLink from '../../tableLink';

const SHORT_DAY_FORMAT = { day: 'numeric' };

class DayCalendarTable extends PureComponent {
  static propTypes = {
    selectedDate: Types.instanceOf(Date),
    min: Types.instanceOf(Date),
    max: Types.instanceOf(Date),
    viewMonth: Types.number.isRequired,
    viewYear: Types.number.isRequired,
    locale: Types.string.isRequired,
    onSelect: Types.func.isRequired,
  };

  static defaultProps = {
    selectedDate: null,
    min: null,
    max: null,
  };

  getTableStructure = () => {
    const { viewMonth, viewYear } = this.props;
    let firstDayOfMonth = new Date(viewYear, viewMonth, 1).getDay();
    // JS Sunday is 0, we're setting it last
    if (firstDayOfMonth === 0) {
      firstDayOfMonth = 7;
    }
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

    let week = [];
    const weeks = [];
    let i;

    // Pad first week
    for (i = 1; i < firstDayOfMonth; i += 1) {
      week.push(false);
    }
    // Fill in days
    for (i = 1; i <= daysInMonth; i += 1) {
      week.push(i);
      if ((firstDayOfMonth + i - 1) % 7 === 0) {
        weeks.push(week);
        week = [];
      }
    }
    if (week.length) {
      // Pad last week
      for (i = week.length; i < 7; i += 1) {
        week.push(false);
      }
      weeks.push(week);
    }
    return weeks;
  };

  days = getDayNames(this.props.locale, 'short');

  daysShort = getDayNames(this.props.locale, 'narrow');

  selectDay = day => {
    const { viewMonth, viewYear, onSelect } = this.props;
    onSelect(new Date(viewYear, viewMonth, day));
  };

  isDisabled = day => {
    const { min, max, viewMonth, viewYear } = this.props;
    const date = new Date(viewYear, viewMonth, day);
    return !isWithinRange(date, min, max);
  };

  isActive = day => {
    const { selectedDate, viewMonth, viewYear } = this.props;
    return !!(selectedDate && +new Date(viewYear, viewMonth, day) === +selectedDate);
  };

  render() {
    const { viewMonth, viewYear, locale } = this.props;
    const weeks = this.getTableStructure();
    return (
      <table className="table table-condensed table-bordered table-calendar m-b-0">
        <thead>
          <tr>
            {this.days.map((day, index) => (
              <th key={day}>
                <span className="hidden-xs">{day.substring(0, 3)}</span>
                <span className="visible-xs-inline-block">
                  {this.daysShort[index].substring(0, 2)}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* eslint-disable react/no-array-index-key */}
          {weeks.map((week, weekIndex) => (
            <tr key={weekIndex}>
              {week.map((day, dayIndex) => (
                <td key={dayIndex} className={dayIndex > 4 ? 'default' : ''}>
                  {day && (
                    <TableLink
                      item={day}
                      type="day"
                      title={formatDate(
                        new Date(viewYear, viewMonth, day),
                        locale,
                        SHORT_DAY_FORMAT,
                      )}
                      longTitle={formatDate(new Date(viewYear, viewMonth, day), locale)}
                      active={this.isActive(day)}
                      disabled={this.isDisabled(day)}
                      today={+getMidnight(new Date()) === +new Date(viewYear, viewMonth, day)}
                      onClick={this.selectDay}
                    />
                  )}
                </td>
              ))}
            </tr>
          ))}
          {/* eslint-enable react/no-array-index-key */}
        </tbody>
      </table>
    );
  }
}

export default DayCalendarTable;
