import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import SnackbarAppendingToBody, { Snackbar, CSS_TRANSITION_DURATION } from './Snackbar';
import SnackbarProvider, { SnackbarConsumer } from './SnackbarProvider';

describe('Snackbar', () => {
  const timeout = 1000;
  let props;
  let component;
  let snackbar;
  let buttonTrigger;

  beforeEach(() => {
    jest.useFakeTimers();
    props = {
      text: 'hello, i am a snack',
      timestamp: Date.now(),
      timeout,
    };

    const Container = () => (
      <SnackbarConsumer>
        {({ createSnackbar }) => (
          <button type="button" className="button-trigger" onClick={() => createSnackbar(props)}>
            Trigger
          </button>
        )}
      </SnackbarConsumer>
    );

    component = mount(
      <SnackbarProvider timeout={timeout}>
        <Container />
      </SnackbarProvider>,
    );
    snackbar = () => component.find(Snackbar);
    buttonTrigger = () => component.find('.button-trigger');
  });

  it('is appended to body', async () => {
    const createPortal = jest.spyOn(ReactDOM, 'createPortal');
    expect(createPortal).not.toHaveBeenCalled();
    mount(<SnackbarAppendingToBody {...props} />);

    expect(createPortal).toBeCalledTimes(1);
    /** Using toBeCalledWith was not matching properly */
    const [comp, body] = ReactDOM.createPortal.mock.calls[0];
    expect(comp).toMatchObject(snackbar());
    expect(body).toMatchObject(document.body);
    jest.clearAllMocks();
  });

  it('accepts element as text', async () => {
    const componentWithNode = mount(
      <SnackbarProvider timeout={timeout}>
        <SnackbarConsumer>
          {({ createSnackbar }) => (
            <button
              type="button"
              className="button-trigger"
              onClick={() => createSnackbar({ text: <span>test</span> })}
            >
              Trigger
            </button>
          )}
        </SnackbarConsumer>
      </SnackbarProvider>,
    );
    const snackbarWithNode = () => componentWithNode.find(Snackbar);
    componentWithNode.find('.button-trigger').simulate('click');
    expect(snackbarWithNode().text()).toContain('test');

    expect(snackbarWithNode().html()).toMatchSnapshot();
  });

  it('displays a single snack for the given duration with the given text', async () => {
    expect(snackbar().text()).not.toContain(props.text);
    buttonTrigger().simulate('click');
    buttonTrigger().simulate('click');
    buttonTrigger().simulate('click');
    buttonTrigger().simulate('click');
    expect(snackbar().text()).toContain(props.text);
    expect(snackbar().length).toBe(1);

    jest.advanceTimersByTime(timeout + CSS_TRANSITION_DURATION + 500);

    expect(snackbar().text()).not.toContain(props.text);
  });

  it('adjusts the theme if passed', async () => {
    const componentWithNode = mount(
      <SnackbarProvider timeout={timeout}>
        <SnackbarConsumer>
          {({ createSnackbar }) => (
            <button
              type="button"
              className="button-trigger"
              onClick={() => createSnackbar({ text: <span>test</span>, theme: 'dark' })}
            >
              Trigger
            </button>
          )}
        </SnackbarConsumer>
      </SnackbarProvider>,
    );
    const snackbarWithNode = () => componentWithNode.find(Snackbar);
    componentWithNode.find('.button-trigger').simulate('click');
    expect(snackbarWithNode().html()).toMatchSnapshot();
  });
});
