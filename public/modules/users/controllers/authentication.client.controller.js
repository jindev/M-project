'use strict';

angular.module('users').controller('AuthenticationController', ['$scope', '$http', '$location', 'Authentication','$window','Modal',
	function($scope, $http, $location, Authentication,$window,Modal) {
		$scope.authentication = Authentication;

		// If user is signed in then redirect back home
		if ($scope.authentication.user) $location.path('/');

		$scope.signup = function() {

			if(!$scope.agreePolicy){
				alert("이용약관에 동의해 주세요");
				return;
			}

			if($scope.credentials.email != $scope.credentials.username){
				alert("동일한 이메일을 적어주세요");
				return;
			}


			$http.post('/auth/signup', $scope.credentials).success(function(response) {
				// If successful we assign the response to the global user model
				$scope.authentication.user = response;

				// And redirect to the index page
				$window.history.back();
			}).error(function(response) {
				$scope.error = response.message;
			});
		};

		$scope.signin = function() {
			$http.post('/auth/signin', $scope.credentials).success(function(response) {
				// If successful we assign the response to the global user model
				$scope.authentication.user = response;

				// And redirect to the index page
				$window.history.back();
			}).error(function(response) {
				$scope.error = response.message;
			});
		};


		$scope.showModal = function(){
			Modal.activate();
		}
		$scope.closeMe = function(){
			Modal.deactivate();
		}



	}
]);
