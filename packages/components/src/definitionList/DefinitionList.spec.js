import React from 'react';
import { shallow } from 'enzyme';
import DefinitionList from './DefinitionList';

import DefinitionListItem from './DefinitionListItem';

describe('DefinitionList', () => {
  let props;
  let component;

  const LAYOUTS = ['vertical', 'horizontal', 'justified'];

  describe('when given a vertical layout', () => {
    beforeEach(() => {
      props = {
        layout: LAYOUTS[0],
        model: { key: '2000-01-01T00:00:00Z' },
        fields: {
          key: {
            title: 'Date label',
            type: 'date',
          },
        },
      };
      component = shallow(<DefinitionList {...props} />);
    });

    it('should have an element with col-sm-6 class', () => {
      const rowElements = component.find('.col-sm-6');
      expect(rowElements.length).toBe(1);
    });
    it('should have an element with row-equal-height class', () => {
      const rowElements = component.find('.row-equal-height');
      expect(rowElements.length).toBe(1);
    });
    it('should not add horizontal nor justified layout classes to the dl element', () => {
      expect(component.find('.dl-horizontal').length).toBe(0);
      expect(component.find('.text-xs-left').length).toBe(0);
      expect(component.find('.text-sm-right').length).toBe(0);
    });
    it('does not have dl element in bold', () => {
      expect(component.find('.font-weight-bold').length).toBe(0);
      expect(component.find('.h3').length).toBe(0);
      expect(component.find('.definition-list__field-value-bold').length).toBe(0);
    });
  });

  describe('when given a horizontal layout', () => {
    beforeEach(() => {
      props = {
        layout: LAYOUTS[1],
        model: { key: '2000-01-01T00:00:00Z' },
        fields: {
          key: {
            title: 'Date label',
            type: 'date',
          },
        },
      };
      component = shallow(<DefinitionList {...props} />);
    });

    it('should not have an element with col-sm-6 class', () => {
      const rowElements = component.find('.col-sm-6');
      expect(rowElements.length).toBe(0);
    });
    it('should not have an element with row-equal-height class', () => {
      const rowElements = component.find('.row-equal-height');
      expect(rowElements.length).toBe(0);
    });
    it('should add a dl-horizontal and no justified layout classes to the dl element', () => {
      expect(component.find('.dl-horizontal').length).toBe(1);
      expect(component.find('.text-xs-left').length).toBe(0);
      expect(component.find('.text-sm-right').length).toBe(0);
    });
    it('does not have dl element in bold', () => {
      expect(component.find('.font-weight-bold').length).toBe(0);
      expect(component.find('.h3').length).toBe(0);
      expect(component.find('.definition-list__custom-field-value').length).toBe(0);
    });
  });

  describe('when given a justified layout', () => {
    beforeEach(() => {
      props = {
        layout: LAYOUTS[2],
        model: { key: '2000-01-01T00:00:00Z' },
        fields: {
          key: {
            title: 'Date label',
            type: 'date',
          },
        },
      };
      component = shallow(<DefinitionList {...props} />);
    });

    it('should not have an element with col-sm-6 class', () => {
      const rowElements = component.find('.col-sm-6');
      expect(rowElements.length).toBe(0);
    });
    it('should not have an element with row-equal-height class', () => {
      const rowElements = component.find('.row-equal-height');
      expect(rowElements.length).toBe(0);
    });
    it('should add all justified layout classes to the dl element', () => {
      expect(component.find('.dl-horizontal').length).toBe(1);
      expect(component.find('.text-xs-left').length).toBe(1);
      expect(component.find('.text-sm-right').length).toBe(1);
    });

    it('does not have dl element in bold', () => {
      expect(component.find('.font-weight-bold').length).toBe(0);
      expect(component.find('.h3').length).toBe(0);
      expect(component.find('.definition-list__custom-field-value').length).toBe(0);
    });
    it('has dl element in bold if bold paramater is true', () => {
      props = {
        layout: LAYOUTS[2],
        model: { key: '2000-01-01T00:00:00Z' },
        fields: {
          key: {
            title: 'Date label',
            type: 'date',
            bold: true,
          },
        },
      };
      component = shallow(<DefinitionList {...props} />);
      expect(component.find('.font-weight-bold').length).toBe(1);
      expect(component.find('.h3').length).toBe(1);
      expect(component.find('.definition-list__custom-field-value').length).toBe(1);
    });
  });

  it('passes data to DefinitionListItem', () => {
    props = {
      model: { key: '2000-01-01T00:00:00Z' },
      fields: {
        key: {
          title: 'Date label',
          type: 'date',
        },
      },
    };
    component = shallow(<DefinitionList {...props} />);

    expect(component.find(DefinitionListItem).prop('field')).toEqual({
      control: 'date',
      format: 'date',
      title: 'Date label',
      type: 'string',
    });
    expect(component.find(DefinitionListItem).prop('value')).toEqual('2000-01-01T00:00:00Z');
    expect(component.find(DefinitionListItem).prop('locale')).toEqual('en-GB');
  });
});
