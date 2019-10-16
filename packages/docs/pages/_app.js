import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import Layout from '../doc-components/Layout';

import '@transferwise/neptune-css/dist/css/neptune.css';
import '../static/assets/main.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Neptune Design System — Transferwise</title>
        </Head>

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
}

export default MyApp;
