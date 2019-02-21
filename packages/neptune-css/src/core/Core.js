import React, {Component} from "react";
import "./Core.less";
import Typography from "./components/typography";

class Core extends Component {
  render() {
    return (
      <section id="core" className="wrap--content section">
        <h1 className="colored-dot">Core CSS <span className="badge badge-success">new</span></h1>
        <ul>
          <li>Normalize</li>
          <li>Type
            <ul>
              <li>Headings</li>
              <li>Aligment</li>
              <li>Transformations</li>
              <li>Contextual colors</li>
              <li>Contextual backgrounds</li>
              <li>Page header</li>
              <li>Lists</li>
              <li>Definition lists</li>
              <li>Abbr</li>
              <li>Blockquotes</li>
              <li>Addresses</li>
              <li>Colored dot</li>
            </ul>
          </li>

        </ul>
        <Typography />

          <h2 id="type-alignment">Alignment classes<a class="anchorjs-link" href="#type-alignment"><span class="anchorjs-icon"></span></a></h2>
          <p>Easily realign text to components with text alignment classes.</p>
          <div class="bs-example" data-example-id="text-alignment">
            <p class="text-xs-left">Left aligned text.</p>
            <p class="text-xs-center">Center aligned text.</p>
            <p class="text-xs-right">Right aligned text.</p>
            <p class="text-xs-justify">Justified text.</p>
            <p class="text-xs-nowrap">No wrap text.</p>
          </div>
        <figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"text-xs-left"</span><span class="nt">&gt;</span>Left aligned text.<span class="nt">&lt;/p&gt;</span>
        <span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"text-xs-center"</span><span class="nt">&gt;</span>Center aligned text.<span class="nt">&lt;/p&gt;</span>
        <span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"text-xs-right"</span><span class="nt">&gt;</span>Right aligned text.<span class="nt">&lt;/p&gt;</span>
        <span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"text-xs-justify"</span><span class="nt">&gt;</span>Justified text.<span class="nt">&lt;/p&gt;</span>
        <span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"text-xs-nowrap"</span><span class="nt">&gt;</span>No wrap text.<span class="nt">&lt;/p&gt;</span></code></pre></figure>

          <p>For text that only aligns above a given break point use the appropriate modifier.</p>
          <div class="bs-example" data-example-id="responsive-text-alignment">
            <p class="text-xs-right">Text right on extra small grids.</p>
            <p class="text-sm-right">Text right on small grids.</p>
            <p class="text-md-right">Text right on medium grids.</p>
            <p class="text-lg-right">Text right on large grids.</p>
            <p class="text-xl-right">Text right on extra large grids.</p>
          </div>
        <figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"text-xs-right"</span><span class="nt">&gt;</span>Text right on extra small grids.<span class="nt">&lt;/p&gt;</span>
        <span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"text-sm-right"</span><span class="nt">&gt;</span>Text right on small grids.<span class="nt">&lt;/p&gt;</span>
        <span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"text-md-right"</span><span class="nt">&gt;</span>Text right on medium grids.<span class="nt">&lt;/p&gt;</span>
        <span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"text-lg-right"</span><span class="nt">&gt;</span>Text right on large grids.<span class="nt">&lt;/p&gt;</span>
        <span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"text-xl-right"</span><span class="nt">&gt;</span>Text right on extra large grids.<span class="nt">&lt;/p&gt;</span></code></pre></figure>

          <h2 id="type-transformation">Transformation classes<a class="anchorjs-link" href="#type-transformation"><span class="anchorjs-icon"></span></a></h2>
          <p>Transform text in components with text capitalization classes.</p>
          <div class="bs-example" data-example-id="text-capitalization">
            <p class="text-lowercase">Lowercased text.</p>
            <p class="text-uppercase">Uppercased text.</p>
            <p class="text-capitalize">Capitalized text.</p>
          </div>
        <figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"text-lowercase"</span><span class="nt">&gt;</span>Lowercased text.<span class="nt">&lt;/p&gt;</span>
        <span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"text-uppercase"</span><span class="nt">&gt;</span>Uppercased text.<span class="nt">&lt;/p&gt;</span>
        <span class="nt">&lt;p</span> <span class="na">class=</span><span class="s">"text-capitalize"</span><span class="nt">&gt;</span>Capitalized text.<span class="nt">&lt;/p&gt;</span></code></pre></figure>

          <h2> Abbreviations </h2>
          <h2 id="type-abbreviations">Abbreviations<a class="anchorjs-link" href="#type-abbreviations"><span class="anchorjs-icon"></span></a></h2>
          <p>Stylized implementation of HTML's <code>&lt;abbr&gt;</code> element for abbreviations and acronyms to show the expanded version on hover. Abbreviations with a <code>title</code> attribute have a light dotted bottom border and a help cursor on hover, providing additional context on hover and to users of assistive technologies.</p>

          <h3 id="basic-abbreviation">Basic abbreviation<a class="anchorjs-link" href="#basic-abbreviation"><span class="anchorjs-icon"></span></a></h3>
          <div class="bs-example" data-example-id="simple-abbr">
            <p>An abbreviation of the word attribute is <abbr title="attribute">attr</abbr>.</p>
          </div>
        <figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;abbr</span> <span class="na">title=</span><span class="s">"attribute"</span><span class="nt">&gt;</span>attr<span class="nt">&lt;/abbr&gt;</span></code></pre></figure>

          <h3 id="initialism">Initialism<a class="anchorjs-link" href="#initialism"><span class="anchorjs-icon"></span></a></h3>
          <p>Add <code>.initialism</code> to an abbreviation for a slightly smaller font-size.</p>
          <div class="bs-example" data-example-id="simple-initialism">
            <p><abbr title="HyperText Markup Language" class="initialism">HTML</abbr> is the best thing since sliced bread.</p>
          </div>
        <figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;abbr</span> <span class="na">title=</span><span class="s">"HyperText Markup Language"</span> <span class="na">class=</span><span class="s">"initialism"</span><span class="nt">&gt;</span>HTML<span class="nt">&lt;/abbr&gt;</span></code></pre></figure>



          <h2 id="addresses">Addresses<a class="anchorjs-link" href="#type-addresses"><span class="anchorjs-icon"></span></a></h2>
          <p>Present contact information for the nearest ancestor or the entire body of work. Preserve formatting by ending all lines with <code>&lt;br&gt;</code>.</p>
          <div class="bs-example" data-example-id="simple-address">
            <address>
              <strong>Twitter, Inc.</strong><br />
              795 Folsom Ave, Suite 600<br />
            San Francisco, CA 94107<br />
              <abbr title="Phone">P:</abbr> (123) 456-7890
            </address>
            <address>
              <strong>Full Name</strong><br />
              <a href="mailto:#">first.last@example.com</a>
            </address>
          </div>
        <figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;address&gt;</span>
          <span class="nt">&lt;strong&gt;</span>Twitter, Inc.<span class="nt">&lt;/strong&gt;&lt;br&gt;</span>
          795 Folsom Ave, Suite 600<span class="nt">&lt;br&gt;</span>
          San Francisco, CA 94107<span class="nt">&lt;br&gt;</span>
          <span class="nt">&lt;abbr</span> <span class="na">title=</span><span class="s">"Phone"</span><span class="nt">&gt;</span>P:<span class="nt">&lt;/abbr&gt;</span> (123) 456-7890
        <span class="nt">&lt;/address&gt;</span>

        <span class="nt">&lt;address&gt;</span>
          <span class="nt">&lt;strong&gt;</span>Full Name<span class="nt">&lt;/strong&gt;&lt;br&gt;</span>
          <span class="nt">&lt;a</span> <span class="na">href=</span><span class="s">"mailto:#"</span><span class="nt">&gt;</span>first.last@example.com<span class="nt">&lt;/a&gt;</span>
        <span class="nt">&lt;/address&gt;</span></code></pre></figure>


          <h2> Blockquotes </h2>
          <h2 id="type-blockquotes">Blockquotes<a class="anchorjs-link" href="#type-blockquotes"><span class="anchorjs-icon"></span></a></h2>
          <p>For quoting blocks of content from another source within your document.</p>

          <h3 id="default-blockquote">Default blockquote<a class="anchorjs-link" href="#default-blockquote"><span class="anchorjs-icon"></span></a></h3>
          <p>Wrap <code>&lt;blockquote&gt;</code> around any <abbr title="HyperText Markup Language">HTML</abbr> as the quote. For straight quotes, we recommend a <code>&lt;p&gt;</code>.</p>
          <div class="bs-example" data-example-id="simple-blockquote">
            <blockquote>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            </blockquote>
          </div>
        <figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;blockquote&gt;</span>
          <span class="nt">&lt;p&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.<span class="nt">&lt;/p&gt;</span>
        <span class="nt">&lt;/blockquote&gt;</span></code></pre></figure>

          <h3 id="blockquote-options">Blockquote options<a class="anchorjs-link" href="#blockquote-options"><span class="anchorjs-icon"></span></a></h3>
          <p>Style and content changes for simple variations on a standard <code>&lt;blockquote&gt;</code>.</p>

          <h4 id="naming-a-source">Naming a source<a class="anchorjs-link" href="#naming-a-source"><span class="anchorjs-icon"></span></a></h4>
          <p>Add a <code>&lt;footer&gt;</code> for identifying the source. Wrap the name of the source work in <code>&lt;cite&gt;</code>.</p>
          <div class="bs-example" data-example-id="blockquote-cite">
            <blockquote>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
            </blockquote>
          </div>
        <figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;blockquote&gt;</span>
          <span class="nt">&lt;p&gt;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.<span class="nt">&lt;/p&gt;</span>
          <span class="nt">&lt;footer&gt;</span>Someone famous in <span class="nt">&lt;cite</span> <span class="na">title=</span><span class="s">"Source Title"</span><span class="nt">&gt;</span>Source Title<span class="nt">&lt;/cite&gt;&lt;/footer&gt;</span>
        <span class="nt">&lt;/blockquote&gt;</span></code></pre></figure>

          <h4 id="alternate-displays">Alternate displays<a class="anchorjs-link" href="#alternate-displays"><span class="anchorjs-icon"></span></a></h4>
          <p>Add <code>.blockquote-reverse</code> for a blockquote with right-aligned content.</p>
          <div class="bs-example" data-example-id="blockquote-reverse">
            <blockquote class="blockquote-reverse">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
              <footer>Someone famous in <cite title="Source Title">Source Title</cite></footer>
            </blockquote>
          </div>
        <figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;blockquote</span> <span class="na">class=</span><span class="s">"blockquote-reverse"</span><span class="nt">&gt;</span>
          ...
        <span class="nt">&lt;/blockquote&gt;</span></code></pre></figure>


          <h2> Lists </h2>
          <h2 id="type-lists">Lists<a class="anchorjs-link" href="#type-lists"><span class="anchorjs-icon"></span></a></h2>

          <h3 id="unordered">Unordered<a class="anchorjs-link" href="#unordered"><span class="anchorjs-icon"></span></a></h3>
          <p>A list of items in which the order does <em>not</em> explicitly matter.</p>
          <div class="bs-example" data-example-id="simple-ul">
            <ul>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
              <li>Nulla volutpat aliquam velit
                <ul>
                  <li>Phasellus iaculis neque</li>
                  <li>Purus sodales ultricies</li>
                  <li>Vestibulum laoreet porttitor sem</li>
                  <li>Ac tristique libero volutpat at</li>
                </ul>
              </li>
              <li>Faucibus porta lacus fringilla vel</li>
              <li>Aenean sit amet erat nunc</li>
              <li>Eget porttitor lorem</li>
            </ul>
          </div>
        <figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;ul&gt;</span>
          <span class="nt">&lt;li&gt;</span>...<span class="nt">&lt;/li&gt;</span>
        <span class="nt">&lt;/ul&gt;</span></code></pre></figure>

          <h3 id="ordered">Ordered<a class="anchorjs-link" href="#ordered"><span class="anchorjs-icon"></span></a></h3>
          <p>A list of items in which the order <em>does</em> explicitly matter.</p>
          <div class="bs-example" data-example-id="simple-ol">
            <ol>
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
              <li>Nulla volutpat aliquam velit</li>
              <li>Faucibus porta lacus fringilla vel</li>
              <li>Aenean sit amet erat nunc</li>
              <li>Eget porttitor lorem</li>
            </ol>
          </div>
        <figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;ol&gt;</span>
          <span class="nt">&lt;li&gt;</span>...<span class="nt">&lt;/li&gt;</span>
        <span class="nt">&lt;/ol&gt;</span></code></pre></figure>

          <h3 id="unstyled">Unstyled<a class="anchorjs-link" href="#unstyled"><span class="anchorjs-icon"></span></a></h3>
          <p>Remove the default <code>list-style</code> and left margin on list items (immediate children only). <strong>This only applies to immediate children list items</strong>, meaning you will need to add the class for any nested lists as well.</p>
          <div class="bs-example" data-example-id="unstyled-list">
            <ul class="list-unstyled">
              <li>Lorem ipsum dolor sit amet</li>
              <li>Consectetur adipiscing elit</li>
              <li>Integer molestie lorem at massa</li>
              <li>Facilisis in pretium nisl aliquet</li>
              <li>Nulla volutpat aliquam velit
                <ul>
                  <li>Phasellus iaculis neque</li>
                  <li>Purus sodales ultricies</li>
                  <li>Vestibulum laoreet porttitor sem</li>
                  <li>Ac tristique libero volutpat at</li>
                </ul>
              </li>
              <li>Faucibus porta lacus fringilla vel</li>
              <li>Aenean sit amet erat nunc</li>
              <li>Eget porttitor lorem</li>
            </ul>
          </div>
        <figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;ul</span> <span class="na">class=</span><span class="s">"list-unstyled"</span><span class="nt">&gt;</span>
          <span class="nt">&lt;li&gt;</span>...<span class="nt">&lt;/li&gt;</span>
        <span class="nt">&lt;/ul&gt;</span></code></pre></figure>

          <h3 id="inline">Inline<a class="anchorjs-link" href="#inline"><span class="anchorjs-icon"></span></a></h3>
          <p>Place all list items on a single line with <code>display: inline-block;</code> and some light padding.</p>
          <div class="bs-example" data-example-id="list-inline">
            <ul class="list-inline">
              <li>Lorem ipsum</li>
              <li>Phasellus iaculis</li>
              <li>Nulla volutpat</li>
            </ul>
          </div>
        <figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;ul</span> <span class="na">class=</span><span class="s">"list-inline"</span><span class="nt">&gt;</span>
          <span class="nt">&lt;li&gt;</span>...<span class="nt">&lt;/li&gt;</span>
        <span class="nt">&lt;/ul&gt;</span></code></pre></figure>

          <h3 id="description">Description<a class="anchorjs-link" href="#description"><span class="anchorjs-icon"></span></a></h3>
          <p>A list of terms with their associated descriptions.</p>
          <div class="bs-example" data-example-id="simple-dl">
            <dl>
              <dt>Description lists</dt>
              <dd>A description list is perfect for defining terms.</dd>
              <dt>Euismod</dt>
              <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
              <dd>Donec id elit non mi porta gravida at eget metus.</dd>
              <dt>Malesuada porta</dt>
              <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
            </dl>
          </div>
        <figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;dl&gt;</span>
          <span class="nt">&lt;dt&gt;</span>...<span class="nt">&lt;/dt&gt;</span>
          <span class="nt">&lt;dd&gt;</span>...<span class="nt">&lt;/dd&gt;</span>
        <span class="nt">&lt;/dl&gt;</span></code></pre></figure>

          <h4 id="horizontal-description">Horizontal description<a class="anchorjs-link" href="#horizontal-description"><span class="anchorjs-icon"></span></a></h4>
          <p>Make terms and descriptions in <code>&lt;dl&gt;</code> line up side-by-side. Starts off stacked like default <code>&lt;dl&gt;</code>s, but when the navbar expands, so do these.</p>
          <div class="bs-example" data-example-id="horizontal-dl">
            <dl class="dl-horizontal">
              <dt>Description lists</dt>
              <dd>A description list is perfect for defining terms.</dd>
              <dt>This is a very long title for a value, it's here to demonstrate wrapping.</dt>
              <dd>Quite cool, no?</dd>
              <dt>IBAN</dt>
              <dd>DE89 3704 0044 0532 0130 00</dd>
              <dt>Recipient gets</dt>
              <dd>1,000,000 USD</dd>
              <dt>Sending via</dt>
              <dd>Slack</dd>
            </dl>
          </div>

          <figure class="highlight"><pre><code class="language-html" data-lang="html">  <span class="nt">&lt;dl</span> <span class="na">class=</span><span class="s">"dl-horizontal"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;dt&gt;</span>...<span class="nt">&lt;/dt&gt;</span>
            <span class="nt">&lt;dd&gt;</span>...<span class="nt">&lt;/dd&gt;</span>
            <span class="nt">&lt;dt&gt;</span>...<span class="nt">&lt;/dt&gt;</span>
            <span class="nt">&lt;dd&gt;</span>...<span class="nt">&lt;/dd&gt;</span>
          <span class="nt">&lt;/dl&gt;</span>
          </code></pre></figure>

          <div class="alert alert-info" id="callout-type-dl-truncate">
            <h4>Auto-truncating</h4>
            <p>Horizontal description lists will truncate terms that are too long to fit in the left column with <code>text-overflow</code>. In narrower viewports, they will change to the default stacked layout.</p>
          </div>

          <h4 id="horizontal-description-item">Horizontal description item<a class="anchorjs-link" href="#horizontal-description-item"><span class="anchorjs-icon"></span></a></h4>
          <p>
            Make terms and descriptions in <code>&lt;dl&gt;</code> line up side-by-side.
            Has to be used as single items, not in big definition lists.
            Differs from regular horizontal description, as:
          </p>
          <ul>
            <li>it never stacks</li>
            <li>overflow is not truncated, but wrapped</li>
            <li>values are right-aligned</li>
          </ul>

          <div class="bs-example">
            <dl class="dl-horizontal-item">
              <dt>Description lists</dt>
              <dd>A description list is perfect for defining terms.</dd>
            </dl>
            <dl class="dl-horizontal-item">
              <dt>This is a very long title for a value, it's here to demonstrate wrapping.</dt>
              <dd>Quite cool, no?</dd>
            </dl>
            <dl class="dl-horizontal-item">
              <dt>IBAN</dt>
              <dd>DE89 3704 0044 0532 0130 00</dd>
            </dl>
            <dl class="dl-horizontal-item">
              <dt>Recipient gets</dt>
              <dd>1,000,000 USD</dd>
            </dl>
            <dl class="dl-horizontal-item">
              <dt>Sending via</dt>
              <dd>Slack</dd>
            </dl>
          </div>


        <figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;dl</span> <span class="na">class=</span><span class="s">"dl-horizontal-item"</span><span class="nt">&gt;</span>
          <span class="nt">&lt;dt&gt;</span>...<span class="nt">&lt;/dt&gt;</span>
          <span class="nt">&lt;dd&gt;</span>...<span class="nt">&lt;/dd&gt;</span>
        <span class="nt">&lt;/dl&gt;</span>
        <span class="nt">&lt;dl</span> <span class="na">class=</span><span class="s">"dl-horizontal-item"</span><span class="nt">&gt;</span>
          <span class="nt">&lt;dt&gt;</span>...<span class="nt">&lt;/dt&gt;</span>
          <span class="nt">&lt;dd&gt;</span>...<span class="nt">&lt;/dd&gt;</span>
        <span class="nt">&lt;/dl&gt;</span></code></pre></figure>

          <h3 id="description-columns">Description Columns<a class="anchorjs-link" href="#description-columns"><span class="anchorjs-icon"></span></a></h3>
          <p>Use grids to align definitions in columns.</p>
          <div class="bs-example" data-example-id="simple-dl">
            <div class="row">
              <dl class="col-sm-6">
                <dt>Label</dt>
                <dd>A definition</dd>
              </dl>
              <dl class="col-sm-6">
                <dt>Label</dt>
                <dd>A definition</dd>
              </dl>
              <dl class="col-sm-6">
                <dt>Label</dt>
                <dd>A definition</dd>
              </dl>
              <dl class="col-sm-6">
                <dt>Label</dt>
                <dd>A definition</dd>
              </dl>
            </div>
          </div>
        <figure class="highlight"><pre><code class="language-html" data-lang="html"><span class="nt">&lt;div</span> <span class="na">class=</span><span class="s">"row"</span><span class="nt">&gt;</span>
          <span class="nt">&lt;dl</span> <span class="na">class=</span><span class="s">"col-sm-6"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;dt&gt;</span>...<span class="nt">&lt;/dt&gt;</span>
            <span class="nt">&lt;dd&gt;</span>...<span class="nt">&lt;/dd&gt;</span>
          <span class="nt">&lt;/dl&gt;</span>
          <span class="nt">&lt;dl</span> <span class="na">class=</span><span class="s">"col-sm-6"</span><span class="nt">&gt;</span>
            <span class="nt">&lt;dt&gt;</span>...<span class="nt">&lt;/dt&gt;</span>
            <span class="nt">&lt;dd&gt;</span>...<span class="nt">&lt;/dd&gt;</span>
          <span class="nt">&lt;/dl&gt;</span>
        <span class="nt">&lt;/div&gt;</span></code></pre></figure>

      </section>
    );
  }
}

export default Core;
