import React, { Component } from 'react';

import { Money } from '../src';

class MoneyDocs extends Component {
  state = {
    amount: 1234.5678,
    currency: 'GBP',
  };

  render() {
    const { amount, currency } = this.state;

    return (
      <div className="container" id="money">
        <div className="section">
          <div className="row">
            <div className="col-md-6">
              <h2>Money</h2>
              <p>Must be funny...</p>
              <pre className="tw-docs-code">{`<Money amount={${amount}} currency="${currency}" />`}</pre>
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
                <Money amount={amount} currency={currency} />
              </div>

              <div className="m-t-4 row">
                <div className="col-sm-6">
                  <label htmlFor="money-amount-input" className="control-label">
                    Amount
                  </label>
                  <input
                    id="money-amount-input"
                    type="number"
                    value={amount}
                    onChange={event => this.setState({ amount: event.target.value })}
                    className="form-control"
                  />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="money-currency-input" className="control-label">
                    Currency
                  </label>
                  <input
                    id="money-currency-input"
                    type="text"
                    value={currency}
                    onChange={event => this.setState({ currency: event.target.value })}
                    className="form-control"
                  />
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
