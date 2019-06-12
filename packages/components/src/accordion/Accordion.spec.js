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
            content: <h1>I'm a h1 element</h1>,
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
      expect(firstItem.prop('title')).toBe(props.items[0].title);
      expect(firstItem.prop('content')).toBe(props.items[0].content);
    });
  });

  const createComponent = props => shallow(<Accordion {...props} />);
});
