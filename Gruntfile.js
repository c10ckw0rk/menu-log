
const loadGruntTasks = require('load-grunt-tasks');
const gruntConfigs = require('load-grunt-configs');

module.exports = function (grunt) {

	// Load grunt tasks automatically
	loadGruntTasks(grunt);

	// Project configuration.
	grunt.initConfig(gruntConfigs(grunt, {
		config: {
			src: './grunt-configs/*.js'
		},
		pkg: grunt.file.readJSON('package.json')
	}));

	grunt.registerTask('start', ['watch']);

};
