import React, { useState } from 'react';
import Switch from './Switch';

export default {
  component: Switch,
  title: 'Switch',
};

export const basic = () => {
  const [checked, setCheck] = useState(false);

  return (
    <>
      <label htmlFor="myFieldId">A Possible label</label>
      <Switch checked={checked} onClick={() => setCheck(!checked)} id="myFieldId" />
    </>
  );
};
