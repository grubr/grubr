'use strict';

var gulp = require('gulp');

var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var webpack = require('gulp-webpack');
var wpConfig = require('./webpackConfig.js');

gulp.task('webpack', function() {
  return gulp.src('./client/**/*.js')
             .pipe(webpack(wpConfig))
             .pipe(uglify())
             .pipe(gulp.dest('./build/'));
});

gulp.task('clienthtml', function() {
  return gulp.src('client/**/*.html')
             .pipe(gulp.dest('./build/'));
});

gulp.task('build', ['webpack', 'clienthtml']);
