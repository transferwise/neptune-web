import PropTypes from 'prop-types';
import React from 'react';

const TabPanel = ({ children, id, tabId, style }) => {
  return (
    <div className="tabs__panel" role="tabpanel" id={id} aria-labelledby={tabId} style={style}>
      {children}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  tabId: PropTypes.string.isRequired,
  style: PropTypes.shape({
    width: PropTypes.string.isRequired,
  }).isRequired,
};

export default TabPanel;
