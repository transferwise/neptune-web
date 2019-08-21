import React from 'react';
import { mount, shallow } from 'enzyme';

import Modal from './Modal';
import Dimmer from '../dimmer';
import { fakeEvent } from '../common/fakeEvents';

jest.mock('../dimmer', () => () => 'Dimmer');

describe('Modal', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Modal body="Some body" onClose={jest.fn()} open />);
  });

  it('has Dimmer with prop open set correctly', () => {
    component.setProps({ open: false });
    expect(dimmer().prop('open')).toBe(false);
    component.setProps({ open: true });
    expect(dimmer().prop('open')).toBe(true);
  });

  describe('renders', () => {
    it('default dialog', () => {
      expect(modal()).toHaveLength(1);
    });

    it('with right size when passed down the props', () => {
      component.setProps({ size: 'sm' });
      expect(modalDialog().hasClass('modal-np-sm')).toBe(true);
      component.setProps({ size: 'md' });
      expect(modalDialog().hasClass('modal-np-md')).toBe(true);
      component.setProps({ size: 'lg' });
      expect(modalDialog().hasClass('modal-np-lg')).toBe(true);
    });

    it('with title when title is provided', () => {
      expect(modalTitle().text()).toBe('');
      component.setProps({ title: 'A title' });

      expect(modalTitle()).toHaveLength(1);
      expect(modalTitle().text()).toBe('A title');
    });

    it('with a custom class if classname is provided', () => {
      component.setProps({ className: 'a-custom-className' });
      expect(modal().hasClass('a-custom-className')).toBe(true);
    });

    it('with some random other props', () => {
      component.setProps({ someRandomProp: 'thing', someOtherRandomProp: 'other thing' });

      expect(modal().prop('someRandomProp')).toBe('thing');
      expect(modal().prop('someOtherRandomProp')).toBe('other thing');
    });

    it('with body content', () => {
      component.setProps({ body: <p>Some paragraph text</p> });

      expect(modalBody().text()).toBe('Some paragraph text');
    });

    it('with no footer when `footer` not specified as prop', () => {
      component.setProps({ footer: null });
      expect(modalFooter()).toHaveLength(0);
    });

    it('with footer content when `footer` specified as prop', () => {
      component.setProps({ footer: <button>Some button</button> });

      expect(modalFooter()).toHaveLength(1);
    });

    describe('header', () => {
      it('with divider if title is provided', () => {
        expect(modalHeader().hasClass('modal--withoutborder')).toBe(true);
        component.setProps({ title: 'Some title' });
        expect(modalHeader().hasClass('modal--withoutborder')).toBe(false);
      });

      it('with divider if no-Divider class is provided', () => {
        component.setProps({ title: 'Some title' });
        expect(modalHeader().hasClass('modal--withoutborder')).toBe(false);
        component.setProps({ className: 'no-divider' });
        expect(modalHeader().hasClass('modal--withoutborder')).toBe(true);
      });
    });

    describe('content', () => {
      it('with compact class if compact class is provided', () => {
        component.setProps({ className: '' });
        expect(modalContent().hasClass('modal-np-compact')).toBe(false);
        component.setProps({ className: 'compact' });
        expect(modalContent().hasClass('modal-np-compact')).toBe(true);
      });

      it('with no title class if title is not provided', () => {
        component.setProps({ title: 'a title' });
        expect(modalContent().hasClass('modal-np-no-title')).toBe(false);
        component.setProps({ title: '' });
        expect(modalContent().hasClass('modal-np-no-title')).toBe(true);
      });
    });
  });

  describe('behaviourally', () => {
    let originalAddEventListener;
    let documentEventCallbacks;

    beforeEach(() => {
      originalAddEventListener = global.document.addEventListener;
      documentEventCallbacks = {};
      global.document.addEventListener = jest.fn((name, cb) => {
        documentEventCallbacks[name] = cb;
      });
    });

    afterEach(() => {
      global.document.addEventListener = originalAddEventListener;
    });

    it('calls close handler on close button click', () => {
      const onClose = jest.fn();
      component.setProps({ onClose });

      expect(onClose).not.toBeCalled();
      clickCloseButton();
      expect(onClose).toBeCalled();
    });

    it('calls close handler if click outside the content and closeOnClick is set to true', () => {
      const onClose = jest.fn();
      component.setProps({ onClose, closeOnClick: false });
      clickOutsideDialog();
      expect(onClose).not.toBeCalled();
      component.setProps({ closeOnClick: true });
      clickOutsideDialog();
      expect(onClose).toBeCalled();
    });

    it('closes on `esc` keypress', () => {
      const onClose = jest.fn();
      component = mount(<Modal title="Some title" body="Some body" onClose={onClose} open />);
      expect(onClose).not.toBeCalled();
      pressEscapeOnComponent();
      expect(onClose).toBeCalled();
    });

    it('closes on `esc` keypress on document', () => {
      const onClose = jest.fn();
      component = mount(<Modal title="Some title" body="Some body" onClose={onClose} open />);
      expect(onClose).not.toBeCalled();
      pressEscapeOnBody();
      expect(onClose).toBeCalled();
    });

    const clickCloseButton = () => {
      component.find('.close').simulate('click');
    };

    const clickOutsideDialog = () => {
      modal().simulate('click', fakeEvent());
    };

    const pressEscapeOnComponent = () => {
      component.simulate('keyDown');
      documentEventCallbacks.keydown({ key: 'Escape' });
    };

    const pressEscapeOnBody = () => {
      documentEventCallbacks.keydown({ key: 'Escape', target: document });
    };
  });

  const modal = () => component.find('.modal-np');
  const modalDialog = () => component.find('.modal-np-dialog');
  const modalHeader = () => component.find('.modal-np-header');
  const modalTitle = () => component.find('.modal-np-title');
  const modalContent = () => component.find('.modal-np-content');
  const modalBody = () => component.find('.modal-np-body');
  const modalFooter = () => component.find('.modal-np-footer');

  // For some reason Dimmer gets rendered as Component so this is the best way I found to access it.
  const dimmer = () => component.at(0);
});
