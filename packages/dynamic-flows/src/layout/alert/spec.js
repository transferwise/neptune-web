import React from 'react';
import { shallow } from 'enzyme';

import { Alert } from '@transferwise/components';

import DynamicAlert from '.';

describe('Given a component for dynamically rendering alert', () => {
  let component;
  let spec;

  beforeEach(() => {
    spec = {
      component: 'alert',
      markdown: '### Title ###',
    };
    component = shallow(<DynamicAlert component={spec} />);
  });

  it('should render the markdown in an alert component', () => {
    expect(component.find(Alert).contains(spec.markdown)).toBe(true);
  });
});
