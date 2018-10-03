import React, { Fragment } from 'react';
import { shallow, mount } from 'enzyme';
import { addModalOpenBodyClass, removeModalOpenBodyClass } from './DOMOperations';

import ModalDialog from '.';

jest.mock('./DOMOperations');

describe('ModalDialog', () => {
  let component;
  beforeEach(() => {
    component = shallow(<ModalDialog title="Some title" body="Some body" onClose={jest.fn()} />);
  });

  // Mainly snapshot tests with contents being checked in snapshots.
  describe('renders', () => {
    it('default dialog', () => {
      expect(component).toMatchSnapshot();
    });

    it('with small size when passed down the props', () => {
      component.setProps({ size: 'sm' });
      expect(component).toMatchSnapshot();
    });

    it('with medium sized when passed down the props', () => {
      component.setProps({ size: 'md' });
      expect(component).toMatchSnapshot();
    });

    it('with large sized when passed down the props', () => {
      component.setProps({ size: 'lg' });
      expect(component).toMatchSnapshot();
    });

    it('with title', () => {
      component.setProps({
        title: 'A title',
      });

      expect(component).toMatchSnapshot();
    });

    it('with body content', () => {
      component.setProps({
        body: <p>Some paragraph text</p>,
      });

      expect(component).toMatchSnapshot();
    });

    it('with no footer when `footer` not specified as prop', () => {
      component.setProps({
        footer: null,
      });

      expect(component).toMatchSnapshot();
    });

    it('with footer content when `footer` specified as prop', () => {
      component.setProps({
        footer: <button>Some button</button>,
      });

      expect(component).toMatchSnapshot();
    });
  });

  // Mainly behaviour tests
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

    it('closes on `esc` keypress', () => {
      jest.clearAllMocks();
      const onClose = jest.fn();
      component = mount(<ModalDialog title="Some title" body="Some body" onClose={onClose} />);

      expect(onClose).not.toBeCalled();
      pressEscapeOnComponent();
      expect(onClose).toBeCalled();
    });

    it('executes modal open operations on mount', () => {
      jest.clearAllMocks();

      expect(addModalOpenBodyClass).not.toBeCalled();
      component = shallow(<ModalDialog title="Some title" body="Some body" onClose={jest.fn()} />);
      expect(addModalOpenBodyClass).toBeCalled();
    });

    it('executes modal close operations on unmount', () => {
      expect(removeModalOpenBodyClass).not.toBeCalled();
      component.unmount();
      expect(removeModalOpenBodyClass).toBeCalled();
    });

    it('removes event listener on unmount', () => {
      jest.clearAllMocks();
      const onClose = jest.fn();
      component = mount(<ModalDialog title="Some title" body="Some body" onClose={onClose} />);
      jest.spyOn(component.instance(), 'onEscape');
      const listener = component.instance().onEscape;
      component.unmount();
      pressEscapeOnBody();
      expect(listener).not.toBeCalled();
    });

    function clickCloseButton() {
      component.find('.close').simulate('click');
    }

    function pressEscapeOnComponent() {
      component.simulate('keyDown');
      documentEventCallbacks.keydown({ key: 'Escape' });
      component.update();
    }

    function pressEscapeOnBody() {
      documentEventCallbacks.keydown({ key: 'Escape', target: document });
      component.update();
    }
  });
});
