# v1.0.3
## Make stepper tooltips only appear on non-touch devices

Tooltips on the stepper on touch devices have caused problems with going back and overall confusion because of their behaviour, so we removed them.

# v1.0.2
## Make stepper tooltips adapt to length and not go off screen

Stepper tooltips max width now 100%. In sm and md screens the first and last tooltips are moved so they won't go offscreen.

# v1.0.1
## Fix tooltip hovering

Before you could trigger tooltips by clicking on the tooltip body. Now you actually have to hover or focus the element

# v1.0.0
## Allow all steps to be clickable in stepper instead of only the previous ones

Steps after the active one get clickable style when having an onClick prop.

# v0.6.0
## Adds a Tooltip element

In addition, makes the Stepper use the tooltip.

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
