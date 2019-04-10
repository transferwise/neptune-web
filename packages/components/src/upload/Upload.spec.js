import React from 'react';
import { shallow, mount } from 'enzyme';
import Upload from './';
import { CompleteStep, UploadImageStep, ProcessingStep } from './steps';
import { ANIMATION_DURATION_IN_MS } from '../processIndicator';

jest.useFakeTimers();
jest.mock('./utils/postData', () => ({
  postData: () => new Promise(resolve => resolve('ServerResponse')),
}));

jest.mock('./utils/asyncFileRead');
const { asyncFileRead } = require('./utils/asyncFileRead');

const TEST_FILE = new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' });
const ANIMATION_DELAY = ANIMATION_DURATION_IN_MS * 2;

const props = {
  animationDelay: 1000,
  csButtonText: 'csButtonText',
  csFailureText: 'csFailureText',
  csSuccessText: 'csSuccessText',
  csTooLargeMessage: 'csTooLargeMessage',
  maxSize: 5000000,
  onCancel: jest.fn(),
  onChange: jest.fn(),
  onFailure: jest.fn(),
  onStart: jest.fn(),
  onSuccess: jest.fn(),
  psButtonText: 'psButtonText',
  psFailureText: 'csFailureText',
  psProcessingText: 'psProcessingText',
  psSuccessText: 'csSuccessText',
  usAccept: 'image/*',
  usButtonText: 'Or Select File',
  usDropMessage: 'Drop file to start upload',
  usPlaceholder: 'Drag and drop a file less than 5MB',
};

const UPLOADIMAGE_STEP_PROPS = {
  fileDropped: expect.any(Function),
  isComplete: false,
  usAccept: props.usAccept,
  usButtonText: props.usButtonText,
  usDisabled: false,
  usHelpImage: '',
  usLabel: '',
  usPlaceholder: props.usPlaceholder,
};

const PROCESSING_STEP_PROPS = {
  isComplete: false,
  isError: false,
  isProcessing: true,
  isSuccess: false,
  onAnimationCompleted: expect.any(Function),
  onClear: expect.any(Function),
  psButtonText: props.psButtonText,
  psFailureText: props.psFailureText,
  psProcessingText: props.psProcessingText,
  psSuccessText: props.psSuccessText,
};

const COMPLETED_STEP_PROPS = {
  csButtonText: props.csButtonText,
  csFailureText: props.csFailureText,
  csSuccessText: props.csSuccessText,
  fileName: TEST_FILE.name,
  isComplete: true,
  isError: false,
  isImage: true,
  onClear: expect.any(Function),
  uploadedImage: 'data:image/png;base64,KOKMkOKWoV/ilqEp',
};

