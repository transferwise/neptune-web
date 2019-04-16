import React from 'react';

import Refractor from 'react-refractor';
import markup from 'refractor/lang/markup';
import css from 'refractor/lang/css';
import './less/prism.css';

const Spacing = () => (
  <section id="spacing" className="container container--wide">
    <h1 className="colored-dot doc-section__title doc-h1">Spacing.</h1>
    <p>Several utility classes are available for spacing.</p>

    <p>
      The classes are named using the format
      <strong> [property]-[sides]-[size] </strong>
    </p>
    <p>
      The
      <strong> [property] </strong>
      options are:
    </p>
    <ul>
      <li>
        <strong> m </strong>
        - for classes that set
        <strong> margin </strong>
      </li>
      <li>
        <strong> p </strong>
        - for classes that set
        <strong> padding </strong>
      </li>
    </ul>
    <p>
      The
      <strong> sides </strong>
      are:
    </p>
    <ul>
      <li>
        <strong> a </strong>
- for classes that set a
        <strong> margin </strong>
or
        <strong> padding </strong>
on all 4 sides of the element
      </li>
      <li>
        <strong> t </strong>
- for classes that set the
        <strong> top </strong>
side of
              the property
      </li>
      <li>
        <strong> b </strong>
- for classes that set the
        <strong> bottom </strong>
side
              of the property
      </li>
      <li>
        <strong> l </strong>
- for classes that set the
        <strong> left </strong>
side
              of the property
      </li>
      <li>
        <strong> r </strong>
- for classes that set the
        <strong> right </strong>
side
              of the property
      </li>
      <li>
        <strong> x </strong>
- for classes that set both
        <strong> left </strong>
and
        <strong> right </strong>
      </li>
      <li>
        <strong> y </strong>
- for classes that set both
        <strong> top </strong>
and
        <strong> bottom </strong>
      </li>
    </ul>
    <p>
            The
      <strong> sizes </strong>
are:
    </p>
    <p>
            Our base unit for the spacer is:
      <strong>  @spacer: 8px; </strong>
    </p>
    <ul>
      <li>
        <strong>  0 </strong>
- for classes that eliminate the
        <strong>  margin </strong>
or
        <strong>  padding </strong>
by setting it to
        <strong>  0 </strong>
      </li>
      <li>
        <strong>  1 </strong>
- for classes that set the
        <strong>  margin </strong>
or
        <strong>  padding </strong>
to
        <strong>  @spacer * 1 </strong>
(8px)
      </li>
      <li>
        <strong>  2 </strong>
- for classes that set the
        <strong>  margin </strong>
or
        <strong>  padding </strong>
to
        <strong>  @spacer * 2 </strong>
(16px)
      </li>
      <li>
        <strong>  3 </strong>
- for classes that set the
        <strong>  margin </strong>
or
        <strong>  padding </strong>
to
        <strong>  @spacer * 3 </strong>
(24px)
      </li>
      <li>
        <strong> auto </strong>
- for classes that set the
        <strong> margin </strong>
              to auto
      </li>
    </ul>
    <p>And only for vertical cases:</p>
    <ul>
      <li>
        <strong> 4 </strong>
- for classes that set the
        <strong> margin-top, margin-bottom </strong>
or
        <strong> padding-top, padding-bottom </strong>
to
        <strong> @spacer * 4 </strong>
(32px)
      </li>
      <li>
        <strong> 5 </strong>
- for classes that set the
        <strong> margin-top, margin-bottom </strong>
or
        <strong> padding-top, padding-bottom </strong>
to
        <strong> @spacer * 5 </strong>
(40px)
      </li>
    </ul>

    <h2 className="doc-h2 doc-section__subtitle">Global clases</h2>
    <div className="d-flex flex-wrap justify-content-between">
      <div className="m-r-1 m-b-2">
        <span className="bg-default doc-box-dashed d-inline-block">
          <button className="btn btn-primary m-a-1">.m-a-1</button>
        </span>
      </div>
      <div className="m-r-1 m-b-2">
        <span className="bg-default doc-box-dashed d-inline-block">
          <button className="btn btn-primary m-a-2">.m-a-2</button>
        </span>
      </div>
      <div className="m-r-1 m-b-2">
        <span className="bg-default doc-box-dashed d-inline-block">
          <button className="btn btn-primary m-a-3">.m-a-3</button>
        </span>
      </div>
      <div className="m-r-1 m-b-2">
        <span className="bg-default d-inline-block">
          <button className="btn btn-primary p-a-1">.p-a-1</button>
        </span>
      </div>
      <div className="m-r-1 m-b-2">
        <span className="bg-default d-inline-block">
          <button className="btn btn-primary p-a-2">.p-a-2</button>
        </span>
      </div>
      <div className="m-r-1 m-b-2">
        <span className="bg-default d-inline-block">
          <button className="btn btn-primary p-a-3">.p-a-3</button>
        </span>
      </div>
    </div>
    <Refractor
      language="markup"
      value={`
          <button class="btn m-a-1">.m-a-1</button>
          <button class="btn m-a-2">...</button>
          <button class="btn p-a-1">.p-a-1</button>
          <button class="btn p-a-2">...</button>
         `}
    />

    <h2 className="doc-h2 doc-section__subtitle"> Vertical clases </h2>
    <h3 className="doc-h3">Top</h3>
    <div className="d-flex flex-wrap justify-content-between">
      <div className="m-r-1 m-b-2">
        <span className="bg-default doc-box-dashed d-inline-block">
          <button className="btn btn-primary m-t-1">.m-t-1</button>
        </span>
      </div>
      <div className="m-r-1 m-b-2">
        <span className="bg-default doc-box-dashed d-inline-block">
          <button className="btn btn-primary m-t-2">.m-t-2</button>
        </span>
      </div>
      <div className="m-r-1 m-b-2">
        <span className="bg-default doc-box-dashed d-inline-block">
          <button className="btn btn-primary m-t-3">.m-t-3</button>
        </span>
      </div>
      <div className="m-r-1 m-b-2">
        <span className="bg-default doc-box-dashed d-inline-block">
          <button className="btn btn-primary m-t-4">.m-t-4</button>
        </span>
      </div>
      <div className="m-r-1 m-b-2">
        <span className="bg-default doc-box-dashed d-inline-block">
          <button className="btn btn-primary m-t-5">.m-t-5</button>
        </span>
      </div>
    </div>
    <div className="d-flex flex-wrap justify-content-between">
      <div className="m-r-1 m-b-2">
        <span className="bg-default d-inline-block">
          <button className="btn btn-primary p-t-1">.p-t-1</button>
        </span>
      </div>
      <div className="m-r-1 m-b-2">
        <span className="bg-default d-inline-block">
          <button className="btn btn-primary p-t-2">.p-t-2</button>
        </span>
      </div>
      <div className="m-r-1 m-b-2">
        <span className="bg-default d-inline-block">
          <button className="btn btn-primary p-t-3">.p-t-3</button>
        </span>
      </div>
      <div className="m-r-1 m-b-2">
        <span className="bg-default d-inline-block">
          <button className="btn btn-primary p-t-4">.p-t-4</button>
        </span>
      </div>
      <div className="m-r-1 m-b-2">
        <span className="bg-default d-inline-block">
          <button className="btn btn-primary p-t-5">.p-t-5</button>
        </span>
      </div>
    </div>

    <Refractor
      language="markup"
      value={`
        <button class="btn m-t-1">.m-t-1</button>
        <button class="btn m-t-2">...</button>
        <button class="btn p-t-1">.p-t-1</button>
        <button class="btn p-t-2">...</button>
       `}
    />

    <h3 className="doc-h3">Bottom</h3>
    <div className="d-flex flex-wrap justify-content-between">
      <div className="m-r-1 m-b-2">
        <span className="bg-default doc-box-dashed d-inline-block">
          <button className="btn btn-primary m-b-1">.m-b-1</button>
        </span>
      </div>
      <div className="m-r-1 m-b-2">
        <span className="bg-default doc-box-dashed d-inline-block">
          <button className="btn btn-primary m-b-2">.m-b-2</button>
        </span>
      </div>
      <div className="m-r-1 m-b-2">
        <span className="bg-default doc-box-dashed d-inline-block">
          <button className="btn btn-primary m-b-4">.m-b-4</button>
        </span>
      </div>
      <div className="m-r-1 m-b-2">
        <span className="bg-default doc-box-dashed d-inline-block">
          <button className="btn btn-primary m-b-4">.m-b-4</button>
        </span>
      </div>
      <div className="m-r-1 m-b-2">
        <span className="bg-default doc-box-dashed d-inline-block">
          <button className="btn btn-primary m-b-5">.m-b-5</button>
        </span>
      </div>
    </div>
    <div className="d-flex flex-wrap justify-content-between">
      <div className="m-r-1 m-b-2">
        <span className="bg-default d-inline-block">
          <button className="btn btn-primary p-b-1">.p-b-1</button>
        </span>
      </div>
      <div className="m-r-1 m-b-2">
        <span className="bg-default d-inline-block">
          <button className="btn btn-primary p-b-2">.p-b-2</button>
        </span>
      </div>
      <div className="m-r-1 m-b-2">
        <span className="bg-default d-inline-block">
          <button className="btn btn-primary p-b-3">.p-b-3</button>
        </span>
      </div>
      <div className="m-r-1 m-b-2">
        <span className="bg-default d-inline-block">
          <button className="btn btn-primary p-b-4">.p-b-4</button>
        </span>
      </div>
      <div className="m-r-1 m-b-2">
        <span className="bg-default d-inline-block">
          <button className="btn btn-primary p-b-5">.p-b-5</button>
        </span>
      </div>
    </div>
    <Refractor
      language="markup"
      value={`
          <button class="btn m-b-1">.m-b-1</button>
          <button class="btn m-b-2">...</button>
          <button class="btn p-b-1">.p-b-1</button>
          <button class="btn p-b-2">...</button>
         `}
    />


    <h3 className="doc-h3">Y axis</h3>
    <div
      className="bs-example"
      data-example-id="helper-classes-spacing-y"
    >
      <div className="d-flex flex-wrap justify-content-between">
        <div className="m-r-1 m-b-2">
          <span className="bg-default doc-box-dashed d-inline-block">
            <button className="btn btn-primary m-y-1">.m-y-1</button>
          </span>
        </div>
        <div className="m-r-1 m-b-2">
          <span className="bg-default doc-box-dashed d-inline-block">
            <button className="btn btn-primary m-y-2">.m-y-2</button>
          </span>
        </div>
        <div className="m-r-1 m-b-2">
          <span className="bg-default doc-box-dashed d-inline-block">
            <button className="btn btn-primary m-y-3">.m-y-3</button>
          </span>
        </div>
        <div className="m-r-1 m-b-2">
          <span className="bg-default d-inline-block">
            <button className="btn btn-primary p-y-1">.p-y-1</button>
          </span>
        </div>
        <div className="m-r-1 m-b-2">
          <span className="bg-default d-inline-block">
            <button className="btn btn-primary p-y-2">.p-y-2</button>
          </span>
        </div>
        <div className="m-r-1 m-b-2">
          <span className="bg-default d-inline-block">
            <button className="btn btn-primary p-y-3">.p-y-3</button>
          </span>
        </div>
      </div>
    </div>
    <Refractor
      language="markup"
      value={`
        <button class="btn m-y-1">.m-y-1</button>
        <button class="btn m-y-2">...</button>
        <button class="btn p-y-1">.p-y-1</button>
        <button class="btn p-y-2">...</button>
       `}
    />

    <h2 className="doc-h2 doc-section__subtitle">Horizontal clases</h2>
    <h3 className="doc-h3">Left</h3>

    <div className="d-flex flex-wrap justify-content-between">
      <div className="m-r-1 m-b-2">
        <span className="bg-default doc-box-dashed d-inline-block">
          <button className="btn btn-primary m-l-1">.m-l-1</button>
        </span>
      </div>
      <div className="m-r-1 m-b-2">
        <span className="bg-default doc-box-dashed d-inline-block">
          <button className="btn btn-primary m-l-2">.m-l-2</button>
        </span>
      </div>
      <div className="m-r-1 m-b-2">
        <span className="bg-default doc-box-dashed d-inline-block">
          <button className="btn btn-primary m-l-3">.m-l-3</button>
        </span>
      </div>
      <div className="m-r-1 m-b-2">
        <span className="bg-default d-inline-block">
          <button className="btn btn-primary p-l-1">.p-l-1</button>
        </span>
      </div>
      <div className="m-r-1 m-b-2">
        <span className="bg-default d-inline-block">
          <button className="btn btn-primary p-l-2">.p-l-2</button>
        </span>
      </div>
      <div className="m-r-1 m-b-2">
        <span className="bg-default d-inline-block">
          <button className="btn btn-primary p-l-3">.p-l-3</button>
        </span>
      </div>
    </div>
    <Refractor
      language="markup"
      value={`
          <button class="btn m-l-1">.m-l-1</button>
          <button class="btn m-l-2">...</button>
          <button class="btn p-l-1">.p-l-1</button>
          <button class="btn p-l-2">...</button>
         `}
    />

    <h3 className="doc-h3">Right</h3>

    <div className="d-flex flex-wrap justify-content-between">
      <div className="m-r-1 m-b-2">
        <span className="bg-default doc-box-dashed d-inline-block">
          <button className="btn btn-primary m-r-1">.m-r-1</button>
        </span>
      </div>
      <div className="m-r-1 m-b-2">
        <span className="bg-default doc-box-dashed d-inline-block">
          <button className="btn btn-primary m-r-2">.m-r-2</button>
        </span>
      </div>
      <div className="m-r-1 m-b-2">
        <span className="bg-default doc-box-dashed d-inline-block">
          <button className="btn btn-primary m-r-3">.m-r-3</button>
        </span>
      </div>
      <div className="m-r-1 m-b-2">
        <span className="bg-default d-inline-block">
          <button className="btn btn-primary p-r-1">.p-r-1</button>
        </span>
      </div>
      <div className="m-r-1 m-b-2">
        <span className="bg-default d-inline-block">
          <button className="btn btn-primary p-r-2">.p-r-2</button>
        </span>
      </div>
      <div className="m-r-1 m-b-2">
        <span className="bg-default d-inline-block">
          <button className="btn btn-primary p-r-3">.p-r-3</button>
        </span>
      </div>
    </div>

    <Refractor
      language="markup"
      value={`
          <button class="btn m-r-1">.m-r-1</button>
          <button class="btn m-r-2">...</button>
          <button class="btn p-r-1">.p-r-1</button>
          <button class="btn p-r-2">...</button>
         `}
    />

    <h3 className="doc-h3">X axis</h3>
    <div className="d-flex flex-wrap justify-content-between">
      <div className="m-r-1 m-b-2">
        <span className="bg-default doc-box-dashed d-inline-block">
          <button className="btn btn-primary m-x-1">.m-x-1</button>
        </span>
      </div>
      <div className="m-r-1 m-b-2">
        <span className="bg-default doc-box-dashed d-inline-block">
          <button className="btn btn-primary m-x-2">.m-x-2</button>
        </span>
      </div>
      <div className="m-r-1 m-b-2">
        <span className="bg-default doc-box-dashed d-inline-block">
          <button className="btn btn-primary m-x-3">.m-x-3</button>
        </span>
      </div>
      <div className="m-r-1 m-b-2">
        <span className="bg-default d-inline-block">
          <button className="btn btn-primary p-x-1">.p-x-1</button>
        </span>
      </div>
      <div className="m-r-1 m-b-2">
        <span className="bg-default d-inline-block">
          <button className="btn btn-primary p-x-2">.p-x-2</button>
        </span>
      </div>
      <div className="m-r-1 m-b-2">
        <span className="bg-default d-inline-block">
          <button className="btn btn-primary p-x-3">.p-x-3</button>
        </span>
      </div>
    </div>
    <Refractor
      language="markup"
      value={`
          <button class="btn m-x-1">.m-x-1</button>
          <button class="btn m-x-2">...</button>
          <button class="btn p-x-1">.p-x-1</button>
          <button class="btn p-x-2">...</button>
         `}
    />


    <h2 className="doc-h2 doc-section__subtitle">Responsive sections</h2>
    <p>
            These are the sizes of larger, responsive spacing used for
            separating sections of a page:
    </p>
    <ul>
      <li>
        <strong> section-1 </strong>
classes provide
        <strong>16px, 24px or 32px</strong>
              of spacing depending on screen width.
      </li>
      <li>
        <strong> section-2 </strong>
classes provide
        <strong>24px, 48px or 64px</strong>
              of spacing depending on screen width.
      </li>
      <li>
        <strong> section-3 </strong>
classes provide
        <strong> 48px, 72px or 96px </strong>
              of spacing depending on screen width.
      </li>
      <li>
        <strong> section-5 </strong>
classes provide
        <strong> 80px, 120px or 160px </strong>
              of spacing depending on screen width.
      </li>
      <li>
        <strong> section-7 </strong>
classes provide
        <strong> 112px, 168px or 224px </strong>
              of spacing depending on screen width.
      </li>
    </ul>
    <p className="alert alert-info">
            Keep in mind that we jump
      <strong> 4 </strong>
and
      <strong> 6 </strong>
            sizes for the moment, because they are not used.
    </p>
    <p>
            Spacing classes are available for each of the
      <strong> vertical </strong>
            utility classes at each section size e.g.
    </p>

    <h3 className="doc-h3">Top</h3>
    <div className="d-flex justify-content-between align-items-end m-b-4">
      <div className="doc-box-dashed d-inline-block">
        <h6 className="bg-default m-t-section-1">m-t-section-1</h6>
      </div>
      <div className="doc-box-dashed d-inline-block">
        <h6 className="bg-default m-t-section-2">m-t-section-2</h6>
      </div>
      <div className="doc-box-dashed d-inline-block">
        <h6 className="bg-default m-t-section-3">m-t-section-3</h6>
      </div>
      <div className="doc-box-dashed d-inline-block">
        <h6 className="bg-default m-t-section-5">m-t-section-5</h6>
      </div>
      <div className="doc-box-dashed d-inline-block">
        <h6 className="bg-default m-t-section-7">m-t-section-7</h6>
      </div>
      <div className="doc-box-dashed d-inline-block">
        <h6 className="bg-default p-t-section-1">p-t-section-1</h6>
      </div>
      <div className="doc-box-dashed d-inline-block">
        <h6 className="bg-default p-t-section-2">p-t-section-2</h6>
      </div>
      <div className="doc-box-dashed d-inline-block">
        <h6 className="bg-default p-t-section-3">p-t-section-3</h6>
      </div>
      <div className="doc-box-dashed d-inline-block">
        <h6 className="bg-default p-t-section-5">p-t-section-5</h6>
      </div>
      <div className="doc-box-dashed d-inline-block">
        <h6 className="bg-default p-t-section-7">p-t-section-7</h6>
      </div>
    </div>

    <Refractor
      language="markup"
      value={`
          <h6 class="m-t-section-1">m-t-section-1</h6>
          <h6 class="m-t-section-2">...</h6>
          <h6 class="p-t-section-1">p-t-section-1</h6>
          <h6 class="p-t-section-2">...</h6>
         `}
    />

    <h3 className="doc-h3">Bottom</h3>
    <div className="d-flex justify-content-between align-items-start m-b-4">
      <div className="doc-box-dashed d-inline-block">
        <h6 className="bg-default m-b-section-1">m-b-section-1</h6>
      </div>
      <div className="doc-box-dashed d-inline-block">
        <h6 className="bg-default m-b-section-2">m-b-section-2</h6>
      </div>
      <div className="doc-box-dashed d-inline-block">
        <h6 className="bg-default m-b-section-3">m-b-section-3</h6>
      </div>
      <div className="doc-box-dashed d-inline-block">
        <h6 className="bg-default m-b-section-5">m-b-section-5</h6>
      </div>
      <div className="doc-box-dashed d-inline-block">
        <h6 className="bg-default m-b-section-7">m-b-section-7</h6>
      </div>
      <div className="doc-box-dashed d-inline-block">
        <h6 className="bg-default p-b-section-1">p-b-section-1</h6>
      </div>
      <div className="doc-box-dashed d-inline-block">
        <h6 className="bg-default p-b-section-2">p-b-section-2</h6>
      </div>
      <div className="doc-box-dashed d-inline-block">
        <h6 className="bg-default p-b-section-3">p-b-section-3</h6>
      </div>
      <div className="doc-box-dashed d-inline-block">
        <h6 className="bg-default p-b-section-5">p-b-section-5</h6>
      </div>
      <div className="doc-box-dashed d-inline-block">
        <h6 className="bg-default p-b-section-7">p-b-section-7</h6>
      </div>
    </div>
    <Refractor
      language="markup"
      value={`
          <h6 class="m-b-section-1">m-b-section-1</h6>
          <h6 class="m-b-section-2">..</h6>
          <h6 class="p-b-section-1">p-b-section-1</h6>
          <h6 class="p-b-section-2">..</h6>
         `}
    />

    <h3 className="doc-h3">Y axis</h3>
    <div className="d-flex justify-content-between align-items-center m-b-4">
      <div className="doc-box-dashed d-inline-block">
        <h6 className="bg-default m-y-section-1">m-y-section-1</h6>
      </div>
      <div className="doc-box-dashed d-inline-block">
        <h6 className="bg-default m-y-section-2">m-y-section-2</h6>
      </div>
      <div className="doc-box-dashed d-inline-block">
        <h6 className="bg-default m-y-section-3">m-y-section-3</h6>
      </div>
      <div className="doc-box-dashed d-inline-block">
        <h6 className="bg-default m-y-section-5">m-y-section-5</h6>
      </div>
      <div className="doc-box-dashed d-inline-block">
        <h6 className="bg-default m-y-section-7">m-y-section-7</h6>
      </div>
      <div className="doc-box-dashed d-inline-block">
        <h6 className="bg-default p-y-section-1">p-y-section-1</h6>
      </div>
      <div className="doc-box-dashed d-inline-block">
        <h6 className="bg-default p-y-section-2">p-y-section-2</h6>
      </div>
      <div className="doc-box-dashed d-inline-block">
        <h6 className="bg-default p-y-section-3">p-y-section-3</h6>
      </div>
      <div className="doc-box-dashed d-inline-block">
        <h6 className="bg-default p-y-section-5">p-y-section-5</h6>
      </div>
      <div className="doc-box-dashed d-inline-block">
        <h6 className="bg-default p-y-section-7">p-y-section-7</h6>
      </div>
    </div>
    <Refractor
      language="markup"
      value={`
          <h6 class="m-y-section-1">m-y-section-1</h6>
          <h6 class="m-y-section-2">...</h6>

          <h6 class="p-y-section-1">p-y-section-1</h6>
          <h6 class="p-y-section-2">...</h6>
         `}
    />

  </section>
);

export default Spacing;
