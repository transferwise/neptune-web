import React from 'react';

const Grid = () => (
  <section id="grid" className="container--wide">
    <h1 className="colored-dot">
          Grid layout system
    </h1>
    <span className="badge badge-success">beta</span>
    <h2 className="m-t-4">.d-grid grid--1-1</h2>
    <div className="d-grid grid--1-1">
      <div className="doc-item doc-bg">item</div>
      <div className="doc-item doc-bg">item</div>
    </div>
    <h2 className="m-t-4">.d-grid grid--1-1-1</h2>
    <div className="d-grid grid--1-1-1">
      <div className="doc-item doc-bg">item</div>
      <div className="doc-item doc-bg">item</div>
      <div className="doc-item doc-bg">item</div>
    </div>
    <h2 className="m-t-4">.d-grid grid--1-1-1-1</h2>
    <div className="d-grid grid--1-1-1-1">
      <div className="doc-item doc-bg">item</div>
      <div className="doc-item doc-bg">item</div>
      <div className="doc-item doc-bg">item</div>
      <div className="doc-item doc-bg">item</div>
    </div>
    <h2 className="m-t-4">.d-grid grid--1-1-1-1-1</h2>
    <div className="d-grid grid--1-1-1-1-1">
      <div className="doc-item doc-bg">item</div>
      <div className="doc-item doc-bg">item</div>
      <div className="doc-item doc-bg">item</div>
      <div className="doc-item doc-bg">item</div>
      <div className="doc-item doc-bg">item</div>
    </div>
    <h1 className="colored-dot m-t-5">Span columns</h1>
    <h2 className="m-b-4">5 column based options</h2>
    <h3 className="m-t-4">.d-grid grid--4-1</h3>
    <div className="d-grid grid--4-1">
      <div className="doc-item doc-bg">item</div>
      <div className="doc-item doc-bg">item</div>
    </div>
    <h3 className="m-t-4">.d-grid grid--3-2</h3>
    <div className="d-grid grid--3-2">
      <div className="doc-item doc-bg">item</div>
      <div className="doc-item doc-bg">item</div>
    </div>
    <h3 className="m-t-4">.d-grid grid--2-3</h3>
    <div className="d-grid grid--2-3">
      <div className="doc-item doc-bg">item</div>
      <div className="doc-item doc-bg">item</div>
    </div>
    <h3 className="m-t-4">.d-grid grid--1-4</h3>
    <div className="d-grid grid--1-4">
      <div className="doc-item doc-bg">item</div>
      <div className="doc-item doc-bg">item</div>
    </div>
    <h3 className="m-t-4">.d-grid grid--1-3-1</h3>
    <div className="d-grid grid--1-3-1">
      <div className="doc-item doc-bg">item</div>
      <div className="doc-item doc-bg">item</div>
      <div className="doc-item doc-bg">item</div>
    </div>
    <h2 className="m-b-4 m-t-4">4 column based options</h2>
    <h3 className="m-t-4">.d-grid grid--3-1</h3>
    <div className="d-grid grid--3-1">
      <div className="doc-item doc-bg">item</div>
      <div className="doc-item doc-bg">item</div>
    </div>
    <h3 className="m-t-4">.d-grid grid--2-2</h3>
    <div className="d-grid grid--1-1">
      <div className="doc-item doc-bg">item</div>
      <div className="doc-item doc-bg">item</div>
    </div>
    <h3 className="m-t-4">.d-grid grid--1-3</h3>
    <div className="d-grid grid--1-3">
      <div className="doc-item doc-bg">item</div>
      <div className="doc-item doc-bg">item</div>
    </div>
    <h3 className="m-t-4">.d-grid grid--1-2-1</h3>
    <div className="d-grid grid--1-2-1">
      <div className="doc-item doc-bg">item</div>
      <div className="doc-item doc-bg">item</div>
      <div className="doc-item doc-bg">item</div>
    </div>
    <h2 className="m-b-4 m-t-4">3 column based options</h2>
    <h3 className="m-t-4">.d-grid grid--2-1</h3>
    <div className="d-grid grid--2-1">
      <div className="doc-item doc-bg">item</div>
      <div className="doc-item doc-bg">item</div>
    </div>
    <h3 className="m-t-4">.d-grid grid--1-2</h3>
    <div className="d-grid grid--1-2">
      <div className="doc-item doc-bg">item</div>
      <div className="doc-item doc-bg">item</div>
    </div>
    <h1 className="colored-dot m-t-5">Subgrids</h1>
    <h2 className="m-t-4">.d-grid grid--1-1 inside .d-grid grid--1-1</h2>
    <div className="d-grid grid--1-1">
      <div className="d-grid grid--1-1">
        <div className="doc-item doc-bg">item</div>
        <div className="doc-item doc-bg">item</div>
        <div className="doc-item doc-bg">item</div>
        <div className="doc-item doc-bg">item</div>
      </div>
      <div className="d-grid grid--1-1">
        <div className="doc-item doc-bg">item</div>
        <div className="doc-item doc-bg">item</div>
        <div className="doc-item doc-bg">item</div>
        <div className="doc-item doc-bg">item</div>
      </div>
    </div>
    <h2 className="m-t-4">.d-grid grid--1-1 inside .d-grid grid--1-1</h2>
    <div className="d-grid grid--3-2 m-b-4">
      <div>
        <div className="doc-item doc-bg">item</div>
        <div className="d-grid grid--1-1">
          <div className="doc-item doc-bg">item</div>
          <div className="doc-item doc-bg">item</div>
        </div>
      </div>
      <div className="d-grid grid--1-1">
        <div className="doc-item doc-bg">item</div>
        <div className="doc-item doc-bg">item</div>
        <div className="doc-item doc-bg">item</div>
        <div className="doc-item doc-bg">item</div>
      </div>
    </div>
  </section>
);

export default Grid;
