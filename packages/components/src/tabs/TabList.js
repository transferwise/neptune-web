import React from 'react';
import PropTypes from 'prop-types';

const TabList = ({ children }) => {
  return (
    <ul className="tabs__tab-list" role="tablist">
      {children}
    </ul>
  );
};

TabList.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default TabList;
