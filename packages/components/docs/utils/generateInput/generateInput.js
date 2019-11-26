import React from 'react';
import { FormControl } from '../../../src';
import { FormControlType } from '../../../src/formControl/FormControlType';

const generateInput = (knobs, componentThis) => {
  const { type, label, state, options } = knobs;

  const locale = (componentThis.state.locale && componentThis.state.locale.value) || 'en-GB';

  let required = false;
  let selectedOptions = null;
  let newValue = knobs.defaultState || '';
  let newLabel = label;
  const { placeholder } = componentThis.state;
  let newPlaceholder = placeholder;

  switch (type) {
    case FormControlType.SELECT:
      required = true;
      newValue =
        (componentThis.state[state] && componentThis.state[state].value) ||
        knobs.defaultState.value;

      break;
    case FormControlType.RADIO:
      required = true;
      if (options && componentThis.state[state] && componentThis.state[state].value) {
        selectedOptions = options.find(option => componentThis.state[state].value === option.value);
      }
      break;
    case FormControlType.DATELOOKUP:
      newValue = new Date(componentThis.state[state]);
      newLabel = '';
      newPlaceholder = '';
      break;
    default:
      newValue = componentThis.state[state];
      break;
  }

  const handleOnChange = value => {
    let changedValue = value;

    if (type === FormControlType.SELECT && options) {
      const newOptions = options.find(option => value === option.value);
      changedValue = newOptions ? { label: newOptions.value, value: newOptions.value } : [];
    }

    return componentThis.setState({ [state]: changedValue });
  };

  return (
    <div className="col-md-6 m-b-2" key={state}>
      <label htmlFor={state} className="control-label">
        {label}
      </label>

      <FormControl
        type={type}
        id={state}
        label={newLabel}
        placeholder={newPlaceholder}
        selectedOption={selectedOptions}
        options={options && options.map(option => ({ ...option }))}
        onChange={handleOnChange}
        name={`docs-${label}`}
        onBlur={() => {}}
        onFocus={() => {}}
        required={required}
        locale={locale}
        value={newValue}
      />
    </div>
  );
};

export default generateInput;
