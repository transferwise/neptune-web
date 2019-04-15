import React from 'react';

import Refractor from 'react-refractor';
import './less/prism.css';

const Badge = () => (
  <section id="badge" className="container--wide section">
    <h1 className="colored-dot doc-section__title">Badge</h1>
    <p className="lead">703 bytes</p>
    <p className="lead">
      Easily highlight new or unread items by adding a
      <code>{' <span class="badge">'}</code>
      to links, Bootstrap navs, and more.
    </p>
    <div className="doc-example">
      <a href="http:///transferwise.com">
        Inbox&nbsp;
        <span className="badge">42</span>
      </a>
      <Refractor
        language="markup"
        value={`
          <a href="#">Inbox <span class="badge">42</span></a>
         `}
      />
    </div>

    <h2 className="doc-section__subtitle" id="color">Color</h2>
    <p>
      Use
      <code>.badge-success</code>
      contextual class.
    </p>
    <div className="doc-example" data-example-id="badges-styles">
      <a href="http:///transferwise.com">
            Inbox&nbsp;
        <span className="badge badge-success">new</span>
      </a>
      <Refractor
        language="markup"
        value={`
          <a href="#">Inbox <span class="badge badge-success">new</span></a>
         `}
      />
    </div>

  </section>
);

export default Badge;
