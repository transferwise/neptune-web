import Document, { Html, Head, Main, NextScript } from 'next/document';

import {getAssetPath} from '../doc-components'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="icon" href={getAssetPath('favicon.ico')} />
          <link href={getAssetPath("css/neptune.css")} rel="stylesheet" />
          <style>{`
            html,
            body {
              height: 100%;
            }
            #__next {
              height: 100vh;
            }
            img,
            svg {
              max-width: 100%;
              height: auto;
              vertical-align: middle;
            }
            .doc-bg {
              background: #f2f5f7;
            }
            .doc-bg--dark {
              background: #37517e;
            }
            .doc-block {
              margin-top: calc(8px * 6);
              margin-top: calc(8px * 6);
            }
            .doc-section {
              min-height: 50vh;
            }
            .doc-box {
              height: 15vh;
            }
            .doc-color {
              display: block;
              padding: 16px;
              font-weight: 600;
              color: #2e4369;
            }
            .doc-dashed {
              border: 1px dashed #829ca9;
            }
            .doc-example {
              position: relative;
              margin: 32px 0;
              padding-bottom: 60px;
            }
            .doc-example .navbar-fixed-top,
            .doc-example .navbar-fixed-bottom {
              position: absolute;
            }
            .doc-item {
              padding: 8px;
            }
            .doc-text--inverse {
              color: #fff;
            }
            .PageLayout {
              display: grid;
              grid-template-columns: 200px auto;
              min-height: 100vh;
            }
            .PageLayout__Inner {
              display: grid;
              grid-template-columns: 200px auto;
              background: #f2f5f7;
            }
            .PageLayout__Inner--nosidebar {
              grid-template-columns: auto;
            }
            .Header {
              background: #37517e;
            }
            .Header__Fixed {
              width: 200px;
              height: 100vh;
              position: fixed;
            }
            .Logo {
              height: 70px;
              display: flex;
            }
            .Sidebar__Fixed {
              display: flex;
              flex-direction: column;
              border-right: 1px solid #e2e6e8;
              width: 200px;
              height: 100vh;
              position: fixed;
            }
            .Sidebar__Header{
              padding: 20px 24px;
            }
            .Sidebar__Inner {
              overflow-y: scroll;
              flex-grow: 1;
              display: flex;
              flex-direction: column;
            }
            .Sidebar__Title {
              margin: 0;
            }
            .Nav {
              font-size: 14px;
              overflow-y: scroll;
              padding: 0px;
              list-style: none;
              border-top: 1px solid #e2e6e8;
              margin-bottom: 0;
            }
            .Nav__Link {
              display: block;
              padding: 18px 24px 16px;
              border-bottom: 1px solid #e2e6e8;
              font-weight: normal;
              color: #37517e;
              text-decoration: none;
              transition: color 0.15s;
              outline: 0 !important;
            }
            .Nav__Link:hover,
            .Nav__Link.active {
              text-decoration: none;
            }
            .Nav__Link.active {
              color: #00a4df;
              font-weight: bold;
              background: #fff;
            }
            .Nav--dark {
              border-top: 1px solid #4c638a;
            }
            .Nav--dark .Nav__Link {
              padding: 9px 24px 7px;
              border-bottom: 0;
              color: #fff;
            }
            .Nav--dark .Nav__Link.active {
              background: #2e4369;
              color: #00a4df;
            }
            .Content {
              padding: 24px 32px;
              background: #FFF;
              position: fixed;
              overflow-y: scroll;
              left: 400px;
              height: 100%;
              width: calc(100% - 400px);
            }
          `}</style>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
