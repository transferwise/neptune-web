import React from 'react';
import Tabs from './Tabs';
import Alert from '../alert';

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
            <Alert>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum totam debitis similique
            </Alert>
          ),
        },
        {
          title: 'Title 2',
          disabled: false,
          content: (
            <Alert type="warning">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta officia animi
              incidunt
            </Alert>
          ),
        },
        {
          title: 'Title 3',
          disabled: true,
          content: (
            <Alert type="error">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error placeat doloribus
              nulla non
            </Alert>
          ),
        },
      ]}
      selected={selected}
      onTabSelect={(index) => setSelected(index)}
    />
  );
};
