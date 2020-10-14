import React from 'react';
import { Search as SearchIcon } from '@transferwise/icons';
import { boolean } from '@storybook/addon-knobs';
import Typeahead from './Typeahead';

export default {
  component: Typeahead,
  title: 'Typeahead',
};

export const createable = () => {
  const validateChip = (option) =>
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      option.label,
    );

  return (
    <Typeahead
      id="typeahead"
      name="typeahead-input-name"
      size="md"
      maxHeight={100}
      footer={<div>Want a footer? Style it!</div>}
      multiple
      clearable
      allowNew
      showSuggestions={false}
      showNewEntry={false}
      placeholder="placeholder"
      chipSeparators={[',', ' ']}
      validateChip={validateChip}
      alert={{ message: 'alert message', type: 'success' }}
      onChange={() => {}}
      addon={<SearchIcon />}
      onBlur={() => {}}
      options={[]}
    />
  );
};

export const basic = () => {
  const [options, setOptions] = React.useState([
    {
      label: 'A thing',
      note: 'with a note',
    },
    {
      label: 'Another thing',
      secondary: 'with secondary text this time',
    },
    {
      label: 'Profile',
    },
    {
      label: 'Globe',
    },
    {
      label: 'British pound',
    },
    {
      label: 'Euro',
    },
    {
      label: 'Something else',
    },
  ]);
  const validateChip =
    multiple && allowNew
      ? (option) =>
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            option.label,
          )
      : undefined;

  const multiple = boolean('multiple', false);
  const clearable = boolean('clearable', false);
  const allowNew = boolean('allowNew', false);
  const showSuggestions = boolean('showSuggestions', true);
  const showNewEntry = boolean('showNewEntry', true);

  return (
    <Typeahead
      id="typeahead"
      name="typeahead-input-name"
      size="md"
      maxHeight={100}
      footer={<div>Want a footer? Style it!</div>}
      multiple={multiple}
      clearable={clearable}
      allowNew={allowNew}
      showSuggestions={showSuggestions}
      showNewEntry={showNewEntry}
      placeholder="placeholder"
      chipSeparators={[',', ' ']}
      validateChip={validateChip}
      alert={{ message: 'alert message', type: 'success' }}
      onSearch={() => {
        setTimeout(() => setOptions(options), 1500);
      }}
      onChange={() => {}}
      addon={<SearchIcon />}
      onBlur={() => {}}
      options={options}
      inputAutoComplete="off"
    />
  );
};
