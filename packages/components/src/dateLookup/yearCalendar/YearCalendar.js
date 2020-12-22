import React from 'react';
import Types from 'prop-types';

import Header from '../header';
import YearCalendarTable from './table';

function YearCalendar({
  selectedDate,
  min,
  max,
  viewYear,
  placeholder,
  onSelect,
  onViewDateUpdate,
}) {
  function onYearSelect(year) {
    onViewDateUpdate({ year });
    onSelect();
  }

  function selectPreviousYears() {
    onViewDateUpdate({ year: viewYear - 20 });
  }

  function selectNextYears() {
    onViewDateUpdate({ year: viewYear + 20 });
  }

  return (
    <div>
      <Header onPreviousClick={selectPreviousYears} onNextClick={selectNextYears} />
      <YearCalendarTable
        {...{ selectedDate, min, max, viewYear, placeholder }}
        onSelect={onYearSelect}
      />
    </div>
  );
}

YearCalendar.propTypes = {
  selectedDate: Types.instanceOf(Date),
  min: Types.instanceOf(Date),
  max: Types.instanceOf(Date),
  viewYear: Types.number.isRequired,
  placeholder: Types.string.isRequired,
  onSelect: Types.func.isRequired,
  onViewDateUpdate: Types.func.isRequired,
};

YearCalendar.defaultProps = {
  selectedDate: null,
  min: null,
  max: null,
};

export default YearCalendar;
