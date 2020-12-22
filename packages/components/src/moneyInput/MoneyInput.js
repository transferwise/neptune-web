import React, { useState, useEffect } from 'react';
import { useIntl } from 'react-intl';
import Types from 'prop-types';
import classnames from 'classnames';
import { isEmpty } from '@transferwise/neptune-validation';
import Select from '../select';
import './MoneyInput.css';
import { Size } from '../common/propsValues/size';

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

const formatAmountIfSet = (amount, currency, locale) => {
  return typeof amount === 'number' ? formatAmount(amount, currency, locale) : '';
};

let amountFocused = false;
function MoneyInput({
  id,
  currencies,
  selectedCurrency,
  onCurrencyChange,
  placeholder,
  amount,
  size,
  onAmountChange,
  addon,
  searchPlaceholder,
  onSearchChange,
  customActionLabel,
  onCustomAction,
  classNames,
}) {
  const intl = useIntl();
  const [searchQuery, setSearchQuery] = useState('');
  const [formattedAmount, setFormattedAmount] = useState(
    formatAmountIfSet(amount, selectedCurrency.currency, intl.locale),
  );

  function handleOnAmountChange(event) {
    const { value } = event.target;
    console.log('call handleOnAmountChange; value', value);
    setFormattedAmount(value);
    const parsed = isEmpty(value)
      ? null
      : parseAmount(value, selectedCurrency.currency, intl.locale);
    if (!Number.isNaN(parsed)) {
      onAmountChange(parsed);
    }
  }

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('call useEffect', amountFocused);
    if (!amountFocused) {
      setFormattedAmount(formatAmountIfSet(amount, selectedCurrency.currency, intl.locale));
    }
  }, [amount, selectedCurrency]);

  function onAmountBlur() {
    console.log('onAmountBlur');
    amountFocused = false;
    setAmount();
  }

  function onAmountFocus() {
    amountFocused = true;
  }

  function getSelectOptions() {
    const selectOptions = [...filterOptionsForQuery(currencies, searchQuery)];

    if (onCustomAction) {
      selectOptions.push({ value: CUSTOM_ACTION, label: customActionLabel });
    }

    return selectOptions;
  }

  function setAmount() {
    setFormattedAmount((prevState) => {
      console.log('prevState', prevState);
      const parsed = parseAmount(prevState, selectedCurrency.currency, intl.locale);
      if (Number.isNaN(parsed)) {
        return {
          formattedAmount: prevState,
        };
      }
      return {
        formattedAmount: formatAmountIfSet(parsed, selectedCurrency.currency, intl.locale),
      };
    });
  }

  // function setAmount() {
  //   const parsed = parseAmount(previousFormattedAmount, selectedCurrency.currency, intl.locale);
  //   if (Number.isNaN(parsed)) {
  //     setFormattedAmount(previousFormattedAmount);
  //   } else {
  //     setFormattedAmount(formatAmountIfSet(parsed, selectedCurrency.currency, intl.locale));
  //   }
  // }

  function handleSelectChange(value) {
    handleSearchChange('');

    if (onCustomAction && value.value === CUSTOM_ACTION) {
      onCustomAction();
    } else {
      onCurrencyChange(value);
    }
  }

  function handleSearchChange(query) {
    setSearchQuery(query);
    if (onSearchChange) {
      onSearchChange({
        query,
        filteredOptions: filterOptionsForQuery(currencies, query),
      });
    }
  }

  function style(className) {
    return classNames[className] || className;
  }

  const selectOptions = getSelectOptions();
  const isFixedCurrency =
    !searchQuery &&
    ((selectOptions.length === 1 && selectOptions[0].currency === selectedCurrency.currency) ||
      !onCurrencyChange);

  const disabled = !onAmountChange;

  return (
    <div
      className={classnames(
        style('tw-money-input'),
        style('input-group'),
        style(`input-group-${size}`),
      )}
    >
      <input
        id={id}
        value={formattedAmount}
        type="text"
        inputMode="decimal"
        className={classnames(style('form-control'))}
        onChange={handleOnAmountChange}
        onFocus={onAmountFocus}
        onBlur={onAmountBlur}
        disabled={disabled}
        placeholder={formatAmountIfSet(placeholder, selectedCurrency.currency, intl.locale)}
        autoComplete="off"
      />
      {addon && (
        <span
          className={classnames(
            style('input-group-addon'),
            style(`input-${size}`),
            disabled ? style('tw-money-input--disabled') : '',
          )}
        >
          {addon}
        </span>
      )}
      {isFixedCurrency ? (
        <div
          className={classnames(
            style('input-group-addon'),
            style(`input-${size}`),
            style('tw-money-input__fixed-currency'),
            disabled ? style('tw-money-input--disabled') : '',
          )}
        >
          {size === 'lg' && (
            <>
              <i className={classnames(style('tw-money-input__keyline'))} />
              <i
                className={classnames(
                  style('currency-flag'),
                  style(`currency-flag-${selectedCurrency.currency.toLowerCase()}`),
                  style('hidden-xs'),
                  style('m-r-2'),
                )}
              />
            </>
          )}
          <span className={size === 'lg' ? style('m-r-1') : ''}>
            {selectedCurrency.currency.toUpperCase()}
          </span>
        </div>
      ) : (
        <div className={classnames(style('input-group-btn'), style('amount-currency-select-btn'))}>
          <Select
            classNames={classNames}
            options={selectOptions}
            selected={{ ...selectedCurrency, note: null }}
            onChange={handleSelectChange}
            placeholder="Select an option..."
            searchPlaceholder={searchPlaceholder}
            onSearchChange={handleSearchChange}
            searchValue={searchQuery}
            size={size}
            required
            dropdownRight="xs"
            dropdownWidth="lg"
            inverse
          />
        </div>
      )}
    </div>
  );
}

function filterOptionsForQuery(options, query) {
  if (!query) {
    return options;
  }

  const filteredOptions = removeDuplicateValueOptions(options).filter((option) =>
    isCurrencyOptionAndFitsQuery(option, query),
  );

  return sortOptionsLabelsToFirst(filteredOptions, query);
}

function removeDuplicateValueOptions(options) {
  const result = [];
  const resultValues = [];

  options.forEach((option) => {
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

MoneyInput.Size = { SMALL: Size.SMALL, MEDIUM: Size.MEDIUM, LARGE: Size.LARGE };

MoneyInput.propTypes = {
  id: Types.string,
  currencies: Types.arrayOf(Currency).isRequired,
  selectedCurrency: Currency.isRequired,
  onCurrencyChange: Types.func,
  placeholder: Types.number,
  amount: Types.number,
  size: Types.oneOf([MoneyInput.Size.SMALL, MoneyInput.Size.MEDIUM, MoneyInput.Size.LARGE]),
  onAmountChange: Types.func,
  addon: Types.node,
  searchPlaceholder: Types.string,
  /**
   * Allows the consumer to react to searching, while the search itself is handled internally. Called with `{ searchQuery: string, filteredOptions: Currency[]  }`
   */
  onSearchChange: Types.func,
  customActionLabel: Types.node,
  onCustomAction: Types.func,
  classNames: Types.objectOf(Types.string),
};

MoneyInput.defaultProps = {
  id: null,
  size: MoneyInput.Size.LARGE,
  addon: null,
  searchPlaceholder: '',
  onSearchChange: undefined,
  onCurrencyChange: null,
  placeholder: null,
  amount: null,
  onAmountChange: null,
  customActionLabel: '',
  onCustomAction: null,
  classNames: {},
};

export default MoneyInput;
