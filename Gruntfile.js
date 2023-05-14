'use strict';

module.exports = function(grunt){
    require('time-grunt')(grunt);
    require('jit-grunt')(grunt, {
        useminPrepare: 'grunt-usemin'
    });
    grunt.initConfig({
        browserSync:{
            dev:{
                bsFiles:{
                    src:[
                        '*.html',
                        //'js/*.js'
                    ]
                }
            },
            options:{
                watchTask: true,
                server: {
                    baseDir: './'
                }
            }
        },
        copy: {
            html: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: './',
                    src: ['*.html'],
                    dest: 'dist/'
                }]
            },
            fonts: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: 'node_modules/font-awesome',
                    src: ['fonts/*.*'],
                    dest: 'dist/'
                }]
            }
        },
        clean: {
            build: {
                src: ['dist/']
            }
        },
        imagemin: {
            dynamic:{
                files: [{
                    expand: true,
                    dot: true,
                    cwd: './',
                    src: ['img/*.{png,jpg,gif}'],
                    dest: 'dist/'
                }]
            }
        },
        useminPrepare: {
            foo: {
                dest: 'dist',
                src: ['savings.html', 'wire.html', 'index.html']
            },
            options: {
                flow: {
                    steps: {
                        css: ['cssmin'],
                        js: ['uglify']
                    },
                    post: {
                        css: [{
                            name: 'cssmin',
                            createConfig: function(context, block){
                                var generated=context.options.generated;
                                generated.options={
                                    keepSpecialComments: 0, rebase: false
                                };
                            }
                        }]
                    }
                }
            }            
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {}
        },
        uglify: {
            dist: {}
        },
        cssmin: {
            dist: {}
        },
        filerev: {
            options: {
                encoding: 'utf8',
                algorithm: 'md5',
                length: 20
            },
            release: {
                files: [{
                    src: [
                        //'dist/js/*.js',
                        'dist/css/*.css'
                    ]                   
                }]
            }
        },
        usemin: {
            html: ['dist/savings.html', 'wire.html', 'index.html'],
            options: {
                assetsDir: ['dist', 'dist/css',/* 'dist/js'*/]
            }
        }, 
        htmlmin: {
            dist: {
                options: {
                    collapseWhiteSpace: true
                },
                files: {
                    'dist/index.html': 'dist/index.html',
                    'dist/savings.html': 'dist/savings.html',
                    'dist/wire.html': 'dist/wire.html'
                }

            }
        }
    });

    grunt.registerTask('default', ['browserSync']);
    grunt.registerTask('build', [
        'clean',
        'copy',
        'imagemin',
        'useminPrepare',
        'concat',
        'cssmin',
        'uglify',
        'filerev',
        'usemin',
        'htmlmin'
    ]);
}