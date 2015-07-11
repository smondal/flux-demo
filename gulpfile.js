var gulp        = require('gulp');
var browserify  = require('browserify');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync').create();


gulp.task('js', function () {
    return browserify('./app')
        .bundle()
        .pipe(source("bundle.js"))
        .pipe(gulp.dest("."))
    });

gulp.task('js-watch', ['js'], browserSync.reload);

gulp.task('browser-sync', ['js'],function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("js/*.js", ['js-watch']);
});


gulp.task('default', ['browser-sync']);