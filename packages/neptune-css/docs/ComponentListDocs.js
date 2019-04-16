import React from 'react';

const ComponentList = () => (
  <section className="container container--wide">
    <h2 className="doc-section__title">Individual CSS files</h2>
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
            <a href="#blocks">Blocks</a>
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
            <a href="#navbar">Navbar</a>
            <small> 54 KB</small>
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
            <a href="#utilities">Utilities</a>
            <small> 1 KB</small>
          </li>
          <li>
            <a href="#spacing">Spacing</a>
            <small> 9 KB</small>
          </li>
          <li>
            <a href="#circle-backgrounds">Circle Backgrounds</a>
            <small> 1 KB</small>
          </li>
          <li>
            <a href="#skew">Skew</a>
            <small> 1 KB</small>
            <span className="badge m-l-1">beta</span>
          </li>
          <li>
            <a href="#background">Background</a>
            <small> 4 KB</small>
            <span className="badge m-l-1">beta</span>
          </li>
        </ul>
      </div>
    </div>
    <h2 className="m-t-4 doc-section__title">Grouped CSS packages</h2>
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
            <ul className="doc-list">
              <li>
                <a href="#forms">Forms</a>
                <small> 28 KB</small>
              </li>
              <li>
                <a href="#buttons">Buttons</a>
                <small> 30 KB</small>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div>
        <h3>Public navigation</h3>
        <ul className="doc-list">
          <li>
            <a href="#publicNavigation">Public Navigation</a>
            <small> 53 KB</small>
            <ul>
              <li>
                <a href="#navbar">Navbar</a>
                <small> 53 KB</small>
              </li>
              <li>
                <a href="#publicNavigation">Public Navigation</a>
                <small> 7 KB</small>
              </li>
              <li>
                <a href="#utilities">Utilities</a>
                <small> 1 KB</small>
              </li>
            </ul>
          </li>

        </ul>
      </div>
      <div>
        <h3>All the library</h3>
        <ul className="doc-list">
          <li>
            <a href="">Neptune CSS</a>
            <small> 159 KB</small>
            <span className="badge m-l-1">beta</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default ComponentList;
