// Exports main component.

const { capitalizeFirstLetter } = require('@transferwise/files-scaffold/utils/index.js');

module.exports = {
  type: 'export',
  path: 'packages/components/src',
  ext: 'js',
  createDir: true,
  name: (name) => 'index',
  template: (name) => `export { default } from './${capitalizeFirstLetter(name)}';
`,
};
