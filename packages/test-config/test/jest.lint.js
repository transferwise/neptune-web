module.exports = {
  rootDir: process.env.PWD,
  displayName: 'lint',
  runner: 'jest-runner-eslint',
  testMatch: [`${process.env.PWD}/src/**/*.js`],
};
