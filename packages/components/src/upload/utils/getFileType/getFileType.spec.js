import { getFileType } from '.';

const imageFile = {
  type: 'image/png',
};

const data64Img = 'data:image/png;something';

describe('getFileType', () => {
  describe('returns null', () => {
    it(`when both file and file64 haven't been provided`, () => {
      expect(getFileType('', '')).toBeNull();
    });
    it(`when file has no type and file64 hasn't been provided `, () => {
      expect(getFileType({}, '')).toBeNull();
    });
    it(`when file has empty type and file64 hasn't been provided`, () => {
      expect(getFileType({ type: '' }, '')).toBeNull();
    });
    it(`when file hasn't been provided and file64 is not supported`, () => {
      expect(getFileType('', 'data:something-unexpected')).toBeNull();
    });
  });

  describe('returns file-type', () => {
    it('when file has type defined', () => {
      expect(getFileType(imageFile, '')).toBe(imageFile.type);
    });
    it('when file has no type and file64 is supported', () => {
      expect(getFileType('', data64Img)).toBe('image/png');
    });
  });
});
