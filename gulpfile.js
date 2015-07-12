var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync').create();
var babelify = require("babelify");
// var reactify = require('reactify');

gulp.task('js', function() {
    return browserify(
        {
            entries: 'app.js',
            extensions: ['.jsx'],
            debug: true
        })
        .transform(babelify)
        .bundle()
        .pipe(source("build.js"))
        .pipe(gulp.dest("build"))
});

gulp.task('js-watch', ['js'], browserSync.reload);

gulp.task('browser-sync', ['js'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("component/*.jsx", ['js-watch']);
});


gulp.task('default', ['browser-sync']);