module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
    separator: "\n", //add a new line after each file
    banner: "", //added before everything
    footer: "" //added after everything
  },
  dist: {
    // the files to concatenate
    src: [
      //include libs
      'App/js/libs/angular/angular.min.js',
      'App/js/libs/angular/angular-route.min.js',
      '!App/js/src/**/main.js',
      'App/js/src/modules/*/*.js',
      'App/js/src/**/*.js',
      // 'App/js/src/**/*.js',

      //own classes and files

      //the last script I need
      'App/js/src/main.js'
      ],
    // the location of the resulting JS file
    dest: 'App/js/app.js'
  }

},
less: {
  development: {
    options: {
      paths: ["Less/modules"]
    },
    files: {
      "App/resource/css/style.css": "Less/main.less"
    }
  }
},
watch: {
  scripts: {
    files: ['App/index.html','!App/js/app.js','!App/js/lib/**/*','App/js/src/**/*','App/resource/views/*','Less/**/*','App/resource/css/theme_light.css','App/resource/data/data.json'],
    tasks: ['concat','less'],
    options: {
      interrupt: false,
       livereload: 1337,
    }
  }
},
connect: {
  server: {
    options: {
      livereload: 1337,
      base: 'App/',
      port: 8001,
       hostname: 'localhost',
       open: true,
    },
    livereload: {
        options: {
            open: {
                 target: 'http://localhost:8001'
            },
            base: [
                'App'
            ]
        }
    }
  }
}
});

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-less');


  // Default task(s).
  grunt.registerTask('default', ['concat','less','connect','watch']);

};