import React, { Component } from 'react';
import { Field, Select } from '..';
import { FormControlType } from '../formControl/FormControlType';

import { Sizes } from '../common';
import { FieldFormats, FieldTypes } from './Field';
import { generateCodeBlock, generateInput, generateState } from '../../docs/utils';

import image from '../common/captcha.png';

const FIELD_TYPES = [
  { value: FormControlType.RADIO, label: 'Radio' },
  { value: FormControlType.CHECKBOX, label: 'Checkbox' },
  { value: FormControlType.SELECT, label: 'Select' },
  { value: FormControlType.DATE, label: 'Date' },
  { value: FormControlType.DATELOOKUP, label: 'Date Lookup' },
  { value: FormControlType.TEL, label: 'Telephone' },
  { value: FormControlType.NUMBER, label: 'Number' },
  { value: FormControlType.PASSWORD, label: 'Password' },
  { value: FormControlType.TEXT, label: 'Text' },
  { value: FormControlType.TEXTAREA, label: 'Textarea' },
  { value: FormControlType.UPLOAD, label: 'Upload' },
];

const KNOBS = {
  sharedKnob: [
    {
      type: FormControlType.CHECKBOX,
      label: 'Is Control disabled?',
      state: 'disabled',
      defaultState: false,
    },
    {
      type: FormControlType.CHECKBOX,
      label: 'Is Control readOnly?',
      state: 'readOnly',
      defaultState: false,
    },
    {
      type: FormControlType.CHECKBOX,
      label: 'Is Control required?',
      state: 'required',
      defaultState: false,
    },
    {
      type: FormControlType.CHECKBOX,
      label: 'Is Control hidden?',
      state: 'hidden',
      defaultState: false,
    },
    {
      type: FormControlType.TEXT,
      label: 'Label',
      state: 'label',
      defaultState: 'Field label',
    },
  ],
  infoMessageKnobs: [
    {
      type: FormControlType.STRING,
      label: 'Error Message',
      state: 'errorMessage',
      defaultState: null,
    },
    {
      type: FormControlType.STRING,
      label: 'Warning Message',
      state: 'warningMessage',
      defaultState: null,
    },
  ],
};

const OTHER_KNOBS = {
  fieldKnob: [
    {
      type: FormControlType.CHECKBOX,
      label: 'Add Help List',
      state: 'addHelpList',
      defaultState: false,
    },
    {
      type: FormControlType.CHECKBOX,
      label: 'Add Help Image',
      state: 'addHelpImage',
      defaultState: false,
    },
    {
      type: FormControlType.STRING,
      label: 'Help message',
      state: 'helpMessage',
      defaultState: null,
    },
    {
      type: FormControlType.CHECKBOX,
      label: 'Add Do and Dont',
      state: 'addDoAndDont',
      defaultState: false,
    },
  ],
  numberKnob: [
    {
      type: 'number',
      label: 'Step',
      state: 'step',
      defaultState: 1,
    },
    {
      type: 'number',
      label: 'Min',
      state: 'minimum',
      defaultState: 3,
    },
    {
      type: 'number',
      label: 'Max',
      state: 'maximum',
      defaultState: 12,
    },
  ],
};

const TEXT_INPUT_COMPONENT = {
  formControl: FormControlType.TEXT,
  fieldProps: {
    name: 'basic-text-input',
    field: {
      type: FieldTypes.STRING,
      placeholder: 'Please enter string',
    },
  },
};

const RADIO_COMPONENT = {
  formControl: FormControlType.RADIO,
  fieldProps: {
    name: 'basic-radio-group',
    field: {
      type: FieldTypes.NUMBER,
      label: 'Basic Radio Group',
      options: [
        {
          label: 'One',
          value: 1,
        },
        {
          label: 'Two',
          value: 2,
        },
        {
          label: 'Three',
          value: 3,
        },
      ],
      control: FormControlType.RADIO,
    },
  },
};

