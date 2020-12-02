import { getSupportedSpotMimeTypes } from '.';

describe(getSupportedSpotMimeTypes, () => {
  it('returns all supported mime types when * is passed', () => {
    expect(getSupportedSpotMimeTypes('*')).toEqual(['image/jpeg', 'video/*', 'application/pdf']);
  });

  it('it maps image/* and application/* according to the supported', () => {
    expect(getSupportedSpotMimeTypes('image/*,application/*')).toEqual([
      'image/jpeg',
      'application/pdf',
    ]);
  });

  it('it filters out unsupported mime types', () => {
    expect(getSupportedSpotMimeTypes('image/jpeg,text/csv')).toEqual(['image/jpeg']);
  });
});
