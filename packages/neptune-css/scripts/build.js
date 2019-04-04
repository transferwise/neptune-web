"use strict";

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = "production";
process.env.NODE_ENV = "production";

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on("unhandledRejection", err => {
  throw err;
});

const path = require("path");
const chalk = require("chalk");
const fs = require("fs-extra");
const webpack = require("webpack");
const formatWebpackMessages = require("react-dev-utils/formatWebpackMessages");
const FileSizeReporter = require("react-dev-utils/FileSizeReporter");
const printBuildError = require("react-dev-utils/printBuildError");
const del = require("del");

// Ensure environment variables are read.
require("../config/env");
const configFactory = require("../config/webpack.config");
const paths = require("../config/paths");

const measureFileSizesBeforeBuild =
  FileSizeReporter.measureFileSizesBeforeBuild;
const printFileSizesAfterBuild = FileSizeReporter.printFileSizesAfterBuild;

// These sizes are pretty large. We'll warn for bundles exceeding them.
const WARN_AFTER_BUNDLE_GZIP_SIZE = 512 * 1024;
const WARN_AFTER_CHUNK_GZIP_SIZE = 1024 * 1024;

Promise.resolve()
  .then(() => {
    return getBundleEntries(paths.appBundles);
  })
  .then(entries => {
    fs.emptyDirSync(paths.appBuild);
    return build(entries);
  })
  .then(
    async ({ stats, warnings }) => {
      if (warnings.length) {
        printWarnings(warnings);
      }
      console.log("File sizes after gzip:\n");

      printFileSizesAfterBuild(
        stats,
        await measureFileSizesBeforeBuild(paths.appBuild),
        paths.appBuild,
        WARN_AFTER_BUNDLE_GZIP_SIZE,
        WARN_AFTER_CHUNK_GZIP_SIZE
      );
    },
    err => {
      console.log(chalk.red("Failed to compile.\n"));
      printBuildError(err);
      process.exit(1);
    }
  )
  .catch(err => {
    if (err && err.message) {
      console.log(err.message);
    }
    process.exit(1);
  })
  .then(() => {
    cleanBuild();
  });

// Create the production build and print the deployment instructions.
const build = entries => {
  console.log("Creating an optimized production build...");
  const config = configFactory("production", entries);
  let compiler = webpack(config);

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      let messages;
      if (err) {
        if (!err.message) {
          return reject(err);
        }
        messages = formatWebpackMessages({
          errors: [err.message],
          warnings: []
        });
      } else {
        messages = formatWebpackMessages(
          stats.toJson({ all: false, warnings: true, errors: true })
        );
      }
      if (messages.errors.length) {
        // Only keep the first error. Others are often indicative
        // of the same problem, but confuse the reader with noise.
        if (messages.errors.length > 1) {
          messages.errors.length = 1;
        }
        return reject(new Error(messages.errors.join("\n\n")));
      }

      const resolveArgs = {
        stats,
        warnings: messages.warnings
      };

      return resolve(resolveArgs);
    });
  });
};

const getBundleEntries = source => {
  return new Promise((resolve, reject) => {
    let entries = {};
    try {
      entries = fs.readdirSync(source).map(name => ({
        name: name.split(".")[0].toLowerCase(),
        path: path.join(source, name)
      }));
      return resolve(entries);
    } catch (err) {
      reject(err);
    }
  });
};

const printWarnings = warnings => {
  console.log(chalk.yellow("Compiled with warnings.\n"));
  console.log(warnings.join("\n\n"));
  console.log(
    "\nSearch for the " +
      chalk.underline(chalk.yellow("keywords")) +
      " to learn more about each warning."
  );
  console.log(
    "To ignore, add " +
      chalk.cyan("// eslint-disable-next-line") +
      " to the line before.\n"
  );
};

const cleanBuild = () => del([`${paths.appBuild}/*.js`]);
