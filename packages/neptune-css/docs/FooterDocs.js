import React from 'react';
import { Footer } from '@transferwise/public-navigation';

const FooterDoc = () => (
  <section id="footer">
    <div className="container--wide section">
      <h1 className="colored-dot doc-section__title">Footer</h1>
      <p>
      From &nbsp;
        <a href="https://github.com/transferwise/public-navigation">Public navigation components</a>
      </p>
      <ul>
        <li><a href="#footer-default">Default footer</a></li>
        <li><a href="#footer-inverse">Inverse footer</a></li>
      </ul>
    </div>
    <Footer id="footer-default" />
    <div className="section container--wide">
      <h2 className="doc-section__title">Footer inverse</h2>
    </div>
    <Footer inverse id="footer-inverse" />
  </section>
);

export default FooterDoc;
