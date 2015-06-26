'use strict';

// Setting up route
angular.module('core').config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
		// Redirect to home view when route not found
		$urlRouterProvider.otherwise('/');

		// Home state routing
		$stateProvider.
		state('home', {
			url: '/',
			templateUrl: 'modules/core/views/home.client.view.html'
		});
		$urlRouterProvider.when('/competitions/create', 'modules/competitions/views/create-competition.client.view.html');
		$urlRouterProvider.when('/competitions', 'modules/competitions/views/list-competitions.client.view.html');
	}
]);
