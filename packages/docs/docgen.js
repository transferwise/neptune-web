const fs = require('fs');
const { resolve } = require('path');
const docgen = require('react-docgen');
const externalProptypesHandler = require('react-docgen-external-proptypes-handler');
const glob = require('glob');

const data = {};

const tabularFriendlyData = (metadata) => {
  const structuredData = [];
  Object.values(metadata).forEach((component) => {
    if (component.props) {
      const { props, displayName } = component;
      Object.keys(props).forEach((propName) => {
        structuredData.push({ displayName, propName, ...props[propName] });
      });
    }
  });

  return structuredData.sort((a, b) => (a.propName > b.propName ? 1 : -1));
};

const files = glob.sync(`../components/src/**/*.js`, {
  ignore: [
    '../components/src/**/*.{spec,docs,story}.js',
    '../components/src/**/index.js',
    '../**/common/**',
    '../**/utils/**',
    '../components/src/flowNavigation/avatar/*.js',
  ],
});

const metadata = {};
files.sort().map((path) => {
  /* append display name handler to handlers list */
  const handlers = docgen.defaultHandlers.concat(externalProptypesHandler(path));

  /* read file to get source code */
  const code = fs.readFileSync(path, 'utf8');

  /* parse the component code to get metadata */
  try {
    const gen = docgen.parse(code, null, handlers);
    metadata[gen.displayName] = gen;
  } catch {
    return false;
  }
  return data;
});

const tableFriendlyProps = JSON.stringify(tabularFriendlyData(metadata), null, 2);

fs.writeFileSync(
  resolve(process.cwd(), 'temp-tabular-props.js'),
  `export default ${tableFriendlyProps}`,
);
