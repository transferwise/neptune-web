const postcssImport = require("postcss-import");
const autoprefixer = require("autoprefixer");
const postcssCustomProperties = require("postcss-custom-properties");
const postcssCustomMedia = require("postcss-custom-media");
const cssnano = require("cssnano");

module.exports = {
  plugins: [
    postcssImport(),
    autoprefixer(),
    postcssCustomProperties(),
    postcssCustomMedia(),
    cssnano({
      preset: "default"
    }),
  ],
  map: false
};
