# CSS

[![CircleCI](https://circleci.com/gh/transferwise/neptune-web.svg?style=shield)](https://circleci.com/gh/transferwise/neptune-web) [![NPM](https://badge.fury.io/js/%40transferwise%2Fneptune-css.svg)](https://www.npmjs.com/package/@transferwise/neptune-css)

The CSS library provides css styles for common components and utilities reused across the web platform.

### Install

```
yarn add @transferwise/css
```

### Use

In the `dist` directory you can find individual files for components, variables, and other common utilities. They can be used individually or as the whole `neptune.css` bundle.

```jsx
// Individual
import '@transferwise/neptune-css/dist/css/buttons.css';

// Full bundle
import '@transferwise/neptune-css/dist/css/neptune.css';
```

## Contributing

### Pull requests

To introduce or update a component, create a branch and submit a pull request. The [docs page](https://transferwise.github.io/neptune-web) and the new npm release will be automatically deployed when merging changes to master.

We use [Conventional Commits](https://www.conventionalcommits.org) on the master branch, so all the commits in a PR should follow the specification before merging, there's a CI job that monitors this. This gives us automatic changelogs and version bumps on all packages. All commits are rebased into master, so make them meaningful or squash them before requesting review.

1. Create a feature branch from master.
2. ️⚠️ Make sure each commit only affects files from a single package (`components` or `css`).
3. Open a PR and ensure that all commits adhere to conventional commits. You may need a rebase in order to reorganize your existing code.
4. Before asking for a review, the title of your PR should have the final commit message that you want to be used in the [changelog](https://github.com/transferwise/neptune-web/blob/master/packages/components/CHANGELOG.md).
5. Ask for a review and, once approved, ask for a member of the [design system team](https://github.com/orgs/transferwise/teams/design-system) to squash and merge your branch using a valid conventional commit message.

### Install

```
git clone git@github.com:transferwise/neptune-web.git
cd neptune
yarn start
```

- Clones repository.
- Installs dependencies.
- Creates initial builds of all packages.
- Starts live-reloading dev environment.

### Develop

```
yarn dev
```

- Starts the live-reloading dev environment.

### Docs

```
yarn docs
```

- Starts the live-reloading docs environment.

### Create a new style

1. Create a new file for it in `./src/less/my-component.less`
2. Decide about the component style's level (1,2,3 or 4)

### Naming convention

File naming should follow `kebab-case`.

E.g. `link-callout.(css|less)`
