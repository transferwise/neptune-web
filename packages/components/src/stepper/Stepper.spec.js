import React from 'react';
import { shallow } from 'enzyme';

import Stepper from './';

describe('Stepper', () => {
  let props;
  let component; // eslint-disable-line

  beforeEach(() => {
    component = shallow(<Stepper {...props} />);
  });
});
