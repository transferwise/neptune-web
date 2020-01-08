import React from 'react';
import Select from './Select';

import { text, boolean, select } from '@storybook/addon-knobs';

export default {
  component: Select,
  title: 'Select',
};

export const basic = () => {
  const [searchValue, setSearchValue] = React.useState('');
  const [selected, setSelected] = React.useState({
    value: 0,
    label: 'A thing',
    note: 'with a note',
  });

  const size = select('size', ['sm', 'md', 'lg'], 'md');
  const dropdownRight = select('dropdownRight', ['xs', 'sm', 'md', 'lg', 'xl'], 'md');
  const dropdownWidth = select('dropdownWidth', ['sm', 'md', 'lg'], 'md');

  const placeholder = text('placeholder', 'placeholder');
  const inverse = boolean('inverse', false);
  const block = boolean('block', true);
  const required = boolean('required', false);
  const dropdownUp = boolean('dropdownUp', false);
  const disabled = boolean('disabled', false);

  return (
    <Select
      size={size}
      placeholder={placeholder}
      dropdownRight={dropdownRight}
      dropdownWidth={dropdownWidth}
      inverse={inverse}
      block={block}
      selected={selected}
      disabled={disabled}
      onChange={v => setSelected(v)}
      required={required}
      searchValue={searchValue}
      searchPlaceholder="searchplaceholder"
      onSearchChange={v => setSearchValue(v)}
      dropdownUp={dropdownUp}
      options={[
        { header: 'Basic' },
        { value: 0, label: 'A thing', note: 'with a note' },
        { value: 1, label: 'Another thing', secondary: 'with secondary text this time' },
        { value: 2, label: 'A disabled thing', disabled: true },
        { header: 'Icons' },
        { value: 3, label: 'Profile', icon: 'icon-profile' },
        { value: 4, label: 'Globe', icon: 'icon-globe' },
        { header: 'Currencies' },
        { value: 5, label: 'British Pound', currency: 'gbp' },
        { value: 6, label: 'Euro', currency: 'eur' },
        { separator: true },
        { value: 7, label: 'Something else' },
      ].filter(option => option.label && option.label.toLowerCase().indexOf(searchValue) !== -1)}
    />
  );
};
