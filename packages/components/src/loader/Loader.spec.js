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

  it('shows an extra large loader', () => {
    expect(component.find('div.loader--xl').length).toBe(1);
  });

  it('shows a small loader if that property is set', () => {
    component.setProps({ small: true });
    expect(component.find('div.loader--xs').length).toBe(1);
  });
});
