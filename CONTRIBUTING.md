# Contributing

Follow the instructions below to get started. Branch from `master`, and submit a pull request when you're ready.

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

As said above, we recommend running most commands from within the package you're working in.

## Versioning and commit lint

We follow [Semantic Versioning](https://semver.org). We require that commit messages follow the [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/#summary) standard. In this way, we can automatically bump the version of our packages when necessary.

The rules are simple:

- All your commit messages must follow the format `<type>(scope?): subject`
- The type must be one of the following: [`fix`, `feat`, `refactor`, `build`, `chore`, `docs`, `perf`, `test`]
- If you are fixing something, use `fix`. This will bump the patch version.
- If you are adding a new feature, use `feat`. This will bump the minor version.
- If you are committing a breaking change, add a ! after the type: `feat!: this is a breaking change`

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

## Releasing

The [documentation](https://transferwise.github.io/neptune-web) and the new npm release will be automatically deployed when merging changes to master. Our use of conventional commits means we can bump package versions automatically based on the changes made. It also allows us to generate Changelogs.
