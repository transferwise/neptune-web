import React from 'react';
import { mount } from 'enzyme';

import BasicTypeSchema from './';

import SchemaFormControl from '../schemaFormControl';
import ControlFeedback from '../controlFeedback';

function createProps() {
  return {
    schema: {
      type: 'string',
      minLength: 2,
      title: 'Complete all sections',
      default: '',
    },
    model: {},
    errors: undefined,
    required: true,
    onChange: jest.fn(),
    submitted: false,
    translations: {
      translationKey: 'example',
    },
  };
}
describe('Given a component for rendering basic type schemas', () => {
  describe('when submitted', () => {
    it('displays validation and server errors', () => {
      const props = createProps();
      props.model = '';

      const component = mount(<BasicTypeSchema {...props} />);
      const formControl = component.find(SchemaFormControl);
      const getControlFeedback = () => component.find(ControlFeedback);

      // expect no errors displayed
      expect(getControlFeedback().text()).toBe('');

      // submit form
      component.setProps({ submitted: true });

      // expect the validation error to be displayed
      expect(getControlFeedback().text()).toMatch(/Value is required/i);

      // type in some text
      formControl.simulate('change', { target: { value: 'Some text' } });

      // submit form again
      component.setProps({ submitted: true });

      // simulate server response
      component.setProps({ errors: 'The server call retuned an error' });

      // expect the server error to be displayed
      expect(getControlFeedback().text()).toBe('The server call retuned an error');

      // type in some more text
      formControl.simulate('change', 'Some more text');
      component.setProps({ submitted: false });

      // expect the error to be hidden because model changed
      expect(getControlFeedback().text()).toBe('');
    });
  });
});
