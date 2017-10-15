import React from 'react';
import Types from 'prop-types';

import './Option.less';

const Option = ({ currency, label, note, secondary, icon, classNames }) => {
  const style = classes => classes.map(className => classNames[className] || className).join(' ');
  const iconClass = currency ?
    `currency-flag currency-flag-${currency} ${style(['pull-left', 'm-r-1'])}` :
    `${style(['icon', 'pull-left', 'm-r-1'])} ${icon}`;
  return (
    <span>
      {icon || currency ? <i className={iconClass} /> : ''}
      {label}
      {note ? <span className={style(['small', 'm-l-1'])}>{note}</span> : ''}
      {secondary ? <span className={style(['small', 'text-ellipsis'])}>{secondary}</span> : ''}
    </span>
  );
};

Option.propTypes = {
  label: Types.string.isRequired,
  currency: Types.string,
  note: Types.string,
  secondary: Types.string,
  icon: Types.string,
  classNames: Types.objectOf(Types.string),
};

Option.defaultProps = {
  currency: '',
  note: '',
  secondary: '',
  icon: '',
  classNames: {},
};

export default Option;
