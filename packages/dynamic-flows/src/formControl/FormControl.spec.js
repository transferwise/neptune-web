import React from 'react';
import { shallow, mount } from 'enzyme';
import {
  Checkbox,
  DateInput,
  DateLookup,
  InputWithDisplayFormat,
  PhoneNumberInput,
  RadioGroup,
  Select,
  Tabs,
  TextareaWithDisplayFormat,
} from '@transferwise/components';
import FormControl from '.';

describe('FormControl', () => {
  let props;
  let component;
  let defaultProps;
  let currentValue;

  beforeEach(() => {
    defaultProps = {
      id: 'control',
      placeholder: 'placeholder',
      name: 'control',
      disabled: false,
      readOnly: false,
      required: true,
      value: undefined,
      size: 'md',
      onChange: jest.fn(),
      onBlur: jest.fn(),
      onFocus: jest.fn(),
    };
  });

  testSimpleControl('text', 'input[type="text"]', 'example', 'Example text');
  testSimpleControl('password', 'input[type="password"]', 'qwerty', 'Enter your password');
  testSimpleControl('number', 'input[type="number"]', 123456, 'Enter your numeric value here');
  testSimpleControl('textarea', 'textarea', 'Lorem ipsum', 'Please enter your feedback');

  //   testTextControlValidation('text', 'input[type="text"]');
  //   testTextControlValidation('password', 'input[type="password"]');
  //   testTextControlValidation('textarea', 'textarea');

  testCustomControl('select', Select);
  testCustomControl('date', DateInput);
  testCustomControl('tel', PhoneNumberInput);
  testCustomControl('checkbox', Checkbox);
  testCustomControl('text', InputWithDisplayFormat);
  testCustomControl('textarea', TextareaWithDisplayFormat);
  testCustomControl('date-lookup', DateLookup);

  // testAutoComplete('text', 'input');
  // testAutoComplete('number', 'input');
  // testAutoComplete('password', 'input');
  // testAutoComplete('textarea', 'textarea');

  //   xdescribe('type: number - validation', () => {
  //     beforeEach(() => {
  //       props = {
  //         type: 'number',
  //         value: null,
  //         min: 2,
  //         max: 5,
  //         required: true,
  //       };
  //       formGroup = shallow(
  //         <div className="form-group">
  //           <FormControl {...{ ...defaultProps, ...props }} />
  //         </div>,
  //       );
  //       component = formGroup.find('tw-form-control');
  //       input = component.find('input');
  //     });

  //     testRequiredValidation(() => {
  //       input.value = 4;
  //       input.simulate('input');
  //       $timeout.flush();
  //     }, 4);

  //     testMinMaxValidation(
  //       () => {
  //         // setBelowMin
  //         input.value = 1;
  //         input.simulate('input');
  //         $timeout.flush();
  //       },
  //       () => {
  //         // setAboveMax
  //         input.value = 6;
  //         input.simulate('input');
  //         $timeout.flush();
  //       },
  //       () => {
  //         // setValid
  //         input.value = 4;
  //         input.simulate('input');
  //         $timeout.flush();
  //       },
  //       4,
  //     );
  //   });

  describe('type: select', () => {
    let selectElem;

    beforeEach(() => {
      props = {
        type: 'select',
        options: [
          {
            value: '1',
            label: 'one',
          },
          {
            value: '2',
            label: 'two',
          },
        ],
        onChange: jest.fn().mockImplementation((event) => {
          currentValue = event;
        }),
      };

      component = mount(<FormControl {...{ ...defaultProps, ...props }} />);
      selectElem = component.find(Select);
    });

    afterEach(() => {
      component.unmount();
    });

    testFocusHandler(() => {
      selectElem.simulate('focus');
    });

    testChangeHandler(() => {
      component.find('button.dropdown-toggle').simulate('click');
      component.find('li.tw-dropdown-item').last().simulate('click');
    }, '2');

    testBlurHandler(() => {
      selectElem.simulate('blur');
    });

    it('should enable search when number of options exceeds predefined amount', () => {
      const options = [];
      for (let i = 0; i < 20; i += 1) {
        options.push({ value: i, label: 'something' });
      }
      props = {
        type: 'select',
        options,
      };
      component = mount(<FormControl {...{ ...defaultProps, ...props }} />);
      expect(component.find(Select).prop('search')).toEqual(true);
    });

    it('should disable search when number of options is less than predefined amount', () => {
      const options = [];
      for (let i = 0; i < 19; i += 1) {
        options.push({ value: i, label: 'something' });
      }
      props = {
        type: 'select',
        options,
      };
      component = mount(<FormControl {...{ ...defaultProps, ...props }} />);
      expect(component.find(Select).prop('search')).toEqual(false);
    });

    it('should allow search', () => {
      const onSearchChange = jest.fn();
      component.setProps({ onSearchChange });

      component.find('button.dropdown-toggle').simulate('click');
      component.find('input').simulate('change', { target: { value: 'test' } });
      expect(onSearchChange).toBeCalledWith('test');
    });
  });

  describe('type: checkbox', () => {
    let checkbox;

    beforeEach(() => {
      props = {
        type: 'checkbox',
        placeholder: 'Accept Terms and Conditions',
        onChange: jest.fn().mockImplementation(() => {
          currentValue = true;
        }),
      };
      component = shallow(<FormControl {...{ ...defaultProps, ...props }} />);
      checkbox = component.find(Checkbox);
    });

    it('should render a checkbox input', () => {
      expect(checkbox.exists()).toBeTruthy();
    });

    testFocusHandler(() => {
      checkbox.simulate('focus');
    });

    testChangeHandler(() => {
      checkbox.simulate('change');
    }, true);

    testBlurHandler(() => {
      checkbox.simulate('blur');
    });

    // testRequiredValidation(() => {
    //   checkbox.simulate('click');
    // }, true);
  });

  describe('type: radio', () => {
    let radioGroup;

    beforeEach(() => {
      props = {
        type: 'radio',
        options: [
          { value: 1, label: 'One' },
          { value: 2, label: 'Two', secondary: 'Secondary label' },
        ],
        onChange: jest.fn().mockImplementation((newValue) => {
          currentValue = newValue;
        }),
      };
      component = shallow(<FormControl {...{ ...defaultProps, ...props }} />);
      radioGroup = component.find(RadioGroup);
    });

    afterEach(() => {
      component.unmount();
    });

    it('should render a radio group', () => {
      expect(radioGroup.exists()).toBeTruthy();
    });

    testChangeHandler(() => {
      radioGroup.simulate('change', 1);
    }, 1);
  });

  describe('type: tabs', () => {
    let tabs;

    beforeEach(() => {
      props = {
        type: 'tab',
        options: [
          { value: 0, label: 'Zero' },
          { value: 1, label: 'One' },
        ],
        onChange: jest.fn().mockImplementation((newValue) => {
          currentValue = newValue;
        }),
      };
      component = shallow(<FormControl {...{ ...defaultProps, ...props }} />);
      tabs = component.find(Tabs);
    });

    afterEach(() => {
      component.unmount();
    });

    it('should render tab', () => {
      expect(tabs.exists()).toBeTruthy();
    });

    testChangeHandler(() => {
      tabs.simulate('tabSelect', 1);
    }, 1);
  });

  //   xdescribe('type: file - validation', () => {
  //     beforeEach(() => {
  //       props.model = null;
  //       formGroup = compileTemplate(
  //         "<div class='form-group'> \
  //             <label class='control-label'></label> \
  //             <tw-form-control type='file' \
  //               ng-model='model' \
  //               ng-focus='onFocus()' \
  //               ng-blur='onBlur()' \
  //               ng-change='onChange(value)' \
  //               required> \
  //             </tw-form-control> \
  //           </div>",
  //       );
  //       component = formGroup.find('tw-form-control');
  //     });
  //     it('should render twUpload', () => {
  //       expect(component.find('tw-upload')).toBeTruthy();
  //     });
  //   });

  describe('type: date', () => {
    let dateInput;

    beforeEach(() => {
      props = {
        type: 'date',
        onChange: jest.fn().mockImplementation(() => {
          currentValue = '2016-01-01';
        }),
      };

      component = shallow(<FormControl {...{ ...defaultProps, ...props }} />);
      dateInput = component.find(DateInput);
    });

    testFocusHandler(() => {
      dateInput.simulate('focus');
    });

    testChangeHandler(() => {
      dateInput.simulate('change');
    }, '2016-01-01');

    testBlurHandler(() => {
      dateInput.simulate('blur');
    });
  });

  //   xdescribe('type: date validation', () => {
  //     const dayInput, yearInput;
  //     beforeEach(() => {
  //       props.model = null;
  //       $scope.ngMin = '2015-04-01';
  //       $scope.ngMax = '2017-03-24';
  //       formGroup = compileTemplate(
  //         "<div class='form-group'> \
  //             <label class='control-label'></label> \
  //             <tw-form-control type='date' \
  //               ng-model='model' \
  //               locale='en-GB' \
  //               ng-min='ngMin' \
  //               ng-max='ngMax' \
  //               tw-minlength='' \
  //               ng-required='true' \
  //               ng-focus='onFocus()' \
  //               ng-blur='onBlur()' \
  //               ng-change='onChange(value)'> \
  //             </tw-form-control> \
  //           </div>",
  //       );
  //       component = formGroup.find('tw-form-control');
  //       dayInput = component.find('.tw-date-day');
  //       yearInput = component.find('.tw-date-year');
  //     });

  //     testRequiredValidation(() => {
  //       // setValid 2016-01-01
  //       dayInput.value = '01';
  //       dayInput.simulate('input');
  //       yearInput.value = '2016';
  //       yearInput.simulate('input');
  //     }, '2016-01-01');

  //     testMinMaxValidation(
  //       () => {
  //         // setBelowMin 2010-01-01
  //         dayInput.value = '01';
  //         dayInput.simulate('input');
  //         yearInput.value = '2010';
  //         yearInput.simulate('input');
  //       },
  //       () => {
  //         // setAboveMax 2020-01-01
  //         dayInput.value = '01';
  //         dayInput.simulate('input');
  //         yearInput.value = '2020';
  //         yearInput.simulate('input');
  //       },
  //       () => {
  //         // setValid 2016-01-01
  //         dayInput.value = '01';
  //         dayInput.simulate('input');
  //         yearInput.value = '2016';
  //         yearInput.simulate('input');
  //       },
  //       '2016-01-01',
  //     );
  //   });

  describe('type: hidden', () => {
    let input;

    beforeEach(() => {
      props = { type: 'hidden', model: null };
      component = shallow(<FormControl {...{ ...defaultProps, ...props }} />);
      input = component.find('input');
    });

    it('should render a hidden input', () => {
      expect(input.exists()).toBeTruthy();
      expect(input.prop('type')).toBe('hidden');
    });
  });

  // function testAutoComplete(controlType, controlSelector) {
  //   let control;

  //   describe(`when autoComplete is enabled for a ${controlType} control`, () => {
  //     beforeEach(() => {
  //       props = {
  //         type: controlType,
  //         autoComplete: true,
  //       };
  //       control = shallow(<FormControl {...{ ...defaultProps, ...props }} />).find(controlSelector);
  //     });

  //     it('should disable autocomplete', () => {
  //       expect(control.prop('autoComplete')).toBe('on');
  //     });
  //   });

  //   describe(`when autoComplete is not enabled for a ${controlType} control`, () => {
  //     beforeEach(() => {
  //       props = {
  //         type: controlType,
  //         autoComplete: false,
  //       };
  //       control = shallow(<FormControl {...{ ...defaultProps, ...props }} />).find(controlSelector);
  //     });

  //     it('should enable autocomplete', () => {
  //       expect(control.prop('autoComplete')).toBe('disabled');
  //     });
  //   });
  // }

  function testSimpleControl(controlType, selector, valueToSet, placeholder) {
    let input;
    describe(`type: ${controlType}`, () => {
      beforeEach(() => {
        props = {
          type: controlType,
          onChange: jest.fn().mockImplementation((newValue) => {
            currentValue = newValue;
          }),
          placeholder,
        };

        component = shallow(<FormControl {...{ ...defaultProps, ...props }} />);
        input = component.find(selector);
      });

      it(`should render a ${controlType} control`, () => {
        expect(input.exists()).toBeTruthy();
      });

      if (placeholder) {
        it(`should render the ${controlType} control with a placeholder`, () => {
          expect(component.prop('placeholder')).toBe(placeholder);
          expect(input.prop('placeholder')).toBe(placeholder);
        });
      }

      testFocusHandler(() => {
        component.simulate('focus');
      });

      testChangeHandler(() => {
        component.simulate('change', { target: { value: valueToSet } });
      }, valueToSet);

      testBlurHandler(() => {
        component.simulate('blur');
      });
    });
  }

  function getPropsForControlType(controlType) {
    let customProps = {};
    switch (controlType) {
      case 'radio':
      case 'select': {
        customProps = {
          options: [
            { value: 1, label: 'One' },
            { value: 2, label: 'Two', secondary: 'Secondary text' },
          ],
        };
        break;
      }
      case 'date':
      case 'date-lookup': {
        customProps = { value: new Date() };
        break;
      }
      case 'tel': {
        customProps = {
          value: '+441234567',
          searchPlaceholder: 'Search placeholder',
          size: 'md',
          placeholder: 'Telephone',
        };
        break;
      }
      case 'checkbox': {
        customProps = { placeholder: 'label' };
        break;
      }
      case 'upload': {
        customProps = {
          uploadProps: {},
        };
        break;
      }
      case 'text':
      case 'textarea': {
        customProps = {
          displayPattern: '**-**',
        };
        break;
      }
      default:
        customProps = defaultProps;
    }
    customProps = {
      ...customProps,
      type: controlType,
    };
    return { ...defaultProps, ...customProps };
  }

  function getPropsToPassDown(controlType, customComponent) {
    const PROPS = Object.keys(getPropsForControlType(controlType));

    // eslint-disable-next-line react/forbid-foreign-prop-types
    return Object.keys(customComponent.propTypes).filter((key) => PROPS.includes(key));
  }

  function testCustomControl(controlType, customComponent) {
    let custom;

    const EVENT = {
      onChange: 'change',
      onBlur: 'blur',
      onFocus: 'focus',
    };

    const PASSED_DOWN_PROPS = getPropsToPassDown(controlType, customComponent);
    const CALLBACK_PROPS = ['onChange', 'onBlur', 'onFocus'];

    if (!controlType) {
      throw new Error('Missing mandatory value in `controlType` argument!');
    }

    if (!customComponent) {
      throw new Error('Missing mandatory value in `customComponent` argument!');
    }

    describe(`type: ${controlType}`, () => {
      beforeEach(() => {
        props = getPropsForControlType(controlType);
        component = shallow(
          <FormControl {...{ ...defaultProps, ...props }} displayPattern="**-**" />,
        );
        const child = component.find(customComponent);
        custom = child.length > 1 ? child.first() : child;
      });

      PASSED_DOWN_PROPS.forEach((key) => {
        it(`should pass the ${key} prop to the child component`, () => {
          expect(custom.prop(key)).toBe(props[key]);
        });
      });
      if (controlType === 'upload') {
        it(`should call the onStart handler when a a file is dropped`, () => {
          component = mount(<FormControl {...{ ...defaultProps, ...props }} />);

          expect(component.find(customComponent)).toHaveLength(1);
        });
      } else {
        CALLBACK_PROPS.forEach((key) => {
          it(`should call the ${key} handler when a ${EVENT[key]} event triggered`, () => {
            component.simulate(EVENT[key]);
            expect(props[key]).toHaveBeenCalled();
          });
        });
      }
    });
  }

  //   function testTextControlValidation(controlType, selector) {
  //     xdescribe('type: ' + controlType + ' - validation', () => {
  //       beforeEach(() => {
  //         props.model = '';
  //         $scope.pattern = '[a-z]+';
  //         formGroup = compileTemplate(
  //           "<div class='form-group'> \
  //               <label class='control-label'></label> \
  //               <tw-form-control type='" +
  //             controlType +
  //             "' \
  //                 ng-model='model' \
  //                 ng-minlength='4' \
  //                 ng-maxlength='6' \
  //                 ng-pattern='pattern' \
  //                 ng-required='true'> \
  //               </tw-form-control> \
  //             </div>",
  //         );
  //         input = formGroup.find(selector);
  //         component = formGroup.find('tw-form-control');
  //       });

  //       testRequiredValidation(() => {
  //         input.value = 'abcd';
  //         input.simulate('input');
  //         $timeout.flush();
  //       }, 'abcd');

  //       testLengthValidation(
  //         () => {
  //           input.value = 'abc';
  //           input.simulate('input');
  //           $timeout.flush();
  //         },
  //         () => {
  //           input.value = 'abcdefg';
  //           input.simulate('input');
  //           $timeout.flush();
  //         },
  //         () => {
  //           input.value = 'abcd';
  //           input.simulate('input');
  //           $timeout.flush();
  //         },
  //         'abcd',
  //       );

  //       testPatternValidation(
  //         () => {
  //           input.value = '1';
  //           input.simulate('input');
  //           $timeout.flush();
  //         },
  //         () => {
  //           input.value = 'abcd';
  //           input.simulate('input');
  //           $timeout.flush();
  //         },
  //         'abcd',
  //       );
  //     });
  //   }

  function testFocusHandler(performFocus) {
    describe('when focused', () => {
      beforeEach(performFocus);

      it('should call the focus handler', () => {
        expect(defaultProps.onFocus).toHaveBeenCalled();
      });
    });
  }

  function testChangeHandler(performChange, expectedValue) {
    describe('when changed', () => {
      beforeEach(performChange);

      //   it('should set the control to $dirty', () => {
      //     expect(component.classList).toContain('ng-dirty');
      //   });

      it('should call the change handler', () => {
        expect(props.onChange).toHaveBeenCalled();
      });

      it('should set the correct value', () => {
        expect(currentValue).toEqual(expectedValue);
      });
    });
  }

  function testBlurHandler(performBlur) {
    describe('when blurred', () => {
      beforeEach(performBlur);

      it('should call the blur handler', () => {
        expect(defaultProps.onBlur).toHaveBeenCalled();
      });
    });
  }

  // function testRequiredValidation(setValidValue, expectedModel) {
  //   xdescribe('when required and no value entered', () => {
  //     it('should set ngModel.$invalid', () => {
  //       expect(component.classList).toContain('ng-invalid');
  //       expect(component.classList).toContain('ng-invalid-required');
  //     });
  //     it('should not bind to the model', () => {
  //       expect(props.model).toBeFalsy();
  //     });
  //   });

  //   xdescribe('when required and value is entered', () => {
  //     beforeEach(setValidValue);

  //     it('should set ngModel.$valid', () => {
  //       expect(component.classList).toContain('ng-valid-required');
  //     });
  //     it('should bind to the model', () => {
  //       expect(props.model).toBe(expectedModel);
  //     });
  //   });
  // }

  //   function testMinMaxValidation(setBelowMin, setAboveMax, setValid, expectedModel) {
  //     xdescribe('when value is below min', () => {
  //       beforeEach(setBelowMin);
  //       it('should set ngModel.$invalid', () => {
  //         expect(component.classList).toContain('ng-invalid');
  //         expect(component.classList).toContain('ng-invalid-min');
  //       });
  //       it('should not bind to the model', () => {
  //         expect(props.model).toBeFalsy();
  //       });
  //     });

  //     xdescribe('when value is above max', () => {
  //       beforeEach(setAboveMax);
  //       it('should set ngModel.$invalid', () => {
  //         expect(component.classList).toContain('ng-invalid');
  //         expect(component.classList).toContain('ng-invalid-max');
  //       });
  //       it('should not bind to the model', () => {
  //         expect(props.model).toBeFalsy();
  //       });
  //     });

  //     xdescribe('when value is between min and max', () => {
  //       beforeEach(setValid);
  //       it('should set ngModel.$valid', () => {
  //         expect(component.classList).toContain('ng-valid');
  //         expect(component.classList).toContain('ng-valid-min');
  //         expect(component.classList).toContain('ng-valid-max');
  //       });
  //       it('should bind the value to the model', () => {
  //         expect(props.model).toBe(expectedModel);
  //       });
  //     });
  //   }

  //   function testLengthValidation(setBelowMin, setAboveMax, setValid, expectedModel) {
  //     xdescribe('when entered value is shorter than min length', () => {
  //       beforeEach(setBelowMin);
  //       it('should set ngModel.$invalid', () => {
  //         expect(component.classList).toContain('ng-invalid');
  //         expect(component.classList).toContain('ng-invalid-minlength');
  //       });
  //       it('should not bind to the model', () => {
  //         expect(props.model).toBeFalsy();
  //       });
  //     });

  //     xdescribe('when entered value is longer than max length', () => {
  //       beforeEach(setAboveMax);
  //       it('should set ngModel.$valid when value is longer than min length', () => {
  //         expect(component.classList).toContain('ng-invalid');
  //         expect(component.classList).toContain('ng-invalid-maxlength');
  //       });
  //       it('should not bind to the model', () => {
  //         expect(props.model).toBeFalsy();
  //       });
  //     });

  //     xdescribe('when entered value is between min and max length', () => {
  //       beforeEach(setValid);
  //       it('should set ngModel.$valid', () => {
  //         expect(component.classList).toContain('ng-valid-maxlength');
  //       });
  //       it('should bind to the model', () => {
  //         expect(props.model).toBe(expectedModel);
  //       });
  //     });
  //   }

  //   function testPatternValidation(setInvalid, setValid, expectedModel) {
  //     xdescribe('when entered value does not match pattern', () => {
  //       beforeEach(setInvalid);
  //       it('should set ngModel.$invalid', () => {
  //         expect(component.classList).toContain('ng-invalid');
  //         expect(component.classList).toContain('ng-invalid-pattern');
  //       });
  //       it('should not bind to the model', () => {
  //         expect(props.model).toBeFalsy();
  //       });
  //     });

  //     xdescribe('when entered value matches pattern', () => {
  //       beforeEach(setValid);
  //       it('should set ngModel.$valid', () => {
  //         expect(component.classList).toContain('ng-valid-pattern');
  //       });
  //       it('should bind to the model', () => {
  //         expect(props.model).toBe(expectedModel);
  //       });
  //     });
  //   }
});
