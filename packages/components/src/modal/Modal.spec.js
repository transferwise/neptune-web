import React from 'react';
import { createPortal } from 'react-dom';
import { shallow } from 'enzyme';

import ModalAppendingToBody, { Modal } from './Modal';

import Backdrop from './Backdrop';
import ModalDialog from './ModalDialog';
import WithInTransition from './WithInTransition';

jest.mock('react-dom');

describe('Modal', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Modal title="Some title" body="Some body" onClose={jest.fn()} />);
  });

  it('is appended to body', () => {
    expect(createPortal).not.toBeCalled();

    const props = {
      open: true,
      title: 'Some title',
      body: 'Some body',
      footer: 'Some footer',
      onClose: jest.fn(),
    };
    shallow(<ModalAppendingToBody {...props} />);

    expect(createPortal).toBeCalledWith(<Modal {...props} />, document.body);
  });

  it('has backdrop that transitions in when modal opens', () => {
    component.setProps({ open: false });
    expect(
      backdropParent().matchesElement(
        <WithInTransition>
          <Backdrop />
        </WithInTransition>,
      ),
    ).toBe(true);

    component.setProps({ open: true });
    expect(
      backdropParent().matchesElement(
        <WithInTransition isIn>
          <Backdrop />
        </WithInTransition>,
      ),
    ).toBe(true);
  });

  it('has modal dialog that transitions in when modal opens', () => {
    const dialogProps = {
      title: 'Some title',
      body: 'Some body',
      footer: 'Some footer',
      onClose: jest.fn(),
    };
    component.setProps(dialogProps);

    component.setProps({ open: false });
    expect(
      dialogParent().matchesElement(
        <WithInTransition>
          <ModalDialog {...dialogProps} />
        </WithInTransition>,
      ),
    ).toBe(true);

    component.setProps({ open: true });
    expect(
      dialogParent().matchesElement(
        <WithInTransition isIn>
          <ModalDialog {...dialogProps} />
        </WithInTransition>,
      ),
    ).toBe(true);
  });

  function backdropParent() {
    return component.find(Backdrop).parent();
  }

  function dialogParent() {
    return component.find(ModalDialog).parent();
  }
});
