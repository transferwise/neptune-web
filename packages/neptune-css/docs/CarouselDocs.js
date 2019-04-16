import React from 'react';
// import '../node_modules/jquery/dist/jquery.min.js';
// import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Refractor from 'react-refractor';
import markup from 'refractor/lang/markup';
import javascript from 'refractor/lang/javascript';
import './less/prism.css';

const Carousel = () => (
  <section id="carousel" className="section">
    <div className="container container--wide">
      <h1 className="colored-dot doc-section__title">Carousel.</h1>

      <p>
A slideshow component for cycling through elements, like a carousel.
        <strong>Nested carousels are not supported.</strong>
      </p>
      <h2>Examples</h2>
      <div className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carousel-example-generic" data-slide-to="0" className="active" />
          <li data-target="#carousel-example-generic" data-slide-to="1" className="" />
          <li data-target="#carousel-example-generic" data-slide-to="2" className="" />
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="item active">
            <img data-src="holder.js/900x500/auto/#777:#555/text:First slide" alt="First slide [900x500]" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iOTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDkwMCA1MDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzkwMHg1MDAvYXV0by8jNzc3OiM1NTUvdGV4dDpGaXJzdCBzbGlkZQpDcmVhdGVkIHdpdGggSG9sZGVyLmpzIDIuNi4wLgpMZWFybiBtb3JlIGF0IGh0dHA6Ly9ob2xkZXJqcy5jb20KKGMpIDIwMTItMjAxNSBJdmFuIE1hbG9waW5za3kgLSBodHRwOi8vaW1za3kuY28KLS0+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48IVtDREFUQVsjaG9sZGVyXzE2OTgyODM4MDI0IHRleHQgeyBmaWxsOiM1NTU7Zm9udC13ZWlnaHQ6Ym9sZDtmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBPcGVuIFNhbnMsIHNhbnMtc2VyaWYsIG1vbm9zcGFjZTtmb250LXNpemU6NDVwdCB9IF1dPjwvc3R5bGU+PC9kZWZzPjxnIGlkPSJob2xkZXJfMTY5ODI4MzgwMjQiPjxyZWN0IHdpZHRoPSI5MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjNzc3Ii8+PGc+PHRleHQgeD0iMzA3LjAxNTYyNSIgeT0iMjcwLjEiPkZpcnN0IHNsaWRlPC90ZXh0PjwvZz48L2c+PC9zdmc+" data-holder-rendered="true" />
          </div>
          <div className="item">
            <img data-src="holder.js/900x500/auto/#666:#444/text:Second slide" alt="Second slide [900x500]" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iOTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDkwMCA1MDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzkwMHg1MDAvYXV0by8jNjY2OiM0NDQvdGV4dDpTZWNvbmQgc2xpZGUKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNjk4MjgzYzAyZiB0ZXh0IHsgZmlsbDojNDQ0O2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjQ1cHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE2OTgyODNjMDJmIj48cmVjdCB3aWR0aD0iOTAwIiBoZWlnaHQ9IjUwMCIgZmlsbD0iIzY2NiIvPjxnPjx0ZXh0IHg9IjI2My41MzkwNjI1IiB5PSIyNzAuMSI+U2Vjb25kIHNsaWRlPC90ZXh0PjwvZz48L2c+PC9zdmc+" data-holder-rendered="true" />
          </div>
          <div className="item">
            <img data-src="holder.js/900x500/auto/#555:#333/text:Third slide" alt="Third slide [900x500]" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iOTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDkwMCA1MDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzkwMHg1MDAvYXV0by8jNTU1OiMzMzMvdGV4dDpUaGlyZCBzbGlkZQpDcmVhdGVkIHdpdGggSG9sZGVyLmpzIDIuNi4wLgpMZWFybiBtb3JlIGF0IGh0dHA6Ly9ob2xkZXJqcy5jb20KKGMpIDIwMTItMjAxNSBJdmFuIE1hbG9waW5za3kgLSBodHRwOi8vaW1za3kuY28KLS0+PGRlZnM+PHN0eWxlIHR5cGU9InRleHQvY3NzIj48IVtDREFUQVsjaG9sZGVyXzE2OTgyODNiODBkIHRleHQgeyBmaWxsOiMzMzM7Zm9udC13ZWlnaHQ6Ym9sZDtmb250LWZhbWlseTpBcmlhbCwgSGVsdmV0aWNhLCBPcGVuIFNhbnMsIHNhbnMtc2VyaWYsIG1vbm9zcGFjZTtmb250LXNpemU6NDVwdCB9IF1dPjwvc3R5bGU+PC9kZWZzPjxnIGlkPSJob2xkZXJfMTY5ODI4M2I4MGQiPjxyZWN0IHdpZHRoPSI5MDAiIGhlaWdodD0iNTAwIiBmaWxsPSIjNTU1Ii8+PGc+PHRleHQgeD0iMjk3LjAzOTA2MjUiIHk9IjI3MC4xIj5UaGlyZCBzbGlkZTwvdGV4dD48L2c+PC9nPjwvc3ZnPg==" data-holder-rendered="true" />
          </div>
        </div>
        <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
      <Refractor
        language="markup"
        value={`
      <div class='carousel slide' data-ride='carousel'>
        <ol class='carousel-indicators'>
          <li data-target='#carousel-example-generic' data-slide-to='0' class='active' />
          <li data-target='#carousel-example-generic' data-slide-to='1' />
          <li data-target='#carousel-example-generic' data-slide-to='2' />
        </ol>

        <div class='carousel-inner' role='listbox'>
          <div class='item active'>
            <img src='...' alt='...' />
            <div class='carousel-caption'>
        ...
            </div>
          </div>
          <div class='item'>
            <img src='...' alt='...' />
            <div class='carousel-caption'>
        ...
            </div>
          </div>
      ...
        </div>

        <a class='left carousel-control' href='#carousel-example-generic' role='button' data-slide='prev'>
          <span class='glyphicon glyphicon-chevron-left' aria-hidden='true' />
          <span class='sr-only'>Previous</span>
        </a>
        <a class='right carousel-control' href='#carousel-example-generic' role='button' data-slide='next'>
          <span class='glyphicon glyphicon-chevron-right' aria-hidden='true' />
          <span class='sr-only'>Next</span>
        </a>
      </div>
      `}
      />
      <div className="alert alert-danger">
        <h4>Accessibility issue</h4>
        <p>The carousel component is generally not compliant with accessibility standards. If you need to be compliant, please consider other options for presenting your content.</p>
      </div>
      <div className="alert alert-warning">
        <h4>Transition animations not supported in Internet Explorer 8 &amp; 9</h4>
        <p>
        Bootstrap exclusively uses CSS3 for its animations, but Internet Explorer 8 &amp; 9 don't support the necessary CSS properties. Thus, there are no slide transition animations when using these browsers. We have intentionally decided not to include
      jQuery-based fallbacks for the transitions.
        </p>
      </div>
      <div className="alert alert-warning">
        <h4>Initial active element required</h4>
        <p>
The
          <code>.active</code>
          {' '}
class needs to be added to one of the slides. Otherwise, the carousel will not be visible.
        </p>
      </div>
      <h3 id="optional-captions">
      Optional captions
      </h3>
      <p>
Add captions to your slides easily with the
        <code>.carousel-caption</code>
        {' '}
element within any
        <code>.item</code>
. Place just about any optional HTML within there and it will be automatically aligned and formatted.
      </p>
      <div>
        <div id="carousel-example-captions" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carousel-example-captions" data-slide-to="0" className="" />
            <li data-target="#carousel-example-captions" data-slide-to="1" className="" />
            <li data-target="#carousel-example-captions" data-slide-to="2" className="active" />
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="item">
              <img data-src="holder.js/900x500/auto/#777:#777" alt="900x500" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iOTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDkwMCA1MDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzkwMHg1MDAvYXV0by8jNzc3OiM3NzcKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNjk4MzI4ZGI5MyB0ZXh0IHsgZmlsbDojNzc3O2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjQ1cHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE2OTgzMjhkYjkzIj48cmVjdCB3aWR0aD0iOTAwIiBoZWlnaHQ9IjUwMCIgZmlsbD0iIzc3NyIvPjxnPjx0ZXh0IHg9IjMzMi40NDUzMTI1IiB5PSIyNzAuMSI+OTAweDUwMDwvdGV4dD48L2c+PC9nPjwvc3ZnPg==" data-holder-rendered="true" />
              <div className="carousel-caption">
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
            </div>
            <div className="item">
              <img data-src="holder.js/900x500/auto/#666:#666" alt="900x500" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iOTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDkwMCA1MDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzkwMHg1MDAvYXV0by8jNjY2OiM2NjYKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNjk4MzI4Zjc0YyB0ZXh0IHsgZmlsbDojNjY2O2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjQ1cHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE2OTgzMjhmNzRjIj48cmVjdCB3aWR0aD0iOTAwIiBoZWlnaHQ9IjUwMCIgZmlsbD0iIzY2NiIvPjxnPjx0ZXh0IHg9IjMzMi40NDUzMTI1IiB5PSIyNzAuMSI+OTAweDUwMDwvdGV4dD48L2c+PC9nPjwvc3ZnPg==" data-holder-rendered="true" />
              <div className="carousel-caption">
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="item active">
              <img data-src="holder.js/900x500/auto/#555:#555" alt="900x500" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iOTAwIiBoZWlnaHQ9IjUwMCIgdmlld0JveD0iMCAwIDkwMCA1MDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjwhLS0KU291cmNlIFVSTDogaG9sZGVyLmpzLzkwMHg1MDAvYXV0by8jNTU1OiM1NTUKQ3JlYXRlZCB3aXRoIEhvbGRlci5qcyAyLjYuMC4KTGVhcm4gbW9yZSBhdCBodHRwOi8vaG9sZGVyanMuY29tCihjKSAyMDEyLTIwMTUgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvCi0tPjxkZWZzPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+PCFbQ0RBVEFbI2hvbGRlcl8xNjk4MzI4ZTA5ZSB0ZXh0IHsgZmlsbDojNTU1O2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjQ1cHQgfSBdXT48L3N0eWxlPjwvZGVmcz48ZyBpZD0iaG9sZGVyXzE2OTgzMjhlMDllIj48cmVjdCB3aWR0aD0iOTAwIiBoZWlnaHQ9IjUwMCIgZmlsbD0iIzU1NSIvPjxnPjx0ZXh0IHg9IjMzMi40NDUzMTI1IiB5PSIyNzAuMSI+OTAweDUwMDwvdGV4dD48L2c+PC9nPjwvc3ZnPg==" data-holder-rendered="true" />
              <div className="carousel-caption">
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </div>
            </div>
          </div>
          <a className="left carousel-control" href="#carousel-example-captions" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#carousel-example-captions" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <Refractor
        language="markup"
        value={`
      <div class="item">
        <img src="..." alt="...">
        <div class="carousel-caption">
          <h3>...</h3>
          <p>...</p>
        </div>
      </div>
      `}
      />
    <h2 className="doc-section__subtitle" id="carousel-usage">
Usage
      </h2>
      <h3 id="multiple-carousels">
Multiple carousels
        <a className="anchorjs-link" href="#multiple-carousels"><span className="anchorjs-icon" /></a>
      </h3>
      <p>
Carousels require the use of an
        <code>id</code>
        {' '}
on the outermost container (the
        <code>.carousel</code>
) for carousel controls to function properly. When adding multiple carousels, or when changing a carousel's
        <code>id</code>
, be sure to update the
      relevant controls.
      </p>
      <h3 id="via-data-attributes">
Via data attributes
        <a className="anchorjs-link" href="#via-data-attributes"><span className="anchorjs-icon" /></a>
      </h3>
      <p>
Use data attributes to easily control the position of the carousel.
        <code>data-slide</code>
        {' '}
accepts the keywords
        <code>prev</code>
        {' '}
or
        <code>next</code>
, which alters the slide position relative to its current position. Alternatively, use
        <code>data-slide-to</code>
        {' '}
to pass a raw slide index to the carousel
        <code>data-slide-to="2"</code>
, which shifts the slide position to a particular index beginning with
        <code>0</code>
.
      </p>
      <p>
The
        <code>data-ride="carousel"</code>
        {' '}
attribute is used to mark a carousel as animating starting at page load.
        <strong className="text-danger">It cannot be used in combination with (redundant and unnecessary) explicit JavaScript initialization of the same carousel.</strong>
      </p>
      <h3 id="via-javascript">
Via JavaScript
        <a className="anchorjs-link" href="#via-javascript"><span className="anchorjs-icon" /></a>
      </h3>
      <p>Call carousel manually with:</p>
      <Refractor
        language="javascript"
        value={`
           $('.carousel').carousel() `}
      />
      <h3 id="carousel-options">
Options
        <a className="anchorjs-link" href="#carousel-options"><span className="anchorjs-icon" /></a>
      </h3>
      <p>
Options can be passed via data attributes or JavaScript. For data attributes, append the option name to
        <code>data-</code>
, as in
        <code>data-interval=""</code>
.
      </p>
      <div className="table-responsive">
        <table className="table table-bordered table-striped js-options-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>type</th>
              <th>default</th>
              <th>description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>interval</td>
              <td>number</td>
              <td>5000</td>
              <td>The amount of time to delay between automatically cycling an item. If false, carousel will not automatically cycle.</td>
            </tr>
            <tr>
              <td>pause</td>
              <td>string</td>
              <td>"hover"</td>
              <td>Pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on mouseleave.</td>
            </tr>
            <tr>
              <td>wrap</td>
              <td>boolean</td>
              <td>true</td>
              <td>Whether the carousel should cycle continuously or have hard stops.</td>
            </tr>
            <tr>
              <td>keyboard</td>
              <td>boolean</td>
              <td>true</td>
              <td>Whether the carousel should react to keyboard events.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 id="carousel-methods">
Methods
        <a className="anchorjs-link" href="#carousel-methods"><span className="anchorjs-icon" /></a>
      </h3>
      <h4 id=".carousel(options)">
        <code>.carousel(options)</code>
        <a className="anchorjs-link" href="#.carousel(options)"><span className="anchorjs-icon" /></a>
      </h4>
      <p>
Initializes the carousel with an optional options
        <code>object</code>
        {' '}
and starts cycling through items.
      </p>
      <Refractor
        language="markup"
        value={`
 $('.carousel').carousel({ interval: 2000 })
         `}
      />
      <h4 id=".carousel('cycle')">
        <code>.carousel(`cycle`)</code>
        <a className="anchorjs-link" href="#.carousel('cycle')"><span className="anchorjs-icon" /></a>
      </h4>
      <p>Cycles through the carousel items from left to right.</p>
      <h4 id=".carousel('pause')">
        <code>.carousel('pause')</code>
        <a className="anchorjs-link" href="#.carousel('pause')"><span className="anchorjs-icon" /></a>
      </h4>
      <p>Stops the carousel from cycling through items.</p>
      <h4 id=".carousel(number)">
        <code>.carousel(number)</code>
        <a className="anchorjs-link" href="#.carousel(number)"><span className="anchorjs-icon" /></a>
      </h4>
      <p>Cycles the carousel to a particular frame (0 based, similar to an array).</p>
      <h4 id=".carousel('prev')">
        <code>.carousel('prev')</code>
        <a className="anchorjs-link" href="#.carousel('prev')"><span className="anchorjs-icon" /></a>
      </h4>
      <p>Cycles to the previous item.</p>

      <h4 id=".carousel('next')">
        <code>.carousel('next')</code>
        <a className="anchorjs-link" href="#.carousel('next')"><span className="anchorjs-icon" /></a>
      </h4>
      <p>Cycles to the next item.</p>

      <h3 id="carousel-events">
Events
        <a className="anchorjs-link" href="#carousel-events"><span className="anchorjs-icon" /></a>
      </h3>
      <p>Bootstrap's carousel class exposes two events for hooking into carousel functionality.</p>
      <p>Both events have the following additional properties:</p>
      <ul>
        <li>
          <code>direction</code>
: The direction in which the carousel is sliding (either
          {' '}
          <code>"left"</code>
          {' '}
or
          {' '}
          <code>"right"</code>
).
        </li>
        <li>
          <code>relatedTarget</code>
: The DOM element that is being slid into place as the active item.
        </li>
      </ul>
      <p>
All carousel events are fired at the carousel itself (i.e. at the
        <code>&lt;div class="carousel"&gt;</code>
).
      </p>
      <div className="table-responsive">
        <table className="table table-bordered table-striped bs-events-table">
          <thead>
            <tr>
              <th>Event Type</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>slide.bs.carousel</td>
              <td>
This event fires immediately when the
                <code>slide</code>
                {' '}
instance method is invoked.
              </td>
            </tr>
            <tr>
              <td>slid.bs.carousel</td>
              <td>This event is fired when the carousel has completed its slide transition.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Refractor
        language="javascript"
        value={`
$('#myCarousel').on('slide.bs.carousel', function () { // do something… })
       `}
      />
      <h2 className="doc-section__subtitle" id="carousel-styles">
Styles
      </h2>
      <h4 id="angled-carousel">
Angled Carousel
        <a className="anchorjs-link" href="#angled-carousel"><span className="anchorjs-icon" /></a>
      </h4>

      <p>
This is a custom design for the carousel. The design offers a pleasant experience to slide large images and a caption or call to action related to them.
        <a href="../examples/carousel-angled/">Here the view of a fullscreen demo</a>
.
      </p>
      <p>This design shows a different version on tables/mobiles, more appropriate for small devices.</p>
      <p>To take advantage of the angled design try to use an image with the focus on the right side of the picture. </p>
    </div>
    <div id="carousel-angled">
      <div id="carousel-angled" className="carousel slide carousel-angled" data-ride="carousel">
        <div className="carousel-inner" role="listbox">
          <div className="item">
            <img src="https://transferwise.com/compare-assets/images/2x/sophie_@2x-c007e894532dca3953a8ed603974954f.jpg" alt="First slide" />
            <div className="carousel-caption">
              <img className="circle circle-lg hidden-xs hidden-sm hidden-md m-b-5 m-l-0" src="https://transferwise.com/compare-assets/images/2x/sophie-profile-sq_@2x-9305773e9f22ab0c0f1d510de83bde26.jpg" alt="sophie" />
              <h2 className="m-b-2">
Sophie, living abroad
                <span className="text-info">.</span>
              </h2>
              <p className="small">I tell everyone about TransferWise. I’ve told half the Brits on Bondi!</p>
              <a className="btn btn-default" role="button" href="">Sophie's story</a>
            </div>
          </div>
          <div className="item active">
            <img src="https://transferwise.com/compare-assets/images/2x/salvador_@2x-961026bffa45617e1a2a1035c761e1e1.jpg" alt="Second slide" />
            <div className="carousel-caption">
              <img className="circle circle-lg hidden-xs hidden-sm hidden-md m-b-5 m-l-0" src="https://transferwise.com/compare-assets/images/2x/salvador-profile-sq_@2x-1ce57b8f2de666a49b4a3816a82afc6a.jpg" alt="salvador" />
              <h2 className="m-b-2">
Salvador, Philippines
                <span className="text-info">.</span>
              </h2>
              <p className="small">
Every single transaction was a breeze, no stress, no glitch.
              </p>
              <a className="btn btn-default" role="button" href="">Salvador's story</a>
            </div>
          </div>
          <div className="item">
            <img src="https://transferwise.com/compare-assets/images/2x/mathu_@2x-ea985c283b36927f040bee0c4a420518.jpg" alt="Third slide" />
            <div className="carousel-caption">
              <img className="circle circle-lg hidden-xs hidden-sm hidden-md m-b-5 m-l-0" src="https://transferwise.com/compare-assets/images/2x/mathu-profile-sq_@2x-9ad24c86328c59397f26ad254185b68f.jpg" alt="mathu" />
              <h2 className="m-b-2">
Mathu from India
                <span className="text-info">.</span>
              </h2>
              <p className="small">
I live abroad &amp; also have my connection back to India by sending money to my family.
              </p>
            </div>
          </div>
        </div>
        <div className="container carousel-control-container">
          <a className="carousel-control" href="#carousel-angled" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control" href="#carousel-angled" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
        <ol className="carousel-indicators">
          <li data-target="#carousel-angled" data-slide-to="0" className="" />
          <li data-target="#carousel-angled" data-slide-to="1" className="active" />
          <li data-target="#carousel-angled" data-slide-to="2" className="" />
        </ol>
      </div>
    </div>
    <div className="container container--wide">
      <Refractor
        language="markup"
        value={`
        <div id="carousel-angled" class="carousel slide carousel-angled" data-ride="carousel">
           <div class="carousel-inner" role="listbox">
             <div class="item active">
               <img src="..." alt="First slide">
               <div class="carousel-caption">
                 ...
               </div>
             </div>
             <div class="item">
               <img src="..." alt="Second slide">
               <div class="carousel-caption">
                 ...
               </div>
             </div>
             <div class="item">
               <img src="..." alt="Third slide">
               <div class="carousel-caption">
                 ...
               </div>
             </div>
           </div>
           <div class="container carousel-control-container">
             <a class="carousel-control" href="#carousel-angled" role="button" data-slide="prev">
               <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
               <span class="sr-only">Previous</span>
             </a>
             <a class="carousel-control" href="#carousel-angled" role="button" data-slide="next">
               <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
               <span class="sr-only">Next</span>
             </a>
           </div>
           <ol class="carousel-indicators">
             <li data-target="#carousel-angled" data-slide-to="0" class="active"></li>
             <li data-target="#carousel-angled" data-slide-to="1"></li>
             <li data-target="#carousel-angled" data-slide-to="2"></li>
           </ol>
         </div>
       `}
      />
    </div>
  </section>
);

export default Carousel;
