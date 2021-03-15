/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import { Provider } from '@transferwise/components';
import {
  getLangFromLocale,
  DEFAULT_LOCALE,
} from '@transferwise/components/build/es/polyfill/common/locale';
import Layout from '../components/Layout';
import '@transferwise/neptune-css/dist/css/neptune.css';
import '@transferwise/neptune-css/dist/css/neptune-social-media.css';
import '@transferwise/icons/lib/styles/main.min.css';
import 'currency-flags/dist/currency-flags.min.css';

import { addBasePath } from '../utils/pageUtils';

import '../static/assets/main.css';

if (process.env.NODE_ENV !== 'production' && typeof window !== 'undefined') {
  const ReactDOM = require('react-dom'); // eslint-disable-line global-require
  const axe = require('@axe-core/react'); // eslint-disable-line global-require
  axe(React, ReactDOM, 1000, {});
}

class MyApp extends App {
  static async getInitialProps() {
    const lang = getLangFromLocale(DEFAULT_LOCALE);
    const messages = await import(`@transferwise/components/i18n/${lang}`);
    return { locale: DEFAULT_LOCALE, messages };
  }

  componentDidMount() {
    const { pathname } = Router;
    if (pathname === '/' || pathname === '/_error') {
      Router.push(addBasePath('about/Home'));
    }

    // @TODO
    // We need to show the user a cookie banner before we do this. Because it's used solely for the purposes
    // of making the site run well, we don't need to ask for consent, but we do need to inform them.
    // window.addEventListener('beforeunload', () => {
    //   localStorage.setItem(
    //     'sidebar-scroll',
    //     document.querySelector('.Sidebar__Inner .Nav').scrollTop,
    //   );
    // });
  }

  render() {
    const { Component, pageProps, locale, messages } = this.props;

    return (
      <Provider i18n={{ locale, messages }}>
        <Head>
          <title>Neptune Web - the Wise Design System on Web</title>
          <link rel="icon" href={`${process.env.ASSET_PREFIX}/static/assets/favicon.ico`} />
        </Head>

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    );
  }
}

export default MyApp;
