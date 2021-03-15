import React from 'react';
import Types from 'prop-types';

import { DEFAULT_LOCALE, SUPPORTED_RTL } from '../../common/locale';

export const DirectionContext = React.createContext('ltr');

export const DirectionProvider = ({ locale, children }) => (
  <DirectionContext.Provider value={SUPPORTED_RTL.indexOf(locale) > -1 ? 'rtl' : 'ltr'}>
    {children}
  </DirectionContext.Provider>
);

DirectionProvider.propTypes = {
  children: Types.node,
  locale: Types.string,
};

DirectionProvider.defaultProps = {
  children: null,
  locale: DEFAULT_LOCALE,
};
