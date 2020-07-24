// Creates MDX Docs file.

const { capitalizeFirstLetter } = require('@transferwise/files-scaffold/utils/index.js');

module.exports = {
  type: 'docs',
  path: 'packages/docs/pages/components',
  ext: 'mdx',
  createDir: false,
  name: (name) => capitalizeFirstLetter(name),
  template: (name) => `import { LiveEditorBlock, GeneratePropsTable } from '../../utils';
import { ${capitalizeFirstLetter(name)} } from '@transferwise/components';
import code from '../../liveEditorCode/${name}.code';

<LiveEditorBlock code={code} scope={{ ${capitalizeFirstLetter(name)} }} />
<GeneratePropsTable componentName="${capitalizeFirstLetter(name)}" />

export const meta = {
  name: '${capitalizeFirstLetter(name)}',
};`,
};
