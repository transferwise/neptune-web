import React from 'react';
import { shallow } from 'enzyme';

import Loader from './';

describe('Loader', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {};
    component = shallow(<Loader {...props} />);
  });

  it('shows a big loader', () => {
    expect(component.find('div.loader').length).toBe(1);
    expect(component.find('span.btn-loader').length).toBe(0);
  });

  it('shows a small loader if that property is set', () => {
    component.setProps({ small: true });
    expect(component.find('div.loader').length).toBe(0);
    expect(component.find('span.btn-loader').length).toBe(1);
  });
});
