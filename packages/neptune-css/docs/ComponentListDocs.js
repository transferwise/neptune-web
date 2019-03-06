import React, { Component } from "react";

class ComponentList extends Component {
  render() {
    return (
      <section className="wrap--content">
        <h1>Components index:</h1>
        <div className="d-flex justify-content-between wrap--container">
          <div>
            <h2>Core</h2>
            <ul>
              <li>
                <a href="#core">Core</a>
                <span className="badge">WIP</span>
              </li>
              <li>
                <a href="#typography">Typography</a>
                <ul>
                  <li>
                    <a href="#headings">Headings</a>
                    <span className="badge">WIP</span>
                    <span className="badge badge-primary m-l-1">BT</span>
                  </li>
                </ul>
              </li>
              <li>Aligment</li>

              <li>Page header</li>
              <li>Lists</li>
            </ul>
          </div>
          <div>
            <h2>Layout</h2>
            <ul>
              <li>
                <a href="#flex">Flex</a>
                <span className="badge badge-success">TL</span>
              </li>
              <li>
                <a href="#grid">Grid layout</a>
                <span className="badge badge-success">TL</span>
              </li>
              <li>
                <a href="#grid">Column system</a>
                <span className="badge badge-primary m-r-1">BT</span>
                <span className="badge">WIP</span>
              </li>
              <li>
                <a href="#wrap">Wrapping</a>
                <span className="badge badge-success">TL</span>
              </li>
            </ul>
          </div>
          <div>
            <h2>Components</h2>
            <ul>
              <li>
                <a href="#alerts">Alerts</a>{" "}
                <span className="badge badge-primary m-r-1">BT</span>{" "}
                <span className="badge">WIP</span>
              </li>
              <li>
                <a href="#badge">Badge</a>
                <span className="badge badge-primary">BT</span>
              </li>
              <li>
                <a href="#breadcrumbs">Breadcrumbs</a>{" "}
                <span className="badge">WIP</span>
                <span className="badge badge-primary">BT</span>
              </li>
              <li>
                <a href="#btn-dropdowns">Button dropdowns</a>
              </li>
              <li>
                <a href="#btn-groups">Button groups</a>{" "}
                <span className="badge">WIP</span>
                <span className="badge badge-primary">BT</span>
              </li>
              <li>
                <a href="#circles">Circles</a>{" "}
                <span className="badge">WIP</span>
                <span className="badge badge-primary">BT</span>
              </li>

              <li>
                <a href="#dropdowns">Dropdowns</a>{" "}
                <span className="badge">WIP</span>
                <span className="badge badge-primary">BT</span>
              </li>
              <li>
                <a href="#droppable">Droppable</a>{" "}
                <span className="badge">WIP</span>{" "}
                <span className="badge badge-primary">BT</span>
              </li>
              <li>
                <a href="#footer">Footer</a> <span className="badge">WIP</span>{" "}
                <span className="badge badge-primary">BT</span>
              </li>
              <li>
                <a href="#input-groups">Input groups</a>{" "}
                <span className="badge">WIP</span>{" "}
                <span className="badge badge-primary">BT</span>
              </li>
              <li>
                <a href="#jumbotron">Jumbotron</a>{" "}
                <span className="badge">WIP</span>{" "}
                <span className="badge badge-primary">BT</span>
              </li>
              <li>
                <a href="#labels">Labels</a>
              </li>
              <li>
                <a href="#list-group">List group</a>
              </li>
              <li>
                <a href="#loaders">Loaders</a>{" "}
                <span className="badge">WIP</span>{" "}
                <span className="badge badge-primary">BT</span>
              </li>
              <li>
                <a href="#logos">Logos</a> <span className="badge">WIP</span>{" "}
                <span className="badge badge-primary">BT</span>
              </li>
              <li>
                <a href="#media">Media object</a>{" "}
                <span className="badge">WIP</span>{" "}
                <span className="badge badge-primary">BT</span>
              </li>
              <li>
                <a href="#navbar">Navbar</a>
                <span className="badge badge-primary">BT</span>
              </li>
              <li>
                <a href="#nav">Navs</a> <span className="badge">WIP</span>{" "}
                <span className="badge badge-primary">BT</span>
              </li>
              <li>
                <a href="#page-header">Page header</a>{" "}
                <span className="badge">WIP</span>{" "}
                <span className="badge badge-primary">BT</span>
              </li>
              <li>
                <a href="#pagination">Pagination</a>{" "}
                <span className="badge">WIP</span>{" "}
                <span className="badge badge-primary">BT</span>
              </li>
              <li>
                <a href="#panels">Panels</a> <span className="badge">WIP</span>{" "}
                <span className="badge badge-primary">BT</span>
              </li>
              <li>
                <a href="#process">Process</a>{" "}
                <span className="badge">WIP</span>{" "}
                <span className="badge badge-primary">BT</span>
              </li>
              <li>
                <a href="#progress">Progress bars</a>{" "}
                <span className="badge">WIP</span>{" "}
                <span className="badge badge-primary">BT</span>
              </li>
              <li>
                <a href="#sequences">Sequences</a>{" "}
                <span className="badge">WIP</span>{" "}
                <span className="badge badge-primary">BT</span>
              </li>
              <li>
                <a href="#responsive-embed">Responsive embed</a>{" "}
                <span className="badge">WIP</span>{" "}
                <span className="badge badge-primary">BT</span>
              </li>
              <li>
                <a href="#table">tables</a>
                <span className="badge badge-primary m-r-1 m-l-1">BT</span>
                <span className="badge">WIP</span>
              </li>
              <li>
                <a href="#thumbnails">Thumbnails</a>
              </li>
              <li>
                <a href="#tiles">Tiles</a> <span className="badge">WIP</span>
              </li>
              <li>
                <a href="#wells">Wells</a> <span className="badge">WIP</span>
              </li>
              <li>Definition lists</li>
              <li>Abbr</li>
              <li>Blockquotes</li>
              <li>Addresses</li>
            </ul>
          </div>
          <div>
            <h2>Styling</h2>
            <ul>
              <li>
                <a href="#skew">Skew</a>
                <span className="badge badge-success">TL</span>
              </li>
              <li>
                <a href="#background">Background</a>
                <span className="badge badge-success m-r-1">TL</span>
                <span className="badge">WIP</span>
              </li>
              <li>
                <a href="#circle-background">Circle backgrounds</a>
                <span className="badge badge-primary m-r-1">BT</span>
                <span className="badge">WIP</span>
              </li>
              <li>
                Contextual colors{" "}
                <span className="badge badge-primary m-r-1">BT</span>
              </li>
              <li>
                Contextual backgrounds{" "}
                <span className="badge badge-primary m-r-1">BT</span>
              </li>
              <li>
                Colored dot{" "}
                <span className="badge badge-primary m-r-1">BT</span>
              </li>
              <li>
                Transformations{" "}
                <span className="badge badge-primary m-r-1">BT</span>
              </li>
              <li>
                Animations <span className="badge badge-success">BT</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default ComponentList;
