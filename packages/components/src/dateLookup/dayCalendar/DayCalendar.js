import React from 'react';
import { useIntl } from 'react-intl';
import Types from 'prop-types';
import { formatDate } from '@transferwise/formatting';

import { MonthFormat } from '../../common';
import Header from '../header';
import DayCalendarTable from './table';

function DayCalendar({
  selectedDate,
  min,
  max,
  viewMonth,
  viewYear,
  monthFormat,
  onSelect,
  onLabelClick,
  onViewDateUpdate,
}) {
  const intl = useIntl();

  function selectPreviousMonth() {
    onViewDateUpdate({
      month: viewMonth <= 0 ? 11 : viewMonth - 1,
      year: viewMonth <= 0 ? viewYear - 1 : viewYear,
    });
  }

  function selectNextMonth() {
    onViewDateUpdate({
      month: viewMonth >= 11 ? 0 : viewMonth + 1,
      year: viewMonth >= 11 ? viewYear + 1 : viewYear,
    });
  }

  return (
    <div>
      <Header
        label={formatDate(new Date(viewYear, viewMonth), intl.locale, {
          month: monthFormat,
          year: 'numeric',
        })}
        onLabelClick={onLabelClick}
        onPreviousClick={selectPreviousMonth}
        onNextClick={selectNextMonth}
      />
      <DayCalendarTable {...{ selectedDate, min, max, viewMonth, viewYear, onSelect }} />
    </div>
  );
}

DayCalendar.propTypes = {
  selectedDate: Types.instanceOf(Date),
  min: Types.instanceOf(Date),
  max: Types.instanceOf(Date),
  viewMonth: Types.number.isRequired,
  viewYear: Types.number.isRequired,
  monthFormat: Types.oneOf([MonthFormat.LONG, MonthFormat.SHORT]).isRequired,
  onSelect: Types.func.isRequired,
  onLabelClick: Types.func.isRequired,
  onViewDateUpdate: Types.func.isRequired,
};

DayCalendar.defaultProps = {
  selectedDate: null,
  min: null,
  max: null,
};

export default DayCalendar;
