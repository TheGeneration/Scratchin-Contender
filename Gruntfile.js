module.exports = function(grunt) {
	grunt.initConfig({
		dev: {
		sass: {
			dist: {
				options: {
					style: "expanded"
				},
				files: {
					"app/assets/css/main.css": "app/app/assets/scss/main.scss"
				}
			}
		}
	},
	//remove standard bower_components folder and files, in favor of the one specified in the bower-installer	
	clean: {
			bower_components: ["bower_components"]
		}
	});
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-sass');

	grunt.registerTask('default', ['dev']);
};