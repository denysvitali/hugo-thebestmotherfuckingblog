'use strict';
const gulp = require('gulp');
const less = require('gulp-less');
const lessChanged = require('gulp-less-changed');
const cssnano = require('gulp-cssnano');
const autoprefix = require('less-plugin-autoprefix');
const del = require('del');

function views() {
    return gulp.src('src/pug/*.pug')
        .pipe(pug({}))
        .pipe(gulp.dest('dist/'));
}

function less_() {
    return gulp.src('src/less/**/*.less')
        .pipe(less({
            plugins: [autoprefix]
        }))
        .pipe(gulp.dest('static/css/'));
}

function clean() {
    return del(['static/css']);
}

function watch() {
    return gulp.watch('src/less/**/*', ['default']);
}

var build = gulp.series(less_);

var cleanandbuild = gulp.series(clean, build);

exports.views = views;
exports.less_ = less_;
exports.clean = clean;
exports.watch = watch;
exports.build = build;
exports.cleanandbuild = cleanandbuild;
exports.default = cleanandbuild;
