import React from 'react';
import InputWithTextFormat from './';

describe('InputWithTextFormat', () => {
  it(`true `, () => {
    expect(true).toBe(true);
  });
  it('should return null if props change to the same value', () => {
    const nextProps = { pattern: '**-**' };
    const prevState = {
      value: '11/11',
      prevPattern: '**-**',
      historyNavigator: { reset: jest.fn() },
      triggerEvent: null,
      triggerType: null,
      pastedLength: 0,
    };
    const expectedState = null;
    expect(InputWithTextFormat.getDerivedStateFromProps(nextProps, prevState)).toEqual(
      expectedState,
    );
  });

  it('should update pattern on props change', () => {
    const nextProps = { pattern: '**-**' };
    const prevState = {
      value: '11/11',
      prevPattern: '**/**',
      historyNavigator: { reset: jest.fn() },
      triggerEvent: null,
      triggerType: null,
      pastedLength: 0,
    };
    const expectedState = {
      value: '11-11',
      prevPattern: '**-**',
      triggerEvent: null,
      triggerType: null,
      pastedLength: 0,
    };
    expect(InputWithTextFormat.getDerivedStateFromProps(nextProps, prevState)).toEqual(
      expectedState,
    );
  });
});
