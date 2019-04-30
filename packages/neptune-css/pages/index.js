import Layout from '../doc-components/Layout'
import Code from '../doc-components/Code';

export default () => (
  <header className="container container--wide section">
    <h1 className="display-4 colored-dot">Neptune CSS.</h1>
    <p className="lead">CSS library</p>

    <Code lang="javascript">{`
    import "~neptune-css/build/css/[component].css";
    `}</Code>
  </header>
)
