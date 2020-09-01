# Upgrading Guide

For most users we recommended using `neptune.css`, the full Neptune CSS bundle that contains `neptune-core`, `neptune-addons`, and all available component CSS.

```
@import '@transferwise/neptune-css/dist/css/neptune.css';
```

## Custom properties

Custom properties can be found in `dist/props`. All officially supported custom properties are in [@transferwise/neptune-tokens](https://www.npmjs.com/package/@transferwise/neptune-tokens). For convenience, we expose all of these in a single file: `neptune-tokens.css`.

There are also other experimental custom properties in that folder, such as `custom-media`.

If you were using a custom property which is not available in `neptune-tokens.css`, look for it in `legacy-custom-props.css`.

`--spacer` was particularly common: replace it with `--size-8` or other size tokens (from `@transferwise/neptune-tokens`). Avoid operations like `calc(var(--size) \* 5)` and use `var(--size-40)` instead.

## Variables

There are a bunch of brand colours which have not yet been made available as custom properties. [@transferwise/neptune-tokens](https://www.npmjs.com/package/@transferwise/neptune-tokens) exposes a less file `colors-base.less` which has these colours. Use of this is recommended over the below.

Legacy less variables are exposed for use at `dist/less`. `legacy-variables.less` contains all variables that used to come from `bootstrap/less/variables.less`.
All less variables are now available in `dist/less`. We discourage the use of `legacy-variables.less`. `neptune-tokens.less` contains colour variables which you can use in place of old Bootstrap colour variables.

## Migrating from Bootstrap

- Remove Bootstrap as a dependency (**unless** you still depend on bootstrap.js).
- Delete all Bootstrap CSS/LESS imports
- Import Neptune CSS
- We have removed some infrequently used rules (see below). If you think you use any of them, do a search and fix any errors.

```
// DELETE THESE - you probably only have one or the other
@import 'bootstrap/dist/css/bootstrap.min.css';
@import 'bootstrap/dist/less/bootstrap.less';

// USE THIS - you only need it once in your application
@import '@transferwise/neptune-css/dist/css/neptune.css';
```

If you import Bootstrap variables directly, swap them for the equivalent Neptune CSS file:

```
// DELETE
@import 'bootstrap/less/variables';
@import (reference) 'bootstrap/less/variables.less';

// USE INSTEAD
@import '#@transferwise/neptune-css/dist/css/variables/legacy-variables.less';
```

## Major changes from Boostrap / Neptune 1.x => Neptune 3.x

- Core typography now uses `rem` relative length unit for `font-size` and `unitless` values for `line-height`. This is to maximize accessibility, as it is generally best to use values that are relative to the user's default font size.

- Old version of `normalize.css` is removed and only relevant rules from the new version of `normalize.css` (8.0.1) is used and consolidated into core.

- Bootstrap variables are still available from legacy-variables.less, but use of custom properties is encouraged.

### Breaking Changes

- `core.css` is renamed to `neptune-core.css`.
- `component-animations` moved to `/components` folder.
- `responsive-utilities` renamed to `display-utilities` and moved to `neptune-addons.css` from `core`.
- Core typography now uses `rem` relative length unit for `font-size` and `unitless` values for `line-height`. This is to maximize accessibility, as it is generally best to use values that are relative to the user's default font size.
- Old version of `normalize.css` is removed and only relevant rules from the new version of `normalize.css` (8.0.1) is used and consolidated into core.

### Removed Rules

- `.img-responsive`
- `.img-thumbnail`
- `.visible-print`, `.visible-print-block`, `.visible-print-inline`, and `.visible-print-inline-block`
- `.hidden-print`
- `.orderable-xs`, `.orderable-sm`, `.orderable-md`, `.orderable-lg`, and `.orderable-xl`
- `.order-1`, `.order-2`, `.order-3`, `.order-4`, `.order-5`, and `.order-6`
- `article`, and `.article`
- `.bg-focus` and its children
- `.lang_ja`, `.lang_ja h[1-6]`, `.lang_ja .h[1-6]`
- `.bg-default` `<p>` color
- `.*-*-section-5` and `.*-*-section-7` responsive spacing sections
- `.footer` spacing section from addons
