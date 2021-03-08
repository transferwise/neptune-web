import React from 'react';

export const RTLContext = React.createContext('en');

const RtlProvider = ({ locale, children }) => {
  return <RTLContext.Provider value={locale === 'ae'}>{children}</RTLContext.Provider>;
};

export default RtlProvider;
