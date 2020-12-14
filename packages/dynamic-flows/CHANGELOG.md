# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [8.0.1](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@8.0.0...@transferwise/dynamic-flows@8.0.1) (2020-12-14)


### Bug Fixes

* improve UX of file uploading step in Upload component ([#729](https://github.com/transferwise/neptune-web/issues/729)) ([574648b](https://github.com/transferwise/neptune-web/commit/574648be21d2056418631d2e6d9e04d686c1715a))





# [8.0.0](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@7.0.4...@transferwise/dynamic-flows@8.0.0) (2020-12-11)


* refactor!: consumers must now provide neptune components, css and icons (#733) ([551330b](https://github.com/transferwise/neptune-web/commit/551330b8fad9c9d848504ef63dc467429ffd12a3)), closes [#733](https://github.com/transferwise/neptune-web/issues/733)


### BREAKING CHANGES

* Consumers must now provide neptune components, css and icons packages





## [7.0.4](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@7.0.3...@transferwise/dynamic-flows@7.0.4) (2020-12-11)

**Note:** This was a breaking change even if it was marked as minor update. Consumers must provide @transferwise/components, @transferwise/icons and @transferwise/neptune-css from now on.




## [7.0.3](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@7.0.2...@transferwise/dynamic-flows@7.0.3) (2020-12-10)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [7.0.2](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@7.0.1...@transferwise/dynamic-flows@7.0.2) (2020-12-09)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [7.0.1](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@7.0.0...@transferwise/dynamic-flows@7.0.1) (2020-12-07)

**Note:** Version bump only for package @transferwise/dynamic-flows





# [7.0.0](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@6.1.10...@transferwise/dynamic-flows@7.0.0) (2020-12-07)


### Code Refactoring

* JsonSchemaForm onChange(model, triggerSchema, triggerModel) [ADS-1747] ([#718](https://github.com/transferwise/neptune-web/issues/718)) ([5f4685b](https://github.com/transferwise/neptune-web/commit/5f4685b13a16a38afe720e97693a7a7d0bb7dce6))


### BREAKING CHANGES

* JsonSchemaForm onChange callback is now called with:

`onChange(model, triggerSchema, triggerModel)` and the consumer can use the now exposed `isValidSchema` function to validate either the entire model or the trigger model.





## [6.1.10](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@6.1.9...@transferwise/dynamic-flows@6.1.10) (2020-12-04)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [6.1.9](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@6.1.8...@transferwise/dynamic-flows@6.1.9) (2020-12-03)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [6.1.8](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@6.1.7...@transferwise/dynamic-flows@6.1.8) (2020-12-03)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [6.1.7](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@6.1.6...@transferwise/dynamic-flows@6.1.7) (2020-12-03)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [6.1.6](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@6.1.5...@transferwise/dynamic-flows@6.1.6) (2020-12-03)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [6.1.5](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@6.1.4...@transferwise/dynamic-flows@6.1.5) (2020-12-02)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [6.1.4](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@6.1.3...@transferwise/dynamic-flows@6.1.4) (2020-12-02)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [6.1.3](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@6.1.2...@transferwise/dynamic-flows@6.1.3) (2020-12-02)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [6.1.2](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@6.1.1...@transferwise/dynamic-flows@6.1.2) (2020-12-02)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [6.1.1](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@6.1.0...@transferwise/dynamic-flows@6.1.1) (2020-12-02)

**Note:** Version bump only for package @transferwise/dynamic-flows





# [6.1.0](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@6.0.2...@transferwise/dynamic-flows@6.1.0) (2020-11-30)


### Features

* Pass down disabled prop from schema ([#706](https://github.com/transferwise/neptune-web/issues/706)) ([b545849](https://github.com/transferwise/neptune-web/commit/b545849b714274f61015b0260d254a8bed6aed70))





## [6.0.2](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@6.0.1...@transferwise/dynamic-flows@6.0.2) (2020-11-30)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [6.0.1](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@6.0.0...@transferwise/dynamic-flows@6.0.1) (2020-11-26)

**Note:** Version bump only for package @transferwise/dynamic-flows





# [6.0.0](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@5.14.0...@transferwise/dynamic-flows@6.0.0) (2020-11-25)


* refactor!: Neptune Web November Release (#695) ([e04fe15](https://github.com/transferwise/neptune-web/commit/e04fe15cc94116cd1c9e9f867a8378a0275edf33)), closes [#695](https://github.com/transferwise/neptune-web/issues/695) [#623](https://github.com/transferwise/neptune-web/issues/623) [#624](https://github.com/transferwise/neptune-web/issues/624) [#653](https://github.com/transferwise/neptune-web/issues/653) [#657](https://github.com/transferwise/neptune-web/issues/657) [#659](https://github.com/transferwise/neptune-web/issues/659) [#658](https://github.com/transferwise/neptune-web/issues/658) [#654](https://github.com/transferwise/neptune-web/issues/654) [#655](https://github.com/transferwise/neptune-web/issues/655) [#498](https://github.com/transferwise/neptune-web/issues/498) [#672](https://github.com/transferwise/neptune-web/issues/672) [#650](https://github.com/transferwise/neptune-web/issues/650) [#684](https://github.com/transferwise/neptune-web/issues/684) [#691](https://github.com/transferwise/neptune-web/issues/691) [#671](https://github.com/transferwise/neptune-web/issues/671) [#697](https://github.com/transferwise/neptune-web/issues/697)


### BREAKING CHANGES

* Neptune Web November Release (#695)
* add conditionally required aria-label or aria-labelledby
* required onclick
* onAmountChange will now trigger even if the value is empty
* Marketing components CSS can now be found in: https://github.com/transferwise/marketing-components/tree/main/packages/css

Co-authored-by: Helen Durrant <61203573+helendurranttw@users.noreply.github.com>
* DateInput - onChange when month is not selected (#614)

Before: When month is not selected, it defaults to 0 which is January. This results in the component dispatching `onChange` with a seemingly valid data, when in reality the user hasn't finished composing the date.
After: When month is not selected, we don't construct a Date object, and the `onChange` event contains `null` instead.

Before: onChange was not being called if the user de-selected a month
After: onChange is called with null
* date input onFocus/onBlur grouped events (#626)

DateInput now only triggers “onFocus” and “onBlur” when the focus changes outside of its 3 sub-components, and not when cycling through them.
* base font size is now 16px across all screen widths
* consumer will have to provide icons and neptune-css
* this removes the size prop from Alert - there is now only one size





# [5.14.0](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@5.13.0...@transferwise/dynamic-flows@5.14.0) (2020-11-24)


### Features

* ADS-1721 Client side persist async validation ([#694](https://github.com/transferwise/neptune-web/issues/694)) ([076b81c](https://github.com/transferwise/neptune-web/commit/076b81c25e31e88b734f79a88bc10f2aeeea7b8d))





# [5.13.0](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@5.12.1...@transferwise/dynamic-flows@5.13.0) (2020-11-24)


### Features

* bump components version to allow searching descriptions on Selects ([#692](https://github.com/transferwise/neptune-web/issues/692)) ([dece883](https://github.com/transferwise/neptune-web/commit/dece883f1fb83305576ecd60a7334828b0f62e0d))





## [5.12.1](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@5.12.0...@transferwise/dynamic-flows@5.12.1) (2020-11-24)

**Note:** Version bump only for package @transferwise/dynamic-flows





# [5.12.0](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@5.11.3...@transferwise/dynamic-flows@5.12.0) (2020-11-23)


### Features

* Remove oneOf schemas defaulting logic ([#688](https://github.com/transferwise/neptune-web/issues/688)) ([8087fe8](https://github.com/transferwise/neptune-web/commit/8087fe8c90531c78f1258416e01c7dc73b27ea34))





## [5.11.3](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@5.11.2...@transferwise/dynamic-flows@5.11.3) (2020-11-17)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [5.11.2](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@5.11.1...@transferwise/dynamic-flows@5.11.2) (2020-11-16)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [5.11.1](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@5.11.0...@transferwise/dynamic-flows@5.11.1) (2020-11-16)


### Bug Fixes

* PersistAsyncSchema not broadcasting error 500 ([#673](https://github.com/transferwise/neptune-web/issues/673)) ([bacd07f](https://github.com/transferwise/neptune-web/commit/bacd07f449276a3219b5b00fc6d91ff309d2192b))





# [5.11.0](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@5.10.0...@transferwise/dynamic-flows@5.11.0) (2020-11-13)


### Features

* pass down displayFormat ([#675](https://github.com/transferwise/neptune-web/issues/675)) ([e297fb9](https://github.com/transferwise/neptune-web/commit/e297fb9f07faf1dc94c7bad5247ef55b5fa8d952))





# [5.10.0](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@5.9.1...@transferwise/dynamic-flows@5.10.0) (2020-11-12)


### Features

* update persist async error contract and broadcast on error ([#670](https://github.com/transferwise/neptune-web/issues/670)) ([409604c](https://github.com/transferwise/neptune-web/commit/409604cf1ef10f8a6b277e1e9f61ae106188245a))





## [5.9.1](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@5.9.0...@transferwise/dynamic-flows@5.9.1) (2020-11-11)

**Note:** Version bump only for package @transferwise/dynamic-flows





# [5.9.0](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@5.8.7...@transferwise/dynamic-flows@5.9.0) (2020-11-10)


### Features

* persistAsyncSchema renders passed down errors ([5e0e493](https://github.com/transferwise/neptune-web/commit/5e0e4930caf443c86a881d9e73776e3fbcac6989))





## [5.8.7](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@5.8.6...@transferwise/dynamic-flows@5.8.7) (2020-11-10)


### Bug Fixes

* broadcast valid model on schema change ([#661](https://github.com/transferwise/neptune-web/issues/661)) ([9714bf0](https://github.com/transferwise/neptune-web/commit/9714bf0f447e9ccc53bb9b4523afff80a8833446))





## [5.8.6](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@5.8.5...@transferwise/dynamic-flows@5.8.6) (2020-11-10)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [5.8.5](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@5.8.4...@transferwise/dynamic-flows@5.8.5) (2020-11-09)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [5.8.4](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@5.8.3...@transferwise/dynamic-flows@5.8.4) (2020-11-09)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [5.8.3](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@5.8.2...@transferwise/dynamic-flows@5.8.3) (2020-11-05)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [5.8.2](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@5.8.1...@transferwise/dynamic-flows@5.8.2) (2020-11-04)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [5.8.1](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@5.8.0...@transferwise/dynamic-flows@5.8.1) (2020-11-03)

**Note:** Version bump only for package @transferwise/dynamic-flows





# [5.8.0](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@5.7.1...@transferwise/dynamic-flows@5.8.0) (2020-10-29)


### Features

* add persist async ([#639](https://github.com/transferwise/neptune-web/issues/639)) ([e965ec2](https://github.com/transferwise/neptune-web/commit/e965ec24e9d4d9e9feb45275185bbac75b415248))





## [5.7.1](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@5.7.0...@transferwise/dynamic-flows@5.7.1) (2020-10-26)

**Note:** Version bump only for package @transferwise/dynamic-flows





# [5.7.0](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@5.6.5...@transferwise/dynamic-flows@5.7.0) (2020-10-21)


### Features

* support new currency flag schema ([#617](https://github.com/transferwise/neptune-web/issues/617)) ([dc83241](https://github.com/transferwise/neptune-web/commit/dc8324196d720005c68b0d5d6d0ed3d4fc6e9026))





## [5.6.5](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@5.6.4...@transferwise/dynamic-flows@5.6.5) (2020-10-21)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [5.6.4](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@5.6.3...@transferwise/dynamic-flows@5.6.4) (2020-10-21)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [5.6.3](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@5.6.2...@transferwise/dynamic-flows@5.6.3) (2020-10-20)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [5.6.2](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@5.6.1...@transferwise/dynamic-flows@5.6.2) (2020-10-19)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [5.6.1](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@5.6.0...@transferwise/dynamic-flows@5.6.1) (2020-10-19)

**Note:** Version bump only for package @transferwise/dynamic-flows





# [5.6.0](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@5.5.4...@transferwise/dynamic-flows@5.6.0) (2020-10-15)


### Features

* dependencies update([#620](https://github.com/transferwise/neptune-web/issues/620)) ([db7ae74](https://github.com/transferwise/neptune-web/commit/db7ae74c4ce52ef8799478837070f03b04534bbe))





## [5.5.4](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@5.5.3...@transferwise/dynamic-flows@5.5.4) (2020-10-13)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [5.5.3](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@5.5.2...@transferwise/dynamic-flows@5.5.3) (2020-10-13)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [5.5.2](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@5.5.1...@transferwise/dynamic-flows@5.5.2) (2020-10-12)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [5.5.1](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@5.5.0...@transferwise/dynamic-flows@5.5.1) (2020-10-12)

**Note:** Version bump only for package @transferwise/dynamic-flows





# [5.5.0](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@5.4.1...@transferwise/dynamic-flows@5.5.0) (2020-10-07)


### Features

* Add 'disabled' prop to JsonSchemaForm [ADS-1617] ([e33fea6](https://github.com/transferwise/neptune-web/commit/e33fea6a7ee8808196c5bd4b219befa9dbaafbe7))





## [5.4.1](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@5.4.0...@transferwise/dynamic-flows@5.4.1) (2020-09-30)


### Bug Fixes

* Neptune Sprint 29/30 - eslint fixes and a11y improvements ([#603](https://github.com/transferwise/neptune-web/issues/603)) ([ffcdba3](https://github.com/transferwise/neptune-web/commit/ffcdba3fff284fce8425892f15f824169f449941))





# [5.4.0](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@5.3.0...@transferwise/dynamic-flows@5.4.0) (2020-09-30)


### Features

* move oneOf alerts to be below the oneOfs ([#606](https://github.com/transferwise/neptune-web/issues/606)) ([05b0433](https://github.com/transferwise/neptune-web/commit/05b04334cda333c01eb84f1cbba9cbde79bf8788))





# [5.3.0](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@5.2.0...@transferwise/dynamic-flows@5.3.0) (2020-09-30)


### Features

* add logic for display order ([#601](https://github.com/transferwise/neptune-web/issues/601)) ([a42fff4](https://github.com/transferwise/neptune-web/commit/a42fff4397bb1b33de9a785314608302c4c6d6c1))





# [5.2.0](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@5.1.6...@transferwise/dynamic-flows@5.2.0) (2020-09-30)


### Features

* move alert ([#605](https://github.com/transferwise/neptune-web/issues/605)) ([b3e4e30](https://github.com/transferwise/neptune-web/commit/b3e4e305fbd40265beb506d49dfa56053f7e6c1c))





## [5.1.6](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@5.1.5...@transferwise/dynamic-flows@5.1.6) (2020-09-29)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [5.1.5](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@5.1.4...@transferwise/dynamic-flows@5.1.5) (2020-09-28)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [5.1.4](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@5.1.3...@transferwise/dynamic-flows@5.1.4) (2020-09-24)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [5.1.3](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@5.1.2...@transferwise/dynamic-flows@5.1.3) (2020-09-23)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [5.1.2](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@5.1.1...@transferwise/dynamic-flows@5.1.2) (2020-09-22)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [5.1.1](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@5.1.0...@transferwise/dynamic-flows@5.1.1) (2020-09-18)

**Note:** Version bump only for package @transferwise/dynamic-flows





# [5.1.0](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@5.0.2...@transferwise/dynamic-flows@5.1.0) (2020-09-17)


### Features

* add alert support to dynamic flows ([#592](https://github.com/transferwise/neptune-web/issues/592)) ([35bdd59](https://github.com/transferwise/neptune-web/commit/35bdd596be8445202f6eaea13b26f0fc0e94ad33))





## [5.0.2](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@5.0.1...@transferwise/dynamic-flows@5.0.2) (2020-09-16)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [5.0.1](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@5.0.0...@transferwise/dynamic-flows@5.0.1) (2020-09-16)

**Note:** Version bump only for package @transferwise/dynamic-flows





# [5.0.0](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@4.1.13...@transferwise/dynamic-flows@5.0.0) (2020-09-16)


* feat!: migration on icons v2 (#588) ([c502370](https://github.com/transferwise/neptune-web/commit/c502370ac25f338bafdf2742b8fedb503d1a32c6)), closes [#588](https://github.com/transferwise/neptune-web/issues/588)


### BREAKING CHANGES

* - Select component now expect 'icon' as a 'node' (React icon component) instead of 'string' (icon name)
- Exposes CloseButton component
- FormControl now accepts 'icon' as 'node'
- deleted '.caret' CSS class
- deleted 'iconfont.less'
- stopped explicitly import 'glyphicons.less' and 'icons.less' from Bootstrap
- renamed '.icon' on '.tw-icon' in styles





## [4.1.13](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@4.1.12...@transferwise/dynamic-flows@4.1.13) (2020-09-15)


### Bug Fixes

* revert icons ([#587](https://github.com/transferwise/neptune-web/issues/587)) ([dd5564a](https://github.com/transferwise/neptune-web/commit/dd5564a7fdf35ab9a9f90138ee7aaa3475fbdd17))





## [4.1.12](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@4.1.11...@transferwise/dynamic-flows@4.1.12) (2020-09-15)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [4.1.11](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@4.1.10...@transferwise/dynamic-flows@4.1.11) (2020-09-15)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [4.1.10](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@4.1.9...@transferwise/dynamic-flows@4.1.10) (2020-09-15)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [4.1.9](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@4.1.8...@transferwise/dynamic-flows@4.1.9) (2020-09-15)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [4.1.8](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@4.1.7...@transferwise/dynamic-flows@4.1.8) (2020-09-14)


### Bug Fixes

* displaying errors after the model has changed ([#581](https://github.com/transferwise/neptune-web/issues/581)) ([42d5e7a](https://github.com/transferwise/neptune-web/commit/42d5e7a2b295c5536b42910d88835d303dff1dc6))





## [4.1.7](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@4.1.6...@transferwise/dynamic-flows@4.1.7) (2020-09-11)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [4.1.6](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@4.1.5...@transferwise/dynamic-flows@4.1.6) (2020-09-11)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [4.1.5](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@4.1.4...@transferwise/dynamic-flows@4.1.5) (2020-09-11)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [4.1.4](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@4.1.3...@transferwise/dynamic-flows@4.1.4) (2020-09-11)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [4.1.3](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@4.1.2...@transferwise/dynamic-flows@4.1.3) (2020-09-11)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [4.1.2](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@4.1.1...@transferwise/dynamic-flows@4.1.2) (2020-09-10)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [4.1.1](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@4.1.0...@transferwise/dynamic-flows@4.1.1) (2020-09-10)

**Note:** Version bump only for package @transferwise/dynamic-flows





# [4.1.0](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@4.0.4...@transferwise/dynamic-flows@4.1.0) (2020-09-09)


### Features

* Add validation to oneOfs ([#550](https://github.com/transferwise/neptune-web/issues/550)) ([3bd3ae3](https://github.com/transferwise/neptune-web/commit/3bd3ae3138fbcd2778ad42d3df1efca343313a28))





## [4.0.4](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@4.0.3...@transferwise/dynamic-flows@4.0.4) (2020-09-08)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [4.0.3](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@4.0.2...@transferwise/dynamic-flows@4.0.3) (2020-09-07)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [4.0.2](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@4.0.0...@transferwise/dynamic-flows@4.0.2) (2020-09-07)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [4.0.1](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@4.0.0...@transferwise/dynamic-flows@4.0.1) (2020-09-07)

**Note:** Version bump only for package @transferwise/dynamic-flows





# [4.0.0](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@3.6.0...@transferwise/dynamic-flows@4.0.0) (2020-09-04)


* feat!: neptune sprint 28 - Neptune CSS refactor and lab (#547) ([d0ea9ef](https://github.com/transferwise/neptune-web/commit/d0ea9ef1272ab2aae57d7a6d470110ec74af1d25)), closes [#547](https://github.com/transferwise/neptune-web/issues/547)


### BREAKING CHANGES

* Moved some CSS out of the css package and into components, deprecated some custom props and changed the directory structure of variable and props files





# [3.6.0](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@3.5.0...@transferwise/dynamic-flows@3.6.0) (2020-08-28)


### Features

* ADS-1539 empty validation on optional field ([#541](https://github.com/transferwise/neptune-web/issues/541)) ([551c6f3](https://github.com/transferwise/neptune-web/commit/551c6f3253f7d4873ae1e6cc619302448be5ea21))





# [3.5.0](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@3.4.1...@transferwise/dynamic-flows@3.5.0) (2020-08-28)


### Features

* ADS-1539 currency selects ([#539](https://github.com/transferwise/neptune-web/issues/539)) ([9c82dad](https://github.com/transferwise/neptune-web/commit/9c82dadcc28ae751dc311fc4a4bd7fda29b18763))





## [3.4.1](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@3.4.0...@transferwise/dynamic-flows@3.4.1) (2020-08-19)

**Note:** Version bump only for package @transferwise/dynamic-flows





# [3.4.0](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@3.3.3...@transferwise/dynamic-flows@3.4.0) (2020-08-18)


### Features

* add a layout service for converting dynamic flow steps without layouts to DynamicLayout format ([92d4488](https://github.com/transferwise/neptune-web/commit/92d4488599c6b0311ff98d5934792519899f6db7))





## [3.3.3](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@3.3.2...@transferwise/dynamic-flows@3.3.3) (2020-08-12)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [3.3.2](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@3.3.1...@transferwise/dynamic-flows@3.3.2) (2020-08-12)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [3.3.1](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@3.3.0...@transferwise/dynamic-flows@3.3.1) (2020-08-11)

**Note:** Version bump only for package @transferwise/dynamic-flows





# [3.3.0](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@3.2.2...@transferwise/dynamic-flows@3.3.0) (2020-08-06)


### Bug Fixes

* adding stylelinting and fixing up basic linting errors ([#461](https://github.com/transferwise/neptune-web/issues/461)) ([bcff126](https://github.com/transferwise/neptune-web/commit/bcff126da2bd28dfe29fce24da54c4a0ace0bf16))
* removing bootstrap and updating tokens / neptune css documentation ([#478](https://github.com/transferwise/neptune-web/issues/478)) ([3c6a650](https://github.com/transferwise/neptune-web/commit/3c6a6505cbe65e26b5b3138d54da13dc94a510f1))


### Features

* value normalizer ([#485](https://github.com/transferwise/neptune-web/issues/485)) ([639e1c4](https://github.com/transferwise/neptune-web/commit/639e1c4cf1d9f4e7a21acf2ff7970fb9e5451fa1))





## [3.2.2](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@3.2.1...@transferwise/dynamic-flows@3.2.2) (2020-07-24)


### Bug Fixes

* oneOf schemas with const will not default to first value ([5d9015c](https://github.com/transferwise/neptune-web/commit/5d9015c6a14ed018ed163d80d8e5f648054c27d2))





## [3.2.1](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@3.2.0...@transferwise/dynamic-flows@3.2.1) (2020-07-23)

**Note:** Version bump only for package @transferwise/dynamic-flows





# [3.2.0](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@3.1.0...@transferwise/dynamic-flows@3.2.0) (2020-07-20)


### Features

* add dynamic layout and associated components ([23f6306](https://github.com/transferwise/neptune-web/commit/23f630654f625ca05c79b9d8edb2879f1985962b))





# [3.1.0](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@3.0.1...@transferwise/dynamic-flows@3.1.0) (2020-07-20)


### Features

* add trigger schema to json schema form model change ([4c4e1b8](https://github.com/transferwise/neptune-web/commit/4c4e1b867d57b46d2d8081cca91c3e03355244a9))





## [3.0.1](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@3.0.0...@transferwise/dynamic-flows@3.0.1) (2020-07-17)

**Note:** Version bump only for package @transferwise/dynamic-flows





# [3.0.0](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@2.2.28...@transferwise/dynamic-flows@3.0.0) (2020-07-14)


* feat!: definition list improvements and more (#476) ([c330ed9](https://github.com/transferwise/neptune-web/commit/c330ed93363feb0864f3636c9fc5e79399df6d20)), closes [#476](https://github.com/transferwise/neptune-web/issues/476)


### BREAKING CHANGES

* Breaking changes in definition list





## [2.2.28](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@2.2.27...@transferwise/dynamic-flows@2.2.28) (2020-07-14)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [2.2.27](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@2.2.26...@transferwise/dynamic-flows@2.2.27) (2020-07-10)


### Bug Fixes

* force resolution of kind-of to 6.0.3 to prevent security vulnerability ([#472](https://github.com/transferwise/neptune-web/issues/472)) ([18316d0](https://github.com/transferwise/neptune-web/commit/18316d05279547a64f7c3d46e8b636b9f05f7db4))





## [2.2.26](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@2.2.25...@transferwise/dynamic-flows@2.2.26) (2020-07-09)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [2.2.25](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@2.2.24...@transferwise/dynamic-flows@2.2.25) (2020-07-08)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [2.2.24](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@2.2.23...@transferwise/dynamic-flows@2.2.24) (2020-07-08)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [2.2.23](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@2.2.22...@transferwise/dynamic-flows@2.2.23) (2020-07-07)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [2.2.22](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@2.2.21...@transferwise/dynamic-flows@2.2.22) (2020-07-06)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [2.2.21](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@2.2.20...@transferwise/dynamic-flows@2.2.21) (2020-07-01)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [2.2.20](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@2.2.19...@transferwise/dynamic-flows@2.2.20) (2020-07-01)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [2.2.19](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@2.2.18...@transferwise/dynamic-flows@2.2.19) (2020-06-30)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [2.2.18](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@2.2.17...@transferwise/dynamic-flows@2.2.18) (2020-06-30)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [2.2.17](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@2.2.16...@transferwise/dynamic-flows@2.2.17) (2020-06-30)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [2.2.16](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@2.2.15...@transferwise/dynamic-flows@2.2.16) (2020-06-29)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [2.2.15](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@2.2.14...@transferwise/dynamic-flows@2.2.15) (2020-06-26)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [2.2.14](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@2.2.13...@transferwise/dynamic-flows@2.2.14) (2020-06-24)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [2.2.13](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@2.2.12...@transferwise/dynamic-flows@2.2.13) (2020-06-24)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [2.2.12](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@2.2.11...@transferwise/dynamic-flows@2.2.12) (2020-06-21)

### Bug Fixes

* Fixing docs css reload ([#409](https://github.com/transferwise/neptune-web/pull/439/commits/04b1424cf694c6e047086b9d83ea0e3ecb4280e5))

### Misc

* Setup a11y tools ([#380](https://github.com/transferwise/neptune-web/pull/439/commits/1324d6f66191b1fdcfdd64932189c2610f156f75))

* Improving docs and tools ([#424](https://github.com/transferwise/neptune-web/pull/439/commits/a9ab3ed8ebedc5baa908e79ea078a578be68693a))

* Fix lint-stage ([#436](https://github.com/transferwise/neptune-web/pull/439/commits/d2b77895e1caab66bdabc8a2b1dee220d2218cd4))

## [2.2.11](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@2.2.10...@transferwise/dynamic-flows@2.2.11) (2020-06-18)


### Performance Improvements

* remove propTypes from components and dynamic-flows build ([#416](https://github.com/transferwise/neptune-web/issues/416)) ([8dadc0d](https://github.com/transferwise/neptune-web/commit/8dadc0d5a1c14173f1d0a0146fc6505a749c71c8))





## [2.2.10](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@2.2.9...@transferwise/dynamic-flows@2.2.10) (2020-06-09)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [2.2.9](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@2.2.8...@transferwise/dynamic-flows@2.2.9) (2020-06-05)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [2.2.8](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@2.2.7...@transferwise/dynamic-flows@2.2.8) (2020-06-04)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [2.2.7](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@2.2.6...@transferwise/dynamic-flows@2.2.7) (2020-06-03)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [2.2.6](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@2.2.5...@transferwise/dynamic-flows@2.2.6) (2020-06-03)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [2.2.5](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@2.2.4...@transferwise/dynamic-flows@2.2.5) (2020-06-01)


### Bug Fixes

* improve schema validation utils ([#383](https://github.com/transferwise/neptune-web/issues/383)) ([e9fbbc3](https://github.com/transferwise/neptune-web/commit/e9fbbc3fac6b64205bc60ff1ab7a873b9631316d))





## [2.2.4](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@2.2.3...@transferwise/dynamic-flows@2.2.4) (2020-06-01)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [2.2.3](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@2.2.2...@transferwise/dynamic-flows@2.2.3) (2020-05-28)


### Bug Fixes

*  babel minify renaming error ([#378](https://github.com/transferwise/neptune-web/issues/378)) ([cfaa8db](https://github.com/transferwise/neptune-web/commit/cfaa8db00b1283f330cf68a4606a4c0d31f8afc5))





## [2.2.2](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@2.2.1...@transferwise/dynamic-flows@2.2.2) (2020-05-27)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [2.2.1](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@2.2.0...@transferwise/dynamic-flows@2.2.1) (2020-05-26)


### Bug Fixes

* fixed changelogs and versions ([#377](https://github.com/transferwise/neptune-web/issues/377)) ([ba23ef2](https://github.com/transferwise/neptune-web/commit/ba23ef263f993b5f1f31227ab3b49570abb82aaa))





# [2.2.0](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@2.1.4...@transferwise/dynamic-flows@2.2.0) (2020-05-26)


### Features

* neptune sprint 21 ([a9da4cd](https://github.com/transferwise/neptune-web/commit/a9da4cd0bba2535bc7bb8222ddb1cde9a27e6cba))





## [2.1.4](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@2.1.3...@transferwise/dynamic-flows@2.1.4) (2020-05-22)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [2.1.3](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@2.1.2...@transferwise/dynamic-flows@2.1.3) (2020-05-21)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [2.1.2](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@2.1.1...@transferwise/dynamic-flows@2.1.2) (2020-05-15)

**Note:** Version bump only for package @transferwise/dynamic-flows





## [2.1.1](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@2.1.0...@transferwise/dynamic-flows@2.1.1) (2020-05-15)

**Note:** Version bump only for package @transferwise/dynamic-flows





# [2.1.0](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@2.0.1...@transferwise/dynamic-flows@2.1.0) (2020-05-14)


### Features

* add support for const schemas, select boxes for oneOf schemas ([d2a6c8d](https://github.com/transferwise/neptune-web/commit/d2a6c8d62f820492633ea10dcc75d2229002cf6e))





## [2.0.1](https://github.com/transferwise/neptune-web/compare/@transferwise/dynamic-flows@2.0.0...@transferwise/dynamic-flows@2.0.1) (2020-05-14)

**Note:** Version bump only for package @transferwise/dynamic-flows





# 2.0.0 (2020-05-14)


* refactor!: move formControl and Field to dynamic-flows (#338) ([5ae2078](https://github.com/transferwise/neptune-web/commit/5ae20788d3ad8c40282674964dbb40098dc08c14)), closes [#338](https://github.com/transferwise/neptune-web/issues/338)


### BREAKING CHANGES

* FormControl is no longer available inside @transferwise/components please do import from @transferwise/dynamic-flows

* chore: adjust paths to formControl

* feat: add field to dynamic-flows

* refactor!: moved field inside @transferwise/dynamic-flows
* Field is no longer available inside @transferwise/components please do import from @transferwise/dynamic-flows

* docs: update docs

* chore: yarn.lock update

* chore: removed field reference

* chore: removed private true

* docs: removed old import

* chore: add deprecation note and removed old dep
