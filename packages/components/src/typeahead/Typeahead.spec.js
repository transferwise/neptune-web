import React from 'react';
import { mount } from 'enzyme';
import doTimes from 'lodash.times';

import { fakeEvent, fakeKeyDownEventForKey } from '../common/fakeEvents';
import Typeahead, { ALERT_TYPES } from './Typeahead';
import KeyCodes from '../common/keyCodes';
import { Alert } from '..';

describe('Typeahead', () => {
  let component;
  let props;
  const closeButton = () => component.find('.input-group-addon button');
  const formGroup = () => component.find('.form-group');
  const input = () => component.find('input');
  const chip = () => component.find('.chip');
  const option = () => component.find('.dropdown-item');
  const menu = () => component.find('.dropdown');

  beforeEach(() => {
    props = {
      id: 'test',
      onChange: () => {},
      options: [
        {
          label: 'Test',
        },
        {
          label: 'Test1',
        },
        {
          label: 'Test2',
        },
        {
          label: 'Test3',
        },
      ],
    };

    component = mount(<Typeahead {...props} />);
  });

  it('renders addon', () => {
    expect(component.find('#test-addon')).toHaveLength(0);
    component.setProps({ addon: <div id="test-addon" /> });
    expect(component.find('#test-addon')).toHaveLength(1);
  });

  it('renders clear button', () => {
    component.setProps({
      clearable: true,
    });
    input().simulate('change', { target: { value: 'test' } });

    expect(closeButton()).toHaveLength(1);
  });

  it('splits pasted value correctly', () => {
    const chips = ['test', 'test2', 'test3'];
    const event = {
      preventDefault: jest.fn(),
      clipboardData: {
        getData: () => chips.join(', '),
      },
    };

    component.setProps({
      allowNew: true,
      multiple: true,
      chipSeparators: [',', ' '],
    });

    input().simulate('paste', event);
    const renderedChips = chip().map(chipNode => chipNode.text());

    expect(renderedChips.every((label, idx) => chips[idx] === label)).toBe(true);
    expect(renderedChips).toHaveLength(chips.length);
    expect(event.preventDefault).toBeCalled();
  });

  it('removes last selected value when backspace clicked on empty input', () => {
    const event = {
      key: 'Backspace',
      keyCode: KeyCodes.BACKSPACE,
    };

    component.setProps({
      multiple: true,
    });

    expect(chip()).toHaveLength(0);

    input().simulate('change', { target: { value: 'test' } });
    option()
      .at(0)
      .simulate('click', fakeEvent());

    expect(chip()).toHaveLength(1);

    input().simulate('keyDown', event);

    expect(chip()).toHaveLength(0);
  });

  it('does not remove last selected value when backspace clicked on non-empty input', () => {
    const event = {
      key: 'Backspace',
      keyCode: KeyCodes.BACKSPACE,
    };

    component.setProps({
      multiple: true,
    });

    expect(chip()).toHaveLength(0);

    input().simulate('change', { target: { value: 'test' } });
    option()
      .at(0)
      .simulate('click', fakeEvent());

    expect(chip()).toHaveLength(1);

    input().simulate('change', { target: { value: 'test' } });
    input().simulate('keyDown', event);

    expect(chip()).toHaveLength(1);
  });

  it('adds new value as selected and clears the input when separator is entered', () => {
    const event = {
      key: ',',
      preventDefault: jest.fn(),
    };
    const text = 'test';

    component.setProps({
      multiple: true,
      allowNew: true,
      showSuggestions: false,
      chipSeparators: [','],
    });

    input().simulate('change', { target: { value: text } });
    input().simulate('keyDown', event);

    expect(chip().text()).toEqual(text);
    expect(event.preventDefault).toBeCalled();
  });

  it('clears typeahead when clear button is clicked', () => {
    const event = {
      key: ',',
      preventDefault: jest.fn(),
    };

    const query = 'test';

    component.setProps({
      multiple: true,
      allowNew: true,
      showSuggestions: false,
      chipSeparators: [','],
      clearable: true,
    });

    input().simulate('change', { target: { value: query } });
    input().simulate('keyDown', event);
    input().simulate('change', { target: { value: query } });

    expect(chip()).toHaveLength(1);
    expect(input().getDOMNode().value).toBe(query);

    closeButton().simulate('click', fakeEvent());
    expect(chip()).toHaveLength(0);
    expect(input().getDOMNode().value).toBe('');
  });

  it('moves selected items when down and up keys pressed', () => {
    doTimes(3, () => input().simulate('keyDown', fakeKeyDownEventForKey(KeyCodes.DOWN)));

    expect(
      option()
        .at(2)
        .parent()
        .is('.tw-dropdown-item--focused'),
    ).toBe(true);

    input().simulate('keyDown', fakeKeyDownEventForKey(KeyCodes.UP));
    expect(
      option()
        .at(1)
        .parent()
        .is('.tw-dropdown-item--focused'),
    ).toBe(true);

    doTimes(5, () => input().simulate('keyDown', fakeKeyDownEventForKey(KeyCodes.DOWN)));
    expect(
      option()
        .last()
        .parent()
        .is('.tw-dropdown-item--focused'),
    ).toBe(true);
  });

  it('adds new value as selected and clears the input when no option is highlighted and enter is pressed', () => {
    const event = {
      key: 'Enter',
      keyCode: KeyCodes.ENTER,
      preventDefault: jest.fn(),
    };
    const text = 'test';

    component.setProps({
      multiple: true,
      allowNew: true,
      chipSeparators: [','],
    });

    input().simulate('change', { target: { value: text } });
    input().simulate('keyDown', event);

    expect(chip().text()).toEqual(text);
    expect(event.preventDefault).toBeCalled();
  });

  it('displays alert when alert is provided and chips are valid or alert type is error', () => {
    const event = {
      key: 'Enter',
      keyCode: KeyCodes.ENTER,
      preventDefault: jest.fn(),
    };
    const text = 'test';

    expect(component.find(Alert)).toHaveLength(0);
    expect(formGroup().hasClass('has-error')).toBe(false);
    component.setProps({
      validateChip: () => {
        return false;
      },
      allowNew: true,
      alert: {
        message: 'test',
        type: ALERT_TYPES.ERROR,
      },
    });

    expect(formGroup().hasClass('has-error')).toBe(true);
    expect(component.find(Alert)).toHaveLength(1);

    input().simulate('change', { target: { value: text } });
    input().simulate('keyDown', event);

    expect(formGroup().hasClass('has-error')).toBe(true);
    expect(component.find(Alert)).toHaveLength(1);
    component.setProps({
      alert: {
        message: 'test',
        type: ALERT_TYPES.WARNING,
      },
    });

    expect(formGroup().hasClass('has-error')).toBe(true);
    expect(component.find(Alert)).toHaveLength(0);

    closeButton().simulate('click', fakeEvent());

    expect(formGroup().hasClass('has-error')).toBe(false);
    expect(formGroup().hasClass('has-warning')).toBe(true);
    expect(component.find(Alert)).toHaveLength(1);
  });

  describe('menu', () => {
    it('should render footer', () => {
      component.setProps({
        footer: <div id="footer">footer</div>,
      });

      expect(component.find('#footer')).toHaveLength(1);
    });

    it('renders all options', () => {
      const options = option().map(optNode => optNode.text());
      expect(options).toHaveLength(props.options.length);
      expect(options.every((label, i) => label === props.options[i].label));
    });

    it('does not show options if query is too short', () => {
      expect(menu().is('.open')).toBe(false);
      input().simulate('change', { target: { value: 'test' } });
      expect(menu().is('.open')).toBe(true);
    });
  });
});
