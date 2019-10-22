import React, { PureComponent } from 'react';
import Types from 'prop-types';

import Select from '../select';
import {
  explodeNumberModel,
  filterOptionsForQuery,
  isValidPhoneNumber,
  cleanNumber,
  setDefaultPrefix,
} from './utils';

import countries from './data/countries';

import './PhoneNumberInput.css';

const ALLOWED_PHONE_CHARS = /^$|^[\d-\s]+$/;

class PhoneNumberInput extends PureComponent {
  static propTypes = {
    required: Types.bool,
    disabled: Types.bool,
    initialValue: Types.string,
    onChange: Types.func.isRequired,
    onFocus: Types.func,
    onBlur: Types.func,
    locale: Types.string,
    searchPlaceholder: Types.string,
    size: Types.oneOf(['sm', 'md', 'lg']),
    placeholder: Types.string,
  };

  static defaultProps = {
    required: false,
    disabled: false,
    initialValue: null,
    onFocus() {},
    onBlur() {},
    locale: 'en-GB',
    searchPlaceholder: 'Prefix',
    size: 'md',
    placeholder: '',
  };

  constructor(props) {
    super(props);
    const { initialValue } = this.props;
    const cleanValue = initialValue ? cleanNumber(initialValue) : null;
    const derivedInitialValueFromProp =
      cleanValue && isValidPhoneNumber(cleanValue) ? cleanValue : null;

    this.state = {
      internalValue: derivedInitialValueFromProp,
      broadcastValue: derivedInitialValueFromProp,
      searchQuery: '',
    };
  }

  onChangeSearch = searchQuery => {
    this.setState({ searchQuery });
  };

  getSuffixPrefix = (value, locale) => {
    let prefix = setDefaultPrefix(locale);
    let suffix = '';
    if (value) {
      ({ prefix, suffix } = explodeNumberModel(value));
    }
    return { prefix, suffix };
  };

  getSelectOptions = () => {
    const filteredOptions = this.state.searchQuery
      ? filterOptionsForQuery(countries, this.state.searchQuery)
      : countries;

    return filteredOptions.map(option => {
      const { phone, iso3, iso2 } = option;

      return { value: phone, label: phone, note: iso3 || iso2 };
    });
  };

  handleChangeSelect = event => {
    const { internalValue } = this.state;
    const { locale } = this.props;
    const { suffix } = this.getSuffixPrefix(internalValue, locale);
    const prefix = event.value;

    this.setState({ searchQuery: '', internalValue: prefix + suffix }, () => {
      this.returnValue(this.state.internalValue);
    });
  };

  handleInputChange = event => {
    const suffix = event.target.value;

    if (ALLOWED_PHONE_CHARS.test(suffix)) {
      const { internalValue } = this.state;
      const { locale } = this.props;
      const { prefix } = this.getSuffixPrefix(internalValue, locale);
      this.setState({ internalValue: prefix + suffix }, () => {
        this.returnValue(this.state.internalValue);
      });
    }
  };

  returnValue = value => {
    const broadcastValue = isValidPhoneNumber(value) ? cleanNumber(value) : null;
    if (broadcastValue !== this.state.broadcastValue) {
      this.props.onChange(broadcastValue);
      this.setState({ broadcastValue });
    }
  };

  render() {
    const {
      searchPlaceholder,
      disabled,
      required,
      size,
      placeholder,
      onFocus,
      onBlur,
      locale,
    } = this.props;
    const { internalValue, searchQuery } = this.state;
    const selectOptions = this.getSelectOptions();

    const { prefix, suffix } = this.getSuffixPrefix(internalValue, locale);

    return (
      <div className="tw-telephone">
        <div className="tw-telephone__country-select">
          <Select
            options={selectOptions}
            selected={{ value: prefix, label: prefix }}
            onChange={this.handleChangeSelect}
            searchPlaceholder={searchPlaceholder}
            onSearchChange={this.onChangeSearch}
            searchValue={searchQuery}
            required={required}
            disabled={disabled}
            size={size}
          />
        </div>

        <div className="tw-telephone__number-input m-l-3">
          <div className={`input-group input-group-${size}`}>
            <input
              name="phoneNumber"
              value={suffix}
              type="text"
              className="form-control"
              disabled={disabled}
              onChange={this.handleInputChange}
              onFocus={onFocus}
              onBlur={onBlur}
              required={required}
              placeholder={placeholder}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PhoneNumberInput;
