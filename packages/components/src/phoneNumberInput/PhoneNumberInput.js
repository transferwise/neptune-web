import React, { PureComponent } from 'react';
import Types from 'prop-types';
import { isArray } from '../common/validation/type-validators';

import Select from '../select';
import {
  explodeNumberModel,
  filterOptionsForQuery,
  isValidPhoneNumber,
  cleanNumber,
  setDefaultPrefix,
  isStringNumeric,
  sortArrayByProperty,
  groupCountriesByPrefix,
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
    countryCode: Types.string,
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
    countryCode: null,
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

    this.listSortedByISO3 = groupCountriesByPrefix(sortArrayByProperty(countries, 'iso3'));
    this.listSortedByPhone = groupCountriesByPrefix(sortArrayByProperty(countries, 'phone'));
  }

  onChangeSearch = searchQuery => {
    this.setState({ searchQuery });
  };

  getSuffixPrefix = (value, locale, countryCode) => {
    let prefix = setDefaultPrefix(locale, countryCode);
    let suffix = '';
    if (value) {
      ({ prefix, suffix } = explodeNumberModel(value));
    }
    return { prefix, suffix };
  };

  getSelectOptions = () => {
    const { searchQuery } = this.state;
    const filteredOptions = filterOptionsForQuery(
      isStringNumeric(searchQuery) ? this.listSortedByPhone : this.listSortedByISO3,
      searchQuery,
    );

    return filteredOptions.map(option => {
      const { phone, iso3, iso2 } = option;
      let note = '';

      if (iso3) {
        note = isArray(iso3) ? iso3.join(', ') : iso3;
      } else if (iso2) {
        note = isArray(iso2) ? iso2.join(', ') : iso2;
      }

      return { value: phone, label: phone, note };
    });
  };

  handleChangeSelect = event => {
    const { internalValue } = this.state;
    const { locale, countryCode } = this.props;
    const { suffix } = this.getSuffixPrefix(internalValue, locale, countryCode);
    const prefix = event.value;

    this.setState({ searchQuery: '', internalValue: prefix + suffix }, () => {
      this.returnValue(this.state.internalValue);
    });
  };

  handleInputChange = event => {
    const suffix = event.target.value;

    if (ALLOWED_PHONE_CHARS.test(suffix)) {
      const { internalValue } = this.state;
      const { locale, countryCode } = this.props;
      const { prefix } = this.getSuffixPrefix(internalValue, locale, countryCode);
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
      countryCode,
    } = this.props;
    const { internalValue, searchQuery } = this.state;
    const selectOptions = this.getSelectOptions();

    const { prefix, suffix } = this.getSuffixPrefix(internalValue, locale, countryCode);

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
