import React from 'react';
import { PublicNavigation } from '@transferwise/public-navigation';

import Refractor from 'react-refractor';
import javascript from 'refractor/lang/javascript';
import './less/prism.css';

const HeaderDoc = () => (
  <section id="navbar" className="section">
    <a href="#navbar" className="doc-menu--sticky">
      <svg viewBox="0 0 24 24" width="24" id="menu" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 3.5h20v1H2zM2 11.5h20v1H2zM2 19.5h20v1H2z" />
      </svg>
    </a>
    <div className="container container--wide">
      <h1 className="colored-dot doc-section__title">Navbar.</h1>
      <ul className="nav doc-colums--4 m-b-4">
        <li className=""><a href="#navbar-default">Default navbar</a></li>
        <li className="active"><a href="#navbar-brand-image">Brand image</a></li>
        <li><a href="#navbar-forms">Forms</a></li>
        <li><a href="#navbar-buttons">Buttons</a></li>
        <li><a href="#navbar-text">Text</a></li>
        <li><a href="#navbar-links">Non-nav links</a></li>
        <li><a href="#navbar-component-alignment">Component alignment</a></li>
        <li><a href="#navbar-fixed-top">Fixed to top</a></li>
        <li><a href="#navbar-fixed-bottom">Fixed to bottom</a></li>
        <li><a href="#navbar-static-top">Static top</a></li>
        <li><a href="#navbar-inverted">Inverted navbar</a></li>
        <li><a href="#navbar-nested">Nested navbar</a></li>
        <li><a href="#navbar-secondary">Secondary navbar</a></li>
      </ul>
      <h2 className="doc-section__subtitle">Default navbar</h2>
      <p>Navbars are responsive meta components that serve as navigation headers for your application or site. They begin collapsed (and are toggleable) in mobile views and become horizontal as the available viewport width increases.</p>

      <p><strong className="text-danger">Justified navbar nav links are currently not supported.</strong></p>
      <div className="alert alert-warning">
        <h4>Overflowing content</h4>
        <p>Since the navbar system does not know how much space the content in your navbar needs, you might run into issues with content wrapping into a second row. To resolve this, you can:</p>
        <ol type="a">
          <li>Reduce the amount or width of navbar items.</li>
          <li>
Hide certain navbar items at certain screen sizes using
            <a href="../css/#responsive-utilities"> responsive utility classes</a>
.
          </li>
          <li>
Change the point at which your navbar switches between collapsed and horizontal mode. Customize the
            <code>@grid-float-breakpoint</code>
            {' '}
variable or add your own media query.
          </li>
        </ol>
      </div>
      <div className="alert alert-danger" id="callout-navbar-js">
        <h4>Requires JavaScript plugin</h4>
        <p>
If JavaScript is disabled and the viewport is narrow enough that the navbar collapses, it will be impossible to expand the navbar and view the content within the
          <code>.navbar-collapse</code>
.
        </p>
        <p>
The responsive navbar requires the
          {' '}
          <a href="../javascript/#collapse">collapse plugin</a>
          {' '}
to be included in your version of Bootstrap.
        </p>
      </div>
      <div className="alert alert-info" id="callout-navbar-breakpoint">
        <h4>Changing the collapsed mobile navbar breakpoint</h4>
        <p>
The navbar collapses into its vertical mobile view when the viewport is narrower than
          {' '}
          <code>@grid-float-breakpoint</code>
, and expands into its horizontal non-mobile view when the viewport is at least
          {' '}
          <code>@grid-float-breakpoint</code>
          {' '}
in width. Adjust this variable in the Less source to control when the navbar collapses/expands. The default value is
          <code>768px</code>
          {' '}
(the smallest "small" or "tablet" screen).
        </p>
      </div>
      <div className="alert alert-warning" id="callout-navbar-role">
        <h4>Make navbars accessible</h4>
        <p>
Be sure to use a
          <code>&lt;nav&gt;</code>
          {' '}
element or, if using a more generic element such as a
          <code>&lt;div&gt;</code>
, add a
          <code>role="navigation"</code>
          {' '}
to every navbar to explicitly identify it as a landmark region for users of assistive technologies.
        </p>
      </div>
      <div className="bs-example">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand" href="#">Brand</a>
            </div>

            <div className="collapse navbar-collapse navbar-collapse-with-panel" id="bs-example-navbar-collapse-1">
              <a className="cover collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-controls="bs-example-navbar-collapse-1" aria-expanded="false" />
              <div className="navbar-collapse-panel">
                <ul className="nav navbar-nav">
                  <li className="active">
                    <a href="#">
Link
                      <span className="sr-only">(current)</span>
                    </a>
                  </li>
                </ul>
                <form className="navbar-form navbar-left" role="search">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Search" />
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <ul className="nav navbar-nav navbar-right">
                  <li><a href="#">Link</a></li>
                  <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
Dropdown
                      <span className="caret" />
                    </a>
                    <ul className="dropdown-menu" role="menu">
                      <li><a href="#">Action</a></li>
                      <li><a href="#">Another action</a></li>
                      <li><a href="#">Something else here</a></li>
                      <li className="divider" />
                      <li><a href="#">Separated link</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <a href="#" role="button" className="navbar-toggle close collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-controls="bs-example-navbar-collapse-1" aria-expanded="false">×</a>
            </div>
          </div>
        </nav>
      </div>
      <Refractor
        language="markup"
        value={`
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Brand</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse navbar-collapse-with-panel" id="bs-example-navbar-collapse-1">
      <a class="cover collapsed"
          data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1"
          aria-controls="bs-example-navbar-collapse-1"
          aria-expanded="false">
      <div class="navbar-collapse-panel">
        <ul class="nav navbar-nav">
          <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
          <li><a href="#">Link</a></li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown <span class="caret"></span></a>
            <ul class="dropdown-menu" role="menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li class="divider"></li>
              <li><a href="#">Separated link</a></li>
              <li class="divider"></li>
              <li><a href="#">One more separated link</a></li>
            </ul>
          </li>
        </ul>
        <form class="navbar-form navbar-left" role="search">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Search">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#">Link</a></li>
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown <span class="caret"></span></a>
            <ul class="dropdown-menu" role="menu">
              <li><a href="#">Action</a></li>
              <li><a href="#">Another action</a></li>
              <li><a href="#">Something else here</a></li>
              <li class="divider"></li>
              <li><a href="#">Separated link</a></li>
            </ul>
          </li>
        </ul>
      </div><!-- /.navbar-collapse-panel -->
      <a href="#" role="button"
          class="navbar-toggle close collapsed"
          data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1"
          aria-controls="bs-example-navbar-collapse-1"
          aria-expanded="false">&times;</a>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
         `}
      />
      <h2 className="doc-section__subtitle" id="navbar-brand-image">Brand image</h2>
      <p>
Replace the navbar brand with your own image by swapping the text for an
        <code>&lt;img&gt;</code>
. Since the
        <code>.navbar-brand</code>
        {' '}
has its own padding and height, you may need to override some CSS depending on your image.
      </p>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#" />
          </div>
        </div>
      </nav>
      <Refractor
        language="markup"
        value={`
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">
        <img alt="Brand" src="...">
      </a>
    </div>
  </div>
</nav>
       `}
      />
    </div>
  </section>
);


export default HeaderDoc;
