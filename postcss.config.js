require('postcss-import');
require('autoprefixer');
require('@arshaw/postcss-custom-properties');
require('postcss-custom-media');
require('cssnano');

module.exports = {
  plugins: {
    'postcss-import': {},
    autoprefixer: {},
    '@arshaw/postcss-custom-properties': {
      importFrom: [
        '../../node_modules/@transferwise/neptune-tokens/colors.css',
        '../../node_modules/@transferwise/neptune-tokens/spacing.css',
      ],
      preserveWithFallback: true,
    },
    'postcss-custom-media': {
      stage: 1,
    },
    cssnano: {
      preset: 'default',
    },
  },
};
