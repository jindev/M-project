'use strict';

//Setting up route
angular.module('resultsannounces').config(['$stateProvider',
	function($stateProvider) {
		// Resultsannounces state routing
		$stateProvider.
		state('listResultsannounces', {
			url: '/resultsannounces',
			templateUrl: 'modules/resultsannounces/views/list-resultsannounces.client.view.html'
		}).
		state('createResultsannounce', {
			url: '/resultsannounces/create',
			templateUrl: 'modules/resultsannounces/views/create-resultsannounce.client.view.html'
		}).
		state('viewResultsannounce', {
			url: '/resultsannounces/:resultsannounceId',
			templateUrl: 'modules/resultsannounces/views/view-resultsannounce.client.view.html'
		}).
		state('editResultsannounce', {
			url: '/resultsannounces/:resultsannounceId/edit',
			templateUrl: 'modules/resultsannounces/views/edit-resultsannounce.client.view.html'
		});
	}
]);