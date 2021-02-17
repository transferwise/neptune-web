import React from 'react';
import { shallow, mount } from 'enzyme';
import Sticky from './Sticky';

describe('Sticky', () => {
  let component;
  const props = {
    open: true,
    children: null,
    stickyPositionFixed: true,
    position: 'bottom',
  };

  it('renders with right props', () => {
    component = mount(<Sticky {...props} />);
    expect(component.find(Sticky)).toHaveLength(1);
    expect(component.find(Sticky).props()).toEqual({ ...props });
  });

  it('renders SlidingPanel with right props', () => {
    component = shallow(<Sticky {...props} />);

    const slidingPanel = component.find('ForwardRef');
    expect(slidingPanel).toHaveLength(1);

    expect(slidingPanel.props()).toEqual({
      children: null,
      open: true,
      position: 'bottom',
      showSlidingPanelBorder: true,
      slidingPanelPositionFixed: true,
    });
  });
});
