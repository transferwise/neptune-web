/**
 * OverlayHeader is a header component that provides a logo, avatar and close button, for use in overlay screens.
 *
 * @param {string} [setupFiles] - setup enzyme adapater.
 * @param {string} [testEnvironment] - Simulates browser in node environment since most of the tests rely in browser API.
 * @param {string} [moduleNameMapper] - Resolves all import of css to the specified file.
 *
 * */

module.exports = {
  setupFiles: ['<rootDir>/config/jest/setupTests.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '\\.css$': require.resolve('./config/jest/style-mock.js'),
  },
};
