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
    isOpen: false,
    index: 1,
    onClick: jest.fn(),
  };

  describe('when closed', () => {
    beforeEach(() => {
      component = shallow(<AccordionItem {...props} />);
    });

    it('displays the title', () => {
      expect(getTitle().text()).toBe(props.title);
    });

    it(`does have class closed`, () => {
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
      clickLabel();
      expect(props.onClick).toHaveBeenCalledWith(1);
    });
  });

  describe('when open', () => {
    beforeEach(() => {
      component = shallow(<AccordionItem {...props} isOpen />);
    });

    it('displays the title', () => {
      expect(getTitle().text()).toBe(props.title);
    });

    it(`doesn't have class closed`, () => {
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

  const getTitle = () => component.find('h5');
  const getChevron = () => component.find(Chevron);
  const contentClosed = () => component.find('.closed');
  const clickLabel = () => component.find('label').simulate('click');
});
