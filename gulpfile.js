var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');

gulp.task('sass', function () {
	gulp.src('./public/scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./public/css'))
		.pipe(livereload());
});

gulp.task('watch', function() {
	livereload.listen({port: 35939});
	gulp.watch('**/*.scss', ['sass']);

	var onFileChange = function(file) {
		livereload.changed(file.path);
	};
	gulp.watch('**/*.html', onFileChange);
	gulp.watch('**/*.js', onFileChange);
});

