import React from 'react';
import { shallow } from 'enzyme';
import TypeaheadInput from './TypeaheadInput';

describe('Typeahead input', () => {
  let component;
  let props;

  const inputWrapper = () => component.find('.typeahead__input-wrapper');
  const input = () => component.find('input');

  beforeEach(() => {
    props = {
      name: 'test',
      typeaheadId: 'test',
      multiple: false,
      value: '',
      renderChip: jest.fn(),
      onKeyDown: jest.fn(),
      onFocus: jest.fn(),
      onPaste: jest.fn(),
      onChange: jest.fn(),
    };

    component = shallow(<TypeaheadInput {...props} />);
  });

  it('renders single input when multiple is false', () => {
    expect(component.children()).toHaveLength(0);
    expect(component.is('input')).toBe(true);
  });

  it('renders chips when provided ', () => {
    const selected = [{ label: 'test1' }, { label: 'test2' }];
    component.setProps({
      multiple: true,
      selected,
      renderChip: jest.fn(({ label }, idx) => <span key={idx}>{label}</span>),
    });

    expect(inputWrapper().find('span')).toHaveLength(selected.length);
  });

  it('passes all callbacks to input', () => {
    const event = {};
    const extraProps = {
      multiple: true,
      value: '',
      onKeyDown: jest.fn(),
      onBlur: jest.fn(),
      onFocus: jest.fn(),
      onPaste: jest.fn(),
    };
    component.setProps(extraProps);

    input().simulate('focus', event);
    input().simulate('paste', event);
    input().simulate('keyDown', event);
    const inputProps = input().props();
    expect(inputProps.onKeyDown).toBeCalledWith(event);
    expect(inputProps.onFocus).toBeCalledWith(event);
    expect(inputProps.onPaste).toBeCalledWith(event);
  });
});
