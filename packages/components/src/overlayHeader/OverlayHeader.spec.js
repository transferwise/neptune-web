import React from 'react';
import { mount } from 'enzyme';
import Logo from '../flowNavigation/logo';

import OverlayHeader from '.';

describe('Overlay header', () => {
  let component;
  let props;

  function logo() {
    return component.find(Logo);
  }

  function avatar() {
    return component.find('AvatarWrapper');
  }

  function closeButton() {
    return component.find('.tw-close-button');
  }

  function closeButtonWithAvatar() {
    return closeButton().hasClass('close-button-with-avatar');
  }

  function bottomBorderHidden() {
    return component.find('div.tw-flow-navigation--done');
  }

  beforeEach(() => {
    props = {
      avatar: { url: 'https://github.com/transferwise.png' },
      profileType: 'BUSINESS',
      onClose: jest.fn(),
    };

    component = mount(<OverlayHeader {...props} />);
  });

  it('passes avatar url and profile type to avatar', () => {
    expect(avatar().length).toBe(1);
    expect(avatar().props()).toEqual({
      url: props.avatar.url,
      profileType: props.profileType,
    });
    expect(closeButtonWithAvatar()).toBe(true);
  });

  it(`doesn't show avatar if avatar is no provided`, () => {
    expect(avatar().length).toBe(1);
    component.setProps({ avatar: null });
    expect(avatar().length).toBe(0);
  });

  it('calls onClose callback when close button clicked', () => {
    expect(props.onClose).not.toHaveBeenCalled();
    closeButton().simulate('click');
    expect(props.onClose).toHaveBeenCalled();
  });

  it('hides the close button if onClose is not defined', () => {
    component.setProps({ onClose: undefined });
    expect(closeButton().exists()).toBe(false);
  });

  it('inverts the logo if theme is dark', () => {
    expect(logo().prop('theme')).toBe(OverlayHeader.Theme.LIGHT);
    component.setProps({ theme: OverlayHeader.Theme.DARK });
    expect(logo().prop('theme')).toBe(OverlayHeader.Theme.DARK);
  });

  it('removes the border if no avatar is provided', () => {
    expect(bottomBorderHidden()).toHaveLength(0);
    component.setProps({ avatar: null });
    expect(bottomBorderHidden()).toHaveLength(1);
  });
});
