import React from 'react';
import Types from 'prop-types';

import Option from '../common/Option';
import './NavigationOption.less';

const NavigationOption = ({ media, title, description, onClick, complex, disabled }) => {
  const sharedProps = { media, title, description, complex, disabled };

  return (
    <Option
      {...sharedProps}
      onClick={() => {
        if (!disabled) {
          onClick();
        }
      }}
      button={
        <button className="tw-navigation-option__chevron caret rotate270" disabled={disabled} />
      }
    />
  );
};

NavigationOption.propTypes = {
  media: Types.node.isRequired,
  title: Types.node.isRequired,
  description: Types.node,
  onClick: Types.func.isRequired,
  complex: Types.bool,
  disabled: Types.bool,
};

NavigationOption.defaultProps = {
  description: null,
  complex: false,
  disabled: false,
};

export default NavigationOption;
