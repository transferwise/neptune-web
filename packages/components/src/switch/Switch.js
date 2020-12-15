import React from 'react';
import Types from 'prop-types';
import classnames from 'classnames';
import { CheckCircle, CrossCircle } from '@transferwise/icons';
import './Switch.css';
import { logActionRequiredIf } from '../utilities';

import KeyCodes from '../common/keyCodes';

const Switch = (props) => {
  const { checked, className, id, onClick } = props;
  const handleKeyDown = (event) => {
    if (event.code === 32 || event.keyCode === KeyCodes.SPACE) {
      event.preventDefault();
      onClick();
    }
  };

  const ariaLabel = props['aria-label'];
  const ariaLabelledby = ariaLabel ? null : props['aria-labelledby'];

  logActionRequiredIf(
    'Switch now expects either `aria-label` or `aria-labelledby`, and will soon make these props required. Please update your usage to provide one or the other.',
    !ariaLabel && !ariaLabelledby,
  );

  return (
    <span
      className={classnames(
        'np-switch',
        {
          'np-switch--unchecked': !checked,
          'np-switch--checked': checked,
        },
        className,
      )}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="switch"
      aria-checked={checked}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      id={id}
    >
      <span className="np-switch--thumb">
        {checked ? <CheckCircle filled size={24} /> : <CrossCircle filled size={24} />}
      </span>
      <input type="checkbox" checked={checked} readOnly />
    </span>
  );
};

Switch.propTypes = {
  /** Used to describe the purpose of the switch. To be used if there is no external label (i.e. aria-labelledby is null) */
  'aria-label': Types.string,
  /** A reference to a label that describes the purpose of the switch. Ignored if aria-label is provided */
  'aria-labelledby': Types.string,
  /** Whether the switch is checked or not */
  checked: Types.bool,
  /** Classes to apply to the switch container */
  className: Types.string,
  /** ID to apply to the switch container */
  id: Types.string,
  /** Function called when the switch is toggled */
  onClick: Types.func.isRequired,
};

Switch.defaultProps = {
  'aria-label': null,
  'aria-labelledby': null,
  checked: false,
  className: null,
  id: null,
};

export default Switch;
