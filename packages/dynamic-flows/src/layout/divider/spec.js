import React from 'react';
import { shallow } from 'enzyme';

import DynamicDivider from '.';

describe('Given a component for dynamically rendering dividers', () => {
  let component;
  let spec;

  beforeEach(() => {
    spec = {
      component: 'divider',
      margin: 'md',
    };
    component = shallow(<DynamicDivider component={spec} />);
  });

  it('should render a divider', () => {
    expect(component.find('hr')).toBeTruthy();
  });
});
