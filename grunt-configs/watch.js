module.exports = {
	js: {
		files: [
			'./src/js/**/*.js'
		],
		tasks: ['browserify'],
		options: {
			livereload: true
		}
	},
	sass: {
		files: ['./src/scss/**/*.scss'],
		tasks: ['sass'],
		options: {
			livereload: true
		}
	},
	images: {
		files: ['./src/images/**/*.*'],
		tasks: ['sync'],
		options: {
			livereload: true
		}
	},
};
