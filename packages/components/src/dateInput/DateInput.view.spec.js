import React from 'react';
import { shallow } from 'enzyme';

import DateInput from './';

import { isIntlSupportedForLocale } from './utils';

import { LOCALES, MONTHS_EN } from './data/testFixtures';

const JANUARY_OPTION = { value: 0, label: MONTHS_EN[0] };
const FEBRUARY_OPTION = { value: 1, label: MONTHS_EN[1] };
const APRIL_OPTION = { value: 3, label: MONTHS_EN[3] };

const DAY_SELECTOR = 'input[name="day"]';
const MONTH_SELECTOR = 'Select';
const YEAR_SELECTOR = 'input[name="year"]';

jest.mock('@transferwise/formatting', () => {
  const { MONTHS_FR, LOCALES, MONTHS_EN } = require('./data/testFixtures');
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
      expect(selectMonth.props().selected).toEqual({
        value: 0,
        label: MONTHS_EN[0],
      });
    });

    it('sets year field to empty', () => {
      expect(inputYear.prop('value')).toBe('');
    });

    it('should set months to default english months', () => {
      const defaultEnMonths = component.instance().getMonthsOptions();

      expect(selectMonth.props().options).toEqual(defaultEnMonths);
    });
  });

  describe('when initialised with a model', () => {
    describe('as a valid Date instance', () => {
      it(`sets values correctly`, () => {
        component = shallow(<DateInput {...props} value="1971-01-01" />);

        selectMonth = component.find(MONTH_SELECTOR);
        inputDay = component.find(DAY_SELECTOR);
        inputYear = component.find(YEAR_SELECTOR);

        expect(inputDay.prop('value')).toBe(1);
        expect(selectMonth.prop('selected')).toEqual(JANUARY_OPTION);
        expect(inputYear.prop('value')).toBe(1971);
      });

      it('updates values to a new provided value', () => {
        component.setProps({ value: '1981-02-03' });

        selectMonth = component.find(MONTH_SELECTOR);
        inputDay = component.find(DAY_SELECTOR);
        inputYear = component.find(YEAR_SELECTOR);

        expect(inputDay.prop('value')).toBe(3);
        expect(selectMonth.prop('selected')).toEqual(FEBRUARY_OPTION);
        expect(inputYear.prop('value')).toBe(1981);
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

    describe('as a valid long ISO8601 string', () => {
      it('sets values correctly', () => {
        const dateString = '1990-02-28T00:00:00.000Z';
        component = shallow(<DateInput {...props} value={dateString} />);

        selectMonth = component.find(MONTH_SELECTOR);
        inputDay = component.find(DAY_SELECTOR);
        inputYear = component.find(YEAR_SELECTOR);

        expect(inputDay.prop('value')).toBe(28);
        expect(selectMonth.prop('selected')).toEqual(FEBRUARY_OPTION);
        expect(inputYear.prop('value')).toBe(1990);
      });

      it('updates values to a new provided value', () => {
        component.setProps({ value: '1990-01-13T00:00:00.000Z' });

        selectMonth = component.find(MONTH_SELECTOR);
        inputDay = component.find(DAY_SELECTOR);
        inputYear = component.find(YEAR_SELECTOR);

        expect(inputDay.prop('value')).toBe(13);
        expect(selectMonth.prop('selected')).toEqual(JANUARY_OPTION);
        expect(inputYear.prop('value')).toBe(1990);
      });

      it('reset values if new value is not correct', () => {
        const dateString = '1990-02-28T00:00:00.000Z';
        component = shallow(<DateInput {...props} value={dateString} />);

        component.setProps({ value: '199-01-13T00:00:00.000Z' });

        selectMonth = component.find(MONTH_SELECTOR);
        inputDay = component.find(DAY_SELECTOR);
        inputYear = component.find(YEAR_SELECTOR);

        expect(inputDay.prop('value')).toBe('');
        expect(selectMonth.prop('selected')).toEqual(JANUARY_OPTION);
        expect(inputYear.prop('value')).toBe('');
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
    beforeEach(() => {
      component = shallow(<DateInput {...props} locale={LOCALES.en} />);
    });

    it('updates selectMonth based on locale', () => {
      component.setProps({ locale: LOCALES.fr });
      selectMonth = component.find(MONTH_SELECTOR);
      const frMonths = component.instance().getMonthsOptions();

      expect(selectMonth.props().options).toEqual(frMonths);
    });

    it('shows day before month if locale not US', () => {
      expect(
        component
          .find('.form-control')
          .at(0)
          .type(),
      ).toBe('input');
    });

    it('shows day before month if locale is US', () => {
      component.setProps({ locale: LOCALES.us });

      expect(
        component
          .find('.form-control')
          .at(0)
          .type(),
      ).toBeInstanceOf(Function);
    });

    it('shows day before month if locale is JP', () => {
      component.setProps({ locale: LOCALES.jp });

      expect(
        component
          .find('.form-control')
          .at(0)
          .type(),
      ).toBeInstanceOf(Function);
    });
  });

  describe('when user interacts', () => {
    describe('with day input', () => {
      it('returns correct value for correct input', () => {
        const date = '2001-01-11';
        component = shallow(<DateInput {...props} value={date} />);

        inputDay = component.find(DAY_SELECTOR);

        inputDay.simulate('change', { target: { value: '12' } });

        expect(props.onChange).toHaveBeenCalledWith('2001-01-12');
      });

      it('returns null for invalid input', () => {
        const date = '2001-01-01';
        component = shallow(<DateInput {...props} value={date} />);

        inputDay = component.find(DAY_SELECTOR);

        inputDay.simulate('change', { target: { value: 'aa' } });

        expect(props.onChange).toHaveBeenCalledWith(null);
      });
    });

    describe('with year input', () => {
      it('returns correct value for correct input', () => {
        const date = '2001-01-01';
        component = shallow(<DateInput {...props} value={date} />);

        inputYear = component.find(YEAR_SELECTOR);

        inputYear.simulate('change', { target: { value: '1990' } });

        expect(props.onChange).toHaveBeenCalledWith('1990-01-01');
      });

      it('returns null for invalid input', () => {
        const date = '2001-01-01';
        component = shallow(<DateInput {...props} value={date} />);

        inputYear = component.find(YEAR_SELECTOR);

        inputYear.simulate('change', { target: { value: 'aaa' } });

        expect(props.onChange).toHaveBeenCalledWith(null);
      });
    });

    describe('with month select', () => {
      it('returns correct value for correct input', () => {
        const date = '2001-01-01';
        component = shallow(<DateInput {...props} value={date} />);

        selectMonth = component.find(MONTH_SELECTOR);

        selectMonth.simulate('change', { value: 2, label: 'March' });

        expect(props.onChange).toHaveBeenCalledWith('2001-03-01');
      });
    });
  });

  describe('when user selects invalid dates', () => {
    it('corrects days in lap years February', () => {
      component = shallow(<DateInput {...props} />);

      inputDay = component.find(DAY_SELECTOR);
      selectMonth = component.find(MONTH_SELECTOR);
      inputYear = component.find(YEAR_SELECTOR);

      inputDay.simulate('change', { target: { value: 29 } });
      selectMonth.simulate('change', FEBRUARY_OPTION);
      inputYear.simulate('change', { target: { value: 1990 } });

      expect(component.find(DAY_SELECTOR).prop('value')).toBe(29);
    });

    it('corrects days too high in February', () => {
      const component = shallow(<DateInput {...props} />);

      inputDay = component.find(DAY_SELECTOR);
      selectMonth = component.find(MONTH_SELECTOR);
      inputYear = component.find(YEAR_SELECTOR);

      inputDay.simulate('change', { target: { value: 29 } });
      selectMonth.simulate('change', FEBRUARY_OPTION);
      inputYear.simulate('change', { target: { value: '1991' } });

      expect(component.find(DAY_SELECTOR).prop('value')).toBe(28);
    });

    it("doesn't correct days in lap years February", () => {
      const component = shallow(<DateInput {...props} value="2000-03-29" />);

      selectMonth = component.find(MONTH_SELECTOR);

      selectMonth.simulate('change', FEBRUARY_OPTION);

      expect(component.find(DAY_SELECTOR).prop('value')).toBe(29);
    });

    it('corrects days too high for selected months', () => {
      component = shallow(<DateInput {...props} value="2001-01-31" />);

      inputDay = component.find(DAY_SELECTOR);
      selectMonth = component.find(MONTH_SELECTOR);

      expect(component.find(DAY_SELECTOR).prop('value')).toBe(31);

      selectMonth.simulate('change', APRIL_OPTION);

      expect(component.find(DAY_SELECTOR).prop('value')).toBe(30);
    });

    it('lowers days if value entered too high', () => {
      const component = shallow(<DateInput {...props} />);

      inputDay = component.find(DAY_SELECTOR);

      inputDay.simulate('change', { target: { value: 32 } });

      expect(component.find(DAY_SELECTOR).prop('value')).toBe(31);
    });

    it('highers days if value entered too low', () => {
      const component = shallow(<DateInput {...props} />);

      inputDay = component.find(DAY_SELECTOR);

      inputDay.simulate('change', { target: { value: -1 } });

      expect(component.find(DAY_SELECTOR).prop('value')).toBe(1);
    });
  });
});
