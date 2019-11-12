import React from 'react';

import OptionDocs from '../common/Option/OptionDocs';
import { NavigationOption } from '..';

const NavigationOptionDocs = () => (
  <OptionDocs
    type="navigation"
    Option={NavigationOption}
    name="NavigationOption"
    callbackName="onClick"
    callback={() => {
      alert('Navigated!'); // eslint-disable-line no-alert
    }}
    callbackString="this.handleClick"
    title="Navigation option"
    content="I've a feeling we're not in Kansas anymore"
    extra="You can also pass a href prop if you want it to behave as an anchor"
  />
);

export default NavigationOptionDocs;
