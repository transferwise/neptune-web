import React, { Component, Fragment } from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
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
    classNames: Types.objectOf(Types.string),
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
    classNames: {},
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

  style = className => this.props.classNames[className] || className;

  render() {
    const { selectedCurrency, onCurrencyChange, size, addon } = this.props;
    const selectOptions = this.getSelectOptions();
    const isFixedCurrency =
      !this.state.searchQuery &&
      ((selectOptions.length === 1 && selectOptions[0].currency === selectedCurrency.currency) ||
        !onCurrencyChange);

    const disabled = !this.props.onAmountChange;
    return (
      <div
        className={classNames(
          this.style('tw-money-input'),
          this.style('input-group'),
          this.style(`input-group-${size}`),
        )}
      >
        <input
          id={this.props.id}
          value={this.state.formattedAmount}
          type="text"
          className={classNames(this.style('form-control'))}
          onChange={this.onAmountChange}
          onFocus={this.onAmountFocus}
          onBlur={this.onAmountBlur}
          disabled={disabled}
          autoComplete="off"
        />
        {addon && (
          <span
            className={classNames(
              this.style('input-group-addon'),
              this.style(`input-${size}`),
              disabled ? this.style('tw-money-input--disabled') : '',
            )}
          >
            {addon}
          </span>
        )}
        {isFixedCurrency ? (
          <div
            className={classNames(
              this.style('input-group-addon'),
              this.style(`input-${size}`),
              this.style('tw-money-input__fixed-currency'),
              disabled ? this.style('tw-money-input--disabled') : '',
            )}
          >
            {size === 'lg' && (
              <Fragment>
                <i className={classNames(this.style('tw-money-input__keyline'))} />
                <i
                  className={classNames(
                    this.style('currency-flag'),
                    this.style(`currency-flag-${selectedCurrency.currency.toLowerCase()}`),
                    this.style('hidden-xs'),
                    this.style('m-r-2'),
                  )}
                />
              </Fragment>
            )}
            <span className={size === 'lg' ? this.style('m-r-1') : ''}>
              {selectedCurrency.currency.toUpperCase()}
            </span>
          </div>
        ) : (
          <span
            className={classNames(
              this.style('input-group-btn'),
              this.style('amount-currency-select-btn'),
            )}
          >
            <Select
              classNames={this.props.classNames}
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

  const filteredOptions = removeDuplicateValueOptions(options).filter(option =>
    isCurrencyOptionAndFitsQuery(option, query),
  );

  return sortOptionsLabelsToFirst(filteredOptions, query);
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

function sortOptionsLabelsToFirst(options, query) {
  return options.sort((first, second) => {
    const firstContains = contains(first.label, query);
    const secondContains = contains(second.label, query);

    if (firstContains && secondContains) {
      return 0;
    }
    if (firstContains) {
      return -1;
    }
    if (secondContains) {
      return 1;
    }
    return 0;
  });
}
