import React, { Component } from 'react';
import { Orientation, Size } from './Chevron';
import { Chevron, Checkbox, Select } from '../..';

export default class ChevronDocs extends Component {
  state = {
    orientation: Orientation.BOTTOM,
    animate: true,
    flip: false,
    size: Size.SMALL,
  };

  createStateLink(name) {
    return value => this.setState({ [name]: value });
  }

  render() {
    const { orientation, animate, flip, size } = this.state;

    return (
      <div className="container">
        <section className="section">
          <div className="row">
            <div className="col-md-6">
              <h2>Chevron</h2>
              <p>Simple chevron component to indicate direction of things</p>
            </div>
            <div className="col-md-6">
              <Chevron orientation={orientation} size={size} flip={flip} animate={animate} />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <pre className="tw-docs-code">
                {`<Chevron
  orientation="${orientation}"
  flip="${flip}"
  size="${size}"
  animate=${animate}
/>`}
              </pre>
            </div>
            <div className="col-md-6">
              <label htmlFor="chevron-orientation-selector" className="control-label">
                Orientation
              </label>
              <Select
                id="chevron-orientation-selector"
                required
                selected={{ value: orientation, label: orientation }}
                options={Object.values(Orientation).map(state => ({
                  value: state,
                  label: state,
                }))}
                onChange={selection => this.setState({ orientation: selection.value })}
              />
              <div className="m-t-3" />
              <label htmlFor="chevron-flip-selector" className="control-label">
                Flip
              </label>
              <Checkbox label="flip" checked={flip} onChange={this.createStateLink('flip')} />
              <div className="m-t-3" />
              <label htmlFor="chevron-size-selector" className="control-label">
                Size
              </label>
              <Select
                id="chevron-size-selector"
                required
                selected={{ value: size, label: size }}
                options={Object.values(Size).map(state => ({
                  value: state,
                  label: state,
                }))}
                onChange={selection => this.setState({ size: selection.value })}
              />
              <div className="m-t-3" />
              <label htmlFor="chevron-animate-checkbox" className="control-label">
                Animate
              </label>
              <Checkbox
                label="Animate"
                checked={animate}
                onChange={this.createStateLink('animate')}
              />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
