import React from "react";

const Flex = () => (
  <section id="flex" className="wrap--content section">
    <h1 className="colored-dot">
          Flexbox system
      {' '}
      <span className="badge badge-success">new</span>
    </h1>
    <p className="lead">7kB minified</p>
    <div className="doc-block">
      <h2 className="doc-info">.d-flex</h2>
      <div className="d-flex doc-bg">
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
      </div>
    </div>
    <div className="doc-block">
      <h2 className="doc-info">.d-inline-flex</h2>
      <div className="d-inline-flex doc-bg">
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
      </div>
    </div>
    <div className="doc-block">
      <h2 className="doc-info">.flex-column</h2>
      <div className="d-flex flex-column doc-bg">
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
      </div>
    </div>
    <div className="doc-block">
      <h2 className="doc-info">.flex-row</h2>
      <div className="d-flex flex-row doc-bg">
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
      </div>
    </div>
    <div className="doc-block">
      <h2 className="doc-info">justify-content</h2>
      <h3>.justify-content-start</h3>
      <div className="d-flex justify-content-start doc-bg">
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
      </div>
    </div>
    <div className="doc-block">
      <h3>.justify-content-center</h3>
      <div className="d-flex justify-content-center doc-bg">
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
      </div>
    </div>
    <div className="doc-block">
      <h3>.justify-content-end</h3>
      <div className="d-flex justify-content-end doc-bg">
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
      </div>
    </div>
    <div className="doc-block">
      <h3>.justify-content-between</h3>
      <div className="d-flex justify-content-between doc-bg">
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
      </div>
    </div>
    <div className="doc-block">
      <h3>.justify-content-around</h3>
      <div className="d-flex justify-content-around doc-bg">
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
      </div>
    </div>
    <div className="doc-block">
      <h2>Align-items</h2>
      <h3>.align-items-start</h3>
      <div className="d-flex doc-box align-items-start doc-bg">
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
      </div>
    </div>
    <div className="doc-block">
      <h3>.align-items-center</h3>
      <div className="d-flex doc-box align-items-center doc-bg">
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
      </div>
    </div>
    <div className="doc-block">
      <h3>.align-items-end</h3>
      <div className="d-flex doc-box align-items-end doc-bg">
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
      </div>
    </div>
    <div className="doc-block">
      <h3>.align-items-baseline</h3>
      <div className="d-flex doc-box align-items-baseline doc-bg">
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
      </div>
    </div>
    <div className="doc-block">
      <h3>.align-items-stretch</h3>
      <div className="d-flex doc-box align-items-stretch doc-bg">
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
      </div>
    </div>
    <div className="doc-block">
      <h3>Align-self</h3>
      <div className="d-flex doc-box doc-bg">
        <span className="doc-item">item</span>
        <span className="doc-item align-self-start">.align-self-start</span>
        <span className="doc-item align-self-center">
              .align-self-center
        </span>
        <span className="doc-item align-self-end">.align-self-end</span>
        <span className="doc-item align-self-baseline">
              .align-self-baseline
        </span>
        <span className="doc-item align-self-stretch">
              .align-self-stretch
        </span>
      </div>
    </div>
    <div className="doc-block">
      <h2>Wrapping</h2>
      <h3>.flex-nowrap</h3>
      <div className="d-flex flex-nowrap doc-bg">
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
      </div>
    </div>
    <div className="doc-block">
      <h3>.flex-wrap</h3>
      <div className="d-flex flex-wrap doc-bg">
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
        <span className="doc-item">item</span>
      </div>
    </div>
    <div className="doc-block">
      <h3>Order</h3>
      <h3>.order-0, .order-1, .order-2, .order-3</h3>
      <div className="d-flex doc-box doc-bg">
        <span className="doc-item order-3">First item</span>
        <span className="doc-item order-2">Second item</span>
        <span className="doc-item order-1">Third item</span>
        <span className="doc-item order-0">Fourth item</span>
      </div>
    </div>
  </section>
    );

export default Flex;
