import React from 'react';
import { shallow } from 'enzyme';

import DynamicLayout from '.';
import DynamicAlert from './alert';
import DynamicBox from './box';
import DynamicButton from './button';
import DynamicColumns from './columns';
import DynamicDecision from './decision';
import DynamicDivider from './divider';
import DynamicForm from './form';
import DynamicHeading from './heading';
import DynamicImage from './image';
import DynamicInfo from './info';
import DynamicParagraph from './paragraph';
import DynamicReview from './review';

describe('Given a component for rendering a dynamic layout', () => {
  let props;
  let component;
  let components;
  let onModelChange;
  let onAction;
  let onPersistAsync;

  const action = {
    url: '/exampe',
    method: 'GET',
    label: 'example',
  };

  const model = 'example';
  const isValid = true;
  const schema = {
    type: 'string',
  };
  const baseUrl = 'dynamic-layout-base-url';

  beforeEach(() => {
    onAction = jest.fn();
    onModelChange = jest.fn();
    onPersistAsync = jest.fn();
    props = {
      components,
      onAction,
      onModelChange,
      submitted: false,
      errors: {},
      onPersistAsync,
      baseUrl,
    };
  });

  describe('when there is an alert component', () => {
    beforeEach(() => {
      components = [{ type: 'alert', markdown: '' }];
      props = { ...props, components };
      component = shallow(<DynamicLayout {...props} />);
    });
    it('should render an alert', () => {
      expect(component.find(DynamicAlert)).toBeTruthy();
    });
    it('should pass the component data', () => {
      expect(component.find(DynamicAlert).prop('component')).toBe(components[0]);
    });
  });

  describe('when there is a box component', () => {
    beforeEach(() => {
      components = [{ type: 'box', components: [] }];
      props = { ...props, components };
      component = shallow(<DynamicLayout {...props} />);

      component.find(DynamicBox).simulate('action', action);
      component.find(DynamicBox).simulate('modelChange', model, isValid, schema);
    });

    it('should render a box', () => {
      expect(component.find(DynamicBox)).toBeTruthy();
    });
    it('should pass the component data', () => {
      expect(component.find(DynamicBox).prop('component')).toBe(components[0]);
    });
    it('should propogate actions to the layout consumer', () => {
      expect(onAction).toHaveBeenCalledWith(action);
    });
    it('should propogate model changes to the layout consumer', () => {
      expect(onModelChange).toHaveBeenCalledWith(model, isValid, schema);
    });
  });

  describe('when there is a button component', () => {
    beforeEach(() => {
      components = [{ type: 'button', action }];
      props = { ...props, components };
      component = shallow(<DynamicLayout {...props} />);

      component.find(DynamicButton).simulate('action', action);
    });
    it('should render a button', () => {
      expect(component.find(DynamicButton)).toBeTruthy();
    });
    it('should pass the component data', () => {
      expect(component.find(DynamicButton).prop('component')).toBe(components[0]);
    });
    it('should propogate actions to the layout consumer', () => {
      expect(onAction).toHaveBeenCalledWith(action);
    });
  });

  describe('when there is a columns component', () => {
    beforeEach(() => {
      components = [{ type: 'columns', left: [], right: [] }];
      props = { ...props, components };
      component = shallow(<DynamicLayout {...props} />);

      component.find(DynamicColumns).first().simulate('action', action);
      component.find(DynamicColumns).first().simulate('modelChange', model, isValid, schema);
    });

    it('should render a columns component', () => {
      expect(component.find(DynamicColumns).length).toBeTruthy();
    });
    it('should pass the component data', () => {
      expect(component.find(DynamicColumns).prop('component')).toBe(components[0]);
    });
    it('should propogate actions to the layout consumer', () => {
      expect(onAction).toHaveBeenCalledWith(action);
    });
    it('should propogate model changes to the layout consumer', () => {
      expect(onModelChange).toHaveBeenCalledWith(model, isValid, schema);
    });
  });

  describe('when there is a decision component', () => {
    beforeEach(() => {
      components = [{ type: 'decision', options: [] }];
      props = { ...props, components };
      component = shallow(<DynamicLayout {...props} />);

      component.find(DynamicDecision).simulate('action', action);
    });
    it('should render a decision', () => {
      expect(component.find(DynamicDecision)).toBeTruthy();
    });
    it('should pass the component data', () => {
      expect(component.find(DynamicDecision).prop('component')).toBe(components[0]);
    });
    it('should propogate actions to the layout consumer', () => {
      expect(onAction).toHaveBeenCalledWith(action);
    });
  });

  describe('when there is a divider component', () => {
    beforeEach(() => {
      components = [{ type: 'divider' }];
      props = { ...props, components };
      component = shallow(<DynamicLayout {...props} />);
    });
    it('should render a divider', () => {
      expect(component.find(DynamicDivider)).toBeTruthy();
    });
    it('should pass the component data', () => {
      expect(component.find(DynamicDivider).prop('component')).toBe(components[0]);
    });
  });

  describe('when there is a form component', () => {
    beforeEach(() => {
      components = [{ type: 'form', schema: {} }];
      props = { ...props, components };
      component = shallow(<DynamicLayout {...props} />);

      component.find(DynamicForm).simulate('modelChange', model, isValid, schema);
    });

    it('should render a form', () => {
      expect(component.find(DynamicForm)).toBeTruthy();
    });
    it('should pass the component data', () => {
      expect(component.find(DynamicForm).prop('component')).toBe(components[0]);
    });
    it('should propogate model changes to the layout consumer', () => {
      expect(onModelChange).toHaveBeenCalledWith(model, isValid, schema);
    });
  });

  describe('when there is a heading component', () => {
    beforeEach(() => {
      components = [{ type: 'heading', text: '' }];
      props = { ...props, components };
      component = shallow(<DynamicLayout {...props} />);
    });

    it('should render a heading', () => {
      expect(component.find(DynamicHeading)).toBeTruthy();
    });
    it('should pass the component data', () => {
      expect(component.find(DynamicHeading).prop('component')).toBe(components[0]);
    });
  });

  describe('when there is an image component', () => {
    beforeEach(() => {
      components = [{ type: 'image', url: '' }];
      props = { ...props, components };
      component = shallow(<DynamicLayout {...props} />);
    });

    it('should render an image', () => {
      expect(component.find(DynamicImage)).toBeTruthy();
    });
    it('should pass the component data', () => {
      expect(component.find(DynamicImage).prop('component')).toBe(components[0]);
    });
  });

  describe('when there is an info component', () => {
    beforeEach(() => {
      components = [{ type: 'info', markdown: '' }];
      props = { ...props, components };
      component = shallow(<DynamicLayout {...props} />);
    });

    it('should render a heading', () => {
      expect(component.find(DynamicInfo)).toBeTruthy();
    });
    it('should pass the component data', () => {
      expect(component.find(DynamicInfo).prop('component')).toBe(components[0]);
    });
  });

  describe('when there is a paragraph component', () => {
    beforeEach(() => {
      components = [{ type: 'paragraph', text: '' }];
      props = { ...props, components };
      component = shallow(<DynamicLayout {...props} />);
    });

    it('should render a paragraph', () => {
      expect(component.find(DynamicParagraph)).toBeTruthy();
    });
    it('should pass the component data', () => {
      expect(component.find(DynamicParagraph).prop('component')).toBe(components[0]);
    });
  });

  describe('when there is a review component', () => {
    beforeEach(() => {
      components = [{ type: 'review', definitions: [] }];
      props = { ...props, components };
      component = shallow(<DynamicLayout {...props} />);
      component.find(DynamicReview).simulate('action', action);
    });

    it('should render a review', () => {
      expect(component.find(DynamicReview)).toBeTruthy();
    });
    it('should pass the component data', () => {
      expect(component.find(DynamicReview).prop('component')).toBe(components[0]);
    });
    it('should propogate actions to the layout consumer', () => {
      expect(onAction).toHaveBeenCalledWith(action);
    });
  });
});
