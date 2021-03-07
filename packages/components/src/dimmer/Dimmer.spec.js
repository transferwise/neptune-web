import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import DimmerAppendingToBody, { Dimmer, EXIT_ANIMATION } from './Dimmer';

const handleOnEnter = () => jest.fn();
const handleOnClose = () => jest.fn();
const handleOnClick = () => jest.fn();
const handleOnKeyDown = () => jest.fn();

jest.mock('react-dom');
jest.mock('../common');

describe('Dimmer', () => {
  let component;
  const props = {
    open: true,
    fadeContentOnExit: false,
    fadeContentOnEnter: false,
    onClose: jest.fn(),
  };

  beforeEach(() => {
    ReactDOM.createPortal = jest.fn();
    ReactDOM.createPortal.mockReturnValue(<Dimmer {...props} />);
    component = shallow(<Dimmer {...props} />);
  });

  afterEach(() => {
    ReactDOM.createPortal.mockClear();
    jest.clearAllMocks();
  });

  it('is appended to body', () => {
    expect(ReactDOM.createPortal).not.toBeCalled();
    mount(<DimmerAppendingToBody {...props} />);

    expect(ReactDOM.createPortal).toBeCalledTimes(1);
    /** Using toBeCalledWith was not matching properly */
    const [comp, body] = ReactDOM.createPortal.mock.calls[0];
    expect(comp).toMatchObject(component);
    expect(body).toMatchObject(document.body);
  });

  it('renders with right props', () => {
    component = mount(<Dimmer {...props} />);
    expect(component.find(Dimmer)).toHaveLength(1);
    expect(component.find(Dimmer).props()).toEqual({ ...props, children: null });
  });

  it('renders CSSTransition with right props', () => {
    const cssTransition = component.find('CSSTransition');
    expect(cssTransition).toHaveLength(1);

    expect(JSON.stringify(cssTransition.props())).toEqual(
      JSON.stringify({
        in: true,
        appear: true,
        timeout: {
          enter: 0,
          exit: EXIT_ANIMATION,
        },

        classNames: {
          enter: '',
          enterDone: 'dimmer--enter-done',
          exit: 'dimmer--exit',
        },
        onEnter: handleOnEnter,
        onExited: handleOnClose,
        unmountOnExit: true,
        children: (
          <div
            role="presentation"
            className="dimmer"
            onClick={handleOnClick}
            onKeyDown={handleOnKeyDown}
            children={null} // eslint-disable-line react/no-children-prop
          />
        ),
      }),
    );
  });

  it('fade content on enter if fadeContentOnEnter is true', () => {
    component.setProps({ fadeContentOnEnter: true });
    const cssTransition = component.find('CSSTransition');
    expect(cssTransition.prop('classNames')).toEqual({
      enter: 'dimmer--enter-fade',
      enterDone: 'dimmer--enter-done dimmer--enter-fade',
      exit: 'dimmer--exit',
    });
  });

  it('fade content on exit if fadeContentOnExit is true', () => {
    component.setProps({ fadeContentOnExit: true });
    const cssTransition = component.find('CSSTransition');
    expect(cssTransition.prop('classNames')).toEqual({
      enter: '',
      enterDone: 'dimmer--enter-done',
      exit: 'dimmer--exit dimmer--exit-fade',
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
      const event = { target: 'test', currentTarget: 'test' };

      expect(props.onClose).not.toBeCalled();
      clickDimmer(event);
      expect(props.onClose).toBeCalledWith(event);
    });

    it('closes on `esc` keypress', () => {
      expect(props.onClose).not.toBeCalled();
      component.find('CSSTransition').simulate('enter');

      pressEscapeOnComponent();
      expect(props.onClose).toBeCalled();
    });

    function clickDimmer(event) {
      component.find('.dimmer').simulate('click', event);
    }

    function pressEscapeOnComponent() {
      documentEventCallbacks.keydown({ key: 'Escape' });
    }
  });
});
