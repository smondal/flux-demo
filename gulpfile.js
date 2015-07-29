var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var browserSync = require('browser-sync')
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
        .pipe(browserSync.reload({ stream:true }));
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

// gulp.task('js-watch', ['js'], browserSync.reload);

gulp.task('serve',  function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    // gulp.watch("component/*.jsx", ['js-watch']);
});


gulp.task('default', ['serve'], function(){
   gulp.watch("./component/*.jsx", ['js']); 
   gulp.watch("./component/*.jsx", ['bs-reload']); 
});