// To be extracted and refactored as part of https://transferwise.atlassian.net/browse/DS-274
import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import { Theme } from '../../common';

const Logo = ({ theme, onGoBack }) => (
  <>
    <div
      className={classNames('logo', 'logo-3', 'hidden-xs', {
        'logo-primary': theme === Theme.LIGHT,
        'logo-inverse': theme === Theme.DARK,
      })}
    />
    <div
      className={classNames('flag', 'flag-info', 'logo-3', 'visible-xs', {
        'flag--hidden': onGoBack,
      })}
    />
  </>
);

Logo.defaultProps = {
  theme: Theme.LIGHT,
  onGoBack: null,
};

Logo.propTypes = {
  theme: Types.oneOf([Theme.LIGHT, Theme.DARK]),
  onGoBack: Types.func,
};

export default Logo;
