import React, { Component } from "react";

class Background extends Component {
  render() {
    return (
      <section id="background" className="section">
        <h1 className="wrap--content">
          Background <span className="badge badge-success">new</span>
        </h1>
        <section className="bg--light doc-section doc-block">
          <h2 className="wrap--content">.bg--light</h2>
        </section>
        <section className="bg--dark doc-section">
          <h2 className="wrap--content">.bg--dark</h2>
        </section>
      </section>
    );
  }
}

export default Background;
