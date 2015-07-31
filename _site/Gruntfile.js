module.exports  = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                files: {
                    'assets/js/javascript.min.js':'assets/js/javascript.js'
                }
            }
        },
    });

    // 加载包含 "uglify" 任务的插件。
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // 默认被执行的任务列表。
    //grunt.registerTask('default', ['uglify', 'jshint']);
    grunt.registerTask('min', ['uglify']);
    //grunt.registerTask('uglify', ['uglify']);
    //grunt.registerTask('jshint', ['jshint']);

};
