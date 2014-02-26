module.exports = function(grunt) {
	'use strict';

	require('load-grunt-tasks')(grunt);

	grunt.initConfig({

		watch: {

			css: {
				files: ['src/css/**/*.scss'],
				tasks: ['css']
			},

			js: {
				files: ['src/js/**/*.js'],
				tasks: ['js']
			},

			manifest: {
				files: ['src/manifest.json'],
				tasks: ['copy:manifest']
			}

		},

		jshint: {
			gruntfile: ['Gruntfile.js'],
			dist: ['src/js/**/*.js']
		},

		jsonlint: {
			dist: {
				src: [
					'src/manifest.json',
					'bower.json',
					'package.json'
				]
			}
		},

		concat: {
			js: {
				src: ['src/js/main.js', 'src/js/**/*.js'],
				dest: 'dist/js/app.js'
			}
		},

		uglify: {
			dist: {
				files: {
					'dist/js/app.min.js': ['dist/js/app.js']
				}
			}
		},

		sass: {
			dist: {
				cwd: 'src/css',
				src: '*.scss',
				dest: 'dist/css',
				expand: true,
				ext: '.css'
			}
		},

		autoprefixer: {
			dist: {
				expand: true,
				flatten: true,
				src: 'src/css/**/*.css',
				dest: 'dist/css'
			}
		},

		csso: {
			dist: {
				expand: true,
				flatten: true,
				src: 'src/css/**/*.css',
				dest: 'dist/css'
			}
		},

		clean: {
			dist: ['dist']
		},

		copy: {
			manifest: {
				expand: true,
				cwd: 'src',
				src: 'manifest.json',
				dest: 'dist/'
			},
			fonts: {
				expand: true,
				cwd: 'bower_components',
				src: [
					'font-awesome/fonts/*',
					'open-sans-fontface/fonts/**/*'
				],
				dest: 'dist/fonts',
			}
		}

	});

	grunt.registerTask( 'css', ['sass', 'autoprefixer', 'csso'] );
	grunt.registerTask( 'js', ['concat:js', 'uglify'] );
	grunt.registerTask( 'test', ['jshint', 'jsonlint'] );

	grunt.registerTask( 'default', ['test', 'clean', 'copy', 'css', 'js'] );
};