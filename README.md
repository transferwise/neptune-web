# Neptune Design System – Web

Neptune is TransferWise's design system. It helps us ship cohesive products to our customers, faster. This monorepo centralizes Neptune's efforts on the web, allowing you to build components or CSS, along with their technical documentation, on a single PR.

Check out the [documentation website](https://transferwise.github.io/neptune-web) to learn more about the components and CSS we have available.

Design guidelines for when to use each component or pattern are shared across all platforms and available [here](https://github.com/transferwise/neptune).

## Usage

Instructions for usage are available in each package's page:

- [React Components](https://github.com/transferwise/neptune-web/blob/master/packages/components)
- [CSS](https://github.com/transferwise/neptune-web/blob/master/packages/css)

### Contribution

### Pull Request

To introduce or update a component, create a branch and submit a pull request. The [documentation](https://transferwise.github.io/neptune-web) and the new npm release will be automatically deployed when merging changes to master.

We use [Conventional Commits](https://www.conventionalcommits.org) on the master branch, so all the commits in a PR should follow the specification before merging, there's a CI job that monitors this. This gives us automatic changelogs and version bumps on all packages. All commits are rebased into master, so make them meaningful or squash them before requesting review.

1. Create a feature branch from master.
2. ️⚠️ Make sure each commit only affects files from a single package (`components` or `css`).
3. Open a PR and ensure that all commits adhere to conventional commits. You may need a rebase in order to reorganize your existing code.
4. Before asking for a review, the title of your PR should have the final commit message that you want to be used in the [changelog](https://github.com/transferwise/neptune-web/blob/master/packages/components/CHANGELOG.md).
5. Ask for a review (post to #neptune-dev channel) and, once approved, ask for a member of the [design system team](https://github.com/orgs/transferwise/teams/design-system) to squash and merge your branch using a valid conventional commit message.

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

```
yarn dev
```

This command starts the storybook dev environment. Please use this playground for React development and to test React css related changes.

This command will run the following commands in the following locations

| command  | what       | where     |
| -------- | ---------- | --------- |
| yarn dev | storybook  | component |
| yarn dev | less watch | css       |

### Docs

```
yarn docs
```

This command starts the nextjs docs environment. Please use this env to document all your react and css code changes and to test pure html css related changes.

This command will run the following commands in the following locations

| command   | what       | where      |
| --------- | ---------- | ---------- |
| yarn docs | next dev   | docs       |
|           |            |            |
| yarn docs | docs:babel | components |
|           | less watch | components |
|           |            |            |
| yarn docs | less watch | css        |

### Test

Run testing suite:

```
yarn test
```

This command runs react testing suite located in component's folder
