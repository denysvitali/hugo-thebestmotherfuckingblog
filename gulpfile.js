'use strict';
const gulp = require('gulp');
const less = require('gulp-less');
const lessChanged = require('gulp-less-changed');
const cssnano = require('gulp-cssnano');
const del = require('del');

gulp.task('views', () => {
    return gulp.src('src/pug/*.pug')
        .pipe(pug({}))
        .pipe(gulp.dest('dist/'));
});

gulp.task('less', () => {
    return gulp.src('src/less/**/*.less')
        .pipe(lessChanged())
        .pipe(less())
        .pipe(gulp.dest('static/css/'));
});

gulp.task('clean', (cb) => {
    return del.sync('static/css',cb);
});

gulp.task('watch', () => {
    return gulp.watch('src/less/**/*', ['default']);
});

gulp.task('build', ['less']);

gulp.task('cleanandbuild', ['clean', 'build']);

gulp.task('default', ['cleanandbuild']);
