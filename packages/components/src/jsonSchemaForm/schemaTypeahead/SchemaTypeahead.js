import React, { useState } from 'react';
import Types from 'prop-types';
import { isArray } from '../validation/type-validators';
import Typeahead from '../../typeahead';

const SchemaFormControl = props => {
  const optionsExample = [
    {
      value: 'E16JJ',
      label: 'E1 6JJ',
      note: 'TransferWise, The Tea Building',
      secondary: '56 Shoreditch High Street',
      data: {
        address1: 'TransferWise, The Tea Building',
        address2: '56 Shoreditch High Street',
        city: 'London',
      },
    },
    {
      value: 'E16JJ',
      label: 'E1 6JJ',
      note: 'UsTwo, The Tea Building',
      secondary: '56 Shoreditch High Street',
      data: {
        address1: 'UsTwo, The Tea Building',
        address2: '56 Shoreditch High Street',
        city: 'London',
      },
    },
    {
      value: 'E16',
      label: 'E1 6JJ',
      note: 'Pizza East, The Tea Building',
      secondary: '56 Shoreditch High Street',
      data: {
        address1: 'Pizza East, The Tea Building',
        address2: '56 Shoreditch High Street',
        city: 'London',
      },
    },
  ];

  const [options, setOptions] = useState(optionsExample);

  const onChange = newOptions => {
    const option = newOptions[0];
    props.onChange(option && option.value, option);
  };

  const onInputChange = search => {
    const method = 'GET';
    const body = {};
    body[props.schema.valuesAsync.param] = search;

    // Search for new options
    fetch(props.schema.valuesAsync.url, { method })
      .then(response => {
        if (!response.ok) {
          const error = new Error(response.statusText);
          error.status = response.status;
          error.response = response;
          throw error;
        }

        if (isArray(response.body)) {
          setOptions(response.body);
        } else {
          setOptions([]);
        }
      })
      .catch();
  };

  const events = {
    onFocus: props.onFocus,
    onBlur: props.onBlur,
    onChange,
    onInputChange,
  };

  const controlProps = {
    id: props.id,
    name: props.id,
    locale: props.locale,
    placeholder: props.schema.placeholder,
  };

  const config = {
    minQueryLength: 1,
    clearable: false,
    initialValue: [],
  };

  return (
    <Typeahead
      options={options}
      addon={<i className="input-group-text icon icon-search" />}
      {...config}
      {...events}
      {...controlProps}
    />
  );
};

SchemaFormControl.propTypes = {
  id: Types.string.isRequired,
  value: Types.oneOfType([Types.string, Types.number, Types.bool]),
  schema: Types.shape({
    type: Types.oneOf(['string', 'number', 'integer', 'boolean']),
    format: Types.string,
    valuesAsync: Types.arrayOf(Types.shape({})),
    title: Types.string,
    placeholder: Types.string,
    help: Types.shape({}),
  }).isRequired,
  onChange: Types.func.isRequired,
  onFocus: Types.func.isRequired,
  onBlur: Types.func.isRequired,
  locale: Types.string,
};

SchemaFormControl.defaultProps = {
  value: '',
  locale: 'en-GB',
};

export default SchemaFormControl;
