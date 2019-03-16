import React from 'react';

import Refractor from 'react-refractor';
import markup from 'refractor/lang/markup';
import javascript from 'refractor/lang/javascript';
import './less/prism.css';

const Breadcrumbs = () => (
  <section id="breadcrumbs" className="container--wide section">
    <h1 className="colored-dot">Breadcrumbs</h1>
    <p className="lead">Indicate the current page's location within a navigational hierarchy.</p>
    <p>
Separators are automatically added in CSS through
      <code>:before</code>
      {' '}
and
      <code>content</code>
.
    </p>
    <div className="bs-example" data-example-id="simple-breadcrumbs">
      <ol className="breadcrumb">
        <li className="active">Home</li>
      </ol>
      <ol className="breadcrumb">
        <li><a href="">Home</a></li>
        <li className="active">Library</li>
      </ol>
      <ol className="breadcrumb">
        <li><a href="">Home</a></li>
        <li><a href="">Library</a></li>
        <li className="active">Data</li>
      </ol>
    </div>
    <Refractor
      language="markup"
      value={`
        <ol class="breadcrumb">
          <li><a href="#">Home</a></li>
          <li><a href="#">Library</a></li>
          <li class="active">Data</li>
        </ol>
       `}
    />
  </section>
);

export default Breadcrumbs;
