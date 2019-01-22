import React from 'react';
import { shallow } from 'enzyme';

import PhoneNumberInput from './';

describe('Given a telephone number component', () => {
  let component;
  const props = { onChange: jest.fn(), locale: 'en-GB' };
  const DEFAULT_STATE = {
    broadcastValue: null,
    internalValue: null,
    searchQuery: '',
    locale: 'en-GB',
  };
  const TEST_VALUE = '+39123456789';
  const TEST_STATE = {
    broadcastValue: TEST_VALUE,
    internalValue: TEST_VALUE,
    searchQuery: '',
    locale: 'en-GB',
  };

  describe('when initialised without a model', () => {
    it('should set state to default state', () => {
      component = shallow(<PhoneNumberInput {...props} />);
      expect(component.state()).toEqual(DEFAULT_STATE);
    });
  });

  describe('when initialised with a model', () => {
    it('should set state to correct state', () => {
      component = shallow(<PhoneNumberInput {...props} value={TEST_VALUE} />);
      expect(component.state()).toEqual(TEST_STATE);
    });
  });

  describe('when value change to valid value', () => {
    it('should update the state', () => {
      expect(
        PhoneNumberInput.getDerivedStateFromProps({ ...props, value: TEST_VALUE }, DEFAULT_STATE),
      ).toEqual(TEST_STATE);
    });
  });

  describe('when value change to valid value with invalid chars', () => {
    it('should update the state with stripped value', () => {
      expect(
        PhoneNumberInput.getDerivedStateFromProps(
          { ...props, value: `${TEST_VALUE}---` },
          DEFAULT_STATE,
        ),
      ).toEqual(TEST_STATE);
    });
  });

  describe('when value change to invalid value', () => {
    it('should reset the state', () => {
      expect(
        PhoneNumberInput.getDerivedStateFromProps(
          { ...props, value: '391' },
          { ...DEFAULT_STATE, broadcastValue: TEST_VALUE },
        ),
      ).toEqual(DEFAULT_STATE);
    });
  });

  describe('when value change to same state value', () => {
    it("shouldn't update the state if same value is provided", () => {
      expect(
        PhoneNumberInput.getDerivedStateFromProps(
          { ...props, value: '+44123' },
          { ...DEFAULT_STATE, internalValue: '+44123' },
        ),
      ).toBeNull();
    });
  });

  describe('when locale changes ', () => {
    it('should update only locale if suffix is defined', () => {
      expect(
        PhoneNumberInput.getDerivedStateFromProps(
          { ...props, locale: 'en-US' },
          { ...DEFAULT_STATE, internalValue: '+44123' },
        ),
      ).toEqual({
        ...DEFAULT_STATE,
        internalValue: '+44123',
        locale: 'en-US',
      });
    });

    it('should update locale and prefix if suffix is not defined ', () => {
      expect(
        PhoneNumberInput.getDerivedStateFromProps(
          { ...props, locale: 'en-US' },
          { ...DEFAULT_STATE },
        ),
      ).toEqual({
        ...DEFAULT_STATE,
        locale: 'en-US',
        internalValue: '+1',
      });
    });
  });
});
