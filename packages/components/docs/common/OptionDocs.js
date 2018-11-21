import React, { Component, Fragment } from 'react';
import Types from 'prop-types';
import FastFlagIcon from '@transferwise/icons/react/fast-flag'; // eslint-disable-line import/no-extraneous-dependencies

import { Checkbox } from '../../src';

class OptionDocs extends Component {
  static propTypes = {
    type: Types.string.isRequired,
    Option: Types.func.isRequired,
    name: Types.string.isRequired,
    callbackName: Types.string.isRequired,
    callback: Types.func.isRequired,
    callbackString: Types.string.isRequired,
    propName: Types.string,
    propValue: Types.bool,
    title: Types.string.isRequired,
    description: Types.string.isRequired,
  };

  static defaultProps = {
    propName: null,
    propValue: false,
  };

  state = {
    complex: false,
    disabled: false,
  };

  createStateLink(name) {
    return value => this.setState({ [name]: value });
  }

  render() {
    const {
      type,
      Option,
      name,
      callbackName,
      callback,
      callbackString,
      propName,
      propValue,
      title,
      description,
    } = this.props;
    const { complex, disabled } = this.state;

    const Code = () => (
      <Fragment>
        {/* eslint-disable react/jsx-indent */}
        <pre className="tw-docs-code">
          {`<${name}
  id="${type}-option"
  name="${type}-option"
  title="${title}"
  description="${getDescriptionForComplexState(complex)}"${boolProp(propName, propValue)}${boolProp(
            'complex',
            complex,
          )}${boolProp('disabled', disabled)}
  ${callbackName}={${callbackString}}
  media={<FastFlagIcon />}
/>`}
        </pre>
        {/* eslint-enable react/jsx-indent */}
      </Fragment>
    );

    return (
      <div className="container" id={`${type}-option-docs`}>
        <div className="section">
          <div className="row">
            <div className="col-md-6">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
            <div className="col-md-6">
              <Option
                id={`${type}-option`}
                name={`${type}-option`}
                title={title}
                description={getDescriptionForComplexState(complex)}
                complex={complex}
                disabled={disabled}
                media={<FastFlagIcon />}
                {...{ [propName]: propValue, [callbackName]: callback }}
              />
            </div>
          </div>
          <div className="row m-t-5">
            <div className="col-md-6">
              <Code />
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <Checkbox
                    id={`${type}-option-complex`}
                    label="Complex"
                    checked={complex}
                    onChange={this.createStateLink('complex')}
                  />
                </div>
                <div className="col-md-6">
                  <Checkbox
                    id={`${type}-option-disabled`}
                    label="Disabled"
                    checked={disabled}
                    onChange={this.createStateLink('disabled')}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function getDescriptionForComplexState(complex) {
  return complex
    ? 'Complex items should be used for items with long descriptions. Their button and media will be aligned to the top.'
    : 'Normally, the button and icon are vertically centered.';
}

function boolProp(name, value) {
  return value
    ? `
  ${name}`
    : '';
}

export default OptionDocs;
