// Creates LiveEditor file.

const { capitalizeFirstLetter } = require('@transferwise/files-scaffold/utils/index.js');

module.exports = {
  type: 'docs code',
  path: 'packages/docs/liveEditorCode',
  ext: 'code.js',
  createDir: false,
  name: (name) => name,
  template: (name) => `<${capitalizeFirstLetter(name)}/>;
`,
};
