import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import requiredIf from 'react-required-if';

import './Option.css';

const Option = ({
  as: Element,
  href,
  media,
  title,
  content,
  onClick,
  htmlFor,
  disabled,
  button,
  complex,
  className,
}) => (
  <Element
    className={classNames(className, 'media decision', { 'decision-complex': complex, disabled })}
    href={href}
    onClick={onClick}
    htmlFor={htmlFor}
  >
    {media && (
      <div className="media-left">
        <div className="circle circle-sm circle-inverse text-primary">{media}</div>
      </div>
    )}
    <div className="media-body">
      <h5>{title}</h5>
      {content}
    </div>
    <div className="media-right">{button}</div>
  </Element>
);

Option.propTypes = {
  media: Types.node,
  htmlFor: Types.string,
  title: Types.node.isRequired,
  content: Types.node,
  onClick: Types.func,
  href: requiredIf(Types.string, (props) => props.as === 'a'),
  as: Types.elementType,
  disabled: Types.bool,
  button: Types.node.isRequired,
  complex: Types.bool,
  className: Types.string,
};

Option.defaultProps = {
  as: 'label',
  media: '',
  content: null,
  htmlFor: null,
  disabled: false,
  onClick: null,
  href: null,
  complex: false,
  className: null,
};

export default Option;
