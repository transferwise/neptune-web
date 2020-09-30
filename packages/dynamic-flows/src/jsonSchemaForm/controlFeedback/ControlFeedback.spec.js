import React from 'react';
import { shallow } from 'enzyme';

import { Alert } from '@transferwise/components';
import ControlFeedback from '.';

describe('Given a component for rendering feedback next to controls', () => {
  let component;
  let props;
  let states;

  const schema = {
    type: 'string',
    help: {
      message: 'Message',
    },
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
      expect(component.find(Alert).length).toBe(0);
    });
  });

  describe('when initialised with an error', () => {
    beforeEach(() => {
      component.setProps({ errors: 'There was an external error' });
    });

    it('should show an alert', () => {
      const alert = component.find(Alert);
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
      expect(component.find(Alert).length).toBe(0);
    });
  });

  describe('when focused', () => {
    beforeEach(() => {
      component.setProps({ focused: true });
    });

    it('should show an alert for help messages', () => {
      const alert = component.find(Alert);
      expect(alert.length).toBe(1);
      expect(alert.prop('type')).toBe('info');
    });

    it('should show the supplied message', () => {
      expect(component.find(Alert).contains(schema.help.message)).toBe(true);
    });
  });

  describe('when blurred and changed', () => {
    beforeEach(() => {
      component.setProps({ blurred: true, changed: true });
    });

    it('should show a validation alert', () => {
      const alert = component.find(Alert);
      expect(alert.length).toBe(1);
      expect(alert.prop('type')).toBe('error');
    });

    it('should show validation messages for validation keys', () => {
      expect(component.find(Alert).contains(schema.validationMessages.minLength)).toBe(true);
    });

    it('should not show validation messages for missing validation keys', () => {
      expect(component.find(Alert).contains(schema.validationMessages.maxLength)).toBe(false);
    });
  });

  describe('when focused, blurred and changed', () => {
    beforeEach(() => {
      component.setProps({ focused: true, blurred: true, changed: true });
    });

    it('should show a validation alert', () => {
      const alert = component.find(Alert);
      expect(alert.length).toBe(1);
      expect(alert.prop('type')).toBe('error');
    });

    it('should show validation messages for validation keys', () => {
      expect(component.find(Alert).contains(schema.validationMessages.minLength)).toBe(true);
    });

    it('should not show help messages', () => {
      expect(component.find(Alert).contains(schema.help.message)).toBe(false);
    });
  });

  describe('when submitted', () => {
    beforeEach(() => {
      component.setProps({ submitted: true });
    });

    it('should show a validation alert', () => {
      const alert = component.find(Alert);
      expect(alert.length).toBe(1);
      expect(alert.prop('type')).toBe('error');
    });

    it('should show validation messages for validation keys', () => {
      expect(component.find(Alert).contains(schema.validationMessages.minLength)).toBe(true);
    });

    it('should not show validation messages for missing validation keys', () => {
      expect(component.find(Alert).contains(schema.validationMessages.maxLength)).toBe(false);
    });
  });
});
