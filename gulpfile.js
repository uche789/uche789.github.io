var gulp = require('gulp'),
	cssnano = require('cssnano'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	sass = require('gulp-sass'),
	runSequence = require('run-sequence');

gulp.task('default', function (callback) {
	runSequence(['templates-scss', 'animations-scss']);
});

gulp.task('templates-scss', function () {
	var postCssProperties = [autoprefixer];

	postCssProperties.push(cssnano);

	return gulp.src(['./templates/src/scss/**/*.scss'])
		.pipe(sass())
		.pipe(postcss(postCssProperties))
		.pipe(gulp.dest('./templates/assets/css'));
});

gulp.task('animations-scss', function () {
	var postCssProperties = [autoprefixer];

	postCssProperties.push(cssnano);

	return gulp.src(['./animations/src/scss/**/*.scss'])
		.pipe(sass())
		.pipe(postcss(postCssProperties))
		.pipe(gulp.dest('./animations/assets/css'));
});

gulp.task('watch', function (callback) {
	runSequence(['default']);

	gulp.watch('./templates/src/scss/**/*.scss', ['templates-scss']);
	gulp.watch('./animations/src/scss/**/*.scss', ['animations-scss']);
});