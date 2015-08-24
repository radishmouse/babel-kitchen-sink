module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-babel');
  grunt.initConfig({
    "babel": {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          "dist/grunt.js": "main.js"
        }
      }
    }
  });

  grunt.registerTask("default", ["babel"]);
};
