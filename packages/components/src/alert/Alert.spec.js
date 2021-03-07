import React from 'react';
import { shallow } from 'enzyme';

import Alert from './Alert';

describe('Alert', () => {
  const component = shallow(
    <Alert dismissed={false} className="a-class-name">
      Lorem ipsum dolor sit amet.
    </Alert>,
  );

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the given string provided as the children prop', () => {
    expect(component.text()).toContain('Lorem ipsum dolor sit amet.');
  });

  describe('default properties', () => {
    it('checks contact and default css classes', () => {
      expect(component.hasClass('alert')).toBe(true);
      expect(component.hasClass('alert-detach')).toBe(true);
      expect(component.hasClass('alert-info')).toBe(true);
    });

    it('checks that by default its not dismissible', () => {
      expect(component.find('button')).toHaveLength(0);
    });

    it('checks that by default its not small', () => {
      expect(component.hasClass('small')).toBe(false);
      expect(component.hasClass('p-x-2')).toBe(false);
      expect(component.hasClass('p-y-1')).toBe(false);
    });

    it('checks that by default its does not have arrow', () => {
      expect(component.hasClass('arrow')).toBe(false);
    });
  });

  describe('types of message', () => {
    it('checks warning type', () => {
      component.setProps({ type: Alert.Type.WARNING });

      expect(component.hasClass('alert')).toBe(true);
      expect(component.hasClass('alert-detach')).toBe(true);
      expect(component.hasClass('alert-warning')).toBe(true);
    });

    it('checks danger type', () => {
      component.setProps({ type: Alert.Type.ERROR });

      expect(component.hasClass('alert')).toBe(true);
      expect(component.hasClass('alert-detach')).toBe(true);
      expect(component.hasClass('alert-danger')).toBe(true);
    });

    it('checks success type', () => {
      component.setProps({ type: Alert.Type.SUCCESS });

      expect(component.hasClass('alert')).toBe(true);
      expect(component.hasClass('alert-detach')).toBe(true);
      expect(component.hasClass('alert-success')).toBe(true);
    });
  });

  describe('other UI configs like dismissible, small etc.', () => {
    it('checks dismiss button presents', () => {
      component.setProps({ dismissible: true, onDismiss: jest.fn() });

      expect(component.find('button')).toHaveLength(1);
    });

    it('checks for necessary CSS classes when it should be small', () => {
      component.setProps({ size: Alert.Size.SMALL });

      expect(component.hasClass('small')).toBe(true);
      expect(component.hasClass('p-x-2')).toBe(true);
      expect(component.hasClass('p-y-1')).toBe(true);
    });
  });

  describe('check arrow positioning', () => {
    it('checks left top arrow', () => {
      component.setProps({ arrow: Alert.ArrowPosition.TOP_LEFT });

      expect(component.hasClass('arrow')).toBe(true);
      expect(component.hasClass('arrow-left')).toBe(false);
    });

    it('checks center top arrow', () => {
      component.setProps({ arrow: Alert.ArrowPosition.TOP });

      expect(component.hasClass('arrow')).toBe(true);
      expect(component.hasClass('arrow-center')).toBe(true);
    });

    it('checks right top arrow', () => {
      component.setProps({ arrow: Alert.ArrowPosition.TOP_RIGHT });

      expect(component.hasClass('arrow')).toBe(true);
      expect(component.hasClass('arrow-right')).toBe(true);
    });

    it('checks left bottom arrow', () => {
      component.setProps({ arrow: Alert.ArrowPosition.BOTTOM_LEFT });

      expect(component.hasClass('arrow')).toBe(true);
      expect(component.hasClass('arrow-left')).toBe(true);
      expect(component.hasClass('arrow-bottom')).toBe(true);
    });

    it('checks center bottom arrow', () => {
      component.setProps({ arrow: Alert.ArrowPosition.BOTTOM });

      expect(component.hasClass('arrow')).toBe(true);
      expect(component.hasClass('arrow-center')).toBe(true);
      expect(component.hasClass('arrow-bottom')).toBe(true);
    });

    it('checks right bottom arrow', () => {
      component.setProps({ arrow: Alert.ArrowPosition.BOTTOM_RIGHT });

      expect(component.hasClass('arrow')).toBe(true);
      expect(component.hasClass('arrow-right')).toBe(true);
      expect(component.hasClass('arrow-bottom')).toBe(true);
    });
  });

  describe('check onDismiss callback', () => {
    const onDismiss = jest.fn();
    beforeEach(() => {
      component.setProps({ dismissible: true, onDismiss });
    });

    it('confirms that component is empty once user click dismiss button', () => {
      component.find('button').simulate('click');

      expect(onDismiss).toHaveBeenCalledTimes(1);
    });
  });
});
