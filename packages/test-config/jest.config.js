/**
 *
 * @property {string} [setupFiles] - setup enzyme adapater.
 * @property {string} [testEnvironment] - Simulates browser in node environment since most of the tests rely in browser API.
 * @property {string} [moduleNameMapper] - Resolves all import of css to the specified file.
 * @property {array} [setupFilesAfterEnv] -Import the files specified after setting the env. extend-expect add some nice assertionprovided by react etsting library such as toHaveTextContent
 * @property {array} [transformIgnorePatterns] - Do not transform anything outside src.
 * @property {array} [testPathIgnorePatterns] - Ignore everything outside src.
 *
 * */

module.exports = {
  rootDir: process.env.PWD,
  setupFiles: [require.resolve('./config/setupTests.js')],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.css$': require.resolve('./config/style-mock.js'),
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  transformIgnorePatterns: ['^((?!src).)*$'],
  testPathIgnorePatterns: ['^((?!src).)*$'],
  testURL: 'http://localhost',
};
