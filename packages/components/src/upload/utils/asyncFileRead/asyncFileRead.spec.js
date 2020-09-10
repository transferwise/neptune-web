import { asyncFileRead } from '.';

describe('asyncFileRead', () => {
  it('should resolve with data64', () => {
    const file = new Blob(['foo'], { type: 'text/plain' });
    expect.assertions(1);
    return asyncFileRead(file).then((data) => expect(data).toEqual('data:text/plain;base64,Zm9v'));
  });

  it('should reject if  wrong file is given', () => {
    const file = 'Not a blob';
    expect.assertions(1);
    return asyncFileRead(file).catch((e) => expect(e).toBeTruthy());
  });
});
