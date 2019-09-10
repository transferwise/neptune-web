import React from 'react';
import Types from 'prop-types';
import { formatDate } from '@transferwise/formatting';

import { Sizes } from '../../common';
import { MonthFormat } from '../../common/dateUtils';

const OpenButton = ({
  selectedDate,
  size,
  locale,
  placeholder,
  label,
  monthFormat,
  disabled,
  onClick,
}) => (
  <button
    onClick={onClick}
    className={`btn btn-${size} btn-input dropdown-toggle`}
    disabled={disabled}
    type="button"
  >
    {label && <span className="control-label small m-r-1">{label}</span>}
    {selectedDate ? (
      <span>
        {formatDate(selectedDate, locale, {
          day: 'numeric',
          month: monthFormat,
          year: 'numeric',
        })}
      </span>
    ) : (
      <span
        className="form-control-placeholder visible-xs-inline visible-sm-inline
                       visible-md-inline visible-lg-inline visible-xl-inline"
      >
        {placeholder}
      </span>
    )}
    <span className="caret" />
  </button>
);

OpenButton.propTypes = {
  selectedDate: Types.instanceOf(Date),
  size: Types.oneOf([Sizes.SMALL, Sizes.MEDIUM, Sizes.LARGE]),
  locale: Types.string.isRequired,
  placeholder: Types.string.isRequired,
  label: Types.string.isRequired,
  monthFormat: Types.oneOf([MonthFormat.LONG, MonthFormat.SHORT]).isRequired,
  disabled: Types.bool.isRequired,
  onClick: Types.func.isRequired,
};

OpenButton.defaultProps = {
  selectedDate: null,
  size: Sizes.MEDIUM,
};

export default OpenButton;
