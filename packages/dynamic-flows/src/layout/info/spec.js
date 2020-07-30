import React from 'react';
import { shallow } from 'enzyme';

import { Markdown } from '@transferwise/components';

import DynamicInfo from '.';

describe('Given a component for dynamically rendering information with markdown', () => {
  let component;
  let spec;

  beforeEach(() => {
    spec = {
      component: 'info',
      markdown: '### Title ###',
    };
    component = shallow(<DynamicInfo component={spec} />);
  });

  it('should render the markdown in a markdown component', () => {
    expect(component.find(Markdown).contains(spec.markdown)).toBe(true);
  });
});
