import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  it('renders correctly', () => {
    const props = {
      leftContent: 'leftContent',
      rightContent: 'rightContent',
      bottomContent: 'bottomContent',
      className: 'className',
    };
    const component = shallow(<Header {...props} />);
    expect(component.debug()).toMatchSnapshot();
  });
});
