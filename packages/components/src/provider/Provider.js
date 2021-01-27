import React from 'react';
import Types from 'prop-types';
import { createIntl, createIntlCache, RawIntlProvider } from 'react-intl';
import en from '../../i18n/en.json';
import { DEFAULT_LOCALE, adjustLocale } from '../common/locale';

function Provider({ i18n, children }) {
  console.log('i18n', ...i18n);
  const cache = createIntlCache();
  const { locale, messages } = i18n;
  const adjustedLocale = adjustLocale(locale);
  let intlConfig;
  if (adjustedLocale == null) {
    // eslint-disable-next-line no-console
    console.warn(
      `Unsupported locale value was provided: '${locale}', defaulting to '${DEFAULT_LOCALE}'`,
    );
    intlConfig = { locale: DEFAULT_LOCALE, messages: en };
  } else {
    intlConfig = { locale: adjustedLocale, messages };
  }
  const intl = createIntl(intlConfig, cache);
  return <RawIntlProvider value={intl}>{children}</RawIntlProvider>;
}

Provider.propTypes = {
  /** locale: e.g es-ES, ja-JP, en-GB, en; messages */
  i18n: Types.shape({
    locale: Types.string.isRequired,
    messages: Types.shape.isRequired,
  }).isRequired,
  children: Types.node,
};

Provider.defaultProps = {
  children: undefined,
};

export default Provider;
