# Contributing

Please start by reading the [general contribution guide](https://github.com/transferwise/neptune-web/blob/main/CONTRIBUTING.md) to get set up and familiarise yourself with our process. Then read on for specific information about working with the Components.

# Get started

## TL;DR

- Run `yarn setup` from **the root of the monorepo**.
- Run `yarn dev` from **here** to start your dev environment and watch for changes.
- Run `yarn test:watch` in a separate terminal to test and watch for changes.

## In more detail

Before you start, ensure you've run `yarn setup` from the root of the monorepo. This will ensure that all packages are built (e.g. the CSS that some components use from the `css` package).

Once this is done, when working inside a package, we recommend running all commands from inside this package (`packages/components`). The one exception to this rule is if you'd like to run the `docs`. Because this depends on other packages, you should run `docs` from the root of the monorepo.

To get started, run `dev`. This will launch the development tool we use ([Storybook](https://storybook.js.org/)). You'll likely also want to run `test:watch` in a separate terminal to run your tests and re-run on change.

```
yarn dev
// And in a separate terminal..
yarn test:watch
```

## All available commands

- `dev` - starts Storybook, and watches for changes
- `build` - builds the components and generates a stats.html with details about the bundle.
- `test` - runs component tests, and lints components
- `test:watch` - runs component tests, watching for changes
- `lint` - lints components
- `lint:fix` - lints components and fixes any errors that can be automatically fixed

As a reminder: to load the docs, run `docs` **from the root of the monorepo**, not from here.

# Accessibility

Please familiarise yourself with our [accessibility guidelines](https://github.com/transferwise/neptune-web/blob/main/ACCESSIBILITY.md) and ensure your changes meet accessibility standards.

# Testing

Please use [react-testing-library](https://github.com/testing-library/react-testing-library) for testing components.

Historically we've used Enzyme so most of tests built using it's API but we encourage you to use react-testing-library when creating a new component
also, feel free to update tests of existing components (e.g when you do some changes) and flag about this during code review.

## How should I test my changes?

Before submitting a PR you should ensure:

1. All tests pass
2. Changes meet accessibility standards
3. Changes work across all supported browsers

If you've added a new component, it's a good idea to try using it in a fresh create react app / nextjs environment. To do this you'll need to make use of `yarn link`, to ensure the app depends on your local code and not the last published package.

# Documentation

We document our components in the `docs` package. This documentation will be published to [our public docs site](https://transferwise.github.io/neptune-web/) when your changes are merged.

To run the docs environment locally, run `docs` **from the root of the monorepo**. Please read [the guide](https://github.com/transferwise/neptune-web/blob/main/packages/docs/CONTRIBUTING.md) for further instructions on writing docs.

# How is it built?

Our UMD bundle is generated using Rollup, our ES just uses Babel.

When `yarn build` runs, a file named `stats.html` is generated in the root of the component folder. This can be inspected to gather more info about the bundle.

The bundled files are stored inside the _build_ folder.

The polyfills are injected automatically by babel-plugin-transform-runtime based on our [list of supported browsers](https://github.com/transferwise/neptune-web/blob/main/.browserlistrc).

As per [Babel docs](https://babeljs.io/docs/en/babel-preset-env) - "We take advantage of the fact that a bundler will load the same polyfill only once.".

<details>
  <summary>An example of what an ES file will look like with and without polyfills</summary>

**Original file:**

```
class Checkbox {
  a = new Promise();
}

export default Checkbox;
```

**Without Polyfill:**

```
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

var Checkbox = function Checkbox() {
  _classCallCheck(this, Checkbox);

  _defineProperty(this, "a", new Promise());
};

export default Checkbox;
```

**With Polyfill:**

```
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.promise";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import _defineProperty from "@babel/runtime/helpers/defineProperty";

var Checkbox = function Checkbox() {
  _classCallCheck(this, Checkbox);

  _defineProperty(this, "a", new Promise());
};

export default Checkbox;
```

</details>
