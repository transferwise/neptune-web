import React, { PureComponent } from 'react';
import Types from 'prop-types';
import { formatDate } from '@transferwise/formatting';

import { MonthFormat } from '../../common/dateUtils';
import Header from '../header';
import DayCalendarTable from './table';

class DayCalendar extends PureComponent {
  static propTypes = {
    selectedDate: Types.instanceOf(Date),
    min: Types.instanceOf(Date),
    max: Types.instanceOf(Date),
    viewMonth: Types.number.isRequired,
    viewYear: Types.number.isRequired,
    locale: Types.string.isRequired,
    monthFormat: Types.oneOf([MonthFormat.LONG, MonthFormat.SHORT]).isRequired,
    onSelect: Types.func.isRequired,
    onLabelClick: Types.func.isRequired,
    onViewDateUpdate: Types.func.isRequired,
  };

  static defaultProps = {
    selectedDate: null,
    min: null,
    max: null,
  };

  selectPreviousMonth = () => {
    const { viewMonth, viewYear } = this.props;
    this.props.onViewDateUpdate({
      month: viewMonth <= 0 ? 11 : viewMonth - 1,
      year: viewMonth <= 0 ? viewYear - 1 : viewYear,
    });
  };

  selectNextMonth = () => {
    const { viewMonth, viewYear } = this.props;
    this.props.onViewDateUpdate({
      month: viewMonth >= 11 ? 0 : viewMonth + 1,
      year: viewMonth >= 11 ? viewYear + 1 : viewYear,
    });
  };

  render() {
    const {
      selectedDate,
      min,
      max,
      viewMonth,
      viewYear,
      locale,
      monthFormat,
      onLabelClick,
      onSelect,
    } = this.props;
    return (
      <div>
        <Header
          label={formatDate(new Date(viewYear, viewMonth), locale, {
            month: monthFormat,
            year: 'numeric',
          })}
          onLabelClick={onLabelClick}
          onPreviousClick={this.selectPreviousMonth}
          onNextClick={this.selectNextMonth}
        />
        <DayCalendarTable {...{ selectedDate, min, max, viewMonth, viewYear, locale, onSelect }} />
      </div>
    );
  }
}

export default DayCalendar;
