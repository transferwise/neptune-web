import React from 'react';
import { render } from '@testing-library/react';
import Markdown from './Markdown';
import { MarkdownNodeTypes } from '../common/markdownNodeTypes';

const list = `* list
* list`;

const sublist = `- sublist
   - sublist`;

const listOut = `<ul>
<li>list</li>
<li>list</li>
</ul>`;

const sublistOut = `<ul>
<li>sublist
<ul>
<li>sublist</li>
</ul>
</li>
</ul>`;

describe('Markdown', () => {
  describe('default behaviour', () => {
    const input = {
      headingOne: '# Heading',
      headingTwo: '## Heading',
      headingThree: '### Heading',
      emph: '**Bold**',
      list,
      sublist,
    };

    const output = {
      headingOne: '<h1>Heading</h1>',
      headingTwo: '<h2>Heading</h2>',
      headingThree: '<h3>Heading</h3>',
      emph: '<strong>Bold</strong>',
      list: listOut,
      sublist: sublistOut,
    };

    const nodeTypes = Object.keys(input);

    nodeTypes.forEach((type) => {
      it('parses markdown content', () => {
        const { container } = render(<Markdown>{input[type]}</Markdown>);
        expect(container).toContainHTML(output[type]);
      });
    });

    it('strips unsafe values', () => {
      const testValue = `<script type="text/javascript"></script>`;
      const { container } = render(<Markdown>{testValue}</Markdown>);
      expect(container).toContainHTML('<!-- raw HTML omitted -->');
    });
  });

  describe('allowList', () => {
    let container;

    const allowList = [MarkdownNodeTypes.HEADING, MarkdownNodeTypes.STRONG];

    it('marks up all types in the allowList', () => {
      ({ container } = render(<Markdown allowList={allowList}># Heading</Markdown>));
      expect(container).toContainHTML('<h1>Heading</h1>');

      ({ container } = render(<Markdown allowList={allowList}>**Bold**</Markdown>));
      expect(container).toContainHTML('<strong>Bold</strong>');
    });

    it('strips all markdown from types not in the allowList', () => {
      ({ container } = render(<Markdown allowList={allowList}>{list}</Markdown>));
      expect(container).not.toContainHTML(listOut);
      expect(container).toContainHTML('listlist');

      ({ container } = render(<Markdown allowList={allowList}>{sublist}</Markdown>));
      expect(container).not.toContainHTML(sublistOut);
      expect(container).toContainHTML('sublistsublist');
    });
  });

  describe('blockList', () => {
    let container;

    const blockList = [MarkdownNodeTypes.HEADING, MarkdownNodeTypes.STRONG];

    it('strips all markdown from types in the blockList', () => {
      ({ container } = render(<Markdown blockList={blockList}># Heading</Markdown>));
      expect(container).not.toContainHTML('<h1>Heading</h1>');
      expect(container).toContainHTML('Heading');

      ({ container } = render(<Markdown blockList={blockList}>## Heading</Markdown>));
      expect(container).not.toContainHTML('<h2>Heading</h2>');
      expect(container).toContainHTML('Heading');

      ({ container } = render(<Markdown blockList={blockList}>**Bold**</Markdown>));
      expect(container).not.toContainHTML('<strong>Bold</strong>');
      expect(container).toContainHTML('Bold');
    });

    it('marks up all types not the blockList', () => {
      ({ container } = render(<Markdown blockList={blockList}>{list}</Markdown>));
      expect(container).toContainHTML(listOut);

      ({ container } = render(<Markdown blockList={blockList}>{sublist}</Markdown>));
      expect(container).toContainHTML(sublistOut);
    });
  });
});
