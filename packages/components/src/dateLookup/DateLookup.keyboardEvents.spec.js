import React from 'react';
import { mount } from 'enzyme';

import KEY_CODES from '../common/keyCodes';
import { fakeKeyDownEventForKey } from '../common/fakeEvents';

import DateLookup from '.';

describe('DateLookup (keyboard events)', () => {
  const date = new Date(2018, 11, 27);
  let component;
  let props;

  beforeEach(() => {
    props = { value: date, onChange: jest.fn() };
    component = mount(<DateLookup {...props} />);
  });

  it('can be opened by LEFT arrow', () => {
    pressKey(KEY_CODES.LEFT);
    expect(component.instance().state.open).toBe(true);
  });

  it('can be opened by UP arrow', () => {
    pressKey(KEY_CODES.UP);
    expect(component.instance().state.open).toBe(true);
  });

  it('can be opened by RIGHT arrow', () => {
    pressKey(KEY_CODES.RIGHT);
    expect(component.instance().state.open).toBe(true);
  });

  it('can be opened by DOWN arrow', () => {
    pressKey(KEY_CODES.DOWN);
    expect(component.instance().state.open).toBe(true);
  });

  it('can be closed by pressing ESCAPE', () => {
    component.setState({ open: true });
    pressKey(KEY_CODES.ESCAPE);
    expect(component.instance().state.open).toBe(false);
  });

  describe('when open and in day mode', () => {
    beforeEach(() => {
      component.setState({ open: true, mode: 'day' });
    });

    it('moves 1 day back by pressing LEFT', () => {
      pressKey(KEY_CODES.LEFT);
      onChangeCalledWith(new Date(2018, 11, 26));
    });

    it('moves 7 days back by pressing UP', () => {
      pressKey(KEY_CODES.UP);
      onChangeCalledWith(new Date(2018, 11, 20));
    });

    it('moves 1 day forward by pressing RIGHT', () => {
      pressKey(KEY_CODES.RIGHT);
      onChangeCalledWith(new Date(2018, 11, 28));
    });

    it('moves 7 day forward by pressing DOWN', () => {
      pressKey(KEY_CODES.DOWN);
      onChangeCalledWith(new Date(2019, 0, 3));
    });
  });

  describe('when open and in month mode', () => {
    beforeEach(() => {
      component.setState({ open: true, mode: 'month' });
    });

    it('moves 1 month back by pressing LEFT', () => {
      pressKey(KEY_CODES.LEFT);
      onChangeCalledWith(new Date(2018, 10, 27));
    });

    it('moves 4 months back by pressing UP', () => {
      pressKey(KEY_CODES.UP);
      onChangeCalledWith(new Date(2018, 7, 27));
    });

    it('moves 1 month forward by pressing RIGHT', () => {
      pressKey(KEY_CODES.RIGHT);
      onChangeCalledWith(new Date(2019, 0, 27));
    });

    it('moves 4 months forward by pressing DOWN', () => {
      pressKey(KEY_CODES.DOWN);
      onChangeCalledWith(new Date(2019, 3, 27));
    });
  });

  describe('when open and in year mode', () => {
    beforeEach(() => {
      component.setState({ open: true, mode: 'year' });
    });

    it('moves 1 year back by pressing LEFT', () => {
      pressKey(KEY_CODES.LEFT);
      onChangeCalledWith(new Date(2017, 11, 27));
    });

    it('moves 4 years back by pressing UP', () => {
      pressKey(KEY_CODES.UP);
      onChangeCalledWith(new Date(2014, 11, 27));
    });

    it('moves 1 year forward by pressing RIGHT', () => {
      pressKey(KEY_CODES.RIGHT);
      onChangeCalledWith(new Date(2019, 11, 27));
    });

    it('moves 4 year forward by pressing DOWN', () => {
      pressKey(KEY_CODES.DOWN);
      onChangeCalledWith(new Date(2022, 11, 27));
    });
  });

  describe('when min and max provided', () => {
    beforeEach(() => {
      component.setState({
        open: true,
        mode: 'day',
        min: new Date(2018, 11, 26),
        max: new Date(2018, 11, 28),
      });
    });

    it('makes sure that date is >= min', () => {
      pressKey(KEY_CODES.LEFT);
      onChangeCalledWith(new Date(2018, 11, 26));
      pressKey(KEY_CODES.LEFT);
      onChangeCalledWith(new Date(2018, 11, 26));
    });

    it('makes sure that date is <= max', () => {
      pressKey(KEY_CODES.RIGHT);
      onChangeCalledWith(new Date(2018, 11, 28));
      pressKey(KEY_CODES.RIGHT);
      onChangeCalledWith(new Date(2018, 11, 28));
    });
  });

  const pressKey = key => {
    component.simulate('keyDown', fakeKeyDownEventForKey(key));
  };

  const onChangeCalledWith = date => {
    expect(props.onChange).toHaveBeenLastCalledWith(date);
  };
});
