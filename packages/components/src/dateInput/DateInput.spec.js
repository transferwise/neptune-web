import React from 'react';
import { shallow, mount } from 'enzyme';

import DateInput from '.';

import { LOCALES, MONTHS_EN, MONTHS_FR } from './data/testFixtures';
import { fakeEvent } from '../common/fakeEvents';

const FEBRUARY_OPTION = { value: 1, label: MONTHS_EN[1] };

const DAY_SELECTOR = 'input[name="day"]';
const MONTH_SELECTOR = 'Select';
const YEAR_SELECTOR = 'input[name="year"]';

jest.mock('@transferwise/formatting', () => {
  const { MONTHS_FR, LOCALES, MONTHS_EN } = require('./data/testFixtures'); // eslint-disable-line
  return {
    formatDate: (month, locale) =>
      locale === LOCALES.fr ? MONTHS_FR[month.getMonth()] : MONTHS_EN[month.getMonth()],
  };
});

describe('Date Input Component', () => {
  let selectMonth;
  let inputDay;
  let inputYear;
  let component;
  const props = { onChange: jest.fn() };

  beforeEach(() => {
    component = shallow(<DateInput {...props} />);

    selectMonth = component.find(MONTH_SELECTOR);
    inputDay = component.find(DAY_SELECTOR);
    inputYear = component.find(YEAR_SELECTOR);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('when initialised without a model', () => {
    it('sets day field to empty', () => {
      expect(inputDay.prop('value')).toBe('');
    });

    it('sets month field to 0', () => {
      expect(selectMonth.props().selected).toBeNull();
    });

    it('sets year field to empty', () => {
      expect(inputYear.prop('value')).toBe('');
    });

    it('allows 0 prefixed day values', () => {
      inputDay.simulate('change', { target: { value: '0' } });
      setTimeout(() => {
        expect(inputDay.prop('value')).toBe('0');
      });
    });

    it('does not allow 00 as a day value', () => {
      inputDay.simulate('change', { target: { value: '00' } });
      setTimeout(() => {
        expect(inputDay.prop('value')).toBe('1');
      });
    });
  });

  describe('when initialised with a model', () => {
    describe('as a valid Date instance', () => {
      it(`sets values correctly`, () => {
        component = shallow(<DateInput {...props} value="1971-02-01" />);

        selectMonth = component.find(MONTH_SELECTOR);
        inputDay = component.find(DAY_SELECTOR);
        inputYear = component.find(YEAR_SELECTOR);

        expect(inputDay.prop('value')).toBe(1);
        expect(selectMonth.prop('selected')).toEqual(FEBRUARY_OPTION);
        expect(inputYear.prop('value')).toBe(1971);
      });
    });

    describe('as a valid short ISO8601 string', () => {
      it('sets values correctly', () => {
        component = shallow(<DateInput {...props} value="1990-08-22" />);

        selectMonth = component.find(MONTH_SELECTOR);
        inputDay = component.find(DAY_SELECTOR);
        inputYear = component.find(YEAR_SELECTOR);

        expect(inputDay.prop('value')).toBe(22);
        expect(selectMonth.prop('selected')).toEqual({ label: MONTHS_EN[7], value: 7 });
        expect(inputYear.prop('value')).toBe(1990);
      });
    });

    describe('as a valid short ISO8601 string with year and month only', () => {
      it('sets values correctly', () => {
        component = shallow(<DateInput {...props} value="1990-08" />);

        selectMonth = component.find(MONTH_SELECTOR);
        inputDay = component.find(DAY_SELECTOR);
        inputYear = component.find(YEAR_SELECTOR);

        expect(inputDay.prop('value')).toBe('');
        expect(selectMonth.prop('selected')).toEqual({ label: MONTHS_EN[7], value: 7 });
        expect(inputYear.prop('value')).toBe(1990);
      });
    });

    describe('as a valid long ISO8601 string', () => {
      it('sets values correctly', () => {
        component = shallow(<DateInput {...props} value="1990-02-28T00:00:00.000Z" />);

        selectMonth = component.find(MONTH_SELECTOR);
        inputDay = component.find(DAY_SELECTOR);
        inputYear = component.find(YEAR_SELECTOR);

        expect(inputDay.prop('value')).toBe(28);
        expect(selectMonth.prop('selected')).toEqual(FEBRUARY_OPTION);
        expect(inputYear.prop('value')).toBe(1990);
      });
    });

    describe('when disabled is set to true', () => {
      it('sets values to disabled', () => {
        component = shallow(<DateInput {...props} disabled />);

        selectMonth = component.find(MONTH_SELECTOR);
        inputDay = component.find(DAY_SELECTOR);
        inputYear = component.find(YEAR_SELECTOR);

        expect(inputDay.prop('disabled')).toBe(true);
        expect(selectMonth.prop('disabled')).toBe(true);
        expect(inputYear.prop('disabled')).toBe(true);
      });
    });

    describe('when disabled is set to false', () => {
      it("doesn't sets values to disabled", () => {
        component = shallow(<DateInput {...props} />);

        selectMonth = component.find(MONTH_SELECTOR);
        inputDay = component.find(DAY_SELECTOR);
        inputYear = component.find(YEAR_SELECTOR);

        expect(inputDay.prop('disabled')).toBe(false);
        expect(selectMonth.prop('disabled')).toBe(false);
        expect(inputYear.prop('disabled')).toBe(false);
      });
    });
  });

  describe('when locale is provided', () => {
    it('updates selectMonth based on locale', () => {
      component = shallow(<DateInput {...props} locale={LOCALES.fr} />);
      selectMonth = component.find(MONTH_SELECTOR);

      expect(selectMonth.props().options[0].label).toEqual(MONTHS_FR[0]);
    });

    it('shows day before month if locale not US', () => {
      expect(component.find('.form-control').at(0).type()).toBe('input');
    });

    it('shows day before month if locale is JP', () => {
      component = shallow(<DateInput {...props} locale={LOCALES.jp} />);

      expect(component.find('.form-control').at(0).type()).toBeInstanceOf(Function);
    });
  });

  describe('when user interacts', () => {
    describe('with day input', () => {
      it('returns correct value for correct input', () => {
        component = mount(<DateInput {...props} value="2001-02-11" />);

        inputDay = component.find(DAY_SELECTOR);

        inputDay.simulate('change', { target: { value: '12' } });

        expect(props.onChange).toHaveBeenCalledWith('2001-02-12');
      });

      it('returns null for invalid input', () => {
        component = mount(<DateInput {...props} value="2001-01-01" />);

        inputDay = component.find(DAY_SELECTOR);

        inputDay.simulate('change', { target: { value: 'aa' } });

        expect(props.onChange).toHaveBeenCalledWith(null);
      });
    });

    describe('with year input', () => {
      it('returns correct value for correct input', () => {
        component = mount(<DateInput {...props} value="2001-01-01" />);
        inputYear = component.find(YEAR_SELECTOR);

        inputYear.simulate('change', { target: { value: '1990' } });

        expect(props.onChange).toHaveBeenCalledWith('1990-01-01');
      });
    });

    describe('with month select', () => {
      it('returns correct value for correct input', () => {
        component = mount(<DateInput {...props} value="2001-01-01" />);

        // Selects March
        simulateSelectChange(3);

        expect(props.onChange).toHaveBeenCalledWith('2001-03-01');
      });
    });
  });

  describe('when user selects invalid dates', () => {
    it('corrects days in lap years February', () => {
      component = mount(<DateInput {...props} value="2000-02-29" />);

      expect(component.find(DAY_SELECTOR).prop('value')).toBe(29);

      inputYear = component.find(YEAR_SELECTOR);
      inputYear.simulate('change', { target: { value: 1999 } });

      expect(component.find(DAY_SELECTOR).prop('value')).toBe(28);
    });

    it('corrects days too high in February', () => {
      component = mount(<DateInput {...props} />);

      inputDay = component.find(DAY_SELECTOR);
      inputYear = component.find(YEAR_SELECTOR);

      inputDay.simulate('change', { target: { value: 29 } });
      // Selects February
      simulateSelectChange(2);
      inputYear.simulate('change', { target: { value: 2001 } });

      expect(component.find(DAY_SELECTOR).prop('value')).toBe(28);
    });

    it("doesn't correct days in lap years February", () => {
      component = mount(<DateInput {...props} value="2000-03-29" />);

      // Selects February
      simulateSelectChange(2);

      expect(component.find(DAY_SELECTOR).prop('value')).toBe(29);
    });

    it('corrects days too high for selected months', () => {
      component = mount(<DateInput {...props} value="2001-01-31" />);

      // Selects April
      simulateSelectChange(4);

      expect(component.find(DAY_SELECTOR).prop('value')).toBe(30);
    });

    it('lowers days if value entered too high', () => {
      const comp = shallow(<DateInput {...props} />);

      inputDay = comp.find(DAY_SELECTOR);

      inputDay.simulate('change', { target: { value: 32 } });

      expect(comp.find(DAY_SELECTOR).prop('value')).toBe(31);
    });

    it('highers days if value entered too low', () => {
      const comp = shallow(<DateInput {...props} />);

      inputDay = comp.find(DAY_SELECTOR);

      inputDay.simulate('change', { target: { value: -1 } });

      expect(comp.find(DAY_SELECTOR).prop('value')).toBe(1);
    });
  });

  describe('when in mode month and year only', () => {
    beforeEach(() => {
      const extraProps = {
        mode: 'month-year',
        value: '2001-01-01',
      };
      component = mount(<DateInput {...{ ...props, ...extraProps }} />);
    });

    it('should only display month and year inputs', () => {
      expect(component.exists(YEAR_SELECTOR)).toBe(true);
      expect(component.exists(MONTH_SELECTOR)).toBe(true);
      expect(component.exists(DAY_SELECTOR)).toBe(false);
    });

    it('should produce MM-YYYY date string', () => {
      // Selects March
      simulateSelectChange(3);
      expect(props.onChange).toHaveBeenCalledWith('2001-03');
    });
  });

  const simulateSelectChange = (n) => {
    component.find('button.dropdown-toggle').simulate('click', fakeEvent());
    component.find('li').at(n).simulate('click', fakeEvent());
  };
});
