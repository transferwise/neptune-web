require('postcss-import');
require('autoprefixer');
require('postcss-custom-properties');
require('postcss-custom-media');
require('cssnano');

module.exports = {
  plugins: {
    'postcss-import': {},
    autoprefixer: {},
    'postcss-custom-properties': {},
    'postcss-custom-media': {
      stage: 1,
    },
    cssnano: {
      preset: 'default',
    },
  },
};
