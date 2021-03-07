import { postData } from '.';

const HTTPOPTIONS = { url: 'a-url' };
const DATA = 'some-data';

describe('postData', () => {
  afterEach(() => {
    global.fetch.mockClear();
  });

  it('should work with resolve', async () => {
    const RESOLVE_RESPONSE = { ok: true, someOtherStuff: 'someOtherStuff' };
    global.fetch = jest.fn(() => Promise.resolve(RESOLVE_RESPONSE));

    expect.assertions(1);

    await expect(postData(HTTPOPTIONS, DATA)).resolves.toEqual(RESOLVE_RESPONSE);
  });

  it('should throw when call fails', async () => {
    const REJECT_RESPONSE = { status: '500', statusText: 'Rejected' };
    global.fetch = jest.fn(() => Promise.reject(REJECT_RESPONSE));

    expect.assertions(1);
    await expect(postData(HTTPOPTIONS, DATA)).rejects.toEqual(REJECT_RESPONSE);
  });

  it('should throw an Error when API returns an error code', async () => {
    expect.assertions(1);

    const ERROR_RESPONSE = { status: '500', statusText: 'Internal server error', ok: false };
    global.fetch = jest.fn(() => Promise.resolve(ERROR_RESPONSE));

    await expect(postData(HTTPOPTIONS, DATA)).rejects.toEqual(expect.any(Error));
  });

  it('should include the full response in the Error thrown', async () => {
    expect.assertions(1);

    const ERROR_RESPONSE = { status: '500', statusText: 'Internal server error', ok: false };
    global.fetch = jest.fn(() => Promise.resolve(ERROR_RESPONSE));

    try {
      await postData(HTTPOPTIONS, DATA);
    } catch (error) {
      expect(error.response).toEqual(ERROR_RESPONSE);
    }
  });

  it('should pass additional form data to request body', () => {
    const data = { file: 'file', profileId: '1' };
    const mockFetch = jest.fn(() => Promise.resolve({ ok: true }));
    global.fetch = mockFetch;

    postData(HTTPOPTIONS, data);

    expect(mockFetch.mock.calls[0][1].body).toEqual(data);
  });

  it('should override `Content-type` and add any custom headers to the request', () => {
    const CUSTOM_CONTENT_TYPE = 'foo';
    const CUSTOM_LANGUAGE = 'hu';

    const mockFetch = jest.fn(() => Promise.resolve({ ok: true }));
    global.fetch = mockFetch;

    postData(
      {
        ...HTTPOPTIONS,
        headers: { 'Content-type': CUSTOM_CONTENT_TYPE, 'Accept-language': CUSTOM_LANGUAGE },
      },
      DATA,
    );

    expect(mockFetch.mock.calls[0][1].headers['Content-type']).toEqual(CUSTOM_CONTENT_TYPE);
    expect(mockFetch.mock.calls[0][1].headers['Accept-language']).toEqual(CUSTOM_LANGUAGE);
  });

  it('should set method to `POST` by default', () => {
    const mockFetch = jest.fn(() => Promise.resolve({ ok: true }));
    global.fetch = mockFetch;

    postData(HTTPOPTIONS, DATA);

    expect(mockFetch.mock.calls[0][1].method).toEqual('POST');
  });

  it('should not set `Content-type` by default', () => {
    const mockFetch = jest.fn(() => Promise.resolve({ ok: true }));
    global.fetch = mockFetch;

    postData(HTTPOPTIONS, DATA);

    expect(mockFetch.mock.calls[0][1]['Content-type']).toBeUndefined();
  });
});
