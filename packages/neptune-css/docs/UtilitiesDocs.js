import React from 'react';

import Refractor from 'react-refractor';
import markup from 'refractor/lang/markup';
import './less/prism.css';

const Utilities = () => (
  <section id="utilities" className="container--wide section">
    <h1 className="colored-dot doc-section__title">Utilities</h1>


    <Refractor
      language="markup"
      value={`
      html
       `}
    />
  </section>
);

export default Utilities;
