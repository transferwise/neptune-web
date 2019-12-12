import React from 'react';
import Types from 'prop-types';
import classnames from 'classnames';
import { Size } from '../common';

import './Loader.css';

const Loader = ({ small, size, classNames }) => {
  const style = className => classNames[className] || className;

  const legacySize = small ? Loader.Size.EXTRA_SMALL : size;

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
Loader.Size = Size;

Loader.propTypes = {
  small: Types.bool,
  size: Types.oneOf([
    Loader.Size.EXTRA_SMALL,
    Loader.Size.SMALL,
    Loader.Size.MEDIUM,
    Loader.Size.LARGE,
    Loader.Size.EXTRA_LARGE,
  ]),
  classNames: Types.objectOf(Types.string),
};
Loader.defaultProps = { small: false, size: Loader.Size.EXTRA_LARGE, classNames: {} };

export default Loader;
