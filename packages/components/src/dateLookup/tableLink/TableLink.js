import React from 'react';
import Types from 'prop-types';
import classname from 'classnames';

function TableLink({ item, type, title, longTitle, active, disabled, today, onClick }) {
  function handleOnClick(event) {
    event.preventDefault();
    if (!disabled) {
      onClick(item);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={handleOnClick}
        className={classname(`tw-date-lookup-${type}-option`, { active, today })}
        disabled={disabled}
        aria-label={longTitle}
      >
        {title || item}
      </button>
    </>
  );
}

TableLink.propTypes = {
  item: Types.number.isRequired, // day (1-31), month (0-11) or year (2018 etc)
  type: Types.oneOf(['day', 'month', 'year']).isRequired,
  title: Types.string,
  longTitle: Types.string,
  active: Types.bool.isRequired,
  disabled: Types.bool.isRequired,
  today: Types.bool.isRequired,
  onClick: Types.func.isRequired,
};

TableLink.defaultProps = {
  title: null,
  longTitle: null,
};

export default TableLink;
