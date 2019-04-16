import React from 'react';

import Refractor from 'react-refractor';
import markup from 'refractor/lang/markup';
import javascript from 'refractor/lang/javascript';
import './less/prism.css';

const Blocks = () => (
  <section id="blocks" className="container container--wide section">
    <h1 className="colored-dot">Blocks.</h1>
    <p className="lead">295 B</p>

    <p>
      Wrap content in a box with a <code>{'<div class="block"></div>'}</code> class, and make them clickable with <code>{'<a href="#" className="block block--withLink"></a>'}</code>.
    </p>

    <div className="doc-example">
      <div className="row row--wide">
        <div className="col-md-4 m-b-5">
          <div className="block">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
        </div>

        <div className="col-md-4 m-b-5">
          <div className="block">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
        </div>

        <div className="col-md-4 m-b-5">
          <div className="block">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
        </div>
      </div>

      <div className="row row--wide">
        <div className="col-md-4 m-b-5">
          <a href="#" className="block block--withLink">
            <h5>Lorem ipsum</h5>
            <span className="block-caretLink">Dolor sit amet <span class='glyphicon glyphicon-chevron-right' /></span>
          </a>
        </div>

        <div className="col-md-4 m-b-5">
          <a href="#" className="block block--withLink">
            <h5>Lorem ipsum</h5>
            <span className="block-caretLink">Dolor sit amet <span class='glyphicon glyphicon-chevron-right' /></span>
          </a>
        </div>

        <div className="col-md-4 m-b-5">
          <a href="#" className="block block--withLink">
            <h5>Lorem ipsum</h5>
            <span className="block-caretLink">Dolor sit amet <span class='glyphicon glyphicon-chevron-right' /></span>
          </a>
        </div>
      </div>

      <Refractor
        language="markup"
        value={`
          <div class="block">Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
        `}
      />
    </div>
  </section>
);

export default Blocks;
