import React from 'react';
import { shallow } from 'enzyme';

import { DefinitionList } from '@transferwise/components';

import DynamicReview from '.';

describe('Given a component for dynamically rendering reviews', () => {
  let component;
  let onAction;
  let spec;

  beforeEach(() => {
    spec = {
      component: 'review',
      definitions: [
        {
          label: 'a',
          value: 'b',
        },
      ],
      action: {
        label: 'Edit',
        url: '/example',
        method: 'GET',
      },
      orientation: 'horizontal',
      margin: 'md',
    };
    onAction = jest.fn();
    component = shallow(<DynamicReview component={spec} onAction={onAction} />);
  });

  it('should format the items and pass to the DefinitionList', () => {
    expect(component.find(DefinitionList).prop('definitions')).toEqual([
      {
        key: '0',
        title: 'a',
        value: 'b',
      },
    ]);
  });

  it('should use the action label for the action link', () => {
    expect(component.find('a').contains(spec.action.label)).toBe(true);
  });

  describe('when the action link is clicked', () => {
    beforeEach(() => {
      component.find('a').simulate('click', { preventDefault: () => {} });
    });
    it('should broadcast onAction', () => {
      expect(onAction).toHaveBeenCalledWith(spec.action);
    });
  });
});
