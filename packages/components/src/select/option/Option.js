import React from 'react';
import Types from 'prop-types';

const Option = ({ currency, label, note, secondary, icon, classNames, selected }) => {
  const style = classes => classes.map(className => classNames[className] || className).join(' ');
  const iconClass = currency
    ? `currency-flag currency-flag-${currency.toLowerCase()} ${selected ? 'hidden-xs' : ''}`
    : `${style(['icon'])} ${icon}`;
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
  label: Types.node.isRequired,
  currency: Types.string,
  note: Types.node,
  secondary: Types.node,
  icon: Types.string,
  classNames: Types.objectOf(Types.string),
  selected: Types.bool,
};

Option.defaultProps = {
  currency: '',
  note: '',
  secondary: '',
  icon: '',
  classNames: {},
  selected: false,
};

export default Option;
