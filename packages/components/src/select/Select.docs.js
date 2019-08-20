import React, { Component } from 'react';
import { Select } from '..';

import { generateCodeBlock, generateInput, generateState } from '../../docs/utils';

const SIZES = [
  { value: 'xs', label: 'xs' },
  { value: 'sm', label: 'sm' },
  { value: 'md', label: 'md' },
  { value: 'lg', label: 'lg' },
  { value: 'xl', label: 'xl' },
];

const KNOBS = {
  knobs: [
    {
      type: 'text',
      label: 'Placeholder',
      state: 'placeholder',
      defaultState: 'Select an option...',
    },
    {
      type: 'text',
      label: 'Search Placeholder',
      state: 'searchPlaceholder',
      defaultState: 'Search...',
    },
    {
      type: 'select',
      label: 'Size',
      state: 'size',
      options: SIZES.slice(1, 4),
      defaultState: { ...SIZES[2] },
    },
    {
      type: 'select',
      label: 'Breakpoint open dropdown from right',
      state: 'dropdownRight',
      options: SIZES,
      defaultState: { ...SIZES[1] },
    },
    {
      type: 'select',
      label: 'DropDown width',
      state: 'dropdownWidth',
      options: SIZES.slice(1, 5),
      defaultState: { ...SIZES[2] },
    },
    {
      type: 'checkbox',
      label: 'Open upwards?',
      state: 'dropdownUp',
      defaultState: false,
    },
    {
      type: 'checkbox',
      label: 'Inverse',
      state: 'inverse',
      defaultState: false,
    },
    {
      type: 'checkbox',
      label: 'Block button?',
      state: 'block',
      defaultState: true,
    },
    {
      type: 'checkbox',
      label: 'Required?',
      state: 'required',
      defaultState: false,
    },
    {
      type: 'checkbox',
      label: 'Disabled?',
      state: 'disabled',
      defaultState: false,
    },
    {
      type: 'checkbox',
      label: 'Searchable?',
      state: 'searchable',
      defaultState: false,
    },
    {
      type: 'checkbox',
      label: 'Scoped className?',
      state: 'hasClassNames',
      defaultState: false,
    },
  ],
};
const HIDDENKNOBS = {
  hiddenKnobs: [
    {
      type: 'text',
      label: 'selectedOption',
      state: 'selectedOption',
      defaultState: null,
    },
  ],
};

const OPTIONS = [
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
];

export default class SelectDocs extends Component {
  state = {
    ...generateState(KNOBS),
    ...generateState(HIDDENKNOBS),
  };

  getOptions() {
    if (!this.state.searchable) {
      return OPTIONS;
    }

    const headerMapping = OPTIONS.reduce(
      (accumulator, option) => {
        if (option.header) {
          accumulator.currentHeader = option.header; // eslint-disable-line no-param-reassign
        } else if (option.value) {
          accumulator.mapping[option.value] = accumulator.currentHeader; // eslint-disable-line no-param-reassign
        }
        return accumulator;
      },
      { currentHeader: null, mapping: {} },
    ).mapping;

    const foundOptions = OPTIONS.filter(
      option => option.label && option.label.toLowerCase().indexOf(this.state.searchValue) !== -1,
    );

    return OPTIONS.filter(option => {
      if (option.header) {
        return foundOptions.reduce(
          (headerVisible, foundOption) =>
            headerVisible || headerMapping[foundOption.value] === option.header,
          false,
        );
      }
      return foundOptions.indexOf(option) !== -1;
    });
  }

  createStateLink(name) {
    return value => this.setState({ [name]: value });
  }

  render() {
    const extraProps = {
      selected: JSON.stringify(this.state.selectedOption, null, '  '),
      onChange: 'this.handleOptionChange',
      onSearchChange: this.state.searchable ? 'this.handleSearchChange' : null,
      searchValue: this.state.searchable ? this.state.searchValue : null,
      searchPlaceholder: this.state.searchPlaceholder,
      options: JSON.stringify(this.getOptions(), null, '  '),
      className: this.state.hasClassNames ? 'btn-group, btn-group_33HEu6aS3s' : null,
    };

    return (
      <div className="container">
        <section className="section">
          <div className="row">
            <div className="col-md-6">
              <h2>Select</h2>
              <p>It ... selects things</p>
              {generateCodeBlock('Select', KNOBS, this, extraProps)}
              <p>
                Search implementation is left to the user, change passed in options property with
                value gotten from <code className="tw-docs-inline-code">onSearchChange</code>.
                Search won&apos;t render if no{' '}
                <code className="tw-docs-inline-code">onSearchChange</code>
                passed.
              </p>
              <p>Every property that is false or undefined can be omitted.</p>
            </div>
            <div className="col-md-6">
              <Select
                size={this.state.size.value}
                placeholder={this.state.placeholder}
                dropdownRight={this.state.dropdownRight.value}
                dropdownWidth={this.state.dropdownWidth.value}
                inverse={this.state.inverse}
                options={this.getOptions()}
                block={this.state.block}
                selected={this.state.selectedOption}
                disabled={this.state.disabled}
                onChange={this.createStateLink('selectedOption')}
                required={this.state.required}
                searchValue={this.state.searchValue}
                searchPlaceholder={
                  this.state.hasSearchPlaceholder ? this.state.searchPlaceholder : undefined
                }
                onSearchChange={
                  this.state.searchable ? this.createStateLink('searchValue') : undefined
                }
                dropdownUp={this.state.dropdownUp}
              />
              <div className="row m-t-5">{KNOBS.knobs.map(knob => generateInput(knob, this))}</div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
