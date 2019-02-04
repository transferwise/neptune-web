import React from 'react';
import { InstructionsList } from '../src';

const InstructionsListDocs = () => {
  const dos = [
    'Do an initial money transfer',
    'Invite at least 3 friends',
    'Convince them to use this amazing product',
  ];
  const donts = [
    'Continue paying extra hidden fees for international transfers',
    'Use bad exchange rate',
  ];

  return (
    <div className="container">
      <section className="section">
        <div className="row m-t-4">
          <div className="col-md-6">
            <h2>Instructions list</h2>
            <p>What the customer should do and what should not</p>
            <div className="m-t-2">
              {/* eslint-disable react/jsx-indent */}
              <pre className="tw-docs-code">{`<InstructionsList dos={dos} donts={donts} />`}</pre>
              {/* eslint-enable react/jsx-indent */}
            </div>
          </div>
          <div className="col-md-6">
            <InstructionsList dos={dos} donts={donts} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default InstructionsListDocs;
