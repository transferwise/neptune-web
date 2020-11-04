import React from 'react';
import { shallow } from 'enzyme';

import { DynamicFieldDefinitionList } from '..';

describe('DynamicFieldDefinitionList', () => {
  it('has title when title is passed', () => {
    const component = shallow(
      <DynamicFieldDefinitionList model={{}} fields={{}} title="A title" />,
    );

    expect(title(component).exists()).toBe(true);
    expect(title(component).text()).toBe('A title');
  });

  it('has no title when no title is passed', () => {
    const component = shallow(<DynamicFieldDefinitionList model={{}} fields={{}} />);

    expect(title(component).exists()).toBe(false);
  });

  const title = (component) => component.find('.h4');
});
