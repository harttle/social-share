module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                sourceMap: false
            },
            dist: {
                src: 'src/social-share.js',
                dest: 'lib/<%= pkg.name %>.min.js'
            }
        },
        sass: {
            options: {
                sourcemap: 'none'
            },
            dist: {
                files: {
                    'src/social-share.css': 'src/social-share.scss'
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            dist: {
                files: {
                    'lib/<%= pkg.name %>.min.css': 'src/social-share.css' 
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('css', ['sass:dist', 'cssmin:dist']);
    grunt.registerTask('js', ['uglify:dist']);
    grunt.registerTask('default', ['js', 'css']);
};
