'use strict'

let gulp = require('gulp')
let autoprefixer = require('gulp-autoprefixer')
let cssnano = require('gulp-cssnano')
let uglify = require('gulp-uglify')
let imagemin = require('gulp-imagemin')
let rename = require('gulp-rename')
let concat = require('gulp-concat')
let notify = require('gulp-notify')
let cache = require('gulp-cache')
let livereload = require('gulp-livereload')
let rev = require('gulp-rev')
let runSequence = require('run-sequence')
let nodemon = require('gulp-nodemon')
let del = require('del')
let sourcemaps = require('gulp-sourcemaps')
let minify = require('gulp-minify')
let cleanCss = require('gulp-clean-css')

let cssAssets = [
  'public/css/bootstrap.css',
  'public/css/style.css',
  'public/css/swiper.css',
  'public/css/demos/construction/construction.css',
  'public/css/dark.css',
  'public/css/font-icons.css',
  'public/css/animate.css',
  'public/css/magnific-popup.css',
  'public/css/demos/construction/fonts.css',
  'public/css/responsive.css',
  'public/css/demos/construction/colors.css'
]

let jsAssets = [
  'public/js/jquery.js',
  'public/js/plugins.js',
  'public/js/functions.js'
]

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
  return gulp.src(cssAssets)
    .pipe(concat('stylesheet.css'))
    .pipe(cleanCss())
    .pipe(rev())
    .pipe(gulp.dest('public/dist/css'))
    .pipe(rev.manifest('public/dist/rev-manifest.json', {
      merge: true
    }))
    .pipe(gulp.dest(''))
})

// Scripts
gulp.task('scripts', function () {
  return gulp.src(jsAssets)
    .pipe(concat('bundle.js'))
    .pipe(minify({
      ext: { min: '.js' },
      noSource: true
    }))
    .pipe(rev())
    .pipe(gulp.dest('public/dist/js'))
    .pipe(rev.manifest('public/dist/rev-manifest.json', {
      merge: true
    }))
    .pipe(gulp.dest(''))
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
  return del(['public/dist/css', 'public/dist/js', 'public/dist/images', 'public/dist'])
})

// Run the project in production mode
gulp.task('prod', function (done) {
  runSequence('clean', ['styles', 'scripts', 'images', 'fonts'], 'start:prod', done)
})

// Run the project in development / default mode
gulp.task('default', function (done) {
  runSequence('clean', 'start', done)
})
