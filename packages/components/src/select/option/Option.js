import React from 'react';
import Types from 'prop-types';

import 'currency-flags/dist/currency-flags.css';

const Option = ({ currency, label, note, secondary, icon }) => {
  const iconClass = currency ?
    `currency-flag currency-flag-${currency} pull-left m-r-1` :
    `icon ${icon} pull-left m-r-1`;
  return (
    <span>
      {icon || currency ? <i className={iconClass} /> : ''}
      {label}
      {note ? <span className="small m-l-1">{note}</span> : ''}
      {secondary ? <span className="small text-ellipsis">{secondary}</span> : ''}
    </span>
  );
};

Option.propTypes = {
  label: Types.string.isRequired,
  currency: Types.string,
  note: Types.string,
  secondary: Types.string,
  icon: Types.string,
};

Option.defaultProps = {
  currency: '',
  note: '',
  secondary: '',
  icon: '',
};

export default Option;
