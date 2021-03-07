const isUsingYarn = process.env.npm_execpath.indexOf('yarn') >= 0;
// Detect if run by NPM and fail
if (!isUsingYarn) {
  console.log(`
    This project recently transitioned to using yarn (https://yarnpkg.com/) for package
    management instead of npm. The build servers use yarn, so developers should too.

    Basics:
      $ see yarnpkg.com for installation of yarn
      $ yarn install

    To install a new package (also adds to package.json):
      $ yarn add [packagename]

    To upgrade a package:
      $ yarn upgrade [packagename]

    For more help, see https://yarnpkg.com/en/docs/usage.

    Reasons for this change:
    - yarn uses a dependency lockfile by default, allowing for a fully reproducible build
    - yarn is faster to install dependencies from scratch
    - yarn has more secure checksum matching, ensuring package contents are consistent
  `);
  process.exit(1);
}
