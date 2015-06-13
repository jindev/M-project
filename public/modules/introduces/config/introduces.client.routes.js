'use strict';

//Setting up route
angular.module('introduces').config(['$stateProvider',
	function($stateProvider) {
		// Introduces state routing
		$stateProvider.
		state('listIntroduces', {
			url: '/introduces',
			templateUrl: 'modules/introduces/views/list-introduces.client.view.html'
		}).
		state('createIntroduce', {
			url: '/introduces/create',
			templateUrl: 'modules/introduces/views/create-introduce.client.view.html'
		}).
		state('viewIntroduce', {
			url: '/introduces/:introduceId',
			templateUrl: 'modules/introduces/views/view-introduce.client.view.html'
		}).
		state('editIntroduce', {
			url: '/introduces/:introduceId/edit',
			templateUrl: 'modules/introduces/views/edit-introduce.client.view.html'
		});
	}
]);