import React from 'react';
import Types from 'prop-types';
import { formatDate } from '@transferwise/formatting';

import TableLink from '../../tableLink';

const ROWS = 3;
const COLS = 4;
const MONTH_ONLY_FORMAY = { month: 'short' };

const MonthCalendarTable = ({
  selectedDate: selected,
  min,
  max,
  viewYear,
  locale,
  placeholder,
  onSelect,
}) => {
  const getLink = month => (
    <TableLink
      item={month}
      type="month"
      title={formatDate(new Date(viewYear, month), locale, MONTH_ONLY_FORMAY)}
      active={!!(selected && month === selected.getMonth() && viewYear === selected.getFullYear())}
      disabled={isDisabled(month)}
      today={viewYear === new Date().getFullYear() && month === new Date().getMonth()}
      onClick={onSelect}
    />
  );
  const isDisabled = month => {
    const date = new Date(viewYear, month);
    return !!(
      (min && date < new Date(min.getFullYear(), min.getMonth())) ||
      (max && date > new Date(max.getFullYear(), max.getMonth()))
    );
  };
  return (
    <table className="table table-condensed table-bordered table-calendar m-b-0">
      <thead className="sr-only">
        <tr>
          <th colSpan="3">{placeholder}</th>
        </tr>
      </thead>
      <tbody>
        {/* eslint-disable react/no-array-index-key */}
        {[...Array(ROWS)].map((row, rowIndex) => (
          <tr key={rowIndex}>
            {[...Array(COLS)].map((col, colIndex) => (
              <td key={colIndex}>{getLink(rowIndex * COLS + colIndex)}</td>
            ))}
          </tr>
        ))}
        {/* eslint-enable react/no-array-index-key */}
      </tbody>
    </table>
  );
};

MonthCalendarTable.propTypes = {
  selectedDate: Types.instanceOf(Date),
  min: Types.instanceOf(Date),
  max: Types.instanceOf(Date),
  viewYear: Types.number.isRequired,
  locale: Types.string.isRequired,
  placeholder: Types.string.isRequired,
  onSelect: Types.func.isRequired,
};

MonthCalendarTable.defaultProps = {
  selectedDate: null,
  min: null,
  max: null,
};

export default MonthCalendarTable;
