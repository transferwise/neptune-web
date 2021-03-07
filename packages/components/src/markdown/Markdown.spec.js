import React from 'react';
import { render } from '@testing-library/react';
import Markdown from './Markdown';

const sublistMarkDown = `- sublist
   - sublist`;

const expectSublistMarkDown = `<ul>
<li>sublist
<ul>
<li>sublist</li>
</ul>
</li>
</ul>`;

const listMarkDown = `* list
* list`;

const expectListMarkDown = `<ul>
<li>list</li>
<li>list</li>
</ul>`;

const tests = [
  { '# Heading': '<h1>Heading</h1>' },
  { '## Heading': '<h2>Heading</h2>' },
  { '### Heading': '<h3>Heading</h3>' },
  { '#### Heading': '<h4>Heading</h4>' },
  { 'Hello *world*': 'Hello <em>world</em>' },
  {
    [sublistMarkDown]: expectSublistMarkDown,
  },
  {
    [listMarkDown]: expectListMarkDown,
  },
];

describe('Markdown', () => {
  tests.forEach((test) => {
    it('parses markdown content', () => {
      const testValue = Object.keys(test)[0];
      const { container } = render(<Markdown>{testValue}</Markdown>);
      expect(container).toContainHTML(test[testValue]);
    });
  });

  it('strips unsafe values', () => {
    const testValue = `<script type="text/javascript"></script>`;
    const { container } = render(<Markdown>{testValue}</Markdown>);
    expect(container).toContainHTML('<!-- raw HTML omitted -->');
  });
});
