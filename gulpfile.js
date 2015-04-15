'use strict';

var path = require('path');
var gulp = require('gulp');
var webapack = require('gulp-webpack-build');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Concatenate Client


gulp.task('clientjs', function() {
  return gulp.src('client/**/*.js')
             .pipe(concat('all.js'))
             .pipe(gulp.dest('build/'))
             .pipe(rename('all.min.js'))
             .pipe(uglify())
             .pipe(gulp.dest('build/'));
});

gulp.task('clienthtml', function() {
  return gulp.src('client/**/*.html')
             .pipe(gulp.dest('build/'));
});

gulp.task('build', ['clientjs', 'clienthtml']);

