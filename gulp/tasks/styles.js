var gulp = require('gulp');
var prefix = require('gulp-autoprefixer');
var sass = require('gulp-sass');

module.exports = function() {
	return gulp.src('./css/*.scss')
		.pipe(sass())
		.pipe(prefix())
		.pipe(gulp.dest('./build/css/'));
};
