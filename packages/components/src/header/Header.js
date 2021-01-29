import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

const Header = React.forwardRef((props, ref) => {
  const { bottomContent, className, layout, leftContent, rightContent } = props;
  const isVertical = layout === Header.Layout.VERTICAL;

  return (
    <div className={classNames('np-header', 'd-flex', 'flex-wrap', className)} ref={ref}>
      <div
        className={classNames('align-items-center', 'd-flex', {
          'flex__item--8': isVertical,
        })}
      >
        {leftContent}
      </div>

      <div
        className={classNames('align-items-center', 'd-flex', 'justify-content-end', {
          'flex__item--4 ': isVertical,
          'order-2': !isVertical,
        })}
      >
        {rightContent}
      </div>
      <div
        className={classNames('align-items-center', 'd-flex', 'justify-content-center', {
          'flex__item--12': isVertical,
          'order-1 flex-grow-1': !isVertical,
        })}
      >
        {bottomContent}
      </div>
    </div>
  );
});

Header.Layout = { VERTICAL: 'VERTICAL', HORIZONTAL: 'HORIZONTAL' };

Header.defaultProps = {
  bottomContent: undefined,
  className: undefined,
  layout: Header.Layout.HORIZONTAL,
  leftContent: undefined,
  rightContent: undefined,
};

Header.propTypes = {
  bottomContent: Types.node,
  className: Types.string,
  layout: Types.oneOf([Header.Layout.HORIZONTAL, Header.Layout.VERTICAL]),
  leftContent: Types.node,
  rightContent: Types.node,
};

export default Header;
