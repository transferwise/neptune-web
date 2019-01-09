import React from 'react';
import { shallow } from 'enzyme';

import PhoneNumberInput from './';

describe('Given a telephone number component', () => {
  console.log = jest.fn();
  let select;
  let input;
  let component;
  const props = { onChange: jest.fn() };
  const PREFIX_SELECT_SELECTOR = 'Select';
  const NUMBER_SELECTOR = 'input[name="phoneNumber"]';
  const DEFAULT_STATE = {
    suffix: '',
    prefix: '+44',
    value: null,
    previousReturned: null,
    searchQuery: '',
  };
  const TEST_VALUE = '+39123456789';

  const TEST_STATE = {
    prefix: '+39',
    previousReturned: TEST_VALUE,
    searchQuery: '',
    suffix: '123456789',
    value: TEST_VALUE,
  };

  describe('when initialised without a model', () => {
    beforeEach(() => {
      component = shallow(<PhoneNumberInput {...props} />);
      select = component.find(PREFIX_SELECT_SELECTOR);
      input = component.find(NUMBER_SELECTOR);
    });

    it('should set state to default state', () => {
      expect(component.state()).toEqual(DEFAULT_STATE);
    });
  });

  describe('when a valid model is supplied', () => {
    beforeEach(() => {
      component = shallow(<PhoneNumberInput {...props} value={TEST_VALUE} />);
      select = component.find(PREFIX_SELECT_SELECTOR);
      input = component.find(NUMBER_SELECTOR);
    });

    it('should set the state', () => {
      expect(component.state()).toEqual(TEST_STATE);
    });
  });

  describe('when a value change to invalid Model', () => {
    beforeEach(() => {
      component = shallow(<PhoneNumberInput {...props} value={TEST_VALUE} />);
      select = component.find(PREFIX_SELECT_SELECTOR);
      input = component.find(NUMBER_SELECTOR);
    });

    it('should set the previousReturned value', () => {
      expect(component.state()).toEqual(TEST_STATE);

      component.setProps({ value: '391' });

      expect(component.state()).toEqual(DEFAULT_STATE);
    });

    it("shouldn't update the state if same value is provided", () => {
      expect(component.state()).toEqual(TEST_STATE);

      component.setProps({ value: TEST_VALUE });

      expect(component.state()).toEqual(TEST_STATE);
    });
  });
});
