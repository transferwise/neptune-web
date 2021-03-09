const rehypePrism = require('@mapbox/rehype-prism');
const rehypeSlug = require('rehype-slug');
const withCSS = require('@zeit/next-css');
const withImages = require('next-images');
const withMDX = require('@next/mdx')({
  options: {
    rehypePlugins: [rehypeSlug, rehypePrism],
  },
});
const withTM = require('next-transpile-modules');

const pageExtensions = ['js', 'mdx', 'tsx'];

const branch = process.env.CIRCLE_BRANCH;
const assetPrefix =
  process.env.NODE_ENV === 'production'
    ? `/neptune-web${branch === 'main' ? '' : `/branch/${branch}`}`
    : '';

module.exports = () =>
  withTM(
    withImages(
      withCSS(
        withMDX({
          transpileModules: [
            '@transferwise/dynamic-flows',
            // Required for labs which is only exported as es version.
            '@transferwise/components',
            '@transferwise/neptune-validation',
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

          webpack(config, options) {
            const { isServer } = options;

            config.module.rules.push(
              {
                test: [/\.code.js$/, /\.txt$/],
                use: 'raw-loader',
              },
              {
                test: /\.(woff(2)?|eot|ttf|otf|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                  {
                    loader: require.resolve('url-loader'),
                    options: {
                      limit: 8192,
                      fallback: require.resolve('file-loader'),
                      publicPath: `${assetPrefix}/_next/static/chunks/fonts/`,
                      outputPath: `${isServer ? '../' : ''}static/chunks/fonts/`,
                      name: '[name]-[hash].[ext]',
                      esModule: false,
                    },
                  },
                ],
              },
            );

            return config;
          },
        }),
      ),
    ),
  );
