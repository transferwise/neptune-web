import React from 'react';
import Types from 'prop-types';
import classnames from 'classnames';
import { Sizes } from '../common';

import './Loader.less';

const Loader = ({ small, size, classNames }) => {
  const style = className => classNames[className] || className;

  const legacySize = small ? Sizes.EXTRA_SMALL : size;

  return (
    <div className={classnames(style('loader'), style(`loader--${legacySize}`))}>
      {Array(5)
        .fill()
        .map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className={style('loader__stripe')} key={index} />
        ))}
    </div>
  );
};

Loader.propTypes = {
  small: Types.bool,
  size: Types.oneOf(Object.values(Sizes)),
  classNames: Types.objectOf(Types.string),
};
Loader.defaultProps = { small: false, size: Sizes.EXTRA_LARGE, classNames: {} };

export default Loader;
