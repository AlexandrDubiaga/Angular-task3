var gulp    = require('gulp');
var connect = require('gulp-connect');

var jsPaths = [
    './app/*.js', 
    './app/**/*.js'
];
var htmlPaths = [
    './app/*.html', 
    './app/**/*.html'
];

gulp.task('connect', function () {
    connect.server({
      root: './app',
      port: 8080,
      livereload: true
    });
});

gulp.task('html', function () {
    gulp.src(htmlPaths).pipe(connect.reload());
});

gulp.task('js', function () {
    gulp.src(jsPaths).pipe(connect.reload());
});
   
gulp.task('watch', function () {
    gulp.watch(htmlPaths, ['html']);
    gulp.watch(jsPaths, ['js']);
}); 
   
gulp.task('default', ['connect', 'watch']);