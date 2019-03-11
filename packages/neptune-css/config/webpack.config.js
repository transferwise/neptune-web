const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const paths = require("./paths");
const fs = require("fs");
const path = require("path");

module.exports = function(mode, entries) {
  return {
    mode,
    entry: entries.reduce((entryPoints, entry) => {
      entryPoints[entry.name] = entry.path;
      return entryPoints;
    }, {}),
    output: {
      path: paths.appBuild
    },
    plugins: [
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "[name].css",
        chunkFilename: "[id].css"
      })
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.less$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"]
        },
        {
          test: /fonts.*\.(woff|woff2|svg|eot|ttf)/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "fonts/",
              }
            }
          ]
        },
        {
          test: /img.*\.(png|svg|jpg|gif)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "img/",
              }
            }
          ]
        }
      ]
    },
    optimization: {
      minimizer: [new OptimizeCSSAssetsPlugin({})],
      splitChunks: {
        cacheGroups: entries.forEach(entry => {
          return {
            [entry.name]: {
              name: entry.name,
              enforce: true
            }
          };
        })
      }
    }
  };
};
