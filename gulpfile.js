var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('copy', function() {
  gulp.src('bower_components/jquery/dist/jquery.js')
    .pipe(gulp.dest('dist/js/'));
  gulp.src('bower_components/bootstrap/dist/css/bootstrap.css')
    .pipe(gulp.dest('dist/css/'));
});

gulp.task('default', ['build']);
gulp.task('build', ['copy']);
