'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    
    // configure jshint to validate js files -----------------------------------
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js'
      ]
    },
    
    
    // configure uglify to minify JS files -------------------------------------
    uglify: {
      dist: {
        files: {
          'dist/js/scripts.min.js': ['src/js/*.js']
        },
        options: {
          // JS source map: to enable, uncomment the lines below and update sourceMappingURL based on your install
          // sourceMap: 'js/scripts.min.js.map',
          // sourceMappingURL: '/app/themes/roots/js/scripts.min.js.map'
        }
      }
    },
    
    
    // compile less stylesheets to css -----------------------------------------
    less: {
      dist: {
        files: {
          'dist/css/main.css': ['src/less/pretty.less']
        },
        options: {
          //compress: true
		  compress: false
        }
      }
    },
    
    
    // configure cssmin to minify css files ------------------------------------
    cssmin: {
      dist: {
        files: {
          'dist/css/main.min.css': ['dist/css/main.css']
        },
        options: {
        
        }
      }
    },

    // configure watch to auto update ------------------------------------------
    watch: {
      less: {
        files: [
          'src/less/*.less'
        ],
        tasks: ['less', 'cssmin']
      },
      js: {
        files: [
          'src/js/*.js'
        ],
        tasks: ['jshint', 'uglify']
      }
    },
    
     // delete files -----------------------------------------------------------
    clean: {
      dist: [
        'dist/css/main.min.css',
        'dist/js/scripts.min.js'
      ]
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Register tasks
  grunt.registerTask('default', [
    'clean',
    'less',
    'cssmin',
    'uglify'
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);

};
