import { shouldPolyfill as shouldPolyfillLocale } from '@formatjs/intl-locale/should-polyfill';
import { shouldPolyfill as shouldPolyfillGetCanonicalLocales } from '@formatjs/intl-getcanonicallocales/should-polyfill';

/**
 * Polyfill {Intl.Locale} API
 *
 * Source: https://formatjs.io/docs/polyfills/intl-locale
 */
(async function installPolyfill() {
  if (shouldPolyfillGetCanonicalLocales()) {
    await import('@formatjs/intl-getcanonicallocales/polyfill');
  }
  if (shouldPolyfillLocale()) {
    await import('@formatjs/intl-locale/polyfill');
  }
})();
