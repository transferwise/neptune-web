import React from 'react';
import { mount } from 'enzyme';
import InputWithTextFormat from './';

import { HistoryNavigator } from './utils';

import { fakeKeyDownEventForKey } from '../common/fakeEvents';

jest.useFakeTimers();

const triggerEvent = fakeKeyDownEventForKey();

const tests = [
  { value: '123', expectedValue: '12-3', pattern: '**-**-**' },
  { value: '1234', expectedValue: '12-34', pattern: '**-**-**' },
  { value: '1234', expectedValue: '+(12) 34', pattern: '+(**) *' },
];

const REDO_EVENT = { ctrlKey: true, charCode: 'z', shiftKey: true, which: 90 };
const UNDO_EVENT = { ctrlKey: true, charCode: 'z', which: 90 };

let component;

describe('InputWithTextFormat', () => {
  const props = {
    placeholder: 'a placeholder',
    pattern: '**-**',
    className: 'form-control',
    onChange: jest.fn(),
  };

  afterEach(() => {
    jest.clearAllTimers();
  });

  tests.forEach(test => {
    const { value, expectedValue, pattern } = test;
    it(`returns ${expectedValue} for ${value} if pattern is ${pattern} `, () => {
      const component = mount(<InputWithTextFormat {...props} value={value} pattern={pattern} />);
      component.setState({ triggerEvent });
      component.simulate('change', { target: { value }, preventDefault: jest.fn() });
      expect(component.find('input').props().value).toEqual(expectedValue);
      expect(props.onChange).toHaveBeenCalledWith(value);
    });
  });

  describe('when Undo/Redo is preformed', () => {
    beforeEach(() => {
      const props = {
        placeholder: 'a placeholder',
        pattern: '***',
        className: 'form-control',
        onChange: jest.fn(),
      };

      const historyNavigator = new HistoryNavigator(['@', '@@', '@@@']);

      component = mount(<InputWithTextFormat {...props} />);
      component.setState({ historyNavigator });
    });

    it(`it goes back/forward in input value's history`, () => {
      component.simulate('keyDown', UNDO_EVENT);
      expect(component.find('input').props().value).toBe('@@');
      component.simulate('keyDown', UNDO_EVENT);
      expect(component.find('input').props().value).toBe('@');
      component.simulate('keyDown', UNDO_EVENT);
      expect(component.find('input').props().value).toBe('@');

      component.simulate('keyDown', REDO_EVENT);
      expect(component.find('input').props().value).toBe('@@');
      component.simulate('keyDown', REDO_EVENT);
      expect(component.find('input').props().value).toBe('@@@');
      component.simulate('keyDown', REDO_EVENT);
      expect(component.find('input').props().value).toBe('@@@');
    });
  });

  describe('when backspace is pressed', () => {
    beforeEach(() => {
      const props = {
        placeholder: 'a placeholder',
        pattern: '**-**',
        className: 'form-control',
        onChange: jest.fn(),
      };

      component = mount(<InputWithTextFormat {...props} />);
      component.setState({
        triggerEvent: { ...triggerEvent, key: 'Backspace' },
      });
    });

    it(`it has default behaviour if deleted char is not a symbol`, () => {
      component.setState({ selectionStart: 2, selectionEnd: 2 });

      component.simulate('change', { target: { value: '12-3' } });
      expect(component.find('input').props().value).toBe('12-3');
    });

    it(`it has default behaviour for multiple deletion`, () => {
      component.setState({ selectionStart: 3, selectionEnd: 1 });

      component.simulate('change', { target: { value: '12-3' } });
      expect(component.find('input').props().value).toBe('12-3');
    });

    it(`performs an extra delete if next char is a separator`, () => {
      component.setState({ selectionStart: 3, selectionEnd: 3 });

      component.simulate('change', { target: { value: '123' } });
      expect(component.find('input').props().value).toBe('13');
    });
  });

  describe('set cursor position', () => {
    beforeEach(() => {
      component = mount(<InputWithTextFormat {...props} />);
      component.setState({
        triggerEvent,
      });
    });

    it(`when entered a char`, () => {
      component.setState({ selectionStart: 4, selectionEnd: 4 });
      component.simulate('change', { target: { value: '13-4@' } });
      jest.runAllTimers();
      expect(component.state().selectionStart).toBe(5);
    });

    it(`when entered a char before a symbol`, () => {
      component.setState({
        triggerEvent,
      });
      component.setState({ selectionStart: 2, selectionEnd: 2 });
      component.simulate('change', { target: { value: '13-@' } });
      jest.runAllTimers();
      expect(component.state().selectionStart).toBe(4);
    });

    it(`when deleted a char before the symbol`, () => {
      component.setState({
        triggerEvent: { ...triggerEvent, key: 'Backspace' },
      });
      component.setState({ selectionStart: 3, selectionEnd: 3 });
      component.simulate('change', { target: { value: '13-45-6' } });
      jest.runAllTimers();
      expect(component.state().selectionStart).toBe(1);
    });

    it(`when delete a symbol`, () => {
      component.setState({
        triggerEvent: { ctrlKey: true, which: 68 },
      });
      component.setState({ selectionStart: 2, selectionEnd: 2 });
      component.simulate('change', { target: { value: '14' } });
      jest.runAllTimers();
      expect(component.state().selectionStart).toBe(2);
    });

    it(`when pasted selection is entered after a symbol`, () => {
      component.setState({
        triggerType: 'Paste',
        pastedLength: 2,
      });

      component.setState({ selectionStart: 2, selectionEnd: 2 });
      component.simulate('change', { target: { value: '13-@@' } });
      jest.runAllTimers();
      expect(component.state().selectionStart).toBe(5);
    });

    it(`when pasted selection is entered before a symbol`, () => {
      component.setState({
        triggerType: 'Paste',
        pastedLength: 2,
      });
      component.setState({ selectionStart: 1, selectionEnd: 1 });
      component.simulate('change', { target: { value: '1@-@' } });
      jest.runAllTimers();
      expect(component.state().selectionStart).toBe(4);
    });

    it(`when cut selection before a symbol `, () => {
      component.setState({
        triggerType: 'Cut',
      });
      component.setState({ selectionStart: 0, selectionEnd: 2 });
      component.simulate('change', { target: { value: '34' } });
      jest.runAllTimers();
      expect(component.state().selectionStart).toBe(0);
    });

    it(`when cut selection before a symbol `, () => {
      component.setState({
        triggerType: 'Cut',
      });
      component.setState({ selectionStart: 1, selectionEnd: 4 });
      component.simulate('change', { target: { value: '14' } });
      jest.runAllTimers();
      expect(component.state().selectionStart).toBe(1);
    });
  });
});
