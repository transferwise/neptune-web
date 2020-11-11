import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import withNextPortal from './withNextPortal';

jest.mock('react-dom');

describe('withNextPortal', () => {
  it('should return a function', () => {
    expect(typeof withNextPortal()).toBe('function');
  });

  it('should create a portal with the component', () => {
    ReactDOM.createPortal.mockImplementation(() => null);
    const props = {};
    const Component = withNextPortal(AnyComponent);
    const expected = mount(<AnyComponent {...props} />);
    mount(<Component {...props} />);
    expect(ReactDOM.createPortal).toBeCalled();
    const [comp, body] = ReactDOM.createPortal.mock.calls[0];
    expect(comp).toMatchObject(expected);
    expect(body).toMatchObject(document.body);
  });

  const AnyComponent = () => <div>Test div</div>;
});
