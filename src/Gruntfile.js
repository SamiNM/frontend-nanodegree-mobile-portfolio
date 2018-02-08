module.exports = function(grunt) {

  grunt.initConfig({
      
      uglify: {
        options: {
          mangle: false
        },
        my_target: {
          files: {
            'js/perfmatters.min.js': ['js/perfmatters.js'],
            'views/js/main.min.js': ['views/js/main.js']
          }
        }
      }
  });
   cssmin: {
            target: {
                files: [{
                  'css/print.min.css': ['css/print.css'],
                  'css/style.min.css': ['css/style.css'],                  
                  'views/css/bootstrap-grid.min.css': ['views/css/bootstrap-grid.css']
                    }]
            }
        }

    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default',['cssmin','uglify'])


};