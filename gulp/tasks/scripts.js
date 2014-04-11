var gulp = require('gulp');
var browserify = require('browserify');
var notify = require('gulp-notify');
var source = require('vinyl-source-stream');

module.exports = function() {
	return browserify('./js/main.js')
		.bundle({debug: true})
		.on('error', notify.onError({
			message: "<%= error.message %>",
			title: "JavaScript Error"
		}))
		.pipe(source('main.js'))
		.pipe(gulp.dest('./build/js/'));
};
