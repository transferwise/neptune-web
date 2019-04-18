import React from 'react';

import Refractor from 'react-refractor';
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
(         the smallest "small" or "tablet" screen).
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
      <h2 className="doc-section__subtitle" id="navbar-forms">Forms</h2>
      <p>
        Place form content within
        <code>.navbar-form</code>
        {' '}
        for proper vertical alignment and collapsed behavior in narrow viewports. Use the alignment options to decide where it resides within the navbar content.
      </p>
      <p>
        As a heads up,
        <code>.navbar-form</code>
        {' '}
        shares much of its code with
        <code>.form-inline</code>
        {' '}
        via mixin.
        <strong className="text-danger">Some form controls, like input groups, may require fixed widths to be show up properly within a navbar.</strong>
      </p>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="#">Brand</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
            <form className="navbar-form navbar-left" role="search">
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Search" />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </nav>
      <Refractor
        language="markup"
        value={`
  <form class="navbar-form navbar-left" role="search">
    <div class="form-group">
      <input type="text" class="form-control" placeholder="Search">
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
       `}
      />
      <div className="alert alert-warning">
        <h4>Always add labels</h4>
        <p>
          Screen readers will have trouble with your forms if you don't include a label for every input. For these inline forms, you can hide the labels using the
          <code>.sr-only</code>
          {' '}
          class. There are further alternative methods of providing a label for assistive technologies, such as the
          {' '}
          <code>aria-label</code>
          ,
          {' '}
          <code>aria-labelledby</code>
          {' '}
          or
          {' '}
          <code>title</code>
          {' '}
          attribute. If none of these is present, screen readers may resort to using the
          {' '}
          <code>placeholder</code>
          {' '}
          attribute, if present, but note that use of
          {' '}
          <code>placeholder</code>
          {' '}
          as a replacement for other labelling methods is not advised.
        </p>
      </div>
      <h2 className="doc-section__subtitle" id="navbar-buttons">Buttons</h2>
      <p>
        Add the
        <code>.navbar-btn</code>
        {' '}
        class to
        <code>&lt;button&gt;</code>
        {' '}
        elements not residing in a
        <code>&lt;form&gt;</code>
        {' '}
        to vertically center them in the navbar.
      </p>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-3" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="#">Brand</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-3">
            <button type="button" className="btn btn-primary navbar-btn">Sign in</button>
          </div>
        </div>
      </nav>
      <Refractor
        language="markup"
        value={`
<button type="button" class="btn btn-primary navbar-btn">Sign in</button>
       `}
      />
      <div className="alert alert-warning" id="callout-navbar-btn-context">
        <h4>Context-specific usage</h4>
        <p>
          Like the standard
          <a href="../css/#buttons">button classes</a>
          ,
          <code>.navbar-btn</code>
          {' '}
          can be used on
          <code>&lt;a&gt;</code>
          {' '}
          and
          <code>&lt;input&gt;</code>
          {' '}
          elements. However, neither
          <code>.navbar-btn</code>
          {' '}
          nor the standard button classes should be used on
          <code>&lt;a&gt;</code>
          {' '}
          elements within
          <code>.navbar-nav</code>
          .
        </p>
      </div>
      <h2 className="doc-section__subtitle" id="navbar-title">Title</h2>
      <p>
        Add a text title with the
        <code>.navbar-title</code>
        {' '}
        class, normally on a
      heading class appropriate.
      </p>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <h1 className="navbar-title">Title</h1>
          <ul className="nav navbar-nav navbar-right">
            <li className="active">
              <a href="#">
                Link
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li><a href="#">Link</a></li>
          </ul>
        </div>
      </nav>
      <Refractor
        language="markup"
        value={`
<h1 class="navbar-title">Title</h1>
       `}
      />
      <h2 className="doc-section__subtitle" id="navbar-text">Text</h2>
      <p>
        Wrap strings of text in an element with
        <code>.navbar-text</code>
        , usually on a
        <code>&lt;p&gt;</code>
        {' '}
        tag for proper leading and color.
      </p>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-4" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="#">Brand</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-4">
            <p className="navbar-text">Signed in as Kristo Käärmann</p>
          </div>
        </div>
      </nav>
      <Refractor
        language="markup"
        value={`
<p class="navbar-text">Signed in as Kristo Käärmann</p>
       `}
      />
      <h2 className="doc-section__subtitle" id="navbar-links">Non-nav links</h2>
      <p>
        For folks using standard links that are not within the regular navbar navigation component, use the
        <code>.navbar-link</code>
        {' '}
        class to add the proper colors for the default and inverse navbar options.
      </p>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-5" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="#">Brand</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-5">
            <p className="navbar-text navbar-right">
              Signed in as
              <a href="#" className="navbar-link">Kristo Käärmann</a>
            </p>
          </div>
        </div>
      </nav>
      <Refractor
        language="markup"
        value={`
<p class="navbar-text navbar-right">Signed in as <a href="#" class="navbar-link">Kristo Käärmann</a></p>
       `}
      />
      <h2 className="doc-section__subtitle" id="navbar-component-alignment">Component alignment</h2>
      <p>
        Align nav links, forms, buttons, or text, using the
        <code>.navbar-left</code>
        {' '}
        or
        <code>.navbar-right</code>
        {' '}
        utility classes. Both classes will add a CSS float in the specified direction. For example, to align nav links, put them in a separate
        <code>&lt;ul&gt;</code>
        {' '}
        with the respective utility class applied.
      </p>
      <p>
        These classes are mixin-ed versions of
        <code>.pull-left</code>
        {' '}
        and
        <code>.pull-right</code>
        , but they're scoped to media queries for easier handling of navbar components across device sizes.
      </p>
      <div className="alert alert-warning">
        <h4>Right aligning multiple components</h4>
        <p>
          Navbars currently have a limitation with multiple
          <code>.navbar-right</code>
          {' '}
          classes. To properly space content, we use negative margin on the last
          <code>.navbar-right</code>
          {' '}
          element. When there are multiple elements using that class, these margins don't work as intended.
        </p>
        <p>We'll revisit this when we can rewrite that component in v4.</p>
      </div>
      <h2 className="doc-section__subtitle" id="navbar-fixed-top">Fixed to top</h2>
      <p>
        Add
        <code>.navbar-fixed-top</code>
        {' '}
        and include a
        <code>.container</code>
        {' '}
        or
        <code>.container-fluid</code>
        {' '}
        to center and pad navbar content.
      </p>
      <div className="doc-example doc-navbar-top-example">
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-6" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand" href="#">Brand</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-6">
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#">Link</a></li>
                <li><a href="#">Link</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Refractor
        language="markup"
        value={`
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      ...
    </div>
  </nav>
           `}
      />
      <div className="alert alert-danger" id="callout-navbar-fixed-top-padding">
        <h4>Body padding required</h4>
        <p>
          The fixed navbar will overlay your other content, unless you add
          <code>padding</code>
          {' '}
          to the top of the
          <code>&lt;body&gt;</code>
          . Try out your own values or use our snippet below. Tip: By default, the navbar is 56px high.
        </p>
        <Refractor
          language="css"
          value={`
body { padding-top: 56px; }
             `}
        />
        <p>
          Make sure to include this
          <strong> after</strong>
          {' '}
          the core Neptune-CSS.
        </p>
      </div>
      <h2 className="doc-section__subtitle" id="navbar-fixed-bottom">Fixed to bottom</h2>
      <p>
        Add
        <code>.navbar-fixed-bottom</code>
        {' '}
        and include a
        <code>.container</code>
        {' '}
        or
        <code>.container-fluid</code>
        {' '}
        to center and pad navbar content.
      </p>
      <div className="doc-example doc-navbar-top-example">
        <nav className="navbar navbar-default navbar-fixed-bottom">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-7" aria-expanded="false">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand" href="#">Brand</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-7">
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#">Link</a></li>
                <li><a href="#">Link</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <Refractor
        language="css"
        value={`
  <nav class="navbar navbar-default navbar-fixed-bottom">
    <div class="container">
      ...
    </div>
  </nav>
           `}
      />
      <div className="alert alert-danger" id="callout-navbar-fixed-top-padding">
        <h4>Body padding required</h4>
        <p>
          The fixed navbar will overlay your other content, unless you add
          <code>padding</code>
          {' '}
          to the top of the
          <code>&lt;body&gt;</code>
          . Try out your own values or use our snippet below. Tip: By default, the navbar is 56px high.
        </p>
        <Refractor
          language="css"
          value={`
  body { padding-top: 56px; }
             `}
        />
        <p>
          Make sure to include this
          <strong> after</strong>
          {' '}
          the core Neptune-CSS.
        </p>
      </div>
      <h2 className="doc-section__subtitle" id="navbar-static-top">Static top</h2>
      <p>
        Create a full-width navbar that scrolls away with the page by adding
        <code>.navbar-static-top</code>
        {' '}
        and include a
        <code>.container</code>
        {' '}
        or
        <code>.container-fluid</code>
        {' '}
        to center and pad navbar content.
      </p>
      <p>
        Unlike the
        <code>.navbar-fixed-*</code>
        {' '}
        classes, you do not need to change any padding on the
        <code>body</code>
        .
      </p>
      <nav className="navbar navbar-default navbar-static-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-8" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="#">Brand</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-8">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <Refractor
        language="markup"
        value={`
  <nav class="navbar navbar-default navbar-static-top">
    <div class="container">
      ...
    </div>
  </nav>
           `}
      />
      <h2 className="doc-section__subtitle" id="navbar-inverted">Inverted navbar</h2>
      <p>
        Modify the look of the navbar by adding
        <code>.navbar-inverse</code>
        .
      </p>
      <p>
        Use the inverse nabar over background imagery and using helper classes like
        <code>.bg-primary</code>
        .
      </p>
      <nav className="navbar navbar-inverse bg-primary">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-9" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="#">Brand</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-9">
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#">Link</a></li>
              <li><a href="#">Link</a></li>
            </ul>
          </div>
        </div>
      </nav>
      <Refractor
        language="markup"
        value={`
  <nav class="navbar navbar-inverse">
    ...
  </nav>
           `}
      />
      <h2 className="doc-section__subtitle" id="navbar-nested">Nested navbar</h2>
      <p>
        Use dropdowns in the navbar to have a nested navigation. The navbar dropdown have a top arrow and it's located just under its relative
        <code>.dropdown-toggle</code>
        {' '}
        element. It is visible on
        <code>:hover</code>
        {' '}
        and
        <code>:focus-within</code>
        {' '}
        states, enabling a convenient navigation with tabulation.
      </p>
      <p>
        The
        <code>.dropdown-toggle</code>
        {' '}
        element could be an anchor
        <code>a href="#"</code>
        {' '}
        or a
        {' '}
        <code>button</code>
        . Itis recommended to use the
        {' '}
        <code>button</code>
        {' '}
        option, for semantic purposes.
      </p>
      <p>
        To flatten a dropdown on mobile add the
        <code>.navbar-collapse-flatten</code>
        {' '}
        class to the
        <code>.dropdown</code>
        .
      </p>
      <div className="alert alert-info">
        <p>
          <a href="./docs/demos/nested-navbar/index.html" target="_blank">Try the demo</a>
          {' '}
          to view these options and the responsive version as well.
        </p>
      </div>
      <nav className="navbar navbar-inverse bg-primary">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-10" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="#">Brand</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-10">
            <ul className="nav navbar-nav">
              <li className="dropdown">
                <button className="dropdown-toggle">
                  Dropdown button
                  <span className="caret" />
                </button>
                <ul className="dropdown-menu" role="menu">
                  <li><a href="#">Action</a></li>
                  <li><a href="#">Another action</a></li>
                  <li><a href="#">Something else here</a></li>
                  <li className="divider" />
                  <li><a href="#">Separated link</a></li>
                </ul>
              </li>
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
        </div>
      </nav>
      <Refractor
        language="markup"
        value={`
  <nav class="navbar navbar-inverse">
  ...
      <ul class="nav navbar-nav">
          <li class="dropdown">
              <button class="dropdown-toggle">Dropdown button<span class="caret"></span></button>
              <ul class="dropdown-menu" role="menu">
                  <li><a href="#">Action</a></li>
                  ...
              </ul>
          </li>
          <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown <span class="caret"></span></a>
              <ul class="dropdown-menu" role="menu">
                  <li><a href="#">Action</a></li>
                  ...
              </ul>
          </li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
          <li><a href="#">Link</a></li>
          <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Dropdown <span class="caret"></span></a>
              <ul class="dropdown-menu" role="menu">
                  <li><a href="#">Action</a></li>
                  ...
              </ul>
          </li>
      </ul>
  </nav>
           `}
      />
      <h2 className="doc-section__subtitle" id="navbar-secondary">Secondary navigation</h2>
      <p>Secondary navigation for expecific navigation of the site. Used for Blog, products like Swift/bic, Currency Converter, etc.  </p>
      <p>
        Add
        <code>.subnav</code>
        {' '}
        to navbar or header, and
        <code>.subnav-menu</code>
        {' '}
        to navbar-nav to get the secondary navigation.
      </p>
      <p>
        Add
        <code>.navbar-title-link</code>
        {' '}
        to the secondary navigation title link. Must have the
        <code>.active</code>
        {' '}
        state on home.
      </p>
      <p>On mobile, the subnav-menu behaves like an ordinary navbar-nav.</p>
      <div className="alert alert-info">
        <p>
          <a href="./docs/demos/navbar-secondary" target="_blank">Try the demo</a>
          {' '}
          to view these options and the responsive version as well.
        </p>
      </div>
      <header className="navbar subnav">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-11" aria-expanded="false">
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>

            <a href="https://transferwise.com" className="logo-text hidden-md hidden-lg hidden-xl"><span className="sr-only">TransferWise</span></a>
            <a href="https://transferwise.com" className="navbar-brand visible-md visible-lg visible-xl">TransferWise</a>
          </div>

          <nav className="collapse navbar-collapse navbar-collapse-with-panel" aria-expanded="false" id="bs-example-navbar-collapse-11">
            <div className="navbar-collapse-panel">
              <ul className="nav navbar-nav subnav-menu">
                <li className="active"><a className="navbar-title-link" href="https://transferwise.com/">Link</a></li>
                <li className="dropdown">
                  <button className="dropdown-toggle">
                    Dropdown button
                    <span className="caret" />
                  </button>
                  <ul className="dropdown-menu" role="menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li>
                      <a href="#">
                        Something else here
                        <span className="badge badge-success">new</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <button className="dropdown-toggle">
                    Dropdown
                    <span className="caret" />
                  </button>
                  <ul className="dropdown-menu" role="menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li>
                      <a href="#">
                        Something else here
                        <span className="badge badge-success">new</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="navbar-right order-1">
                <ul className="nav navbar-nav">
                  <li className="dropdown active">
                    <button className="dropdown-toggle">
                      Dropdown button
                      <span className="caret" />
                    </button>
                    <ul className="dropdown-menu" role="menu">
                      <li><a href="#">Action</a></li>
                      <li className="active"><a href="#">Another action</a></li>
                      <li>
                        <a href="#">
                          Something else here
                          <span className="badge badge-success">new</span>
                        </a>
                      </li>
                      <li className="divider" />
                      <li className="dropdown-header">Nav header</li>
                      <li><a href="#">Separated link</a></li>
                      <li><a href="#">One more separated link</a></li>
                    </ul>
                  </li>
                  <li className="active"><a href="https://transferwise.com/">Link</a></li>
                </ul>

                <div className="navbar-btn btn-group">
                  <a className="btn btn-success" href="https://transferwise.com/">Get started</a>
                </div>
              </div>
            </div>
            <a role="button" className="navbar-toggle close" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="true">×</a>
          </nav>
        </div>
      </header>
      <h3 id="how-subnav-works">How subnav works</h3>
      <p>Same markup. Add two classes to convert a conventional navbar into a secondary navigation option.</p>
      <img src="./docs/demos/navbar-secondary/subnav-how-works.svg" alt="" />
      <Refractor
        language="markup"
        value={`
  <nav class="navbar subnav">
    ...
    <ul class="nav navbar-nav subnav-menu">
      <li class="active">
        <a class="navbar-title-link" href="/"> Title </a>
      </li>
      <li class="dropdown">
      ...
      </li>
      ...
    </ul>
    ...
  </nav>
             `}
      />
      <header className="navbar navbar-inverse subnav bg-primary">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-12" aria-expanded="false">
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>

            <a href="https://transferwise.com" className="logo-text logo-text-inverse hidden-md hidden-lg hidden-xl"><span className="sr-only">TransferWise</span></a>
            <a href="https://transferwise.com" className="navbar-brand visible-md visible-lg visible-xl">TransferWise</a>
          </div>

          <nav id="bs-example-navbar-collapse-12" className="collapse navbar-collapse navbar-collapse-with-panel" aria-expanded="false">
            <div className="navbar-collapse-panel">
              <ul className="nav navbar-nav subnav-menu">
                <li><a className="navbar-title-link" href="https://transferwise.com/">Link</a></li>
                <li className="dropdown">
                  <button className="dropdown-toggle">
                    Dropdown button
                    <span className="caret" />
                  </button>
                  <ul className="dropdown-menu" role="menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li>
                      <a href="#">
                        Something else here
                        <span className="badge badge-success">new</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="dropdown">
                  <button className="dropdown-toggle">
                    Dropdown
                    <span className="caret" />
                  </button>
                  <ul className="dropdown-menu" role="menu">
                    <li><a href="#">Action</a></li>
                    <li><a href="#">Another action</a></li>
                    <li>
                      <a href="#">
                        Something else here
                        <span className="badge badge-success">new</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <div className="navbar-right order-1">
                <ul className="nav navbar-nav">
                  <li className="dropdown active">
                    <button className="dropdown-toggle">
                      Dropdown button
                      <span className="caret" />
                    </button>
                    <ul className="dropdown-menu" role="menu">
                      <li><a href="#">Action</a></li>
                      <li className="active"><a href="#">Another action</a></li>
                      <li>
                        <a href="#">
                          Something else here
                          <span className="badge badge-success">new</span>
                        </a>
                      </li>
                      <li className="divider" />
                      <li className="dropdown-header">Nav header</li>
                      <li><a href="#">Separated link</a></li>
                      <li><a href="#">One more separated link</a></li>
                    </ul>
                  </li>
                  <li className="active"><a href="https://transferwise.com/">Link</a></li>
                </ul>

                <div className="navbar-btn btn-group">
                  <a className="btn btn-success" href="https://transferwise.com/">Get started</a>
                </div>
              </div>
            </div>
            <a role="button" className="navbar-toggle close" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="true">×</a>
          </nav>
        </div>
      </header>
      <Refractor
        language="markup"
        value={`
<nav class="navbar subnav navbar-inverse bg-primary">
  ...
  <ul class="nav navbar-nav subnav-menu">
    <li>
      <a class="navbar-title-link" href="/"> Title </a>
    </li>
    <li class="dropdown">
    ...
    </li>
    ...
  </ul>
  ...
</nav>
           `}
      />
    </div>
  </section>
);


export default HeaderDoc;
