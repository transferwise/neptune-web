# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [4.0.0](https://github.com/transferwise/neptune-web/compare/@transferwise/neptune-css@3.0.2...@transferwise/neptune-css@4.0.0) (2020-09-16)


* feat!: migration on icons v2 (#588) ([c502370](https://github.com/transferwise/neptune-web/commit/c502370ac25f338bafdf2742b8fedb503d1a32c6)), closes [#588](https://github.com/transferwise/neptune-web/issues/588)


### BREAKING CHANGES

* - Select component now expect 'icon' as a 'node' (React icon component) instead of 'string' (icon name)
- Exposes CloseButton component
- FormControl now accepts 'icon' as 'node'
- deleted '.caret' CSS class
- deleted 'iconfont.less'
- stopped explicitly import 'glyphicons.less' and 'icons.less' from Bootstrap
- renamed '.icon' on '.tw-icon' in styles





## [3.0.2](https://github.com/transferwise/neptune-web/compare/@transferwise/neptune-css@3.0.1...@transferwise/neptune-css@3.0.2) (2020-09-15)


### Bug Fixes

* revert icons ([#587](https://github.com/transferwise/neptune-web/issues/587)) ([dd5564a](https://github.com/transferwise/neptune-web/commit/dd5564a7fdf35ab9a9f90138ee7aaa3475fbdd17))





## [3.0.1](https://github.com/transferwise/neptune-web/compare/@transferwise/neptune-css@3.0.0...@transferwise/neptune-css@3.0.1) (2020-09-15)

**Note:** Version bump only for package @transferwise/neptune-css





# [3.0.0](https://github.com/transferwise/neptune-web/compare/@transferwise/neptune-css@2.1.3...@transferwise/neptune-css@3.0.0) (2020-09-04)


* feat!: neptune sprint 28 - Neptune CSS refactor and lab (#547) ([d0ea9ef](https://github.com/transferwise/neptune-web/commit/d0ea9ef1272ab2aae57d7a6d470110ec74af1d25)), closes [#547](https://github.com/transferwise/neptune-web/issues/547)


### BREAKING CHANGES

* Moved some CSS out of the css package and into components, deprecated some custom props and changed the directory structure of variable and props files





## [2.1.3](https://github.com/transferwise/neptune-web/compare/@transferwise/neptune-css@2.1.2...@transferwise/neptune-css@2.1.3) (2020-08-19)


### Bug Fixes

* footer padding and icon underline ([#529](https://github.com/transferwise/neptune-web/issues/529)) ([242a394](https://github.com/transferwise/neptune-web/commit/242a3941528741c61cd29cf8a05ecae047bc01c9))





## [2.1.2](https://github.com/transferwise/neptune-web/compare/@transferwise/neptune-css@2.1.1...@transferwise/neptune-css@2.1.2) (2020-08-12)

**Note:** Version bump only for package @transferwise/neptune-css





## [2.1.1](https://github.com/transferwise/neptune-web/compare/@transferwise/neptune-css@2.1.0...@transferwise/neptune-css@2.1.1) (2020-08-06)


### Bug Fixes

* adding stylelinting and fixing up basic linting errors ([#461](https://github.com/transferwise/neptune-web/issues/461)) ([bcff126](https://github.com/transferwise/neptune-web/commit/bcff126da2bd28dfe29fce24da54c4a0ace0bf16))
* removing bootstrap and updating tokens / neptune css documentation ([#478](https://github.com/transferwise/neptune-web/issues/478)) ([3c6a650](https://github.com/transferwise/neptune-web/commit/3c6a6505cbe65e26b5b3138d54da13dc94a510f1))
* replace bootstrap variables with neptune tokens ([#452](https://github.com/transferwise/neptune-web/issues/452)) ([ab0d0fd](https://github.com/transferwise/neptune-web/commit/ab0d0fd7cf24eab48eb02a928527d822605bcbb2)), closes [#468](https://github.com/transferwise/neptune-web/issues/468)





# [2.1.0](https://github.com/transferwise/neptune-web/compare/@transferwise/neptune-css@2.0.0...@transferwise/neptune-css@2.1.0) (2020-07-20)


### Features

* add dynamic layout and associated components ([23f6306](https://github.com/transferwise/neptune-web/commit/23f630654f625ca05c79b9d8edb2879f1985962b))





# [2.0.0](https://github.com/transferwise/neptune-web/compare/@transferwise/neptune-css@1.3.1...@transferwise/neptune-css@2.0.0) (2020-07-14)


* feat!: definition list improvements and more (#476) ([c330ed9](https://github.com/transferwise/neptune-web/commit/c330ed93363feb0864f3636c9fc5e79399df6d20)), closes [#476](https://github.com/transferwise/neptune-web/issues/476)


### BREAKING CHANGES

* Breaking changes in definition list





## [1.3.1](https://github.com/transferwise/neptune-web/compare/@transferwise/neptune-css@1.3.0...@transferwise/neptune-css@1.3.1) (2020-07-10)


### Bug Fixes

* force resolution of kind-of to 6.0.3 to prevent security vulnerability ([#472](https://github.com/transferwise/neptune-web/issues/472)) ([18316d0](https://github.com/transferwise/neptune-web/commit/18316d05279547a64f7c3d46e8b636b9f05f7db4))





# [1.3.0](https://github.com/transferwise/neptune-web/compare/@transferwise/neptune-css@1.2.6...@transferwise/neptune-css@1.3.0) (2020-07-09)


### Features

* expose legacy variables ([#469](https://github.com/transferwise/neptune-web/issues/469)) ([3bda7df](https://github.com/transferwise/neptune-web/commit/3bda7df031963683ad22189a9e5a372c2005dd59))





## [1.2.6](https://github.com/transferwise/neptune-web/compare/@transferwise/neptune-css@1.2.5...@transferwise/neptune-css@1.2.6) (2020-07-07)


### Bug Fixes

* adding missing HR border style ([#463](https://github.com/transferwise/neptune-web/issues/463)) ([0aeebe0](https://github.com/transferwise/neptune-web/commit/0aeebe0869d5de8ea041150cd266da2f4e1c2e73))





## [1.2.5](https://github.com/transferwise/neptune-web/compare/@transferwise/neptune-css@1.2.4...@transferwise/neptune-css@1.2.5) (2020-07-06)


### Bug Fixes

* move class styling to less ([#458](https://github.com/transferwise/neptune-web/issues/458)) ([8b17a8b](https://github.com/transferwise/neptune-web/commit/8b17a8b8bf5cc36851dbc37d4c4f9929ce2b137e))





## [1.2.4](https://github.com/transferwise/neptune-web/compare/@transferwise/neptune-css@1.2.3...@transferwise/neptune-css@1.2.4) (2020-07-01)


### Bug Fixes

* reduce margin for horizontal definition lists ([#435](https://github.com/transferwise/neptune-web/issues/435)) ([70b3966](https://github.com/transferwise/neptune-web/commit/70b396652a252067c37bf3cb86c5d8123f0da8b8))





## [1.2.3](https://github.com/transferwise/neptune-web/compare/@transferwise/neptune-css@1.2.2...@transferwise/neptune-css@1.2.3) (2020-06-24)

**Note:** Version bump only for package @transferwise/neptune-css





## [1.2.2](https://github.com/transferwise/neptune-web/compare/@transferwise/neptune-css@1.2.1...@transferwise/neptune-css@1.2.2) (2020-06-21)

### Bug Fixes

* Fixing docs css reload ([#409](https://github.com/transferwise/neptune-web/pull/439/commits/04b1424cf694c6e047086b9d83ea0e3ecb4280e5))

* WCAG AA compliant color for grey backgrounds ([#426](https://github.com/transferwise/neptune-web/pull/439/commits/64f265dc352f5c3770f2d61f3cf8664055e979af))

* Support for custom media in drawer component ([#427](https://github.com/transferwise/neptune-web/pull/439/commits/1d0cba5dde570056878f8d430628bf36532e78dc))

* Change dates in the date lookup to use buttons ([#431](https://github.com/transferwise/neptune-web/pull/439/commits/3fb6e10c8ffef4f19c6bb3c0f66db8aee59bb0d4))

### Misc

* Improving docs and tools ([#424](https://github.com/transferwise/neptune-web/pull/439/commits/a9ab3ed8ebedc5baa908e79ea078a578be68693a))

* Doc improvements for components ([#373](https://github.com/transferwise/neptune-web/pull/439/commits/d3696abb3c4485be02738ff7a6a3a55bc8214cf9))

## [1.2.1](https://github.com/transferwise/neptune-web/compare/@transferwise/neptune-css@1.2.0...@transferwise/neptune-css@1.2.1) (2020-06-03)


### Bug Fixes

* readd removed colours ([979a4bb](https://github.com/transferwise/neptune-web/commit/979a4bbcf81a3ad05e9b3dc224044d40754c8200))





# [1.2.0](https://github.com/transferwise/neptune-web/compare/@transferwise/neptune-css@1.1.1...@transferwise/neptune-css@1.2.0) (2020-06-03)


### Features

* add Neptune tokens ([#400](https://github.com/transferwise/neptune-web/issues/400)) ([c62db71](https://github.com/transferwise/neptune-web/commit/c62db7152c938fa8e34aa68141f693cddc6705cd))





## [1.1.1](https://github.com/transferwise/neptune-web/compare/@transferwise/neptune-css@1.1.0...@transferwise/neptune-css@1.1.1) (2020-05-26)


### Bug Fixes

* fixed changelogs and versions ([#377](https://github.com/transferwise/neptune-web/issues/377)) ([ba23ef2](https://github.com/transferwise/neptune-web/commit/ba23ef263f993b5f1f31227ab3b49570abb82aaa))





# [1.1.0](https://github.com/transferwise/neptune-web/compare/@transferwise/neptune-css@1.0.0...@transferwise/neptune-css@1.1.0) (2020-05-26)


### Features

* feat: add text-control semantic colour ([#368](https://github.com/transferwise/neptune-web/pull/368)) ([c5801a3](https://github.com/transferwise/neptune-web/commit/c5801a3ab6c6734b6bc9be3a3a7265a85fe77bc3))

### Bug Fixes

* fix: display heading font-sizes on mobile ([#376](https://github.com/transferwise/neptune-web/pull/376)) ([e8b53fc](https://github.com/transferwise/neptune-web/commit/e8b53fc73abe9669b1323c6349f0df4ca59b49f0))


# [1.0.0](https://github.com/transferwise/neptune-web/compare/@transferwise/neptune-css@0.13.3...@transferwise/neptune-css@1.0.0) (2020-05-14)


* refactor!: refactoring neptune core css  (#316) ([3cef1b7](https://github.com/transferwise/neptune-web/commit/3cef1b73411d0cbb2d6f9900d63b493850da5adb)), closes [#316](https://github.com/transferwise/neptune-web/issues/316)


### Bug Fixes

* fix custom media max values ([#315](https://github.com/transferwise/neptune-web/issues/315)) ([e2d4c0d](https://github.com/transferwise/neptune-web/commit/e2d4c0d52742a413c95fa2b79f3d250387da2b2b))


### BREAKING CHANGES

* refactoring Neptune Core styles to produce neptune.core.css
* This fix changes the custom media max values. When bumping the Neptune-css version in your repo would be nice to double check the custom media max filters you are using to verify everything is working nice. Posibly if you had "@media (--screen-sm-max)" now you'd need to update to "@media (--screen-md-max)"





## [0.13.3](https://github.com/transferwise/neptune-web/compare/@transferwise/neptune-css@0.13.2...@transferwise/neptune-css@0.13.3) (2020-04-29)


### Bug Fixes

* changing semvar syntax to support npm ([#313](https://github.com/transferwise/neptune-web/issues/313)) ([8502de1](https://github.com/transferwise/neptune-web/commit/8502de12407a2e59e50ce7cd180d2583d35b8082))





## [0.13.2](https://github.com/transferwise/neptune-web/compare/@transferwise/neptune-css@0.13.1...@transferwise/neptune-css@0.13.2) (2020-04-27)


### Bug Fixes

* remove unnecessary public navigation styles on css package ([#296](https://github.com/transferwise/neptune-web/issues/296)) ([f8194a5](https://github.com/transferwise/neptune-web/commit/f8194a54e097f0f48fd529701eff6f880881a583))





## [0.13.1](https://github.com/transferwise/neptune-web/compare/@transferwise/neptune-css@0.13.0...@transferwise/neptune-css@0.13.1) (2020-04-09)

**Note:** Version bump only for package @transferwise/neptune-css





# [0.13.0](https://github.com/transferwise/neptune-web/compare/@transferwise/neptune-css@0.12.6...@transferwise/neptune-css@0.13.0) (2020-03-02)


### Features

* add flowNavigation less ([a37ecfc](https://github.com/transferwise/neptune-web/commit/a37ecfc9263636f2827395824aec0dbeb35660d3))





## [0.12.6](https://github.com/transferwise/neptune-web/compare/@transferwise/neptune-css@0.12.5...@transferwise/neptune-css@0.12.6) (2020-02-07)


### Bug Fixes

* increase react classnames specificity ([#165](https://github.com/transferwise/neptune-web/issues/165)) ([c7ca670](https://github.com/transferwise/neptune-web/commit/c7ca67084910c7fdc513d343d98a0ed2609a4804))





## [0.12.5](https://github.com/transferwise/neptune-web/compare/@transferwise/neptune-css@0.12.4...@transferwise/neptune-css@0.12.5) (2020-02-07)


### Bug Fixes

* thumbnail styles imported from bootstrap ([#171](https://github.com/transferwise/neptune-web/issues/171)) ([9819cb6](https://github.com/transferwise/neptune-web/commit/9819cb6d04b171b079c790be688ccf919153ef09))





## [0.12.4](https://github.com/transferwise/neptune-web/compare/@transferwise/neptune-css@0.12.3...@transferwise/neptune-css@0.12.4) (2020-01-30)


### Bug Fixes

* add overflow-y:auto ([13830b2](https://github.com/transferwise/neptune-web/commit/13830b28bf0c4e9c89919404739706d543ba8044))





## [0.12.3](https://github.com/transferwise/neptune-web/compare/@transferwise/neptune-css@0.12.2...@transferwise/neptune-css@0.12.3) (2020-01-13)


### Bug Fixes

* add thumbnails CSS ([#145](https://github.com/transferwise/neptune-web/issues/145)) ([30f4583](https://github.com/transferwise/neptune-web/commit/30f458397dccc60fbbd470ea5dfaff28d8132b69))





## [0.12.2](https://github.com/transferwise/neptune-web/compare/@transferwise/neptune-css@0.12.1...@transferwise/neptune-css@0.12.2) (2020-01-08)

**Note:** Version bump only for package @transferwise/neptune-css





## [0.12.1](https://github.com/transferwise/neptune-web/compare/@transferwise/neptune-css@0.12.0...@transferwise/neptune-css@0.12.1) (2020-01-07)

**Note:** Version bump only for package @transferwise/neptune-css





# [0.12.0](https://github.com/transferwise/neptune-web/compare/@transferwise/neptune-css@0.11.0...@transferwise/neptune-css@0.12.0) (2020-01-07)


### Features

* add column-layout and process CSS components ([#139](https://github.com/transferwise/neptune-web/issues/139)) ([38e4ba6](https://github.com/transferwise/neptune-web/commit/38e4ba614492e80fbcceb370c9af2340b7e37973))





# [0.11.0](https://github.com/transferwise/neptune-web/compare/@transferwise/neptune-css@0.10.3...@transferwise/neptune-css@0.11.0) (2019-12-16)


### Features

* add progress-bar CSS for stepper ([#129](https://github.com/transferwise/neptune-web/issues/129)) ([25fa9fa](https://github.com/transferwise/neptune-web/commit/25fa9faf00a48fa145d545e582b9916f0a6fed2f))





## [0.10.3](https://github.com/transferwise/neptune-web/compare/@transferwise/neptune-css@0.10.2...@transferwise/neptune-css@0.10.3) (2019-12-12)

**Note:** Version bump only for package @transferwise/neptune-css





## [0.10.2](https://github.com/transferwise/neptune-web/compare/@transferwise/neptune-css@0.10.1...@transferwise/neptune-css@0.10.2) (2019-12-11)


### Bug Fixes

* add custom property distribution to the build process ([#125](https://github.com/transferwise/neptune-web/issues/125)) ([f995f34](https://github.com/transferwise/neptune-web/commit/f995f34339e5e01fca0255999e638a047d7a7756))





## [0.10.1](https://github.com/transferwise/neptune-web/compare/@transferwise/neptune-css@0.10.0...@transferwise/neptune-css@0.10.1) (2019-12-09)


### Bug Fixes

* add CSS from transferwise.less ([#124](https://github.com/transferwise/neptune-web/issues/124)) ([fc9243a](https://github.com/transferwise/neptune-web/commit/fc9243a0358de291c327b6b8e95432067f8e9c41))





# [0.10.0](https://github.com/transferwise/neptune-web/compare/@transferwise/neptune-css@0.9.1...@transferwise/neptune-css@0.10.0) (2019-12-09)


### Features

* add modal, popover, droppable & tooltip  CSS ([#113](https://github.com/transferwise/neptune-web/issues/113)) ([e11e9f8](https://github.com/transferwise/neptune-web/commit/e11e9f8bd3195e86422241a3ab71267c5cf0517f))





## [0.9.1](https://github.com/transferwise/neptune-web/compare/@transferwise/neptune-css@0.9.0...@transferwise/neptune-css@0.9.1) (2019-12-06)


### Bug Fixes

* remove the extra border in select components ([#114](https://github.com/transferwise/neptune-web/issues/114)) ([6db4f02](https://github.com/transferwise/neptune-web/commit/6db4f026d2652f6c71769df86ad6deb19f7bc250))





# [0.9.0](https://github.com/transferwise/neptune-web/compare/@transferwise/neptune-css@0.8.13...@transferwise/neptune-css@0.9.0) (2019-11-29)


### Features

* distributes custom properties to dist folder ([#105](https://github.com/transferwise/neptune-web/issues/105)) ([daf8a10](https://github.com/transferwise/neptune-web/commit/daf8a10323644fa79c1037df64bbd1f8535a5924))





## [0.8.13](https://github.com/transferwise/neptune-web/compare/@transferwise/neptune-css@0.8.12...@transferwise/neptune-css@0.8.13) (2019-11-08)

**Note:** Version bump only for package @transferwise/neptune-css





## [0.8.12](https://github.com/transferwise/neptune-web/compare/@transferwise/neptune-css@0.8.9...@transferwise/neptune-css@0.8.12) (2019-11-01)


### Bug Fixes

* update svgo version ([#45](https://github.com/transferwise/neptune-web/issues/45)) ([2dcf22b](https://github.com/transferwise/neptune-web/commit/2dcf22b5f2f5a2e4c575fa9b6c9caa439b32068d))





## [0.8.9](https://github.com/transferwise/neptune-web/compare/@transferwise/neptune-css@0.8.8...@transferwise/neptune-css@0.8.9) (2019-09-19)

**Note:** Version bump only for package @transferwise/neptune-css





## [0.8.8](https://github.com/transferwise/neptune-web/compare/@transferwise/neptune-css@0.8.7...@transferwise/neptune-css@0.8.8) (2019-09-18)

**Note:** Version bump only for package @transferwise/neptune-css





## [0.8.7](https://github.com/transferwise/neptune-web/compare/@transferwise/neptune-css@0.8.6...@transferwise/neptune-css@0.8.7) (2019-09-18)

**Note:** Version bump only for package @transferwise/neptune-css





## 0.8.6 (2019-09-18)


### Bug Fixes

* move dependencies to devDependencies ([#51](https://github.com/transferwise/neptune-css/issues/51)) ([09496f2](https://github.com/transferwise/neptune-css/commit/09496f2))





## 0.8.5 (2019-09-18)


### Bug Fixes

* move dependencies to devDependencies ([#51](https://github.com/transferwise/neptune-css/issues/51)) ([09496f2](https://github.com/transferwise/neptune-css/commit/09496f2))





# v0.8.4
## Change navs component ordering in the output to avoid cascade issues in navigation links padding in mobile

# v0.8.3
## Change Close component ordering in the output to avoid cascade issues in navigation close button in mobile

# v0.8.2
## Removed useless container lines that was creating horizontal scroll in mobile

# v0.8.1
## Negative margin temprary fix

# v0.8.0
## Added Snackbar

# v0.7.0
## Added Decision and Accordion CSS.

# v0.6.0
## Changed build process.

# v0.5.6
## Level up Blocks component

# v0.5.5
## Give support for IE11. Add postCSS plugins: Autoprefixer & custom properties
## Add custom media postCSS plugin in order to get rid of Bootstrap variables and use custom media 

# v0.5.4
## Fix chip alignment in IE11

# v0.5.3
## Fix chip design

# v0.5.2
## Fix drawer min width

# v0.5.1
## Fix aligment in chip component

# v0.5.0
## Added chip component

# v0.4.7
## Update name: slider -> slidingPanel

# v0.4.6
## Update drawer content height

# v0.4.5
## TransferWise fonts where missing

# v0.4.4
## Update drawer spacing

# v0.4.3
## Update transition type and duration

# v0.4.2
## Update colored-dot
Since the headings are not scored, the dot is going to be a decorative thing that is not going to appear on the DOM.

# v0.4.1
## Updated drawer sizes

# v0.4.0
## Added dimmer - slider - drawer css

# v0.3.0
## Move dependencies to devDependencies
Some packages (like rxjs, less) were installed for consumers as well. Moving these to `devDependencies`.

# v0.2.0
## Add Chevron component styles
Add chevron componentn styles

# v0.1.0
## Hello Neptune CSS
First release of Neptune CSS (CSS library for the Design System of Transferwise)
