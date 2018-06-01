'use strict'

let gulp = require('gulp'),
  autoprefixer = require('gulp-autoprefixer'),
  cssnano = require('gulp-cssnano'),
  uglify = require('gulp-uglify'),
  imagemin = require('gulp-imagemin'),
  rename = require('gulp-rename'),
  concat = require('gulp-concat'),
  notify = require('gulp-notify'),
  cache = require('gulp-cache'),
  livereload = require('gulp-livereload'),
  rev = require('gulp-rev'),
  runSequence = require('run-sequence'),
  nodemon = require('gulp-nodemon'),
  del = require('del')

// Start:prod
gulp.task('start:prod', function () {
  nodemon({
    script: 'server.js',
    env: { 'NODE_ENV': 'production' }
  })
})

// Start
gulp.task('start', function () {
  nodemon({
    script: 'server.js',
    env: { 'NODE_ENV': 'development' }
  })
})

// Styles
gulp.task('styles', function () {
  return gulp.src('public/css/**/*.css')
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('public/dist/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(cssnano())
    .pipe(gulp.dest('public/dist/css'))
})

// Scripts
gulp.task('scripts', function () {
  return gulp.src('public/js/**/*.js')
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('public/dist/js'))
})

// Images
gulp.task('images', function () {
  return gulp.src('public/images/**/*')
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('public/dist/images'))
})

// Fonts
gulp.task('fonts', function () {
  return gulp.src(['public/css/**/*.woff', 'public/css/**/*.ttf'])
    .pipe(gulp.dest('public/dist/css'))
})

// Clean
gulp.task('clean', function () {
  return del(['public/dist/css', 'public/dist/js', 'public/dist/images'])
})

// Default task
gulp.task('default', ['clean'], function () {
  gulp.start('styles', 'scripts', 'images')
})

// Run the project in production mode
gulp.task('prod', function (done) {
  runSequence('clean', ['styles', 'scripts', 'images', 'fonts'], 'start:prod', done)
})

// Run the project in development / default mode
gulp.task('default', function (done) {
  runSequence('clean', 'start', done)
})
