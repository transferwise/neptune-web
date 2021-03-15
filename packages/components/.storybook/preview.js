import React, { StrictMode } from 'react';
import { select } from '@storybook/addon-knobs';

import { Provider } from '../src';
import '@transferwise/neptune-css/dist/css/neptune.css';
import '@transferwise/neptune-css/dist/css/neptune-social-media.css';
import '@transferwise/icons/lib/styles/main.min.css';
import 'currency-flags/dist/currency-flags.min.css';

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { DEFAULT_LOCALE, getLangFromLocale } from '../src/common/locale';
import supportedLangs from '../i18n';

import './storybook.css';

// Set up Axe to run in the console
if (process.env.NODE_ENV !== 'production') {
  const ReactDOM = require('react-dom');
  const axe = require('@axe-core/react');
  const context = {
    include: [['#root']],
  };
  axe(React, ReactDOM, 1000, {}, context);
}

export const parameters = {
  a11y: {
    config: {
      rules: [{ id: 'color-contrast', enabled: false }],
    },
  },
  options: {
    panelPosition: 'right',
  },
  viewport: {
    viewports: MINIMAL_VIEWPORTS,
  },
};

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '80px',
  minHeight: '100vh',
  width: '100vw',
};

const StrictModeDecorator = (storyFn) => <StrictMode>{storyFn()}</StrictMode>;

const CenterDecorator = (storyFn) => (
  <div style={style}>
    <div style={{ width: '100%' }}>{storyFn()}</div>
  </div>
);

// list is not exhaustive but should enough for testing diff edge cases
// feel free to add more during development
const severalExamplesOfSupportedLocales = [
  DEFAULT_LOCALE,
  'en-US',
  'ja-JP',
  'zh-HK',
  'es',
  'fr',
  'ru',
  'de',
  'tr',
  'he-IL',
];

const ProviderDecorator = (storyFn) => {
  const locale = select('locale (global)', severalExamplesOfSupportedLocales, DEFAULT_LOCALE);
  const lang = getLangFromLocale(locale);
  const messages = supportedLangs[lang];
  const props = {
    i18n: { locale, messages },
    children: storyFn(),
  };
  return <Provider {...props} />;
};

export const decorators = [StrictModeDecorator, CenterDecorator, ProviderDecorator];
