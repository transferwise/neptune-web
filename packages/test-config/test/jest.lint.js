module.exports = {
  rootDir: process.env.PWD,
  runner: 'jest-runner-eslint',
  testMatch: [`${process.env.PWD}/(src|pages|components|utils)/**/*.(js|ts|tsx)`],
};
