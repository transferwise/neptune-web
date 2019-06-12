import React from 'react';
import { Accordion } from '..';

const items = [
  {
    title: 'Item 1',
    content: 'I can be text',
  },
  {
    title: <h5 className="font-italic">Item 2</h5>,
    content: <i>Or whatever you want me to be</i>,
  },
  {
    title: 'Item 3',
    content:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  {
    title: 'Item 4',
    content: (
      <ul>
        <li>This</li>
        <li>is</li>
        <li>a</li>
        <li>list</li>
      </ul>
    ),
  },
];

const AccordionDocs = () => (
  <div className="container">
    <section className="section">
      <div className="row m-t-4">
        <div className="col-md-6">
          <h2>Accordion</h2>
          <p>[:||||||||||||:]</p>
          <div className="m-t-2">
            {/* eslint-disable react/jsx-indent */}
            <pre className="tw-docs-code">
              {`<Accordion
  items={[
    {
      title: 'Item 1',
      content: 'I can be plain text'
    },
    {
      title: <h5 className="font-italic">Item 2</h5>,
      content: <i>Or whatever you want me to be</i>
    }
  ]}
/>`}
            </pre>
            {/* eslint-enable react/jsx-indent */}
          </div>
        </div>
        <div className="col-md-6">
          <Accordion items={items} />
        </div>
      </div>
    </section>
  </div>
);

export default AccordionDocs;
