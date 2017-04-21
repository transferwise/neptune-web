import React, { Component } from 'react';
import Select from './select';
import Checkbox from './checkbox';
import Loader from './loader';
import Radio from './radio';
import './Docs.css';

export default class Docs extends Component {
  constructor(props) {
    super(props);
    this.options = [
      { header: 'Basic' },
      { value: 0, label: 'A thing', note: 'with a note' },
      { value: 1, label: 'Another thing', secondary: 'with secondary text this time' },
      { header: 'Icons' },
      { value: 2, label: 'Profile', icon: 'icon-profile' },
      { value: 3, label: 'Globe', icon: 'icon-globe' },
      { header: 'Currencies' },
      { value: 4, label: 'British Pound', currency: 'gbp' },
      { value: 5, label: 'Euro', currency: 'eur' },
    ];
    this.state = {
      selectedOption: null,
      selectRequired: false,
      selectDisabled: false,
      searchable: false,
      hasPlaceholder: false,
      hasSearchPlaceholder: false,
      searchPlaceholder: 'Search...',
      searchValue: '',
      placeholder: 'Select an option...',

      checked: false,
      checkDisabled: false,
      checkRequired: false,
      checkboxLabel: 'Check me out',

      radioLabel: 'Selecteroni',
      radioChecked: false,
      radioDisabled: false,
      radioName: 'Radio name',

      loaderSmall: false,
    };
  }

  getOptions() {
    if (!this.state.searchable) {
      return this.options;
    }

    const headerMapping = this.options.reduce((accumulator, option) => {
      if (option.header) {
        accumulator.currentHeader = option.header; // eslint-disable-line no-param-reassign
      } else if (option.value) {
        accumulator  // eslint-disable-line no-param-reassign
          .mapping[option.value] = accumulator.currentHeader;
      }
      return accumulator;
    }, { currentHeader: null, mapping: {} }).mapping;

    const foundOptions = this.options.filter(option => (
      option.label &&
      option.label.toLowerCase().indexOf(this.state.searchValue) !== -1
    ));

    return this.options.filter((option) => {
      if (option.header) {
        return foundOptions
          .reduce((headerVisible, foundOption) =>
            headerVisible || headerMapping[foundOption.value] === option.header, false);
      }
      return foundOptions.indexOf(option) !== -1;
    });
  }

  createStateLink(name) {
    return value => this.setState({ [name]: value });
  }

  createEventStateLink(name) {
    return event => this.setState({ [name]: event.target.value });
  }

