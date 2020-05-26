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

const dest = `${process.env.PWD}/${argv.dest || 'dist/css'}`;
const src = `${process.env.PWD}/${argv.src || 'src/**'}/*.less`;

// Less Compiler
const lessCompiler = () => {
  const excludeBundles = argv.dev
    ? ['**', `!${process.env.PWD}/${argv.src}/*.bundle.less`]
    : ['**'];

  return gulp
    .src([src])
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
    .pipe(gulp.dest(dest));
};

const customProperties = () => {
  return gulp.src([src]).pipe(`${dest}/variables`);
};

// Watch files
const lessWatcher = () => {
  gulp.watch([`${src}/*.less`], gulp.series(lessCompiler, customProperties));
};

exports.lessWatcher = lessWatcher;
exports.lessCompiler = lessCompiler;
exports.customProperties = customProperties;
