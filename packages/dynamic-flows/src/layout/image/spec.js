import React from 'react';
import { shallow } from 'enzyme';

import { Image } from '@transferwise/components';

import DynamicImage from '.';

describe('Given a component for dynamically rendering image', () => {
  let component;
  let spec;

  beforeEach(() => {
    spec = {
      component: 'image',
      url: 'image.png',
      text: 'an image',
    };
    component = shallow(<DynamicImage component={spec} />);
  });

  it('should render an image component using the url', () => {
    expect(component.find(Image).prop('src')).toBe(spec.url);
  });
  it('should use the text text for alt text', () => {
    expect(component.find(Image).prop('alt')).toBe(spec.text);
  });
});
