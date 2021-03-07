import React from 'react';
import Types from 'prop-types';
import classnames from 'classnames';
import { Size } from '../common';

import './Loader.css';

const Loader = (props) => {
  const { small, size, classNames } = props;
  const style = (className) => classNames[className] || className;

  const legacySize = small ? Loader.Size.EXTRA_SMALL : size;

  return (
    <div
      className={classnames(style('tw-loader'), style(`tw-loader--${legacySize}`))}
      data-testid={props['data-testid']}
    >
      {Array(5)
        .fill()
        .map((item, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className={style('tw-loader__stripe')} key={index} />
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
  'data-testid': Types.string,
};
Loader.defaultProps = {
  small: false,
  size: Loader.Size.EXTRA_LARGE,
  classNames: {},
  'data-testid': null,
};

export default Loader;
