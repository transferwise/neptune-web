import React from 'react';
import { Select, Checkbox, DateLookup } from '../../../src';

const generateInput = (knobs, componentThis) => {
  const { type, label, state, options } = knobs;

  const handleOnChange = value => componentThis.setState({ [state]: value });

  switch (type) {
    case 'select':
      return (
        <div className="col-md-6 m-b-2" key={state}>
          <label htmlFor={state} className="control-label">
            {label}
          </label>
          <Select
            id={state}
            selected={componentThis.state[state] ? { ...componentThis.state[state] } : null}
            options={options.map(option => ({ ...option }))}
            required
            onChange={handleOnChange}
          />
        </div>
      );

    case 'checkbox':
      return (
        <div className="col-md-6 m-b-2" key={state}>
          <label htmlFor={state} className="control-label">
            {label}
          </label>
          <Checkbox
            id={state}
            label={label}
            onChange={handleOnChange}
            checked={componentThis.state[state]}
          />
        </div>
      );

    case 'number':
      return (
        <div className="col-md-6 m-b-2" key={state}>
          <label htmlFor={state} className="control-label">
            {label}
          </label>
          <input
            id={state}
            type="number"
            className="form-control"
            value={componentThis.state[state]}
            onChange={event => handleOnChange(parseFloat(event.target.value))}
          />
        </div>
      );

    case 'date':
      return (
        <div className="col-md-6 m-b-2" key={state}>
          <label htmlFor={state} className="control-label">
            {label}
          </label>
          <DateLookup
            id={state}
            value={componentThis.state[state]}
            placeholder="Choose a date"
            onChange={handleOnChange}
          />
        </div>
      );

    case 'input':
    default:
      return (
        <div className="col-md-6 m-b-2" key={state}>
          <label htmlFor={state} className="control-label">
            {label}
          </label>
          <input
            id={state}
            type="text"
            className="form-control"
            value={componentThis.state[state]}
            onChange={event => handleOnChange(event.target.value)}
          />
        </div>
      );
  }
};

export default generateInput;
