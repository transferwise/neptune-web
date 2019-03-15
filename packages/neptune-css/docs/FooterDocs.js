import React from 'react';
import { Footer } from '@transferwise/public-navigation';

const FooterDoc = () => (
  <section id="footer">
    <div className="wrap--content section">
      <h1 className="colored-dot">Footer</h1>
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
    <div className="section">
      <h2 className="wrap--content">Footer inverse</h2>
    </div>
    <Footer inverse="true" id="footer-inverse" />
  </section>
);

export default FooterDoc;
