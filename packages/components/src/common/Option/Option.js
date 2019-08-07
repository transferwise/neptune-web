import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';

import './Option.less';

const Option = ({ media, title, content, onClick, htmlFor, disabled, button, complex }) => (
  <label
    className={classNames('media decision', { 'decision-complex': complex, disabled })}
    onClick={event => {
      if (onClick) {
        event.preventDefault();
        onClick();
      }
    }}
    htmlFor={htmlFor}
  >
    <div className="media-left">
      <div className="circle circle-sm circle-inverse text-primary">{media}</div>
    </div>
    <div className="media-body">
      <h5>{title}</h5>
      {content}
    </div>
    <div className="media-right">{button}</div>
  </label>
);

Option.propTypes = {
  media: Types.node.isRequired,
  htmlFor: Types.string,
  title: Types.node.isRequired,
  content: Types.node,
  onClick: Types.func,
  disabled: Types.bool,
  button: Types.node.isRequired,
  complex: Types.bool,
};

Option.defaultProps = {
  content: null,
  htmlFor: null,
  disabled: false,
  onClick: null,
  complex: false,
};

export default Option;
