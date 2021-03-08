import React from 'react';
import Types from 'prop-types';

import { DEFAULT_LOCALE, SUPPORTED_RTL } from '../../common/locale';

export const RTLContext = React.createContext(false);

export const RTLProvider = ({ locale, children }) => (
  <RTLContext.Provider value={SUPPORTED_RTL.indexOf(locale) > -1}>{children}</RTLContext.Provider>
);

RTLProvider.propTypes = {
  children: Types.node,
  locale: Types.string,
};

RTLProvider.defaultProps = {
  children: null,
  locale: DEFAULT_LOCALE,
};