const CHECKBOX_COMPONENT = {
  formControl: FormControlType.CHECKBOX,
  fieldProps: {
    name: 'basic-checkbox',
    field: {
      type: FieldTypes.BOOLEAN,
      label: 'Basic Checkbox Input',
      control: FormControlType.CHECKBOX,
    },
  },
};

const SELECT_COMPONENT = {
  formControl: FormControlType.SELECT,
  fieldProps: {
    name: 'basic-select',
    field: {
      type: FieldTypes.STRING,
      label: 'Planets',
      placeholder: 'Planets',
      searchPlaceholder: 'Type to search...',
      options: [
        { label: 'Neptune', value: 'neptune' },
        { label: 'Mars', value: 'mars' },
        { label: 'Earth', value: 'earth' },
        { label: 'Mercury', value: 'mercury' },
      ],
      control: FormControlType.SELECT,
    },
  },
};

const DATE_INPUT_COMPONENT = {
  formControl: FormControlType.DATE,
  fieldProps: {
    name: 'date-input',
    field: {
      type: FieldTypes.STRING,
      format: FieldFormats.DATE,
      label: 'Date Input',
      size: Sizes.MEDIUM,
      control: FormControlType.DATE,
    },
  },
};

const DATE_LOOKUP_INPUT_COMPONENT = {
  formControl: FormControlType.DATELOOKUP,
  fieldProps: {
    name: 'date-lockup-input',
    field: {
      type: FieldTypes.STRING,
      control: FormControlType.DATELOOKUP,
    },
  },
};

const TELEPHONE_INPUT_COMPONENT = {
  formControl: FormControlType.TEL,
  fieldProps: {
    name: 'phone-input',
    field: {
      format: FieldFormats.PHONE,
      type: FieldTypes.STRING,
      label: 'Telephone',
    },
  },
};

const NUMBER_INPUT_COMPONENT = {
  formControl: FormControlType.NUMBER,
  fieldProps: {
    name: 'number-input',
    field: {
      type: FieldTypes.NUMBER,
      minimum: 10,
      maximum: 99,
      validationMessages: {
        required: 'Number is required',
        minimum: 'Must be 10 or greater',
        maximum: 'Must be 99 or less',
      },
    },
  },
};

const PASSWORD_INPUT_COMPONENT = {
  formControl: FormControlType.PASSWORD,
  fieldProps: {
    name: 'password-input',
    field: {
      type: FieldTypes.STRING,
      format: FieldFormats.PASSWORD,
      label: 'Password',
    },
  },
};

const TEXTAREA_COMPONENT = {
  formControl: FormControlType.TEXTAREA,
  fieldProps: {
    name: 'textarea',
    field: {
      control: FormControlType.TEXTAREA,
      type: FieldTypes.STRING,
      label: 'Textarea',
    },
  },
};

const UPLOAD_COMPONENT = {
  formControl: FormControlType.UPLOAD,
  fieldProps: {
    name: 'upload-input',
    field: {
      type: FieldTypes.STRING,
      format: FieldFormats.BASE_64_URL,
      label: 'Upload',
      placeholder: 'Please choose a file',
    },
    uploadProps: {
      buttonText: 'Choose file...',
      cancelText: 'Choose a different file?',
      processingText: 'Processing...',
      successText: 'Upload complete!',
      failureText: 'Upload failed',
    },
  },
};

const FIELDS = [
  RADIO_COMPONENT,
  TEXT_INPUT_COMPONENT,
  CHECKBOX_COMPONENT,
  SELECT_COMPONENT,
  DATE_INPUT_COMPONENT,
  DATE_LOOKUP_INPUT_COMPONENT,
  TELEPHONE_INPUT_COMPONENT,
  NUMBER_INPUT_COMPONENT,
  PASSWORD_INPUT_COMPONENT,
  TEXTAREA_COMPONENT,
  UPLOAD_COMPONENT,
];

