/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import { Provider } from '@transferwise/components';
import Layout from '../components/Layout';
import '@transferwise/neptune-css/dist/css/neptune.css';
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
    const defaultLocale = 'en';
    const messages = await import(`@transferwise/components/i18n/${defaultLocale}`);
    return { locale: defaultLocale, messages };
  }

  componentDidMount() {
    const { pathname } = Router;
    if (pathname === '/' || pathname === '/_error') {
      Router.push(addBasePath('about/Home'));
    }

    window.addEventListener('beforeunload', () => {
      localStorage.setItem(
        'sidebar-scroll',
        document.querySelector('.Sidebar__Inner .Nav').scrollTop,
      );
    });
  }

  render() {
    const { Component, pageProps, locale, messages } = this.props;

    return (
      <Provider i18n={{ locale, messages }}>
        <Head>
          <title>Neptune Design System — TransferWise</title>
        </Head>

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    );
  }
}

export default MyApp;
