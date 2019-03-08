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
                <a href="#badge">Badge</a>
              </li>
              <li>
                <a href="#buttons">Buttons</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Layout</h3>
            <ul>
              <li>
                <a href="#flex">Flex</a>
                <span className="badge badge-success m-l-1">New</span>
              </li>
              <li>
                <a href="#grid">Grid layout</a>
                <span className="badge badge-success m-l-1">New</span>
              </li>
              <li>
                <a href="#grid">Column system</a>
              </li>
              <li>
                <a href="#wrap">Wrapping</a>
                <span className="badge badge-success m-l-1">New</span>
              </li>
            </ul>
          </div>

          <div>
            <h3>Styling</h3>
            <ul>
              <li>
                <a href="#skew">Skew</a>
                <span className="badge badge-success m-l-1">New</span>
              </li>
              <li>
                <a href="#background">Background</a>
                <span className="badge badge-success m-l-1">New</span>
              </li>
            </ul>
          </div>
        </div>
        <h2>Grouped CSS packages</h2>
        <div className="d-flex justify-content-between wrap--container">
          <div>
            <h3>Core</h3>
            <ul><li>
              <a href="#core">Core</a>
              <span className="badge badge-success m-l-1">New</span>
            </li>
              <li>
                <a href="#typography">Typography</a>
                <ul>
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
                <a href="#navbar">Navbar</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default ComponentList;
