'use strict';
require.config({
	paths : {
		angular: 'assets/js/lib/angular/angular',
		angularRoute: 'assets/js/lib/angular-route/angular-route',
		jquery: 'assets/js/lib/jquery/jquery',
		jqueryUI: 'assets/js/lib/jquery-ui/-jquery-ui',
		fullpagejs: 'assets/js/lib/fullpage.js/jquery.fullPage'
	},
	shim : {
		'angular': {
			exports: 'angular'
		},
		'angularRoute': {
			deps: ['angular'],
			exports: 'angularRoute'
		},
		'jquery': {
			exports: 'jquery'
		},
		'jqueryUI': {
			deps: ['jquery'],
			exports: 'jqueryUI'
		},
		'fullpagejs': {
			deps: ['jquery','jqueryUI'],
			exports: 'fullpagejs'
		}
	},
	priority: [
		'angular'
	]
});
require([
	'angular',
	'app'
	], function(angular, app) {
		var $html = angular.element(document.getElementsByTagName('html')[0]);
		angular.element().ready(function() {
			// bootstrap the app manually
			angular.bootstrap(document, ['myApp']);
		});
	}
);