describe('Upload', () => {
  let component;
  beforeEach(() => {
    component = shallow(<Upload {...props} />);
    asyncFileRead.mockImplementation(() => new Promise(resolve => resolve('a value')));
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.clearAllTimers();
  });

  it('renders container', () => {
    expect(component.find('.droppable-md')).toHaveLength(1);
  });

  it('renders the UploadImageStep by default', () => {
    expect(component.find(UploadImageStep)).toHaveLength(1);
    expect(component.find(ProcessingStep)).toHaveLength(0);
    expect(component.find(CompleteStep)).toHaveLength(0);
    expect(component.find('.droppable-dropping-card')).toHaveLength(1);
  });

  it('renders the ProcessingStep when state is processing', () => {
    component.setState({ isProcessing: true });

    expect(component.find(UploadImageStep)).toHaveLength(0);
    expect(component.find(ProcessingStep)).toHaveLength(1);
    expect(component.find(CompleteStep)).toHaveLength(0);
    expect(component.find('.droppable-dropping-card')).toHaveLength(0);
  });

  it('renders the CompleteStep when state is completed', () => {
    component.setState({ isComplete: true });

    expect(component.find(UploadImageStep)).toHaveLength(0);
    expect(component.find(ProcessingStep)).toHaveLength(0);
    expect(component.find(CompleteStep)).toHaveLength(1);
    expect(component.find('.droppable-dropping-card')).toHaveLength(1);
  });

  describe('before file is dropped ', () => {
    it('renders the UploadImageStep with right props', () => {
      expect(component.find(UploadImageStep).props()).toEqual(UPLOADIMAGE_STEP_PROPS);
    });
  });

  describe('when file is dropped', () => {
    it('onStart is called with file', () => {
      component
        .instance()
        .fileDropped(TEST_FILE)
        .then(() => {
          expect(props.onStart).toHaveBeenCalledWith(TEST_FILE);
        });
    });

    it('step changes from UploadImageStep to ProcessingStep', done => {
      expect(component.find(UploadImageStep)).toHaveLength(1);
      expect(component.find(ProcessingStep)).toHaveLength(0);
      expect(component.find(CompleteStep)).toHaveLength(0);

      component
        .instance()
        .fileDropped(TEST_FILE)
        .then(() => {
          component.update();
          expect(component.find(UploadImageStep)).toHaveLength(0);
          expect(component.find(ProcessingStep)).toHaveLength(1);
          expect(component.find(CompleteStep)).toHaveLength(0);
          done();
        });
    });

    it('step changes from UploadImageStep to ProcessingStep with right props', done => {
      component
        .instance()
        .fileDropped(TEST_FILE)
        .then(() => {
          component.update();
          expect(component.find(ProcessingStep).props()).toEqual(PROCESSING_STEP_PROPS);
          done();
        });
    });
  });

  describe('when file is being processed', () => {
    it('step ProcessingStep is called with success props', done => {
      component
        .instance()
        .fileDropped(TEST_FILE)
        .then(() => {
          jest.runTimersToTime(props.animationDelay);
          component.update();
          expect(component.find(ProcessingStep).props()).toEqual({
            ...PROCESSING_STEP_PROPS,
            isSuccess: true,
          });
          done();
        });
    });

    it('step ProcessingStep is called with error props', done => {
      asyncFileRead.mockImplementation(() => new Promise((resolve, reject) => reject('An error')));

      component
        .instance()
        .fileDropped(TEST_FILE)
        .then(() => {
          jest.runTimersToTime(props.animationDelay);
          component.update();
          expect(component.find(ProcessingStep).props()).toEqual({
            ...PROCESSING_STEP_PROPS,
            isError: true,
          });
          done();
        });
    });
  });

  describe('when file is processed', () => {
    it('step changes from UploadImageStep to CompleteStep', done => {
      component = mount(<Upload {...props} />);
      expect(component.find(UploadImageStep)).toHaveLength(1);
      expect(component.find(ProcessingStep)).toHaveLength(0);
      expect(component.find(CompleteStep)).toHaveLength(0);

      component
        .instance()
        .fileDropped(TEST_FILE)
        .then(() => {
          jest.runTimersToTime(props.animationDelay + ANIMATION_DELAY);
          component.update();
          expect(component.find(UploadImageStep)).toHaveLength(0);

          expect(component.find(ProcessingStep)).toHaveLength(0);
          expect(component.find(CompleteStep)).toHaveLength(1);
          done();
        });
    });

    it('step CompleteStep is called with error props', done => {
      component = mount(<Upload {...props} />);
      asyncFileRead.mockImplementation(() => new Promise((resolve, reject) => reject('An error')));

      component
        .instance()
        .fileDropped(TEST_FILE)
        .then(async () => {
          jest.runTimersToTime(props.animationDelay + ANIMATION_DELAY);
          component.update();
          expect(component.find(CompleteStep).props()).toEqual({
            ...COMPLETED_STEP_PROPS,
            isComplete: true,
            isError: true,
            uploadedImage: null,
          });
          done();
        });
    });

    it('onSuccess is called with response when httpOptions are provided', done => {
      component = mount(<Upload {...props} httpOptions={{ url: 'a-url' }} />);

      component
        .instance()
        .fileDropped(TEST_FILE)
        .then(() => {
          jest.runTimersToTime(props.animationDelay + ANIMATION_DELAY);
          expect(props.onSuccess).toHaveBeenCalledWith('ServerResponse');
          done();
        });
    });
  });
});
