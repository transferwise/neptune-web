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

const ALLOWED_PHONE_CHARS = /^$|^[\d-\s]+$/;

class PhoneNumberInput extends PureComponent {
  static propTypes = {
    required: Types.bool,
    disabled: Types.bool,
    value: Types.string,
    onChange: Types.func.isRequired,
    locale: Types.string,
    searchPlaceholder: Types.string,
    size: Types.oneOf(['sm', 'md', 'lg']),
    placeholder: Types.string,
  };

  static defaultProps = {
    required: false,
    disabled: false,
    value: null,
    locale: 'en-GB',
    searchPlaceholder: 'Prefix',
    size: 'md',
    placeholder: '',
  };

  constructor(props) {
    super(props);
    const { value, locale } = this.props;
    const cleanValue = value ? cleanNumber(value) : null;
    const initialValue = cleanValue && isValidPhoneNumber(cleanValue) ? cleanValue : null;

    this.state = {
      internalValue: initialValue,
      broadcastValue: initialValue,
      locale,
      searchQuery: '',
    };
  }

  static getDerivedStateFromProps(nextProps, state) {
    const { value, locale } = nextProps;

    if (locale !== state.locale) {
      const { suffix } = PhoneNumberInput.getSuffixPrefix(state.internalValue, state.locale);

      if (!suffix) {
        const { prefix } = PhoneNumberInput.getSuffixPrefix('', locale);
        return {
          ...state,
          internalValue: prefix,
          locale: nextProps.locale,
        };
      }
      return {
        ...state,
        locale: nextProps.locale,
      };
    }

    const cleanValue = value ? cleanNumber(value) : null;
    const valueToCheck = cleanValue && isValidPhoneNumber(cleanValue) ? cleanValue : null;

    if (cleanValue !== state.internalValue) {
      if (valueToCheck !== state.broadcastValue) {
        nextProps.onChange(valueToCheck);
      }
      return {
        ...state,
        broadcastValue: valueToCheck,
        internalValue: valueToCheck,
        searchQuery: '',
      };
    }

    return null;
  }

  onChangeSearch = searchQuery => {
    this.setState({ searchQuery });
  };

  static getSuffixPrefix = (value, locale) => {
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
    const { internalValue, locale } = this.state;
    const { suffix } = PhoneNumberInput.getSuffixPrefix(internalValue, locale);
    const prefix = event.value;

    this.setState({ searchQuery: '', internalValue: prefix + suffix }, () => {
      this.returnValue(this.state.internalValue);
    });
  };

  handleInputChange = event => {
    const suffix = event.target.value;

    if (ALLOWED_PHONE_CHARS.test(suffix)) {
      const { internalValue, locale } = this.state;
      const { prefix } = PhoneNumberInput.getSuffixPrefix(internalValue, locale);
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
    const { searchPlaceholder, disabled, required, size, placeholder } = this.props;
    const { internalValue, locale } = this.state;
    const selectOptions = this.getSelectOptions();

    const { prefix, suffix } = PhoneNumberInput.getSuffixPrefix(internalValue, locale);

    return (
      <div className="tw-telephone">
        <div className="row">
          <div className="col-xs-5">
            <Select
              options={selectOptions}
              selected={{ value: prefix, label: prefix }}
              onChange={this.handleChangeSelect}
              searchPlaceholder={searchPlaceholder}
              onSearchChange={this.onChangeSearch}
              searchValue={this.state.searchQuery}
              required={required}
              disabled={disabled}
              size={size}
            />
          </div>

          <div className="col-xs-7">
            <div className={`input-group input-group-${size}`}>
              <input
                name="phoneNumber"
                value={suffix}
                type="text"
                className="form-control"
                disabled={disabled}
                onChange={this.handleInputChange}
                required={required}
                placeholder={placeholder}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PhoneNumberInput;
