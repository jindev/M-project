'use strict';

// Competitions controller
angular.module('competitions').controller('CompetitionsController', ['$scope', '$stateParams', '$location', '$http' ,'Authentication', 'Competitions','Comments','Likes','$window',
	function($scope, $stateParams, $location,$http, Authentication, Competitions,Comments,Likes,$window) {
		$scope.authentication = Authentication;
		$scope.likeCount = 0;




		$scope.setPage = function(pageNumber) {
			console.log(pageNumber.title);
			$scope.competitions = Competitions.query({
				nPerPage : 3,
				pageNumber : pageNumber.title
			});
			$scope.selectedPage = pageNumber;
		}
		//$scope.setPage($scope.pageNumbers[0]);


		console.log($scope.authentication);

		$scope.userId = $scope.authentication.user._id;


		if($scope.authentication){
			$scope.uniLikeBtnFlag = false;
		}

		if(Authentication.user.additionalProvidersData){
			if(Authentication.user.additionalProvidersData.facebook){

				$scope.fbLikeBtnFlag = false;
			}
			if(Authentication.user.additionalProvidersData.twitter){
				$scope.twiLikeBtnFlag = false;
			}
		}else{
			$scope.fbLikeBtnFlag = true;
			$scope.twiLikeBtnFlag = true;
		}


		// Create new Competition
		$scope.create = function() {
			// Create new Competition object

			var competition = new Competitions ({
				name: this.name,
				description : this.description,
				phoneNum : this.phoneNum,
				address : this.address,
				country : this.country,
				teamUrl : this.teamUrl,
				teamImgName : $scope.authentication.user.username
			});

			// Redirect after save
			competition.$save(function(response) {
				$location.path('competitions/' + response._id);

				// Clear form fields
				$scope.name = '';
				$scope.description = '';
				$scope.phoneNum = '';
				$scope.address = '';
				$scope.country = '';
				$scope.teamUrl = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Competition
		$scope.remove = function(competition) {
			if ( competition ) { 
				competition.$remove();

				for (var i in $scope.competitions) {
					if ($scope.competitions [i] === competition) {
						$scope.competitions.splice(i, 1);
					}
				}
			} else {
				$scope.competition.$remove(function() {
					$location.path('competitions');
				});
			}
		};

		// Update existing Competition
		$scope.update = function() {
			var competition = $scope.competition;

			competition.$update(function() {
				$location.path('competitions/' + competition._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Competitions
		$scope.find = function() {
			$scope.competitions =
			Competitions.query({
			},function(data){
				$scope.totalItems = data.length;

				$scope.setPage = function (pageNo) {
					console.log(pageNo);
					$scope.currentPage = pageNo;
				};

				$scope.pageChanged = function() {

					$scope.competitions = Competitions.query({
						nPerPage : 3,
						pageNumber : $scope.currentPage
					});
				};

				$scope.maxSize = 10;

			});

			$scope.isViewPage = false;
			$scope.isListPage = true;
		};


		$scope.getUserLike = function(){
			$http.get('/like/' + $scope.userId).
				success(function(data, status, headers, config) {
					if(data){
						if(data[0].fbLike == 1){
							$scope.fbLikeBtnFlag = true;
						}
						if(data[0].twiLike == 1){
							$scope.twiLikeBtnFlag = true;
						}
						if(data[0].uniLike == 1){
							$scope.uniLikeBtnFlag = true;
						}

					}

				}).
				error(function(data, status, headers, config) {

				});
		}

		// Find existing Competition
		$scope.findOne = function() {

			$scope.isViewPage = true;
			$scope.isListPage = false;

			$scope.competition = Competitions.get({
				competitionId: $stateParams.competitionId
			});

			$scope.comments = Comments.query({
				competitionId: $stateParams.competitionId
			},function(comments){

				$scope.totalItems = comments.length;
				$scope.setPage = function (pageNo) {
					$scope.currentPage = pageNo;
				};

				$scope.pageChanged = function() {

				};

				$scope.maxSize = 10;

			});

			$scope.likes = Likes.query({
				competitionId: $stateParams.competitionId
			},function(){
				$scope.likeCount = getLikeCount($scope.likes);
				console.log($scope.likeCount);
			});


			$scope.getUserLike();


		};

		$scope.backToList = function(){
			window.history.back();
		}


		$scope.checkAlreadyRegi = function(){
			$http.get('/checkAlreadyRegi', {

			}).success(function(data){
				if(data.length > 1){
					alert("이미 참가 신청 하셨습니다.");
					$window.history.back();
				}
			}).error();
		}




		$scope.addComment = function() {
			// Create new Competition object
			var comment = new Comments ({
				commentContent : $scope.commentContent,
				competitionId : $scope.competition._id
			});

			// Redirect after save
			comment.$save(function(response) {

				$scope.commentContent = '';

				$scope.comments = Comments.query({
					competitionId: $stateParams.competitionId
				});
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.uniLike = function(){
			var like = new Likes ({
				uniLike : 1,
				competitionId : $scope.competition._id
			});
			console.log($scope.competition._id);

			// Redirect after save
			like.$update(like,function(response) {

				$scope.likes = Comments.query({
					competitionId: $stateParams.competitionId
				},function(){
					$scope.likes = Likes.query({
						competitionId: $stateParams.competitionId
					},function(){
						$scope.likeCount = getLikeCount($scope.likes);
						console.log($scope.likeCount);
						$scope.uniLikeBtnFlag = true;
						alert('좋아요');
					});
				});


			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		}


		$scope.fbLike = function(){
			var like = new Likes ({
				fbLike : 1,
				competitionId : $scope.competition._id
			});
			console.log($scope.competition._id);

			// Redirect after save
			like.$update(like,function(response) {

				$scope.likes = Comments.query({
					competitionId: $stateParams.competitionId
				},function(){
					$scope.likes = Likes.query({
						competitionId: $stateParams.competitionId
					},function(){
						$scope.likeCount = getLikeCount($scope.likes);
						console.log($scope.likeCount);
						$scope.fbLikeBtnFlag = true;
						alert('좋아요');
					});
				});
			}, function(errorResponse,result) {
				$scope.error = errorResponse.data.message;


			});
		}

		$scope.twiLike = function(){
			var like = new Likes ({
				twiLike : 1,
				competitionId : $scope.competition._id
			});
			console.log($scope.competition._id);

			// Redirect after save
			like.$update(like,function(response) {

				$scope.likes = Comments.query({
					competitionId: $stateParams.competitionId
				},function(){
					$scope.likes = Likes.query({
						competitionId: $stateParams.competitionId
					},function(){
						$scope.likeCount = getLikeCount($scope.likes);
						console.log($scope.likeCount);
						$scope.twiLikeBtnFlag = true;
						alert('좋아요');
					});
				});
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;

			});
		}

		$scope.uploadFile = function(files) {
			var fd = new FormData();
			//Take the first selected file
			fd.append("file", files[0]);

			$http.post('/upload', fd, {
				withCredentials: true,
				headers: {'Content-Type': undefined },
				transformRequest: angular.identity
			}).success(function(){
				alert("이미지 등록이 완료되었습니다.");
			}).error();
		};




		//페이지네이션

		$scope.currentPage = 1;









function getLikeCount(likes){
	var count = 0;
	for(var i =0; i < likes.length; i ++){
		 count += likes[i].fbLike;
		 count += likes[i].twiLike;
		 count += likes[i].uniLike;
	}
	return count;
}
}]);



