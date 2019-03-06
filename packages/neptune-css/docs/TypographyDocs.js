import React, { Component } from "react";

class Typography extends Component {
  render() {
    return (
      <section id="typography" className="wrap--page section">
        <h1 className="colored-dot">
          Typography
          <span className="badge badge-primary">BT</span>
        </h1>
        <p className="lead">7kB minified [WIP]</p>
        <div className="section">
          <h2 id="headings">Headings</h2>

          <p>
            All HTML headings,
            <code>&lt;h1&gt;</code>
            through
            <code>&lt;h6&gt;</code>, are available.
            <code>.h1</code>
            through
            <code>.h6</code>
            classNamees are also available, for when you want to match the font
            styling of a heading but still want your text to be displayed
            inline.
          </p>
          <div className="tw-example tw-example-type">
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <h1>h1. heading</h1>
                  </td>
                  <td className="type-info">
                    <span className="hidden-xs hidden-sm">
                      bold 42px
                      <br />
                      line-height 48px
                      <br />
                      margin-bottom 8px
                    </span>
                    <span className="visible-xs visible-sm">
                      bold 28px
                      <br />
                      line-height 32px
                      <br />
                      margin-bottom 4px
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h2>h2. heading</h2>
                  </td>
                  <td className="type-info">
                    <span className="hidden-xs hidden-sm">
                      bold 28px
                      <br />
                      line-height 32px
                      <br />
                      margin-bottom 4px
                    </span>
                    <span className="visible-xs visible-sm">
                      bold 22px
                      <br />
                      line-height 30px
                      <br />
                      margin-bottom 2px
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h3>h3. heading</h3>
                  </td>
                  <td className="type-info">
                    <span className="hidden-xs hidden-sm">
                      semi-bold 22px
                      <br />
                      line-height 30px
                      <br />
                      margin-bottom 2px
                    </span>
                    <span className="visible-xs visible-sm">
                      semi-bold 18px
                      <br />
                      line-height 24px
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h4>h4. heading</h4>
                  </td>
                  <td className="type-info">
                    <span className="hidden-xs hidden-sm">
                      semi-bold 18px
                      <br />
                      line-height 24px
                    </span>
                    <span className="visible-xs visible-sm">
                      semi-bold 16px
                      <br />
                      line-height 24px
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>h5. heading</h5>
                  </td>
                  <td className="type-info">
                    semi-bold 16px
                    <br />
                    line-height 24px
                  </td>
                </tr>
                <tr>
                  <td>
                    <h6>h6. heading</h6>
                  </td>
                  <td className="type-info">
                    semi-bold 14px
                    <br />
                    line-height 24px
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <figure className="highlight">
            <pre>
              <code className="language-html" data-lang="html">
                <span className="nt">&lt;h1&gt;</span>h1. heading
                <span className="nt">&lt;/h1&gt;</span>
                <span className="nt">&lt;h2&gt;</span>h2. heading
                <span className="nt">&lt;/h2&gt;</span>
                <span className="nt">&lt;h3&gt;</span>h3. heading
                <span className="nt">&lt;/h3&gt;</span>
                <span className="nt">&lt;h4&gt;</span>h4. heading
                <span className="nt">&lt;/h4&gt;</span>
                <span className="nt">&lt;h5&gt;</span>h5. heading
                <span className="nt">&lt;/h5&gt;</span>
                <span className="nt">&lt;h6&gt;</span>h6. heading
                <span className="nt">&lt;/h6&gt;</span>
              </code>
            </pre>
          </figure>

          <p>
            Create contextual headings with the built in background helper
            classNamees.
          </p>
          <div className="tw-example" data-example-id="small-headings">
            <div className="bg-default p-a-2">
              <h1>h1. heading</h1>
              <h2>h2. heading</h2>
              <h3>h3. heading</h3>
              <h4>h4. heading</h4>
              <h5>h5. heading</h5>
              <h6>h6. heading</h6>
            </div>
            <div className="bg-info p-a-2">
              <h1>h1. heading</h1>
              <h2>h2. heading</h2>
              <h3>h3. heading</h3>
              <h4>h4. heading</h4>
              <h5>h5. heading</h5>
              <h6>h6. heading</h6>
            </div>
            <div className="bg-primary p-a-2">
              <h1>h1. heading</h1>
              <h2>h2. heading</h2>
              <h3>h3. heading</h3>
              <h4>h4. heading</h4>
              <h5>h5. heading</h5>
              <h6>h6. heading</h6>
            </div>
          </div>
          <figure className="highlight">
            <pre>
              <code className="language-html" data-lang="html">
                <span className="nt">&lt;div</span>{" "}
                <span className="na">className=</span>
                <span className="s">"bg-default"</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;h1&gt;</span>h1. heading
                <span className="nt">&lt;/h1&gt;</span>
                <span className="nt">&lt;h2&gt;</span>h2. heading
                <span className="nt">&lt;/h2&gt;</span>
                <span className="nt">&lt;h3&gt;</span>h3. heading
                <span className="nt">&lt;/h3&gt;</span>
                <span className="nt">&lt;h4&gt;</span>h4. heading
                <span className="nt">&lt;/h4&gt;</span>
                <span className="nt">&lt;h5&gt;</span>h5. heading
                <span className="nt">&lt;/h5&gt;</span>
                <span className="nt">&lt;h6&gt;</span>h6. heading
                <span className="nt">&lt;/h6&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span>{" "}
                <span className="na">className=</span>
                <span className="s">"bg-info"</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;h1&gt;</span>h1. heading
                <span className="nt">&lt;/h1&gt;</span>
                <span className="nt">&lt;h2&gt;</span>h2. heading
                <span className="nt">&lt;/h2&gt;</span>
                <span className="nt">&lt;h3&gt;</span>h3. heading
                <span className="nt">&lt;/h3&gt;</span>
                <span className="nt">&lt;h4&gt;</span>h4. heading
                <span className="nt">&lt;/h4&gt;</span>
                <span className="nt">&lt;h5&gt;</span>h5. heading
                <span className="nt">&lt;/h5&gt;</span>
                <span className="nt">&lt;h6&gt;</span>h6. heading
                <span className="nt">&lt;/h6&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
                <span className="nt">&lt;div</span>{" "}
                <span className="na">className=</span>
                <span className="s">"bg-primary"</span>
                <span className="nt">&gt;</span>
                <span className="nt">&lt;h1&gt;</span>h1. heading
                <span className="nt">&lt;/h1&gt;</span>
                <span className="nt">&lt;h2&gt;</span>h2. heading
                <span className="nt">&lt;/h2&gt;</span>
                <span className="nt">&lt;h3&gt;</span>h3. heading
                <span className="nt">&lt;/h3&gt;</span>
                <span className="nt">&lt;h4&gt;</span>h4. heading
                <span className="nt">&lt;/h4&gt;</span>
                <span className="nt">&lt;h5&gt;</span>h5. heading
                <span className="nt">&lt;/h5&gt;</span>
                <span className="nt">&lt;h6&gt;</span>h6. heading
                <span className="nt">&lt;/h6&gt;</span>
                <span className="nt">&lt;/div&gt;</span>
              </code>
            </pre>
          </figure>
        </div>
        <h2>Display headings</h2>
        <p>
          Traditional heading elements are designed to work best in the meat of
          your page content. When you need a heading to stand out, consider
          using a<strong>display heading</strong>
          —a larger, slightly more opinionated heading style.
        </p>
        <div className="tw-example" data-example-id="display-headings">
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <h1 className="display-1">Display 1</h1>
                </td>
              </tr>
              <tr>
                <td>
                  <h1 className="display-2">Display 2</h1>
                </td>
              </tr>
              <tr>
                <td>
                  <h1 className="display-3">Display 3</h1>
                </td>
              </tr>
              <tr>
                <td>
                  <h1 className="display-4">Display 4</h1>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <figure className="highlight">
          <pre>
            <code className="language-html" data-lang="html">
              <span className="nt">&lt;h1</span>{" "}
              <span className="na">className=</span>
              <span className="s">"display-1"</span>
              <span className="nt">&gt;</span>Display 1
              <span className="nt">&lt;/h1&gt;</span>
              <span className="nt">&lt;h1</span>{" "}
              <span className="na">className=</span>
              <span className="s">"display-2"</span>
              <span className="nt">&gt;</span>Display 2
              <span className="nt">&lt;/h1&gt;</span>
              <span className="nt">&lt;h1</span>{" "}
              <span className="na">className=</span>
              <span className="s">"display-3"</span>
              <span className="nt">&gt;</span>Display 3
              <span className="nt">&lt;/h1&gt;</span>
              <span className="nt">&lt;h1</span>{" "}
              <span className="na">className=</span>
              <span className="s">"display-4"</span>
              <span className="nt">&gt;</span>Display 4
              <span className="nt">&lt;/h1&gt;</span>
            </code>
          </pre>
        </figure>

        <h2 id="type-body-copy">
          Body copy
          <a className="anchorjs-link" href="#type-body-copy">
            <span className="anchorjs-icon" />
          </a>
        </h2>
        <p>
          Bootstrap's global default
          <code>font-size</code>
          is
          <strong>16px</strong>, with a<code>line-height</code>
          of
          <strong>24px</strong>. This is applied to the
          <code>&lt;body&gt;</code>
          and all paragraphs. In addition,
          <code>&lt;p&gt;</code>
          (paragraphs) receive a bottom margin of their full line-height (24px
          by default).
        </p>
        <div className="tw-example" data-example-id="body-copy">
          <p>
            Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Nullam id dolor id nibh ultricies vehicula.
          </p>
          <p>
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Donec ullamcorper nulla non metus auctor
            fringilla. Duis mollis, est non commodo luctus, nisi erat porttitor
            ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non
            metus auctor fringilla.
          </p>
          <p>
            Maecenas sed diam eget risus varius blandit sit amet non magna.
            Donec id elit non mi porta gravida at eget metus. Duis mollis, est
            non commodo luctus, nisi erat porttitor ligula, eget lacinia odio
            sem nec elit.
          </p>
        </div>
        <figure className="highlight">
          <pre>
            <code className="language-html" data-lang="html">
              <span className="nt">&lt;p&gt;</span>...
              <span className="nt">&lt;/p&gt;</span>
            </code>
          </pre>
        </figure>

        <h2>Body copy .lead</h2>
        <h3 id="lead-body-copy">
          Lead body copy
          <a className="anchorjs-link" href="#lead-body-copy">
            <span className="anchorjs-icon" />
          </a>
        </h3>
        <p>
          Make a paragraph stand out by adding
          <code>.lead</code>.
        </p>
        <div className="tw-example" data-example-id="lead-copy">
          <p className="lead">
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor. Duis mollis, est non commodo luctus.
          </p>
        </div>
        <figure className="highlight">
          <pre>
            <code className="language-html" data-lang="html">
              <span className="nt">&lt;p</span>{" "}
              <span className="na">className=</span>
              <span className="s">"lead"</span>
              <span className="nt">&gt;</span>...
              <span className="nt">&lt;/p&gt;</span>
            </code>
          </pre>
        </figure>

        <h2>Using Less</h2>
        <h3 id="built-with-less">
          Built with Less
          <a className="anchorjs-link" href="#built-with-less">
            <span className="anchorjs-icon" />
          </a>
        </h3>
        <p>
          The typographic scale is based on two Less variables in
          <strong>variables.less</strong>:<code>@font-size-base</code>
          and
          <code>@line-height-base</code>. The first is the base font-size used
          throughout and the second is the base line-height. We use those
          variables and some simple math to create the margins, paddings, and
          line-heights of all our type and more. Customize them and Bootstrap
          adapts.
        </p>

        <h2>Inline text elements</h2>
        <h2 id="type-inline-text">
          Inline text elements
          <a className="anchorjs-link" href="#type-inline-text">
            <span className="anchorjs-icon" />
          </a>
        </h2>
        <h3 id="marked-text">
          Marked text
          <a className="anchorjs-link" href="#marked-text">
            <span className="anchorjs-icon" />
          </a>
        </h3>
        <p>
          For highlighting a run of text due to its relevance in another
          context, use the
          <code>&lt;mark&gt;</code>
          tag.
        </p>
        <div className="tw-example" data-example-id="simple-mark">
          <p>
            You can use the mark tag to
            <mark>highlight</mark>
            text.
          </p>
        </div>
        <figure className="highlight">
          <pre>
            <code className="language-html" data-lang="html">
              You can use the mark tag to{" "}
              <span className="nt">&lt;mark&gt;</span>
              highlight<span className="nt">&lt;/mark&gt;</span> text.
            </code>
          </pre>
        </figure>

        <h3 id="deleted-text">
          Deleted text
          <a className="anchorjs-link" href="#deleted-text">
            <span className="anchorjs-icon" />
          </a>
        </h3>
        <p>
          For indicating blocks of text that have been deleted use the
          <code>&lt;del&gt;</code>
          tag.
        </p>
        <div className="tw-example" data-example-id="simple-del">
          <p>
            <del>This line of text is meant to be treated as deleted text.</del>
          </p>
        </div>
        <figure className="highlight">
          <pre>
            <code className="language-html" data-lang="html">
              <span className="nt">&lt;del&gt;</span>This line of text is meant
              to be treated as deleted text.
              <span className="nt">&lt;/del&gt;</span>
            </code>
          </pre>
        </figure>

        <h3 id="strikethrough-text">
          Strikethrough text
          <a className="anchorjs-link" href="#strikethrough-text">
            <span className="anchorjs-icon" />
          </a>
        </h3>
        <p>
          For indicating blocks of text that are no longer relevant use the
          <code>&lt;s&gt;</code>
          tag.
        </p>
        <div className="tw-example" data-example-id="simple-s">
          <p>
            <s>
              This line of text is meant to be treated as no longer accurate.
            </s>
          </p>
        </div>
        <figure className="highlight">
          <pre>
            <code className="language-html" data-lang="html">
              <span className="nt">&lt;s&gt;</span>This line of text is meant to
              be treated as no longer accurate.
              <span className="nt">&lt;/s&gt;</span>
            </code>
          </pre>
        </figure>

        <h3 id="inserted-text">
          Inserted text
          <a className="anchorjs-link" href="#inserted-text">
            <span className="anchorjs-icon" />
          </a>
        </h3>
        <p>
          For indicating additions to the document use the
          <code>&lt;ins&gt;</code>
          tag.
        </p>
        <div className="tw-example" data-example-id="simple-ins">
          <p>
            <ins>
              This line of text is meant to be treated as an addition to the
              document.
            </ins>
          </p>
        </div>
        <figure className="highlight">
          <pre>
            <code className="language-html" data-lang="html">
              <span className="nt">&lt;ins&gt;</span>This line of text is meant
              to be treated as an addition to the document.
              <span className="nt">&lt;/ins&gt;</span>
            </code>
          </pre>
        </figure>

        <h3 id="underlined-text">
          Underlined text
          <a className="anchorjs-link" href="#underlined-text">
            <span className="anchorjs-icon" />
          </a>
        </h3>
        <p>
          To underline text use the
          <code>&lt;u&gt;</code>
          tag.
        </p>
        <div className="tw-example" data-example-id="simple-u">
          <p>
            <u>This line of text will render as underlined</u>
          </p>
        </div>
        <figure className="highlight">
          <pre>
            <code className="language-html" data-lang="html">
              <span className="nt">&lt;u&gt;</span>This line of text will render
              as underlined<span className="nt">&lt;/u&gt;</span>
            </code>
          </pre>
        </figure>

        <p>Make use of HTML's default emphasis tags with lightweight styles.</p>

        <h3 id="small-text">
          Small text
          <a className="anchorjs-link" href="#small-text">
            <span className="anchorjs-icon" />
          </a>
        </h3>
        <p>
          For de-emphasizing inline or blocks of text, use the
          <code>&lt;small&gt;</code>
          tag to set text at 85% the size of the parent. Heading elements
          receive their own
          <code>font-size</code>
          for nested
          <code>&lt;small&gt;</code>
          elements.
        </p>
        <p>
          You may alternatively use an inline element with
          <code>.small</code>
          in place of any
          <code>&lt;small&gt;</code>.
        </p>
        <div className="tw-example" data-example-id="simple-small">
          <p>
            <small>
              This line of text is meant to be treated as fine print.
            </small>
          </p>
        </div>
        <figure className="highlight">
          <pre>
            <code className="language-html" data-lang="html">
              <span className="nt">&lt;small&gt;</span>This line of text is
              meant to be treated as fine print.
              <span className="nt">&lt;/small&gt;</span>
            </code>
          </pre>
        </figure>

        <h3 id="bold">
          Bold
          <a className="anchorjs-link" href="#bold">
            <span className="anchorjs-icon" />
          </a>
        </h3>
        <p>For emphasizing a snippet of text with a heavier font-weight.</p>
        <div className="tw-example" data-example-id="simple-strong">
          <p>
            The following snippet of text is
            <strong>rendered as bold text</strong>.
          </p>
        </div>
        <figure className="highlight">
          <pre>
            <code className="language-html" data-lang="html">
              <span className="nt">&lt;strong&gt;</span>rendered as bold text
              <span className="nt">&lt;/strong&gt;</span>
            </code>
          </pre>
        </figure>

        <h3 id="italics">
          Italics
          <a className="anchorjs-link" href="#italics">
            <span className="anchorjs-icon" />
          </a>
        </h3>
        <p>For emphasizing a snippet of text with italics.</p>
        <div className="tw-example" data-example-id="simple-em">
          <p>
            The following snippet of text is
            <em>rendered as italicized text</em>.
          </p>
        </div>
        <figure className="highlight">
          <pre>
            <code className="language-html" data-lang="html">
              <span className="nt">&lt;em&gt;</span>rendered as italicized text
              <span className="nt">&lt;/em&gt;</span>
            </code>
          </pre>
        </figure>

        <div className="alert alert-info" id="callout-type-b-i-elems">
          <h4>Alternate elements</h4>
          <p>
            Feel free to use
            <code>&lt;b&gt;</code>
            and
            <code>&lt;i&gt;</code>
            in HTML5.
            <code>&lt;b&gt;</code>
            is meant to highlight words or phrases without conveying additional
            importance while
            <code>&lt;i&gt;</code>
            is mostly for voice, technical terms, etc.
          </p>
        </div>
      </section>
    );
  }
}

export default Typography;
