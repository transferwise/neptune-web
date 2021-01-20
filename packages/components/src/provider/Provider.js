import React from 'react';
import Types from 'prop-types';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';
import en from '../../i18n/en.json';
import { LOCALES, mapLocale } from '../common/locale';

function Provider({ i18n, children }) {
  const cache = createIntlCache();
  const { locale, messages } = i18n;
  const mappedLocale = mapLocale(locale);

  let intlConfig;
  if (mappedLocale === null) {
    // eslint-disable-next-line no-console
    console.warn(`Unsupported locale value was provided: '${locale}', defaulting to 'en'`);
    intlConfig = { locale: 'en', messages: en };
  } else {
    intlConfig = { locale: mappedLocale, messages };
  }
  const intl = createIntl(intlConfig, cache);
  return <RawIntlProvider value={intl}>{children}</RawIntlProvider>;
}

Provider.propTypes = {
  i18n: Types.shape({
    locale: Types.oneOf(LOCALES).isRequired,
    messages: Types.shape.isRequired,
  }).isRequired,
  children: Types.node,
};

Provider.defaultProps = {
  children: undefined,
};

export default Provider;
