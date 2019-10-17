const rehypePrism = require('@mapbox/rehype-prism');
const rehypeSlug = require('rehype-slug');
const getPageMap = require('next-page-map');
const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');
const withImages = require('next-images');
const withMDX = require('@next/mdx')({
  options: {
    rehypePlugins: [rehypeSlug, rehypePrism],
  },
});

const pageExtensions = ['js', 'jsx', 'md', 'mdx'];

module.exports = withImages(
  withFonts(
    withCSS(
      withMDX({
        assetPrefix: process.env.NODE_ENV === 'production' ? '/neptune' : '',
        pageExtensions,
        publicRuntimeConfig: {
          pageExtensions,
          pageMap: getPageMap({ pageExtensions }),
        },
      }),
    ),
  ),
);
