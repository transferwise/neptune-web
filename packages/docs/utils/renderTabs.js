import React, { useState } from 'react';
import Types from 'prop-types';
import { Tabs } from '@transferwise/components';

const allowedTags = { '#web': 'Web', '#android': 'Android', '#ios': 'iOS' };

const renderTabs = ({ children }) => {
  const [tab, setTab] = useState(0);
  const childrenValues = Object.values(children);

  const newTabs = childrenValues.reduce((acc, curr, index) => {
    if (allowedTags[curr] && childrenValues[index + 1]) {
      acc.push({
        content: childrenValues[index + 1],
        title: allowedTags[curr],
        disabled: false,
      });
    }
    return acc;
  }, []);

  return (
    <Tabs
      className="tabs-custom-class"
      name="tabs-docs"
      tabs={newTabs}
      selected={tab}
      onTabSelect={index => setTab(index)}
    />
  );
};

renderTabs.propTypes = {
  children: Types.arrayOf(
    Types.shape({
      content: Types.node.isRequired,
    }),
  ).isRequired,
};

export default renderTabs;
