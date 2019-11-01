# [Neptune](https://transferwise.github.io/neptune)

Neptune is TransferWise's design system. It helps us ship cohesive products to our customers, faster.

This repository centralizes Neptune's efforts on the web, allowing you to build full React components, with their styles and documentation, on a single PR.

Check out the [components page](https://transferwise.github.io/neptune) to learn more about the components we have available.

## ⚛️ Components

The React components are tree-shakable, ensuring your app is only bundling the components you imported. Styles for the component are automatically imported to your page when you use it.

### Install

```
yarn add @transferwise/components
```

### Use

```js
import { Button } from '@transferwise/components';
```

If you use [Crab](https://github.com/transferwise/crab) or plain Next.js, it's also necessary to add this line to your config file to make sure the unused code is not imported.

```js
transpileModules: ['@transferwise/components'];
```

If your environment does not support tree shaking, you can also consume the UMD and CSS bundles individually.

```js
import { ComponentName } from '@transferwise/components/build/main.js';
import '@transferwise/components/build/main.css';
```

## 🎨 CSS

The CSS library is used throughout a lot of our products in several different stacks, so we serve them as plain CSS files.

### Install

```
yarn add @transferwise/css
```

### Use

In the `dist` directory you can find bundles for the individual components, variables, and other common utilities. Use them as individual components or import the whole library (274 KB).

```js
// Individual
import '@transferwise/neptune-css/dist/css/buttons.css';

// Full bundle
import '@transferwise/neptune-css/dist/css/neptune.css';
```

## 🛠 Contributing to [components](https://github.com/transferwise/neptune/tree/master/packages/components)

### Pull requests

To introduce or update a component, create a branch and submit a pull request. The [components page](https://transferwise.github.io/neptune) and the new npm release will be automatically deployed when merging changes to master.

We use [Conventional Commits](https://www.conventionalcommits.org) on the master branch, so all the commits in a PR should follow the specification before merging, there's a CI job that monitors this. This gives us automatic changelogs and version bumps on all packages. All commits are rebased into master, so make them meaningful or squash them before requesting review.

> ⚠️ A PR can contain commits to multiple packages, but **each commit should only have changes to files from a single package**, to ensure the changelog and version bumps work correctly.

### Component styles

CSS files should live inside the component source folder, next to your JavaScript, and imported on your component file. This goes against the previous recommendation of the Neptune team, and is part of our new [CSS strategy](http://linktoRFC).

### Install

```
git clone git@github.com:transferwise/neptune.git
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