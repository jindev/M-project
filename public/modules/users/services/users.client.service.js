'use strict';

// Users service used for communicating with the users REST endpoint
angular.module('users').factory('Users', ['$resource',
	function($resource) {
		return $resource('users', {}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
angular.module('users').factory('Modal', function (btfModal) {
	return btfModal({
		controller: 'AuthenticationController',
		templateUrl: 'modules/users/views/authentication/modal.html'
	});
});

