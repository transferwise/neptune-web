# Neptune Docs

TransferWise Design System Documentation.

Find documentation status in the following [spreadsheet](https://docs.google.com/spreadsheets/d/125lgko0qc6im1Lcg4PPu56J_Aj69aqXwcdQsLa6zF9s/edit?ts=5cdc0623#gid=0).

## Install

```
yarn
```

## Usage

### Develop

```
yarn start
```

### Build

```
yarn build-docs
cd docs-build/
python -m SimpleHTTPServer
```

### Test

```
yarn test
```

### Lint

```
yarn lint
```

### Deploy

When pushing (or merging) to the `master` branch in the repository, the docs site is automatically deployed to [https://transferwise.github.io/neptune-docs/](https://transferwise.github.io/neptune-docs/) via CircleCI.

## TODO

Add `<Link>` to prefetch links, currently disabled until [Feature request: Basepath support](https://github.com/zeit/next.js/issues/4998) is closed.
