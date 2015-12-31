module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= pkg.version %> ' +
                    'by <%= pkg.author %>, ' +
                    '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                    '* <%= pkg.description %>\n' +
                    '* <%= pkg.homepage %> */\n\n',
                sourceMap: false
            },
            dist: {
                src: 'lib/built.js',
                dest: 'lib/<%= pkg.name %>.min.js'
            }
        },
        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['src/qrcode.min.js', 'src/social-share.js'],
                dest: 'lib/built.js',
            },
        },
        cssmin: {
            dist: {
                options: {
                    banner: '/*! bbbb */'
                },
                files: {
                    'lib/<%= pkg.name %>.min.css': 'src/social-share.css'
                }
            }
        },
        clean: ["lib/built.js"]
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('js', ['concat', 'uglify', 'clean']);
    grunt.registerTask('css', ['cssmin']);
    grunt.registerTask('default', ['js', 'css']);
};
