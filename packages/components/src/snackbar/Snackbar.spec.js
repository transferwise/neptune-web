import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import SnackbarAppendingToBody, { Snackbar, CSS_TRANSITION_DURATION } from '../snackbar/Snackbar';
import SnackbarProvider, { SnackbarConsumer } from '../snackbar/SnackbarProvider';

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
      timeout: 4500,
    };

    const Container = () => (
      <SnackbarConsumer>
        {({ createSnackbar }) => (
          <button className="button-trigger" onClick={() => createSnackbar(props)}>
            Trigger
          </button>
        )}
      </SnackbarConsumer>
    );

    component = mount(
      <SnackbarProvider timeout={1000}>
        <Container />
      </SnackbarProvider>,
    );
    snackbar = () => component.find(Snackbar);
    buttonTrigger = () => component.find('.button-trigger');
  });

  it('is appended to body', () => {
    const createPortal = jest.spyOn(ReactDOM, 'createPortal');

    expect(createPortal).not.toHaveBeenCalled();
    shallow(<SnackbarAppendingToBody {...props} />);
    expect(createPortal).toBeCalledWith(<Snackbar {...props} />, document.body);
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

  it('does not update Snackbar when no text is passed', async () => {
    const onDidUpdate = jest.fn();
    Snackbar.prototype.componentDidUpdate = onDidUpdate;

    expect(onDidUpdate).toHaveBeenCalledTimes(0);

    buttonTrigger().simulate('click');
    expect(onDidUpdate).toHaveBeenCalledTimes(1);

    props.text = '';
    buttonTrigger().simulate('click');
    buttonTrigger().simulate('click');
    expect(onDidUpdate).toHaveBeenCalledTimes(1);

    props.text = 'doge';
    buttonTrigger().simulate('click');
    expect(onDidUpdate).toHaveBeenCalledTimes(2);
  });
});
