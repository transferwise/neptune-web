# v12.3.2
## Button label supports jsx
Button label supports jsx, e.g. doing
label={<Message>request-money.form.generate</Message>}

# v12.3.1
## Remove autofocus on Typeahead in docs

# v12.3.0
## Add new Loader component

# v12.2.3
## Update @transferwise/formatting version.

# v12.2.2
## Remove export flex and box.

# v12.2.1
## Fixed modal scroll.

# v12.2.0
## Exposed flex and box.

# v12.1.0
## Update Modal to use dimmer and be more consistent with drawer.

# v12.0.0
## flowNavigation hover label renders jsx not strings->HTML
flowNavigation hover label no longer accepts rendering strings->HTML. hoverHTML-flag is removed.
Any Types.node, e.g. string or element/jsx, are accepted instead.

# v11.1.0
## Add disabled property to options in Select component

# v11.0.3
## Import single function lodash packages instead of whole package
Importing the whole `lodash` package had a side effect of attaching itself as `_` on global context (`window`).
This clashed with `underscore` that uses the same variable, breaking clients due to their different interfaces.

# v11.0.2
## Lock Bootstrap version so `npm ci` won't fail if bootstrap master is not passing

# v11.0.1
## Fix placeholder of undefined in Select

# v11.0.0
## Make "body" of Option component more generic and flexible for use
Just renamed `description` prop to `content` and remove `<p>` wrapping.

# v10.6.1
## Bug fix: flex child props fix.

# v10.6.0
## Add locale support to Money component

# v10.5.1
## FlowNavigation fix for IE 11 support

# v10.5.0
## Add basic dark theme option to FlowNavigation
Currently inverts logo and hides stepper

# v10.4.0
## Add Typeahead component

# v10.3.0
## Add Flex and Box component.

# v10.2.2
## Fixed constructor default size for process indicator

# v10.2.1
## Propagating states for button and process indicator
Can now set props by doing e.g. size={ProcessIndicator.Size.Small}.

# v10.2.0
## Add month format option to DateInput
Exposed a prop to allow DateInput to show shortened versions of months.

# v10.1.0
## Add Chip

# v10.0.2
## Fix wrong button prop in docs
Fix the name of the button's state prop in docs

# v10.0.1
## Upgrade npm version.

# v10.0.0
## Updated major repo dependencies.

|         	| Old    	| New    	|
|---------	|--------	|--------	|
| React   	| 16.3.2 	| 16.8.6 	|
| Babel   	| 6.26.0 	| 7.4.3  	|
| Webpack 	| 1.14.0 	| 4.35.3 	|

# v9.2.0
## Remove padding top of modal body if title is not provided
When we don't have a title provided; we remove the padding top from modal-body to make the modal look more appropriate.

# v9.1.0
## Add Drawer and Sticky 

# v9.0.0
## Update PhoneNumberInput
Remove state props mirroring for PhoneNumberInput

# v8.1.0
## Hide Modal divider if title is not provided
Hiding all dividers was already possible by passing `.no-divider` as a className to the component, but this removes that necessity while maintaining the divider on the footer when there is one.

# v8.0.0
## Update DateInput 
Remove state props mirroring for DateInput

# v7.4.1
## Add `strictMath` to Less loader
Less was failing to process files that have custom properties inside calc() functions.

# v7.4.0
## Add Accordion component

# v7.3.1
## Update dependencies 
- @transferwise/icons
- @transferwise/neptune-css

# v7.3.0
## Add DateLookup to form control
Add DateLookup to form control
Bug fixes for wrong props types declarations and wrong prop values.

# v7.2.0
## Add Form control 
Add form control used to generate forms dynamically starting from json object.

# v7.1.2
## Bug fix for chevron default Size property
The chevron's defaultProp for size had the old PascalCase key, renamed it from `Small` to `SMALL`.

# v7.1.1
## Fix dateLookup button type
The DateLookup component is implemented with a button element, it's type is now set to button to avoid unintended form submissions.

# v7.1.0
## Add Chevron component
Added new small Chevron component, meant to be used by other components. The styles of the component are coming from Neptune CSS.

