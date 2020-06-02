# Contributing

Please start by reading the [general contribution guide](<(https://github.com/transferwise/neptune-web/blob/master/CONTRIBUTING.md)>) to get set up and familiarise yourself with our process. Then read on for specific information about working with the Components.

# Development environments

There are two ways to load your React components locally while you're working on them: by running `dev` or `docs`.

`dev` will launch the development tool we use called [Storybook](https://storybook.js.org/). This is what we recommend you use while developing

`docs` is our nextJS based documentation website. Use this when you want to update the documentation.

**Note:** both of these tasks should be run with `yarn` from the top level of the repository (two levels up from here).

# Testing

Please use [react-testing-library](https://github.com/testing-library/react-testing-library) for testing components.

Historically we've used Enzyme so most of tests built using it's API but we encourage you to use react-testing-library when creating a new component
also, feel free to update tests of existing components (e.g when you do some changes) and flag about this during code review.

# Accessibility

This repository provides a set of tools to help us meet our accessibility standards. We try to automate as many checks as possible but some of them have to be performed manually. We do provide eslint checks that run automamtically on all staged files and on CircleCI jobs.

Both our `dev` and `docs` environments spin up with `react-axe` integrated so it's possible to check for violations in the browser console. In Storybook it's also possible to access axe violations in the accessibility tab on the right-hand side. Although these console messages are helpful they won't fail the build, so please ensure there are no violations before committing.

A short series of manual checks are also necessary. For all changes, perform the following:

## Keyboard tests

1. Component has been tested to be keyboard accessible: i.e. it is fully functional using only the keyboard
2. Keyboard focus order matches the visual layout
3. Ensure that controls have visible focus states

## Zoom settings

Ensure that readability is not compromised and make sure that the layout still appears as expected when users:

1. Zoom the page up to 200%
2. Increase font size (through browser settings)

## Semantic checks

1. Ensure component markup elements are appropriate for their content - use `ul` or `ol` for list content, `table` for tabular data etc.
2. When building a component do not use elements that may prevent the consuming app from being accessible. For example do not use Heading elements or layout attributes such as landmarks.

# Component styles

CSS files should live inside the component source folder, next to your JavaScript, and be imported in your component file.

# FAQ

## How can I test changes to components?

To test dev changes and quickly prototype components, Storybook is the recommended tool. The stories will be available only locally and they won't be deployed in any env.

Please read [the guide](https://github.com/transferwise/neptune-web/blob/master/CONTRIBUTING.md) for detailed instructions on how to run this playground.

## How can I test changes to documentation?

To test changes to the documentation (made in the `docs` package), you can run the site locally. This documentation will be [published](https://transferwise.github.io/neptune-web/) when your changes are merged.

Please read [the guide](https://github.com/transferwise/neptune-web/blob/master/CONTRIBUTING.md) for detailed instructions on how to run this environment.

## In what different ways do I need to test my components?

Before submitting a PR you should ensure:

1. All tests pass
2. Your bundle works in NextJS app
3. Your bundle works in a CRA app
4. Your changes work across all supported browsers

We are looking into automating these tests but for now we have to perform them manually.

## How is it built?

Our UMD bundle is generated using Rollup, our ES just uses Babel.

When `yarn build` runs, a file named `stats.html` is generated in the root of the component folder. This can be inspected to gather more info about the bundle.

The bundled files are stored inside the _build_ folder.

The polyfills are injected automatically by babel-plugin-transform-runtime based on our [list of supported browsers](https://github.com/transferwise/neptune-web/blob/master/.browserlistrc).

As per [Babel docs](https://babeljs.io/docs/en/babel-preset-env) - "We take advantage of the fact that a bundler will load the same polyfill only once.".

Here there is a an example of how a ES file will look like with and without polyfills

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

## How can I test a production build locally?

Use `yarn link` to link your local environment, then use it in a fresh NextJS environment and a CRA app, and check that both of them work.

## When / how should I update the docs?

Whenever a component is built or a change is made.
