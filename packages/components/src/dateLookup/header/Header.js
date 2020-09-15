import React from 'react';
import Types from 'prop-types';

const btnClasses = 'btn-link p-a-0 text-no-decoration font-weight-bold';

const Header = ({ label, onLabelClick, onPreviousClick, onNextClick }) => (
  <div className="text-xs-center p-t-1 p-b-2 clearfix">
    <div className="pull-xs-left">
      <button onClick={onPreviousClick} className={btnClasses}>
        <i className="icon icon-left icon-lg" />
      </button>
    </div>
    {label && (
      <button onClick={onLabelClick} className={`tw-date-lookup-header-current ${btnClasses}`}>
        {label}
      </button>
    )}
    <div className="pull-xs-right">
      <button onClick={onNextClick} className={btnClasses}>
        <i className="icon icon-right icon-lg" />
      </button>
    </div>
  </div>
);

Header.propTypes = {
  label: Types.string,
  onLabelClick: Types.func,
  onPreviousClick: Types.func.isRequired,
  onNextClick: Types.func.isRequired,
};

Header.defaultProps = {
  label: null,
  onLabelClick: () => {},
};

export default Header;
