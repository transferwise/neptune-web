import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Tab = React.forwardRef(
  ({ children, id, disabled, panelId, selected, onKeyDown, onClick, style, focusTab }, ref) => {
    const firstUpdate = useRef(true);

    const checkFocus = () => {
      if (firstUpdate.current) {
        firstUpdate.current = false;
        return;
      }

      if (selected && focusTab) {
        focusTab();
      }
    };

    useEffect(() => {
      checkFocus();
    }, [selected]);

    return (
      <li
        className={classNames('tabs__tab', {
          'tabs__tab--selected': selected,
          'tabs__tab--disabled': disabled,
        })}
        ref={ref}
        role="tab"
        id={id}
        aria-selected={selected ? 'true' : 'false'}
        aria-disabled={disabled ? 'true' : 'false'}
        aria-controls={disabled ? null : panelId}
        tabIndex="0"
        onKeyDown={disabled ? null : onKeyDown}
        onClick={onClick}
        style={style}
      >
        {children}
      </li>
    );
  },
);

Tab.defaultProps = {
  disabled: false,
  selected: false,
  onClick: null,
  style: null,
  focusTab: null,
};

Tab.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
  id: PropTypes.string.isRequired,
  panelId: PropTypes.string.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.shape({ width: PropTypes.string }),
  focusTab: PropTypes.func,
};

export default Tab;
