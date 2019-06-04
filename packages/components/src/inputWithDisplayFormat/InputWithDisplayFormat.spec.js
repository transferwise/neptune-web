import React from 'react';
import { shallow } from 'enzyme';

import InputWithDisplayFormat from './';

describe('InputWithDisplayFormat', () => {
  const props = { displayPattern: '**-**', onChange: jest.fn() };

  it('should render input with value prop', () => {
    const component = shallow(<InputWithDisplayFormat {...props} />)
      .find('WithDisplayFormat')
      .renderProp('render')({ value: 'test' });

    expect(component.find('input').props('value')).toEqual({ value: 'test' });
  });
});
