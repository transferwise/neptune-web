import React, { Component } from 'react';
import { MoneyInput } from '..';
import { generateCodeBlock, generateInput, generateState } from '../../docs/utils';

const SIZES = [
  { value: 'sm', label: 'sm' },
  { value: 'md', label: 'md' },
  { value: 'lg', label: 'lg' },
];

const KNOBS = {
  knobs: [
    {
      type: 'select',
      label: 'Size',
      state: 'size',
      options: SIZES,
      defaultState: SIZES[2],
    },
    {
      type: 'text',
      label: 'Currency search placeholder',
      state: 'searchPlaceholder',
      defaultState: 'Type a currency or country',
    },
  ],
};

const DOCSKNOBS = {
  knobs: [
    {
      type: 'checkbox',
      label: 'Addon Enabled?',
      state: 'addonEnabled',
      defaultState: false,
    },
    {
      type: 'checkbox',
      label: 'Custom Action',
      state: 'customActionEnabled',
      defaultState: false,
    },
    {
      type: 'checkbox',
      label: 'Disabled',
      state: 'amountChangeEnabled',
      defaultState: false,
    },
    {
      type: 'checkbox',
      label: 'Fixed currency ?',
      state: 'fixedCurrency',
      defaultState: false,
    },
  ],
};
const currencies = [
  {
    header: 'Popular currencies',
  },
  {
    value: 'EUR',
    label: 'EUR',
    note: 'Euro',
    currency: 'eur',
    searchable: 'Spain, Germany, France, Austria, Estonia',
  },
  {
    value: 'GBP',
    label: 'GBP',
    note: 'Great British Pound',
    currency: 'gbp',
    searchable: 'England, Scotland, Wales',
  },
  {
    header: 'All currencies',
  },
  {
    value: 'AUD',
    label: 'AUD',
    note: 'Australia Dollar',
    currency: 'aud',
  },
  {
    value: 'CAD',
    label: 'CAD',
    note: 'Canada Dollar',
    currency: 'cad',
  },
  {
    value: 'EUR',
    label: 'EUR',
    note: 'Euro',
    currency: 'eur',
    searchable: 'Spain, Germany, France, Austria, Estonia',
  },
  {
    value: 'GBP',
    label: 'GBP',
    note: 'Great British Pound',
    currency: 'gbp',
    searchable: 'England, Scotland, Wales',
  },
  {
    value: 'JPY',
    label: 'JPY',
    note: 'Japanese Yen',
    currency: 'jpy',
  },
  {
    value: 'USD',
    label: 'USD',
    note: 'United States Dollar',
    currency: 'usd',
    searchable: 'Hong Kong, Saudi Arabia',
  },
];

export default class MoneyInputDocs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCurrency: currencies[2],
      amount: 1000,
      // Not called `placeholder`, as `generateInput` uses this as a special field
      placeholderValue: null,
      form: {
        locale: 'en-GB',
        amount: '1000',
        placeholderValue: '',
      },
      ...generateState(KNOBS),
      ...generateState(DOCSKNOBS),
    };
  }

  getCurrencies = () => (this.state.fixedCurrency ? [this.state.selectedCurrency] : currencies);

  handleNumberChange(fieldName, event) {
    const {
      target: { value },
    } = event;
    this.setState(
      ({ form }) => ({
        form: { ...form, [fieldName]: value },
      }),
      () => {
        const parsed = parseFloat(value);
        if (!Number.isNaN(parsed)) {
          this.setState({ [fieldName]: parsed });
        } else {
          this.setState({ [fieldName]: null });
        }
      },
    );
  }

  handleLocaleChange(event) {
    const {
      target: { value: locale },
    } = event;
    this.setState(
      ({ form }) => ({
        form: { ...form, locale },
      }),
      () => {
        this.setState({ locale });
      },
    );
  }

  render() {
    const extraProps = {
      placeholder: this.state.placeholderValue,
      amount: this.state.amount,
      onAmountChange: !this.state.amountChangeEnabled ? '(amount) => {}' : null,
      onCurrencyChange: this.state.fixedCurrency ? undefined : '(currency) => {}',
      addon: this.state.addonEnabled ? `<i className="icon icon-unlock" />` : undefined,
      selectedCurrency: this.state.selectedCurrency,
      onCustomAction: this.state.customActionEnabled ? '() => {}' : undefined,
      customActionLabel: this.state.customActionEnabled ? 'Custom action label' : undefined,
      currencies: this.getCurrencies(),
    };
    return (
      <div className="container">
        <section className="section">
          <div className="row">
            <div className="col-md-6">
              <h2>Money Input</h2>
              <p>Cash makes the world go round</p>
              {generateCodeBlock('MoneyInput', KNOBS, this, extraProps)}
            </div>
            <div className="col-md-6">
              <div className={`form-group form-group-${this.state.size.value}`}>
                <label htmlFor="money-input" className="control-label">
                  How much?
                </label>
                <MoneyInput
                  id="money-input"
                  currencies={this.getCurrencies()}
                  placeholder={this.state.placeholderValue}
                  amount={this.state.amount}
                  locale={this.state.locale}
                  size={this.state.size.value}
                  onAmountChange={
                    !this.state.amountChangeEnabled
                      ? amount =>
                          this.setState(oldState => ({
                            ...oldState,
                            amount,
                            form: { ...oldState.form, amount: amount.toString() },
                          }))
                      : undefined
                  }
                  selectedCurrency={this.state.selectedCurrency}
                  onCurrencyChange={
                    this.state.fixedCurrency
                      ? undefined
                      : selectedCurrency => this.setState({ selectedCurrency })
                  }
                  addon={this.state.addonEnabled ? <i className="icon icon-unlock" /> : undefined}
                  searchPlaceholder={this.state.searchPlaceholder}
                  onCustomAction={
                    this.state.customActionEnabled ? () => alert('Custom action') : null // eslint-disable-line no-alert
                  }
                  customActionLabel={this.state.customActionEnabled ? 'Custom action label' : null}
                />
              </div>
              <div className="row m-t-5">
                <div className="col-md-6 m-b-2">
                  <label htmlFor="money-input-amount-selector" className="control-label">
                    Amount
                  </label>
                  <input
                    id="money-input-amount-selector"
                    type="number"
                    className="form-control"
                    value={`${this.state.form.amount}`}
                    onChange={event => this.handleNumberChange('amount', event)}
                  />
                </div>
                <div className="col-md-6 m-b-2">
                  <label htmlFor="money-input-placeholder-selector" className="control-label">
                    Placeholder
                  </label>
                  <input
                    id="money-input-placeholder-selector"
                    type="number"
                    className="form-control"
                    value={`${this.state.form.placeholderValue}`}
                    onChange={event => this.handleNumberChange('placeholderValue', event)}
                  />
                </div>
                <div className="col-md-6 m-b-2">
                  <label
                    htmlFor="money-input-number-format-locale-selector"
                    className="control-label"
                  >
                    Number format locale
                  </label>
                  <input
                    id="money-input-number-format-locale-selector"
                    type="text"
                    className="form-control"
                    value={this.state.form.locale}
                    onChange={event => this.handleLocaleChange(event)}
                  />
                </div>
                {KNOBS.knobs.map(knob => generateInput(knob, this))}
                {DOCSKNOBS.knobs.map(knob => generateInput(knob, this))}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
