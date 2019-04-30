const path = require("path");

module.exports = {
  appBuild: path.resolve(__dirname, '../dist'),
  appBundles: path.resolve(__dirname, '../bundles'),
  appPath: path.resolve(__dirname, '..'),
  appSrc: path.resolve(__dirname, '../src')
};
