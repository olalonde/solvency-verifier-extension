var path = require('path');

module.exports = function (grunt) {
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);

  // configurable paths
  var config = {
    app: 'app',
    dist: 'dist'
  };

  grunt.initConfig({
    config: config,
    connect: {
      server: {
        options: {
          port: process.env.PORT || 80,
          hostname: 'localhost',
          base: 'demo/',
          open: true,
          keepalive: true,
          livereload: true
        }
      }
    },
    crx: {
      production: {
        src: '.tmp/',
        dest: '<%= config.dist %>/solvency-verifier.crx',
        privateKey: '~/.ssh/chrome-apps.pem'
      }
    },
    handlebars: {
      compile: {
        options: {
          namespace: 'templates',
          processName: function (filePath) {
            return path.basename(filePath, '.hbs');
          }
        },
        files: {
          '<%= config.app %>/js/templates.js': '<%= config.app %>/templates/*'
        }
      }
    },
    watch: {
      app: {
        files: [
          '<%= config.app %>/manifest.json',
          '<%= config.app %>/**/*.css',
          '<%= config.app %>/**/*.js',
          '<%= config.app %>/**/*.html'
        ],
        options: {
          livereload: 35728 //extension
        }
      },
      handlebars: {
        files: [
          '<%= config.app %>/templates/*.hbs',
        ],
        tasks: [ 'handlebars:compile' ],
        options: {
          livereload: 35728
        }
      },
      demo: {
        files: [
          'demo/*'
        ],
        options: {
          livereload: true
        }
      }
    },
    exec: {
      copyToTmp: {
        cmd: 'rm -rf .tmp; cp -R <%= config.app %> .tmp'
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= config.dist %>/*'
          ]
        }]
      },
      tmp: {
        files: [ {
          dot: true,
          src: [ '.tmp/' ]
        }]
      }
    }
  });

  // Don't use livereload in distributed Chrome extension
  grunt.registerTask('fixmanifest', function() {
    var file = grunt.config.get('config.app') + '/manifest.json';
    var manifest = grunt.file.readJSON(file);
    var scripts = manifest.background.scripts;
    var s = [];
    for (var i = 0; i < scripts.length; i++) {
      if (scripts[i] === 'js/livereload.js') continue;
      s.push(scripts[i]);
    }
    manifest.background.scripts = s;
    grunt.file.write(file, JSON.stringify(manifest, null, 2));
  });

  grunt.registerTask('build', [
    'clean:dist',
    'exec:copyToTmp',
    'fixmanifest',
    'crx:production',
    'clean:tmp'
  ]);

  grunt.registerTask('default', [
    'watch'
  ]);
};
