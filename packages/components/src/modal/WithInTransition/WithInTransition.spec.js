import React from 'react';
import { shallow } from 'enzyme';
import CSSTransition from 'react-transition-group/CSSTransition';

import WithInTransition from '.';

jest.mock('react-transition-group/CSSTransition');

describe('WithinTransition wrapper', () => {
  let component;
  beforeEach(() => {
    CSSTransition.mockImplementation(({ children }) => children);

    component = shallow(
      <WithInTransition>
        <div>Some element</div>
      </WithInTransition>,
    );
  });

  it('passes `in` flag to child', () => {
    component.setProps({ isIn: false });
    expect(transitionWrapper().prop('in')).toBe(false);

    component.setProps({ isIn: true });
    expect(transitionWrapper().prop('in')).toBe(true);
  });

  it('renders children', () => {
    expect(transitionWrapper().prop('children')).toEqual(<div>Some element</div>);
  });

  function transitionWrapper() {
    return component;
  }
});
