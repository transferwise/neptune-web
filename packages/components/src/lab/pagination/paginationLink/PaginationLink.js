import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

const PaginationLink = ({ disabled, active, pageNumber, onClick, children }) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (!disabled && !active) {
      onClick(pageNumber);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleClick(e);
    }
  };

  const ariaLabel = active ? `Go to page ${pageNumber}` : `Current page, page ${pageNumber}`;

  return (
    <li>
      <a
        href="/"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        aria-label={ariaLabel}
        aria-current={active}
        className={classNames({ disabled, active })}
      >
        {children}
      </a>
    </li>
  );
};

PaginationLink.propTypes = {
  disabled: Types.bool,
  active: Types.bool,
  onClick: Types.func.isRequired,
  pageNumber: Types.number.isRequired,
  children: Types.node.isRequired,
};

PaginationLink.defaultProps = {
  disabled: false,
  active: false,
};

export default PaginationLink;
