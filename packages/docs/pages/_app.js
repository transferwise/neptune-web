import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import Layout from '../doc-components/Layout';

import 'prismjs/themes/prism.css';
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
          {
            // eslint-disable-next-line react/jsx-props-no-spreading
            <Component {...pageProps} />
          }
        </Layout>
      </>
    );
  }
}

export default MyApp;
