import React, { useState } from 'react';
import Switch from './Switch';

export default {
  component: Switch,
  title: 'Switch',
};

export const basic = () => {
  const [checked, setCheck] = useState(false);
  const labelText = 'Example with aria-labelledby';

  return (
    <>
      <label id="myFieldId" htmlFor="test-switch">
        {labelText}
      </label>
      <Switch
        id="test-switch"
        checked={checked}
        className="a-class-name"
        onClick={() => setCheck(!checked)}
        aria-labelledby="myFieldId"
      />
    </>
  );
};
