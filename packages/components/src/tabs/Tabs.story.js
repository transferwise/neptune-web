import React from 'react';
import Tabs from './Tabs';

export default {
  component: Tabs,
  title: 'Tabs',
};

export const basic = () => {
  const [selected, setSelected] = React.useState(0);
  return (
    <Tabs
      className="tabs-custom-class"
      name="tabs-docs"
      transitionSpacing={Tabs.SpacerSizes.MEDIUM}
      tabs={[
        {
          title: 'Title 1',
          disabled: false,
          content: (
            <div className="p-a-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum totam debitis similique
            </div>
          ),
        },
        {
          title: 'Title 2',
          disabled: false,
          content: (
            <div className="p-a-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>
          ),
        },
        {
          title: 'Title 3',
          disabled: true,
          content: (
            <div className="p-a-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum totam debitis similique
            </div>
          ),
        },
      ]}
      selected={selected}
      onTabSelect={(index) => setSelected(index)}
    />
  );
};

export const blockTabHeaderWidth = () => {
  const [selected, setSelected] = React.useState(0);
  return (
    <Tabs
      className="tabs-custom-class"
      name="tabs-docs"
      transitionSpacing={Tabs.SpacerSizes.MEDIUM}
      headerWidth={Tabs.HeaderWidth.AUTO}
      tabs={[
        {
          title: 'Title 1',
          disabled: false,
          content: (
            <div className="p-a-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum totam debitis similique
            </div>
          ),
        },
        {
          title: 'Title 2',
          disabled: false,
          content: (
            <div className="p-a-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum totam debitis similique
            </div>
          ),
        },
        {
          title: 'Title 3',
          disabled: true,
          content: (
            <div className="p-a-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum totam debitis similique
            </div>
          ),
        },
      ]}
      selected={selected}
      onTabSelect={(index) => setSelected(index)}
    />
  );
};

export const noPanelAnimation = () => {
  const [selected, setSelected] = React.useState(0);
  return (
    <Tabs
      animatePanels={false}
      className="tabs-custom-class"
      name="tabs-docs"
      transitionSpacing={Tabs.SpacerSizes.MEDIUM}
      tabs={[
        {
          title: 'Title 1',
          disabled: false,
          content: (
            <div className="p-a-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum totam debitis similique
            </div>
          ),
        },
        {
          title: 'Title 2',
          disabled: false,
          content: (
            <div className="p-a-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>
          ),
        },
        {
          title: 'Title 3',
          disabled: true,
          content: (
            <div className="p-a-2">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum totam debitis similique
            </div>
          ),
        },
      ]}
      selected={selected}
      onTabSelect={(index) => setSelected(index)}
    />
  );
};
