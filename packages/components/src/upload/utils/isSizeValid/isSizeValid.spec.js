import React from 'react';

import { isSizeValid } from './';

const MAXSIZE = 5000;

describe('isSizeValid', () => {
  it('should return true for valid size', () => {
    expect(isSizeValid({ size: MAXSIZE }, MAXSIZE)).toBe(true);
  });

  it('should return false for valid size', () => {
    expect(isSizeValid({ size: MAXSIZE + 1 }, MAXSIZE)).toBe(false);
  });

  it('should return false for invalid MaxSize', () => {
    expect(isSizeValid({ size: MAXSIZE }, MAXSIZE - 0.5)).toBe(false);
  });
});
