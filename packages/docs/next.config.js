const rehypePrism = require('@mapbox/rehype-prism');
const rehypeSlug = require('rehype-slug');
const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');
const withImages = require('next-images');
const withMDX = require('@next/mdx')({
  options: {
    rehypePlugins: [rehypeSlug, rehypePrism],
  },
});
const withTM = require('next-transpile-modules');

const pageExtensions = ['js', 'mdx'];

const branch = process.env.CIRCLE_BRANCH;
const assetPrefix =
  process.env.NODE_ENV === 'production'
    ? `/neptune-web${branch === 'main' ? '' : `/branch/${branch}`}`
    : '';

module.exports = () =>
  withTM(
    withImages(
      withFonts(
        withCSS(
          withMDX({
            transpileModules: [
              '@transferwise/dynamic-flows',
              '@transferwise/components',
              '@transferwise/neptune-validation',
              '@transferwise/components',
              'buble',
              'regexpu-core',
              'unicode-match-property-ecmascript',
              'unicode-match-property-value-ecmascript',
            ],
            pageExtensions,
            assetPrefix,
            env: {
              ASSET_PREFIX: assetPrefix,
            },
            webpack: (config) => {
              config.module.rules.push({
                test: [/\.code.js$/, /\.txt$/],
                use: 'raw-loader',
              });

              return config;
            },
          }),
        ),
      ),
    ),
  );
