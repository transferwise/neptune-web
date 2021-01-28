import React from 'react';
import Types from 'prop-types';
import { IntlProvider } from 'react-intl';
import en from '../../i18n/en.json';
import { DEFAULT_LOCALE, adjustLocale } from '../common/locale';
import '../common/polyfills/intl';

function Provider({ i18n, children }) {
  const { locale, messages, defaultRichTextElements } = i18n;
  const adjustedLocale = adjustLocale(locale);
  let intlConfig;
  if (adjustedLocale === null) {
    // eslint-disable-next-line no-console
    console.warn(
      `Unsupported locale value was provided: '${locale}', defaulting to '${DEFAULT_LOCALE}'`,
    );
    intlConfig = { locale: DEFAULT_LOCALE, messages: en };
  } else {
    intlConfig = { locale: adjustedLocale, messages };
  }
  return (
    <IntlProvider
      defaultLocale={DEFAULT_LOCALE}
      locale={intlConfig.locale}
      messages={intlConfig.messages}
      defaultRichTextElements={defaultRichTextElements}
    >
      {children}
    </IntlProvider>
  );
}

Provider.propTypes = {
  i18n: Types.shape({
    locale: Types.string.isRequired,
    messages: Types.shape.isRequired,
    defaultRichTextElements: Types.shape.isRequired,
  }).isRequired,
  children: Types.node,
};

Provider.defaultProps = {
  children: undefined,
};

export default Provider;
