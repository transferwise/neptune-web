import React from 'react';
import { shallow, mount } from 'enzyme';

import PhoneNumberInput from '.';
import { fakeEvent } from '../common/fakeEvents';

const simulatePaste = (el, value) =>
  el.simulate('paste', { nativeEvent: { clipboardData: { getData: () => value } } });

describe('Given a telephone number component', () => {
  let select;
  let input;
  let component;
  const props = { onChange: jest.fn() };
  const PREFIX_SELECT_SELECTOR = 'Select';
  const NUMBER_SELECTOR = 'input[name="phoneNumber"]';

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('when initialised without a model', () => {
    beforeEach(() => {
      component = shallow(<PhoneNumberInput {...props} />);
      select = component.find(PREFIX_SELECT_SELECTOR);
      input = component.find(NUMBER_SELECTOR);
    });

    it('should set prefix control to default UK value', () => {
      expect(select.props().selected).toEqual({ value: '+44', label: '+44' });
    });
    it('should set number control to empty', () => {
      expect(input.prop('value')).toBe('');
    });
    it('should not disable the select', () => {
      expect(select.prop('disabled')).toBe(false);
    });
    it('should not disable the input', () => {
      expect(input.prop('disabled')).toBe(false);
    });
  });

  describe('when a valid model is supplied', () => {
    beforeEach(() => {
      component = shallow(<PhoneNumberInput {...props} initialValue="+39123456789" />);
      select = component.find(PREFIX_SELECT_SELECTOR);
      input = component.find(NUMBER_SELECTOR);
    });

    it('should set control values correctly', () => {
      expect(select.props().selected.value).toEqual('+39');
      expect(input.prop('value')).toBe('123456789');
    });
  });

  describe('when pasting', () => {
    beforeEach(() => {
      component = mount(<PhoneNumberInput {...props} initialValue="+39123456789" />);
      select = () => component.find(PREFIX_SELECT_SELECTOR);
      input = () => component.find(NUMBER_SELECTOR);
    });

    [
      { number: '+36303932551', countryCode: '+36', localNumber: '303932551' },
      { number: '+39123456781', countryCode: '+39', localNumber: '123456781' },
      { number: '+44 7700 900415', countryCode: '+44', localNumber: '7700900415' },
      { number: '+2975557308515', countryCode: '+297', localNumber: '5557308515' },
      { number: '+297-555-7217-360', countryCode: '+297', localNumber: '5557217360' },
      { number: '+213-555-5160-67', countryCode: '+213', localNumber: '555516067' },
      { number: '+246-387-5553', countryCode: '+246', localNumber: '3875553' },
      { number: '+852-940-5558--6', countryCode: '+852', localNumber: '94055586' },
      { number: '+228 253 5558     4', countryCode: '+228', localNumber: '25355584' },
    ].forEach(({ number, countryCode, localNumber }) => {
      it(`${number} code should update the value properly`, () => {
        simulatePaste(component.find('input'), number);
        expect(select().props().selected.value).toEqual(countryCode);
        expect(input().prop('value')).toBe(localNumber);
        expect(props.onChange).toHaveBeenCalledWith(number.replace(/(\s|-)+/g, ''));
      });
    });

    it('should not paste invalid characters', () => {
      simulatePaste(component.find('input'), '+36asdasdasd');
      expect(select().props().selected.value).toEqual('+39');
      expect(input().prop('value')).toBe('123456789');
      expect(props.onChange).not.toBeCalled();
    });

    it('should not paste countries which are not in the select', () => {
      simulatePaste(component.find('input'), '+9992342343423');
      expect(select().props().selected.value).toEqual('+39');
      expect(input().prop('value')).toBe('123456789');
      expect(props.onChange).not.toBeCalled();
    });

    it("should not paste numbers which doesn't start with the country code", () => {
      simulatePaste(component.find('input'), '0+36303932551');
      expect(select().props().selected.value).toEqual('+39');
      expect(input().prop('value')).toBe('123456789');
      expect(props.onChange).not.toBeCalled();
    });

    it("should not paste numbers which doesn't contain a country code", () => {
      simulatePaste(component.find('input'), '06303932551');
      expect(select().props().selected.value).toEqual('+39');
      expect(input().prop('value')).toBe('123456789');
      expect(props.onChange).not.toBeCalled();
    });
  });

  describe('when a model is supplied that could match more than one prefix', () => {
    beforeEach(() => {
      component = shallow(<PhoneNumberInput {...props} initialValue="+1868123456789" />);
      select = component.find(PREFIX_SELECT_SELECTOR);
      input = component.find(NUMBER_SELECTOR);
    });

    it('should set the select to the longest matching prefix', () => {
      expect(select.props().selected.value).toEqual('+1868');
    });
    it('should set the number input to the rest of the number', () => {
      expect(input.prop('value')).toBe('123456789');
    });
  });

  describe('when a model is supplied with no matching prefix', () => {
    beforeEach(() => {
      component = shallow(<PhoneNumberInput {...props} initialValue="+999123456789" />);
      select = component.find(PREFIX_SELECT_SELECTOR);
      input = component.find(NUMBER_SELECTOR);
    });

    it('should empty the select', () => {
      expect(select.props().selected.value).toEqual('');
    });
    it('should put the whole value in the input without the plus', () => {
      expect(input.prop('value')).toBe('999123456789');
    });
  });

  describe('when an invalid model is supplied', () => {
    it('should not re-explode model', () => {
      component = shallow(<PhoneNumberInput {...props} initialValue="+123" />);

      select = component.find(PREFIX_SELECT_SELECTOR);
      input = component.find(NUMBER_SELECTOR);
      expect(select.props().selected.value).toEqual('+44');
      expect(input.prop('value')).toBe('');
    });
  });

  describe('when a valid model is supplied', () => {
    it('should explode model', () => {
      component = shallow(<PhoneNumberInput {...props} initialValue="+393892713713" />);
      select = component.find(PREFIX_SELECT_SELECTOR);
      input = component.find(NUMBER_SELECTOR);
      expect(select.props().selected.value).toEqual('+39');
      expect(input.prop('value')).toBe('3892713713');
    });
  });

  describe('when disabled is true', () => {
    beforeEach(() => {
      component = shallow(<PhoneNumberInput {...props} disabled />);
      select = component.find(PREFIX_SELECT_SELECTOR);
      input = component.find(NUMBER_SELECTOR);
    });

    it('should disable the select', () => {
      expect(select.prop('disabled')).toBe(true);
    });
    it('should disable the input', () => {
      expect(input.prop('disabled')).toBe(true);
    });
  });

  describe('when supplied with a placeholder', () => {
    beforeEach(() => {
      component = shallow(
        <PhoneNumberInput
          {...props}
          initialValue="+12345678"
          locale="es-ES"
          placeholder="placeholder"
        />,
      );
      input = component.find(NUMBER_SELECTOR);
    });

    it('should use the provided placeholder', () => {
      expect(input.prop('placeholder')).toBe('placeholder');
    });
  });

  describe('when supplied with a search placeholder', () => {
    beforeEach(() => {
      component = shallow(
        <PhoneNumberInput
          {...props}
          initialValue="+12345678"
          locale="es-ES"
          searchPlaceholder="searchPlaceholder"
        />,
      );
      select = component.find(PREFIX_SELECT_SELECTOR);
    });

    it('should use the provided searchPlaceholder ', () => {
      expect(select.prop('searchPlaceholder')).toBe('searchPlaceholder');
    });
  });

  describe('when supplied with a locale', () => {
    describe('and a value', () => {
      beforeEach(() => {
        component = shallow(
          <PhoneNumberInput {...props} initialValue="+12345678" locale="es-ES" />,
        );
        select = component.find(PREFIX_SELECT_SELECTOR);
        input = component.find(NUMBER_SELECTOR);
      });

      it('should use the prefix of the supplied value', () => {
        expect(select.props().selected.value).toBe('+1');
      });
    });

    describe('and no value', () => {
      describe('and no country code', () => {
        beforeEach(() => {
          component = shallow(<PhoneNumberInput {...props} locale="es-ES" />);
          select = component.find(PREFIX_SELECT_SELECTOR);
          input = component.find(NUMBER_SELECTOR);
        });

        it('should default the prefix to the local country', () => {
          expect(select.props().selected.value).toBe('+34');
        });
      });

      describe('and country code', () => {
        beforeEach(() => {
          component = shallow(<PhoneNumberInput {...props} locale="es-ES" countryCode="US" />);
          select = component.find(PREFIX_SELECT_SELECTOR);
          input = component.find(NUMBER_SELECTOR);
        });

        it('should override locale prefix with country specific prefix', () => {
          expect(select.props().selected.value).toBe('+1');
        });
      });
    });

    describe('that is incorrect and no value', () => {
      describe('and no country code', () => {
        beforeEach(() => {
          component = shallow(<PhoneNumberInput {...props} locale="xx-XX" />);
          select = component.find(PREFIX_SELECT_SELECTOR);
          input = component.find(NUMBER_SELECTOR);
        });

        it('should default to +44 (UK)', () => {
          expect(select.props().selected.value).toBe('+44');
        });
      });

      describe('and country code', () => {
        beforeEach(() => {
          component = shallow(<PhoneNumberInput {...props} locale="xx-XX" countryCode="US" />);
          select = component.find(PREFIX_SELECT_SELECTOR);
          input = component.find(NUMBER_SELECTOR);
        });

        it('should override locale prefix with country specific prefix', () => {
          expect(select.props().selected.value).toBe('+1');
        });
      });
    });
  });

  describe('when user insert valid value', () => {
    beforeEach(() => {
      component = mount(<PhoneNumberInput {...props} />);
      input = component.find(NUMBER_SELECTOR);
      select = component.find(PREFIX_SELECT_SELECTOR);
    });

    it('should trigger onChange handler', () => {
      input.simulate('change', { target: { value: '123' } });
      expect(props.onChange).toHaveBeenCalledWith('+44123');
    });

    it('should trigger onChange handler and set previousReturned value', () => {
      changeSelectValue('+39');
      input.simulate('change', { target: { value: '123' } });
      expect(props.onChange).toHaveBeenCalledWith('+39123');
    });
  });

  describe('when user insert an invalid number', () => {
    it('should trigger onChange with null value', () => {
      component = mount(<PhoneNumberInput {...props} initialValue="+12345678" />);
      input = component.find(NUMBER_SELECTOR);
      select = component.find(PREFIX_SELECT_SELECTOR);
      input.simulate('change', { target: { value: '1' } });
      select.simulate('change', { value: '+39', label: '+39' });
      expect(props.onChange).toHaveBeenCalledWith(null);
    });

    it("shouldn't re-trigger onChange and set previousReturned state", () => {
      component = shallow(<PhoneNumberInput {...props} />);
      input = component.find(NUMBER_SELECTOR);
      select = component.find(PREFIX_SELECT_SELECTOR);
      select.simulate('change', { value: '+1', label: '+1' });
      input.simulate('change', { target: { value: '12' } });
      expect(props.onChange).not.toHaveBeenCalled();
    });
  });

  describe('when user insert invalid character ', () => {
    it('should strip them', () => {
      component = mount(<PhoneNumberInput {...props} value="+12345678" />);
      input = component.find(NUMBER_SELECTOR);
      select = component.find(PREFIX_SELECT_SELECTOR);
      input.simulate('change', { target: { value: '123--' } });
      changeSelectValue('+39');
      expect(props.onChange).toHaveBeenCalledWith('+39123');
    });
  });

  describe('when user search by number options are sorted by phone values ', () => {
    it('should return sorted by value options', () => {
      component = mount(<PhoneNumberInput {...props} value="+12345678" />);

      component.find('button.dropdown-toggle').simulate('click', fakeEvent());
      component.find('.tw-select-filter').simulate('change', { target: { value: '+124' } });
      select = component.find(PREFIX_SELECT_SELECTOR);
      expect(+select.prop('options')[0].value).toBeLessThan(+select.prop('options')[1].value);
    });
  });

  const changeSelectValue = (value) => {
    component.find('button.dropdown-toggle').simulate('click', fakeEvent());
    component.find('.tw-select-filter').simulate('change', { target: { value } });
    component.find('.tw-dropdown-item--clickable').simulate('click', fakeEvent());
  };
});
