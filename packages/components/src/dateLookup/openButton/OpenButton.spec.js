import React from 'react';
import { shallow } from 'enzyme';
import * as formatting from '@transferwise/formatting';

import OpenButton from '.';

jest.mock('@transferwise/formatting', () => ({
  formatDate: jest.fn().mockReturnValue('1.2.3'),
}));

describe('OpenButton', () => {
  const selectedDate = new Date(1990, 11, 27);
  const locale = 'xx';
  let component;
  let props;

  beforeEach(() => {
    props = {
      size: 'md',
      locale,
      placeholder: 'Enter date..',
      label: '',
      shortDate: false,
      disabled: false,
      onClick: jest.fn(),
    };
    component = shallow(<OpenButton {...props} />);
  });

  it('shows placeholder', () => {
    expect(button().text()).toBe('Enter date..');
  });

  describe('when date is provided', () => {
    beforeEach(() => {
      component.setProps({ selectedDate });
    });

    it('shows selected date in long format', () => {
      expect(button().text()).toBe('1.2.3');
      expect(formatting.formatDate).toHaveBeenLastCalledWith(selectedDate, locale, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      });
    });

    it('shows selected date in short format', () => {
      component.setProps({ shortDate: true });
      expect(formatting.formatDate).toHaveBeenLastCalledWith(selectedDate, locale, {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      });
    });
  });

  it('does not show label by default', () => {
    expect(label()).toHaveLength(0);
  });

  it('shows label when provided', () => {
    component.setProps({ label: 'hello' });
    expect(label().text()).toBe('hello');
  });

  it('calls on click handler on button click', () => {
    button().simulate('click');
    expect(props.onClick).toBeCalled();
  });

  it('can disable the button', () => {
    component.setProps({ disabled: true });
    expect(button().prop('disabled')).toBe(true);
  });

  it('shows small button', () => {
    component.setProps({ size: 'sm' });
    expect(button().hasClass('btn-sm')).toBe(true);
  });

  it('shows medium button', () => {
    component.setProps({ size: 'md' });
    expect(button().hasClass('btn-md')).toBe(true);
  });

  it('shows large button', () => {
    component.setProps({ size: 'lg' });
    expect(button().hasClass('btn-lg')).toBe(true);
  });

  const button = () => component.find('button');
  const label = () => component.find('.control-label');
});
