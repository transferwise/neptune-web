import React, { PureComponent } from 'react';
import Types from 'prop-types';

import Header from '../header';
import YearCalendarTable from './table';

class YearCalendar extends PureComponent {
  static propTypes = {
    selectedDate: Types.instanceOf(Date),
    min: Types.instanceOf(Date),
    max: Types.instanceOf(Date),
    viewYear: Types.number.isRequired,
    locale: Types.string.isRequired,
    placeholder: Types.string.isRequired,
    onSelect: Types.func.isRequired,
    onViewDateUpdate: Types.func.isRequired,
  };

  static defaultProps = {
    selectedDate: null,
    min: null,
    max: null,
  };

  onYearSelect = year => {
    this.props.onViewDateUpdate({ year });
    this.props.onSelect();
  };

  selectPreviousYears = () => {
    this.props.onViewDateUpdate({ year: this.props.viewYear - 20 });
  };

  selectNextYears = () => {
    this.props.onViewDateUpdate({ year: this.props.viewYear + 20 });
  };

  render() {
    const { selectedDate, min, max, viewYear, locale, placeholder } = this.props;
    return (
      <div>
        <Header onPreviousClick={this.selectPreviousYears} onNextClick={this.selectNextYears} />
        <YearCalendarTable
          {...{ selectedDate, min, max, viewYear, locale, placeholder }}
          onSelect={this.onYearSelect}
        />
      </div>
    );
  }
}

export default YearCalendar;
