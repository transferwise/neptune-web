import {
  addClickClassToDocumentOnIos,
  removeClickClassFromDocumentOnIos,
} from './documentIosClick';
import { isIosDevice } from '../deviceDetection';

jest.mock('../deviceDetection');

describe('Document ios click', () => {
  let add;
  let remove;

  beforeEach(() => {
    isIosDevice.mockReturnValue(false);
    global.document = {
      documentElement: {
        classList: {
          add: jest.fn(),
          remove: jest.fn(),
        },
      },
    };

    add = jest.spyOn(global.document.documentElement.classList, 'add');
    remove = jest.spyOn(global.document.documentElement.classList, 'remove');
  });

  it('does not add ios click to document if it is not ios device', () => {
    addClickClassToDocumentOnIos();
    expect(add).not.toBeCalled();
  });

  it('does not remove ios click from document if it is not ios device', () => {
    removeClickClassFromDocumentOnIos();
    expect(remove).not.toBeCalled();
  });

  it('does add ios click to document if it is ios device', () => {
    isIosDevice.mockReturnValue(true);
    addClickClassToDocumentOnIos();
    expect(add).toHaveBeenCalledWith('ios-click');
  });

  it('does remove ios click from document if it is ios device', () => {
    isIosDevice.mockReturnValue(true);
    removeClickClassFromDocumentOnIos();
    expect(remove).toBeCalledWith('ios-click');
  });
});
