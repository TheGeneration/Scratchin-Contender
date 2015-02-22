'use strict';
define([
	'angular',
	'angularRoute'
], function(angular) {
	angular.module('myApp.loginview', ['ngRoute'])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/loginview', {
			templateUrl: 'loginview/loginview.html',
			controller: 'View1Ctrl'
		});
	}])
	.controller('View1Ctrl', [function() {
		
	}]);
});