import React from 'react';

const Spacing = () => (
  <section id="spacing" className="container--wide">
    <h1 className="colored-dot">
            Spacing
    </h1>
    <p>9 KB</p>
    <p>Several utility classes are available for spacing. </p>
    <p>
            The classes are named using the format
      <code>[property]-[sides]-[size]</code>
    </p>
    <p>
            The
      <i>property</i>
options are:
    </p>
    <ul>
      <li>
        <code>m</code>
- for classes that set
        <code>margin</code>
      </li>
      <li>
        <code>p</code>
- for classes that set
        <code>padding</code>
      </li>
    </ul>
    <p>
            The
      <i>sides</i>
are:
    </p>
    <ul>
      <li>
        <code>a</code>
- for classes that set a
        <code>margin</code>
or
        <code>padding</code>
on all 4 sides of the element
      </li>
      <li>
        <code>t</code>
- for classes that set the
        <code>top</code>
side of
              the property
      </li>
      <li>
        <code>b</code>
- for classes that set the
        <code>bottom</code>
side
              of the property
      </li>
      <li>
        <code>l</code>
- for classes that set the
        <code>left</code>
side
              of the property
      </li>
      <li>
        <code>r</code>
- for classes that set the
        <code>right</code>
side
              of the property
      </li>
      <li>
        <code>x</code>
- for classes that set both
        <code>left</code>
and
        <code>right</code>
      </li>
      <li>
        <code>y</code>
- for classes that set both
        <code>top</code>
and
        <code>bottom</code>
      </li>
    </ul>
    <p>
            The
      <i>sizes</i>
are:
    </p>
    <p>
            Our base unit for the spacer is:
      <code>@spacer: 8px;</code>
    </p>
    <ul>
      <li>
        <code>0</code>
- for classes that eliminate the
        <code>margin</code>
or
        <code>padding</code>
by setting it to
        <code>0</code>
      </li>
      <li>
        <code>1</code>
- for classes that set the
        <code>margin</code>
or
        <code>padding</code>
to
        <code>@spacer * 1</code>
(8px)
      </li>
      <li>
        <code>2</code>
- for classes that set the
        <code>margin</code>
or
        <code>padding</code>
to
        <code>@spacer * 2</code>
(16px)
      </li>
      <li>
        <code>3</code>
- for classes that set the
        <code>margin</code>
or
        <code>padding</code>
to
        <code>@spacer * 3</code>
(24px)
      </li>
      <li>
        <code>auto</code>
- for classes that set the
        <code>margin</code>
              to auto
      </li>
    </ul>
    <p>And only for vertical cases:</p>
    <ul>
      <li>
        <code>4</code>
- for classes that set the
        <code>margin-top, margin-bottom</code>
or
        <code>padding-top, padding-bottom</code>
to
        <code>@spacer * 4</code>
(32px)
      </li>
      <li>
        <code>5</code>
- for classes that set the
        <code>margin-top, margin-bottom</code>
or
        <code>padding-top, padding-bottom</code>
to
        <code>@spacer * 5</code>
(40px)
      </li>
    </ul>

    <h5 id="global-clases">
            Global clases
      <a className="anchorjs-link" href="#global-clases">
        <span className="anchorjs-icon" />
      </a>
    </h5>
    <div
      className="bs-example"
      data-example-id="helper-classes-spacing-global"
    >
      <div className="d-flex flex-wrap justify-content-between">
        <div className="m-r-1 m-b-2">
          <span className="bg-default box-dashed d-inline-block">
            <button className="btn btn-primary m-a-1">.m-a-1</button>
          </span>
        </div>
        <div className="m-r-1 m-b-2">
          <span className="bg-default box-dashed d-inline-block">
            <button className="btn btn-primary m-a-2">.m-a-2</button>
          </span>
        </div>
        <div className="m-r-1 m-b-2">
          <span className="bg-default box-dashed d-inline-block">
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
    </div>
    <figure className="highlight">
      <pre>
        <code className="language-html" data-lang="html">
          <span className="nt">&lt;button</span>
          <span className="na">className=</span>
          <span className="s">"btn m-a-1"</span>
          <span className="nt">&gt;</span>
.m-a-1
          <span className="nt">&lt;/button&gt;</span>
          <span className="nt">&lt;button</span>
          <span className="na">className=</span>
          <span className="s">"btn m-a-2"</span>
          <span className="nt">&gt;</span>
...
          <span className="nt">&lt;/button&gt;</span>
          <span className="nt">&lt;button</span>
          <span className="na">className=</span>
          <span className="s">"btn p-a-1"</span>
          <span className="nt">&gt;</span>
.p-a-1
          <span className="nt">&lt;/button&gt;</span>
          <span className="nt">&lt;button</span>
          <span className="na">className=</span>
          <span className="s">"btn p-a-2"</span>
          <span className="nt">&gt;</span>
...
          <span className="nt">&lt;/button&gt;</span>
        </code>
      </pre>
    </figure>

    <h5 id="vertical-clases">
            Vertical clases
      <a className="anchorjs-link" href="#vertical-clases">
        <span className="anchorjs-icon" />
      </a>
    </h5>

    <div
      className="bs-example"
      data-example-id="helper-classes-spacing-top"
    >
      <h6>Top</h6>
      <div className="d-flex flex-wrap justify-content-between">
        <div className="m-r-1 m-b-2">
          <span className="bg-default box-dashed d-inline-block">
            <button className="btn btn-primary m-t-1">.m-t-1</button>
          </span>
        </div>
        <div className="m-r-1 m-b-2">
          <span className="bg-default box-dashed d-inline-block">
            <button className="btn btn-primary m-t-2">.m-t-2</button>
          </span>
        </div>
        <div className="m-r-1 m-b-2">
          <span className="bg-default box-dashed d-inline-block">
            <button className="btn btn-primary m-t-3">.m-t-3</button>
          </span>
        </div>
        <div className="m-r-1 m-b-2">
          <span className="bg-default box-dashed d-inline-block">
            <button className="btn btn-primary m-t-4">.m-t-4</button>
          </span>
        </div>
        <div className="m-r-1 m-b-2">
          <span className="bg-default box-dashed d-inline-block">
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
    </div>
    <figure className="highlight">
      <pre>
        <code className="language-html" data-lang="html">
          <span className="nt">&lt;button</span>
          <span className="na">className=</span>
          <span className="s">"btn m-t-1"</span>
          <span className="nt">&gt;</span>
.m-t-1
          <span className="nt">&lt;/button&gt;</span>
          <span className="nt">&lt;button</span>
          <span className="na">className=</span>
          <span className="s">"btn m-t-2"</span>
          <span className="nt">&gt;</span>
...
          <span className="nt">&lt;/button&gt;</span>
          <span className="nt">&lt;button</span>
          <span className="na">className=</span>
          <span className="s">"btn p-t-1"</span>
          <span className="nt">&gt;</span>
.p-t-1
          <span className="nt">&lt;/button&gt;</span>
          <span className="nt">&lt;button</span>
          <span className="na">className=</span>
          <span className="s">"btn p-t-2"</span>
          <span className="nt">&gt;</span>
...
          <span className="nt">&lt;/button&gt;</span>
        </code>
      </pre>
    </figure>
    <div className="bs-example" data-example-id="bottom">
      <h6>Bottom</h6>
      <div className="d-flex flex-wrap justify-content-between">
        <div className="m-r-1 m-b-2">
          <span className="bg-default box-dashed d-inline-block">
            <button className="btn btn-primary m-b-1">.m-b-1</button>
          </span>
        </div>
        <div className="m-r-1 m-b-2">
          <span className="bg-default box-dashed d-inline-block">
            <button className="btn btn-primary m-b-2">.m-b-2</button>
          </span>
        </div>
        <div className="m-r-1 m-b-2">
          <span className="bg-default box-dashed d-inline-block">
            <button className="btn btn-primary m-b-4">.m-b-4</button>
          </span>
        </div>
        <div className="m-r-1 m-b-2">
          <span className="bg-default box-dashed d-inline-block">
            <button className="btn btn-primary m-b-4">.m-b-4</button>
          </span>
        </div>
        <div className="m-r-1 m-b-2">
          <span className="bg-default box-dashed d-inline-block">
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
    </div>
    <figure className="highlight">
      <pre>
        <code className="language-html" data-lang="html">
          <span className="nt">&lt;button</span>
          <span className="na">className=</span>
          <span className="s">"btn m-b-1"</span>
          <span className="nt">&gt;</span>
.m-b-1
          <span className="nt">&lt;/button&gt;</span>
          <span className="nt">&lt;button</span>
          <span className="na">className=</span>
          <span className="s">"btn m-b-2"</span>
          <span className="nt">&gt;</span>
...
          <span className="nt">&lt;/button&gt;</span>
          <span className="nt">&lt;button</span>
          <span className="na">className=</span>
          <span className="s">"btn p-b-1"</span>
          <span className="nt">&gt;</span>
.p-b-1
          <span className="nt">&lt;/button&gt;</span>
          <span className="nt">&lt;button</span>
          <span className="na">className=</span>
          <span className="s">"btn p-b-2"</span>
          <span className="nt">&gt;</span>
...
          <span className="nt">&lt;/button&gt;</span>
        </code>
      </pre>
    </figure>

    <h6>Y axis</h6>
    <div
      className="bs-example"
      data-example-id="helper-classes-spacing-y"
    >
      <div className="d-flex flex-wrap justify-content-between">
        <div className="m-r-1 m-b-2">
          <span className="bg-default box-dashed d-inline-block">
            <button className="btn btn-primary m-y-1">.m-y-1</button>
          </span>
        </div>
        <div className="m-r-1 m-b-2">
          <span className="bg-default box-dashed d-inline-block">
            <button className="btn btn-primary m-y-2">.m-y-2</button>
          </span>
        </div>
        <div className="m-r-1 m-b-2">
          <span className="bg-default box-dashed d-inline-block">
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
    <figure className="highlight">
      <pre>
        <code className="language-html" data-lang="html">
          <span className="nt">&lt;button</span>
          <span className="na">className=</span>
          <span className="s">"btn m-y-1"</span>
          <span className="nt">&gt;</span>
.m-y-1
          <span className="nt">&lt;/button&gt;</span>
          <span className="nt">&lt;button</span>
          <span className="na">className=</span>
          <span className="s">"btn m-y-2"</span>
          <span className="nt">&gt;</span>
...
          <span className="nt">&lt;/button&gt;</span>
          <span className="nt">&lt;button</span>
          <span className="na">className=</span>
          <span className="s">"btn p-y-1"</span>
          <span className="nt">&gt;</span>
.p-y-1
          <span className="nt">&lt;/button&gt;</span>
          <span className="nt">&lt;button</span>
          <span className="na">className=</span>
          <span className="s">"btn p-y-2"</span>
          <span className="nt">&gt;</span>
...
          <span className="nt">&lt;/button&gt;</span>
        </code>
      </pre>
    </figure>

    <h5 id="horizontal-clases">
            Horizontal clases
      <a className="anchorjs-link" href="#horizontal-clases">
        <span className="anchorjs-icon" />
      </a>
    </h5>
    <h6>Left</h6>
    <div
      className="bs-example"
      data-example-id="helper-classes-spacing-left"
    >
      <div className="d-flex flex-wrap justify-content-between">
        <div className="m-r-1 m-b-2">
          <span className="bg-default box-dashed d-inline-block">
            <button className="btn btn-primary m-l-1">.m-l-1</button>
          </span>
        </div>
        <div className="m-r-1 m-b-2">
          <span className="bg-default box-dashed d-inline-block">
            <button className="btn btn-primary m-l-2">.m-l-2</button>
          </span>
        </div>
        <div className="m-r-1 m-b-2">
          <span className="bg-default box-dashed d-inline-block">
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
    </div>
    <figure className="highlight">
      <pre>
        <code className="language-html" data-lang="html">
          <span className="nt">&lt;button</span>
          <span className="na">className=</span>
          <span className="s">"btn m-l-1"</span>
          <span className="nt">&gt;</span>
.m-l-1
          <span className="nt">&lt;/button&gt;</span>
          <span className="nt">&lt;button</span>
          <span className="na">className=</span>
          <span className="s">"btn m-l-2"</span>
          <span className="nt">&gt;</span>
...
          <span className="nt">&lt;/button&gt;</span>
          <span className="nt">&lt;button</span>
          <span className="na">className=</span>
          <span className="s">"btn p-l-1"</span>
          <span className="nt">&gt;</span>
.p-l-1
          <span className="nt">&lt;/button&gt;</span>
          <span className="nt">&lt;button</span>
          <span className="na">className=</span>
          <span className="s">"btn p-l-2"</span>
          <span className="nt">&gt;</span>
...
          <span className="nt">&lt;/button&gt;</span>
        </code>
      </pre>
    </figure>
    <h6>Right</h6>
    <div
      className="bs-example"
      data-example-id="helper-classes-spacing-right"
    >
      <div className="d-flex flex-wrap justify-content-between">
        <div className="m-r-1 m-b-2">
          <span className="bg-default box-dashed d-inline-block">
            <button className="btn btn-primary m-r-1">.m-r-1</button>
          </span>
        </div>
        <div className="m-r-1 m-b-2">
          <span className="bg-default box-dashed d-inline-block">
            <button className="btn btn-primary m-r-2">.m-r-2</button>
          </span>
        </div>
        <div className="m-r-1 m-b-2">
          <span className="bg-default box-dashed d-inline-block">
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
    </div>
    <figure className="highlight">
      <pre>
        <code className="language-html" data-lang="html">
          <span className="nt">&lt;button</span>
          <span className="na">className=</span>
          <span className="s">"btn m-r-1"</span>
          <span className="nt">&gt;</span>
.m-r-1
          <span className="nt">&lt;/button&gt;</span>
          <span className="nt">&lt;button</span>
          <span className="na">className=</span>
          <span className="s">"btn m-r-2"</span>
          <span className="nt">&gt;</span>
...
          <span className="nt">&lt;/button&gt;</span>
          <span className="nt">&lt;button</span>
          <span className="na">className=</span>
          <span className="s">"btn p-r-1"</span>
          <span className="nt">&gt;</span>
.p-r-1
          <span className="nt">&lt;/button&gt;</span>
          <span className="nt">&lt;button</span>
          <span className="na">className=</span>
          <span className="s">"btn p-r-2"</span>
          <span className="nt">&gt;</span>
...
          <span className="nt">&lt;/button&gt;</span>
        </code>
      </pre>
    </figure>
    <h6>X axis</h6>
    <div
      className="bs-example"
      data-example-id="helper-classes-spacing-x"
    >
      <div className="d-flex flex-wrap justify-content-between">
        <div className="m-r-1 m-b-2">
          <span className="bg-default box-dashed d-inline-block">
            <button className="btn btn-primary m-x-1">.m-x-1</button>
          </span>
        </div>
        <div className="m-r-1 m-b-2">
          <span className="bg-default box-dashed d-inline-block">
            <button className="btn btn-primary m-x-2">.m-x-2</button>
          </span>
        </div>
        <div className="m-r-1 m-b-2">
          <span className="bg-default box-dashed d-inline-block">
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
    </div>
    <figure className="highlight">
      <pre>
        <code className="language-html" data-lang="html">
          <span className="nt">&lt;button</span>
          <span className="na">className=</span>
          <span className="s">"btn m-x-1"</span>
          <span className="nt">&gt;</span>
.m-x-1
          <span className="nt">&lt;/button&gt;</span>
          <span className="nt">&lt;button</span>
          <span className="na">className=</span>
          <span className="s">"btn m-x-2"</span>
          <span className="nt">&gt;</span>
...
          <span className="nt">&lt;/button&gt;</span>
          <span className="nt">&lt;button</span>
          <span className="na">className=</span>
          <span className="s">"btn p-x-1"</span>
          <span className="nt">&gt;</span>
.p-x-1
          <span className="nt">&lt;/button&gt;</span>
          <span className="nt">&lt;button</span>
          <span className="na">className=</span>
          <span className="s">"btn p-x-2"</span>
          <span className="nt">&gt;</span>
...
          <span className="nt">&lt;/button&gt;</span>
        </code>
      </pre>
    </figure>

    <h3
      id="helper-classes-responsive-sections"
      className="bs-docs-subheader"
    >
            Responsive sections
      <a
        className="anchorjs-link"
        href="#helper-classes-responsive-sections"
      >
        <span className="anchorjs-icon" />
      </a>
    </h3>
    <p>
            These are the sizes of larger, responsive spacing used for
            separating sections of a page:
    </p>
    <ul>
      <li>
        <code>section-1</code>
classes provide
        <strong>16px, 24px or 32px</strong>
              of spacing depending on screen width.
      </li>
      <li>
        <code>section-2</code>
classes provide
        <strong>24px, 48px or 64px</strong>
              of spacing depending on screen width.
      </li>
      <li>
        <code>section-3</code>
classes provide
        <strong>48px, 72px or 96px</strong>
              of spacing depending on screen width.
      </li>
      <li>
        <code>section-5</code>
classes provide
        <strong>80px, 120px or 160px</strong>
              of spacing depending on screen width.
      </li>
      <li>
        <code>section-7</code>
classes provide
        <strong>112px, 168px or 224px</strong>
              of spacing depending on screen width.
      </li>
    </ul>
    <p className="alert alert-info">
            Keep in mind that we jump
      <strong>4</strong>
and
      <strong>6</strong>
            sizes for the moment, because they are not used.
    </p>
    <p>
            Spacing classes are available for each of the
      <strong>vertical</strong>
            utility classes at each section size e.g.
    </p>
    <p />
    <h4 id="top">
            Top
      <a className="anchorjs-link" href="#top">
        <span className="anchorjs-icon" />
      </a>
    </h4>
    <div
      className="bs-example"
      data-example-id="helper-classes-responsive-spacing-top"
    >
      <div className="d-flex justify-content-between align-items-end m-b-4">
        <div className="box-dashed d-inline-block">
          <h6 className="bg-default m-t-section-1">m-t-section-1</h6>
        </div>
        <div className="box-dashed d-inline-block">
          <h6 className="bg-default m-t-section-2">m-t-section-2</h6>
        </div>
        <div className="box-dashed d-inline-block">
          <h6 className="bg-default m-t-section-3">m-t-section-3</h6>
        </div>
        <div className="box-dashed d-inline-block">
          <h6 className="bg-default m-t-section-5">m-t-section-5</h6>
        </div>
        <div className="box-dashed d-inline-block">
          <h6 className="bg-default m-t-section-7">m-t-section-7</h6>
        </div>
        <div className="box-dashed d-inline-block">
          <h6 className="bg-default p-t-section-1">p-t-section-1</h6>
        </div>
        <div className="box-dashed d-inline-block">
          <h6 className="bg-default p-t-section-2">p-t-section-2</h6>
        </div>
        <div className="box-dashed d-inline-block">
          <h6 className="bg-default p-t-section-3">p-t-section-3</h6>
        </div>
        <div className="box-dashed d-inline-block">
          <h6 className="bg-default p-t-section-5">p-t-section-5</h6>
        </div>
        <div className="box-dashed d-inline-block">
          <h6 className="bg-default p-t-section-7">p-t-section-7</h6>
        </div>
      </div>
    </div>

    <figure className="highlight">
      <pre>
        <code className="language-html" data-lang="html">
          <span className="nt">&lt;h6</span>
          <span className="na">className=</span>
          <span className="s">"m-t-section-1"</span>
          <span className="nt">&gt;</span>
m-t-section-1
          <span className="nt">&lt;/h6&gt;</span>
          <span className="nt">&lt;h6</span>
          <span className="na">className=</span>
          <span className="s">"m-t-section-2"</span>
          <span className="nt">&gt;</span>
...
          <span className="nt">&lt;/h6&gt;</span>
          <span className="nt">&lt;h6</span>
          <span className="na">className=</span>
          <span className="s">"p-t-section-1"</span>
          <span className="nt">&gt;</span>
p-t-section-1
          <span className="nt">&lt;/h6&gt;</span>
          <span className="nt">&lt;h6</span>
          <span className="na">className=</span>
          <span className="s">"p-t-section-2"</span>
          <span className="nt">&gt;</span>
...
          <span className="nt">&lt;/h6&gt;</span>
        </code>
      </pre>
    </figure>

    <h4 id="bottom">
            Bottom
      <a className="anchorjs-link" href="#bottom">
        <span className="anchorjs-icon" />
      </a>
    </h4>
    <div
      className="bs-example"
      data-example-id="helper-classes-responsive-spacing-bottom"
    >
      <div className="d-flex justify-content-between align-items-start m-b-4">
        <div className="box-dashed d-inline-block">
          <h6 className="bg-default m-b-section-1">m-b-section-1</h6>
        </div>
        <div className="box-dashed d-inline-block">
          <h6 className="bg-default m-b-section-2">m-b-section-2</h6>
        </div>
        <div className="box-dashed d-inline-block">
          <h6 className="bg-default m-b-section-3">m-b-section-3</h6>
        </div>
        <div className="box-dashed d-inline-block">
          <h6 className="bg-default m-b-section-5">m-b-section-5</h6>
        </div>
        <div className="box-dashed d-inline-block">
          <h6 className="bg-default m-b-section-7">m-b-section-7</h6>
        </div>
        <div className="box-dashed d-inline-block">
          <h6 className="bg-default p-b-section-1">p-b-section-1</h6>
        </div>
        <div className="box-dashed d-inline-block">
          <h6 className="bg-default p-b-section-2">p-b-section-2</h6>
        </div>
        <div className="box-dashed d-inline-block">
          <h6 className="bg-default p-b-section-3">p-b-section-3</h6>
        </div>
        <div className="box-dashed d-inline-block">
          <h6 className="bg-default p-b-section-5">p-b-section-5</h6>
        </div>
        <div className="box-dashed d-inline-block">
          <h6 className="bg-default p-b-section-7">p-b-section-7</h6>
        </div>
      </div>
    </div>
    <figure className="highlight">
      <pre>
        <code className="language-html" data-lang="html">
          <span className="nt">&lt;h6</span>
          <span className="na">className=</span>
          <span className="s">"m-b-section-1"</span>
          <span className="nt">&gt;</span>
m-b-section-1
          <span className="nt">&lt;/h6&gt;</span>
          <span className="nt">&lt;h6</span>
          <span className="na">className=</span>
          <span className="s">"m-b-section-2"</span>
          <span className="nt">&gt;</span>
..
          <span className="nt">&lt;/h6&gt;</span>
          <span className="nt">&lt;h6</span>
          <span className="na">className=</span>
          <span className="s">"p-b-section-1"</span>
          <span className="nt">&gt;</span>
p-b-section-1
          <span className="nt">&lt;/h6&gt;</span>
          <span className="nt">&lt;h6</span>
          <span className="na">className=</span>
          <span className="s">"p-b-section-2"</span>
          <span className="nt">&gt;</span>
..
          <span className="nt">&lt;/h6&gt;</span>
        </code>
      </pre>
    </figure>

    <h4 id="y-axis">
            Y axis
      <a className="anchorjs-link" href="#y-axis">
        <span className="anchorjs-icon" />
      </a>
    </h4>
    <div
      className="bs-example"
      data-example-id="helper-classes-responsive-spacing-y"
    >
      <div className="row m-b-4">
        <div className="box-dashed d-inline-block">
          <h6 className="bg-default m-y-section-1">m-y-section-1</h6>
        </div>
        <div className="box-dashed d-inline-block">
          <h6 className="bg-default m-y-section-2">m-y-section-2</h6>
        </div>
        <div className="box-dashed d-inline-block">
          <h6 className="bg-default m-y-section-3">m-y-section-3</h6>
        </div>
        <div className="box-dashed d-inline-block">
          <h6 className="bg-default m-y-section-5">m-y-section-5</h6>
        </div>
        <div className="box-dashed d-inline-block">
          <h6 className="bg-default m-y-section-7">m-y-section-7</h6>
        </div>
      </div>
      <div className="row">
        <div className="box-dashed d-inline-block">
          <h6 className="bg-default p-y-section-1">p-y-section-1</h6>
        </div>
        <div className="box-dashed d-inline-block">
          <h6 className="bg-default p-y-section-2">p-y-section-2</h6>
        </div>
        <div className="box-dashed d-inline-block">
          <h6 className="bg-default p-y-section-3">p-y-section-3</h6>
        </div>
        <div className="box-dashed d-inline-block">
          <h6 className="bg-default p-y-section-5">p-y-section-5</h6>
        </div>
        <div className="box-dashed d-inline-block">
          <h6 className="bg-default p-y-section-7">p-y-section-7</h6>
        </div>
      </div>
    </div>
    <figure className="highlight">
      <pre>
        <code className="language-html" data-lang="html">
          <span className="nt">&lt;h6</span>
          <span className="na">className=</span>
          <span className="s">"m-y-section-1"</span>
          <span className="nt">&gt;</span>
m-y-section-1
          <span className="nt">&lt;/h6&gt;</span>
          <span className="nt">&lt;h6</span>
          <span className="na">className=</span>
          <span className="s">"m-y-section-2"</span>
          <span className="nt">&gt;</span>
...
          <span className="nt">&lt;/h6&gt;</span>
          <span className="nt">&lt;h6</span>
          <span className="na">className=</span>
          <span className="s">"p-y-section-1"</span>
          <span className="nt">&gt;</span>
p-y-section-1
          <span className="nt">&lt;/h6&gt;</span>
          <span className="nt">&lt;h6</span>
          <span className="na">className=</span>
          <span className="s">"p-y-section-2"</span>
          <span className="nt">&gt;</span>
...
          <span className="nt">&lt;/h6&gt;</span>
        </code>
      </pre>
    </figure>
  </section>
);

export default Spacing;
