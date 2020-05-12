# Contributing

Follow the instructions below to get started. Branch from `master`, and submit a pull request when you're ready.

Once you've set up your development environment, see below for specific information on working with the [Components](#working-with-components) and the [CSS](#working-with-css).

## Things to know

- We use [Conventional Commits](https://www.conventionalcommits.org) on our `master` branch. We ask that you do the same on your branches. While we most often squash and merge into `master`, we may decide we'd like the history, and this is only an option if all commits on the branch follow the specification.
- ️⚠️ Please don't make commits that affect files from more than one package at a time (e.g. `components` and `css`). It can affect how the package versions are bumped.
- We use `yarn`: these instructions presume you have this installed.

## Get started

These instructions will set up the monorepo and will prepare you to work across any or all of the packages.

Clone the repository and run `yarn setup` to install dependencies and build all packages:

```
git clone git@github.com:transferwise/neptune-web.git && cd neptune && yarn setup
```

**Note:** Run all following of these commands at the root of the repository.

## Develop

Run the React development environment (Storybook):

```
yarn dev
```

Storybook is a quick place to test changes to React components and their styles.

### Docs

Start a local nextjs documentation environment:

```
yarn docs
```

Remember to add documentation when adding or changes components or CSS.

### Test

Run React tests:

```
yarn test
```

## Submit a pull request

Before you submit a pull request, please make sure:

- All your changes are covered by tests
- All your changes have been crossbrowser checked, especially IE11
- You've updated the documentation if necessary
- Your commits adhere to conventional commits

Keep in mind that the title of your PR will appear as a line item in the changelog, and **must also conform to the conventional commit specification**.

### Releasing

The [documentation](https://transferwise.github.io/neptune-web) and the new npm release will be automatically deployed when merging changes to master. Because we use [Conventional Commits](https://www.conventionalcommits.org), we can bump package versions automatically based on the changes made. It also allows us to generate Changelogs.

## Working with Components

Please read [the guide](https://github.com/transferwise/neptune-web/blob/master/packages/components/CONTRIBUTING.md) for more information on working within the Components package.

## Working with CSS

Please read [the guide](https://github.com/transferwise/neptune-web/blob/master/packages/css/CONTRIBUTING.md) for more information on working within the CSS package.
