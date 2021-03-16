module.exports = {
  extends: ['stylelint-config-standard'],
  plugins: ['stylelint-value-no-unknown-custom-properties'],
  rules: {
    'at-rule-no-vendor-prefix': true,
    'media-feature-name-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,
    'no-descending-specificity': null,
    'csstools/value-no-unknown-custom-properties': [
      true,
      {
        importFrom: ['./node_modules/@transferwise/neptune-tokens/tokens.css'],
      },
    ],
  },
  ignoreFiles: ['**/*.js', '**/*.ts', '**/*.tsx'],
};
