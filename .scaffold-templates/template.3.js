// Creates Story file.

const { capitalizeFirstLetter } = require('@transferwise/files-scaffold/utils/index.js');

module.exports = {
  type: 'story',
  path: 'packages/components/src',
  ext: 'story.js',
  createDir: true,
  name: (name) => capitalizeFirstLetter(name),
  template: (name) => `import React from 'react';
import ${capitalizeFirstLetter(name)} from './${capitalizeFirstLetter(name)}';

export default {
  component: ${capitalizeFirstLetter(name)},
  title: '${capitalizeFirstLetter(name)}',
};

export const basic = () => {
  return <${capitalizeFirstLetter(name)} />;
};
`,
};
