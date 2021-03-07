import { isTypeValid } from '.';

const pdfFile = {
  type: 'application/pdf',
};

const imageFile = {
  type: 'image/png',
};

const data64Img = 'data:image/png;something';

describe('isTypeValid', () => {
  describe('when file or rule are not provided', () => {
    it('returns false for matching format', () => {
      expect(isTypeValid('', '*', null)).toBe(false);
      expect(isTypeValid(data64Img, '', null)).toBe(false);
    });
  });
  describe('when type is provided', () => {
    it('returns true for matching format', () => {
      expect(isTypeValid(pdfFile, '*', null)).toBe(true);
      expect(isTypeValid(imageFile, '*', null)).toBe(true);
    });

    it('returns true for matching format', () => {
      expect(isTypeValid(pdfFile, 'application/pdf', null)).toBe(true);
    });

    it('returns true for subset format', () => {
      expect(isTypeValid(pdfFile, 'application/*', null)).toBe(true);
    });

    it('returns false for unsupported format', () => {
      expect(isTypeValid(pdfFile, 'application/xls', null)).toBe(false);
    });

    it('returns false for unsupported format', () => {
      expect(isTypeValid(imageFile, 'application/*', null)).toBe(false);
    });
  });
  describe('when type is not provided', () => {
    it('returns true for supported file', () => {
      expect(isTypeValid({ type: '' }, 'image/png', data64Img)).toBe(true);
      expect(isTypeValid({ type: '' }, 'image/*', data64Img)).toBe(true);
    });

    it('returns false for unsupported file', () => {
      expect(isTypeValid({ type: '' }, 'image/jpg', data64Img)).toBe(false);
      expect(isTypeValid({ type: '' }, 'application/*', data64Img)).toBe(false);
    });
  });
});
