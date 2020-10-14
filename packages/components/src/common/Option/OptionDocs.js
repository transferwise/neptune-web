import React, { Component } from 'react';
import Types from 'prop-types';
import { FastFlag as FastFlagIcon } from '@transferwise/icons';

import { Checkbox } from '../..';

class OptionDocs extends Component {
  constructor() {
    super();
    this.state = {
      complex: false,
      disabled: false,
      hasMedia: true,
    };
  }

  createStateLink(name) {
    return (value) => this.setState({ [name]: value });
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
      content,
      extra,
    } = this.props;
    const { complex, disabled, hasMedia } = this.state;

    const Code = () => (
      <>
        {/* eslint-disable react/jsx-indent */}
        <pre className="tw-docs-code">
          {`<${name}
  id="${type}-option"
  name="${type}-option"
  title="${title}"
  content="${getContentForComplexState(complex)}"${boolProp(propName, propValue)}${boolProp(
            'complex',
            complex,
          )}${boolProp('disabled', disabled)}
  ${callbackName}={${callbackString}}${hasMedia ? '\n  media={<FastFlagIcon />}' : ''}
/>`}
        </pre>
        {/* eslint-enable react/jsx-indent */}
      </>
    );

    return (
      <div className="container" id={`${type}-option-docs`}>
        <div className="section">
          <div className="row">
            <div className="col-md-6">
              <h2>{title}</h2>
              <p>{content}</p>
            </div>
            <div className="col-md-6">
              <Option
                id={`${type}-option`}
                name={`${type}-option`}
                title={title}
                content={getContentForComplexState(complex)}
                complex={complex}
                disabled={disabled}
                media={hasMedia ? <FastFlagIcon /> : undefined}
                {...{ [propName]: propValue, [callbackName]: callback }}
              />
            </div>
          </div>
          <div className="row m-t-5">
            <div className="col-md-6">
              <Code />
              {extra}
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
                <div className="col-md-6 m-b-0">
                  <Checkbox
                    id={`${type}-option-disabled`}
                    label="Disabled"
                    checked={disabled}
                    onChange={this.createStateLink('disabled')}
                  />
                </div>
              </div>
              <div className="row m-t-2">
                <div className="col-md-6">
                  <Checkbox
                    id={`${type}-option-media`}
                    label="Has media"
                    checked={hasMedia}
                    onChange={this.createStateLink('hasMedia')}
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

function getContentForComplexState(complex) {
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

OptionDocs.propTypes = {
  type: Types.string.isRequired,
  Option: Types.func.isRequired,
  name: Types.string.isRequired,
  callbackName: Types.string.isRequired,
  callback: Types.func.isRequired,
  callbackString: Types.string.isRequired,
  propName: Types.string,
  propValue: Types.bool,
  title: Types.string.isRequired,
  content: Types.string.isRequired,
  extra: Types.string,
};

OptionDocs.defaultProps = {
  propName: null,
  propValue: false,
  extra: '',
};

export default OptionDocs;
