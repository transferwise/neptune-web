import React, { Component } from "react";

class ComponentList extends Component {
  render() {
    return (
      <section className="wrap--content">
        <h2>Individual CSS files</h2>
        <div className="d-flex justify-content-between wrap--container">
          <div>
            <h3>Components</h3>
            <ul>
              <li>
                <a href="#badge">Badge</a> <small>703 bytes</small>
              </li>
              <li>
                <a href="#buttons">Buttons</a> <small>30 KB</small>
              </li>
              <li>
                <a href="#media">Media</a> <small>403 bytes</small>
              </li>
              <li>
                <a href="#circles">Circles</a> <small>4 KB</small>
              </li>
              <li>
                <a href="#typography">Typography</a> <small>2 KB</small>
              </li>
            </ul>
          </div>
          <div>
            <h3>Layout</h3>
            <ul>
              <li>
                <a href="#flex">Flex</a> <small>5 KB</small>
                <span className="badge badge-success m-l-1">New</span>
              </li>
              <li>
                <a href="#grid">Grid layout</a> <small>2 KB</small>
                <span className="badge badge-success m-l-1">New</span>
              </li>
              <li>
                <a href="#grid">Column system</a>
              </li>
              <li>
                <a href="#wrap">Wrapping</a> <small>2 KB</small>
                <span className="badge badge-success m-l-1">New</span>
              </li>
            </ul>
          </div>

          <div>
            <h3>Styling</h3>
            <ul>
              <li>
                <a href="#skew">Skew</a> <small>1 KB</small>
                <span className="badge badge-success m-l-1">New</span>
              </li>
              <li>
                <a href="#background">Background</a> <small>1 KB</small>
                <span className="badge badge-success m-l-1">New</span>
              </li>
            </ul>
          </div>
        </div>
        <h2>Grouped CSS packages</h2>
        <div className="d-flex justify-content-between wrap--container">
          <div>
            <h3>Core</h3>
            <ul>
              <li>
              <a href="#core">Core</a> <small>18 KB</small>
              <ul>
                <li>
                  <a href="#typography">Typography</a> <small>2 KB</small>
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
          </div>
          <div>
            <h3>Header / navbar</h3>
            <ul>
              <li>
                <a href="#navbar">Navbar</a> <small>100 KB</small>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default ComponentList;
