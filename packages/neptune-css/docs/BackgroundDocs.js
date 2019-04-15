import React from 'react';

const Background = () => (
  <section id="background" className="section">
    <div className="container--wide">
      <h1 className="colored-dot doc-section__title">
          Background
      </h1>
      <span className="badge badge-success">beta</span>
    </div>
    <section className="bg bg--light doc-section doc-block">
      <h2 className="container--wide p-t-4">.bg--light</h2>
    </section>
    <section className="bg bg--dark doc-section">
      <h2 className="container--wide text-inverse p-t-4">.bg--dark</h2>
    </section>
  </section>
);

export default Background;
