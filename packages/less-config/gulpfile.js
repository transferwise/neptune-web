const gulp = require('gulp');
const less = require('gulp-less');
const postcss = require('gulp-postcss');
const plumber = require('gulp-plumber');
const cached = require('gulp-cached');
const dependents = require('gulp-dependents');
const print = require('gulp-print').default;
const { argv } = require('yargs');
const rename = require('gulp-rename');
const filter = require('gulp-filter');
const cssimport = require('gulp-cssimport');

const addPwd = (path) => `${process.env.PWD}/${path}`;

const src = addPwd(argv.src || 'src/**');
const dest = addPwd(argv.dest || 'dist/css');

const copyPropsAndVars = () => {
  return gulp
    .src([`${src}/*.{css,less}`])
    .pipe(cssimport({ includePaths: ['../../node_modules'] }))
    .pipe(gulp.dest(addPwd(argv.dest || 'dist/props')));
};

// Watch props / vars
const watchPropsAndVars = () => gulp.watch([`${src}/*.{css,less}`], copyPropsAndVars);

// Compile all files
const compileLess = () => {
  return gulp
    .src([`${src}/*.less`])
    .pipe(cached('less'))
    .pipe(dependents())
    .pipe(plumber())
    .pipe(filter(['**', '!**/_*.less'])) // Don't output mixins
    .pipe(print((filepath) => `compiled: ${filepath}`))
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

// Recompile any changed file
const watchLess = () => gulp.watch([src, `!**/variables/*.less`], compileLess);

exports.compileLess = compileLess;
exports.watchLess = watchLess;

exports.copyPropsAndVars = copyPropsAndVars;
exports.watchPropsAndVars = watchPropsAndVars;
