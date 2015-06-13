'use strict';

//Setting up route
angular.module('mypages').config(['$stateProvider',
	function($stateProvider) {
		// Mypages state routing
		$stateProvider.
		state('listMypages', {
			url: '/mypages',
			templateUrl: 'modules/mypages/views/list-mypages.client.view.html'
		}).
		state('createMypage', {
			url: '/mypages/create',
			templateUrl: 'modules/mypages/views/create-mypage.client.view.html'
		}).
		state('viewMypage', {
			url: '/mypages/:mypageId',
			templateUrl: 'modules/mypages/views/view-mypage.client.view.html'
		}).
		state('editMypage', {
			url: '/mypages/:mypageId/edit',
			templateUrl: 'modules/mypages/views/edit-mypage.client.view.html'
		});
	}
]);