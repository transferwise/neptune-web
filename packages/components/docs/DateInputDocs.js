import React, { Component } from 'react';

import { Checkbox, Select, DateInput } from '../src';

export default class DateInputDocs extends Component {
  state = {
    locale: 'en-GB',
    disabled: false,
    size: 'md',
    value: '1995-12-01',
  };

  handleChange = date => {
    // eslint-disable-next-line
    console.log(`Returned ${typeof date}`, date);
  };
  render() {
    const { locale, disabled, size, value } = this.state;
    return (
      <div className="container">
        <section className="section">
          <div className="row m-t-4">
            <div className="col-md-6">
              <h2>Date Input</h2>
              <p>One of the most romantic components...</p>
            </div>
            <div className="col-md-6">
              <DateInput
                onChange={this.handleChange}
                locale={locale}
                disabled={disabled}
                size={size}
                value={value}
              />
            </div>
          </div>
          <div className="row ">
            <div className="col-md-6">
              {/* eslint-disable react/jsx-indent */}
              <pre className="tw-docs-code">
                {`<DateInput
  onChange={this.handleChange}
  locale="${locale}"
  disabled={${disabled}}
  size= "${size}"
  value="${value}"
  onChange="{console.log}"
/>`}
              </pre>
              {/* eslint-enable react/jsx-indent */}
              <a href="https://github.com/transferwise/components/blob/master/src/dateInput/README.md">
                Read Me
              </a>
            </div>

            <div className="col-md-6">
              <div className="row ">
                <div className="col-md-6">
                  <label htmlFor="locale-selector" className="control-label">
                    Locale
                  </label>
                  <Select
                    id="size-selector"
                    selected={{ value: locale, label: locale }}
                    options={['en-GB', 'en-US', 'ja-JP', 'it-IT', 'fr-FR'].map(loc => ({
                      value: loc,
                      label: loc,
                    }))}
                    onChange={loc =>
                      loc &&
                      this.setState({
                        locale: loc.value,
                      })
                    }
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="size-selector" className="control-label">
                    Size
                  </label>
                  <Select
                    id="size-selector"
                    selected={{ value: size, label: size }}
                    options={['sm', 'md', 'lg'].map(siz => ({
                      value: siz,
                      label: siz,
                    }))}
                    onChange={siz =>
                      siz &&
                      this.setState({
                        size: siz.value,
                      })
                    }
                  />
                </div>
              </div>
              <div className="row m-t-2">
                <div className="col-md-6 m-t-3">
                  <Checkbox
                    id="-option-complex"
                    label="Disabled"
                    checked={disabled}
                    onChange={() =>
                      this.setState({
                        disabled: !disabled,
                      })
                    }
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 m-t-4">
                  <label htmlFor="locale-selector" className="control-label">
                    Model date
                  </label>
                  <input
                    className="form-control "
                    id="locale-selector"
                    value={value}
                    onChange={event => {
                      this.setState({ value: event.target.value });
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
