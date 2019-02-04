import React from 'react';
import { shallow } from 'enzyme';

import InstructionsList from '.';

describe('InstructionsList', () => {
  it('should render dos list only', () => {
    const dos = ['Test this component', 'With multiple dos'];
    const component = shallow(<InstructionsList dos={dos} />);

    expect(component.find('.do')).toHaveLength(2);
  });

  it('should render donts list only', () => {
    const donts = ['Putting things into production without testing'];

    const component = shallow(<InstructionsList donts={donts} />);
    expect(component.find('.dont')).toHaveLength(1);
  });

  it('should render both lists', () => {
    const dos = ['Do this'];
    const donts = [`Don't do that`];

    const component = shallow(<InstructionsList dos={dos} donts={donts} />);
    expect(component.find('.do')).toHaveLength(1);
    expect(component.find('.dont')).toHaveLength(1);
    expect(component.find('.instruction')).toHaveLength(2);
  });
});
