import React from 'react';
import { shallow } from 'enzyme';

import { Select, MoneyInput } from '..';

jest.mock('./currencyFormatting', () => ({
  parseAmount: jest.fn(),
  formatAmount: jest.fn(),
}));

const numberFormatting = require('./currencyFormatting');

describe('Money Input', () => {
  let component;
  let props;

  beforeEach(() => {
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
        value: 'USD',
        label: 'USD',
        note: 'United States Dollar',
        currency: 'usd',
        searchable: 'Hong Kong, Saudi Arabia',
      },
      {
        value: 'GBP',
        label: 'GBP',
        note: 'Great British Pound',
        currency: 'gbp',
        searchable: 'England, Scotland, Wales',
      },
      {
        header: 'Some other currencies',
      },
      {
        value: 'CAD',
        label: 'CAD',
        note: 'Canada Dollar',
        currency: 'cad',
      },
      {
        value: 'AUD',
        label: 'AUD',
        note: 'Australia Dollar',
        currency: 'aud',
      },
    ];
    props = {
      currencies,
      selectedCurrency: currencies[1],
      amount: 1000,
      onAmountChange: jest.fn(),
      onCurrencyChange: jest.fn(),
    };
    component = shallow(<MoneyInput {...props} />);
  });

  function currencySelect() {
    return component.find(Select);
  }

  function fixedCurrencyDisplay() {
    return component.find('.tw-money-input__fixed-currency');
  }

  function searchCurrencies(query) {
    currencySelect().prop('onSearchChange')(query);
    component.update();
  }

  function displayedCurrencies() {
    return currencySelect().prop('options');
  }

  function amountInput() {
    return component.find('input');
  }

  function focusAmount() {
    amountInput().simulate('focus');
  }

  function blurAmount() {
    amountInput().simulate('blur');
  }

  function enterAmount(amount) {
    focusAmount();
    amountInput().simulate('change', { target: { value: amount } });
  }

  function addon() {
    return component.find('.input-group-addon').first();
  }

  it('renders a select with all the currencies as options', () => {
    expect(currencySelect().length).toBe(1);
    expect(displayedCurrencies()).toEqual(props.currencies);
  });

  it('shows the currently active currency as active and hides its note', () => {
    expect(currencySelect().prop('selected')).toEqual({
      value: 'EUR',
      label: 'EUR',
      note: null,
      currency: 'eur',
      searchable: 'Spain, Germany, France, Austria, Estonia',
    });
  });

  it('calls onCurrencyChange when the user selects a different currency', () => {
    expect(props.onCurrencyChange).not.toHaveBeenCalled();

    currencySelect().prop('onChange')(props.currencies[2]);
    expect(props.onCurrencyChange).toHaveBeenCalledTimes(1);
    expect(props.onCurrencyChange).toHaveBeenLastCalledWith(props.currencies[2]);
  });

  it('can be different sizes and defaults to lg', () => {
    expect(component.find('.input-group').hasClass('input-group-lg')).toBe(true);
    expect(currencySelect().prop('size')).toBe('lg');
    ['sm', 'md', 'lg'].forEach(size => {
      component.setProps({ size });
      expect(currencySelect().prop('size')).toBe(size);
      expect(component.find('.input-group').hasClass(`input-group-${size}`)).toBe(true);
    });
  });

  it('configures the select visually correctly', () => {
    const options = currencySelect().props();

    expect(options.required).toBe(true);
    expect(options.dropdownRight).toBe('xs');
    expect(options.dropdownWidth).toBe('lg');
    expect(options.inverse).toBe(true);
  });

  describe('when searching', () => {
    it('passes search value to currency select', () => {
      expect(currencySelect().prop('searchValue')).toBe('');

      searchCurrencies('EEK');
      expect(currencySelect().prop('searchValue')).toBe('EEK');
    });

    it('hides headers', () => {
      const currencies = [
        { header: 'A currency' },
        { value: 'GBP', label: 'Pound' },
        { header: 'Another currency' },
        { value: 'EUR', label: 'Euro' },
      ];
      component.setProps({ currencies });
      expect(displayedCurrencies()).toEqual(currencies);

      searchCurrencies('O');
      expect(displayedCurrencies()).toEqual([
        { value: 'GBP', label: 'Pound' },
        { value: 'EUR', label: 'Euro' },
      ]);
    });

    it('searches by label', () => {
      const currencies = [{ value: 'GBP', label: 'Pound' }, { value: 'EUR', label: 'Euro' }];
      component.setProps({ currencies });
      expect(displayedCurrencies()).toEqual(currencies);

      searchCurrencies('P');
      expect(displayedCurrencies()).toEqual([{ value: 'GBP', label: 'Pound' }]);
    });

    it('searches by note', () => {
      const currencies = [
        { value: 'GBP', note: 'Queen money' },
        { value: 'EUR', note: 'Other money' },
      ];
      component.setProps({ currencies });
      expect(displayedCurrencies()).toEqual(currencies);

      searchCurrencies('Other');
      expect(displayedCurrencies()).toEqual([{ value: 'EUR', note: 'Other money' }]);
    });

    it('searches by searchable string', () => {
      const currencies = [
        { value: 'GBP', searchable: 'Great Britain, United Kingdom' },
        { value: 'EUR', searchable: 'Europe' },
      ];
      component.setProps({ currencies });
      expect(displayedCurrencies()).toEqual(currencies);

      searchCurrencies('Britain');
      expect(displayedCurrencies()).toEqual([
        { value: 'GBP', searchable: 'Great Britain, United Kingdom' },
      ]);
    });

    it('shows custom action option on every search when onCustomAction is passed to MoneyInput', () => {
      const currencies = [
        { value: 'GBP', searchable: 'Great Britain, United Kingdom' },
        { value: 'EUR', searchable: 'Europe' },
      ];
      const CUSTOM_ACTION = 'CUSTOM_ACTION';
      component.setProps({
        currencies,
        onCustomAction: jest.fn(),
        customActionLabel: 'I am a label',
      });
      expect(displayedCurrencies()).toEqual([
        ...currencies,
        { value: CUSTOM_ACTION, label: 'I am a label' },
      ]);

      searchCurrencies('Britain');
      expect(displayedCurrencies()).toEqual([
        { value: 'GBP', searchable: 'Great Britain, United Kingdom' },
        { value: CUSTOM_ACTION, label: 'I am a label' },
      ]);

      searchCurrencies('Random search string');
      expect(displayedCurrencies()).toEqual([{ value: CUSTOM_ACTION, label: 'I am a label' }]);
    });

    it('it sorts labels to first', () => {
      searchCurrencies('au');
      expect(displayedCurrencies()).toEqual([
        {
          value: 'AUD',
          label: 'AUD',
          note: 'Australia Dollar',
          currency: 'aud',
        },
        {
          value: 'EUR',
          label: 'EUR',
          note: 'Euro',
          currency: 'eur',
          searchable: 'Spain, Germany, France, Austria, Estonia',
        },
        {
          value: 'USD',
          label: 'USD',
          note: 'United States Dollar',
          currency: 'usd',
          searchable: 'Hong Kong, Saudi Arabia',
        },
      ]);
    });
  });

  it('formats the amount passed in', () => {
    numberFormatting.formatAmount = jest.fn(
      (num, currency, locale) => `formatted ${num}, ${locale}, ${currency}`,
    );
    component.setProps({ amount: 123, locale: 'et-EE', numberFormatPrecision: 3 });
    expect(amountInput().prop('value')).toBe('formatted 123, et-EE, eur');
  });

  it('formats the number you input after you blur it', () => {
    numberFormatting.formatAmount = jest.fn(
      (num, currency, locale) => `formatted ${num}, ${locale}, ${currency}`,
    );
    component.setProps({ locale: 'en-US', numberFormatPrecision: 3 });
    numberFormatting.parseAmount = jest.fn(parseFloat);
    enterAmount('123.45');
    expect(amountInput().prop('value')).toBe('123.45');

    blurAmount();
    expect(amountInput().prop('value')).toBe('formatted 123.45, en-US, eur');
  });

  it('parses the number you input and calls onAmountChange with it', () => {
    const onAmountChange = jest.fn();
    let assertions = 0;
    component.setProps({ onAmountChange, locale: 'es-ES', numberFormatPrecision: 1 });
    numberFormatting.parseAmount = jest.fn((amount, currency, locale) => {
      expect(amount).toBe('500.1234');
      expect(locale).toBe('es-ES');
      expect(currency).toBe('eur');
      assertions += 1;
      return 500.1;
    });
    expect(onAmountChange).not.toHaveBeenCalled();

    enterAmount('500.1234');
    expect(onAmountChange).toHaveBeenCalledTimes(1);
    expect(onAmountChange).toHaveBeenLastCalledWith(500.1);
    expect(assertions).toEqual(1);
  });

  it('does not call onAmountChange with a parsed number if unable to parse', () => {
    const onAmountChange = jest.fn();
    component.setProps({ onAmountChange });
    numberFormatting.parseAmount = jest.fn(() => NaN);
    enterAmount('cannot parse this yo');
    expect(onAmountChange).not.toHaveBeenCalled();
  });

  it('passes the id given to the input element', () => {
    expect(amountInput().prop('id')).toBeNull();
    component.setProps({ id: 'some-id' });

    expect(amountInput().prop('id')).toBe('some-id');
  });

  it('renders addon when element is passed through props', () => {
    const addonElement = <span id="test-addon" />;
    component.setProps({ addon: addonElement });
    expect(addon().length).toEqual(1);

    const passedInAddon = () =>
      addon()
        .children()
        .first();
    expect(passedInAddon().prop('id')).toBe('test-addon');
    expect(passedInAddon().type()).toBe('span');
  });

  it('shows fixed currency view if only one currency available and selected', () => {
    expect(fixedCurrencyDisplay().length).toBe(0);

    const EEK = { value: 'EEK', currency: 'EEK' };
    component.setProps({
      currencies: [EEK],
      selectedCurrency: EEK,
    });
    expect(currencySelect().length).toBe(0);
    expect(fixedCurrencyDisplay().length).toBe(1);
    expect(component.find('.tw-money-input__fixed-currency span').text()).toBe('EEK');
    expect(component.find('.currency-flag').hasClass('currency-flag-eek')).toBe(true);
  });

  it('shows fixed currency view when no function is passed to onCurrencyChange prop', () => {
    component.setProps({ onCurrencyChange: undefined });
    expect(currencySelect().length).toBe(0);
    expect(fixedCurrencyDisplay().length).toBe(1);
  });

  it('shows fixed currency keyline and flag if large input only', () => {
    const EEK = { value: 'EEK', currency: 'EEK' };
    component.setProps({
      currencies: [EEK],
      selectedCurrency: EEK,
      size: 'md',
    });

    ['md', 'sm'].forEach(size => {
      component.setProps({ size });
      expect(component.find('.tw-money-input__keyline').length).toBe(0);
      expect(component.find('.currency-flag').length).toBe(0);
    });

    component.setProps({ size: 'lg' });
    expect(component.find('.tw-money-input__keyline').length).toBe(1);
    expect(component.find('.currency-flag').length).toBe(1);
  });

  it('amount input will be disabled when there is no onAmountChange prop', () => {
    const EEK = { value: 'EEK', currency: 'EEK' };
    component.setProps({
      currencies: [EEK],
      selectedCurrency: EEK,
    });

    expect(amountInput().prop('disabled')).toBe(false);
    expect(
      component.find('.tw-money-input__fixed-currency').hasClass('tw-money-input--disabled'),
    ).toBe(false);

    component.setProps({ onAmountChange: undefined });
    expect(amountInput().prop('disabled')).toBe(true);
    expect(
      component.find('.tw-money-input__fixed-currency').hasClass('tw-money-input--disabled'),
    ).toBe(true);
  });

  it('uses the passed in search placeholder', () => {
    component.setProps({ searchPlaceholder: 'a placeholder' });
    expect(currencySelect().prop('searchPlaceholder')).toBe('a placeholder');
  });

  it('clears the search value when selecting an option', () => {
    searchCurrencies('eur');
    expect(currencySelect().prop('options').length).toBe(1);
    expect(currencySelect().prop('searchValue')).toBe('eur');

    currencySelect().prop('onChange')(props.currencies[1]);
    component.update();
    expect(currencySelect().prop('options').length).toBe(7);
    expect(currencySelect().prop('searchValue')).toBe('');
  });

  it('shows custom action last when onCustomAction prop is passed to MoneyInput', () => {
    const currencies = [
      { value: 'GBP', searchable: 'Great Britain, United Kingdom' },
      { value: 'EUR', searchable: 'Europe' },
    ];
    component.setProps({
      currencies,
      onCustomAction: jest.fn(),
      customActionLabel: 'Label boy',
    });

    expect(displayedCurrencies()).toEqual([
      ...currencies,
      { value: 'CUSTOM_ACTION', label: 'Label boy' },
    ]);

    expect(displayedCurrencies()[displayedCurrencies().length - 1]).toEqual({
      value: 'CUSTOM_ACTION',
      label: 'Label boy',
    });
  });

  it('calls onCustomAction callback when custom action is selected', () => {
    const onCustomAction = jest.fn();
    component.setProps({ onCustomAction });
    expect(onCustomAction).not.toHaveBeenCalled();
    expect(props.onCurrencyChange).not.toHaveBeenCalled();

    currencySelect().prop('onChange')({ value: 'CUSTOM_ACTION', label: '' });
    expect(onCustomAction).toHaveBeenCalledTimes(1);
    expect(props.onCurrencyChange).toHaveBeenCalledTimes(0);
  });

  it('ensures namespaced classNames can be provided and used ', () => {
    const styles = { 'tw-money-input': 'tw-money-input_TWISAWESOME125' };
    expect(component.find('.tw-money-input').exists()).toBe(true);

    component.setProps({ classNames: styles });
    expect(component.find('.tw-money-input').exists()).toBe(false);
    expect(component.find('.tw-money-input_TWISAWESOME125').exists()).toBe(true);
  });
});
