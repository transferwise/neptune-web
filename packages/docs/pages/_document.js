import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <script type="text/javascript">
            {/* The below is necessary to stop animations running on page load in Chrome
          (https://bugs.chromium.org/p/chromium/issues/detail?id=332189) */}
          </script>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
