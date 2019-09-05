import React from 'react';
import { shallow } from 'enzyme';
import Field, { FieldTypes, FieldFormats } from '../field/Field';
import FormControl from '../formControl/FormControl';
import { FormControlType } from '../formControl/FormControlType';
import Alert, { AlertArrowPosition, AlertSize, AlertType } from '../alert/Alert';

describe('Field', () => {
  let component;
  let props;
  const defaultProps = {
    name: 'test-name',
    onChange: jest.fn(),
  };

  describe('when given a label for the field', () => {
    beforeEach(() => {
      props = {
        label: 'Control label',
        field: {
          type: FieldTypes.STRING,
        },
      };
      component = shallow(<Field {...{ ...defaultProps, ...props }} />);
    });

    it('should render a control label', () => {
      expect(component.find('label')).toHaveLength(1);
      expect(component.find('label').text()).toBe('Control label');
    });
  });

  describe('when given type:string', () => {
    describe('and no format', () => {
      beforeEach(() => {
        props = {
          field: {
            label: 'Control label',
            type: FieldTypes.STRING,
          },
        };
        component = shallow(<Field {...{ ...defaultProps, ...props }} />);
      });

      it('should render a text input', () => {
        expect(component.find('label')).toHaveLength(1);
        expect(component.find(FormControl)).toHaveLength(1);
        expect(
          component
            .find(FormControl)
            .first()
            .props().type,
        ).toBe(FormControlType.TEXT);
      });
    });

    describe('and date format', () => {
      beforeEach(() => {
        props = {
          field: {
            label: 'Control label',
            type: FieldTypes.STRING,
            format: FieldFormats.DATE,
          },
        };
        component = shallow(<Field {...{ ...defaultProps, ...props }} />);
      });

      it('should render a date control', () => {
        expect(component.find(FormControl)).toHaveLength(1);
        expect(
          component
            .find(FormControl)
            .first()
            .props().type,
        ).toBe(FormControlType.DATE);
      });

      it('should render a visible label', () => {
        expect(component.find('.control-label')).toHaveLength(1);
      });
    });

    describe('and base64url format', () => {
      beforeEach(() => {
        props = {
          field: {
            label: 'Control label',
            type: FieldTypes.STRING,
            format: FieldFormats.BASE_64_URL,
          },
        };
        component = shallow(<Field {...{ ...defaultProps, ...props }} />);
      });

      it('should render a upload control', () => {
        expect(component.find(FormControl)).toHaveLength(1);
        expect(
          component
            .find(FormControl)
            .first()
            .props().type,
        ).toBe(FormControlType.FILE);
      });

      it('should not render a visible label', () => {
        expect(component.find('.control-label')).toHaveLength(0);
      });
    });

    describe('and password control override', () => {
      beforeEach(() => {
        props = {
          field: {
            label: 'Password',
            type: FieldTypes.STRING,
            control: FormControlType.PASSWORD,
          },
        };
        component = shallow(<Field {...{ ...defaultProps, ...props }} />);
      });

      it('should render a password control', () => {
        expect(component.find(FormControl)).toHaveLength(1);
        expect(
          component
            .find(FormControl)
            .first()
            .props().type,
        ).toBe(FormControlType.PASSWORD);
      });

      it('should render a visible label', () => {
        expect(component.find('.control-label')).toHaveLength(1);
      });
    });

    describe('and telephone control override', () => {
      beforeEach(() => {
        props = {
          field: {
            label: 'You telephone',
            type: FieldTypes.STRING,
            control: FormControlType.TEL,
          },
        };
        component = shallow(<Field {...{ ...defaultProps, ...props }} />);
      });

      it('should render a telephone control', () => {
        expect(component.find(FormControl)).toHaveLength(1);
        expect(
          component
            .find(FormControl)
            .first()
            .props().type,
        ).toBe(FormControlType.TEL);
      });

      it('should render a visible label', () => {
        expect(component.find('.control-label')).toHaveLength(1);
      });
    });
  });

  describe('when given type:number', () => {
    beforeEach(() => {
      props = {
        field: {
          label: 'Amount',
          type: FieldTypes.NUMBER,
        },
      };
      component = shallow(<Field {...{ ...defaultProps, ...props }} />);
    });

    it('should render a number input', () => {
      expect(component.find(FormControl)).toHaveLength(1);
      expect(
        component
          .find(FormControl)
          .first()
          .props().type,
      ).toBe(FormControlType.NUMBER);
    });

    it('should render a visible label', () => {
      expect(component.find('.control-label')).toHaveLength(1);
    });
  });

  describe('when given type:boolean', () => {
    beforeEach(() => {
      props = {
        field: {
          label: 'I accept the Terms and Conditions',
          type: FieldTypes.BOOLEAN,
        },
      };
      component = shallow(<Field {...{ ...defaultProps, ...props }} />);
    });

    it('should render a checkbox', () => {
      expect(component.find(FormControl)).toHaveLength(1);
      expect(
        component
          .find(FormControl)
          .first()
          .props().type,
      ).toBe(FormControlType.CHECKBOX);
    });

    it('should hide control label', () => {
      expect(component.find('.control-label')).toHaveLength(0);
    });
  });

  describe('when given field.values', () => {
    describe('if there are 3 or less', () => {
      beforeEach(() => {
        props = {
          field: {
            type: FieldTypes.NUMBER,
            values: [{ value: 1, label: 'One' }, { value: 2, label: 'Two' }],
          },
        };
        component = shallow(<Field {...{ ...defaultProps, ...props }} />);
      });

      it('should render radio buttons', () => {
        expect(component.find(FormControl)).toHaveLength(1);
        expect(
          component
            .find(FormControl)
            .first()
            .props().type,
        ).toBe(FormControlType.RADIO);
      });
    });

    describe('if there are 4 or more', () => {
      beforeEach(() => {
        props = {
          field: {
            type: FieldTypes.NUMBER,
            values: [
              { value: 1, label: 'One' },
              { value: 2, label: 'Two' },
              { value: 3, label: 'Three' },
              { value: 4, label: 'Four' },
            ],
          },
        };
        component = shallow(<Field {...{ ...defaultProps, ...props }} />);
      });

      it('should render a select', () => {
        expect(component.find(FormControl)).toHaveLength(1);
        expect(
          component
            .find(FormControl)
            .first()
            .props().type,
        ).toBe(FormControlType.SELECT);
      });
    });

    describe('if control:select is supplied', () => {
      beforeEach(() => {
        props = {
          field: {
            type: FieldTypes.NUMBER,
            control: FormControlType.SELECT,
            values: [{ value: 1, label: 'One' }, { value: 2, label: 'Two' }],
          },
        };
        component = shallow(<Field {...{ ...defaultProps, ...props }} />);
      });

      it('should render select regardless of number of values', () => {
        expect(component.find(FormControl)).toHaveLength(1);
        expect(
          component
            .find(FormControl)
            .first()
            .props().type,
        ).toBe(FormControlType.SELECT);
      });
    });
  });

  describe('when the model already contains a value', () => {
    beforeEach(() => {
      props = {
        field: {
          type: FieldTypes.STRING,
        },
        value: 'supplied value',
      };
      component = shallow(<Field {...{ ...defaultProps, ...props }} />);
    });

    it('should render the model value in the control', () => {
      expect(component.find(FormControl)).toHaveLength(1);
      const formControlProps = component
        .find(FormControl)
        .first()
        .props();

      expect(formControlProps.type).toBe(FormControlType.TEXT);
      expect(formControlProps.value).toBe('supplied value');
    });
  });

  describe('when given an error message', () => {
    beforeEach(() => {
      props = {
        field: {
          type: FieldTypes.STRING,
        },
        errorMessage: 'Custom error',
      };
      component = shallow(<Field {...{ ...defaultProps, ...props }} />);
    });

    it('should render in an error state', () => {
      expect(component.find('.form-group')).toHaveLength(1);
      expect(component.find('.has-error')).toHaveLength(1);
    });

    it('should render the message', () => {
      const alert = component.find(Alert);
      expect(alert).toHaveLength(1);

      const alertProps = alert.first().props();
      expect(alertProps.children.props.children).toBe('Custom error');
      expect(alertProps.type).toBe(AlertType.Error);
      expect(alertProps.size).toBe(AlertSize.Small);
      expect(alertProps.arrow).toBe(AlertArrowPosition.UpLeft);
    });

    describe('when the value changes', () => {
      beforeEach(() => {
        component.find(FormControl).simulate('change');
      });

      it('it should remove the error message', () => {
        const alert = component.find(Alert);
        expect(alert).toHaveLength(0);
      });

      it('should remove custom error state', () => {
        const errorClass = component.find('.has-error');
        expect(errorClass).toHaveLength(0);
      });
    });

    describe('when the error message changes', () => {
      it('it should show the new error message', () => {
        component.find(FormControl).simulate('change');
        let alert = component.find(Alert);
        expect(alert).toHaveLength(0);

        component.setProps({ ...defaultProps, ...props, errorMessage: 'New custom error' });
        alert = component.find(Alert);
        expect(alert).toHaveLength(1);

        const alertProps = alert.first().props();
        expect(alertProps.children.props.children).toBe('New custom error');
        expect(alertProps.type).toBe(AlertType.Error);
        expect(alertProps.size).toBe(AlertSize.Small);
        expect(alertProps.arrow).toBe(AlertArrowPosition.UpLeft);
      });
    });
  });

  describe('when given a help message', () => {
    beforeEach(() => {
      props = {
        field: {
          label: 'Control with help message',
          type: FieldTypes.STRING,
          help: { message: 'Some useful hint' },
        },
        onFocus: jest.fn(),
        onBlur: jest.fn(),
      };
      component = shallow(<Field {...{ ...defaultProps, ...props }} />);
    });

    describe('when control on focus', () => {
      beforeEach(() => {
        component.find(FormControl).simulate('focus');
      });

      it('should invoke on focus handler', () => {
        expect(props.onFocus).toHaveBeenCalled();
      });

      it('should be in focused and not be in blur state', () => {
        expect(component.state().focused).toBeTruthy();
      });

      it('should add info state', () => {
        expect(component.find('.has-info')).toHaveLength(1);
      });

      it('should render the help message', () => {
        const alert = component.find(Alert);
        expect(alert).toHaveLength(1);

        const alertProps = alert.first().props();
        expect(alertProps.children.props.children).toBe('Some useful hint');
        expect(alertProps.type).toBe(AlertType.Info);
        expect(alertProps.size).toBe(AlertSize.Small);
        expect(alertProps.arrow).toBe(AlertArrowPosition.UpLeft);
      });
    });

    describe('when control not on focus', () => {
      it('should not add info state', () => {
        expect(component.find('.has-info')).toHaveLength(0);
      });

      it('should not render the help message', () => {
        expect(component.find(Alert)).toHaveLength(0);
      });
    });

    describe('when control on blur (just lost focus)', () => {
      beforeEach(() => {
        component.find(FormControl).simulate('blur');
      });

      it('should invoke on blur handler', () => {
        expect(props.onBlur).toHaveBeenCalled();
      });

      it('should not be in focused state', () => {
        expect(component.state().focused).toBeFalsy();
      });

      it('should not add info state', () => {
        expect(component.find('.has-info')).toHaveLength(0);
      });

      it('should not render the help message', () => {
        expect(component.find(Alert)).toHaveLength(0);
      });
    });
  });

  describe('when given an warning message', () => {
    beforeEach(() => {
      props = {
        field: {
          type: FieldTypes.STRING,
        },
        warningMessage: 'Warning message',
      };
      component = shallow(<Field {...{ ...defaultProps, ...props }} />);
    });

    it('should render in a warning state', () => {
      expect(component.find('.form-group')).toHaveLength(1);
      expect(component.find('.has-warning')).toHaveLength(1);
    });

    it('should render the message', () => {
      const alert = component.find(Alert);
      expect(alert).toHaveLength(1);

      const alertProps = alert.first().props();
      expect(alertProps.children.props.children).toBe('Warning message');
      expect(alertProps.type).toBe(AlertType.Warning);
      expect(alertProps.size).toBe(AlertSize.Small);
      expect(alertProps.arrow).toBe(AlertArrowPosition.UpLeft);
    });
  });

  describe('when given hidden: true', () => {
    beforeEach(() => {
      props = {
        field: {
          type: FieldTypes.STRING,
          hidden: true,
        },
      };
      component = shallow(<Field {...{ ...defaultProps, ...props }} />);
    });

    it('should not be visible', () => {
      expect(component.find('.hidden')).toHaveLength(1);
    });
  });

  describe('when the control is focused', () => {
    beforeEach(() => {
      props = {
        field: {
          label: 'Label',
          type: FieldTypes.STRING,
        },
        onFocus: jest.fn(),
      };
      component = shallow(<Field {...{ ...defaultProps, ...props }} />);
      component.find(FormControl).simulate('focus');
    });

    it('should not be in blur state', () => {
      expect(component.state().focused).toBeTruthy();
    });

    it('should trigger the onFocus handler', () => {
      expect(props.onFocus).toHaveBeenCalled();
    });
  });

  describe('when the control value changes', () => {
    beforeEach(() => {
      props = {
        field: {
          label: 'Some label',
          type: FieldTypes.STRING,
        },
      };

      component = shallow(<Field {...{ ...defaultProps, ...props }} />);
      component.find('input').value = 'changed';
      component.find(FormControl).simulate('change');
    });

    it('should update the value', () => {
      expect(component.state().changed).toBeTruthy();
    });

    it('should trigger the onChange handler', () => {
      expect(defaultProps.onChange).toHaveBeenCalled();
    });
  });

  describe('when the control is blurred', () => {
    beforeEach(() => {
      props = {
        field: {
          type: FieldTypes.STRING,
          label: 'Blurred component',
        },
        onBlur: jest.fn(),
        errorMessage: 'Custom error',
      };
      component = shallow(<Field {...{ ...defaultProps, ...props }} />);
      component.find(FormControl).simulate('blur');
    });

    it('should trigger the onBlur handler', () => {
      expect(props.onBlur).toHaveBeenCalled();
    });

    it('should not hide the custom error message', () => {
      expect(component.find(Alert)).toHaveLength(1);
    });
  });
});