export default class FieldDocs extends Component {
  constructor() {
    super();
    this.state = {
      control: TEXT_INPUT_COMPONENT.formControl,
      value: null,

      ...generateState({ ...KNOBS, ...OTHER_KNOBS }),
    };
  }

  createStateLink(stateValueName) {
    return value => this.setState({ [stateValueName]: value });
  }

  changeControl() {
    return item =>
      this.setState({
        control: item.value,
        value: FIELDS.find(props => props.formControl === item.value).fieldProps.value,
      });
  }

  render() {
    const {
      control,
      value,
      disabled,
      readOnly,
      required,
      hidden,
      label,
      step,
      minimum,
      maximum,
      errorMessage,
      warningMessage,
      helpMessage,
      addHelpList,
      addHelpImage,
      addDoAndDont,
    } = this.state;

    const selectedComponent = FIELDS.find(field => field.formControl === control);

    const controlIsNumber = control === FormControlType.NUMBER;

    selectedComponent.fieldProps.field.step = controlIsNumber ? step : undefined;
    selectedComponent.fieldProps.field.minimum = controlIsNumber ? minimum : undefined;
    selectedComponent.fieldProps.field.maximum = controlIsNumber ? maximum : undefined;

    selectedComponent.fieldProps.field.help = {};
    selectedComponent.fieldProps.field.help.list = addHelpList
      ? ['Make sure of this', 'And this', 'And avoid this']
      : null;
    selectedComponent.fieldProps.field.help.image = addHelpImage ? image : null;
    selectedComponent.fieldProps.field.help.do = addDoAndDont
      ? ['Make sure of this', 'And this']
      : null;
    selectedComponent.fieldProps.field.help.dont = addDoAndDont ? ['But avoid this'] : null;

    selectedComponent.fieldProps.field.help.message = helpMessage;

    return (
      <div className="container">
        <section className="section">
          <div className="row">
            <div className="col-md-6">
              <h2 id="field">Field</h2>
              <p>Puns are not my field of expertise</p>
              <p>
                The field controls labelling, validation and help text, alongside the rendering of
                the form control itself.
              </p>
              <p>{generateCodeBlock('Field', KNOBS, this, { ...selectedComponent.fieldProps })}</p>
            </div>
            <div className="col-md-6">
              <div className="m-t-2">
                <Field
                  value={value}
                  errorMessage={errorMessage}
                  warningMessage={warningMessage}
                  label={label}
                  {...selectedComponent.fieldProps}
                  field={{
                    ...selectedComponent.fieldProps.field,
                    disabled,
                    readOnly,
                    required,
                    hidden,
                  }}
                  onChange={this.createStateLink('value')}
                />
              </div>

              <div className="m-t-2">
                <pre>{`value={${JSON.stringify(value || null)}}`}</pre>
              </div>

              <hr />

              <div className="m-t-2">
                <div className="col-md-12 m-b-2">
                  {/* eslint-disable jsx-a11y/label-has-associated-control */}
                  {/* eslint-disable jsx-a11y/label-has-for */}
                  <label>Control type</label>
                  <Select
                    onChange={this.changeControl()}
                    selected={{
                      value: control,
                      label: FIELD_TYPES.find(type => type.value === control).label,
                    }}
                    options={FIELD_TYPES}
                  />
                </div>
              </div>

              <div className="m-t-2">{KNOBS.sharedKnob.map(knob => generateInput(knob, this))}</div>
              <div className="m-t-2">
                {KNOBS.infoMessageKnobs.map(knob => generateInput(knob, this))}
              </div>
              {control === FormControlType.NUMBER && (
                <div className="m-t-2">
                  {OTHER_KNOBS.numberKnob.map(knob => generateInput(knob, this))}
                </div>
              )}
              {OTHER_KNOBS.fieldKnob.map(knob => generateInput(knob, this))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
