const getBranch = require('git-branch');
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

const branch = getBranch.sync();
const assetPrefix =
  process.env.NODE_ENV === 'production'
    ? `/neptune-web${branch !== 'master' ? `/branch/${branch}` : ''}`
    : '';

module.exports = () =>
  withTM(
    withImages(
      withFonts(
        withCSS(
          withMDX({
            transpileModules: ['@transferwise/dynamic-flows'],
            pageExtensions,
            assetPrefix,
            env: {
              ASSET_PREFIX: assetPrefix,
            },
            webpack: (config) => {
              config.module.rules.push({
                test: /\.code.js$/,
                use: 'raw-loader',
              });

              return config;
            },
          }),
        ),
      ),
    ),
  );
