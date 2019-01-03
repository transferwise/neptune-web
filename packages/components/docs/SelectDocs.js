import React, { Component } from 'react';
import { Select, Checkbox } from '../src';

export default class SelectDocs extends Component {
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
      { separator: true },
      { value: 6, label: 'Something else' },
    ];
    this.state = {
      selectedOption: null,
      required: false,
      inverse: false,
      disabled: false,
      block: undefined,
      searchable: false,
      hasPlaceholder: false,
      hasSearchPlaceholder: false,
      searchPlaceholder: 'Search...',
      searchValue: '',
      placeholder: 'Select an option...',
      hasClassNames: false,
    };
  }

  getOptions() {
    if (!this.state.searchable) {
      return this.options;
    }

    const headerMapping = this.options.reduce(
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

    const foundOptions = this.options.filter(
      option => option.label && option.label.toLowerCase().indexOf(this.state.searchValue) !== -1,
    );

    return this.options.filter(option => {
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

  createEventStateLink(name) {
    return event => this.setState({ [name]: event.target.value });
  }

  render() {
    const searchPlaceholder = this.state.hasSearchPlaceholder
      ? `"${this.state.searchPlaceholder}"`
      : undefined;

    let docsCode = `<Select
  placeholder={${this.state.hasPlaceholder ? `"${this.state.placeholder}"` : undefined}}
  size={${this.state.size ? `"${this.state.size}"` : undefined}}
  dropdownRight={${this.state.dropdownRight ? `"${this.state.dropdownRight}"` : undefined}}
  dropdownWidth={${this.state.dropdownWidth ? `"${this.state.dropdownWidth}"` : undefined}}
  block={${this.state.block}}
  selected={${JSON.stringify(this.state.selectedOption, null, '  ')}}
  onChange={this.handleOptionChange}
  onSearchChange={${this.state.searchable ? 'this.handleSearchChange' : undefined}}
  searchValue={${this.state.searchable ? `"${this.state.searchValue}"` : undefined}}
  searchPlaceholder={${searchPlaceholder}}
  required={${this.state.required}}
  inverse={${this.state.inverse}}
  disabled={${this.state.disabled}}
  options={${JSON.stringify(this.getOptions(), null, '  ')}}
/>`;

    if (this.state.hasClassNames) {
      docsCode = docsCode.replace(
        '<Select',
        `<Select
  classNames={{ 'btn-group': 'btn-group_33HEu6aS3s' }}`,
      );
    }

    return (
      <div className="container">
        <section className="section">
          <div className="row">
            <div className="col-md-6">
              <h2>Select</h2>
              <p>It ... selects things</p>
            </div>
            <div className="col-md-6">
              <Select
                size={this.state.size}
                placeholder={this.state.hasPlaceholder ? this.state.placeholder : undefined}
                dropdownRight={this.state.dropdownRight}
                dropdownWidth={this.state.dropdownWidth}
                inverse={this.state.inverse}
                options={this.getOptions()}
                block={this.state.block}
                selected={this.state.selectedOption}
                disabled={this.state.disabled}
                onChange={this.createStateLink('selectedOption')}
                required={this.state.required}
                searchValue={this.state.searchable ? this.state.searchValue : undefined}
                searchPlaceholder={
                  this.state.hasSearchPlaceholder ? this.state.searchPlaceholder : undefined
                }
                onSearchChange={
                  this.state.searchable ? this.createStateLink('searchValue') : undefined
                }
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              {/* eslint-disable react/jsx-indent */}
              <pre className="tw-docs-code">{docsCode}</pre>
              {/* eslint-enable react/jsx-indent */}
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
              <label htmlFor="size-selector" className="control-label">
                Size
              </label>
              <Select
                id="size-selector"
                selected={
                  this.state.size ? { value: this.state.size, label: this.state.size } : undefined
                }
                options={['sm', 'md', 'lg'].map(size => ({ value: size, label: size }))}
                onChange={selection =>
                  this.setState({
                    size: selection ? selection.value : undefined,
                  })
                }
              />
              <div className="m-t-3" />
              <Checkbox
                label="Scoped className?"
                onChange={this.createStateLink('hasClassNames')}
                checked={this.state.hasClassNames}
              />
              <div className="m-t-3" />
              <Checkbox
                label="Inverse?"
                onChange={this.createStateLink('inverse')}
                checked={this.state.inverse}
              />
              <div className="m-t-3" />
              <label htmlFor="dropdown-width-selector" className="control-label">
                Dropdown width
              </label>
              <Select
                id="dropdown-width-selector"
                selected={
                  this.state.dropdownWidth
                    ? { value: this.state.dropdownWidth, label: this.state.dropdownWidth }
                    : undefined
                }
                options={['sm', 'md', 'lg'].map(size => ({ value: size, label: size }))}
                onChange={selection =>
                  this.setState({
                    dropdownWidth: selection ? selection.value : undefined,
                  })
                }
              />
              <div className="m-t-3" />
              <label htmlFor="right-breakpoint-selector" className="control-label">
                Breakpoint to open dropdown from the right
              </label>
              <Select
                id="right-breakpoint-selector"
                selected={
                  this.state.dropdownRight
                    ? { value: this.state.dropdownRight, label: this.state.dropdownRight }
                    : undefined
                }
                options={['xs', 'sm', 'md', 'lg', 'xl'].map(size => ({ value: size, label: size }))}
                onChange={selection =>
                  this.setState({
                    dropdownRight: selection ? selection.value : undefined,
                  })
                }
              />
              <div className="m-t-3" />
              <Checkbox
                label="Required?"
                onChange={this.createStateLink('required')}
                checked={this.state.required}
              />
              <div className="m-t-3" />
              <Checkbox
                label="Block button?"
                onChange={this.createStateLink('block')}
                checked={this.state.block || this.state.block === undefined}
              />
              <div className="m-t-3" />
              <Checkbox
                label="Disabled?"
                onChange={this.createStateLink('disabled')}
                checked={this.state.disabled}
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
              {this.state.hasPlaceholder ? (
                <input
                  type="text"
                  value={this.state.placeholder}
                  onChange={this.createEventStateLink('placeholder')}
                  placeholder="Placeholder"
                  className="form-control"
                />
              ) : (
                ''
              )}
              <div className="m-t-3" />
              <Checkbox
                label="Custom search placeholder?"
                onChange={this.createStateLink('hasSearchPlaceholder')}
                checked={this.state.hasSearchPlaceholder}
              />
              <div className="m-t-3" />
              {this.state.hasSearchPlaceholder ? (
                <input
                  type="text"
                  value={this.state.searchPlaceholder}
                  onChange={this.createEventStateLink('searchPlaceholder')}
                  placeholder="Search placeholder"
                  className="form-control"
                />
              ) : (
                ''
              )}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
