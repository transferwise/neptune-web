components 🎉
============

[![CircleCI](https://circleci.com/gh/transferwise/components.svg?style=shield&circle-token=07708b37b1b85d567cf1c25ad7d7fde9fbd165c0)](https://circleci.com/gh/transferwise/components)

[![NPM](https://badge.fury.io/js/%40transferwise%2Fcomponents.svg)](https://www.npmjs.com/package/@transferwise/components)

`yarn add @transferwise/components`

This is a port of our styleguide components to react.

[Documentation and demo can be found here](https://transferwise.github.io/components/)

Heavily a work in progress.

Work that still needs doing:
- Missing styleguide components

## Contributing

1. Clone the repo
2. Run `npm install` to install dependencies. 
3. Then run `npm start` to get a live-reloading dev environment
4. **For tests** run `npm run test:watch` to run livereloading tests.


Add components in feature branches, before creating a pull request **update changelog and semantic version** so the branch will be deployed and can be shared.

Docs will be automatically deployed when merging to master, and a new npm release (with corresponding github release) will be created as well. Be sure to increment the version in `package.json` according to semver.
