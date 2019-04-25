import React, { Component } from 'react';
import { ProcessIndicator, Select, Radio } from '..';
import { processIndicatorSizes, processIndicatorStatuses } from './ProcessIndicator';

export default class ProcessIndicatorDocs extends Component {
  state = {
    status: 'processing',
    size: 'sm',
  };

  render() {
    const { status, size } = this.state;

    return (
      <div className="container">
        <section className="section">
          <div className="row">
            <div className="col-md-6">
              <h2>Process Indicator</h2>
              <p>
                A component for conveying that a process is occuring, and for communicating a
                successful or unsuccessful result
              </p>
            </div>
            <div className="col-md-6">
              <ProcessIndicator
                status={status}
                size={size}
                // eslint-disable-next-line
                onAnimationCompleted={processStatus => console.log(processStatus)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <pre className="tw-docs-code">
                {`<ProcessIndicator
  status={"${status}"}
  size={"${size}"}
  onAnimationCompleted={"console.log()"}
/>`}
              </pre>
            </div>
            <div className="col-md-6">
              <div className="m-t-3" />
              <label htmlFor="select-size">Size</label>
              <Select
                required
                id="select-size"
                selected={size ? { value: size, label: size } : null}
                options={processIndicatorSizes.map(sizeValue => ({
                  value: sizeValue,
                  label: sizeValue,
                }))}
                onChange={selection => this.setState({ size: selection ? selection.value : null })}
              />
              <div className="m-t-3" />
              <label htmlFor="select-status">Status</label>
              {processIndicatorStatuses.map(statusOption => (
                <Radio
                  id={statusOption}
                  key={statusOption}
                  label={statusOption}
                  name={statusOption}
                  disabled={
                    (status === 'failed' && statusOption === 'succeeded') ||
                    (status === 'succeeded' && statusOption === 'failed')
                  }
                  checked={status === statusOption}
                  onChange={() => this.setState({ status: statusOption })}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