  render() {
    const searchPlaceholder = this.state.hasSearchPlaceholder ?
      `"${this.state.searchPlaceholder}"` : undefined;
    return (
      <div className="container">
        <section className="section row">
          <div className="col-md-6">
            <h1>Components 🎉</h1>
            <p>
              This is a shitty port of some styleguide components to react. It tries to mimic
              the api of styleguide components.
            </p>
            <p>
              <b>TODO:</b> I need to set up proper peerDependencies structure and put it on npm.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="row">
            <div className="col-md-6">
              <h2>Select</h2>
              <p>It ... selects things</p>
            </div>
            <div className="col-md-6">
              <Select
                placeholder={this.state.hasPlaceholder ? this.state.placeholder : undefined}
                options={this.getOptions()}
                selected={this.state.selectedOption}
                disabled={this.state.selectDisabled}
                onChange={this.createStateLink('selectedOption')}
                required={this.state.selectRequired}
                searchValue={this.state.searchable ? this.state.searchValue : undefined}
                searchPlaceholder={
                  this.state.hasSearchPlaceholder ? this.state.searchPlaceholder : undefined}
                onSearchChange={
                  this.state.searchable ? this.createStateLink('searchValue') : undefined}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              {/* eslint-disable react/jsx-indent */}
              <pre className="tw-docs-code">
{`<Select
  placeholder={${this.state.hasPlaceholder ? `"${this.state.placeholder}"` : undefined}}
  selected={${JSON.stringify(this.state.selectedOption, null, '  ')}}
  onChange={this.handleOptionChange}
  onSearchChange={${this.state.searchable ? 'this.handleSearchChange' : undefined}}
  searchValue={${this.state.searchable ? `"${this.state.searchValue}"` : undefined}}
  searchPlaceholder={${searchPlaceholder}}
  required={${this.state.selectRequired}}
  disabled={${this.state.selectDisabled}}
  options={${JSON.stringify(this.getOptions(), null, '  ')}}
/>`}
              </pre>
              {/* eslint-enable react/jsx-indent */}
              <p>
                Search implementation is left to the user, change passed in options
                property with value gotten from onSearchChange. Search won&quot;t render if no
                onSearchChange passed.
              </p>
              <p>
                Every property that is false or undefined can be omitted.
              </p>
              <p>
                <strong>TODO</strong>: keyboard navigation, do not use before this is done.
              </p>
            </div>
            <div className="col-md-6">
              <Checkbox
                label="Required?"
                onChange={this.createStateLink('selectRequired')}
                checked={this.state.selectRequired}
              />
              <div className="m-t-3" />
              <Checkbox
                label="Disabled?"
                onChange={this.createStateLink('selectDisabled')}
                checked={this.state.selectDisabled}
              />
              <div className="m-t-3" />
              <Checkbox
                label="Searchable?"
                onChange={this.createStateLink('searchable')}
                checked={this.state.searchable}
              />
              <div className="m-t-3" />
              <Checkbox
                label="Custom placeholder?"
                onChange={this.createStateLink('hasPlaceholder')}
                checked={this.state.hasPlaceholder}
              />
              <div className="m-t-3" />
              {
                this.state.hasPlaceholder ?
                  <input
                    type="text"
                    value={this.state.placeholder}
                    onChange={this.createEventStateLink('placeholder')}
                    placeholder="Placeholder"
                    className="form-control"
                  /> : ''
              }
              <div className="m-t-3" />
              <Checkbox
                label="Custom search placeholder?"
                onChange={this.createStateLink('hasSearchPlaceholder')}
                checked={this.state.hasSearchPlaceholder}
              />
              <div className="m-t-3" />
              {
                this.state.hasSearchPlaceholder ?
                  <input
                    type="text"
                    value={this.state.searchPlaceholder}
                    onChange={this.createEventStateLink('searchPlaceholder')}
                    placeholder="Search placeholder"
                    className="form-control"
                  /> : ''
              }
            </div>
          </div>
        </section>

        <section className="section">
          <div className="row">
            <div className="col-md-6">
              <h2>Checkbox</h2>
              <p>Check yourself before you wreck yourself</p>
            </div>
            <div className="col-md-6">
              <Checkbox
                label={this.state.checkboxLabel}
                onChange={this.createStateLink('checked')}
                checked={this.state.checked}
                required={this.state.checkRequired}
                disabled={this.state.checkDisabled}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              {/* eslint-disable react/jsx-indent */}
              <pre className="tw-docs-code">
{`<Checkbox
  label={"${this.state.checkboxLabel}"}
  onChange={this.handleCheckChange}
  required={${this.state.checkRequired}}
  disabled={${this.state.checkDisabled}}
  checked={${this.state.checked}}
/>`}
              </pre>
              {/* eslint-enable react/jsx-indent */}
            </div>
            <div className="col-md-6">
              <input
                type="text"
                value={this.state.checkboxLabel}
                onChange={this.createEventStateLink('checkboxLabel')}
                placeholder="Checkbox label"
                className="form-control"
              />
              <div className="m-t-3" />
              <Checkbox
                label="Required?"
                onChange={this.createStateLink('checkRequired')}
                checked={this.state.checkRequired}
              />
              <div className="m-t-3" />
              <Checkbox
                label="Disabled?"
                onChange={this.createStateLink('checkDisabled')}
                checked={this.state.checkDisabled}
              />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="row">
            <div className="col-md-6">
              <h2>Radio</h2>
              <p>I&quot;m radioing this in</p>
            </div>
            <div className="col-md-6">
              <Radio
                label={this.state.radioLabel}
                name={this.state.radioName}
                checked={this.state.radioChecked}
                disabled={this.state.radioDisabled}
                onChange={this.createStateLink('radioChecked')}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              {/* eslint-disable react/jsx-indent */}
              <pre className="tw-docs-code">
{`<Radio
  label={"${this.state.radioLabel}"}
  name={"${this.state.radioName}"}
  checked={${this.state.radioChecked}}
  disabled={${this.state.radioDisabled}}
  onChange={this.handleRadioChange}
/>`}
              </pre>
              {/* eslint-enable react/jsx-indent */}
            </div>
            <div className="col-md-6">
              <input
                type="text"
                value={this.state.radioLabel}
                onChange={this.createEventStateLink('radioLabel')}
                placeholder="Radio label"
                className="form-control"
              />
              <div className="m-t-3" />
              <input
                type="text"
                value={this.state.radioName}
                onChange={this.createEventStateLink('radioName')}
                placeholder="Radio name"
                className="form-control"
              />
              <div className="m-t-3" />
              <Checkbox
                label="Disabled?"
                onChange={this.createStateLink('radioDisabled')}
                checked={this.state.radioDisabled}
              />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="row">
            <div className="col-md-6">
              <h2>Loader</h2>
              <p>Like a record baby</p>
            </div>
            <div className="col-md-6 p-b-2 text-xs-center">
              <Loader small={this.state.loaderSmall} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              {/* eslint-disable react/jsx-indent */}
              <pre className="tw-docs-code">
{`<Loader small={${this.state.loaderSmall}} />`}
              </pre>
              {/* eslint-enable react/jsx-indent */}
            </div>
            <div className="col-md-6">
              <Checkbox
                label="Small?"
                checked={this.state.loaderSmall}
                onChange={this.createStateLink('loaderSmall')}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
