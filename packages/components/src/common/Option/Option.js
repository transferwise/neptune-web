import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import requiredIf from 'react-required-if';

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
  decision,
  complex,
  className,
  inverseMediaCircle,
}) => (
  <Element
    className={classNames(className, 'media', { 'decision-complex': complex, decision, disabled })}
    href={href}
    onClick={onClick}
    htmlFor={htmlFor}
  >
    {media && (
      <div className="media-left">
        <div
          className={classNames('circle circle-sm text-primary', {
            'circle-inverse': inverseMediaCircle,
          })}
        >
          {media}
        </div>
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
  button: Types.node,
  decision: Types.bool,
  complex: Types.bool,
  inverseMediaCircle: Types.bool,
  className: Types.string,
};

Option.defaultProps = {
  as: 'label',
  media: '',
  content: null,
  htmlFor: null,
  disabled: false,
  button: null,
  onClick: null,
  href: null,
  decision: true,
  complex: false,
  inverseMediaCircle: true,
  className: null,
};

export default Option;
