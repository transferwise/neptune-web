import React from 'react';
import App, { Container } from 'next/app';
import Layout from '../doc-components/Layout'
import Head from 'next/head';

import 'prismjs/themes/prism.css';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>Neptune CSS — Transferwise</title>
        </Head>

        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Container>
    );
  }
}

export default MyApp;
