/* eslint-disable */
const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

global.fetch = require('jest-fetch-mock');
enzyme.configure({ adapter: new Adapter() });

// https://github.com/esphen/jest-prop-type-error/blob/master/index.js
// This mock will make tests fail when props error occurs.
const { error } = console;
console.error = (message, ...args) => {
  if (/(Invalid prop|Failed prop type)/gi.test(message)) {
    throw new Error(message);
  }

  error.apply(console, [message, ...args]);
};
/* eslint-enable */
