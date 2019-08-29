const postcssCustomProperties = require('postcss-custom-properties');
const postcssCustomMedia = require('postcss-custom-media');

module.exports = {
    plugins: [
      require('autoprefixer'),
      postcssCustomProperties(),
      postcssCustomMedia ()
    ]
  }