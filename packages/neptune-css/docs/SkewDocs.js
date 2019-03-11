import React from "react";

const Skew = () => (
  <section className="section" id="skew">
    <h1 className="wrap--content colored-dot">
          Skew system
      <span className="badge badge-success">new</span>
    </h1>
    <p className="wrap--content lead">Skew of 2deg using clip-path</p>
    <div className="skew doc-bg--dark doc-section doc-block d-flex align-items-center justify-content-center">
      <h2 className="doc-text--inverse">.skew</h2>
    </div>
    <div className="skew--negative doc-bg--dark doc-section doc-block d-flex align-items-center justify-content-center">
      <h2 className="doc-text--inverse">.skew--negative</h2>
    </div>
    <div className="skew--top doc-bg--dark doc-section doc-block d-flex align-items-center justify-content-center">
      <h2 className="doc-text--inverse">.skew--top</h2>
    </div>
    <div className="skew--top-negative doc-bg--dark doc-section doc-block d-flex align-items-center justify-content-center">
      <h2 className="doc-text--inverse">.skew--top-negative</h2>
    </div>
    <div className="skew--bottom doc-bg--dark doc-section doc-block d-flex align-items-center justify-content-center">
      <h2 className="doc-text--inverse">.skew--bottom</h2>
    </div>
    <div className="skew--bottom-negative doc-bg--dark doc-section doc-block d-flex align-items-center justify-content-center">
      <h2 className="doc-text--inverse">.skew--bottom-negative</h2>
    </div>
  </section>
    );

export default Skew;
