import React from 'react';
import { shallow } from 'enzyme';

import Avatar from './';

describe('Avatar', () => {
  let component;
  let props;
  let fakeImageInstance;
  let savedImage;

  beforeEach(() => {
    props = {
      url: '',
      profileType: 'BUSINESS',
    };
    savedImage = global.Image;
    global.Image = class {
      constructor() {
        fakeImageInstance = this;
        this.fakeListeners = [];
        this.src = null;
      }

      set onload(func) {
        this.fakeListeners.push(func);
      }

      triggerFakeOnloadListeners() {
        this.fakeListeners.forEach(func => func.call(this));
      }
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
    expect(component.find('.circle').hasClass('tw-avatar--with-image')).toBe(false);
    expect(component.find('img').length).toBe(0);

    expect(fakeImageInstance.src).toEqual(url);
    fakeImageInstance.triggerFakeOnloadListeners();
    component.update();
    expect(component.find('.icon').length).toBe(0);
    expect(component.find('.circle').hasClass('tw-avatar--with-image')).toBe(true);
    expect(component.find('img').prop('src')).toBe(url);
  });

  afterEach(() => {
    global.Image = savedImage;
  });
});
