module.exports  = function(grunt) {
    var nowTime = new Date(); 
    var ghPagesCommitMessage = "autoCommit" + nowTime.getTime(); 
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
        clean: {
            options:{
                force: true,
            },
            ghPages: ["../FarmPrivateKitchen_gh-pages/*" ] 
            
        },
        jekyll:{
            options: {},
            ghPages_build:{},
            master_serve:{
                options: {
                    serve: true,
                    config:'_config.yml,_config_dev.yml',
                }
            }
        },
        copy_mate: {
            ghPages: {
                options: {
                    type: "recursive"
                },
                src: "_site/",
                destDir: '../FarmPrivateKitchen_gh-pages/'
            },
        },
        //copy: {
            //ghPages: {
                //files: [
                    //{expand:true,  flatten:true, src: ['_site/**'], dest: '../FarmPrivateKitchen_gh-pages/'},
                //],
            //},
        //},
        gitadd: {
            ghPages:{
                options: {
                    all: true,
                    cwd: "../FarmPrivateKitchen_gh-pages" 
                },
            },
            master:{
                options: {
                    all: true,
                },
            }
        },
        gitcommit: {
            ghPages: {
                options: {
                    cwd: "../FarmPrivateKitchen_gh-pages" ,
                    message: ghPagesCommitMessage 
                },
            }
        },
        gitpush: {
            ghPages: {
                options: {
                    remote: "origin",
                    branch: "gh-pages",
                    cwd: "../FarmPrivateKitchen_gh-pages" 
                }
            }
            
        },
    });

    // 加载包含 "uglify" 任务的插件。
    grunt.loadNpmTasks('grunt-contrib-uglify');
    //这版本copy 不强大
    //grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-copy-mate');
    grunt.loadNpmTasks('grunt-git');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-jekyll');
    
    // 默认被执行的任务列表。
    grunt.registerTask('min', ['uglify']);
    grunt.registerTask('cp', ['copy_mate:ghPages']);
    grunt.registerTask('serve', ['jekyll:master_serve']);
    grunt.registerTask('build', ['jekyll:ghPages_build']);
    //更新另一个目录的gh-pages分支
    grunt.registerTask('gh-cm', ['build', 'clean:ghPages', 'copy_mate:ghPages', 'gitadd:ghPages', 'gitcommit:ghPages']);
    grunt.registerTask('gh-push', ['gh-cm', 'gitpush:ghPages']);
    //grunt.registerTask('uglify', ['uglify']);
    //grunt.registerTask('jshint', ['jshint']);

};
