module.exports = {
	dist: {
		src: ['./src/js/**/*.js'],
		dest: 'public/js/menu-log.js',
		options: {
			transform: [['babelify', {presets: ['react', 'es2015']}]]
		}
	}
};
