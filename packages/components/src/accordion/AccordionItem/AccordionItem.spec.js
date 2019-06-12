import React from 'react';
import { shallow } from 'enzyme';

import AccordionItem from '.';
import Chevron from '../../common/Chevron';

describe('AccordionItem', () => {
  let component;
  let props;

  beforeEach(() => {
    props = { title: 'Hello', content: 'world!' };
    component = shallow(<AccordionItem {...props} />);
  });

  it('displays the title', () => {
    expect(getTitle().text()).toBe(props.title);
  });

  it('has content hidden by default and togglable on label click', () => {
    expect(contentShown()).toBe(false);
    clickLabel();
    expect(contentShown()).toBe(true);
    clickLabel();
    expect(contentShown()).toBe(false);
  });

  it('flips the chevron when toggled', () => {
    expect(getChevron().prop('flip')).toBe(false);
    clickLabel();
    expect(getChevron().prop('flip')).toBe(true);
    clickLabel();
    expect(getChevron().prop('flip')).toBe(false);
  });

  it('displays the content when its an HTML element', () => {
    const htmlElement = <h4>whoop</h4>;
    component.setProps({ content: htmlElement });
    clickLabel();
    expect(getContent().contains(htmlElement)).toBe(true);
  });

  const getTitle = () => component.find('h5');
  const getContent = () => component.find('label div').last();
  const getChevron = () => component.find(Chevron);
  const contentShown = () => getContent().contains(props.content);
  const clickLabel = () => component.find('label').simulate('click');
});
