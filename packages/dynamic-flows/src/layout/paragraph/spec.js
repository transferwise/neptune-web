import React from 'react';
import { shallow } from 'enzyme';

import DynamicParagraph from '.';

describe('Given a component for dynamically rendering paragraphs', () => {
  let component;
  let spec;

  beforeEach(() => {
    spec = {
      component: 'paragraph',
      text: 'Lorem ipsum',
    };
    component = shallow(<DynamicParagraph component={spec} />);
  });

  it('should render the text in a paragraph', () => {
    expect(component.find('p').contains(spec.text)).toBe(true);
  });
});
