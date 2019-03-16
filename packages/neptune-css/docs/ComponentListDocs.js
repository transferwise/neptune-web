import React from 'react';

const ComponentList = () => (
  <section className="container--wide">
    <h2>Individual CSS files</h2>
    <div className="d-flex justify-content-between">
      <div>
        <h3>Foundations</h3>
        <ul className="doc-list">
          <li>
            <a href="#color">Color</a>
            <small> 1 KB</small>
            <span className="badge m-l-1">beta</span>
          </li>
          <li>
            <a href="#typography">Typography</a>
            <small> 9 KB</small>
          </li>
        </ul>
      </div>
      <div>
        <h3>Components</h3>
        <ul className="doc-list">
          <li>
            <a href="#alerts">Alerts</a>
            <small> 4 KB</small>
          </li>
          <li>
            <a href="#badge">Badge</a>
            <small> 703 bytes</small>
          </li>
          <li>
            <a href="#breadcrumbs">Breadcrumbs</a>
            <small> 240 bytes</small>
          </li>
          <li>
            <a href="#buttons">Buttons</a>
            <small> 30 KB</small>
          </li>
          <li>
            <a href="#media">Media</a>
            <small> 403 bytes</small>
          </li>
          <li>
            <a href="#circles">Circles</a>
            <small> 4 KB</small>
          </li>

          <li>
            <a href="#carousel">Carousel</a>
            <small> 6 KB</small>
          </li>
          <li>
            <a href="#footer">Footer</a>
            <small> 1 KB</small>
          </li>
        </ul>
      </div>
      <div>
        <h3>Layout</h3>
        <ul className="doc-list">
          <li>
            <a href="#columns">Column system</a>
            <small> 14 KB</small>
          </li>
          <li>
            <a href="#flex">Flex</a>
            <small> 5 KB</small>
            <span className="badge m-l-1">beta</span>
          </li>
          <li>
            <a href="#grid">Grid layout</a>
            <small> 2 KB</small>
            <span className="badge m-l-1">beta</span>
          </li>
          <li>
            <a href="#container">Container</a>
            <small> 2 KB</small>
            <span className="badge m-l-1">beta</span>
          </li>
        </ul>
      </div>

      <div>
        <h3>Utilities</h3>
        <ul className="doc-list">
          <li>
            <a href="#spacing">Spacing</a>
            <small> 9 KB</small>
          </li>
          <li>
            <a href="#skew">Skew</a>
            <small> 1 KB</small>
            <span className="badge m-l-1">beta</span>
          </li>
          <li>
            <a href="#background">Background</a>
            <small> 1 KB</small>
            <span className="badge m-l-1">beta</span>
          </li>
        </ul>
      </div>
    </div>
    <h2 className="m-t-4">Grouped CSS packages</h2>
    <div className="d-flex justify-content-between">
      <div>
        <h3>Core</h3>
        <ul className="doc-list">
          <li>
            <a href="#core">Core</a>
            <small> 18 KB</small>
            <ul className="doc-list">
              <li>
                <a href="#typography">Typography</a>
                <small> 9 KB</small>
              </li>
              <li>
                <a href="#headings">Headings</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div>
        <h3>Forms</h3>
        <ul className="doc-list">
          <li>
            <a href="#forms">Forms</a>
            <ul className="doc-list">
              <li>
                <a href="#forms">Forms</a>
                <small> 28 KB</small>
              </li>
              <li>
                <li>
                  <a href="#buttons">Buttons</a>
                  <small> 30 KB</small>
                </li>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div>
        <h3>Header / navbar</h3>
        <ul className="doc-list">
          <li>
            <a href="#navbar">Navbar</a>
            <small> 53 KB</small>
          </li>
        </ul>
      </div>
      <div>
        <h3>All the library</h3>
        <ul className="doc-list">
          <li>
            <a href="">Thalassa</a>
            <small> 159 KB</small>
            <span className="badge m-l-1">beta</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default ComponentList;
