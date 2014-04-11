var gulp = require('gulp');

module.exports = function(){
	gulp.watch('js/**/*', ['scripts']);
	gulp.watch('css/**/*', ['styles']);
};
