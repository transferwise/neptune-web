import React from 'react';
import Types from 'prop-types';

import Option from '../common/Option';
import RadioButton from '../common/RadioButton';
import Tile from '../tile';

const RadioOption = ({
  media,
  title,
  content,
  id,
  name,
  checked,
  onChange,
  complex,
  disabled,
  value,
  presentation,
}) => {
  const sharedProps = { media, title, content, name, complex, disabled };

  if (presentation === RadioOption.presentation.TILE) {
    return (
      <label>
        <Tile as="div" title={title} description={content} disabled={disabled} media={media} />
        <input
          className="sr-only"
          id={id}
          name={name}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          value={value}
          type="radio"
        />
      </label>
    );
  }

  return (
    <Option
      {...sharedProps}
      button={
        <RadioButton
          id={id}
          name={name}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          value={value}
        />
      }
    />
  );
};

RadioOption.presentation = { OPTION: 'OPTION', TILE: 'TILE' };

RadioOption.propTypes = {
  presentation: Types.oneOf(Object.values(RadioOption.presentation)),
  media: Types.node,
  id: Types.string.isRequired,
  name: Types.string.isRequired,
  title: Types.node.isRequired,
  content: Types.node,
  checked: Types.bool,
  onChange: Types.func.isRequired,
  complex: Types.bool,
  disabled: Types.bool,
  value: Types.string,
};

RadioOption.defaultProps = {
  presentation: RadioOption.presentation.OPTION,
  media: null,
  content: null,
  checked: false,
  complex: false,
  disabled: false,
  value: '',
};

export default RadioOption;
