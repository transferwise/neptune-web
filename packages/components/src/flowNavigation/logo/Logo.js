// To be extracted and refactored as part of https://transferwise.atlassian.net/browse/DS-274
import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import { Theme } from '../../common';

const Logo = ({ theme, onGoBack }) => (
  <>
    <div className={classNames('logo', 'hidden-xs')}>
      <img
        src={
          theme === Theme.LIGHT
            ? 'https://transferwise.com/public-resources/assets/logos/transferwise/logo.svg'
            : 'https://transferwise.com/public-resources/assets/logos/transferwise/logo_inverse.svg'
        }
        className="logo__image"
        alt="TransferWise"
      />
    </div>
    <div
      className={classNames('flag', 'visible-xs', {
        'flag--hidden': onGoBack,
      })}
    >
      <img
        src="https://transferwise.com/public-resources/assets/logos/transferwise/flag.svg"
        className="logo__image"
        alt="TransferWise"
      />
    </div>
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
