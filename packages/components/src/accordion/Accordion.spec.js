import React from 'react';
import { shallow } from 'enzyme';

import Accordion from '.';
import AccordionItem from './AccordionItem';

describe('Accordion', () => {
  let component;
  let props;

  describe('when there are no items', () => {
    beforeEach(() => {
      component = createComponent({ items: [] });
    });

    it('renders empty list', () => {
      expect(component.find(AccordionItem)).toHaveLength(0);
    });
  });

  describe('when there are items', () => {
    beforeEach(() => {
      props = {
        items: [
          {
            title: 'a',
            content: 'b',
          },
          {
            title: 'c',
            content: <h1>I&apos;m a h1 element</h1>,
          },
        ],
      };
      component = createComponent(props);
    });

    it('renders all the items', () => {
      expect(component.find(AccordionItem)).toHaveLength(2);
    });

    it('passes title and content forward to AccordionItem', () => {
      const firstItem = component.find(AccordionItem).first();
      const secondItem = component.find(AccordionItem).at(1);
      expect(firstItem.prop('title')).toBe(props.items[0].title);
      expect(firstItem.prop('content')).toBe(props.items[0].content);
      expect(secondItem.prop('title')).toBe(props.items[1].title);
      expect(secondItem.prop('content')).toBe(props.items[1].content);
    });
  });

  describe('when an item is clicked', () => {
    const onClickMock = jest.fn();

    beforeEach(() => {
      props = {
        items: [
          {
            title: 'a',
            content: 'b',
          },
        ],
        onClick: onClickMock,
      };
      component = createComponent(props);
    });

    it('onOpen event fires then onClose event fires', () => {
      component.find(AccordionItem).simulate('click', 0);
      expect(onClickMock).toHaveBeenCalledWith(0);
    });
  });

  describe('when it defaults closed', () => {
    beforeEach(() => {
      props = {
        items: [
          {
            title: 'a',
            content: 'b',
          },
          {
            title: 'c',
            content: <h1>I&apos;m a h1 element</h1>,
          },
        ],
      };
      component = createComponent(props);
    });

    it('opens no item', () => {
      const firstItem = component.find(AccordionItem).first();
      const secondItem = component.find(AccordionItem).at(1);
      // eslint-disable-next-line eqeqeq
      expect(firstItem.prop('isOpen')).toEqual(false);
      expect(secondItem.prop('isOpen')).toEqual(false);
    });
  });

  describe('when it opens based on the index provided', () => {
    beforeEach(() => {
      props = {
        items: [
          {
            title: 'a',
            content: 'b',
          },
          {
            title: 'c',
            content: <h1>I&apos;m a h1 element</h1>,
          },
          {
            title: 'd',
            content: 'third item',
          },
        ],
        indexOpen: 2,
      };
      component = createComponent(props);
    });

    it('opens the selected accordion item', () => {
      const firstItem = component.find(AccordionItem).first();
      const thirdItem = component.find(AccordionItem).at(2);
      expect(firstItem.prop('isOpen')).toEqual(false);
      expect(thirdItem.prop('isOpen')).toEqual(true);
    });

    it('opens the selected accordion item when prop changes too', () => {
      const firstItem = component.find(AccordionItem).first();
      const thirdItem = component.find(AccordionItem).at(2);
      expect(firstItem.prop('isOpen')).toEqual(false);
      expect(thirdItem.prop('isOpen')).toEqual(true);

      props.indexOpen = 0;
      component.setProps(props, () => {
        const updatedFirstItem = component.find(AccordionItem).first();
        const updatedThirdItem = component.find(AccordionItem).at(2);
        expect(updatedFirstItem.prop('isOpen')).toEqual(true);
        expect(updatedThirdItem.prop('isOpen')).toEqual(false);
      });
    });
  });

  const createComponent = (p) => shallow(<Accordion {...p} />);
});
