import React from 'react';
import { Select, Checkbox } from '../../../src';

const generateInput = (knobs, componentThis) => {
  const { type, label, state, options } = knobs;
  switch (type) {
    case 'select':
      return (
        <div className="col-md-6 m-b-2" key={state}>
          <label htmlFor={state} className="control-label">
            {label}
          </label>
          <Select
            id={state}
            selected={componentThis.state[state] ? { ...componentThis.state[state] } : undefined}
            options={options.map(option => ({ ...option }))}
            onChange={selection => {
              componentThis.setState({
                [state]: selection ? { ...selection } : undefined,
              });
            }}
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
            onChange={value => componentThis.setState({ [state]: value })}
            checked={componentThis.state[state]}
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
            onChange={ev => componentThis.setState({ [state]: ev.target.value })}
          />
        </div>
      );
  }
};

export default generateInput;
