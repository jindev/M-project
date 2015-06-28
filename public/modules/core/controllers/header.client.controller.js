'use strict';

angular.module('core').controller('HeaderController', ['$scope', 'Authentication', 'Menus','$http','$location',
	function($scope, Authentication, Menus,$http,$location) {
		console.log(Authentication);
		$scope.authentication = Authentication;
		$scope.isCollapsed = false;
		$scope.menu = Menus.getMenu('topbar');

		$scope.toggleCollapsibleMenu = function() {
			$scope.isCollapsed = !$scope.isCollapsed;
		};

		// Collapsing the menu after navigation
		$scope.$on('$stateChangeSuccess', function() {
			$scope.isCollapsed = false;
		});


		$scope.isAlreadyApply = function(){

			$http.get('/isAlreadyApply').
				success(function(data, status, headers, config) {
					console.log(data);
					if(data.length  > 0){
						$location.path('/competitions/'+data[0]._id);
					}else{
						$location.path('/applyInfo');
					}
				}).
				error(function(data, status, headers, config) {
					// called asynchronously if an error occurs
					// or server returns response with an error status.
				});
		}
	}
]);
