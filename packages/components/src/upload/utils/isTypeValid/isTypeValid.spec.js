import React from 'react';

import { isTypeValid } from './';

const pdfFile = {
  type: 'application/pdf',
};

const imageFile = {
  type: 'image/png',
};

describe('isTypeValid', () => {
  it('should return valid for matching format', () => {
    expect(isTypeValid(pdfFile, '*')).toBe(true);
    expect(isTypeValid(imageFile, '*')).toBe(true);
  });

  it('should return valid for matching format', () => {
    expect(isTypeValid(pdfFile, 'application/pdf')).toBe(true);
  });

  it('should return valid for subset format', () => {
    expect(isTypeValid(pdfFile, 'application/*')).toBe(true);
  });

  it('should return invalid for unsupported format', () => {
    expect(isTypeValid(pdfFile, 'application/xls')).toBe(false);
  });

  it('should return invalid for unsupported format', () => {
    expect(isTypeValid(imageFile, 'application/*')).toBe(false);
  });
});
