import React from 'react';
import { FormControl } from '../../../src';
import { FormControlType } from '../../../src/formControl/FormControlType';

const generateInput = (knobs, componentThis) => {
  const { type, label, state, options } = knobs;

  const handleOnChange = value => {
    let newValue = value;

    if (type === 'select' && options) {
      newValue = options.find(option => value === option.value);
    }

    return componentThis.setState({ [state]: newValue });
  };

  const { placeholder } = componentThis.state;

  const locale =
    componentThis.state.locale && componentThis.state.locale.value
      ? componentThis.state.locale.value
      : 'en-GB';

  let required = false;
  let selectedOptions = null;
  if (type === FormControlType.SELECT && options) {
    required = true;
    if (componentThis.state[state] && componentThis.state[state].value) {
      selectedOptions = options.find(option => componentThis.state[state].value === option.value);
    }
  }

  return (
    <div className="col-md-6 m-b-2" key={state}>
      <label htmlFor={state} className="control-label">
        {label}
      </label>

      <FormControl
        type={type}
        id={state}
        label={label}
        placeholder={placeholder}
        selectedOption={selectedOptions}
        options={options && options.map(option => ({ ...option }))}
        onChange={handleOnChange}
        name={`docs-${label}`}
        onBlur={() => {}}
        onFocus={() => {}}
        required={required}
        locale={locale}
        value={knobs.defaultState}
      />
    </div>
  );
};

export default generateInput;
