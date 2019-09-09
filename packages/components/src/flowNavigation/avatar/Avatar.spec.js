import React from 'react';
import { shallow } from 'enzyme';

import Avatar from './';

describe('Avatar', () => {
  let component;
  let props;
  let savedImage;

  beforeEach(() => {
    props = {
      url: '',
      profileType: 'BUSINESS',
    };

    component = shallow(<Avatar {...props} />);
  });

  it('renders an icon for a business profile', () => {
    component.setProps({ profileType: 'BUSINESS' });
    expect(component.find('.icon').hasClass('icon-bank')).toBe(true);
    expect(component.find('.icon').hasClass('icon-profile')).toBe(false);
    expect(component.find('img').length).toBe(0);
  });

  it('renders a profile icon when no image for a personal profile', () => {
    component.setProps({ profileType: 'PERSONAL' });
    expect(component.find('.icon').hasClass('icon-profile')).toBe(true);
    expect(component.find('.icon').hasClass('icon-bank')).toBe(false);
    expect(component.find('img').length).toBe(0);
  });

  it('renders an image when available for a personal profile', () => {
    const url = 'https://example.com';
    component.setProps({ profileType: 'PERSONAL', url });
    expect(component.find('.icon').length).toBe(1);
    expect(component.find('.circle').hasClass('tw-avatar--with-image')).toBe(true);
    expect(component.find('img').length).toBe(1);
  });

  fit('hides the image element if it fails to load', () => {
    const url = 'dud-url';
    component.setProps({ profileType: 'PERSONAL', url });
    const image = component.find('img');
    image.props().onError();

    expect(component.find('.icon').length).toBe(1);
    expect(component.find('.circle').hasClass('tw-avatar--with-image')).toBe(false);
    expect(component.find('img').length).toBe(0);
  });

  afterEach(() => {
    global.Image = savedImage;
  });
});
