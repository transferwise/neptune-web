import React from 'react';
import { shallow } from 'enzyme';

import AccordionItem from '.';
import Chevron from '../../chevron';

const { Orientation } = Chevron;

describe('AccordionItem', () => {
  let component;
  const props = {
    title: 'Hello',
    content: 'world!',
    initiallyOpen: false,
    onClick: jest.fn(),
  };

  it('renders the icon', () => {
    component = shallow(
      <AccordionItem {...props} icon={<div className="test-icon">i am an icon</div>} />,
    );

    expect(component.find('.test-icon').text()).toBe('i am an icon');
  });

  describe('when closed', () => {
    beforeEach(() => {
      component = shallow(<AccordionItem {...props} />);
    });

    it('displays the title', () => {
      expect(getTitle().text()).toBe(props.title);
    });

    it('does have class closed', () => {
      expect(contentClosed()).toHaveLength(1);
    });

    it('chevron points down', () => {
      expect(getChevron().prop('orientation')).toEqual(Orientation.BOTTOM);
    });

    it('still has hidden content', () => {
      const htmlElement = <h4>whoop</h4>;
      component.setProps({ content: htmlElement });
    });

    it('removes close class on click', () => {
      expect(contentClosed()).toHaveLength(1);
      clickButton();
      expect(contentClosed()).toHaveLength(0);
    });
  });

  describe('when open', () => {
    beforeEach(() => {
      component = shallow(<AccordionItem {...props} initiallyOpen />);
    });

    it('displays the title', () => {
      expect(getTitle().text()).toBe(props.title);
    });

    it('does not have class closed', () => {
      expect(contentClosed()).toHaveLength(0);
    });

    it('chevron points up', () => {
      expect(getChevron().prop('orientation')).toBe(Orientation.TOP);
    });

    it('displays the content when its an HTML element', () => {
      const htmlElement = <h4>whoop</h4>;
      component.setProps({ content: htmlElement });
    });
  });

  const getTitle = () => component.find('.h5');
  const getChevron = () => component.find(Chevron);
  const contentClosed = () => component.find('.closed');
  const clickButton = () => component.find('button').simulate('click');
});
