import React from 'react';
import Types from 'prop-types';
import Chevron from '../../chevron';

const btnClasses = 'btn-link p-a-0 text-no-decoration font-weight-bold';

const Header = ({ label, onLabelClick, onPreviousClick, onNextClick }) => (
  <div className="text-xs-center p-t-1 p-b-2 clearfix">
    <div className="pull-xs-left">
      <button type="button" onClick={onPreviousClick} className={btnClasses}>
        <Chevron orientation={Chevron.Orientation.LEFT} size={Chevron.Size.MEDIUM} />
      </button>
    </div>
    {label && (
      <button
        type="button"
        onClick={onLabelClick}
        className={`tw-date-lookup-header-current ${btnClasses}`}
      >
        {label}
      </button>
    )}
    <div className="pull-xs-right">
      <button type="button" onClick={onNextClick} className={btnClasses}>
        <Chevron orientation={Chevron.Orientation.RIGHT} size={Chevron.Size.MEDIUM} />
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
