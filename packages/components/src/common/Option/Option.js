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
  decision,
  complex,
  className,
  inverseMediaCircle,
  showMediaAtAllSizes,
  showMediaCircle,
}) => (
  <Element
    className={classNames(className, 'media', {
      'decision-complex': complex,
      decision,
      disabled,
      'tw-option__sm-media': showMediaAtAllSizes,
    })}
    href={href}
    onClick={onClick}
    htmlFor={htmlFor}
    disabled={disabled && Element === 'button'}
  >
    {media && (
      <div className="media-left">
        {showMediaCircle ? (
          <div
            className={classNames('circle circle-sm text-primary', {
              'circle-inverse': inverseMediaCircle,
            })}
          >
            {media}
          </div>
        ) : (
          <div className="tw-option__no-media-circle">{media}</div>
        )}
      </div>
    )}
    <div className="media-body">
      <div className="h5">{title}</div>
      {content && <div className="decision__content">{content}</div>}
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
  showMediaAtAllSizes: Types.bool,
  showMediaCircle: Types.bool,
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
  showMediaAtAllSizes: false,
  showMediaCircle: true,
};

export default Option;
