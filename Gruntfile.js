module.exports = function(grunt) {
	'use strict';

	require('load-grunt-tasks')(grunt);

	var webfontMatch = '*-webfont.{ttf,woff,eot,svg}';
	var jsonFiles = ['package.json', 'bower.json', 'src/manifest.json'];

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
			options: {
				reporter: require( 'jshint-stylish' )
			},
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
				src: jsonFiles
			}
		},

		concat: {
			js: {
				files: {
					'dist/js/early.js': [
						'src/js/early/enqueue-css.js',
						'src/js/early/**/*.js'
					],
					'dist/js/late.js' : 'src/js/late/**/**.js'
				}
			}
		},

		uglify: {
			dist: {
				options: {
					sourceMap: true
				},
				files: {
					'dist/js/early.min.js': 'dist/js/early.js',
					'dist/js/late.min.js': 'dist/js/late.js'
				}
			}
		},

		sass: {
			dist: {
				options: {
					style: 'expanded',
					sourcemap: true
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
				src: 'dist/css/**/*.css',
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
			},
			images: {
				expand: true,
				cwd: 'src/images/',
				src: ['*.{png,jpg,gif}'],
				dest: 'dist/images/'
			}
		},

		bowercopy: {
			options: {
				destPrefix: 'dist/'
			},
			fonts: {
				options: {
					destPrefix: 'dist/fonts/'
				},
				files: {
					'font-awesome':	'font-awesome/fonts/' + webfontMatch,
					'open-sans/regular': 'open-sans/fonts/regular/' + webfontMatch,
					'open-sans/italic': 'open-sans/fonts/italic/' + webfontMatch,
					'open-sans/bold': 'open-sans/fonts/bold/' + webfontMatch
				}
			}
		},

		compress: {
			dist: {
				options: {
					archive: 'ediary-tweaks.zip'
				},
				files: [{
					expand: true,
					cwd: 'dist/',
					src: ['**'],
					dest: 'ediary-tweaks/'
				}]
			}
		},

		bump: {
			options: {
				files: jsonFiles,
				commitFiles: jsonFiles,
				pushTo: 'origin'
			}
		}

	});

	grunt.registerTask( 'css', ['sass', 'autoprefixer', 'csso'] );
	grunt.registerTask( 'js', ['concat:js', 'uglify'] );
	grunt.registerTask( 'test', ['jshint', 'jsonlint'] );
	grunt.registerTask( 'prep', ['clean', 'copy', 'bowercopy'] );

	grunt.registerTask( 'default', ['test', 'prep', 'css', 'js'] );
};
