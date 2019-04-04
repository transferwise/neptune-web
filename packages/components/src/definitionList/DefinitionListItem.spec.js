import React from 'react';
import { shallow } from 'enzyme';
import { formatNumber } from '@transferwise/formatting';
import DefinitionListItem from './DefinitionListItem';

describe('DefinitionListItem', () => {
  let props;
  let locale;
  let value;
  let component;
  let definitionListItem;

  describe('when given a text field', () => {
    beforeEach(() => {
      props = {
        value: 'ABCD',
        field: {
          control: 'text',
          displayFormat: '** - **',
          refreshRequirementsOnChange: true,
          title: 'Text',
          type: 'string',
          width: 'md',
        },
      };
      component = shallow(<DefinitionListItem {...props} />);
      definitionListItem = component.find('span');
    });

    it('should display the formatted text value', () => {
      expect(definitionListItem.text()).toBe('AB - CD');
    });
  });

  describe('when given a number field', () => {
    beforeEach(() => {
      value = 1234;
      props = {
        value,
        locale,
        field: {
          title: 'Number',
          type: 'number',
          width: 'md',
          refreshRequirementsOnChange: true,
          control: 'number',
        },
      };
      component = shallow(<DefinitionListItem {...props} />);
      definitionListItem = component.find('span');
    });

    it('should display the formatted number value', () => {
      expect(definitionListItem.text()).toBe(formatNumber(value));
    });
  });

  describe('when given a date field', () => {
    beforeEach(() => {
      props = {
        value: '2000-12-20T00:00:00.000Z',
        field: {
          title: 'Date label',
          type: 'date',
          control: 'date',
        },
      };
      component = shallow(<DefinitionListItem {...props} />);
      definitionListItem = component.find('span');
    });

    it('should display the formatted date value', () => {
      expect(definitionListItem.text()).toBe('20/12/2000');
    });
  });

  describe('when given a select field', () => {
    beforeEach(() => {
      props = {
        value: '2',
        field: {
          title: 'Select label',
          type: 'select',
          control: 'select',
          values: [
            {
              value: '1',
              label: 'One',
            },
            {
              value: '2',
              label: 'Two',
            },
          ],
        },
      };
      component = shallow(<DefinitionListItem {...props} />);
      definitionListItem = component.find('span');
    });

    it('should display the selected option value', () => {
      expect(definitionListItem.text()).toBe('Two');
    });
  });

  describe('when given a radio field', () => {
    beforeEach(() => {
      props = {
        value: '2',
        field: {
          title: 'Radio label',
          type: 'radio',
          control: 'select',
          values: [
            {
              value: '1',
              label: 'One',
            },
            {
              value: '2',
              label: 'Two',
            },
          ],
        },
      };
      component = shallow(<DefinitionListItem {...props} />);
      definitionListItem = component.find('span');
    });

    it('should display the selected radio value', () => {
      expect(definitionListItem.text()).toBe('Two');
    });
  });

  describe('when given a checkbox field', () => {
    beforeEach(() => {
      props = {
        value: true,
        field: {
          title: 'Checkbox label',
          type: 'boolean',
          control: 'checkbox',
        },
      };
      component = shallow(<DefinitionListItem {...props} />);
      definitionListItem = component.find('span');
    });

    it('should display the boolean', () => {
      expect(definitionListItem.text()).toBe('true');
    });
  });

  describe('when given a password field', () => {
    beforeEach(() => {
      props = {
        value: 'qwe123',
        field: {
          title: 'Password label',
          type: 'string',
          control: 'password',
        },
      };
      component = shallow(<DefinitionListItem {...props} />);
      definitionListItem = component.find('span');
    });

    it('should display the password masked', () => {
      expect(definitionListItem.text()).toBe('******');
    });
  });

  describe('when given a file', () => {
    beforeEach(() => {
      props = {
        value: 'qwe123',
        field: {
          title: 'A File',
          type: 'file',
          control: 'file',
        },
      };
      component = shallow(<DefinitionListItem {...props} />);
      definitionListItem = component.find('img');
    });

    it('should display the value as source', () => {
      expect(definitionListItem.prop('src')).toBe('qwe123');
    });
  });
});
