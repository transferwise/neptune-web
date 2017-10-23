# v0.5.5
## Adds a hover state for clickable stepper labels

It's pretty.

# v0.5.4
## Makes stepper labels smaller

Makes them 14px instead of 16px.

# v0.5.3
## Add missing className as props to `Option`

# v0.5.2
## Prevent line breaks for stepper labels

# v0.5.1
## Make active and clickable Stepper labels semibold

Before:
<img src="https://user-images.githubusercontent.com/8721312/31447161-fac2d04e-aea9-11e7-896b-907df05a70bd.png" width="300" />

After:
<img src="https://user-images.githubusercontent.com/8721312/31491306-8d484c82-af4f-11e7-903c-9fe16a568996.png" width="300" />

# v0.5.0
## Accept className from `props`

Use custom classNames via props:

* Pass object `classNames` with classes name: `classNames={{ active: "active_3Ur-d" }}`


# v0.4.1
## Fixes padding issue with `Stepper`

Fixes the `Stepper` component having some leftover padding when collapsing the step labels on small sizes.

# v0.4.0
## Adds initial `Stepper` component

A sweet new component for all your flow needs.

# v0.3.0
## Adds enhancements to `Select`

Adds the following to the `Select` component:

* Pass a `block` property to toggle if the `Select` button is a block button or normal one (defaults to `true`)
* Pass a `size` property (one of `xs, sm, md, lg`) to select the size of the `Select` button (defaults to `md`)
* Pass an `id` property to `Select` to set the id of the toggler button

# v0.2.1
## Fixes prop type warning

Updates the min prop-type version to 15.5.10 package.

# v0.2.0
## Adds keyboard navigation to `Select`

This release adds simple keyboard navigation to the `Select` component.

# v0.1.1
## Fixes exporting

The previous published version did not export anything, as it was missing webpack configuration. This release fixes that and makes this library consumable.

# v0.1.0
## First release

Misses a lot of features, mostly here to get the build/deploy system working.
