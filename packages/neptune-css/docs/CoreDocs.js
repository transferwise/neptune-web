import React from 'react';
import Typography from './TypographyDocs';

const Core = () => (
  <div>
    <section id="core" className="container--wide section p-b-0">
      <h1 className="colored-dot doc-section__title">
            Core
      </h1>
      <ul>
        <li>Normalize</li>
        <li>Scaffolding</li>
        <li>
          Type
          <ul>
            <li>Headings</li>
            <li>Aligment</li>
          </ul>
        </li>
      </ul>
    </section>
    <Typography />
  </div>
);

export default Core;
