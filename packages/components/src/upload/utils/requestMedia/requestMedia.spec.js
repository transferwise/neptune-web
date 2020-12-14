import { requestMedia } from '.';

const mediaRequest = { allowedMimeTypes: ['images/jpeg'] };

describe('requestMedia', () => {
  describe('when microapps is not available in windows', () => {
    it('rejects with an error', () => {
      expect.assertions(1);
      return requestMedia(mediaRequest).catch((e) =>
        expect(e).toEqual(`microapps must be available in window to use Spot Platform's Media API`),
      );
    });
  });

  describe('when microapps is available in windows', () => {
    const originalMicroApps = window.microapps;
    const image64 = {
      bytes:
        'iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX/AAAZ4gk3AAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC',
      mimeType: 'image/jpeg',
    };
    const microappsRequestMedia = jest.fn().mockImplementation(() => Promise.resolve(image64));

    beforeAll(() => {
      window.microapps = { requestMedia: microappsRequestMedia };
    });

    afterAll(() => {
      window.microapps = originalMicroApps;
    });

    it(`it calls microapps' requestMedia API when it's available in windows`, () => {
      requestMedia(mediaRequest);
      expect(microappsRequestMedia).toHaveBeenCalledWith(mediaRequest);
    });

    it('resolves with a blob file on success', () => {
      expect.assertions(1);
      return requestMedia(mediaRequest).then((file) => expect(file instanceof Blob).toBe(true));
    });
  });
});
