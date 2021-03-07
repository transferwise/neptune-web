import React from 'react';
import Types from 'prop-types';

const Option = ({ currency, label, note, secondary, icon, classNames, selected }) => {
  const style = (classes) =>
    classes.map((className) => classNames[className] || className).join(' ');
  const currencyClassNames = currency
    ? `${style([
        'currency-flag',
        `currency-flag-${currency.toLowerCase()}`,
        `${selected ? 'hidden-xs' : ''}`,
      ])}`
    : null;

  return (
    <span>
      {currency ? (
        <i className={currencyClassNames} />
      ) : (
        icon && React.cloneElement(icon, { size: 24, className: `${style(['tw-icon'])}` })
      )}
      {label}
      {note && <span className="small m-l-1">{note}</span>}
      {secondary && <span className="small text-ellipsis">{secondary}</span>}
    </span>
  );
};

Option.propTypes = {
  label: Types.node.isRequired,
  currency: Types.string,
  note: Types.node,
  secondary: Types.node,
  icon: Types.node,
  classNames: Types.objectOf(Types.string),
  selected: Types.bool,
};

Option.defaultProps = {
  currency: '',
  note: '',
  secondary: '',
  icon: null,
  classNames: {},
  selected: false,
};

export default Option;
