import React from 'react';
import { shallow } from 'enzyme';

import { Profile as ProfileIcon, Bank as BankIcon } from '@transferwise/icons';

import DynamicIcon from '.';

describe('Given a component for dynamically rendering icons', () => {
  let component;

  it('should render the appropriate icon', () => {
    component = shallow(<DynamicIcon type="bank" />);
    expect(component.find(ProfileIcon)).toBeTruthy();

    component = shallow(<DynamicIcon type="profile" />);
    expect(component.find(BankIcon)).toBeTruthy();
  });
});
