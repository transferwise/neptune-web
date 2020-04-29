# Upgrading Guide

## Available CSS Bundles

### `neptune.css`

- The full Neptune CSS bundle that contains `neptune-tokens`, `neptune-core`, `neptune-addons`, and all available CSS components.

### `neptune-tokens.css`

- Semantic design tokens are now available as custom properties (CSS variables).
- Variables are still available as partials from `dist/css/variables` but usage of tokens from `neptune-tokens.css` is preferred.

### `neptune-core.css`

#### Breaking change: `core.css` is renamed to `neptune-core.css`.

#### Breaking change: `component-animations` moved to `neptune-addons.css`.

- Core typography now uses `rem` relative length unit for `font-size` and `unitless` values for `line-height`. This is to maximize accessibility, as it is generally best to use values that are relative to the user's default font size.

- Old version of `normalize.css` is removed and only relevant rules from the new version of `normalize.css` (8.0.1) is used and consolidated into core.

### `neptune-addons.css`

- `responsive-utilities` renamed to `display-utilities` and moved to `neptune-addons.css` from `core`.

## Breaking Changes

- `core.css` is renamed to `neptune-core.css`.
- `component-animations` moved to `/components` folder.
- `responsive-utilities` moved to `neptune-addons.css`.

## Deprecated Features

- `--spacer` custom property. Replace its use for `--space-8`or other spacer tokens. Avoid operations as `calc(var(--spacer) \* 5)` and use `var(--spacer-40)` instead.

## Removed Rules

- `.img-responsive`
- `.img-thumbnail`
- `.visible-print`, `.visible-print-block`, `.visible-print-inline`, and `.visible-print-inline-block`
- `.hidden-print`
- `.orderable-xs`, `.orderable-sm`, `.orderable-md`, `.orderable-lg`, and `.orderable-xl`
- `.order-1`, `.order-2`, `.order-3`, `.order-4`, `.order-5`, and `.order-6`
- `article`, and `.article`
- `.bg-focus` and its childs
- `.lang_ja`, `.lang_ja h[1-6]`, `.lang_ja .h[1-6]`
- `.bg-default` `<p>` color
- `.*-*-section-5` and `.*-*-section-7` responsive spacing sections
- `.footer` spacing section from addons
