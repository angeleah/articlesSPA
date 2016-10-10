var src = './src';
var test = './test';

var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var declare = require('gulp-declare');
var gulp = require('gulp');
var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');

gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: src
    },
    port: 3333,
    files: [
      src + '/styles/index.css',
      src + '/js/**/*.js',
      src + '/**/*.html',
      src + '/templates/**/*.hbs'
    ]
  });
});

gulp.task('templates', function(){
  gulp.src(src + '/templates/base-templates/*.hbs')
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'App.templates',
      noRedeclare: true, // Avoid duplicate declarations
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest(src + '/templates/compiled-templates/'));
});

gulp.task('watch', ['serve'], function() {
  gulp.watch(src + '/templates/**', ['templates']);
  gulp.watch([src + '/js/**/*.js', test + '/*-test.js']);
});

gulp.task('default', ['templates', 'watch']);
