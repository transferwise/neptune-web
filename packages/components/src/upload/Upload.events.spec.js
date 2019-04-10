import React from 'react';
import { shallow } from 'enzyme';
import Upload from './';

describe('Upload (events)', () => {
  let component;
  const props = {
    onCancel: jest.fn(),
    onChange: jest.fn(),
    onFailure: jest.fn(),
    onStart: jest.fn(),
    onSuccess: jest.fn(),
  };

  describe('on shallow', () => {
    beforeEach(() => {
      jest.restoreAllMocks();
    });

    it('calls onDragEnter on dragenter event', () => {
      const onDragEnterSpy = jest
        .spyOn(Upload.prototype, 'onDragEnter')
        .mockImplementation(() => jest.fn());
      component = shallow(<Upload {...props} />);
      component.find('.droppable').simulate('dragenter', { e: 'event' });
      expect(onDragEnterSpy).toHaveBeenCalledWith({ e: 'event' });
    });

    it('calls onDrop on drop event', () => {
      const onDropSpy = jest.spyOn(Upload.prototype, 'onDrop').mockImplementation(() => jest.fn());
      component = shallow(<Upload {...props} />);
      component.find('.droppable').simulate('drop', { e: 'event' });
      expect(onDropSpy).toHaveBeenCalledWith({ e: 'event' });
    });

    it('calls onDragLeave on dragleave event', () => {
      const onDragLeaveSpy = jest
        .spyOn(Upload.prototype, 'onDragLeave')
        .mockImplementation(() => jest.fn());
      component = shallow(<Upload {...props} />);
      component.find('.droppable').simulate('dragleave', { e: 'event' });
      expect(onDragLeaveSpy).toHaveBeenCalledWith({ e: 'event' });
    });

    it('increments dragCounter on dragenter', () => {
      component = shallow(<Upload {...props} />);
      component.find('.droppable').simulate('dragenter', new Event('event'));
      expect(component.instance().dragCounter).toEqual(1);
    });

    it('decrements dragCounter on dragleave', () => {
      component = shallow(<Upload {...props} />);
      component.find('.droppable').simulate('dragleave', new Event('event'));
      expect(component.instance().dragCounter).toEqual(-1);
    });

    it('reset dragCounter on drop', () => {
      component = shallow(<Upload {...props} />);
      component.find('.droppable').simulate('dragenter', new Event('event'));
      expect(component.instance().dragCounter).toEqual(1);
      component.find('.droppable').simulate('drop', new Event('event'));
      expect(component.instance().dragCounter).toEqual(0);
    });
  });
});
