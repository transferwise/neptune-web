import React from 'react';
import { shallow } from 'enzyme';

import { InlineAlert } from '@transferwise/components';
import ControlFeedback from '.';

describe('Given a component for rendering feedback next to controls', () => {
  let component;
  let props;
  let states;

  const schema = {
    type: 'string',
    help: {
      markdown: 'some markdown',
    },
    description: 'a description',
    validationMessages: {
      minLength: 'Custom minLength message',
      maxLength: 'Unshown validation message',
    },
  };

  let changed;
  let focused;
  let blurred;
  let submitted;
  let errors;

  const validations = ['minLength'];
  const validationMessages = {
    minLength: 'Default minLength message',
  };

  beforeEach(() => {
    changed = false;
    focused = false;
    blurred = false;
    submitted = false;
    errors = '';

    props = { schema, validations, validationMessages };
    states = { changed, focused, blurred, submitted, errors };
    component = shallow(<ControlFeedback {...states} {...props} />);
  });

  describe('when initialised without error', () => {
    it('should not show any alerts', () => {
      expect(component.find(InlineAlert).length).toBe(0);
    });
  });

  describe('when initialised with an error', () => {
    beforeEach(() => {
      component.setProps({ errors: 'There was an external error' });
    });

    it('should show an alert', () => {
      const alert = component.find(InlineAlert);
      expect(alert.length).toBe(1);
      expect(alert.prop('type')).toBe('error');
      expect(alert.contains('There was an external error')).toBe(true);
    });
  });

  describe('when given an error but then changed', () => {
    beforeEach(() => {
      component.setProps({
        errors: 'There was an external error',
        changed: true,
      });
    });

    it('should not show the original error', () => {
      expect(component.find(InlineAlert).length).toBe(0);
    });
  });

  describe('when focused', () => {
    beforeEach(() => {
      component.setProps({ focused: true });
    });

    it('should show an alert for description', () => {
      const alert = component.find(InlineAlert);
      expect(alert.length).toBe(1);
      expect(alert.prop('type')).toBe('info');
    });

    it('should show the supplied message', () => {
      expect(component.find(InlineAlert).contains(schema.description)).toBe(true);
    });
  });

  describe('when blurred and changed', () => {
    beforeEach(() => {
      component.setProps({ blurred: true, changed: true });
    });

    it('should show a validation alert', () => {
      const alert = component.find(InlineAlert);
      expect(alert.length).toBe(1);
      expect(alert.prop('type')).toBe('error');
    });

    it('should show validation messages for validation keys', () => {
      expect(component.find(InlineAlert).contains(schema.validationMessages.minLength)).toBe(true);
    });

    it('should not show validation messages for missing validation keys', () => {
      expect(component.find(InlineAlert).contains(schema.validationMessages.maxLength)).toBe(false);
    });
  });

  describe('when focused, blurred and changed', () => {
    beforeEach(() => {
      component.setProps({ focused: true, blurred: true, changed: true });
    });

    it('should show a validation alert', () => {
      const alert = component.find(InlineAlert);
      expect(alert.length).toBe(1);
      expect(alert.prop('type')).toBe('error');
    });

    it('should show validation messages for validation keys', () => {
      expect(component.find(InlineAlert).contains(schema.validationMessages.minLength)).toBe(true);
    });

    it('should not show help messages', () => {
      expect(component.find(InlineAlert).contains(schema.description)).toBe(false);
    });
  });

  describe('when submitted', () => {
    beforeEach(() => {
      component.setProps({ submitted: true });
    });

    it('should show a validation alert', () => {
      const alert = component.find(InlineAlert);
      expect(alert.length).toBe(1);
      expect(alert.prop('type')).toBe('error');
    });

    it('should show validation messages for validation keys', () => {
      expect(component.find(InlineAlert).contains(schema.validationMessages.minLength)).toBe(true);
    });

    it('should not show validation messages for missing validation keys', () => {
      expect(component.find(InlineAlert).contains(schema.validationMessages.maxLength)).toBe(false);
    });
  });

  describe('when validationAsyncSuccessMessage is supplied', () => {
    beforeEach(() => {
      component.setProps({ validationAsyncSuccessMessage: 'some message' });
    });

    it('should render the validation async success message as an info InLineAlert', () => {
      const alert = component.find(InlineAlert);
      expect(alert.length).toBe(1);
      expect(alert.prop('type')).toBe('info');
    });

    it('should render the validation async success message', () => {
      expect(component.find(InlineAlert).contains('some message')).toBe(true);
    });
  });
});
