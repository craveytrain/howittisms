var gulp = require('gulp');
var prefix = require('gulp-autoprefixer');

module.exports = function() {
	return gulp.src('./css/main.css')
		.pipe(prefix())
		.pipe(gulp.dest('./build/css/'));
};