# v7.0.1
## Add popover bottom right and bottom left placements
These will be automatically selected if:

* Preferred position is left or right
* Placing the popover on both the left and the right hand side of the trigger would result in an overflow on that side.
* Placing the popover below would results in an overflow on one side (it will now therefore be shifted either left, or right).

# v7.0.0
## Extracted text format from component into HOC

# v6.2.0
## Add dynamic input formatting based on provided pattern.

# v6.1.1
## Fixed empty value for Radio Option

# v6.1.0
## Added Alert component

# v6.0.0
## Add Radio Group component
Added <RadioGroup/> component for rendering multiple (2 or more) radio buttons.

Changed Radio Options to broadcast event instead of true of false if selected.

# v5.0.0
## Rename Button component's buttonState property to state

# v4.20.0
## Add Button component
Added Button component for the supported variants and states

# v4.19.6
## Add type checks to deviceDetection
This was causing FlowNavigation problems when using SSR

# v4.19.5
## Bug fix for RadioButton selection
Users were not allowed to select a radio button by clicking on the circular `<button>` element. This version fixed this issue

# v4.19.4
## Adjust DefinitionList
On justified layout force text to the left, use dl-horizontal for smaller height between items.
Add the possibility to have values styled as h3

# v4.19.3
## Fix: Remove `transition` for mobile `Select` since it uses `animation`

# v4.19.2
## Fix: Remove `touchstart` from `Select` and `Popover`

Ios devices used `touchstart` for closing `Select` and `Popover` but that broke selecting values from `Select`

# v4.19.1
## Separate joined MoneyInput class names for css modules

# v4.19.0
## Add css modules support for MoneyInput and Popover

# v4.18.2
## Fix Select component animations

# v4.18.1
## Use `touchstart` on ios devices for `Popover` and `Select`

Ios devices don't recognize `click` event on `document` so we have to use `touchstart`

# v4.18.0
## Add Upload component

# v4.17.0
## Add DefinitionList component

# v4.16.6
## Add callback for processorIndicator status change

# v4.16.5
## Fix tooltip to not block interactions when hidden

# v4.16.4
## Added `appear` prop to modal's `WithInTransition`
This allows the modal to animate in, when it's rendered conditionally in an `open` state

# v4.16.3
## Added `.compact-header` class to modal component
Added option to reduce bottom padding of modal header

# v4.16.2
## Added custom classes to modal
Added option to hide divider in modal, and use compact layout with reduced padding.

# v4.16.1
## Bump @transferwise/formatting version and check for valid locale in MoneyInput
Formatting money strings with an invalid locale doesnt crash anymore, so the check in the demo was removed.

# v4.16.0
## Add ProcessIndicator component

# v4.15.4
## Update readme with more instructions on how to contribute

# v4.15.3
## Refactor PhoneNumberInput internal function to prefer map() to forEach plus storage

# v4.15.2
## refactor `getMidnight` to `getStartOfDay`
Fix failing test and make code more clear

# v4.15.1
## Disable autocomplete for MoneyInput

# v4.15.0
## Add InstructionList component

# v4.14.1
## Improve `MoneyInput` search
Sort options labels to first

# v4.14.0
## Add an XL version of the modal component

# v4.13.0
## Allow Select to open upwards
Pass prop `dropdownUp` to `Select` to use it

# v4.12.1
## Improved regex for allowed chars for PhoneInput. And improved test coverage

# v4.12.0
## Add Date Component

# v4.11.0
## Add telephone input component

# v4.10.0
## Add date lookup component
![image](https://user-images.githubusercontent.com/39053304/50634019-27552e80-0fb2-11e9-8136-8135e564a7e7.png)

# v4.9.2
## Generate random ID only in browser to get rid of differing markup in SSR vs client

# v4.9.1
## Ignore Select dropdownWidth prop on XS screens

# v4.9.0
## Fix Select options to bottom on XS screens
This emulates dropdown behavior in apps
![image](https://user-images.githubusercontent.com/43746750/49293523-113ae680-f4b9-11e8-963c-ad5f23fdc7ac.png)

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
