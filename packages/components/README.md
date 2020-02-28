# React Components

[![CircleCI](https://circleci.com/gh/transferwise/neptune-web.svg?style=shield)](https://circleci.com/gh/transferwise/neptune-web) [![NPM](https://badge.fury.io/js/%40transferwise%2Fcomponents.svg)](https://www.npmjs.com/package/@transferwise/components)

Neptune React components provides a library with common used components across the web platform.
The library is tree-shakable, ensuring your app is only bundling the components you imported. Styles for the component are automatically imported to your page when you use it.

### Install

```
yarn add @transferwise/components
```

### Use

```js
import { Button } from '@transferwise/components';
```

If you use [Crab](https://github.com/transferwise/crab) or plain Next.js (version < 9) , it's also necessary to add these lines to your config file to make sure that the ES6 modules gets transpiled before consumption.

```js
const withTM = require('next-transpile-modules');

module.exports = () =>
  withTM({
    transpileModules: ['@transferwise/components'],
  });
```

If your environment does not support tree shaking, you can also consume the UMD and CSS bundles individually.

```js
import { Button } from '@transferwise/components/build/main.js';
import '@transferwise/components/build/main.css';
```

## Contributing

### Pull requests

To introduce or update a component, create a branch and submit a pull request. The [documentation](https://transferwise.github.io/neptune-web) and the new npm release will be automatically deployed when merging changes to master.

We use [Conventional Commits](https://www.conventionalcommits.org) on the master branch, so all the commits in a PR should follow the specification before merging, there's a CI job that monitors this. This gives us automatic changelogs and version bumps on all packages. All commits are rebased into master, so make them meaningful or squash them before requesting review.

1. Create a feature branch from master.
2. ️⚠️ Make sure each commit only affects files from a single package (`components` or `css`).
3. Open a PR and ensure that all commits adhere to conventional commits. You may need a rebase in order to reorganize your existing code.
4. Before asking for a review, the title of your PR should have the final commit message that you want to be used in the [changelog](https://github.com/transferwise/neptune-web/blob/master/packages/components/CHANGELOG.md).
5. Ask for a review (post to #neptune-dev channel) and, once approved, ask for a member of the [design system team](https://github.com/orgs/transferwise/teams/design-system) to squash and merge your branch using a valid conventional commit message.

### Component styles

CSS files should live inside the component source folder, next to your JavaScript, and imported on your component file. This goes against the previous recommendation of the Neptune team, we will give further guidance on the CSS library soon.

### Install

```
git clone git@github.com:transferwise/neptune-web.git
cd neptune
yarn setup
```

- Clones repository.
- Installs dependencies.
- Creates initial builds of all packages.

To start the live-reloading environment for:

### Develop

Start the storybook dev environment:

```
yarn dev
```

### Docs

Start the live-reloading docs environment:

```
yarn docs
```

### Test

Run testing suite:

```
yarn test
```

Please use [react-testing-library](https://github.com/testing-library/react-testing-library) for testing components.

Historically we've used Enzyme so most of tests built using it's API but we encourage you to use react-testing-library when creating a new component
also, feel free to update tests of existing components (e.g when you do some changes) and flag about this during code review.
