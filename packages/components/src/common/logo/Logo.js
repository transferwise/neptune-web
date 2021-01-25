import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import { Theme } from '..';
import './Logo.css';

const Logo = ({ className, theme, type }) => {
  let baseClass;
  if (type === Logo.Type.FLAG) {
    baseClass = ['flag', 'flag-info'];
  } else {
    baseClass = ['logo', 'logo-3'];
    if (theme === Logo.Theme.DARK) {
      baseClass.push('logo-inverse');
    } else {
      baseClass.push('logo-primary');
    }
  }
  return <div className={classNames('np-logo', baseClass, className)} />;
};

Logo.Theme = Theme;

Logo.Type = { FULL: 'FULL', FLAG: 'FLAG' };

Logo.propTypes = {
  className: Types.string,
  theme: Types.oneOf([Logo.Theme.LIGHT, Logo.Theme.DARK]),
  type: Types.oneOf([Logo.Type.FULL, Logo.Type.FLAG]),
};

Logo.defaultProps = {
  className: undefined,
  theme: Theme.LIGHT,
  type: Logo.Type.FULL,
};

export default Logo;
