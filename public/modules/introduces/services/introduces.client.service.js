'use strict';

//Introduces service used to communicate Introduces REST endpoints
angular.module('introduces').factory('Introduces', ['$resource',
	function($resource) {
		return $resource('introduces/:introduceId', { introduceId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);