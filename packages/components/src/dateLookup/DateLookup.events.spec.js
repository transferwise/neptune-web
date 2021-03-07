import React from 'react';
import { mount } from 'enzyme';

import DateLookup from '.';

describe('DateLookup (events)', () => {
  const date = new Date(2018, 11, 27);
  const min = new Date(2018, 11, 26);
  const max = new Date(2018, 11, 28);
  let component;
  let props;
  let originalAddEventListener;
  let originalRemoveEventListener;

  beforeEach(() => {
    originalAddEventListener = global.document.addEventListener;
    originalRemoveEventListener = global.document.removeEventListener;
    global.document.addEventListener = jest.fn();
    global.document.removeEventListener = jest.fn();
    props = {
      value: date,
      min,
      max,
      size: 'lg',
      locale: 'xx',
      placeholder: 'Asd..',
      label: 'Date..',
      onChange: jest.fn(),
    };
    component = mount(<DateLookup {...props} />);
  });

  afterEach(() => {
    global.document.addEventListener = originalAddEventListener;
    global.document.removeEventListener = originalRemoveEventListener;
  });

  describe('on open', () => {
    beforeEach(() => {
      component.setState({ mode: 'year' });
      component.instance().open();
    });

    it('sets mode to day and opens', () => {
      expect(component.instance().state.open).toBe(true);
      expect(component.instance().state.mode).toBe('day');
    });

    it('adds outside click event handler', () => {
      expect(global.document.addEventListener).toHaveBeenCalledWith(
        'click',
        component.instance().handleOutsideClick,
        true,
      );
    });
  });

  describe('on close', () => {
    beforeEach(() => {
      component.setState({ open: true });
      component.instance().close();
    });

    it('sets state to closed', () => {
      expect(component.instance().state.open).toBe(false);
    });

    it('removes outside click event handler', () => {
      expect(global.document.removeEventListener).toHaveBeenCalledWith(
        'click',
        component.instance().handleOutsideClick,
        true,
      );
    });
  });

  describe('on outside click', () => {
    beforeEach(() => {
      component.instance().open();
    });

    it('closes', () => {
      component = mount(<DateLookup {...props} />);
      component.instance().handleOutsideClick({ target: '' });
      expect(component.instance().state.open).toBe(false);
    });
  });

  it('updates view month and year', () => {
    component.instance().handleViewDateUpdate({ month: 1, year: 1990 });
    const { viewMonth, viewYear } = component.instance().state;
    expect(viewMonth).toBe(1);
    expect(viewYear).toBe(1990);
  });

  it('uses view month and year from state when not provided', () => {
    component.instance().handleViewDateUpdate({});
    const { viewMonth, viewYear } = component.instance().state;
    expect(viewMonth).toBe(11);
    expect(viewYear).toBe(2018);
  });
});
