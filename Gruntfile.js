module.exports = function(grunt) {
	grunt.initConfig({
		sass: {
			dev: {
				options: {
					style: "expanded"
				},
				files: {
					"app/assets/css/main.css": "app/assets/scss/main.scss"
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['sass']);
};