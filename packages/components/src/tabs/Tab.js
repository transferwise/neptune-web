import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Tab = ({ children, id, disabled, panelId, selected, onKeyDown, onClick, style }) => {
  const node = useRef(null);

  const checkFocus = () => {
    if (selected && node) {
      node.current.focus();
    }
  };

  useEffect(() => {
    checkFocus();
  });

  return (
    <li
      className={classNames('tabs__tab', {
        'tabs__tab--selected': selected,
        'tabs__tab--disabled': disabled,
      })}
      ref={node}
      role="tab"
      id={id}
      aria-selected={selected ? 'true' : 'false'}
      aria-disabled={disabled ? 'true' : 'false'}
      aria-controls={panelId}
      tabIndex="0"
      onKeyDown={disabled ? null : onKeyDown}
      onClick={onClick}
      style={style}
    >
      {children}
    </li>
  );
};

Tab.defaultProps = {
  disabled: false,
  selected: false,
  onClick: null,
};

Tab.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
  id: PropTypes.string.isRequired,
  panelId: PropTypes.string.isRequired,
  onKeyDown: PropTypes.func.isRequired,
  onClick: PropTypes.func,
  style: PropTypes.objectOf(
    PropTypes.shape({
      width: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Tab;
