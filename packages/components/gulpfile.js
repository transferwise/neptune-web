var gulp = require('gulp');
var less = require('gulp-less');
var postcss = require('gulp-postcss');
var plumber = require('gulp-plumber');
var cached = require('gulp-cached');
var dependents = require('gulp-dependents');
var print = require('gulp-print').default;

// Less Compiler
const lessCompiler = () => {
  return gulp
    .src(['src/**/*.less'])
    .pipe(cached('less'))
    .pipe(dependents())
    .pipe(print(filepath => `compiled: ${filepath}`))
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss())
    .pipe(gulp.dest('src'));
};

// Watch files
const lessWatcher = () => {
  gulp.watch(['src/**/*.less'], gulp.series(lessCompiler));
};

exports.lessWatcher = lessWatcher;
exports.lessCompiler = lessCompiler;
