import React from 'react';
import { shallow } from 'enzyme';

import TextareaWithDisplayFormat from './';

describe('TextareaWithDisplayFormat', () => {
  const props = { displayPattern: '**-**', onChange: jest.fn() };

  it('should render input with value prop', () => {
    const component = shallow(<TextareaWithDisplayFormat {...props} />)
      .find('WithDisplayFormat')
      .renderProp('render')({ value: 'test' });

    expect(component.find('textarea').props('value')).toEqual({ value: 'test' });
  });
});
