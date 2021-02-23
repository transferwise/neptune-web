import React, { useRef } from 'react';
import { Profile } from '@transferwise/icons';
import { select, text, boolean } from '@storybook/addon-knobs';
import Panel from './';

export const basic = () => {
  const ref = useRef(null);
  return (
    <div className="text-center">
      <br />
      <Profile />
      <br />
      <Panel open arrow triggerRef={ref}>
        Test
      </Panel>
    </div>
  );
};

export default {
  component: Panel,
  title: 'Panel',
};
