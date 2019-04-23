import React from 'react';
import npmPackage from '../package.json';

const Header = () => (
  <div className="container">
    <section className="section row">
      <div className="col-md-6">
        <h1>
          Components{' '}
          <span role="img" aria-label="none">
            🎉
          </span>{' '}
          <small>v{npmPackage.version}</small>
        </h1>
        <p>TransferWise design system components in react.</p>
        <pre className="tw-docs-code">npm install @transferwise/components</pre>
      </div>
    </section>
  </div>
);
export default Header;
