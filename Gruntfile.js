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
                    cwd: 'js/',  // ruta de nuestro javascript fuente
                    expand: true,    // ingresar a las subcarpetas
                    src: '*.js',     // patrón relativo a cwd
                    dest: 'dist/js/'  // destino de los archivos compresos
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
                    cwd: 'img',
                    src: ['**/**/**/**/**/**/**/**/**/*.{png,jpg,gif}'],
                    dest: 'dist/img'
                }]
            }
        },
        copy: {
            img: {
                cwd: 'img',
                src: [ '**/**/**/**/**/**/**/**/**/*.svg','**/**/**/**/**/**/**/**/**/*.ico' ],
                dest: 'dist/img',
                expand: true
            },
            font: {
                cwd: 'fonts',
                src: [ '**/*.otf' ],
                dest: 'dist/fonts',
                expand: true
            },
            slick: {
                cwd: 'slick',
                src: [ '**/*' ],
                dest: 'dist/slick',
                expand: true
            },
            sweetalert: {
                cwd: 'sweetalert',
                src: [ '**/*' ],
                dest: 'dist/sweetalert',
                expand: true
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: [ '**/*.css' ],
                    dest: 'dist/css'
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
