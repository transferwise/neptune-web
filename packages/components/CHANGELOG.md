# v4.8.1
## Fix proptypes for FlowNavigation
onClose no longer a required prop for FlowNavigation

# v4.8.0
## Improved UX in multiple components:

* Focus first option after searching in Select
* Allow opening of Select by pressing Enter while focused
* Allow opening popovers by pressing Enter while focused

# v4.7.0
## Add RadioOption, CheckboxOption, and NavigationOption

![image](https://user-images.githubusercontent.com/5443561/47721187-78aa1000-dc47-11e8-9155-8cb9b5feead0.png)

# v4.6.0
## Close button for FlowNavigation is now hidden if onClose is undefined 
The FlowNavigation component no longer renders the close button if the onClose prop is undefined.

# v4.5.3
## Class names can now be overridden consistently on Select component 
Custom classNames supplied as a prop to the Select component are now applied consistently across the entire component.

# v4.5.2
## Allow class names to be overridden on Select component flags
Custom classNames supplied as a prop to the Select component are now applied to the flag icons.

# v4.5.1
## Make modals not destroy ssr

Previously, modals would throw when trying to ssr as they are accessing document directly, this release fixes that issue.

# v4.5.0
## Proxy over other properties of modal to the rendered component

Adds a `className` prop to `Modal`, in addition, when it gets passed any unknown properties, it'll proxy them to the modal instance that gets rendered.

# v4.4.0
## Add modal component

![modal-mobile](https://user-images.githubusercontent.com/1889234/44737897-20da1600-aaeb-11e8-8f76-288598d30b41.gif)
![modal-desktop](https://user-images.githubusercontent.com/1889234/44737899-20da1600-aaeb-11e8-8bc8-ac993273423c.gif)

# v4.3.5
## Parse MoneyInput inputs as positive numbers

Since you're entering money, you can't enter negative numbers. When you enter a negative amount now, it'll be parsed as positive.

# v4.3.4
## Change Select component's styles

Currency options now show the flag in every device size and keyboard focused options have the same style as hovered elements, rather than active ones.

# v4.3.3
## Make money input not have decimals for integer amounts

Changes formatting of money input so that when no decimals are provided, it shows an integer amount when formatting. If a user inputs decimals, we format with the currency's decimals.

# v4.3.2
## Wrap popover trigger in span unless it is a DOM element itself

This allows passing `Message` and `Fragment` as the trigger in addition to string.

# v4.3.1
## Change Option's label, note and secondary proptypes to node

This is necessary for translations

# v4.3.0
## Add money component

![image](https://user-images.githubusercontent.com/5443561/44519282-40310780-a6d5-11e8-9ee6-07b85dc810e5.png)

Docs can be seen [here](https://transferwise.github.io/components#money).

# v4.2.1
## Allow adding custom action label and Select elemnt props as node

This is necessary for translations

# v4.2.0
## Allow adding custom action to the end of MoneyInput options

# v4.1.2
## Change internal popover markup

Previously, popover created a container element for the trigger passed as a child and the popover itself, and overrode styles to make the popover itself not be styled like the container that acted as a trigger.

Now, popover decorates the trigger passed as a child with accessibility props and an event handler, removing the need for a wrapper element and custom styles.

This also enables focus style support out of the box.

# v4.1.1
## Make popover title accept React elements as type

This is necessary when we pass in translated strings using `retranslate` `Message` component.

# v4.1.0
## Add popover component

![popover](https://user-images.githubusercontent.com/5443561/43467855-976b36ea-94da-11e8-8e69-85d67447f7c0.gif)

# v4.0.4
## Set correct token for npm publish

# v4.0.3
## Update Airbnb ESLint config and related dependencies

# v4.0.2
## Allow duplicates in MoneyInput, remove headers when searching

<img src="https://user-images.githubusercontent.com/5443561/42321960-81e08010-8052-11e8-9631-beba369482f8.gif" width="480">

# v4.0.1
## Set checkbox type to button

Set checkbox type to button to prevent form submissions.

# v4.0.0
## Fix bundling of transition group

In v3.1.0, we introduced bundling of react's transition group library, but it pulled in react dom as a dependency. This fixes that.

# v3.1.1
## Fix externals for root

External React and PropTypes did not work,
as they are exposed as variables different to the library name on the window.

# v3.1.0
## Add previous step name to back button for flow navigation

![flow_navigation](https://user-images.githubusercontent.com/5443561/40305152-3f0fd508-5cf1-11e8-9018-f3b7b941845b.gif)

# v3.0.1
## CSS cleanup
- No need for z-index fix (see v2.1.3) anymore, bootstrap was changed

# v3.0.0
## React 16 and not accidentally bundling react 🙄

Moves to react 16 and stops bundling react and prop-types.

# v2.1.4
## Fix done class name in FlowNavigation
- Bottom border was not being removed when done was passed in to FlowNavigation

# v2.1.3
## Fix money input z-index problems
- Multiple MoneyInputs visible (Calculator), currency select button was on top of dropdown

# v2.1.2
## Clear money input search when selecting a currency

Also adds auto-focusing on search input when opening a searchable select

# v2.1.1
## Fix money input search icon

Also fix Select demo component in docs.

# v2.1.0
## Add money input component

![image](https://user-images.githubusercontent.com/9271565/39634480-9a40aff0-4fc3-11e8-8685-f5550f6324b0.png)

Also adds a "separator" element to the select component.

# v2.0.5
## Select - search with space II.
- Disable preventDefault of SPACE entirely when typed into searchBox (need for option selection, opening of Select)

# v2.0.4
## Remove babel-preset-react-app
- The React preset for Babel was shipped with `useBuiltIns: true` which led to broken functionality in IE
- The caveat is bundle size increased from ~13 Kb to ~19Kb.

# v2.0.3
## Move babel config to babelrc file
- This should allow this module to be used within a babel 7 setup by not publishing its babelrc config

# v2.0.2
## Select - search with space
- Fix ability to type SPACE in the search box input field of Select (skip preventDefault when typing into the search field)

# v2.0.1
## Make flow navigation more flexible
- Hide avatar and stepper if the done prop passed is true

# v2.0.0
## Stops bundling currency flags

This makes the output CSS smaller and means we can avoid duplicating the flags CSS
if our app needs it in other places as well.

# v1.1.1
## Select fixes

- Open Select by pressing UP/DOWN arrows
- Open Select by pressing SPACE
- Select an option by pressing SPACE
- Disable TAB navigation when Select is open, mimicking default behaviour
- Close Select when clicking on another one (no more multiple Selects open)
- Attach document event listeners only when Select is open
- Add tests for the functionalities above
- Extract helper utilities to common directory to be shared by specs
- Simplify existing tests for better readability

# v1.1.0
## Add FlowNavigation component

This is a component used for our flows (like card ordering, borderless topups, transfers), to be displayed at the top as navigation. It's an enhancement of the stepper.

![image](https://user-images.githubusercontent.com/9271565/36148989-9c174dfc-10c6-11e8-9fb4-175a00b37217.png)

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
