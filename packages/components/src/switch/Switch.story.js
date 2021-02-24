import React, { useState } from 'react';
import Switch from './Switch';

export default {
  component: Switch,
  title: 'Switch',
};

export const basic = () => {
  const [checked, setCheck] = useState(false);

  return (
    <div className="d-flex flex-column">
      <label id="labelID" htmlFor="switchId">
        A switch with a label
      </label>
      <Switch
        checked={checked}
        className="a-class-name"
        onClick={() => setCheck(!checked)}
        aria-labelledby="labelID"
        id="switchId"
      />

      <Switch
        checked={checked}
        className="a-class-name m-t-4"
        onClick={() => setCheck(!checked)}
        aria-label="I'm a switch without label"
      />
    </div>
  );
};
