import React from 'react';

import { Profile as ProfileIcon, Globe as GlobeIcon } from '@transferwise/icons';

import { text, boolean, select } from '@storybook/addon-knobs';
import Select from './Select';

export default {
  component: Select,
  title: 'Select',
};

export const basic = () => {
  const [selected, setSelected] = React.useState({
    value: 0,
    label: 'A thing',
    note: 'with a note',
  });

  const size = select('size', ['sm', 'md', 'lg'], 'md');
  const dropdownRight = select('dropdownRight', ['xs', 'sm', 'md', 'lg', 'xl'], 'md');
  const dropdownWidth = select('dropdownWidth', ['sm', 'md', 'lg'], 'md');

  const placeholder = text('placeholder', 'Placeholder text');
  const inverse = boolean('inverse', false);
  const block = boolean('block', true);
  const required = boolean('required', false);
  const dropdownUp = boolean('dropdownUp', false);
  const disabled = boolean('disabled', false);
  const search = boolean('search', false);

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
      search={search}
      onChange={(v) => setSelected(v)}
      required={required}
      searchPlaceholder="Search placeholder"
      dropdownUp={dropdownUp}
      options={[
        { header: 'Basic' },
        { value: 0, label: 'A thing', note: 'with a note' },
        { value: 1, label: 'Another thing', secondary: 'with secondary text this time' },
        { value: 2, label: 'A disabled thing', disabled: true },
        { header: 'Icons' },
        { value: 3, label: 'Profile', icon: <ProfileIcon /> },
        { value: 4, label: 'Globe', icon: <GlobeIcon /> },
        { header: 'Currencies' },
        { value: 5, label: 'British pound', currency: 'gbp' },
        { value: 6, label: 'Euro', currency: 'eur' },
        { separator: true },
        { value: 7, label: 'Something else' },
        { header: 'Options with searchable alternatives' },
        {
          value: 8,
          label: 'A thing with searchable alternatives',
          searchStrings: ['abbreviation', 'acronym', 'nickname'],
        },
      ]}
    />
  );
};

