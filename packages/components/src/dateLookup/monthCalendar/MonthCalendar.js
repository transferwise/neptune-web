import React, { PureComponent } from 'react';
import Types from 'prop-types';
import { formatDate } from '@transferwise/formatting';

import Header from '../header';
import MonthCalendarTable from './table';

class MonthCalendar extends PureComponent {
  onMonthSelect = (month) => {
    this.props.onViewDateUpdate({ month });
    this.props.onSelect();
  };

  selectPreviousYear = () => {
    this.props.onViewDateUpdate({ year: this.props.viewYear - 1 });
  };

  selectNextYear = () => {
    this.props.onViewDateUpdate({ year: this.props.viewYear + 1 });
  };

  render() {
    const { selectedDate, min, max, viewYear, locale, placeholder, onLabelClick } = this.props;
    return (
      <div>
        <Header
          label={formatDate(new Date(viewYear, 0), locale, { year: 'numeric' })}
          onLabelClick={onLabelClick}
          onPreviousClick={this.selectPreviousYear}
          onNextClick={this.selectNextYear}
        />
        <MonthCalendarTable
          {...{ selectedDate, min, max, viewYear, locale, placeholder }}
          onSelect={this.onMonthSelect}
        />
      </div>
    );
  }
}

MonthCalendar.propTypes = {
  selectedDate: Types.instanceOf(Date),
  min: Types.instanceOf(Date),
  max: Types.instanceOf(Date),
  viewYear: Types.number.isRequired,
  locale: Types.string.isRequired,
  placeholder: Types.string.isRequired,
  onSelect: Types.func.isRequired,
  onLabelClick: Types.func.isRequired,
  onViewDateUpdate: Types.func.isRequired,
};

MonthCalendar.defaultProps = {
  selectedDate: null,
  min: null,
  max: null,
};

export default MonthCalendar;
