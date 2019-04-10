import React from 'react';
import { postData } from './';
import fetch from 'jest-fetch-mock';

const HTTPOPTIONS = { url: 'a-url' };
const DATA = 'some-data';

function mockFetch(data) {
  return jest.fn().mockImplementation(() =>
    Promise.resolve({
      ok: true,
      json: () => data,
    }),
  );
}

describe('postData', () => {
  afterEach(() => {
    global.fetch.mockClear();
  });

  it('works with resolves', async () => {
    const RESOLVE_RESPONSE = { ok: true, someOtherStuff: 'someOtherStuff' };
    global.fetch = jest.fn(() => new Promise(resolve => resolve(RESOLVE_RESPONSE)));

    expect.assertions(1);

    await expect(postData(HTTPOPTIONS, DATA)).resolves.toEqual(RESOLVE_RESPONSE);
  });

  it('works with rejects', async () => {
    const REJECT_RESPONSE = { status: '500', statusText: 'Rejected' };
    global.fetch = jest.fn(() => new Promise(rejects => rejects(REJECT_RESPONSE)));

    expect.assertions(1);
    await expect(postData(HTTPOPTIONS, DATA)).rejects.toEqual(REJECT_RESPONSE);
  });
});