export const customSearchFunction = () => {
  const [selected, setSelected] = React.useState({
    value: 1,
    label: 'EUR',
    currency: 'EUR',
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
  const search = boolean('search', true);

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
      search={
        search
          ? (option, keyword) =>
              option.countries && option.countries.toLowerCase().includes(keyword.toLowerCase())
          : false
      }
      onChange={(v) => setSelected(v)}
      required={required}
      searchPlaceholder="Search placeholder"
      dropdownUp={dropdownUp}
      options={[
        { header: 'Popular currencies' },
        {
          value: 1,
          label: 'EUR',
          currency: 'EUR',
          countries:
            'Seychelles Romania Saudi Arabia Macedonia, Former Yugoslav Republic of Serbia Kazakhstan Saint Lucia Malta Kosovo, Republic of Israel Slovakia Andorra United Kingdom Faroe Islands Ukraine Bulgaria Czech Republic Sao Tome and Principe Qatar Belgium Gibraltar Lebanon Netherlands Lithuania Slovenia France Norway Austria Hungary Spain United Arab Emirates Portugal Kuwait San Marino British Virgin Islands Georgia Timor-Leste Croatia Mauritania Finland Iceland Moldova Montenegro Turkey Switzerland Italy Sweden Costa Rica Estonia Guatemala Ireland Monaco Bosnia and Herzegovina Cyprus Greece Mauritius Bahrain Germany Poland Greenland Albania Tunisia Dominican Republic Luxembourg Azerbaijan Latvia Liechtenstein Denmark',
        },
        {
          value: 2,
          label: 'GBP',
          currency: 'GBP',
          countries: 'Isle of Man United Kingdom',
        },
        {
          value: 3,
          label: 'INR',
          currency: 'INR',
          countries: 'India',
        },
        {
          value: 4,
          label: 'USD',
          currency: 'USD',
          countries:
            "Saudi Arabia Cape Verde Serbia Haiti Suriname Israel Slovakia Guadeloupe Namibia Uzbekistan Singapore Macao Maldives Ukraine Ethiopia Marshall Islands Netherlands Lithuania Uruguay Ecuador Falkland Islands Guernsey Hungary Argentina Kuwait Japan Cayman Islands South Africa Palau Moldova Montenegro Turkey Nauru Ireland Bermuda Jersey Algeria United States Samoa Uganda Vatican City Honduras Cocos (Keeling) Islands Côte d'Ivoire Macedonia, Former Yugoslav Republic of Kazakhstan Malta Solomon Islands Gabon Andorra Canada Faroe Islands Sao Tome and Principe Barbados Gibraltar French Polynesia Vietnam Bahamas Taiwan United Arab Emirates Mozambique Armenia Kiribati Panama Saint Kitts and Nevis Estonia Micronesia, Federated States of Mongolia China Niger Isle of Man Malaysia Guyana Senegal Germany Kyrgyzstan Greenland Albania Dominican Republic Hong Kong Luxembourg Morocco Norfolk Island Turks and Caicos Islands Rwanda Grenada Venezuela Gambia Seychelles Oman Antigua and Barbuda Papua New Guinea Colombia Sri Lanka Wallis and Futuna Anguilla Tanzania Kenya Bhutan Laos Fiji Australia Qatar Belgium Réunion Nicaragua El Salvador Slovenia New Caledonia Niue South Korea Guinea-Bissau Austria Cook Islands Spain Portugal Tonga Trinidad and Tobago Philippines Croatia Mauritania Finland Angola Saint Helena Switzerland Sierra Leone Costa Rica Mexico French Guiana Guatemala Cambodia Botswana Peru Cyprus Brunei Darussalam Bahrain Jamaica Paraguay Poland Tunisia Myanmar Burkina Faso Denmark Lesotho Zambia New Zealand Liberia Romania Dominica Saint Lucia Saint Pierre and Miquelon Mali United Kingdom Malawi Egypt Bulgaria Czech Republic Nepal Lebanon Guinea France Norway Puerto Rico Tuvalu Tajikistan Martinique San Marino Georgia Timor-Leste British Virgin Islands Montserrat Vanuatu Iceland Italy Saint Vincent and the Grenadines Thailand Sweden Indonesia American Samoa Bosnia and Herzegovina Monaco Benin Ghana Greece Mauritius Bangladesh Christmas Island Azerbaijan Chile Mayotte Liechtenstein Latvia Aruba Åland Islands Bolivia",
        },
        { header: 'All currencies' },
        {
          currency: 'aed',
          value: 'AED',
          label: 'AED',
          searchable: 'United Arab Emirates',
        },
        {
          currency: 'aud',
          value: 'AUD',
          label: 'AUD',
          note: 'Australian dollar',
          searchable: 'Australia',
          classNames: {},
          secondary: '',
          icon: null,
          selected: false,
        },
        {
          currency: 'bgn',
          value: 'BGN',
          label: 'BGN',
          note: 'Bulgarian lev',
          searchable: 'Bulgaria',
          classNames: {},
          secondary: '',
          icon: null,
          selected: false,
        },
        {
          currency: 'brl',
          value: 'BRL',
          label: 'BRL',
          note: 'Brazilian real',
          searchable: 'Brazil',
          classNames: {},
          secondary: '',
          icon: null,
          selected: false,
        },
      ]}
    />
  );
};

export const advancedSearch = () => {
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
      onChange={(v) => setSelected(v)}
      required={required}
      searchValue={searchValue}
      searchPlaceholder="searchplaceholder"
      onSearchChange={(v) => setSearchValue(v)}
      dropdownUp={dropdownUp}
      options={[
        { header: 'Basic' },
        { value: 0, label: 'A thing', note: 'with a note' },
        { value: 1, label: 'Another thing', secondary: 'with secondary text this time' },
        { value: 2, label: 'A disabled thing', disabled: true },
        { header: 'Icons' },
        { value: 3, label: 'Profile', icon: <ProfileIcon /> },
        { value: 4, label: 'Globe', icon: <GlobeIcon /> },
        { header: 'Currencies' },
        { value: 5, label: 'British pound', currency: 'gbp' },
        { value: 6, label: 'Euro', currency: 'eur' },
        { separator: true },
        { value: 7, label: 'Something else' },
      ].filter((option) => option.label && option.label.toLowerCase().indexOf(searchValue) !== -1)}
    />
  );
};
