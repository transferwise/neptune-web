const gulp = require('gulp');
const less = require('gulp-less');
const postcss = require('gulp-postcss');
const plumber = require('gulp-plumber');
const cached = require('gulp-cached');
const dependents = require('gulp-dependents');
const print = require('gulp-print').default;
const filter = require('gulp-filter');
const { argv } = require('yargs');
const rename = require('gulp-rename');

// Less Compiler
const lessCompiler = () => {
  const excludeBundles = argv.dev ? ['**', '!src/less/*.bundle.less'] : ['**'];
  return gulp
    .src(['src/less/*.less'])
    .pipe(cached('less'))
    .pipe(dependents())
    .pipe(filter(excludeBundles))
    .pipe(print((filepath) => `compiled: ${filepath}`))
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss())
    .pipe(
      rename((path) => {
        /* eslint-disable-next-line */
        path.basename = path.basename.replace('.bundle', '');
      }),
    )
    .pipe(gulp.dest('dist/css'));
};

const customProperties = () => {
  return gulp.src(['src/less/variables/*.less']).pipe(gulp.dest('dist/css/variables'));
};

// Watch files
const lessWatcher = () => {
  gulp.watch(['src/**/*.less'], gulp.series(lessCompiler, customProperties));
};

exports.lessWatcher = lessWatcher;
exports.lessCompiler = lessCompiler;
exports.customProperties = customProperties;
