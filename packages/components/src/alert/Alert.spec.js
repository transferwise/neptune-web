import React from 'react';
import { shallow } from 'enzyme';

import Alert, { AlertType, AlertSize, AlertArrowPosition } from './Alert';

describe('Alert', () => {
  const props = {
    children: 'Lorem ipsum dolor sit amet.',
  };
  let component;

  beforeEach(() => {
    component = shallow(<Alert {...props} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the given string provided as the children prop', () => {
    expect(component.text()).toContain(props.children);
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
      component.setProps({ type: AlertType.Warning });

      expect(component.hasClass('alert')).toBe(true);
      expect(component.hasClass('alert-detach')).toBe(true);
      expect(component.hasClass('alert-warning')).toBe(true);
    });

    it('checks danger type', () => {
      component.setProps({ type: AlertType.Error });

      expect(component.hasClass('alert')).toBe(true);
      expect(component.hasClass('alert-detach')).toBe(true);
      expect(component.hasClass('alert-danger')).toBe(true);
    });

    it('checks success type', () => {
      component.setProps({ type: AlertType.Success });

      expect(component.hasClass('alert')).toBe(true);
      expect(component.hasClass('alert-detach')).toBe(true);
      expect(component.hasClass('alert-success')).toBe(true);
    });
  });

  describe('other UI configs like dismissible, small etc.', () => {
    it('checks dismiss button presents', () => {
      component.setProps({ dismissible: true });

      expect(component.find('button')).toHaveLength(1);
    });

    it('checks for necessary CSS classes when it should be small', () => {
      component.setProps({ size: AlertSize.Small });

      expect(component.hasClass('small')).toBe(true);
      expect(component.hasClass('p-x-2')).toBe(true);
      expect(component.hasClass('p-y-1')).toBe(true);
    });
  });

  describe('check arrow positioning', () => {
    it('checks left top arrow', () => {
      component.setProps({ arrow: AlertArrowPosition.UpLeft });

      expect(component.hasClass('arrow')).toBe(true);
      expect(component.hasClass('arrow-left')).toBe(false);
    });

    it('checks center top arrow', () => {
      component.setProps({ arrow: AlertArrowPosition.UpCenter });

      expect(component.hasClass('arrow')).toBe(true);
      expect(component.hasClass('arrow-center')).toBe(true);
    });

    it('checks right top arrow', () => {
      component.setProps({ arrow: AlertArrowPosition.UpRight });

      expect(component.hasClass('arrow')).toBe(true);
      expect(component.hasClass('arrow-right')).toBe(true);
    });

    it('checks left bottom arrow', () => {
      component.setProps({ arrow: AlertArrowPosition.DownLeft });

      expect(component.hasClass('arrow')).toBe(true);
      expect(component.hasClass('arrow-left')).toBe(true);
      expect(component.hasClass('arrow-bottom')).toBe(true);
    });

    it('checks center bottom arrow', () => {
      component.setProps({ arrow: AlertArrowPosition.DownCenter });

      expect(component.hasClass('arrow')).toBe(true);
      expect(component.hasClass('arrow-center')).toBe(true);
      expect(component.hasClass('arrow-bottom')).toBe(true);
    });

    it('checks right bottom arrow', () => {
      component.setProps({ arrow: AlertArrowPosition.DownRight });

      expect(component.hasClass('arrow')).toBe(true);
      expect(component.hasClass('arrow-right')).toBe(true);
      expect(component.hasClass('arrow-bottom')).toBe(true);
    });
  });

  describe('check dismiss feature', () => {
    beforeEach(() => {
      component.setProps({ dismissible: true });
    });

    it('confirms that component is empty once user click dismiss button', () => {
      component.find('button').simulate('click');

      expect(component.html()).toBe(null);
    });
  });
});
