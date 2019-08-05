import React from 'react';
import { shallow } from 'enzyme';

import { fakeEvent } from '../../common/fakeEvents';

import TypeaheadOption from './TypeaheadOption';

describe('Typeahead Option', () => {
  let props;
  let component;

  const labelSpan = () => component.find('span:first-child');
  const noteSpan = () => component.find('.small.m-l-1');
  const secondaryTextSpan = () => component.find('.small.text-ellipsis');
  const dropdownItem = () => component.find('.dropdown-item');

  beforeEach(() => {
    props = {
      option: {
        label: 'test',
      },
    };

    component = shallow(<TypeaheadOption {...props} />);
  });

  it('renders a label', () => {
    const label = 'test';
    component.setProps({ option: { label } });
    expect(labelSpan().text()).toEqual(label);
  });

  it('renders a note', () => {
    const label = 'test';
    const note = 'test note';
    component.setProps({ option: { label, note } });
    expect(noteSpan().text()).toEqual(note);
  });

  it('renders a seconday text', () => {
    const label = 'test';
    const secondary = 'test note';
    component.setProps({ option: { label, secondary } });
    expect(secondaryTextSpan().text()).toEqual(secondary);
  });

  it('highlights when selected', () => {
    component.setProps({
      selected: true,
    });

    expect(component.is('.tw-dropdown-item--focused')).toBe(true);
  });

  it('calls onClick when clicked', () => {
    const onClick = jest.fn();
    component.setProps({
      onClick,
    });

    dropdownItem().simulate('click', fakeEvent);

    expect(onClick).toBeCalled();
  });
});
