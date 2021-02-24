import React from 'react';
import { render, fireEvent, cleanup } from '../../../test-utils';

import MediaUploadStep from '.';

describe('mediaUploadStep', () => {
  const defaultProps = {
    fileDropped: jest.fn(),
    isComplete: false,
    usAccept: '*',
    usButtonText: '',
    usDisabled: false,
    usLabel: '',
    usHelpImage: '',
    usPlaceholder: '',
  };

  const renderMediaUploadStep = (props = {}) =>
    render(<MediaUploadStep {...defaultProps} {...props} />);

  const originalMicroApps = window.microapps;
  const image64 = {
    bytes:
      'iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX/AAAZ4gk3AAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC',
    mimeType: 'image/jpeg',
  };
  const requestMedia = jest.fn().mockImplementation(() => Promise.resolve(image64));

  beforeAll(() => {
    window.microapps = { requestMedia };
  });

  afterAll(() => {
    window.microapps = originalMicroApps;
  });

  afterEach(() => {
    cleanup();
  });

  it('renders help image passed as url string', () => {
    const { getByAltText } = renderMediaUploadStep({
      usHelpImage: 'usHelpImage',
      usLabel: 'usLabel',
    });
    expect(getByAltText('usLabel')).toBeInTheDocument();
  });

  it('renders help images passed as image node', () => {
    const usHelpImage = (
      <span role="img" aria-label="rocket">
        🚀
      </span>
    );

    const { getByLabelText } = renderMediaUploadStep({ usHelpImage });
    expect(getByLabelText('rocket')).toBeInTheDocument();
  });

  it('renders label', () => {
    const { getByText } = renderMediaUploadStep({ usLabel: 'usLabel' });
    expect(getByText('usLabel')).toBeInTheDocument();
  });

  it('renders placeholder', () => {
    const { getByText } = renderMediaUploadStep({ usPlaceholder: 'usPlaceholder' });
    expect(getByText('usPlaceholder')).toBeInTheDocument();
  });

  it('renders buttonText', () => {
    const { getByText } = renderMediaUploadStep({ usButtonText: 'usButtonText' });
    expect(getByText('usButtonText')).toBeInTheDocument();
  });

  it(`calls microapps' requestMedia API to get file while upload button is clicked`, () => {
    const allowedMimeTypes = ['image/jpeg', 'video/*', 'application/pdf'];
    const { getByText } = renderMediaUploadStep({ usButtonText: 'usButtonText' });
    expect(requestMedia).not.toHaveBeenCalled();
    fireEvent.click(getByText('usButtonText'));
    expect(requestMedia).toHaveBeenCalledWith({ allowedMimeTypes });
  });
});
