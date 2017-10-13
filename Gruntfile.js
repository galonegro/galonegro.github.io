/**
 * Created by samuel on 11/01/2016.
 */
'use strict';

module.exports = function (grunt) {

    // Define the configuration for all the tasks
    grunt.initConfig({
        uglify: {
            options: {
                mangle: false,
                compress: {
                    drop_console: true
                }
            },
            js: {
                files: [{
                    cwd: 'assets/js/',  // ruta de nuestro javascript fuente
                    expand: true,    // ingresar a las subcarpetas
                    src: '*.js',     // patrón relativo a cwd
                    dest: 'dist/assets/js/'  // destino de los archivos compresos
                }]
            }
        },
        htmlmin: {
            desktop: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: 'desktop',
                    src: '**/*.html',
                    dest: 'dist/desktop'
                }]
            },
            movil: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: 'movil',
                    src: '**/*.html',
                    dest: 'dist/movil'
                }]
            }
        },
        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 5,
                    progressive: true
                },
                files: [{
                    expand: true,
                    cwd: 'assets/img',
                    src: ['**/**/**/**/**/**/**/**/**/*.{png,jpg,gif}'],
                    dest: 'dist/assets/img'
                }]
            }
        },
        copy: {
            img: {
                cwd: 'assets/img',
                src: [ '**/**/**/**/**/**/**/**/**/*.svg','**/**/**/**/**/**/**/**/**/*.ico' ],
                dest: 'dist/assets/img',
                expand: true
            },
            font: {
                cwd: 'assets/fonts',
                src: [ '**/*.otf' ],
                dest: 'dist/assets/fonts',
                expand: true
            },
            slick: {
                cwd: 'libs/slick',
                src: [ '**/*' ],
                dest: 'dist/libs/slick',
                expand: true
            },
            sweetalert: {
                cwd: 'libs/sweetalert',
                src: [ '**/*' ],
                dest: 'dist/libs/sweetalert',
                expand: true
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'assets/css',
                    src: [ '**/*.css' ],
                    dest: 'dist/assets/css'
                }]
            }
        },
        clean: {
            build:{
                src: [ 'dist/']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['clean','cssmin','htmlmin','imagemin','copy','uglify']);
    grunt.registerTask('html', ['htmlmin','uglify','cssmin','copy']);
    grunt.registerTask('justhtml', ['htmlmin']);
    grunt.registerTask('img', ['imagemin','copy:img']);
};
