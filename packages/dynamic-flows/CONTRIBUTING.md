# Contributing

Please start by reading the [general contribution guide](https://github.com/transferwise/neptune-web/blob/master/CONTRIBUTING.md) to get set up and familiarise yourself with our process. Then read on for specific information about working with Dynamic Flows.

# Get started

## TL;DR

- Run `yarn setup` from **the root of the monorepo**.
- Run `yarn dev` from **here** to start your dev environment and watch for changes.
- Run `yarn test:watch` in a separate terminal to test and watch for changes.

## In more detail

Before you start, ensure you've run `yarn setup` from the root of the monorepo. This will ensure that all packages are built (e.g. the CSS that some components use from the `css` package).

Once this is done, when working inside a package, we recommend running all commands from inside this package (`packages/dynamic-flows`). The one exception to this rule is if you'd like to run the `docs`. Because this depends on other packages, you should run `docs` from the root of the monorepo.

To get started, run `dev`. This will launch the development tool we use ([Storybook](https://storybook.js.org/)). You'll likely also want to run `test:watch` in a separate terminal to run your tests and re-run on change.

```
yarn dev
// And in a separate terminal..
yarn test:watch
```

## All available commands

- `dev` - starts Storybook, and watches for changes
- `build` - builds the components
- `test` - runs tests and lints
- `test:watch` - runs component tests, watching for changes
- `lint` - lints components
- `lint:fix` - lints components and fixes any errors that can be automatically fixed

As a reminder: to load the docs, run `docs` **from the root of the monorepo**, not from here.

# Accessibility

Please familiarise yourself with our [accessibility guidelines](https://github.com/transferwise/neptune-web/blob/master/ACCESSIBILITY.md) and ensure your changes meet accessibility standards.

# Testing

Please use [react-testing-library](https://github.com/testing-library/react-testing-library) for testing.

## How should I test my changes?

Before submitting a PR you should ensure:

1. All tests pass
2. Changes meet accessibility standards
3. Changes work across all supported browsers

# Documentation

We document our components in the `docs` package. This documentation will be published to [our public docs site](https://transferwise.github.io/neptune-web/) when your changes are merged.

To run the docs environment locally, run `docs` **from the root of the monorepo**. Please read [the guide](https://github.com/transferwise/neptune-web/blob/master/packages/docs/CONTRIBUTING.md) for further instructions on writing docs.
