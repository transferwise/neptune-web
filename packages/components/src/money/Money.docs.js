import React, { Component } from 'react';
import { Money } from '..';
import { generateCodeBlock, generateInput, generateState } from '../../docs/utils';

const KNOBS = {
  knobs: [
    {
      type: 'number',
      label: 'Amount',
      state: 'amount',
      defaultState: 1234.5678,
    },
    {
      type: 'text',
      label: 'Currency',
      state: 'currency',
      defaultState: 'GBP',
    },
    {
      type: 'text',
      label: 'Locale',
      state: 'locale',
      defaultState: 'en',
    },
  ],
};

class MoneyDocs extends Component {
  state = {
    ...generateState(KNOBS),
  };

  render() {
    const { amount, currency, locale } = this.state;

    return (
      <div className="container" id="money">
        <div className="section">
          <div className="row">
            <div className="col-md-6">
              <h2>Money</h2>
              <p>Must be funny...</p>
              {generateCodeBlock('Money', KNOBS, this, {})}
              Uses{' '}
              <a
                href="https://github.com/transferwise/formatting/"
                target="_blank"
                rel="noopener noreferrer"
              >
                @transferwise/formatting
              </a>{' '}
              and outputs plain text.
            </div>
            <div className="col-md-6">
              <div>
                <Money amount={amount} currency={currency} locale={locale} />
                <div className="row m-t-5">
                  {KNOBS.knobs.map(knob => generateInput(knob, this))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MoneyDocs;
