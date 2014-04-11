var gulp = require('./gulp')([
  'scripts',
  'watch',
  'serve',
  'clean',
  'styles'
]);

gulp.task('build', ['scripts', 'styles']);
gulp.task('preview', ['build', 'watch', 'serve']);
