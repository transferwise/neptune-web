import { addClassAndTriggerReflow, removeClass } from '.';

class FakeNode {
  constructor() {
    this.scrollTopAccessorMock = jest.fn();
    this.classList = {
      add: jest.fn(),
      remove: jest.fn(),
    };
  }

  get scrollTop() {
    this.scrollTopAccessorMock();
    return 0;
  }
}

describe('Select dom helpers', () => {
  it('can add classes and trigger a reflow', () => {
    const node = new FakeNode();
    expect(node.scrollTopAccessorMock).not.toHaveBeenCalled();
    expect(node.classList.add).not.toHaveBeenCalled();
    addClassAndTriggerReflow(node, 'some-class');
    expect(node.scrollTopAccessorMock).toHaveBeenCalled();
    expect(node.classList.add).toHaveBeenCalledWith('some-class');
  });

  it('can remove classes', () => {
    const node = new FakeNode();
    expect(node.classList.remove).not.toHaveBeenCalled();
    removeClass(node, 'some-kinda-class');
    expect(node.classList.remove).toHaveBeenCalledWith('some-kinda-class');
  });
});
