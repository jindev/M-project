'use strict';

//Mypages service used to communicate Mypages REST endpoints
angular.module('mypages').factory('Mypages', ['$resource',
	function($resource) {
		return $resource('mypages/:mypageId', { mypageId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);