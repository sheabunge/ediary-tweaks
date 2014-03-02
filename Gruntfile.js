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
				tasks: ['jshint:dist', 'js']
			},

			manifest: {
				files: ['src/manifest.json'],
				tasks: ['copy:manifest']
			}

		},

		jshint: {
			gruntfile: ['Gruntfile.js'],
			dist: {
				options: {
					globals: {
						chrome: true,
						document: true
					}
				},
				files: {
					src: ['src/js/**/*.js']
				}
			}
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
				options: {
					sourceMap: true
				},
				files: {
					'dist/js/app.min.js': ['dist/js/app.js']
				}
			}
		},

		sass: {
			dist: {
				options: {
					style: 'expanded'
				},
				files: [{
					cwd: 'src/css',
					src: '*.scss',
					dest: 'dist/css',
					expand: true,
					ext: '.css'
				}]
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
				cwd: 'dist/css',
				src: ['*.css', '!*.min.css'],
				dest: 'dist/css/',
				ext: '.min.css'
			}
		},

		clean: {
			dist: ['dist']
		},

		copy: {
			manifest: {
				src: 'src/manifest.json',
				dest: 'dist/manifest.json'
			}
		},

		bowercopy: {
			options: {
				destPrefix: 'dist/'
			},
			fonts: {
				files: {
					fonts: [
						'font-awesome/fonts/*',
						'open-sans/fonts/*'
					]
				}
			}
		}

	});

	grunt.registerTask( 'css', ['sass', 'autoprefixer', 'csso'] );
	grunt.registerTask( 'js', ['concat:js', 'uglify'] );
	grunt.registerTask( 'test', ['jshint', 'jsonlint'] );
	grunt.registerTask( 'prep', ['clean', 'copy', 'bowercopy'] );

	grunt.registerTask( 'default', ['test', 'prep', 'css', 'js'] );
};
