import React from 'react';
import { useIntl } from 'react-intl';
import Types from 'prop-types';
import { formatDate } from '@transferwise/formatting';

import Header from '../header';
import MonthCalendarTable from './table';

function MonthCalendar({
  selectedDate,
  min,
  max,
  viewYear,
  placeholder,
  onSelect,
  onLabelClick,
  onViewDateUpdate,
}) {
  const intl = useIntl();

  function onMonthSelect(month) {
    onViewDateUpdate({ month });
    onSelect();
  }

  function selectPreviousYear() {
    onViewDateUpdate({ year: viewYear - 1 });
  }

  function selectNextYear() {
    onViewDateUpdate({ year: viewYear + 1 });
  }

  return (
    <div>
      <Header
        label={formatDate(new Date(viewYear, 0), intl.locale, { year: 'numeric' })}
        onLabelClick={onLabelClick}
        onPreviousClick={selectPreviousYear}
        onNextClick={selectNextYear}
      />
      <MonthCalendarTable
        {...{ selectedDate, min, max, viewYear, placeholder }}
        onSelect={onMonthSelect}
      />
    </div>
  );
}

MonthCalendar.propTypes = {
  selectedDate: Types.instanceOf(Date),
  min: Types.instanceOf(Date),
  max: Types.instanceOf(Date),
  viewYear: Types.number.isRequired,
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
