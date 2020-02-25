import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

const Header = ({ leftContent, rightContent, bottomContent, className }) => (
  <div className={classNames(className)}>
    <div className="container">
      <div className="row p-t-3 ">
        <div className="col-lg-2 col-xs-6">{leftContent}</div>
        <div className="col-lg-2 col-xs-6 col-lg-push-8 text-xs-right">{rightContent}</div>
        <div className="col-xs-12 col-lg-6 col-lg-pull-2 col-lg-offset-1 p-x-0">
          {bottomContent}
        </div>
      </div>
    </div>
  </div>
);

Header.defaultProps = {
  leftContent: null,
  rightContent: null,
  bottomContent: null,
  className: null,
};

Header.propTypes = {
  leftContent: Types.node,
  rightContent: Types.node,
  bottomContent: Types.node,
  className: Types.string,
};

export default Header;
