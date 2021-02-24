/* eslint-disable no-console */
import React from 'react';
import '@testing-library/jest-dom';
import { render, getByRole } from '../test-utils';
import InlineAlert from './InlineAlert';

describe('InlineAlert', () => {
  let component;
  let container;
  let getByText;

  const getAlert = (el) => getByRole(el, 'alert');
  const message = 'Your card is on its way.';

  describe('defaults', () => {
    beforeEach(() => {
      ({ container, getByText } = render(<InlineAlert>{message}</InlineAlert>));
      component = getAlert(container);
    });

    it('the message is rendered', () => {
      getByText(message);
    });

    it('will be of type info', () => {
      expect(component.className).toContain('alert-info');
    });

    it('has a top left arrow', () => {
      expect(component.className).toContain('arrow');
    });
  });

  describe('types', () => {
    const getComponentWithType = (type) => {
      ({ container } = render(<InlineAlert type={type}>{message}</InlineAlert>));
      return getAlert(container);
    };

    it('renders info', () => {
      component = getComponentWithType(InlineAlert.Type.INFO);
      expect(component.className).toContain('alert-info');
    });

    it('renders success', () => {
      component = getComponentWithType(InlineAlert.Type.SUCCESS);
      expect(component.className).toContain('alert-success');
    });

    it('renders error', () => {
      component = getComponentWithType(InlineAlert.Type.ERROR);
      expect(component.className).toContain('alert-danger');
    });

    it('renders warning', () => {
      component = getComponentWithType(InlineAlert.Type.WARNING);
      expect(component.className).toContain('alert-warning');
    });
  });
});
