# Contributing

Follow the instructions below to get started. Branch from `main`, and submit a pull request when you're ready.

## Things to know

- All commit messages must follow the conventional commit format. [Read below](#versioning-and-commit-lint) if you are unfamiliar with the standard or the available types.
- You must restrict your commits to one package at a time: e.g. don't make one commit that changes files inside `components` and `css` - it impacts how versions are bumped.
- We use `yarn`: these instructions presume you have this installed.

## Get started

1. Clone the repository and run `yarn setup` to install dependencies and build all packages:

```
git clone git@github.com:transferwise/neptune-web.git && cd neptune-web && yarn setup
```

2. Familiarise yourself with our [code conventions](CODESTYLE.md) and [accessibility guidelines](ACCESSIBILITY.md).

3. Refer to `CONTRIBUTING.md` inside each package for more information on working within that package.

## Where should I run commands from?

Almost always from within the package you're working in. For example, if you're making changes to `components`, run your yarn commands from that package:

```
cd packages/components
yarn dev
```

The two exceptions to this rule are the initial setup, and running the docs (which require all packages to be built). These should be done here, at the root of the monorepo.

```
yarn setup
yarn docs
```

### Top level commands

The full list of commands available to run from the root directory are:

- `setup` - installs dependencies and runs build in all packages
- `build` - builds all packages
- `clean` - removes `node_modules` and cached builds from all packages
- `docs` - builds all packages and starts the Neptune Web docs
- `lint` - lints all packages
- `test` - runs tests in all packages (includes a lint)
- `create-component` - creates all the necessary files needed when a react component gets added to the library

As said above, we recommend running most commands from within the package you're working in.

## Fix / format on save

We use a combination of ESLint, Prettier and Stylelint to check our code for bugs. These tools have the option to run on save, which we recommend.

### VSCode

In `settings.json` (use the command `Open Settings (JSON)` to get there):

```json
{
  "css.validate": false,
  "less.validate": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true
  },
  "[css]": {
    "editor.defaultFormatter": "stylelint.vscode-stylelint"
  },
  "[less]": {
    "editor.defaultFormatter": "stylelint.vscode-stylelint"
  }
}
```

## Testing

### Beta Releases

If you wish to test your changes in some consumer codebase and `yarn link` is not so sufficient or/and convenient approach, then you can easily publish beta version(s) on NPM registry and use it in any NPM repository.

Steps:
1. push changes into your feature/fix branch
2. find build on [CircleCI](https://app.circleci.com/pipelines/github/transferwise/neptune-web)
3. approve `hold-beta-release` job
4. Lerna will [publish](https://github.com/lerna/lerna/blob/main/commands/publish/README.md#--canary) affected packages [tagged as beta](https://docs.npmjs.com/adding-dist-tags-to-packages)

---

Note: set the exact beta version without any [update types or version ranges](https://docs.npmjs.com/cli/v6/configuring-npm/package-json#dependencies) (e.g `^`, `~`) as usually NPM clients tend to opt-out installing beta (unstable) versions, correct example:

```js
// in package.json
"@transferwise/neptune-css": "4.0.4-beta.7",

// or just `beta`, NPM client will pick up latest beta version
"@transferwise/components": "beta",
```

### Visual Testing

(To be added)

## Versioning and commit lint

We follow [Semantic Versioning](https://semver.org). We require that commit messages follow the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/#summary) standard. In this way, we can automatically bump the version of our packages when necessary.

**These rules apply to both normal commit messages and PR titles** (if you are using squash and merge).

The rules are simple:

- All your commit messages must follow the format `<type>(scope?): subject`
- The type must be one of the following: [`fix`, `feat`, `refactor`, `build`, `chore`, `docs`, `perf`, `test`]
- If you are fixing something, use `fix`. This will bump the patch version.
- If you are adding a new feature, use `feat`. This will bump the minor version.
- Breaking changes must have the words `BREAKING CHANGE:` as the first two words in the commit description. We also add a `!` after the type to make it obvious in the commit log.<sup>*</sup>
For example:
```
feat!: Some feature

BREAKING CHANGE: Description of breaking changes
```

Using anything other than `fix` or `feat` without a `!` will not trigger a version bump. This is useful for changes to CI config, documentation or tests. Feel free to choose the type that best reflects the work you're doing.

You can optionally use a scope to describe where in the code you're working: e.g. `feat(accordion): adding new functionality to the accordion`.

Some examples:

```
fix: fixing a minor bug in some widget
feat: adding a new feature to a component
feat!: refactoring the API of some component
docs: updating the docs
refactor(button): refactoring the button implementation
chore: updating the ci build config
```

<sup>*</sup> Generally the core design system team will handle breaking change releases. If you are planning a breaking change, please talk to us.

## Releasing

The [documentation](https://transferwise.github.io/neptune-web) and the new npm release will be automatically deployed when merging changes to `main`. Our use of conventional commits means we can bump package versions automatically based on the changes made. It also allows us to generate Changelogs.
