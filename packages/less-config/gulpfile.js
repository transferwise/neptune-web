const gulp = require('gulp');
const less = require('gulp-less');
const postcss = require('gulp-postcss');
const plumber = require('gulp-plumber');
const cached = require('gulp-cached');
const changed = require('gulp-changed');
const dependents = require('gulp-dependents');
const print = require('gulp-print').default;
const { argv } = require('yargs');
const rename = require('gulp-rename');
const filter = require('gulp-filter');

const addPwd = (path) => `${process.env.PWD}/${path}`;

const src = addPwd(argv.src || 'src/**');
const dest = addPwd(argv.dest || 'dist/css');

// Custom props don't need to be compiled. For now we presume they're in the variables folder inside the main source.
const copyCustomProps = () => {
  return gulp
    .src([`${src}/variables/*.less`])
    .pipe(changed('props')) // Only copy over files that aren't already in the destination
    .pipe(gulp.dest(`${dest}/variables`));
};

// Watch props
const watchCustomProps = () => gulp.watch([`${src}/variables/*.less`], copyCustomProps);

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

exports.copyCustomProps = copyCustomProps;
exports.watchCustomProps = watchCustomProps;
