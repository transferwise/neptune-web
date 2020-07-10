/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import Types from 'prop-types';
import requiredIf from 'react-required-if';

import Chevron from '../chevron';

import Option from '../common/Option';
import './NavigationOption.css';

const NavigationOption = ({
  as,
  media,
  href,
  title,
  content,
  onClick,
  complex,
  disabled,
  showMediaAtAllSizes,
  showMediaCircle,
}) => {
  const sharedProps = {
    as,
    media,
    href,
    title,
    content,
    complex,
    disabled,
    showMediaAtAllSizes,
    showMediaCircle,
  };

  if (href) {
    sharedProps.as = 'a';
  }

  return (
    <Option
      className="tw-navigation-option"
      {...sharedProps}
      onClick={(event) => {
        if (!disabled) {
          onClick(event);
        }
      }}
      button={<Chevron orientation={Chevron.Orientation.RIGHT} disabled={disabled} />}
    />
  );
};

NavigationOption.propTypes = {
  as: Types.elementType,
  media: Types.node,
  title: Types.node.isRequired,
  content: Types.node,
  onClick: Types.func,
  href: requiredIf(Types.string, (props) => props.as === 'a'),
  complex: Types.bool,
  disabled: Types.bool,
  showMediaAtAllSizes: Types.bool,
  showMediaCircle: Types.bool,
};

NavigationOption.defaultProps = {
  as: 'button',
  media: null,
  content: null,
  complex: false,
  onClick: null,
  href: undefined,
  disabled: false,
  showMediaAtAllSizes: false,
  showMediaCircle: true,
};

export default NavigationOption;
