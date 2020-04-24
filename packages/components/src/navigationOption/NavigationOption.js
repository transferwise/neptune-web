/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import Types from 'prop-types';

import Option from '../common/Option';
import './NavigationOption.css';

const NavigationOption = ({ media, href, title, content, onClick, complex, disabled }) => {
  const sharedProps = { media, href, title, content, complex, disabled };

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
      button={
        <button className="tw-navigation-option__chevron caret rotate270" disabled={disabled} />
      }
    />
  );
};

NavigationOption.propTypes = {
  media: Types.node,
  title: Types.node.isRequired,
  content: Types.node,
  onClick: Types.func,
  href: Types.string,
  complex: Types.bool,
  disabled: Types.bool,
};

NavigationOption.defaultProps = {
  media: null,
  content: null,
  complex: false,
  onClick: null,
  href: undefined,
  disabled: false,
};

export default NavigationOption;
