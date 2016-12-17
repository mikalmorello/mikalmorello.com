module.exports = function (grunt) {
  "use strict";
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
              dist:  {
                 files: {
                  './css/main.css': './sass/main.scss'
                }
              }
        },
          watch: {
              css: {
                  files: '**/*.scss',
                  tasks: ['sass']
              }
          }
    });

    // Load tasks...
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // Default task.
    grunt.registerTask('default',['sass','svgstore','watch'] );
};