// import React from 'react';
import { mount } from 'enzyme';
import highlight from './highlight';

describe('Typeahead input', () => {
  const highlighted = node => node.find('strong');
  const getTextFromNodes = nodes => nodes.reduce((value, node) => value + node.text(), '');

  it('highlights part of label that matches the query', () => {
    const query = 'test';
    const label = `this is a ${query} label`;
    const result = mount(highlight(label, query));

    expect(highlighted(result).text()).toEqual(query);

    expect(getTextFromNodes(result)).toBe(label);
  });

  it('does not change text if query is not present in it', () => {
    const query = 'test';
    const label = `this is a label`;
    const result = highlight(label, query);

    expect(result).toBe(label);
  });

  it('highlights whole label that matches the query', () => {
    const query = 'test';
    const label = query;
    const result = mount(highlight(label, query));

    expect(highlighted(result).text()).toEqual(query);
  });
});
