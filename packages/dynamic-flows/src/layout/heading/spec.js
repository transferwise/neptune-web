import React from 'react';
import { shallow } from 'enzyme';

import DynamicHeading from '.';

describe('Given a component for dynamically rendering headings', () => {
  let component;
  let spec;

  beforeEach(() => {
    spec = {
      component: 'heading',
      text: 'Lorem ipsum',
      size: 'md',
    };
    component = shallow(<DynamicHeading component={spec} />);
  });

  it('should render the text in a heading', () => {
    expect(component.find('h3').contains(spec.text)).toBe(true);
  });
});
