import React, { Component, Fragment } from 'react';
import Types from 'prop-types';
import Select from '../select';
import './MoneyInput.less';

import { formatAmount, parseAmount } from './currencyFormatting';

const Currency = Types.shape({
  header: Types.string,
  value: Types.string,
  label: Types.string,
  currency: Types.string,
  note: Types.string,
  searchable: Types.string,
});
const CUSTOM_ACTION = 'CUSTOM_ACTION';

export default class MoneyInput extends Component {
  static propTypes = {
    id: Types.string,
    currencies: Types.arrayOf(Currency).isRequired,
    selectedCurrency: Currency.isRequired,
    onCurrencyChange: Types.func,
    amount: Types.number.isRequired,
    size: Types.oneOf(['sm', 'md', 'lg']),
    onAmountChange: Types.func,
    locale: Types.string,
    addon: Types.node,
    searchPlaceholder: Types.string,
    customActionLabel: Types.node,
    onCustomAction: Types.func,
  };

  static defaultProps = {
    id: null,
    size: 'lg',
    locale: 'en-GB',
    addon: null,
    searchPlaceholder: '',
    onCurrencyChange: null,
    onAmountChange: null,
    customActionLabel: '',
    onCustomAction: null,
  };

  state = {
    searchQuery: '',
    formattedAmount: formatAmount(
      this.props.amount,
      this.props.selectedCurrency.currency,
      this.props.locale,
    ),
  };

  componentWillReceiveProps(nextProps) {
    if (!this.amountFocused) {
      this.setState({
        formattedAmount: formatAmount(
          nextProps.amount,
          nextProps.selectedCurrency.currency,
          nextProps.locale,
        ),
      });
    }
  }

  onAmountChange = event => {
    const { value } = event.target;
    this.setState({
      formattedAmount: value,
    });
    const parsed = parseAmount(value, this.props.selectedCurrency.currency, this.props.locale);
    if (!Number.isNaN(parsed)) {
      this.props.onAmountChange(parsed);
    }
  };

  onAmountBlur = () => {
    this.amountFocused = false;
    this.formatAmount();
  };

  onAmountFocus = () => {
    this.amountFocused = true;
  };

  getSelectOptions() {
    const selectOptions = [...filterOptionsForQuery(this.props.currencies, this.state.searchQuery)];

    if (this.props.onCustomAction) {
      selectOptions.push({ value: CUSTOM_ACTION, label: this.props.customActionLabel });
    }

    return selectOptions;
  }

  formatAmount() {
    this.setState(previousState => {
      const parsed = parseAmount(
        previousState.formattedAmount,
        this.props.selectedCurrency.currency,
        this.props.locale,
      );
      if (Number.isNaN(parsed)) {
        return {
          formattedAmount: previousState.formattedAmount,
        };
      }
      return {
        formattedAmount: formatAmount(
          parsed,
          this.props.selectedCurrency.currency,
          this.props.locale,
        ),
      };
    });
  }

  handleSelectChange = value => {
    this.setState({ searchQuery: '' });

    if (this.props.onCustomAction && value.value === CUSTOM_ACTION) {
      this.props.onCustomAction();
    } else {
      this.props.onCurrencyChange(value);
    }
  };

  render() {
    const { selectedCurrency, onCurrencyChange, size, addon } = this.props;
    const selectOptions = this.getSelectOptions();
    const isFixedCurrency =
      !this.state.searchQuery &&
      ((selectOptions.length === 1 && selectOptions[0].currency === selectedCurrency.currency) ||
        !onCurrencyChange);

    const disabled = !this.props.onAmountChange;
    return (
      <div className={`tw-money-input input-group input-group-${size}`}>
        <input
          id={this.props.id}
          value={this.state.formattedAmount}
          type="text"
          className="form-control"
          onChange={this.onAmountChange}
          onFocus={this.onAmountFocus}
          onBlur={this.onAmountBlur}
          disabled={disabled}
        />
        {addon && (
          <span
            className={`input-group-addon input-${size} ${
              disabled ? 'tw-money-input--disabled' : ''
            }`}
          >
            {addon}
          </span>
        )}
        {isFixedCurrency ? (
          <div
            className={`input-group-addon input-${size} tw-money-input__fixed-currency ${
              disabled ? 'tw-money-input--disabled' : ''
            }`}
          >
            {size === 'lg' && (
              <Fragment>
                <i className="tw-money-input__keyline" />
                <i
                  className={`currency-flag currency-flag-${selectedCurrency.currency.toLowerCase()} m-r-2`}
                />
              </Fragment>
            )}
            <span className={size === 'lg' ? 'm-r-1' : ''}>
              {selectedCurrency.currency.toUpperCase()}
            </span>
          </div>
        ) : (
          <span className="input-group-btn amount-currency-select-btn">
            <Select
              options={selectOptions}
              selected={{ ...selectedCurrency, note: null }}
              onChange={this.handleSelectChange}
              searchPlaceholder={this.props.searchPlaceholder}
              onSearchChange={searchQuery => this.setState({ searchQuery })}
              searchValue={this.state.searchQuery}
              size={size}
              required
              dropdownRight="xs"
              dropdownWidth="lg"
              inverse
            />
          </span>
        )}
      </div>
    );
  }
}

function filterOptionsForQuery(options, query) {
  if (!query) {
    return options;
  }

  return removeDuplicateValueOptions(options).filter(option =>
    isCurrencyOptionAndFitsQuery(option, query),
  );
}

function removeDuplicateValueOptions(options) {
  const result = [];
  const resultValues = [];

  options.forEach(option => {
    if (option.value && resultValues.indexOf(option.value) === -1) {
      result.push(option);
      resultValues.push(option.value);
    }
  });

  return result;
}

function isCurrencyOptionAndFitsQuery(option, query) {
  if (!option.value) {
    return false;
  }

  return (
    contains(option.label, query) ||
    contains(option.searchable, query) ||
    contains(option.note, query)
  );
}

function contains(property, query) {
  return property && property.toLowerCase().indexOf(query.toLowerCase()) !== -1;
}
