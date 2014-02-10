var gulp = require('gulp'),
	rename = require('gulp-rename'),
	clean = require('gulp-clean'),
	concat = require('gulp-concat');

var jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify'),
	jsonlint = require('gulp-jsonlint');

var sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	minifycss = require('gulp-minify-css');

// Compile Sass to CSS
gulp.task('styles', function() {
	gulp.src('src/css/*.scss')
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(gulp.dest('dist/css'))
		.pipe(rename({suffix: '.min'}))
		.pipe(minifycss())
		.pipe(gulp.dest('dist/css'));
});

// Concat and minify JavaScript
gulp.task('scripts', function() {
	gulp.src('src/js/*.js')
		.pipe(concat('app.js'))
		.pipe(gulp.dest('dist/js'))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

gulp.task('test', function() {

	// Lint JSON
	gulp.src(['*.json', 'src/**/*.json'])
		.pipe(jsonlint())
		.pipe(jsonlint.reporter());

	// Lint JS
	gulp.src(['src/js/*.js', 'gulpfile.js'])
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

// Clean build directory
gulp.task('clean', function() {
	gulp.src(['dist'], { read: false }).pipe(clean());
});

// Compile everything
gulp.task('default', function() {
	gulp.start('test', 'styles', 'scripts');

	gulp.src('src/manifest.json').pipe(gulp.dest('dist'));
	gulp.src([
		'bower_components/font-awesome/fonts/*',
		'bower_components/open-sans-fontface/fonts/**/*'
	]).pipe(gulp.dest('dist/fonts'));
});

// Watch for changes in files
gulp.task('watch', ['default'], function() {

	// Watch Sass files
	gulp.watch('src/css/**/*.scss', ['styles']);

	// Watch JavaScript files
	gulp.watch('src/js/**/*.js', ['scripts']);
});

