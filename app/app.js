'use strict';

define(['angular',
		'angularRoute',
		'loginview/loginview',
		'view2/view2'
], function(angular, angularRoute, loginview, view2) {
	return angular.module('myApp', [
		'ngRoute',
		'myApp.loginview',
		'myApp.view2'
	]).
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.otherwise({redirectTo: '/loginview'});
	}]);
});