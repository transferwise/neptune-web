import React from 'react';

import NavigationOptionsList from '.';
import NavigationOption from '../navigationOption';

export default {
  component: NavigationOptionsList,
  title: 'NavigationOptionsList',
};

export const basic = () => {
  return (
    <NavigationOptionsList>
      <NavigationOption id="navigation-option" name="navigation-option" title="Option One" />
      <NavigationOption id="navigation-option" name="navigation-option" title="Option Two" />
    </NavigationOptionsList>
  );
};
