/* eslint-disable */
import React, { PureComponent } from 'react';
import Types from 'prop-types';

import Select from '../select';
import { explodeNumberModel, filterOptionsForQuery, isValidPhoneNumber } from './utils';

import countries from './data/countries';

const ALLOWED_PHONE_CHARS = /^$|^[\d-\s]+$/;
const DIGITS_MATCH = /^$|\d+/g;

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
    const { suffix = '', prefix = '' } = explodeNumberModel(this.props.value, this.props.locale);
    this.state = {
      suffix,
      prefix,
      value: suffix + prefix,
      previousReturned: null,
      searchQuery: '',
    };
  }

  static getDerivedStateFromProps(nextProps, state) {
    const { value } = nextProps;
    const { prefix, suffix } = explodeNumberModel(value, nextProps.locale);

    if (value !== state.value) {
      const resetValue = isValidPhoneNumber(value) ? value : null;

      if (state.previousReturned !== resetValue) {
        nextProps.onChange(resetValue);
      }
      return {
        suffix,
        prefix,
        value: resetValue,
        previousReturned: resetValue,
        searchQuery: '',
      };
    }
    return null;
  }

  onChangeSearch = searchQuery => {
    this.setState({ searchQuery });
  };

  getSelectOptions = () => {
    const options = [];
    const filteredOptions = this.state.searchQuery
      ? filterOptionsForQuery(countries, this.state.searchQuery)
      : countries;
    filteredOptions.forEach(option => {
      const { phone, iso3, iso2 } = option;
      options.push({ value: phone, label: phone, note: iso3 || iso2 });
    });
    return options;
  };

  handleChangeSelect = event => {
    const { suffix } = this.state;
    const prefix = event.value;
    const value = prefix + this.cleanNumber(suffix);

    this.setState({ searchQuery: '', prefix, value }, () => {
      this.returnValue(value);
    });
  };

  cleanNumber = number => (number.match(DIGITS_MATCH) && number.match(DIGITS_MATCH).join('')) || '';

  handleInputChange = event => {
    const suffix = event.target.value;
    if (ALLOWED_PHONE_CHARS.test(suffix)) {
      const { prefix } = this.state;
      const value = prefix + this.cleanNumber(suffix);
      this.setState({ suffix, value }, () => {
        this.returnValue(value);
      });
    }
  };

  returnValue = value => {
    const returnValue = isValidPhoneNumber(value) ? value : null;
    if (this.state.previousReturned !== returnValue) {
      this.setState({ previousReturned: returnValue }, () => {
        this.props.onChange(returnValue);
      });
    }
  };

  render() {
    const { searchPlaceholder, disabled, required, size, placeholder } = this.props;
    const selectOptions = this.getSelectOptions();
    const { prefix, suffix } = this.state;

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
