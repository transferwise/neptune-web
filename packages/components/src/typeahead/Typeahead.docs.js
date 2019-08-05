import React, { Component } from 'react';
import { Typeahead } from '..';
import { generateCodeBlock, generateState, generateInput } from '../../docs/utils';
import { Sizes } from '../common';
import { AlertType } from '../alert/Alert';

const SIZES = [Sizes.MEDIUM, Sizes.LARGE];
const options = [
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
    label: 'British Pound',
  },
  {
    label: 'Euro',
  },
  {
    label: 'Something else',
  },
];

const KNOBS = {
  knobs: [
    {
      type: 'select',
      label: 'Size',
      state: 'size',
      options: SIZES.map(value => ({
        value,
        label: value,
      })),
      defaultState: { value: SIZES[0], label: SIZES[0] },
    },
    {
      type: 'checkbox',
      label: 'Multiselect (chips mode)',
      state: 'multiple',
      defaultState: false,
    },
    {
      type: 'checkbox',
      label: 'Clearable',
      state: 'clearable',
      defaultState: false,
    },
    {
      type: 'checkbox',
      label: 'Addon',
      state: 'addon',
      defaultState: true,
    },
    {
      type: 'checkbox',
      label: 'Allow new',
      state: 'allowNew',
      defaultState: false,
    },
    {
      type: 'checkbox',
      label: 'Show suggestions',
      state: 'showSuggestions',
      defaultState: true,
    },
    {
      type: 'text',
      label: 'Placeholder',
      state: 'placeholder',
      defaultState: 'Enter your search request',
    },
    {
      type: 'number',
      label: 'Max height',
      state: 'maxHeight',
      defaultState: 9999,
    },
    {
      type: 'checkbox',
      label: 'has alert',
      state: 'alert',
      defaultState: false,
    },
    {
      type: 'text',
      label: 'alert message',
      state: 'alertMessage',
      defaultState: '',
    },
    {
      type: 'select',
      label: 'alert Type',
      state: 'alertType',
      options: [AlertType.Error, AlertType.Warning].map(value => ({
        value,
        label: value,
      })),
      defaultState: { value: AlertType.Error, label: AlertType.Error },
    },
  ],
};

export default class TypeaheadDocs extends Component {
  state = {
    options,
    ...generateState(KNOBS),
  };
  render() {
    const {
      size,
      multiple,
      addon,
      clearable,
      maxHeight,
      alert,
      alertMessage,
      alertType,
      allowNew,
      showSuggestions,
      placeholder,
    } = this.state;

    const footer = (
      <div>
        Want a footer? <a href="/manual">Style it!</a>
      </div>
    );
    const extraProps = {
      addon: addon ? <i className=" input-group-text icon icon-search" /> : null,
      onBlur: () => {},
    };

    const validateChip =
      multiple && allowNew
        ? option =>
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
              option.label,
            )
        : undefined;

    return (
      <div className="container">
        <section className="section">
          <div className="row">
            <div className="col-md-6">
              <h2>Typeahead</h2>
              <p>
                My <i>type</i>ahead on paper
              </p>
              <p>
                Also chips. For chips turn off showSuggestions and turn on multiple and allowNew!
              </p>
              {generateCodeBlock('Typeahead', KNOBS, this, {
                options: JSON.stringify(options, null, '  '),
                ...extraProps,
                validateChip,
              })}
              <p>Required:</p>
              <ul>
                <li>id</li>
                <li>options</li>
                <li>onChange</li>
                <li>name</li>
              </ul>
            </div>
            <div className="col-md-6">
              <Typeahead
                id="typeahead"
                name="typeahead-input-name"
                autoFocus
                options={this.state.options}
                size={size.value}
                maxHeight={maxHeight || undefined}
                footer={footer}
                multiple={multiple}
                clearable={clearable}
                allowNew={allowNew}
                showSuggestions={showSuggestions}
                placeholder={placeholder}
                chipSeparators={[',', ' ']}
                validateChip={validateChip}
                alert={alert ? { message: alertMessage, type: alertType.value } : undefined}
                onSearch={() => {
                  setTimeout(() => this.setState({ options }), 1500);
                }}
                onChange={() => {}}
                {...extraProps}
              />
              <div className="row m-t-5">{KNOBS.knobs.map(knob => generateInput(knob, this))}</div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
