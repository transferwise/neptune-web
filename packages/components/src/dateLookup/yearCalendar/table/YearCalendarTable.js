import React from 'react';
import Types from 'prop-types';
import { formatDate } from '@transferwise/formatting';

import TableLink from '../../tableLink';

const ROWS = 5;
const COLS = 4;
const YEAR_ONLY_FORMAT = { year: 'numeric' };

const YearCalendarTable = ({ selectedDate, min, max, viewYear, locale, placeholder, onSelect }) => {
  const startYear = viewYear - (viewYear % 20);
  const getLink = year => (
    <TableLink
      item={year}
      type="year"
      title={formatDate(new Date(year, 0), locale, YEAR_ONLY_FORMAT)}
      active={!!(selectedDate && year === selectedDate.getFullYear())}
      disabled={!!((min && year < min.getFullYear()) || (max && year > max.getFullYear()))}
      today={year === new Date().getFullYear()}
      onClick={onSelect}
    />
  );
  return (
    <table className="table table-condensed table-bordered table-calendar m-b-0">
      <thead className="sr-only">
        <tr>
          <th colSpan="4">{placeholder}</th>
        </tr>
      </thead>
      <tbody>
        {/* eslint-disable react/no-array-index-key */}
        {[...Array(ROWS)].map((row, rowIndex) => (
          <tr key={rowIndex}>
            {[...Array(COLS)].map((col, colIndex) => (
              <td key={colIndex}>{getLink(startYear + rowIndex * COLS + colIndex)}</td>
            ))}
          </tr>
        ))}
        {/* eslint-enable react/no-array-index-key */}
      </tbody>
    </table>
  );
};

YearCalendarTable.propTypes = {
  selectedDate: Types.instanceOf(Date),
  min: Types.instanceOf(Date),
  max: Types.instanceOf(Date),
  viewYear: Types.number.isRequired,
  locale: Types.string.isRequired,
  placeholder: Types.string.isRequired,
  onSelect: Types.func.isRequired,
};

YearCalendarTable.defaultProps = {
  selectedDate: null,
  min: null,
  max: null,
};

export default YearCalendarTable;
