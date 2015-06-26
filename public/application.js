'use strict';

// Init the application configuration module for AngularJS application
var ApplicationConfiguration = (function() {
	// Init module configuration options
	var applicationModuleName = 'm-project';
	var applicationModuleVendorDependencies = ['ngResource', 'ngCookies',  'ngAnimate',  'ngTouch',  'ngSanitize',  'ui.router', 'ui.bootstrap', 'ui.utils'];

	// Add a new vertical module
	var registerModule = function(moduleName, dependencies) {
		// Create angular module
		angular.module(moduleName, dependencies || []);

		// Add the module to the AngularJS configuration file
		angular.module(applicationModuleName).requires.push(moduleName);
	};

	return {
		applicationModuleName: applicationModuleName,
		applicationModuleVendorDependencies: applicationModuleVendorDependencies,
		registerModule: registerModule
	};
})();

'use strict';

// Init the application configuration module for AngularJS application
var ApplicationConfiguration = (function() {
	// Init module configuration options
	var applicationModuleName = 'm-project';
	var applicationModuleVendorDependencies = ['ngResource', 'ngCookies',  'ngAnimate',  'ngTouch',  'ngSanitize',  'ui.router', 'ui.bootstrap', 'ui.utils'];

	// Add a new vertical module
	var registerModule = function(moduleName, dependencies) {
		// Create angular module
		angular.module(moduleName, dependencies || []);

		// Add the module to the AngularJS configuration file
		angular.module(applicationModuleName).requires.push(moduleName);
	};

	return {
		applicationModuleName: applicationModuleName,
		applicationModuleVendorDependencies: applicationModuleVendorDependencies,
		registerModule: registerModule
	};
})();

'use strict';

// Init the application configuration module for AngularJS application
var ApplicationConfiguration = (function() {
	// Init module configuration options
	var applicationModuleName = 'm-project';
	var applicationModuleVendorDependencies = ['ngResource', 'ngCookies',  'ngAnimate',  'ngTouch',  'ngSanitize',  'ui.router', 'ui.bootstrap', 'ui.utils'];

	// Add a new vertical module
	var registerModule = function(moduleName, dependencies) {
		// Create angular module
		angular.module(moduleName, dependencies || []);

		// Add the module to the AngularJS configuration file
		angular.module(applicationModuleName).requires.push(moduleName);
	};

	return {
		applicationModuleName: applicationModuleName,
		applicationModuleVendorDependencies: applicationModuleVendorDependencies,
		registerModule: registerModule
	};
})();

'use strict';

// Init the application configuration module for AngularJS application
var ApplicationConfiguration = (function() {
	// Init module configuration options
	var applicationModuleName = 'm-project';
	var applicationModuleVendorDependencies = ['ngResource', 'ngCookies',  'ngAnimate',  'ngTouch',  'ngSanitize',  'ui.router', 'ui.bootstrap', 'ui.utils'];

	// Add a new vertical module
	var registerModule = function(moduleName, dependencies) {
		// Create angular module
		angular.module(moduleName, dependencies || []);

		// Add the module to the AngularJS configuration file
		angular.module(applicationModuleName).requires.push(moduleName);
	};

	return {
		applicationModuleName: applicationModuleName,
		applicationModuleVendorDependencies: applicationModuleVendorDependencies,
		registerModule: registerModule
	};
})();

'use strict';

// Init the application configuration module for AngularJS application
var ApplicationConfiguration = (function() {
	// Init module configuration options
	var applicationModuleName = 'm-project';
	var applicationModuleVendorDependencies = ['ngResource', 'ngCookies',  'ngAnimate',  'ngTouch',  'ngSanitize',  'ui.router', 'ui.bootstrap', 'ui.utils'];

	// Add a new vertical module
	var registerModule = function(moduleName, dependencies) {
		// Create angular module
		angular.module(moduleName, dependencies || []);

		// Add the module to the AngularJS configuration file
		angular.module(applicationModuleName).requires.push(moduleName);
	};

	return {
		applicationModuleName: applicationModuleName,
		applicationModuleVendorDependencies: applicationModuleVendorDependencies,
		registerModule: registerModule
	};
})();

'use strict';

// Init the application configuration module for AngularJS application
var ApplicationConfiguration = (function() {
	// Init module configuration options
	var applicationModuleName = 'm-project';
	var applicationModuleVendorDependencies = ['ngResource', 'ngCookies',  'ngAnimate',  'ngTouch',  'ngSanitize',  'ui.router', 'ui.bootstrap', 'ui.utils'];

	// Add a new vertical module
	var registerModule = function(moduleName, dependencies) {
		// Create angular module
		angular.module(moduleName, dependencies || []);

		// Add the module to the AngularJS configuration file
		angular.module(applicationModuleName).requires.push(moduleName);
	};

	return {
		applicationModuleName: applicationModuleName,
		applicationModuleVendorDependencies: applicationModuleVendorDependencies,
		registerModule: registerModule
	};
})();

'use strict';

// Init the application configuration module for AngularJS application
var ApplicationConfiguration = (function() {
	// Init module configuration options
	var applicationModuleName = 'm-project';
	var applicationModuleVendorDependencies = ['ngResource', 'ngCookies',  'ngAnimate',  'ngTouch',  'ngSanitize',  'ui.router', 'ui.bootstrap', 'ui.utils'];

	// Add a new vertical module
	var registerModule = function(moduleName, dependencies) {
		// Create angular module
		angular.module(moduleName, dependencies || []);

		// Add the module to the AngularJS configuration file
		angular.module(applicationModuleName).requires.push(moduleName);
	};

	return {
		applicationModuleName: applicationModuleName,
		applicationModuleVendorDependencies: applicationModuleVendorDependencies,
		registerModule: registerModule
	};
})();

'use strict';

// Init the application configuration module for AngularJS application
var ApplicationConfiguration = (function() {
	// Init module configuration options
	var applicationModuleName = 'm-project';
	var applicationModuleVendorDependencies = ['ngResource', 'ngCookies',  'ngAnimate',  'ngTouch',  'ngSanitize',  'ui.router', 'ui.bootstrap', 'ui.utils'];

	// Add a new vertical module
	var registerModule = function(moduleName, dependencies) {
		// Create angular module
		angular.module(moduleName, dependencies || []);

		// Add the module to the AngularJS configuration file
		angular.module(applicationModuleName).requires.push(moduleName);
	};

	return {
		applicationModuleName: applicationModuleName,
		applicationModuleVendorDependencies: applicationModuleVendorDependencies,
		registerModule: registerModule
	};
})();

'use strict';

//Start by defining the main module and adding the module dependencies
angular.module(ApplicationConfiguration.applicationModuleName, ApplicationConfiguration.applicationModuleVendorDependencies);

// Setting HTML5 Location Mode
angular.module(ApplicationConfiguration.applicationModuleName).config(['$locationProvider',
	function($locationProvider) {
		$locationProvider.hashPrefix('!');
	}
]);

//Then define the init function for starting up the application
angular.element(document).ready(function() {
	//Fixing facebook bug with redirect
	if (window.location.hash === '#_=_') window.location.hash = '#!';

	//Then init the app
	angular.bootstrap(document, [ApplicationConfiguration.applicationModuleName]);
});
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('competitions',['youtube-embed','ngFileUpload']);

'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('core');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('faqs');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('introduces');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('mypages');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('news');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('resultsannounces');
'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('users');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('votes');
'use strict';

// Configuring the Articles module
angular.module('competitions').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', '경연대회', 'competitions', 'dropdown', '/competitions(/create)?');
		Menus.addSubMenuItem('topbar', 'competitions', 'List Competitions', 'competitions');
		Menus.addSubMenuItem('topbar', 'competitions', 'New Competition', 'competitions/create');
	}
]);

'use strict';

//Setting up route
angular.module('competitions').config(['$stateProvider',
	function($stateProvider) {
		// Competitions state routing
		$stateProvider.
		state('listCompetitions', {
			url: '/competitions',
			templateUrl: 'modules/competitions/views/list-competitions.client.view.html'
		}).
		state('createCompetition', {
			url: '/competitions/create',
			templateUrl: 'modules/competitions/views/create-competition.client.view.html'
		}).
		state('viewCompetition', {
			url: '/competitions/:competitionId',
			templateUrl: 'modules/competitions/views/view-competition.client.view.html'
		}).
		state('editCompetition', {
			url: '/competitions/:competitionId/edit',
			templateUrl: 'modules/competitions/views/edit-competition.client.view.html'
		});
	}
]);

'use strict';

// Competitions controller
angular.module('competitions').controller('CompetitionsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Competitions','Comments','Likes',
	function($scope, $stateParams, $location, Authentication, Competitions,Comments,Likes) {
		$scope.authentication = Authentication;
		$scope.likeCount = 0;


		console.log($scope.authentication);

		// Create new Competition
		$scope.create = function() {
			// Create new Competition object
			console.log(this);
			var competition = new Competitions ({
				name: this.name,
				description : this.description,
				phoneNum : this.phoneNum,
				address : this.address,
				country : this.country,
				teamUrl : this.teamUrl,
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
			$scope.competitions = Competitions.query();
		};

		// Find existing Competition
		$scope.findOne = function() {
			$scope.competition = Competitions.get({
				competitionId: $stateParams.competitionId
			});

			$scope.comments = Comments.query({
				competitionId: $stateParams.competitionId
			});

			$scope.likes = Likes.query({
				competitionId: $stateParams.competitionId
			},function(){
				$scope.likeCount = getLikeCount($scope.likes);
				console.log($scope.likeCount);
			});



		};

		$scope.backToList = function(){
			window.history.back();
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
					});
				});


			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});


		}

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

'use strict';

angular.module('competitions').factory('Comments', [
	function() {
		// Comments service logic
		// ...

		// Public API
		return {
			someMethod: function() {
				return true;
			}
		};
	}
]);
'use strict';

//Competitions service used to communicate Competitions REST endpoints
angular.module('competitions').factory('Competitions', ['$resource',
	function($resource) {
		return $resource('competitions/:competitionId', { competitionId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);


angular.module('competitions').factory('Comments', ['$resource',
	function($resource) {
		return $resource('comments/:commentId', { commentId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);

angular.module('competitions').factory('Likes', ['$resource',
	function($resource) {
		return $resource('likes/:likeId', { likeId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);

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
	}
]);
'use strict';

angular.module('core').controller('HeaderController', ['$scope', 'Authentication', 'Menus',
	function($scope, Authentication, Menus) {
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
	}
]);
'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
	}
]);
'use strict';

//Menu service used for managing  menus
angular.module('core').service('Menus', [

	function() {
		// Define a set of default roles
		this.defaultRoles = ['*'];

		// Define the menus object
		this.menus = {};

		// A private function for rendering decision 
		var shouldRender = function(user) {
			if (user) {
				if (!!~this.roles.indexOf('*')) {
					return true;
				} else {
					for (var userRoleIndex in user.roles) {
						for (var roleIndex in this.roles) {
							if (this.roles[roleIndex] === user.roles[userRoleIndex]) {
								return true;
							}
						}
					}
				}
			} else {
				return this.isPublic;
			}

			return false;
		};

		// Validate menu existance
		this.validateMenuExistance = function(menuId) {
			if (menuId && menuId.length) {
				if (this.menus[menuId]) {
					return true;
				} else {
					throw new Error('Menu does not exists');
				}
			} else {
				throw new Error('MenuId was not provided');
			}

			return false;
		};

		// Get the menu object by menu id
		this.getMenu = function(menuId) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Return the menu object
			return this.menus[menuId];
		};

		// Add new menu object by menu id
		this.addMenu = function(menuId, isPublic, roles) {
			// Create the new menu
			this.menus[menuId] = {
				isPublic: isPublic || false,
				roles: roles || this.defaultRoles,
				items: [],
				shouldRender: shouldRender
			};

			// Return the menu object
			return this.menus[menuId];
		};

		// Remove existing menu object by menu id
		this.removeMenu = function(menuId) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Return the menu object
			delete this.menus[menuId];
		};

		// Add menu item object
		this.addMenuItem = function(menuId, menuItemTitle, menuItemURL, menuItemType, menuItemUIRoute, isPublic, roles, position) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Push new menu item
			this.menus[menuId].items.push({
				title: menuItemTitle,
				link: menuItemURL,
				menuItemType: menuItemType || 'item',
				menuItemClass: menuItemType,
				uiRoute: menuItemUIRoute || ('/' + menuItemURL),
				isPublic: ((isPublic === null || typeof isPublic === 'undefined') ? this.menus[menuId].isPublic : isPublic),
				roles: ((roles === null || typeof roles === 'undefined') ? this.menus[menuId].roles : roles),
				position: position || 0,
				items: [],
				shouldRender: shouldRender
			});

			// Return the menu object
			return this.menus[menuId];
		};

		// Add submenu item object
		this.addSubMenuItem = function(menuId, rootMenuItemURL, menuItemTitle, menuItemURL, menuItemUIRoute, isPublic, roles, position) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Search for menu item
			for (var itemIndex in this.menus[menuId].items) {
				if (this.menus[menuId].items[itemIndex].link === rootMenuItemURL) {
					// Push new submenu item
					this.menus[menuId].items[itemIndex].items.push({
						title: menuItemTitle,
						link: menuItemURL,
						uiRoute: menuItemUIRoute || ('/' + menuItemURL),
						isPublic: ((isPublic === null || typeof isPublic === 'undefined') ? this.menus[menuId].items[itemIndex].isPublic : isPublic),
						roles: ((roles === null || typeof roles === 'undefined') ? this.menus[menuId].items[itemIndex].roles : roles),
						position: position || 0,
						shouldRender: shouldRender
					});
				}
			}

			// Return the menu object
			return this.menus[menuId];
		};

		// Remove existing menu object by menu id
		this.removeMenuItem = function(menuId, menuItemURL) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Search for menu item to remove
			for (var itemIndex in this.menus[menuId].items) {
				if (this.menus[menuId].items[itemIndex].link === menuItemURL) {
					this.menus[menuId].items.splice(itemIndex, 1);
				}
			}

			// Return the menu object
			return this.menus[menuId];
		};

		// Remove existing menu object by menu id
		this.removeSubMenuItem = function(menuId, submenuItemURL) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Search for menu item to remove
			for (var itemIndex in this.menus[menuId].items) {
				for (var subitemIndex in this.menus[menuId].items[itemIndex].items) {
					if (this.menus[menuId].items[itemIndex].items[subitemIndex].link === submenuItemURL) {
						this.menus[menuId].items[itemIndex].items.splice(subitemIndex, 1);
					}
				}
			}

			// Return the menu object
			return this.menus[menuId];
		};

		//Adding the topbar menu
		this.addMenu('topbar');
	}
]);
'use strict';

// Configuring the Articles module
angular.module('faqs').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'FAQ', 'faqs', 'dropdown', '/faqs(/create)?');
		Menus.addSubMenuItem('topbar', 'faqs', 'List Faqs', 'faqs');
		Menus.addSubMenuItem('topbar', 'faqs', 'New Faq', 'faqs/create');
	}
]);
'use strict';

//Setting up route
angular.module('faqs').config(['$stateProvider',
	function($stateProvider) {
		// Faqs state routing
		$stateProvider.
		state('listFaqs', {
			url: '/faqs',
			templateUrl: 'modules/faqs/views/list-faqs.client.view.html'
		}).
		state('createFaq', {
			url: '/faqs/create',
			templateUrl: 'modules/faqs/views/create-faq.client.view.html'
		}).
		state('viewFaq', {
			url: '/faqs/:faqId',
			templateUrl: 'modules/faqs/views/view-faq.client.view.html'
		}).
		state('editFaq', {
			url: '/faqs/:faqId/edit',
			templateUrl: 'modules/faqs/views/edit-faq.client.view.html'
		});
	}
]);
'use strict';

// Faqs controller
angular.module('faqs').controller('FaqsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Faqs',
	function($scope, $stateParams, $location, Authentication, Faqs) {
		$scope.authentication = Authentication;

		// Create new Faq
		$scope.create = function() {
			// Create new Faq object
			var faq = new Faqs ({
				name: this.name
			});

			// Redirect after save
			faq.$save(function(response) {
				$location.path('faqs/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Faq
		$scope.remove = function(faq) {
			if ( faq ) { 
				faq.$remove();

				for (var i in $scope.faqs) {
					if ($scope.faqs [i] === faq) {
						$scope.faqs.splice(i, 1);
					}
				}
			} else {
				$scope.faq.$remove(function() {
					$location.path('faqs');
				});
			}
		};

		// Update existing Faq
		$scope.update = function() {
			var faq = $scope.faq;

			faq.$update(function() {
				$location.path('faqs/' + faq._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Faqs
		$scope.find = function() {
			$scope.faqs = Faqs.query();
		};

		// Find existing Faq
		$scope.findOne = function() {
			$scope.faq = Faqs.get({ 
				faqId: $stateParams.faqId
			});
		};
	}
]);
'use strict';

//Faqs service used to communicate Faqs REST endpoints
angular.module('faqs').factory('Faqs', ['$resource',
	function($resource) {
		return $resource('faqs/:faqId', { faqId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
'use strict';

// Configuring the Articles module
angular.module('introduces').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'UNI MUSIC RACE', 'introduces', '/introduces(/create)?');
		// Menus.addSubMenuItem('topbar', '진행일정', '진행일정', 'introduces');
		// Menus.addSubMenuItem('topbar', '모집요강', '모집요강', 'introduces/create');
		// Menus.addSubMenuItem('topbar', '우승자 혜택', '우승자 혜택', 'introduces/create');
		// Menus.addSubMenuItem('topbar', '심사위원', '심사위원', 'introduces/create');
		// Menus.addSubMenuItem('topbar', '문의', '문의', 'introduces/create');
	}
]);
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
'use strict';

// Introduces controller
angular.module('introduces').controller('IntroducesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Introduces',
	function($scope, $stateParams, $location, Authentication, Introduces) {
		$scope.authentication = Authentication;

		// Create new Introduce
		$scope.create = function() {
			// Create new Introduce object
			var introduce = new Introduces ({
				name: this.name
			});

			// Redirect after save
			introduce.$save(function(response) {
				$location.path('introduces/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Introduce
		$scope.remove = function(introduce) {
			if ( introduce ) { 
				introduce.$remove();

				for (var i in $scope.introduces) {
					if ($scope.introduces [i] === introduce) {
						$scope.introduces.splice(i, 1);
					}
				}
			} else {
				$scope.introduce.$remove(function() {
					$location.path('introduces');
				});
			}
		};

		// Update existing Introduce
		$scope.update = function() {
			var introduce = $scope.introduce;

			introduce.$update(function() {
				$location.path('introduces/' + introduce._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Introduces
		$scope.find = function() {
			$scope.introduces = Introduces.query();
		};

		// Find existing Introduce
		$scope.findOne = function() {
			$scope.introduce = Introduces.get({ 
				introduceId: $stateParams.introduceId
			});
		};
	}
]);
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
'use strict';

// Configuring the Articles module
angular.module('mypages').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Mypages', 'mypages', 'dropdown', '/mypages(/create)?');
		Menus.addSubMenuItem('topbar', 'mypages', 'List Mypages', 'mypages');
		Menus.addSubMenuItem('topbar', 'mypages', 'New Mypage', 'mypages/create');
	}
]);
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
'use strict';

// Mypages controller
angular.module('mypages').controller('MypagesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Mypages',
	function($scope, $stateParams, $location, Authentication, Mypages) {
		$scope.authentication = Authentication;

		// Create new Mypage
		$scope.create = function() {
			// Create new Mypage object
			var mypage = new Mypages ({
				name: this.name
			});

			// Redirect after save
			mypage.$save(function(response) {
				$location.path('mypages/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Mypage
		$scope.remove = function(mypage) {
			if ( mypage ) { 
				mypage.$remove();

				for (var i in $scope.mypages) {
					if ($scope.mypages [i] === mypage) {
						$scope.mypages.splice(i, 1);
					}
				}
			} else {
				$scope.mypage.$remove(function() {
					$location.path('mypages');
				});
			}
		};

		// Update existing Mypage
		$scope.update = function() {
			var mypage = $scope.mypage;

			mypage.$update(function() {
				$location.path('mypages/' + mypage._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Mypages
		$scope.find = function() {
			$scope.mypages = Mypages.query();
		};

		// Find existing Mypage
		$scope.findOne = function() {
			$scope.mypage = Mypages.get({ 
				mypageId: $stateParams.mypageId
			});
		};
	}
]);
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
'use strict';

// Configuring the Articles module
angular.module('news').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'News', 'news', 'dropdown', '/news(/create)?');
		Menus.addSubMenuItem('topbar', 'news', 'List News', 'news');
		Menus.addSubMenuItem('topbar', 'news', 'New News', 'news/create');
	}
]);
'use strict';

//Setting up route
angular.module('news').config(['$stateProvider',
	function($stateProvider) {
		// News state routing
		$stateProvider.
		state('listNews', {
			url: '/news',
			templateUrl: 'modules/news/views/list-news.client.view.html'
		}).
		state('createNews', {
			url: '/news/create',
			templateUrl: 'modules/news/views/create-news.client.view.html'
		}).
		state('viewNews', {
			url: '/news/:newsId',
			templateUrl: 'modules/news/views/view-news.client.view.html'
		}).
		state('editNews', {
			url: '/news/:newsId/edit',
			templateUrl: 'modules/news/views/edit-news.client.view.html'
		});
	}
]);
'use strict';

// News controller
angular.module('news').controller('NewsController', ['$scope', '$stateParams', '$location', 'Authentication', 'News',
	function($scope, $stateParams, $location, Authentication, News) {
		$scope.authentication = Authentication;

		// Create new News
		$scope.create = function() {
			// Create new News object
			var news = new News ({
				name: this.name,
				content : this.content
			});

			// Redirect after save
			news.$save(function(response) {
				$location.path('news/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing News
		$scope.remove = function(news) {
			if ( news ) { 
				news.$remove();

				for (var i in $scope.news) {
					if ($scope.news [i] === news) {
						$scope.news.splice(i, 1);
					}
				}
			} else {
				$scope.news.$remove(function() {
					$location.path('news');
				});
			}
		};

		// Update existing News
		$scope.update = function() {
			var news = $scope.news;

			news.$update(function() {
				$location.path('news/' + news._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of News
		$scope.find = function() {
			$scope.news = News.query();
		};

		// Find existing News
		$scope.findOne = function() {
			$scope.news = News.get({ 
				newsId: $stateParams.newsId
			});
		};
	}
]);

'use strict';

//News service used to communicate News REST endpoints
angular.module('news').factory('News', ['$resource',
	function($resource) {
		return $resource('news/:newsId', { newsId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
'use strict';

// Configuring the Articles module
angular.module('resultsannounces').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', '결과발표', 'resultsannounces', 'dropdown', '/resultsannounces(/create)?');
		Menus.addSubMenuItem('topbar', 'resultsannounces', 'List Resultsannounces', 'resultsannounces');
		Menus.addSubMenuItem('topbar', 'resultsannounces', 'New Resultsannounce', 'resultsannounces/create');
	}
]);
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
'use strict';

// Resultsannounces controller
angular.module('resultsannounces').controller('ResultsannouncesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Resultsannounces',
	function($scope, $stateParams, $location, Authentication, Resultsannounces) {
		$scope.authentication = Authentication;

		// Create new Resultsannounce
		$scope.create = function() {
			// Create new Resultsannounce object
			var resultsannounce = new Resultsannounces ({
				name: this.name
			});

			// Redirect after save
			resultsannounce.$save(function(response) {
				$location.path('resultsannounces/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Resultsannounce
		$scope.remove = function(resultsannounce) {
			if ( resultsannounce ) { 
				resultsannounce.$remove();

				for (var i in $scope.resultsannounces) {
					if ($scope.resultsannounces [i] === resultsannounce) {
						$scope.resultsannounces.splice(i, 1);
					}
				}
			} else {
				$scope.resultsannounce.$remove(function() {
					$location.path('resultsannounces');
				});
			}
		};

		// Update existing Resultsannounce
		$scope.update = function() {
			var resultsannounce = $scope.resultsannounce;

			resultsannounce.$update(function() {
				$location.path('resultsannounces/' + resultsannounce._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Resultsannounces
		$scope.find = function() {
			$scope.resultsannounces = Resultsannounces.query();
		};

		// Find existing Resultsannounce
		$scope.findOne = function() {
			$scope.resultsannounce = Resultsannounces.get({ 
				resultsannounceId: $stateParams.resultsannounceId
			});
		};
	}
]);
'use strict';

//Resultsannounces service used to communicate Resultsannounces REST endpoints
angular.module('resultsannounces').factory('Resultsannounces', ['$resource',
	function($resource) {
		return $resource('resultsannounces/:resultsannounceId', { resultsannounceId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
'use strict';

// Config HTTP Error Handling
angular.module('users').config(['$httpProvider',
	function($httpProvider) {
		// Set the httpProvider "not authorized" interceptor
		$httpProvider.interceptors.push(['$q', '$location', 'Authentication',
			function($q, $location, Authentication) {
				return {
					responseError: function(rejection) {
						switch (rejection.status) {
							case 401:
								// Deauthenticate the global user
								Authentication.user = null;

								// Redirect to signin page
								$location.path('signin');
								break;
							case 403:
								// Add unauthorized behaviour 
								break;
						}

						return $q.reject(rejection);
					}
				};
			}
		]);
	}
]);
'use strict';

// Setting up route
angular.module('users').config(['$stateProvider',
	function($stateProvider) {
		// Users state routing
		$stateProvider.
		state('profile', {
			url: '/settings/profile',
			templateUrl: 'modules/users/views/settings/edit-profile.client.view.html'
		}).
		state('password', {
			url: '/settings/password',
			templateUrl: 'modules/users/views/settings/change-password.client.view.html'
		}).
		state('accounts', {
			url: '/settings/accounts',
			templateUrl: 'modules/users/views/settings/social-accounts.client.view.html'
		}).
		state('signup', {
			url: '/signup',
			templateUrl: 'modules/users/views/authentication/signup.client.view.html'
		}).
		state('signin', {
			url: '/signin',
			templateUrl: 'modules/users/views/authentication/signin.client.view.html'
		}).
		state('forgot', {
			url: '/password/forgot',
			templateUrl: 'modules/users/views/password/forgot-password.client.view.html'
		}).
		state('reset-invalid', {
			url: '/password/reset/invalid',
			templateUrl: 'modules/users/views/password/reset-password-invalid.client.view.html'
		}).
		state('reset-success', {
			url: '/password/reset/success',
			templateUrl: 'modules/users/views/password/reset-password-success.client.view.html'
		}).
		state('reset', {
			url: '/password/reset/:token',
			templateUrl: 'modules/users/views/password/reset-password.client.view.html'
		});
	}
]);
'use strict';

angular.module('users').controller('AuthenticationController', ['$scope', '$http', '$location', 'Authentication',
	function($scope, $http, $location, Authentication) {
		$scope.authentication = Authentication;

		// If user is signed in then redirect back home
		if ($scope.authentication.user) $location.path('/');

		$scope.signup = function() {
			$http.post('/auth/signup', $scope.credentials).success(function(response) {
				// If successful we assign the response to the global user model
				$scope.authentication.user = response;

				// And redirect to the index page
				$location.path('/');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};

		$scope.signin = function() {
			$http.post('/auth/signin', $scope.credentials).success(function(response) {
				// If successful we assign the response to the global user model
				$scope.authentication.user = response;

				// And redirect to the index page
				$location.path('/');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);
'use strict';

angular.module('users').controller('PasswordController', ['$scope', '$stateParams', '$http', '$location', 'Authentication',
	function($scope, $stateParams, $http, $location, Authentication) {
		$scope.authentication = Authentication;

		//If user is signed in then redirect back home
		if ($scope.authentication.user) $location.path('/');

		// Submit forgotten password account id
		$scope.askForPasswordReset = function() {
			$scope.success = $scope.error = null;

			$http.post('/auth/forgot', $scope.credentials).success(function(response) {
				// Show user success message and clear form
				$scope.credentials = null;
				$scope.success = response.message;

			}).error(function(response) {
				// Show user error message and clear form
				$scope.credentials = null;
				$scope.error = response.message;
			});
		};

		// Change user password
		$scope.resetUserPassword = function() {
			$scope.success = $scope.error = null;

			$http.post('/auth/reset/' + $stateParams.token, $scope.passwordDetails).success(function(response) {
				// If successful show success message and clear form
				$scope.passwordDetails = null;

				// Attach user profile
				Authentication.user = response;

				// And redirect to the index page
				$location.path('/password/reset/success');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);
'use strict';

angular.module('users').controller('SettingsController', ['$scope', '$http', '$location', 'Users', 'Authentication',
	function($scope, $http, $location, Users, Authentication) {
		$scope.user = Authentication.user;

		// If user is not signed in then redirect back home
		if (!$scope.user) $location.path('/');

		// Check if there are additional accounts 
		$scope.hasConnectedAdditionalSocialAccounts = function(provider) {
			for (var i in $scope.user.additionalProvidersData) {
				return true;
			}

			return false;
		};

		// Check if provider is already in use with current user
		$scope.isConnectedSocialAccount = function(provider) {
			return $scope.user.provider === provider || ($scope.user.additionalProvidersData && $scope.user.additionalProvidersData[provider]);
		};

		// Remove a user social account
		$scope.removeUserSocialAccount = function(provider) {
			$scope.success = $scope.error = null;

			$http.delete('/users/accounts', {
				params: {
					provider: provider
				}
			}).success(function(response) {
				// If successful show success message and clear form
				$scope.success = true;
				$scope.user = Authentication.user = response;
			}).error(function(response) {
				$scope.error = response.message;
			});
		};

		// Update a user profile
		$scope.updateUserProfile = function(isValid) {
			if (isValid) {
				$scope.success = $scope.error = null;
				var user = new Users($scope.user);

				user.$update(function(response) {
					$scope.success = true;
					Authentication.user = response;
				}, function(response) {
					$scope.error = response.data.message;
				});
			} else {
				$scope.submitted = true;
			}
		};

		// Change user password
		$scope.changeUserPassword = function() {
			$scope.success = $scope.error = null;

			$http.post('/users/password', $scope.passwordDetails).success(function(response) {
				// If successful show success message and clear form
				$scope.success = true;
				$scope.passwordDetails = null;
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);
'use strict';

// Authentication service for user variables
angular.module('users').factory('Authentication', [
	function() {
		var _this = this;

		_this._data = {
			user: window.user
		};

		return _this._data;
	}
]);
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
'use strict';

//Setting up route
angular.module('votes').config(['$stateProvider',
	function($stateProvider) {
		// Votes state routing
		$stateProvider.
		state('listVotes', {
			url: '/votes',
			templateUrl: 'modules/votes/views/list-votes.client.view.html'
		}).
		state('createVote', {
			url: '/votes/create',
			templateUrl: 'modules/votes/views/create-vote.client.view.html'
		}).
		state('viewVote', {
			url: '/votes/:voteId',
			templateUrl: 'modules/votes/views/view-vote.client.view.html'
		}).
		state('editVote', {
			url: '/votes/:voteId/edit',
			templateUrl: 'modules/votes/views/edit-vote.client.view.html'
		});
	}
]);
'use strict';

// Votes controller
angular.module('votes').controller('VotesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Votes',
	function($scope, $stateParams, $location, Authentication, Votes) {
		$scope.authentication = Authentication;

		// Create new Vote
		$scope.create = function() {
			// Create new Vote object
			var vote = new Votes ({
				name: this.name
			});

			// Redirect after save
			vote.$save(function(response) {
				$location.path('votes/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Vote
		$scope.remove = function(vote) {
			if ( vote ) { 
				vote.$remove();

				for (var i in $scope.votes) {
					if ($scope.votes [i] === vote) {
						$scope.votes.splice(i, 1);
					}
				}
			} else {
				$scope.vote.$remove(function() {
					$location.path('votes');
				});
			}
		};

		// Update existing Vote
		$scope.update = function() {
			var vote = $scope.vote;

			vote.$update(function() {
				$location.path('votes/' + vote._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Votes
		$scope.find = function() {
			$scope.votes = Votes.query();
		};

		// Find existing Vote
		$scope.findOne = function() {
			$scope.vote = Votes.get({ 
				voteId: $stateParams.voteId
			});
		};
	}
]);
'use strict';

//Votes service used to communicate Votes REST endpoints
angular.module('votes').factory('Votes', ['$resource',
	function($resource) {
		return $resource('votes/:voteId', { voteId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('competitions',['youtube-embed','ngFileUpload']);

'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('core');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('faqs');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('introduces');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('mypages');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('news');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('resultsannounces');
'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('users');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('votes');
'use strict';

// Configuring the Articles module
angular.module('competitions').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', '경연대회', 'competitions', 'dropdown', '/competitions(/create)?');
		Menus.addSubMenuItem('topbar', 'competitions', 'List Competitions', 'competitions');
		Menus.addSubMenuItem('topbar', 'competitions', 'New Competition', 'competitions/create');
	}
]);

'use strict';

//Setting up route
angular.module('competitions').config(['$stateProvider',
	function($stateProvider) {
		// Competitions state routing
		$stateProvider.
		state('listCompetitions', {
			url: '/competitions',
			templateUrl: 'modules/competitions/views/list-competitions.client.view.html'
		}).
		state('createCompetition', {
			url: '/competitions/create',
			templateUrl: 'modules/competitions/views/create-competition.client.view.html'
		}).
		state('viewCompetition', {
			url: '/competitions/:competitionId',
			templateUrl: 'modules/competitions/views/view-competition.client.view.html'
		}).
		state('editCompetition', {
			url: '/competitions/:competitionId/edit',
			templateUrl: 'modules/competitions/views/edit-competition.client.view.html'
		});
	}
]);

'use strict';

// Competitions controller
angular.module('competitions').controller('CompetitionsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Competitions','Comments','Likes',
	function($scope, $stateParams, $location, Authentication, Competitions,Comments,Likes) {
		$scope.authentication = Authentication;
		$scope.likeCount = 0;


		console.log($scope.authentication);

		// Create new Competition
		$scope.create = function() {
			// Create new Competition object
			console.log(this);
			var competition = new Competitions ({
				name: this.name,
				description : this.description,
				phoneNum : this.phoneNum,
				address : this.address,
				country : this.country,
				teamUrl : this.teamUrl,
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
			$scope.competitions = Competitions.query();
		};

		// Find existing Competition
		$scope.findOne = function() {
			$scope.competition = Competitions.get({
				competitionId: $stateParams.competitionId
			});

			$scope.comments = Comments.query({
				competitionId: $stateParams.competitionId
			});

			$scope.likes = Likes.query({
				competitionId: $stateParams.competitionId
			},function(){
				$scope.likeCount = getLikeCount($scope.likes);
				console.log($scope.likeCount);
			});



		};

		$scope.backToList = function(){
			window.history.back();
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
					});
				});


			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});


		}

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

'use strict';

angular.module('competitions').factory('Comments', [
	function() {
		// Comments service logic
		// ...

		// Public API
		return {
			someMethod: function() {
				return true;
			}
		};
	}
]);
'use strict';

//Competitions service used to communicate Competitions REST endpoints
angular.module('competitions').factory('Competitions', ['$resource',
	function($resource) {
		return $resource('competitions/:competitionId', { competitionId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);


angular.module('competitions').factory('Comments', ['$resource',
	function($resource) {
		return $resource('comments/:commentId', { commentId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);

angular.module('competitions').factory('Likes', ['$resource',
	function($resource) {
		return $resource('likes/:likeId', { likeId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);

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
	}
]);
'use strict';

angular.module('core').controller('HeaderController', ['$scope', 'Authentication', 'Menus',
	function($scope, Authentication, Menus) {
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
	}
]);
'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
	}
]);
'use strict';

//Menu service used for managing  menus
angular.module('core').service('Menus', [

	function() {
		// Define a set of default roles
		this.defaultRoles = ['*'];

		// Define the menus object
		this.menus = {};

		// A private function for rendering decision 
		var shouldRender = function(user) {
			if (user) {
				if (!!~this.roles.indexOf('*')) {
					return true;
				} else {
					for (var userRoleIndex in user.roles) {
						for (var roleIndex in this.roles) {
							if (this.roles[roleIndex] === user.roles[userRoleIndex]) {
								return true;
							}
						}
					}
				}
			} else {
				return this.isPublic;
			}

			return false;
		};

		// Validate menu existance
		this.validateMenuExistance = function(menuId) {
			if (menuId && menuId.length) {
				if (this.menus[menuId]) {
					return true;
				} else {
					throw new Error('Menu does not exists');
				}
			} else {
				throw new Error('MenuId was not provided');
			}

			return false;
		};

		// Get the menu object by menu id
		this.getMenu = function(menuId) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Return the menu object
			return this.menus[menuId];
		};

		// Add new menu object by menu id
		this.addMenu = function(menuId, isPublic, roles) {
			// Create the new menu
			this.menus[menuId] = {
				isPublic: isPublic || false,
				roles: roles || this.defaultRoles,
				items: [],
				shouldRender: shouldRender
			};

			// Return the menu object
			return this.menus[menuId];
		};

		// Remove existing menu object by menu id
		this.removeMenu = function(menuId) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Return the menu object
			delete this.menus[menuId];
		};

		// Add menu item object
		this.addMenuItem = function(menuId, menuItemTitle, menuItemURL, menuItemType, menuItemUIRoute, isPublic, roles, position) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Push new menu item
			this.menus[menuId].items.push({
				title: menuItemTitle,
				link: menuItemURL,
				menuItemType: menuItemType || 'item',
				menuItemClass: menuItemType,
				uiRoute: menuItemUIRoute || ('/' + menuItemURL),
				isPublic: ((isPublic === null || typeof isPublic === 'undefined') ? this.menus[menuId].isPublic : isPublic),
				roles: ((roles === null || typeof roles === 'undefined') ? this.menus[menuId].roles : roles),
				position: position || 0,
				items: [],
				shouldRender: shouldRender
			});

			// Return the menu object
			return this.menus[menuId];
		};

		// Add submenu item object
		this.addSubMenuItem = function(menuId, rootMenuItemURL, menuItemTitle, menuItemURL, menuItemUIRoute, isPublic, roles, position) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Search for menu item
			for (var itemIndex in this.menus[menuId].items) {
				if (this.menus[menuId].items[itemIndex].link === rootMenuItemURL) {
					// Push new submenu item
					this.menus[menuId].items[itemIndex].items.push({
						title: menuItemTitle,
						link: menuItemURL,
						uiRoute: menuItemUIRoute || ('/' + menuItemURL),
						isPublic: ((isPublic === null || typeof isPublic === 'undefined') ? this.menus[menuId].items[itemIndex].isPublic : isPublic),
						roles: ((roles === null || typeof roles === 'undefined') ? this.menus[menuId].items[itemIndex].roles : roles),
						position: position || 0,
						shouldRender: shouldRender
					});
				}
			}

			// Return the menu object
			return this.menus[menuId];
		};

		// Remove existing menu object by menu id
		this.removeMenuItem = function(menuId, menuItemURL) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Search for menu item to remove
			for (var itemIndex in this.menus[menuId].items) {
				if (this.menus[menuId].items[itemIndex].link === menuItemURL) {
					this.menus[menuId].items.splice(itemIndex, 1);
				}
			}

			// Return the menu object
			return this.menus[menuId];
		};

		// Remove existing menu object by menu id
		this.removeSubMenuItem = function(menuId, submenuItemURL) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Search for menu item to remove
			for (var itemIndex in this.menus[menuId].items) {
				for (var subitemIndex in this.menus[menuId].items[itemIndex].items) {
					if (this.menus[menuId].items[itemIndex].items[subitemIndex].link === submenuItemURL) {
						this.menus[menuId].items[itemIndex].items.splice(subitemIndex, 1);
					}
				}
			}

			// Return the menu object
			return this.menus[menuId];
		};

		//Adding the topbar menu
		this.addMenu('topbar');
	}
]);
'use strict';

// Configuring the Articles module
angular.module('faqs').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'FAQ', 'faqs', 'dropdown', '/faqs(/create)?');
		Menus.addSubMenuItem('topbar', 'faqs', 'List Faqs', 'faqs');
		Menus.addSubMenuItem('topbar', 'faqs', 'New Faq', 'faqs/create');
	}
]);
'use strict';

//Setting up route
angular.module('faqs').config(['$stateProvider',
	function($stateProvider) {
		// Faqs state routing
		$stateProvider.
		state('listFaqs', {
			url: '/faqs',
			templateUrl: 'modules/faqs/views/list-faqs.client.view.html'
		}).
		state('createFaq', {
			url: '/faqs/create',
			templateUrl: 'modules/faqs/views/create-faq.client.view.html'
		}).
		state('viewFaq', {
			url: '/faqs/:faqId',
			templateUrl: 'modules/faqs/views/view-faq.client.view.html'
		}).
		state('editFaq', {
			url: '/faqs/:faqId/edit',
			templateUrl: 'modules/faqs/views/edit-faq.client.view.html'
		});
	}
]);
'use strict';

// Faqs controller
angular.module('faqs').controller('FaqsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Faqs',
	function($scope, $stateParams, $location, Authentication, Faqs) {
		$scope.authentication = Authentication;

		// Create new Faq
		$scope.create = function() {
			// Create new Faq object
			var faq = new Faqs ({
				name: this.name
			});

			// Redirect after save
			faq.$save(function(response) {
				$location.path('faqs/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Faq
		$scope.remove = function(faq) {
			if ( faq ) { 
				faq.$remove();

				for (var i in $scope.faqs) {
					if ($scope.faqs [i] === faq) {
						$scope.faqs.splice(i, 1);
					}
				}
			} else {
				$scope.faq.$remove(function() {
					$location.path('faqs');
				});
			}
		};

		// Update existing Faq
		$scope.update = function() {
			var faq = $scope.faq;

			faq.$update(function() {
				$location.path('faqs/' + faq._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Faqs
		$scope.find = function() {
			$scope.faqs = Faqs.query();
		};

		// Find existing Faq
		$scope.findOne = function() {
			$scope.faq = Faqs.get({ 
				faqId: $stateParams.faqId
			});
		};
	}
]);
'use strict';

//Faqs service used to communicate Faqs REST endpoints
angular.module('faqs').factory('Faqs', ['$resource',
	function($resource) {
		return $resource('faqs/:faqId', { faqId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
'use strict';

// Configuring the Articles module
angular.module('introduces').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'UNI MUSIC RACE', 'introduces', '/introduces(/create)?');
		// Menus.addSubMenuItem('topbar', '진행일정', '진행일정', 'introduces');
		// Menus.addSubMenuItem('topbar', '모집요강', '모집요강', 'introduces/create');
		// Menus.addSubMenuItem('topbar', '우승자 혜택', '우승자 혜택', 'introduces/create');
		// Menus.addSubMenuItem('topbar', '심사위원', '심사위원', 'introduces/create');
		// Menus.addSubMenuItem('topbar', '문의', '문의', 'introduces/create');
	}
]);
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
'use strict';

// Introduces controller
angular.module('introduces').controller('IntroducesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Introduces',
	function($scope, $stateParams, $location, Authentication, Introduces) {
		$scope.authentication = Authentication;

		// Create new Introduce
		$scope.create = function() {
			// Create new Introduce object
			var introduce = new Introduces ({
				name: this.name
			});

			// Redirect after save
			introduce.$save(function(response) {
				$location.path('introduces/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Introduce
		$scope.remove = function(introduce) {
			if ( introduce ) { 
				introduce.$remove();

				for (var i in $scope.introduces) {
					if ($scope.introduces [i] === introduce) {
						$scope.introduces.splice(i, 1);
					}
				}
			} else {
				$scope.introduce.$remove(function() {
					$location.path('introduces');
				});
			}
		};

		// Update existing Introduce
		$scope.update = function() {
			var introduce = $scope.introduce;

			introduce.$update(function() {
				$location.path('introduces/' + introduce._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Introduces
		$scope.find = function() {
			$scope.introduces = Introduces.query();
		};

		// Find existing Introduce
		$scope.findOne = function() {
			$scope.introduce = Introduces.get({ 
				introduceId: $stateParams.introduceId
			});
		};
	}
]);
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
'use strict';

// Configuring the Articles module
angular.module('mypages').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Mypages', 'mypages', 'dropdown', '/mypages(/create)?');
		Menus.addSubMenuItem('topbar', 'mypages', 'List Mypages', 'mypages');
		Menus.addSubMenuItem('topbar', 'mypages', 'New Mypage', 'mypages/create');
	}
]);
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
'use strict';

// Mypages controller
angular.module('mypages').controller('MypagesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Mypages',
	function($scope, $stateParams, $location, Authentication, Mypages) {
		$scope.authentication = Authentication;

		// Create new Mypage
		$scope.create = function() {
			// Create new Mypage object
			var mypage = new Mypages ({
				name: this.name
			});

			// Redirect after save
			mypage.$save(function(response) {
				$location.path('mypages/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Mypage
		$scope.remove = function(mypage) {
			if ( mypage ) { 
				mypage.$remove();

				for (var i in $scope.mypages) {
					if ($scope.mypages [i] === mypage) {
						$scope.mypages.splice(i, 1);
					}
				}
			} else {
				$scope.mypage.$remove(function() {
					$location.path('mypages');
				});
			}
		};

		// Update existing Mypage
		$scope.update = function() {
			var mypage = $scope.mypage;

			mypage.$update(function() {
				$location.path('mypages/' + mypage._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Mypages
		$scope.find = function() {
			$scope.mypages = Mypages.query();
		};

		// Find existing Mypage
		$scope.findOne = function() {
			$scope.mypage = Mypages.get({ 
				mypageId: $stateParams.mypageId
			});
		};
	}
]);
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
'use strict';

// Configuring the Articles module
angular.module('news').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'News', 'news', 'dropdown', '/news(/create)?');
		Menus.addSubMenuItem('topbar', 'news', 'List News', 'news');
		Menus.addSubMenuItem('topbar', 'news', 'New News', 'news/create');
	}
]);
'use strict';

//Setting up route
angular.module('news').config(['$stateProvider',
	function($stateProvider) {
		// News state routing
		$stateProvider.
		state('listNews', {
			url: '/news',
			templateUrl: 'modules/news/views/list-news.client.view.html'
		}).
		state('createNews', {
			url: '/news/create',
			templateUrl: 'modules/news/views/create-news.client.view.html'
		}).
		state('viewNews', {
			url: '/news/:newsId',
			templateUrl: 'modules/news/views/view-news.client.view.html'
		}).
		state('editNews', {
			url: '/news/:newsId/edit',
			templateUrl: 'modules/news/views/edit-news.client.view.html'
		});
	}
]);
'use strict';

// News controller
angular.module('news').controller('NewsController', ['$scope', '$stateParams', '$location', 'Authentication', 'News',
	function($scope, $stateParams, $location, Authentication, News) {
		$scope.authentication = Authentication;

		// Create new News
		$scope.create = function() {
			// Create new News object
			var news = new News ({
				name: this.name,
				content : this.content
			});

			// Redirect after save
			news.$save(function(response) {
				$location.path('news/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing News
		$scope.remove = function(news) {
			if ( news ) { 
				news.$remove();

				for (var i in $scope.news) {
					if ($scope.news [i] === news) {
						$scope.news.splice(i, 1);
					}
				}
			} else {
				$scope.news.$remove(function() {
					$location.path('news');
				});
			}
		};

		// Update existing News
		$scope.update = function() {
			var news = $scope.news;

			news.$update(function() {
				$location.path('news/' + news._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of News
		$scope.find = function() {
			$scope.news = News.query();
		};

		// Find existing News
		$scope.findOne = function() {
			$scope.news = News.get({ 
				newsId: $stateParams.newsId
			});
		};
	}
]);

'use strict';

//News service used to communicate News REST endpoints
angular.module('news').factory('News', ['$resource',
	function($resource) {
		return $resource('news/:newsId', { newsId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
'use strict';

// Configuring the Articles module
angular.module('resultsannounces').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', '결과발표', 'resultsannounces', 'dropdown', '/resultsannounces(/create)?');
		Menus.addSubMenuItem('topbar', 'resultsannounces', 'List Resultsannounces', 'resultsannounces');
		Menus.addSubMenuItem('topbar', 'resultsannounces', 'New Resultsannounce', 'resultsannounces/create');
	}
]);
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
'use strict';

// Resultsannounces controller
angular.module('resultsannounces').controller('ResultsannouncesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Resultsannounces',
	function($scope, $stateParams, $location, Authentication, Resultsannounces) {
		$scope.authentication = Authentication;

		// Create new Resultsannounce
		$scope.create = function() {
			// Create new Resultsannounce object
			var resultsannounce = new Resultsannounces ({
				name: this.name
			});

			// Redirect after save
			resultsannounce.$save(function(response) {
				$location.path('resultsannounces/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Resultsannounce
		$scope.remove = function(resultsannounce) {
			if ( resultsannounce ) { 
				resultsannounce.$remove();

				for (var i in $scope.resultsannounces) {
					if ($scope.resultsannounces [i] === resultsannounce) {
						$scope.resultsannounces.splice(i, 1);
					}
				}
			} else {
				$scope.resultsannounce.$remove(function() {
					$location.path('resultsannounces');
				});
			}
		};

		// Update existing Resultsannounce
		$scope.update = function() {
			var resultsannounce = $scope.resultsannounce;

			resultsannounce.$update(function() {
				$location.path('resultsannounces/' + resultsannounce._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Resultsannounces
		$scope.find = function() {
			$scope.resultsannounces = Resultsannounces.query();
		};

		// Find existing Resultsannounce
		$scope.findOne = function() {
			$scope.resultsannounce = Resultsannounces.get({ 
				resultsannounceId: $stateParams.resultsannounceId
			});
		};
	}
]);
'use strict';

//Resultsannounces service used to communicate Resultsannounces REST endpoints
angular.module('resultsannounces').factory('Resultsannounces', ['$resource',
	function($resource) {
		return $resource('resultsannounces/:resultsannounceId', { resultsannounceId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
'use strict';

// Config HTTP Error Handling
angular.module('users').config(['$httpProvider',
	function($httpProvider) {
		// Set the httpProvider "not authorized" interceptor
		$httpProvider.interceptors.push(['$q', '$location', 'Authentication',
			function($q, $location, Authentication) {
				return {
					responseError: function(rejection) {
						switch (rejection.status) {
							case 401:
								// Deauthenticate the global user
								Authentication.user = null;

								// Redirect to signin page
								$location.path('signin');
								break;
							case 403:
								// Add unauthorized behaviour 
								break;
						}

						return $q.reject(rejection);
					}
				};
			}
		]);
	}
]);
'use strict';

// Setting up route
angular.module('users').config(['$stateProvider',
	function($stateProvider) {
		// Users state routing
		$stateProvider.
		state('profile', {
			url: '/settings/profile',
			templateUrl: 'modules/users/views/settings/edit-profile.client.view.html'
		}).
		state('password', {
			url: '/settings/password',
			templateUrl: 'modules/users/views/settings/change-password.client.view.html'
		}).
		state('accounts', {
			url: '/settings/accounts',
			templateUrl: 'modules/users/views/settings/social-accounts.client.view.html'
		}).
		state('signup', {
			url: '/signup',
			templateUrl: 'modules/users/views/authentication/signup.client.view.html'
		}).
		state('signin', {
			url: '/signin',
			templateUrl: 'modules/users/views/authentication/signin.client.view.html'
		}).
		state('forgot', {
			url: '/password/forgot',
			templateUrl: 'modules/users/views/password/forgot-password.client.view.html'
		}).
		state('reset-invalid', {
			url: '/password/reset/invalid',
			templateUrl: 'modules/users/views/password/reset-password-invalid.client.view.html'
		}).
		state('reset-success', {
			url: '/password/reset/success',
			templateUrl: 'modules/users/views/password/reset-password-success.client.view.html'
		}).
		state('reset', {
			url: '/password/reset/:token',
			templateUrl: 'modules/users/views/password/reset-password.client.view.html'
		});
	}
]);
'use strict';

angular.module('users').controller('AuthenticationController', ['$scope', '$http', '$location', 'Authentication',
	function($scope, $http, $location, Authentication) {
		$scope.authentication = Authentication;

		// If user is signed in then redirect back home
		if ($scope.authentication.user) $location.path('/');

		$scope.signup = function() {
			$http.post('/auth/signup', $scope.credentials).success(function(response) {
				// If successful we assign the response to the global user model
				$scope.authentication.user = response;

				// And redirect to the index page
				$location.path('/');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};

		$scope.signin = function() {
			$http.post('/auth/signin', $scope.credentials).success(function(response) {
				// If successful we assign the response to the global user model
				$scope.authentication.user = response;

				// And redirect to the index page
				$location.path('/');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);
'use strict';

angular.module('users').controller('PasswordController', ['$scope', '$stateParams', '$http', '$location', 'Authentication',
	function($scope, $stateParams, $http, $location, Authentication) {
		$scope.authentication = Authentication;

		//If user is signed in then redirect back home
		if ($scope.authentication.user) $location.path('/');

		// Submit forgotten password account id
		$scope.askForPasswordReset = function() {
			$scope.success = $scope.error = null;

			$http.post('/auth/forgot', $scope.credentials).success(function(response) {
				// Show user success message and clear form
				$scope.credentials = null;
				$scope.success = response.message;

			}).error(function(response) {
				// Show user error message and clear form
				$scope.credentials = null;
				$scope.error = response.message;
			});
		};

		// Change user password
		$scope.resetUserPassword = function() {
			$scope.success = $scope.error = null;

			$http.post('/auth/reset/' + $stateParams.token, $scope.passwordDetails).success(function(response) {
				// If successful show success message and clear form
				$scope.passwordDetails = null;

				// Attach user profile
				Authentication.user = response;

				// And redirect to the index page
				$location.path('/password/reset/success');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);
'use strict';

angular.module('users').controller('SettingsController', ['$scope', '$http', '$location', 'Users', 'Authentication',
	function($scope, $http, $location, Users, Authentication) {
		$scope.user = Authentication.user;

		// If user is not signed in then redirect back home
		if (!$scope.user) $location.path('/');

		// Check if there are additional accounts 
		$scope.hasConnectedAdditionalSocialAccounts = function(provider) {
			for (var i in $scope.user.additionalProvidersData) {
				return true;
			}

			return false;
		};

		// Check if provider is already in use with current user
		$scope.isConnectedSocialAccount = function(provider) {
			return $scope.user.provider === provider || ($scope.user.additionalProvidersData && $scope.user.additionalProvidersData[provider]);
		};

		// Remove a user social account
		$scope.removeUserSocialAccount = function(provider) {
			$scope.success = $scope.error = null;

			$http.delete('/users/accounts', {
				params: {
					provider: provider
				}
			}).success(function(response) {
				// If successful show success message and clear form
				$scope.success = true;
				$scope.user = Authentication.user = response;
			}).error(function(response) {
				$scope.error = response.message;
			});
		};

		// Update a user profile
		$scope.updateUserProfile = function(isValid) {
			if (isValid) {
				$scope.success = $scope.error = null;
				var user = new Users($scope.user);

				user.$update(function(response) {
					$scope.success = true;
					Authentication.user = response;
				}, function(response) {
					$scope.error = response.data.message;
				});
			} else {
				$scope.submitted = true;
			}
		};

		// Change user password
		$scope.changeUserPassword = function() {
			$scope.success = $scope.error = null;

			$http.post('/users/password', $scope.passwordDetails).success(function(response) {
				// If successful show success message and clear form
				$scope.success = true;
				$scope.passwordDetails = null;
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);
'use strict';

// Authentication service for user variables
angular.module('users').factory('Authentication', [
	function() {
		var _this = this;

		_this._data = {
			user: window.user
		};

		return _this._data;
	}
]);
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
'use strict';

//Setting up route
angular.module('votes').config(['$stateProvider',
	function($stateProvider) {
		// Votes state routing
		$stateProvider.
		state('listVotes', {
			url: '/votes',
			templateUrl: 'modules/votes/views/list-votes.client.view.html'
		}).
		state('createVote', {
			url: '/votes/create',
			templateUrl: 'modules/votes/views/create-vote.client.view.html'
		}).
		state('viewVote', {
			url: '/votes/:voteId',
			templateUrl: 'modules/votes/views/view-vote.client.view.html'
		}).
		state('editVote', {
			url: '/votes/:voteId/edit',
			templateUrl: 'modules/votes/views/edit-vote.client.view.html'
		});
	}
]);
'use strict';

// Votes controller
angular.module('votes').controller('VotesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Votes',
	function($scope, $stateParams, $location, Authentication, Votes) {
		$scope.authentication = Authentication;

		// Create new Vote
		$scope.create = function() {
			// Create new Vote object
			var vote = new Votes ({
				name: this.name
			});

			// Redirect after save
			vote.$save(function(response) {
				$location.path('votes/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Vote
		$scope.remove = function(vote) {
			if ( vote ) { 
				vote.$remove();

				for (var i in $scope.votes) {
					if ($scope.votes [i] === vote) {
						$scope.votes.splice(i, 1);
					}
				}
			} else {
				$scope.vote.$remove(function() {
					$location.path('votes');
				});
			}
		};

		// Update existing Vote
		$scope.update = function() {
			var vote = $scope.vote;

			vote.$update(function() {
				$location.path('votes/' + vote._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Votes
		$scope.find = function() {
			$scope.votes = Votes.query();
		};

		// Find existing Vote
		$scope.findOne = function() {
			$scope.vote = Votes.get({ 
				voteId: $stateParams.voteId
			});
		};
	}
]);
'use strict';

//Votes service used to communicate Votes REST endpoints
angular.module('votes').factory('Votes', ['$resource',
	function($resource) {
		return $resource('votes/:voteId', { voteId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('competitions',['youtube-embed','ngFileUpload']);

'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('core');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('faqs');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('introduces');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('mypages');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('news');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('resultsannounces');
'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('users');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('votes');
'use strict';

// Configuring the Articles module
angular.module('competitions').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', '경연대회', 'competitions', 'dropdown', '/competitions(/create)?');
		Menus.addSubMenuItem('topbar', 'competitions', 'List Competitions', 'competitions');
		Menus.addSubMenuItem('topbar', 'competitions', 'New Competition', 'competitions/create');
	}
]);

'use strict';

//Setting up route
angular.module('competitions').config(['$stateProvider',
	function($stateProvider) {
		// Competitions state routing
		$stateProvider.
		state('listCompetitions', {
			url: '/competitions',
			templateUrl: 'modules/competitions/views/list-competitions.client.view.html'
		}).
		state('createCompetition', {
			url: '/competitions/create',
			templateUrl: 'modules/competitions/views/create-competition.client.view.html'
		}).
		state('viewCompetition', {
			url: '/competitions/:competitionId',
			templateUrl: 'modules/competitions/views/view-competition.client.view.html'
		}).
		state('editCompetition', {
			url: '/competitions/:competitionId/edit',
			templateUrl: 'modules/competitions/views/edit-competition.client.view.html'
		});
	}
]);

'use strict';

// Competitions controller
angular.module('competitions').controller('CompetitionsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Competitions','Comments','Likes',
	function($scope, $stateParams, $location, Authentication, Competitions,Comments,Likes) {
		$scope.authentication = Authentication;
		$scope.likeCount = 0;


		console.log($scope.authentication);

		// Create new Competition
		$scope.create = function() {
			// Create new Competition object
			console.log(this);
			var competition = new Competitions ({
				name: this.name,
				description : this.description,
				phoneNum : this.phoneNum,
				address : this.address,
				country : this.country,
				teamUrl : this.teamUrl,
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
			$scope.competitions = Competitions.query();
		};

		// Find existing Competition
		$scope.findOne = function() {
			$scope.competition = Competitions.get({
				competitionId: $stateParams.competitionId
			});

			$scope.comments = Comments.query({
				competitionId: $stateParams.competitionId
			});

			$scope.likes = Likes.query({
				competitionId: $stateParams.competitionId
			},function(){
				$scope.likeCount = getLikeCount($scope.likes);
				console.log($scope.likeCount);
			});



		};

		$scope.backToList = function(){
			window.history.back();
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
					});
				});


			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});


		}

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

'use strict';

angular.module('competitions').factory('Comments', [
	function() {
		// Comments service logic
		// ...

		// Public API
		return {
			someMethod: function() {
				return true;
			}
		};
	}
]);
'use strict';

//Competitions service used to communicate Competitions REST endpoints
angular.module('competitions').factory('Competitions', ['$resource',
	function($resource) {
		return $resource('competitions/:competitionId', { competitionId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);


angular.module('competitions').factory('Comments', ['$resource',
	function($resource) {
		return $resource('comments/:commentId', { commentId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);

angular.module('competitions').factory('Likes', ['$resource',
	function($resource) {
		return $resource('likes/:likeId', { likeId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);

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
	}
]);
'use strict';

angular.module('core').controller('HeaderController', ['$scope', 'Authentication', 'Menus',
	function($scope, Authentication, Menus) {
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
	}
]);
'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
	}
]);
'use strict';

//Menu service used for managing  menus
angular.module('core').service('Menus', [

	function() {
		// Define a set of default roles
		this.defaultRoles = ['*'];

		// Define the menus object
		this.menus = {};

		// A private function for rendering decision 
		var shouldRender = function(user) {
			if (user) {
				if (!!~this.roles.indexOf('*')) {
					return true;
				} else {
					for (var userRoleIndex in user.roles) {
						for (var roleIndex in this.roles) {
							if (this.roles[roleIndex] === user.roles[userRoleIndex]) {
								return true;
							}
						}
					}
				}
			} else {
				return this.isPublic;
			}

			return false;
		};

		// Validate menu existance
		this.validateMenuExistance = function(menuId) {
			if (menuId && menuId.length) {
				if (this.menus[menuId]) {
					return true;
				} else {
					throw new Error('Menu does not exists');
				}
			} else {
				throw new Error('MenuId was not provided');
			}

			return false;
		};

		// Get the menu object by menu id
		this.getMenu = function(menuId) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Return the menu object
			return this.menus[menuId];
		};

		// Add new menu object by menu id
		this.addMenu = function(menuId, isPublic, roles) {
			// Create the new menu
			this.menus[menuId] = {
				isPublic: isPublic || false,
				roles: roles || this.defaultRoles,
				items: [],
				shouldRender: shouldRender
			};

			// Return the menu object
			return this.menus[menuId];
		};

		// Remove existing menu object by menu id
		this.removeMenu = function(menuId) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Return the menu object
			delete this.menus[menuId];
		};

		// Add menu item object
		this.addMenuItem = function(menuId, menuItemTitle, menuItemURL, menuItemType, menuItemUIRoute, isPublic, roles, position) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Push new menu item
			this.menus[menuId].items.push({
				title: menuItemTitle,
				link: menuItemURL,
				menuItemType: menuItemType || 'item',
				menuItemClass: menuItemType,
				uiRoute: menuItemUIRoute || ('/' + menuItemURL),
				isPublic: ((isPublic === null || typeof isPublic === 'undefined') ? this.menus[menuId].isPublic : isPublic),
				roles: ((roles === null || typeof roles === 'undefined') ? this.menus[menuId].roles : roles),
				position: position || 0,
				items: [],
				shouldRender: shouldRender
			});

			// Return the menu object
			return this.menus[menuId];
		};

		// Add submenu item object
		this.addSubMenuItem = function(menuId, rootMenuItemURL, menuItemTitle, menuItemURL, menuItemUIRoute, isPublic, roles, position) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Search for menu item
			for (var itemIndex in this.menus[menuId].items) {
				if (this.menus[menuId].items[itemIndex].link === rootMenuItemURL) {
					// Push new submenu item
					this.menus[menuId].items[itemIndex].items.push({
						title: menuItemTitle,
						link: menuItemURL,
						uiRoute: menuItemUIRoute || ('/' + menuItemURL),
						isPublic: ((isPublic === null || typeof isPublic === 'undefined') ? this.menus[menuId].items[itemIndex].isPublic : isPublic),
						roles: ((roles === null || typeof roles === 'undefined') ? this.menus[menuId].items[itemIndex].roles : roles),
						position: position || 0,
						shouldRender: shouldRender
					});
				}
			}

			// Return the menu object
			return this.menus[menuId];
		};

		// Remove existing menu object by menu id
		this.removeMenuItem = function(menuId, menuItemURL) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Search for menu item to remove
			for (var itemIndex in this.menus[menuId].items) {
				if (this.menus[menuId].items[itemIndex].link === menuItemURL) {
					this.menus[menuId].items.splice(itemIndex, 1);
				}
			}

			// Return the menu object
			return this.menus[menuId];
		};

		// Remove existing menu object by menu id
		this.removeSubMenuItem = function(menuId, submenuItemURL) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Search for menu item to remove
			for (var itemIndex in this.menus[menuId].items) {
				for (var subitemIndex in this.menus[menuId].items[itemIndex].items) {
					if (this.menus[menuId].items[itemIndex].items[subitemIndex].link === submenuItemURL) {
						this.menus[menuId].items[itemIndex].items.splice(subitemIndex, 1);
					}
				}
			}

			// Return the menu object
			return this.menus[menuId];
		};

		//Adding the topbar menu
		this.addMenu('topbar');
	}
]);
'use strict';

// Configuring the Articles module
angular.module('faqs').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'FAQ', 'faqs', 'dropdown', '/faqs(/create)?');
		Menus.addSubMenuItem('topbar', 'faqs', 'List Faqs', 'faqs');
		Menus.addSubMenuItem('topbar', 'faqs', 'New Faq', 'faqs/create');
	}
]);
'use strict';

//Setting up route
angular.module('faqs').config(['$stateProvider',
	function($stateProvider) {
		// Faqs state routing
		$stateProvider.
		state('listFaqs', {
			url: '/faqs',
			templateUrl: 'modules/faqs/views/list-faqs.client.view.html'
		}).
		state('createFaq', {
			url: '/faqs/create',
			templateUrl: 'modules/faqs/views/create-faq.client.view.html'
		}).
		state('viewFaq', {
			url: '/faqs/:faqId',
			templateUrl: 'modules/faqs/views/view-faq.client.view.html'
		}).
		state('editFaq', {
			url: '/faqs/:faqId/edit',
			templateUrl: 'modules/faqs/views/edit-faq.client.view.html'
		});
	}
]);
'use strict';

// Faqs controller
angular.module('faqs').controller('FaqsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Faqs',
	function($scope, $stateParams, $location, Authentication, Faqs) {
		$scope.authentication = Authentication;

		// Create new Faq
		$scope.create = function() {
			// Create new Faq object
			var faq = new Faqs ({
				name: this.name
			});

			// Redirect after save
			faq.$save(function(response) {
				$location.path('faqs/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Faq
		$scope.remove = function(faq) {
			if ( faq ) { 
				faq.$remove();

				for (var i in $scope.faqs) {
					if ($scope.faqs [i] === faq) {
						$scope.faqs.splice(i, 1);
					}
				}
			} else {
				$scope.faq.$remove(function() {
					$location.path('faqs');
				});
			}
		};

		// Update existing Faq
		$scope.update = function() {
			var faq = $scope.faq;

			faq.$update(function() {
				$location.path('faqs/' + faq._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Faqs
		$scope.find = function() {
			$scope.faqs = Faqs.query();
		};

		// Find existing Faq
		$scope.findOne = function() {
			$scope.faq = Faqs.get({ 
				faqId: $stateParams.faqId
			});
		};
	}
]);
'use strict';

//Faqs service used to communicate Faqs REST endpoints
angular.module('faqs').factory('Faqs', ['$resource',
	function($resource) {
		return $resource('faqs/:faqId', { faqId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
'use strict';

// Configuring the Articles module
angular.module('introduces').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'UNI MUSIC RACE', 'introduces', '/introduces(/create)?');
		// Menus.addSubMenuItem('topbar', '진행일정', '진행일정', 'introduces');
		// Menus.addSubMenuItem('topbar', '모집요강', '모집요강', 'introduces/create');
		// Menus.addSubMenuItem('topbar', '우승자 혜택', '우승자 혜택', 'introduces/create');
		// Menus.addSubMenuItem('topbar', '심사위원', '심사위원', 'introduces/create');
		// Menus.addSubMenuItem('topbar', '문의', '문의', 'introduces/create');
	}
]);
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
'use strict';

// Introduces controller
angular.module('introduces').controller('IntroducesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Introduces',
	function($scope, $stateParams, $location, Authentication, Introduces) {
		$scope.authentication = Authentication;

		// Create new Introduce
		$scope.create = function() {
			// Create new Introduce object
			var introduce = new Introduces ({
				name: this.name
			});

			// Redirect after save
			introduce.$save(function(response) {
				$location.path('introduces/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Introduce
		$scope.remove = function(introduce) {
			if ( introduce ) { 
				introduce.$remove();

				for (var i in $scope.introduces) {
					if ($scope.introduces [i] === introduce) {
						$scope.introduces.splice(i, 1);
					}
				}
			} else {
				$scope.introduce.$remove(function() {
					$location.path('introduces');
				});
			}
		};

		// Update existing Introduce
		$scope.update = function() {
			var introduce = $scope.introduce;

			introduce.$update(function() {
				$location.path('introduces/' + introduce._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Introduces
		$scope.find = function() {
			$scope.introduces = Introduces.query();
		};

		// Find existing Introduce
		$scope.findOne = function() {
			$scope.introduce = Introduces.get({ 
				introduceId: $stateParams.introduceId
			});
		};
	}
]);
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
'use strict';

// Configuring the Articles module
angular.module('mypages').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Mypages', 'mypages', 'dropdown', '/mypages(/create)?');
		Menus.addSubMenuItem('topbar', 'mypages', 'List Mypages', 'mypages');
		Menus.addSubMenuItem('topbar', 'mypages', 'New Mypage', 'mypages/create');
	}
]);
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
'use strict';

// Mypages controller
angular.module('mypages').controller('MypagesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Mypages',
	function($scope, $stateParams, $location, Authentication, Mypages) {
		$scope.authentication = Authentication;

		// Create new Mypage
		$scope.create = function() {
			// Create new Mypage object
			var mypage = new Mypages ({
				name: this.name
			});

			// Redirect after save
			mypage.$save(function(response) {
				$location.path('mypages/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Mypage
		$scope.remove = function(mypage) {
			if ( mypage ) { 
				mypage.$remove();

				for (var i in $scope.mypages) {
					if ($scope.mypages [i] === mypage) {
						$scope.mypages.splice(i, 1);
					}
				}
			} else {
				$scope.mypage.$remove(function() {
					$location.path('mypages');
				});
			}
		};

		// Update existing Mypage
		$scope.update = function() {
			var mypage = $scope.mypage;

			mypage.$update(function() {
				$location.path('mypages/' + mypage._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Mypages
		$scope.find = function() {
			$scope.mypages = Mypages.query();
		};

		// Find existing Mypage
		$scope.findOne = function() {
			$scope.mypage = Mypages.get({ 
				mypageId: $stateParams.mypageId
			});
		};
	}
]);
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
'use strict';

// Configuring the Articles module
angular.module('news').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'News', 'news', 'dropdown', '/news(/create)?');
		Menus.addSubMenuItem('topbar', 'news', 'List News', 'news');
		Menus.addSubMenuItem('topbar', 'news', 'New News', 'news/create');
	}
]);
'use strict';

//Setting up route
angular.module('news').config(['$stateProvider',
	function($stateProvider) {
		// News state routing
		$stateProvider.
		state('listNews', {
			url: '/news',
			templateUrl: 'modules/news/views/list-news.client.view.html'
		}).
		state('createNews', {
			url: '/news/create',
			templateUrl: 'modules/news/views/create-news.client.view.html'
		}).
		state('viewNews', {
			url: '/news/:newsId',
			templateUrl: 'modules/news/views/view-news.client.view.html'
		}).
		state('editNews', {
			url: '/news/:newsId/edit',
			templateUrl: 'modules/news/views/edit-news.client.view.html'
		});
	}
]);
'use strict';

// News controller
angular.module('news').controller('NewsController', ['$scope', '$stateParams', '$location', 'Authentication', 'News',
	function($scope, $stateParams, $location, Authentication, News) {
		$scope.authentication = Authentication;

		// Create new News
		$scope.create = function() {
			// Create new News object
			var news = new News ({
				name: this.name,
				content : this.content
			});

			// Redirect after save
			news.$save(function(response) {
				$location.path('news/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing News
		$scope.remove = function(news) {
			if ( news ) { 
				news.$remove();

				for (var i in $scope.news) {
					if ($scope.news [i] === news) {
						$scope.news.splice(i, 1);
					}
				}
			} else {
				$scope.news.$remove(function() {
					$location.path('news');
				});
			}
		};

		// Update existing News
		$scope.update = function() {
			var news = $scope.news;

			news.$update(function() {
				$location.path('news/' + news._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of News
		$scope.find = function() {
			$scope.news = News.query();
		};

		// Find existing News
		$scope.findOne = function() {
			$scope.news = News.get({ 
				newsId: $stateParams.newsId
			});
		};
	}
]);

'use strict';

//News service used to communicate News REST endpoints
angular.module('news').factory('News', ['$resource',
	function($resource) {
		return $resource('news/:newsId', { newsId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
'use strict';

// Configuring the Articles module
angular.module('resultsannounces').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', '결과발표', 'resultsannounces', 'dropdown', '/resultsannounces(/create)?');
		Menus.addSubMenuItem('topbar', 'resultsannounces', 'List Resultsannounces', 'resultsannounces');
		Menus.addSubMenuItem('topbar', 'resultsannounces', 'New Resultsannounce', 'resultsannounces/create');
	}
]);
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
'use strict';

// Resultsannounces controller
angular.module('resultsannounces').controller('ResultsannouncesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Resultsannounces',
	function($scope, $stateParams, $location, Authentication, Resultsannounces) {
		$scope.authentication = Authentication;

		// Create new Resultsannounce
		$scope.create = function() {
			// Create new Resultsannounce object
			var resultsannounce = new Resultsannounces ({
				name: this.name
			});

			// Redirect after save
			resultsannounce.$save(function(response) {
				$location.path('resultsannounces/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Resultsannounce
		$scope.remove = function(resultsannounce) {
			if ( resultsannounce ) { 
				resultsannounce.$remove();

				for (var i in $scope.resultsannounces) {
					if ($scope.resultsannounces [i] === resultsannounce) {
						$scope.resultsannounces.splice(i, 1);
					}
				}
			} else {
				$scope.resultsannounce.$remove(function() {
					$location.path('resultsannounces');
				});
			}
		};

		// Update existing Resultsannounce
		$scope.update = function() {
			var resultsannounce = $scope.resultsannounce;

			resultsannounce.$update(function() {
				$location.path('resultsannounces/' + resultsannounce._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Resultsannounces
		$scope.find = function() {
			$scope.resultsannounces = Resultsannounces.query();
		};

		// Find existing Resultsannounce
		$scope.findOne = function() {
			$scope.resultsannounce = Resultsannounces.get({ 
				resultsannounceId: $stateParams.resultsannounceId
			});
		};
	}
]);
'use strict';

//Resultsannounces service used to communicate Resultsannounces REST endpoints
angular.module('resultsannounces').factory('Resultsannounces', ['$resource',
	function($resource) {
		return $resource('resultsannounces/:resultsannounceId', { resultsannounceId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
'use strict';

// Config HTTP Error Handling
angular.module('users').config(['$httpProvider',
	function($httpProvider) {
		// Set the httpProvider "not authorized" interceptor
		$httpProvider.interceptors.push(['$q', '$location', 'Authentication',
			function($q, $location, Authentication) {
				return {
					responseError: function(rejection) {
						switch (rejection.status) {
							case 401:
								// Deauthenticate the global user
								Authentication.user = null;

								// Redirect to signin page
								$location.path('signin');
								break;
							case 403:
								// Add unauthorized behaviour 
								break;
						}

						return $q.reject(rejection);
					}
				};
			}
		]);
	}
]);
'use strict';

// Setting up route
angular.module('users').config(['$stateProvider',
	function($stateProvider) {
		// Users state routing
		$stateProvider.
		state('profile', {
			url: '/settings/profile',
			templateUrl: 'modules/users/views/settings/edit-profile.client.view.html'
		}).
		state('password', {
			url: '/settings/password',
			templateUrl: 'modules/users/views/settings/change-password.client.view.html'
		}).
		state('accounts', {
			url: '/settings/accounts',
			templateUrl: 'modules/users/views/settings/social-accounts.client.view.html'
		}).
		state('signup', {
			url: '/signup',
			templateUrl: 'modules/users/views/authentication/signup.client.view.html'
		}).
		state('signin', {
			url: '/signin',
			templateUrl: 'modules/users/views/authentication/signin.client.view.html'
		}).
		state('forgot', {
			url: '/password/forgot',
			templateUrl: 'modules/users/views/password/forgot-password.client.view.html'
		}).
		state('reset-invalid', {
			url: '/password/reset/invalid',
			templateUrl: 'modules/users/views/password/reset-password-invalid.client.view.html'
		}).
		state('reset-success', {
			url: '/password/reset/success',
			templateUrl: 'modules/users/views/password/reset-password-success.client.view.html'
		}).
		state('reset', {
			url: '/password/reset/:token',
			templateUrl: 'modules/users/views/password/reset-password.client.view.html'
		});
	}
]);
'use strict';

angular.module('users').controller('AuthenticationController', ['$scope', '$http', '$location', 'Authentication',
	function($scope, $http, $location, Authentication) {
		$scope.authentication = Authentication;

		// If user is signed in then redirect back home
		if ($scope.authentication.user) $location.path('/');

		$scope.signup = function() {
			$http.post('/auth/signup', $scope.credentials).success(function(response) {
				// If successful we assign the response to the global user model
				$scope.authentication.user = response;

				// And redirect to the index page
				$location.path('/');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};

		$scope.signin = function() {
			$http.post('/auth/signin', $scope.credentials).success(function(response) {
				// If successful we assign the response to the global user model
				$scope.authentication.user = response;

				// And redirect to the index page
				$location.path('/');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);
'use strict';

angular.module('users').controller('PasswordController', ['$scope', '$stateParams', '$http', '$location', 'Authentication',
	function($scope, $stateParams, $http, $location, Authentication) {
		$scope.authentication = Authentication;

		//If user is signed in then redirect back home
		if ($scope.authentication.user) $location.path('/');

		// Submit forgotten password account id
		$scope.askForPasswordReset = function() {
			$scope.success = $scope.error = null;

			$http.post('/auth/forgot', $scope.credentials).success(function(response) {
				// Show user success message and clear form
				$scope.credentials = null;
				$scope.success = response.message;

			}).error(function(response) {
				// Show user error message and clear form
				$scope.credentials = null;
				$scope.error = response.message;
			});
		};

		// Change user password
		$scope.resetUserPassword = function() {
			$scope.success = $scope.error = null;

			$http.post('/auth/reset/' + $stateParams.token, $scope.passwordDetails).success(function(response) {
				// If successful show success message and clear form
				$scope.passwordDetails = null;

				// Attach user profile
				Authentication.user = response;

				// And redirect to the index page
				$location.path('/password/reset/success');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);
'use strict';

angular.module('users').controller('SettingsController', ['$scope', '$http', '$location', 'Users', 'Authentication',
	function($scope, $http, $location, Users, Authentication) {
		$scope.user = Authentication.user;

		// If user is not signed in then redirect back home
		if (!$scope.user) $location.path('/');

		// Check if there are additional accounts 
		$scope.hasConnectedAdditionalSocialAccounts = function(provider) {
			for (var i in $scope.user.additionalProvidersData) {
				return true;
			}

			return false;
		};

		// Check if provider is already in use with current user
		$scope.isConnectedSocialAccount = function(provider) {
			return $scope.user.provider === provider || ($scope.user.additionalProvidersData && $scope.user.additionalProvidersData[provider]);
		};

		// Remove a user social account
		$scope.removeUserSocialAccount = function(provider) {
			$scope.success = $scope.error = null;

			$http.delete('/users/accounts', {
				params: {
					provider: provider
				}
			}).success(function(response) {
				// If successful show success message and clear form
				$scope.success = true;
				$scope.user = Authentication.user = response;
			}).error(function(response) {
				$scope.error = response.message;
			});
		};

		// Update a user profile
		$scope.updateUserProfile = function(isValid) {
			if (isValid) {
				$scope.success = $scope.error = null;
				var user = new Users($scope.user);

				user.$update(function(response) {
					$scope.success = true;
					Authentication.user = response;
				}, function(response) {
					$scope.error = response.data.message;
				});
			} else {
				$scope.submitted = true;
			}
		};

		// Change user password
		$scope.changeUserPassword = function() {
			$scope.success = $scope.error = null;

			$http.post('/users/password', $scope.passwordDetails).success(function(response) {
				// If successful show success message and clear form
				$scope.success = true;
				$scope.passwordDetails = null;
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);
'use strict';

// Authentication service for user variables
angular.module('users').factory('Authentication', [
	function() {
		var _this = this;

		_this._data = {
			user: window.user
		};

		return _this._data;
	}
]);
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
'use strict';

//Setting up route
angular.module('votes').config(['$stateProvider',
	function($stateProvider) {
		// Votes state routing
		$stateProvider.
		state('listVotes', {
			url: '/votes',
			templateUrl: 'modules/votes/views/list-votes.client.view.html'
		}).
		state('createVote', {
			url: '/votes/create',
			templateUrl: 'modules/votes/views/create-vote.client.view.html'
		}).
		state('viewVote', {
			url: '/votes/:voteId',
			templateUrl: 'modules/votes/views/view-vote.client.view.html'
		}).
		state('editVote', {
			url: '/votes/:voteId/edit',
			templateUrl: 'modules/votes/views/edit-vote.client.view.html'
		});
	}
]);
'use strict';

// Votes controller
angular.module('votes').controller('VotesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Votes',
	function($scope, $stateParams, $location, Authentication, Votes) {
		$scope.authentication = Authentication;

		// Create new Vote
		$scope.create = function() {
			// Create new Vote object
			var vote = new Votes ({
				name: this.name
			});

			// Redirect after save
			vote.$save(function(response) {
				$location.path('votes/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Vote
		$scope.remove = function(vote) {
			if ( vote ) { 
				vote.$remove();

				for (var i in $scope.votes) {
					if ($scope.votes [i] === vote) {
						$scope.votes.splice(i, 1);
					}
				}
			} else {
				$scope.vote.$remove(function() {
					$location.path('votes');
				});
			}
		};

		// Update existing Vote
		$scope.update = function() {
			var vote = $scope.vote;

			vote.$update(function() {
				$location.path('votes/' + vote._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Votes
		$scope.find = function() {
			$scope.votes = Votes.query();
		};

		// Find existing Vote
		$scope.findOne = function() {
			$scope.vote = Votes.get({ 
				voteId: $stateParams.voteId
			});
		};
	}
]);
'use strict';

//Votes service used to communicate Votes REST endpoints
angular.module('votes').factory('Votes', ['$resource',
	function($resource) {
		return $resource('votes/:voteId', { voteId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('competitions',['youtube-embed','ngFileUpload']);

'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('core');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('faqs');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('introduces');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('mypages');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('news');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('resultsannounces');
'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('users');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('votes');
'use strict';

// Configuring the Articles module
angular.module('competitions').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', '경연대회', 'competitions', 'dropdown', '/competitions(/create)?');
		Menus.addSubMenuItem('topbar', 'competitions', 'List Competitions', 'competitions');
		Menus.addSubMenuItem('topbar', 'competitions', 'New Competition', 'competitions/create');
	}
]);

'use strict';

//Setting up route
angular.module('competitions').config(['$stateProvider',
	function($stateProvider) {
		// Competitions state routing
		$stateProvider.
		state('listCompetitions', {
			url: '/competitions',
			templateUrl: 'modules/competitions/views/list-competitions.client.view.html'
		}).
		state('createCompetition', {
			url: '/competitions/create',
			templateUrl: 'modules/competitions/views/create-competition.client.view.html'
		}).
		state('viewCompetition', {
			url: '/competitions/:competitionId',
			templateUrl: 'modules/competitions/views/view-competition.client.view.html'
		}).
		state('editCompetition', {
			url: '/competitions/:competitionId/edit',
			templateUrl: 'modules/competitions/views/edit-competition.client.view.html'
		});
	}
]);

'use strict';

// Competitions controller
angular.module('competitions').controller('CompetitionsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Competitions','Comments','Likes',
	function($scope, $stateParams, $location, Authentication, Competitions,Comments,Likes) {
		$scope.authentication = Authentication;
		$scope.likeCount = 0;


		console.log($scope.authentication);

		// Create new Competition
		$scope.create = function() {
			// Create new Competition object
			console.log(this);
			var competition = new Competitions ({
				name: this.name,
				description : this.description,
				phoneNum : this.phoneNum,
				address : this.address,
				country : this.country,
				teamUrl : this.teamUrl,
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
			$scope.competitions = Competitions.query();
		};

		// Find existing Competition
		$scope.findOne = function() {
			$scope.competition = Competitions.get({
				competitionId: $stateParams.competitionId
			});

			$scope.comments = Comments.query({
				competitionId: $stateParams.competitionId
			});

			$scope.likes = Likes.query({
				competitionId: $stateParams.competitionId
			},function(){
				$scope.likeCount = getLikeCount($scope.likes);
				console.log($scope.likeCount);
			});



		};

		$scope.backToList = function(){
			window.history.back();
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
					});
				});


			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});


		}

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

'use strict';

angular.module('competitions').factory('Comments', [
	function() {
		// Comments service logic
		// ...

		// Public API
		return {
			someMethod: function() {
				return true;
			}
		};
	}
]);
'use strict';

//Competitions service used to communicate Competitions REST endpoints
angular.module('competitions').factory('Competitions', ['$resource',
	function($resource) {
		return $resource('competitions/:competitionId', { competitionId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);


angular.module('competitions').factory('Comments', ['$resource',
	function($resource) {
		return $resource('comments/:commentId', { commentId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);

angular.module('competitions').factory('Likes', ['$resource',
	function($resource) {
		return $resource('likes/:likeId', { likeId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);

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
	}
]);
'use strict';

angular.module('core').controller('HeaderController', ['$scope', 'Authentication', 'Menus',
	function($scope, Authentication, Menus) {
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
	}
]);
'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
	}
]);
'use strict';

//Menu service used for managing  menus
angular.module('core').service('Menus', [

	function() {
		// Define a set of default roles
		this.defaultRoles = ['*'];

		// Define the menus object
		this.menus = {};

		// A private function for rendering decision 
		var shouldRender = function(user) {
			if (user) {
				if (!!~this.roles.indexOf('*')) {
					return true;
				} else {
					for (var userRoleIndex in user.roles) {
						for (var roleIndex in this.roles) {
							if (this.roles[roleIndex] === user.roles[userRoleIndex]) {
								return true;
							}
						}
					}
				}
			} else {
				return this.isPublic;
			}

			return false;
		};

		// Validate menu existance
		this.validateMenuExistance = function(menuId) {
			if (menuId && menuId.length) {
				if (this.menus[menuId]) {
					return true;
				} else {
					throw new Error('Menu does not exists');
				}
			} else {
				throw new Error('MenuId was not provided');
			}

			return false;
		};

		// Get the menu object by menu id
		this.getMenu = function(menuId) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Return the menu object
			return this.menus[menuId];
		};

		// Add new menu object by menu id
		this.addMenu = function(menuId, isPublic, roles) {
			// Create the new menu
			this.menus[menuId] = {
				isPublic: isPublic || false,
				roles: roles || this.defaultRoles,
				items: [],
				shouldRender: shouldRender
			};

			// Return the menu object
			return this.menus[menuId];
		};

		// Remove existing menu object by menu id
		this.removeMenu = function(menuId) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Return the menu object
			delete this.menus[menuId];
		};

		// Add menu item object
		this.addMenuItem = function(menuId, menuItemTitle, menuItemURL, menuItemType, menuItemUIRoute, isPublic, roles, position) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Push new menu item
			this.menus[menuId].items.push({
				title: menuItemTitle,
				link: menuItemURL,
				menuItemType: menuItemType || 'item',
				menuItemClass: menuItemType,
				uiRoute: menuItemUIRoute || ('/' + menuItemURL),
				isPublic: ((isPublic === null || typeof isPublic === 'undefined') ? this.menus[menuId].isPublic : isPublic),
				roles: ((roles === null || typeof roles === 'undefined') ? this.menus[menuId].roles : roles),
				position: position || 0,
				items: [],
				shouldRender: shouldRender
			});

			// Return the menu object
			return this.menus[menuId];
		};

		// Add submenu item object
		this.addSubMenuItem = function(menuId, rootMenuItemURL, menuItemTitle, menuItemURL, menuItemUIRoute, isPublic, roles, position) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Search for menu item
			for (var itemIndex in this.menus[menuId].items) {
				if (this.menus[menuId].items[itemIndex].link === rootMenuItemURL) {
					// Push new submenu item
					this.menus[menuId].items[itemIndex].items.push({
						title: menuItemTitle,
						link: menuItemURL,
						uiRoute: menuItemUIRoute || ('/' + menuItemURL),
						isPublic: ((isPublic === null || typeof isPublic === 'undefined') ? this.menus[menuId].items[itemIndex].isPublic : isPublic),
						roles: ((roles === null || typeof roles === 'undefined') ? this.menus[menuId].items[itemIndex].roles : roles),
						position: position || 0,
						shouldRender: shouldRender
					});
				}
			}

			// Return the menu object
			return this.menus[menuId];
		};

		// Remove existing menu object by menu id
		this.removeMenuItem = function(menuId, menuItemURL) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Search for menu item to remove
			for (var itemIndex in this.menus[menuId].items) {
				if (this.menus[menuId].items[itemIndex].link === menuItemURL) {
					this.menus[menuId].items.splice(itemIndex, 1);
				}
			}

			// Return the menu object
			return this.menus[menuId];
		};

		// Remove existing menu object by menu id
		this.removeSubMenuItem = function(menuId, submenuItemURL) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Search for menu item to remove
			for (var itemIndex in this.menus[menuId].items) {
				for (var subitemIndex in this.menus[menuId].items[itemIndex].items) {
					if (this.menus[menuId].items[itemIndex].items[subitemIndex].link === submenuItemURL) {
						this.menus[menuId].items[itemIndex].items.splice(subitemIndex, 1);
					}
				}
			}

			// Return the menu object
			return this.menus[menuId];
		};

		//Adding the topbar menu
		this.addMenu('topbar');
	}
]);
'use strict';

// Configuring the Articles module
angular.module('faqs').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'FAQ', 'faqs', 'dropdown', '/faqs(/create)?');
		Menus.addSubMenuItem('topbar', 'faqs', 'List Faqs', 'faqs');
		Menus.addSubMenuItem('topbar', 'faqs', 'New Faq', 'faqs/create');
	}
]);
'use strict';

//Setting up route
angular.module('faqs').config(['$stateProvider',
	function($stateProvider) {
		// Faqs state routing
		$stateProvider.
		state('listFaqs', {
			url: '/faqs',
			templateUrl: 'modules/faqs/views/list-faqs.client.view.html'
		}).
		state('createFaq', {
			url: '/faqs/create',
			templateUrl: 'modules/faqs/views/create-faq.client.view.html'
		}).
		state('viewFaq', {
			url: '/faqs/:faqId',
			templateUrl: 'modules/faqs/views/view-faq.client.view.html'
		}).
		state('editFaq', {
			url: '/faqs/:faqId/edit',
			templateUrl: 'modules/faqs/views/edit-faq.client.view.html'
		});
	}
]);
'use strict';

// Faqs controller
angular.module('faqs').controller('FaqsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Faqs',
	function($scope, $stateParams, $location, Authentication, Faqs) {
		$scope.authentication = Authentication;

		// Create new Faq
		$scope.create = function() {
			// Create new Faq object
			var faq = new Faqs ({
				name: this.name
			});

			// Redirect after save
			faq.$save(function(response) {
				$location.path('faqs/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Faq
		$scope.remove = function(faq) {
			if ( faq ) { 
				faq.$remove();

				for (var i in $scope.faqs) {
					if ($scope.faqs [i] === faq) {
						$scope.faqs.splice(i, 1);
					}
				}
			} else {
				$scope.faq.$remove(function() {
					$location.path('faqs');
				});
			}
		};

		// Update existing Faq
		$scope.update = function() {
			var faq = $scope.faq;

			faq.$update(function() {
				$location.path('faqs/' + faq._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Faqs
		$scope.find = function() {
			$scope.faqs = Faqs.query();
		};

		// Find existing Faq
		$scope.findOne = function() {
			$scope.faq = Faqs.get({ 
				faqId: $stateParams.faqId
			});
		};
	}
]);
'use strict';

//Faqs service used to communicate Faqs REST endpoints
angular.module('faqs').factory('Faqs', ['$resource',
	function($resource) {
		return $resource('faqs/:faqId', { faqId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
'use strict';

// Configuring the Articles module
angular.module('introduces').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'UNI MUSIC RACE', 'introduces', '/introduces(/create)?');
		// Menus.addSubMenuItem('topbar', '진행일정', '진행일정', 'introduces');
		// Menus.addSubMenuItem('topbar', '모집요강', '모집요강', 'introduces/create');
		// Menus.addSubMenuItem('topbar', '우승자 혜택', '우승자 혜택', 'introduces/create');
		// Menus.addSubMenuItem('topbar', '심사위원', '심사위원', 'introduces/create');
		// Menus.addSubMenuItem('topbar', '문의', '문의', 'introduces/create');
	}
]);
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
'use strict';

// Introduces controller
angular.module('introduces').controller('IntroducesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Introduces',
	function($scope, $stateParams, $location, Authentication, Introduces) {
		$scope.authentication = Authentication;

		// Create new Introduce
		$scope.create = function() {
			// Create new Introduce object
			var introduce = new Introduces ({
				name: this.name
			});

			// Redirect after save
			introduce.$save(function(response) {
				$location.path('introduces/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Introduce
		$scope.remove = function(introduce) {
			if ( introduce ) { 
				introduce.$remove();

				for (var i in $scope.introduces) {
					if ($scope.introduces [i] === introduce) {
						$scope.introduces.splice(i, 1);
					}
				}
			} else {
				$scope.introduce.$remove(function() {
					$location.path('introduces');
				});
			}
		};

		// Update existing Introduce
		$scope.update = function() {
			var introduce = $scope.introduce;

			introduce.$update(function() {
				$location.path('introduces/' + introduce._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Introduces
		$scope.find = function() {
			$scope.introduces = Introduces.query();
		};

		// Find existing Introduce
		$scope.findOne = function() {
			$scope.introduce = Introduces.get({ 
				introduceId: $stateParams.introduceId
			});
		};
	}
]);
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
'use strict';

// Configuring the Articles module
angular.module('mypages').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Mypages', 'mypages', 'dropdown', '/mypages(/create)?');
		Menus.addSubMenuItem('topbar', 'mypages', 'List Mypages', 'mypages');
		Menus.addSubMenuItem('topbar', 'mypages', 'New Mypage', 'mypages/create');
	}
]);
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
'use strict';

// Mypages controller
angular.module('mypages').controller('MypagesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Mypages',
	function($scope, $stateParams, $location, Authentication, Mypages) {
		$scope.authentication = Authentication;

		// Create new Mypage
		$scope.create = function() {
			// Create new Mypage object
			var mypage = new Mypages ({
				name: this.name
			});

			// Redirect after save
			mypage.$save(function(response) {
				$location.path('mypages/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Mypage
		$scope.remove = function(mypage) {
			if ( mypage ) { 
				mypage.$remove();

				for (var i in $scope.mypages) {
					if ($scope.mypages [i] === mypage) {
						$scope.mypages.splice(i, 1);
					}
				}
			} else {
				$scope.mypage.$remove(function() {
					$location.path('mypages');
				});
			}
		};

		// Update existing Mypage
		$scope.update = function() {
			var mypage = $scope.mypage;

			mypage.$update(function() {
				$location.path('mypages/' + mypage._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Mypages
		$scope.find = function() {
			$scope.mypages = Mypages.query();
		};

		// Find existing Mypage
		$scope.findOne = function() {
			$scope.mypage = Mypages.get({ 
				mypageId: $stateParams.mypageId
			});
		};
	}
]);
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
'use strict';

// Configuring the Articles module
angular.module('news').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'News', 'news', 'dropdown', '/news(/create)?');
		Menus.addSubMenuItem('topbar', 'news', 'List News', 'news');
		Menus.addSubMenuItem('topbar', 'news', 'New News', 'news/create');
	}
]);
'use strict';

//Setting up route
angular.module('news').config(['$stateProvider',
	function($stateProvider) {
		// News state routing
		$stateProvider.
		state('listNews', {
			url: '/news',
			templateUrl: 'modules/news/views/list-news.client.view.html'
		}).
		state('createNews', {
			url: '/news/create',
			templateUrl: 'modules/news/views/create-news.client.view.html'
		}).
		state('viewNews', {
			url: '/news/:newsId',
			templateUrl: 'modules/news/views/view-news.client.view.html'
		}).
		state('editNews', {
			url: '/news/:newsId/edit',
			templateUrl: 'modules/news/views/edit-news.client.view.html'
		});
	}
]);
'use strict';

// News controller
angular.module('news').controller('NewsController', ['$scope', '$stateParams', '$location', 'Authentication', 'News',
	function($scope, $stateParams, $location, Authentication, News) {
		$scope.authentication = Authentication;

		// Create new News
		$scope.create = function() {
			// Create new News object
			var news = new News ({
				name: this.name,
				content : this.content
			});

			// Redirect after save
			news.$save(function(response) {
				$location.path('news/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing News
		$scope.remove = function(news) {
			if ( news ) { 
				news.$remove();

				for (var i in $scope.news) {
					if ($scope.news [i] === news) {
						$scope.news.splice(i, 1);
					}
				}
			} else {
				$scope.news.$remove(function() {
					$location.path('news');
				});
			}
		};

		// Update existing News
		$scope.update = function() {
			var news = $scope.news;

			news.$update(function() {
				$location.path('news/' + news._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of News
		$scope.find = function() {
			$scope.news = News.query();
		};

		// Find existing News
		$scope.findOne = function() {
			$scope.news = News.get({ 
				newsId: $stateParams.newsId
			});
		};
	}
]);

'use strict';

//News service used to communicate News REST endpoints
angular.module('news').factory('News', ['$resource',
	function($resource) {
		return $resource('news/:newsId', { newsId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
'use strict';

// Configuring the Articles module
angular.module('resultsannounces').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', '결과발표', 'resultsannounces', 'dropdown', '/resultsannounces(/create)?');
		Menus.addSubMenuItem('topbar', 'resultsannounces', 'List Resultsannounces', 'resultsannounces');
		Menus.addSubMenuItem('topbar', 'resultsannounces', 'New Resultsannounce', 'resultsannounces/create');
	}
]);
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
'use strict';

// Resultsannounces controller
angular.module('resultsannounces').controller('ResultsannouncesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Resultsannounces',
	function($scope, $stateParams, $location, Authentication, Resultsannounces) {
		$scope.authentication = Authentication;

		// Create new Resultsannounce
		$scope.create = function() {
			// Create new Resultsannounce object
			var resultsannounce = new Resultsannounces ({
				name: this.name
			});

			// Redirect after save
			resultsannounce.$save(function(response) {
				$location.path('resultsannounces/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Resultsannounce
		$scope.remove = function(resultsannounce) {
			if ( resultsannounce ) { 
				resultsannounce.$remove();

				for (var i in $scope.resultsannounces) {
					if ($scope.resultsannounces [i] === resultsannounce) {
						$scope.resultsannounces.splice(i, 1);
					}
				}
			} else {
				$scope.resultsannounce.$remove(function() {
					$location.path('resultsannounces');
				});
			}
		};

		// Update existing Resultsannounce
		$scope.update = function() {
			var resultsannounce = $scope.resultsannounce;

			resultsannounce.$update(function() {
				$location.path('resultsannounces/' + resultsannounce._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Resultsannounces
		$scope.find = function() {
			$scope.resultsannounces = Resultsannounces.query();
		};

		// Find existing Resultsannounce
		$scope.findOne = function() {
			$scope.resultsannounce = Resultsannounces.get({ 
				resultsannounceId: $stateParams.resultsannounceId
			});
		};
	}
]);
'use strict';

//Resultsannounces service used to communicate Resultsannounces REST endpoints
angular.module('resultsannounces').factory('Resultsannounces', ['$resource',
	function($resource) {
		return $resource('resultsannounces/:resultsannounceId', { resultsannounceId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
'use strict';

// Config HTTP Error Handling
angular.module('users').config(['$httpProvider',
	function($httpProvider) {
		// Set the httpProvider "not authorized" interceptor
		$httpProvider.interceptors.push(['$q', '$location', 'Authentication',
			function($q, $location, Authentication) {
				return {
					responseError: function(rejection) {
						switch (rejection.status) {
							case 401:
								// Deauthenticate the global user
								Authentication.user = null;

								// Redirect to signin page
								$location.path('signin');
								break;
							case 403:
								// Add unauthorized behaviour 
								break;
						}

						return $q.reject(rejection);
					}
				};
			}
		]);
	}
]);
'use strict';

// Setting up route
angular.module('users').config(['$stateProvider',
	function($stateProvider) {
		// Users state routing
		$stateProvider.
		state('profile', {
			url: '/settings/profile',
			templateUrl: 'modules/users/views/settings/edit-profile.client.view.html'
		}).
		state('password', {
			url: '/settings/password',
			templateUrl: 'modules/users/views/settings/change-password.client.view.html'
		}).
		state('accounts', {
			url: '/settings/accounts',
			templateUrl: 'modules/users/views/settings/social-accounts.client.view.html'
		}).
		state('signup', {
			url: '/signup',
			templateUrl: 'modules/users/views/authentication/signup.client.view.html'
		}).
		state('signin', {
			url: '/signin',
			templateUrl: 'modules/users/views/authentication/signin.client.view.html'
		}).
		state('forgot', {
			url: '/password/forgot',
			templateUrl: 'modules/users/views/password/forgot-password.client.view.html'
		}).
		state('reset-invalid', {
			url: '/password/reset/invalid',
			templateUrl: 'modules/users/views/password/reset-password-invalid.client.view.html'
		}).
		state('reset-success', {
			url: '/password/reset/success',
			templateUrl: 'modules/users/views/password/reset-password-success.client.view.html'
		}).
		state('reset', {
			url: '/password/reset/:token',
			templateUrl: 'modules/users/views/password/reset-password.client.view.html'
		});
	}
]);
'use strict';

angular.module('users').controller('AuthenticationController', ['$scope', '$http', '$location', 'Authentication',
	function($scope, $http, $location, Authentication) {
		$scope.authentication = Authentication;

		// If user is signed in then redirect back home
		if ($scope.authentication.user) $location.path('/');

		$scope.signup = function() {
			$http.post('/auth/signup', $scope.credentials).success(function(response) {
				// If successful we assign the response to the global user model
				$scope.authentication.user = response;

				// And redirect to the index page
				$location.path('/');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};

		$scope.signin = function() {
			$http.post('/auth/signin', $scope.credentials).success(function(response) {
				// If successful we assign the response to the global user model
				$scope.authentication.user = response;

				// And redirect to the index page
				$location.path('/');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);
'use strict';

angular.module('users').controller('PasswordController', ['$scope', '$stateParams', '$http', '$location', 'Authentication',
	function($scope, $stateParams, $http, $location, Authentication) {
		$scope.authentication = Authentication;

		//If user is signed in then redirect back home
		if ($scope.authentication.user) $location.path('/');

		// Submit forgotten password account id
		$scope.askForPasswordReset = function() {
			$scope.success = $scope.error = null;

			$http.post('/auth/forgot', $scope.credentials).success(function(response) {
				// Show user success message and clear form
				$scope.credentials = null;
				$scope.success = response.message;

			}).error(function(response) {
				// Show user error message and clear form
				$scope.credentials = null;
				$scope.error = response.message;
			});
		};

		// Change user password
		$scope.resetUserPassword = function() {
			$scope.success = $scope.error = null;

			$http.post('/auth/reset/' + $stateParams.token, $scope.passwordDetails).success(function(response) {
				// If successful show success message and clear form
				$scope.passwordDetails = null;

				// Attach user profile
				Authentication.user = response;

				// And redirect to the index page
				$location.path('/password/reset/success');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);
'use strict';

angular.module('users').controller('SettingsController', ['$scope', '$http', '$location', 'Users', 'Authentication',
	function($scope, $http, $location, Users, Authentication) {
		$scope.user = Authentication.user;

		// If user is not signed in then redirect back home
		if (!$scope.user) $location.path('/');

		// Check if there are additional accounts 
		$scope.hasConnectedAdditionalSocialAccounts = function(provider) {
			for (var i in $scope.user.additionalProvidersData) {
				return true;
			}

			return false;
		};

		// Check if provider is already in use with current user
		$scope.isConnectedSocialAccount = function(provider) {
			return $scope.user.provider === provider || ($scope.user.additionalProvidersData && $scope.user.additionalProvidersData[provider]);
		};

		// Remove a user social account
		$scope.removeUserSocialAccount = function(provider) {
			$scope.success = $scope.error = null;

			$http.delete('/users/accounts', {
				params: {
					provider: provider
				}
			}).success(function(response) {
				// If successful show success message and clear form
				$scope.success = true;
				$scope.user = Authentication.user = response;
			}).error(function(response) {
				$scope.error = response.message;
			});
		};

		// Update a user profile
		$scope.updateUserProfile = function(isValid) {
			if (isValid) {
				$scope.success = $scope.error = null;
				var user = new Users($scope.user);

				user.$update(function(response) {
					$scope.success = true;
					Authentication.user = response;
				}, function(response) {
					$scope.error = response.data.message;
				});
			} else {
				$scope.submitted = true;
			}
		};

		// Change user password
		$scope.changeUserPassword = function() {
			$scope.success = $scope.error = null;

			$http.post('/users/password', $scope.passwordDetails).success(function(response) {
				// If successful show success message and clear form
				$scope.success = true;
				$scope.passwordDetails = null;
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);
'use strict';

// Authentication service for user variables
angular.module('users').factory('Authentication', [
	function() {
		var _this = this;

		_this._data = {
			user: window.user
		};

		return _this._data;
	}
]);
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
'use strict';

//Setting up route
angular.module('votes').config(['$stateProvider',
	function($stateProvider) {
		// Votes state routing
		$stateProvider.
		state('listVotes', {
			url: '/votes',
			templateUrl: 'modules/votes/views/list-votes.client.view.html'
		}).
		state('createVote', {
			url: '/votes/create',
			templateUrl: 'modules/votes/views/create-vote.client.view.html'
		}).
		state('viewVote', {
			url: '/votes/:voteId',
			templateUrl: 'modules/votes/views/view-vote.client.view.html'
		}).
		state('editVote', {
			url: '/votes/:voteId/edit',
			templateUrl: 'modules/votes/views/edit-vote.client.view.html'
		});
	}
]);
'use strict';

// Votes controller
angular.module('votes').controller('VotesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Votes',
	function($scope, $stateParams, $location, Authentication, Votes) {
		$scope.authentication = Authentication;

		// Create new Vote
		$scope.create = function() {
			// Create new Vote object
			var vote = new Votes ({
				name: this.name
			});

			// Redirect after save
			vote.$save(function(response) {
				$location.path('votes/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Vote
		$scope.remove = function(vote) {
			if ( vote ) { 
				vote.$remove();

				for (var i in $scope.votes) {
					if ($scope.votes [i] === vote) {
						$scope.votes.splice(i, 1);
					}
				}
			} else {
				$scope.vote.$remove(function() {
					$location.path('votes');
				});
			}
		};

		// Update existing Vote
		$scope.update = function() {
			var vote = $scope.vote;

			vote.$update(function() {
				$location.path('votes/' + vote._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Votes
		$scope.find = function() {
			$scope.votes = Votes.query();
		};

		// Find existing Vote
		$scope.findOne = function() {
			$scope.vote = Votes.get({ 
				voteId: $stateParams.voteId
			});
		};
	}
]);
'use strict';

//Votes service used to communicate Votes REST endpoints
angular.module('votes').factory('Votes', ['$resource',
	function($resource) {
		return $resource('votes/:voteId', { voteId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('competitions',['youtube-embed','ngFileUpload']);

'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('core');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('faqs');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('introduces');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('mypages');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('news');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('resultsannounces');
'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('users');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('votes');
'use strict';

// Configuring the Articles module
angular.module('competitions').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', '경연대회', 'competitions', 'dropdown', '/competitions(/create)?');
		Menus.addSubMenuItem('topbar', 'competitions', 'List Competitions', 'competitions');
		Menus.addSubMenuItem('topbar', 'competitions', 'New Competition', 'competitions/create');
	}
]);

'use strict';

//Setting up route
angular.module('competitions').config(['$stateProvider',
	function($stateProvider) {
		// Competitions state routing
		$stateProvider.
		state('listCompetitions', {
			url: '/competitions',
			templateUrl: 'modules/competitions/views/list-competitions.client.view.html'
		}).
		state('createCompetition', {
			url: '/competitions/create',
			templateUrl: 'modules/competitions/views/create-competition.client.view.html'
		}).
		state('viewCompetition', {
			url: '/competitions/:competitionId',
			templateUrl: 'modules/competitions/views/view-competition.client.view.html'
		}).
		state('editCompetition', {
			url: '/competitions/:competitionId/edit',
			templateUrl: 'modules/competitions/views/edit-competition.client.view.html'
		});
	}
]);

'use strict';

// Competitions controller
angular.module('competitions').controller('CompetitionsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Competitions','Comments','Likes',
	function($scope, $stateParams, $location, Authentication, Competitions,Comments,Likes) {
		$scope.authentication = Authentication;
		$scope.likeCount = 0;


		console.log($scope.authentication);

		// Create new Competition
		$scope.create = function() {
			// Create new Competition object
			console.log(this);
			var competition = new Competitions ({
				name: this.name,
				description : this.description,
				phoneNum : this.phoneNum,
				address : this.address,
				country : this.country,
				teamUrl : this.teamUrl,
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
			$scope.competitions = Competitions.query();
		};

		// Find existing Competition
		$scope.findOne = function() {
			$scope.competition = Competitions.get({
				competitionId: $stateParams.competitionId
			});

			$scope.comments = Comments.query({
				competitionId: $stateParams.competitionId
			});

			$scope.likes = Likes.query({
				competitionId: $stateParams.competitionId
			},function(){
				$scope.likeCount = getLikeCount($scope.likes);
				console.log($scope.likeCount);
			});



		};

		$scope.backToList = function(){
			window.history.back();
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
					});
				});


			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});


		}

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

'use strict';

angular.module('competitions').factory('Comments', [
	function() {
		// Comments service logic
		// ...

		// Public API
		return {
			someMethod: function() {
				return true;
			}
		};
	}
]);
'use strict';

//Competitions service used to communicate Competitions REST endpoints
angular.module('competitions').factory('Competitions', ['$resource',
	function($resource) {
		return $resource('competitions/:competitionId', { competitionId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);


angular.module('competitions').factory('Comments', ['$resource',
	function($resource) {
		return $resource('comments/:commentId', { commentId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);

angular.module('competitions').factory('Likes', ['$resource',
	function($resource) {
		return $resource('likes/:likeId', { likeId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);

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
	}
]);
'use strict';

angular.module('core').controller('HeaderController', ['$scope', 'Authentication', 'Menus',
	function($scope, Authentication, Menus) {
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
	}
]);
'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
	}
]);
'use strict';

//Menu service used for managing  menus
angular.module('core').service('Menus', [

	function() {
		// Define a set of default roles
		this.defaultRoles = ['*'];

		// Define the menus object
		this.menus = {};

		// A private function for rendering decision 
		var shouldRender = function(user) {
			if (user) {
				if (!!~this.roles.indexOf('*')) {
					return true;
				} else {
					for (var userRoleIndex in user.roles) {
						for (var roleIndex in this.roles) {
							if (this.roles[roleIndex] === user.roles[userRoleIndex]) {
								return true;
							}
						}
					}
				}
			} else {
				return this.isPublic;
			}

			return false;
		};

		// Validate menu existance
		this.validateMenuExistance = function(menuId) {
			if (menuId && menuId.length) {
				if (this.menus[menuId]) {
					return true;
				} else {
					throw new Error('Menu does not exists');
				}
			} else {
				throw new Error('MenuId was not provided');
			}

			return false;
		};

		// Get the menu object by menu id
		this.getMenu = function(menuId) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Return the menu object
			return this.menus[menuId];
		};

		// Add new menu object by menu id
		this.addMenu = function(menuId, isPublic, roles) {
			// Create the new menu
			this.menus[menuId] = {
				isPublic: isPublic || false,
				roles: roles || this.defaultRoles,
				items: [],
				shouldRender: shouldRender
			};

			// Return the menu object
			return this.menus[menuId];
		};

		// Remove existing menu object by menu id
		this.removeMenu = function(menuId) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Return the menu object
			delete this.menus[menuId];
		};

		// Add menu item object
		this.addMenuItem = function(menuId, menuItemTitle, menuItemURL, menuItemType, menuItemUIRoute, isPublic, roles, position) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Push new menu item
			this.menus[menuId].items.push({
				title: menuItemTitle,
				link: menuItemURL,
				menuItemType: menuItemType || 'item',
				menuItemClass: menuItemType,
				uiRoute: menuItemUIRoute || ('/' + menuItemURL),
				isPublic: ((isPublic === null || typeof isPublic === 'undefined') ? this.menus[menuId].isPublic : isPublic),
				roles: ((roles === null || typeof roles === 'undefined') ? this.menus[menuId].roles : roles),
				position: position || 0,
				items: [],
				shouldRender: shouldRender
			});

			// Return the menu object
			return this.menus[menuId];
		};

		// Add submenu item object
		this.addSubMenuItem = function(menuId, rootMenuItemURL, menuItemTitle, menuItemURL, menuItemUIRoute, isPublic, roles, position) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Search for menu item
			for (var itemIndex in this.menus[menuId].items) {
				if (this.menus[menuId].items[itemIndex].link === rootMenuItemURL) {
					// Push new submenu item
					this.menus[menuId].items[itemIndex].items.push({
						title: menuItemTitle,
						link: menuItemURL,
						uiRoute: menuItemUIRoute || ('/' + menuItemURL),
						isPublic: ((isPublic === null || typeof isPublic === 'undefined') ? this.menus[menuId].items[itemIndex].isPublic : isPublic),
						roles: ((roles === null || typeof roles === 'undefined') ? this.menus[menuId].items[itemIndex].roles : roles),
						position: position || 0,
						shouldRender: shouldRender
					});
				}
			}

			// Return the menu object
			return this.menus[menuId];
		};

		// Remove existing menu object by menu id
		this.removeMenuItem = function(menuId, menuItemURL) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Search for menu item to remove
			for (var itemIndex in this.menus[menuId].items) {
				if (this.menus[menuId].items[itemIndex].link === menuItemURL) {
					this.menus[menuId].items.splice(itemIndex, 1);
				}
			}

			// Return the menu object
			return this.menus[menuId];
		};

		// Remove existing menu object by menu id
		this.removeSubMenuItem = function(menuId, submenuItemURL) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Search for menu item to remove
			for (var itemIndex in this.menus[menuId].items) {
				for (var subitemIndex in this.menus[menuId].items[itemIndex].items) {
					if (this.menus[menuId].items[itemIndex].items[subitemIndex].link === submenuItemURL) {
						this.menus[menuId].items[itemIndex].items.splice(subitemIndex, 1);
					}
				}
			}

			// Return the menu object
			return this.menus[menuId];
		};

		//Adding the topbar menu
		this.addMenu('topbar');
	}
]);
'use strict';

// Configuring the Articles module
angular.module('faqs').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'FAQ', 'faqs', 'dropdown', '/faqs(/create)?');
		Menus.addSubMenuItem('topbar', 'faqs', 'List Faqs', 'faqs');
		Menus.addSubMenuItem('topbar', 'faqs', 'New Faq', 'faqs/create');
	}
]);
'use strict';

//Setting up route
angular.module('faqs').config(['$stateProvider',
	function($stateProvider) {
		// Faqs state routing
		$stateProvider.
		state('listFaqs', {
			url: '/faqs',
			templateUrl: 'modules/faqs/views/list-faqs.client.view.html'
		}).
		state('createFaq', {
			url: '/faqs/create',
			templateUrl: 'modules/faqs/views/create-faq.client.view.html'
		}).
		state('viewFaq', {
			url: '/faqs/:faqId',
			templateUrl: 'modules/faqs/views/view-faq.client.view.html'
		}).
		state('editFaq', {
			url: '/faqs/:faqId/edit',
			templateUrl: 'modules/faqs/views/edit-faq.client.view.html'
		});
	}
]);
'use strict';

// Faqs controller
angular.module('faqs').controller('FaqsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Faqs',
	function($scope, $stateParams, $location, Authentication, Faqs) {
		$scope.authentication = Authentication;

		// Create new Faq
		$scope.create = function() {
			// Create new Faq object
			var faq = new Faqs ({
				name: this.name
			});

			// Redirect after save
			faq.$save(function(response) {
				$location.path('faqs/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Faq
		$scope.remove = function(faq) {
			if ( faq ) { 
				faq.$remove();

				for (var i in $scope.faqs) {
					if ($scope.faqs [i] === faq) {
						$scope.faqs.splice(i, 1);
					}
				}
			} else {
				$scope.faq.$remove(function() {
					$location.path('faqs');
				});
			}
		};

		// Update existing Faq
		$scope.update = function() {
			var faq = $scope.faq;

			faq.$update(function() {
				$location.path('faqs/' + faq._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Faqs
		$scope.find = function() {
			$scope.faqs = Faqs.query();
		};

		// Find existing Faq
		$scope.findOne = function() {
			$scope.faq = Faqs.get({ 
				faqId: $stateParams.faqId
			});
		};
	}
]);
'use strict';

//Faqs service used to communicate Faqs REST endpoints
angular.module('faqs').factory('Faqs', ['$resource',
	function($resource) {
		return $resource('faqs/:faqId', { faqId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
'use strict';

// Configuring the Articles module
angular.module('introduces').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'UNI MUSIC RACE', 'introduces', '/introduces(/create)?');
		// Menus.addSubMenuItem('topbar', '진행일정', '진행일정', 'introduces');
		// Menus.addSubMenuItem('topbar', '모집요강', '모집요강', 'introduces/create');
		// Menus.addSubMenuItem('topbar', '우승자 혜택', '우승자 혜택', 'introduces/create');
		// Menus.addSubMenuItem('topbar', '심사위원', '심사위원', 'introduces/create');
		// Menus.addSubMenuItem('topbar', '문의', '문의', 'introduces/create');
	}
]);
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
'use strict';

// Introduces controller
angular.module('introduces').controller('IntroducesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Introduces',
	function($scope, $stateParams, $location, Authentication, Introduces) {
		$scope.authentication = Authentication;

		// Create new Introduce
		$scope.create = function() {
			// Create new Introduce object
			var introduce = new Introduces ({
				name: this.name
			});

			// Redirect after save
			introduce.$save(function(response) {
				$location.path('introduces/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Introduce
		$scope.remove = function(introduce) {
			if ( introduce ) { 
				introduce.$remove();

				for (var i in $scope.introduces) {
					if ($scope.introduces [i] === introduce) {
						$scope.introduces.splice(i, 1);
					}
				}
			} else {
				$scope.introduce.$remove(function() {
					$location.path('introduces');
				});
			}
		};

		// Update existing Introduce
		$scope.update = function() {
			var introduce = $scope.introduce;

			introduce.$update(function() {
				$location.path('introduces/' + introduce._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Introduces
		$scope.find = function() {
			$scope.introduces = Introduces.query();
		};

		// Find existing Introduce
		$scope.findOne = function() {
			$scope.introduce = Introduces.get({ 
				introduceId: $stateParams.introduceId
			});
		};
	}
]);
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
'use strict';

// Configuring the Articles module
angular.module('mypages').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Mypages', 'mypages', 'dropdown', '/mypages(/create)?');
		Menus.addSubMenuItem('topbar', 'mypages', 'List Mypages', 'mypages');
		Menus.addSubMenuItem('topbar', 'mypages', 'New Mypage', 'mypages/create');
	}
]);
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
'use strict';

// Mypages controller
angular.module('mypages').controller('MypagesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Mypages',
	function($scope, $stateParams, $location, Authentication, Mypages) {
		$scope.authentication = Authentication;

		// Create new Mypage
		$scope.create = function() {
			// Create new Mypage object
			var mypage = new Mypages ({
				name: this.name
			});

			// Redirect after save
			mypage.$save(function(response) {
				$location.path('mypages/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Mypage
		$scope.remove = function(mypage) {
			if ( mypage ) { 
				mypage.$remove();

				for (var i in $scope.mypages) {
					if ($scope.mypages [i] === mypage) {
						$scope.mypages.splice(i, 1);
					}
				}
			} else {
				$scope.mypage.$remove(function() {
					$location.path('mypages');
				});
			}
		};

		// Update existing Mypage
		$scope.update = function() {
			var mypage = $scope.mypage;

			mypage.$update(function() {
				$location.path('mypages/' + mypage._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Mypages
		$scope.find = function() {
			$scope.mypages = Mypages.query();
		};

		// Find existing Mypage
		$scope.findOne = function() {
			$scope.mypage = Mypages.get({ 
				mypageId: $stateParams.mypageId
			});
		};
	}
]);
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
'use strict';

// Configuring the Articles module
angular.module('news').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'News', 'news', 'dropdown', '/news(/create)?');
		Menus.addSubMenuItem('topbar', 'news', 'List News', 'news');
		Menus.addSubMenuItem('topbar', 'news', 'New News', 'news/create');
	}
]);
'use strict';

//Setting up route
angular.module('news').config(['$stateProvider',
	function($stateProvider) {
		// News state routing
		$stateProvider.
		state('listNews', {
			url: '/news',
			templateUrl: 'modules/news/views/list-news.client.view.html'
		}).
		state('createNews', {
			url: '/news/create',
			templateUrl: 'modules/news/views/create-news.client.view.html'
		}).
		state('viewNews', {
			url: '/news/:newsId',
			templateUrl: 'modules/news/views/view-news.client.view.html'
		}).
		state('editNews', {
			url: '/news/:newsId/edit',
			templateUrl: 'modules/news/views/edit-news.client.view.html'
		});
	}
]);
'use strict';

// News controller
angular.module('news').controller('NewsController', ['$scope', '$stateParams', '$location', 'Authentication', 'News',
	function($scope, $stateParams, $location, Authentication, News) {
		$scope.authentication = Authentication;

		// Create new News
		$scope.create = function() {
			// Create new News object
			var news = new News ({
				name: this.name,
				content : this.content
			});

			// Redirect after save
			news.$save(function(response) {
				$location.path('news/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing News
		$scope.remove = function(news) {
			if ( news ) { 
				news.$remove();

				for (var i in $scope.news) {
					if ($scope.news [i] === news) {
						$scope.news.splice(i, 1);
					}
				}
			} else {
				$scope.news.$remove(function() {
					$location.path('news');
				});
			}
		};

		// Update existing News
		$scope.update = function() {
			var news = $scope.news;

			news.$update(function() {
				$location.path('news/' + news._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of News
		$scope.find = function() {
			$scope.news = News.query();
		};

		// Find existing News
		$scope.findOne = function() {
			$scope.news = News.get({ 
				newsId: $stateParams.newsId
			});
		};
	}
]);

'use strict';

//News service used to communicate News REST endpoints
angular.module('news').factory('News', ['$resource',
	function($resource) {
		return $resource('news/:newsId', { newsId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
'use strict';

// Configuring the Articles module
angular.module('resultsannounces').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', '결과발표', 'resultsannounces', 'dropdown', '/resultsannounces(/create)?');
		Menus.addSubMenuItem('topbar', 'resultsannounces', 'List Resultsannounces', 'resultsannounces');
		Menus.addSubMenuItem('topbar', 'resultsannounces', 'New Resultsannounce', 'resultsannounces/create');
	}
]);
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
'use strict';

// Resultsannounces controller
angular.module('resultsannounces').controller('ResultsannouncesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Resultsannounces',
	function($scope, $stateParams, $location, Authentication, Resultsannounces) {
		$scope.authentication = Authentication;

		// Create new Resultsannounce
		$scope.create = function() {
			// Create new Resultsannounce object
			var resultsannounce = new Resultsannounces ({
				name: this.name
			});

			// Redirect after save
			resultsannounce.$save(function(response) {
				$location.path('resultsannounces/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Resultsannounce
		$scope.remove = function(resultsannounce) {
			if ( resultsannounce ) { 
				resultsannounce.$remove();

				for (var i in $scope.resultsannounces) {
					if ($scope.resultsannounces [i] === resultsannounce) {
						$scope.resultsannounces.splice(i, 1);
					}
				}
			} else {
				$scope.resultsannounce.$remove(function() {
					$location.path('resultsannounces');
				});
			}
		};

		// Update existing Resultsannounce
		$scope.update = function() {
			var resultsannounce = $scope.resultsannounce;

			resultsannounce.$update(function() {
				$location.path('resultsannounces/' + resultsannounce._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Resultsannounces
		$scope.find = function() {
			$scope.resultsannounces = Resultsannounces.query();
		};

		// Find existing Resultsannounce
		$scope.findOne = function() {
			$scope.resultsannounce = Resultsannounces.get({ 
				resultsannounceId: $stateParams.resultsannounceId
			});
		};
	}
]);
'use strict';

//Resultsannounces service used to communicate Resultsannounces REST endpoints
angular.module('resultsannounces').factory('Resultsannounces', ['$resource',
	function($resource) {
		return $resource('resultsannounces/:resultsannounceId', { resultsannounceId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
'use strict';

// Config HTTP Error Handling
angular.module('users').config(['$httpProvider',
	function($httpProvider) {
		// Set the httpProvider "not authorized" interceptor
		$httpProvider.interceptors.push(['$q', '$location', 'Authentication',
			function($q, $location, Authentication) {
				return {
					responseError: function(rejection) {
						switch (rejection.status) {
							case 401:
								// Deauthenticate the global user
								Authentication.user = null;

								// Redirect to signin page
								$location.path('signin');
								break;
							case 403:
								// Add unauthorized behaviour 
								break;
						}

						return $q.reject(rejection);
					}
				};
			}
		]);
	}
]);
'use strict';

// Setting up route
angular.module('users').config(['$stateProvider',
	function($stateProvider) {
		// Users state routing
		$stateProvider.
		state('profile', {
			url: '/settings/profile',
			templateUrl: 'modules/users/views/settings/edit-profile.client.view.html'
		}).
		state('password', {
			url: '/settings/password',
			templateUrl: 'modules/users/views/settings/change-password.client.view.html'
		}).
		state('accounts', {
			url: '/settings/accounts',
			templateUrl: 'modules/users/views/settings/social-accounts.client.view.html'
		}).
		state('signup', {
			url: '/signup',
			templateUrl: 'modules/users/views/authentication/signup.client.view.html'
		}).
		state('signin', {
			url: '/signin',
			templateUrl: 'modules/users/views/authentication/signin.client.view.html'
		}).
		state('forgot', {
			url: '/password/forgot',
			templateUrl: 'modules/users/views/password/forgot-password.client.view.html'
		}).
		state('reset-invalid', {
			url: '/password/reset/invalid',
			templateUrl: 'modules/users/views/password/reset-password-invalid.client.view.html'
		}).
		state('reset-success', {
			url: '/password/reset/success',
			templateUrl: 'modules/users/views/password/reset-password-success.client.view.html'
		}).
		state('reset', {
			url: '/password/reset/:token',
			templateUrl: 'modules/users/views/password/reset-password.client.view.html'
		});
	}
]);
'use strict';

angular.module('users').controller('AuthenticationController', ['$scope', '$http', '$location', 'Authentication',
	function($scope, $http, $location, Authentication) {
		$scope.authentication = Authentication;

		// If user is signed in then redirect back home
		if ($scope.authentication.user) $location.path('/');

		$scope.signup = function() {
			$http.post('/auth/signup', $scope.credentials).success(function(response) {
				// If successful we assign the response to the global user model
				$scope.authentication.user = response;

				// And redirect to the index page
				$location.path('/');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};

		$scope.signin = function() {
			$http.post('/auth/signin', $scope.credentials).success(function(response) {
				// If successful we assign the response to the global user model
				$scope.authentication.user = response;

				// And redirect to the index page
				$location.path('/');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);
'use strict';

angular.module('users').controller('PasswordController', ['$scope', '$stateParams', '$http', '$location', 'Authentication',
	function($scope, $stateParams, $http, $location, Authentication) {
		$scope.authentication = Authentication;

		//If user is signed in then redirect back home
		if ($scope.authentication.user) $location.path('/');

		// Submit forgotten password account id
		$scope.askForPasswordReset = function() {
			$scope.success = $scope.error = null;

			$http.post('/auth/forgot', $scope.credentials).success(function(response) {
				// Show user success message and clear form
				$scope.credentials = null;
				$scope.success = response.message;

			}).error(function(response) {
				// Show user error message and clear form
				$scope.credentials = null;
				$scope.error = response.message;
			});
		};

		// Change user password
		$scope.resetUserPassword = function() {
			$scope.success = $scope.error = null;

			$http.post('/auth/reset/' + $stateParams.token, $scope.passwordDetails).success(function(response) {
				// If successful show success message and clear form
				$scope.passwordDetails = null;

				// Attach user profile
				Authentication.user = response;

				// And redirect to the index page
				$location.path('/password/reset/success');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);
'use strict';

angular.module('users').controller('SettingsController', ['$scope', '$http', '$location', 'Users', 'Authentication',
	function($scope, $http, $location, Users, Authentication) {
		$scope.user = Authentication.user;

		// If user is not signed in then redirect back home
		if (!$scope.user) $location.path('/');

		// Check if there are additional accounts 
		$scope.hasConnectedAdditionalSocialAccounts = function(provider) {
			for (var i in $scope.user.additionalProvidersData) {
				return true;
			}

			return false;
		};

		// Check if provider is already in use with current user
		$scope.isConnectedSocialAccount = function(provider) {
			return $scope.user.provider === provider || ($scope.user.additionalProvidersData && $scope.user.additionalProvidersData[provider]);
		};

		// Remove a user social account
		$scope.removeUserSocialAccount = function(provider) {
			$scope.success = $scope.error = null;

			$http.delete('/users/accounts', {
				params: {
					provider: provider
				}
			}).success(function(response) {
				// If successful show success message and clear form
				$scope.success = true;
				$scope.user = Authentication.user = response;
			}).error(function(response) {
				$scope.error = response.message;
			});
		};

		// Update a user profile
		$scope.updateUserProfile = function(isValid) {
			if (isValid) {
				$scope.success = $scope.error = null;
				var user = new Users($scope.user);

				user.$update(function(response) {
					$scope.success = true;
					Authentication.user = response;
				}, function(response) {
					$scope.error = response.data.message;
				});
			} else {
				$scope.submitted = true;
			}
		};

		// Change user password
		$scope.changeUserPassword = function() {
			$scope.success = $scope.error = null;

			$http.post('/users/password', $scope.passwordDetails).success(function(response) {
				// If successful show success message and clear form
				$scope.success = true;
				$scope.passwordDetails = null;
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);
'use strict';

// Authentication service for user variables
angular.module('users').factory('Authentication', [
	function() {
		var _this = this;

		_this._data = {
			user: window.user
		};

		return _this._data;
	}
]);
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
'use strict';

//Setting up route
angular.module('votes').config(['$stateProvider',
	function($stateProvider) {
		// Votes state routing
		$stateProvider.
		state('listVotes', {
			url: '/votes',
			templateUrl: 'modules/votes/views/list-votes.client.view.html'
		}).
		state('createVote', {
			url: '/votes/create',
			templateUrl: 'modules/votes/views/create-vote.client.view.html'
		}).
		state('viewVote', {
			url: '/votes/:voteId',
			templateUrl: 'modules/votes/views/view-vote.client.view.html'
		}).
		state('editVote', {
			url: '/votes/:voteId/edit',
			templateUrl: 'modules/votes/views/edit-vote.client.view.html'
		});
	}
]);
'use strict';

// Votes controller
angular.module('votes').controller('VotesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Votes',
	function($scope, $stateParams, $location, Authentication, Votes) {
		$scope.authentication = Authentication;

		// Create new Vote
		$scope.create = function() {
			// Create new Vote object
			var vote = new Votes ({
				name: this.name
			});

			// Redirect after save
			vote.$save(function(response) {
				$location.path('votes/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Vote
		$scope.remove = function(vote) {
			if ( vote ) { 
				vote.$remove();

				for (var i in $scope.votes) {
					if ($scope.votes [i] === vote) {
						$scope.votes.splice(i, 1);
					}
				}
			} else {
				$scope.vote.$remove(function() {
					$location.path('votes');
				});
			}
		};

		// Update existing Vote
		$scope.update = function() {
			var vote = $scope.vote;

			vote.$update(function() {
				$location.path('votes/' + vote._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Votes
		$scope.find = function() {
			$scope.votes = Votes.query();
		};

		// Find existing Vote
		$scope.findOne = function() {
			$scope.vote = Votes.get({ 
				voteId: $stateParams.voteId
			});
		};
	}
]);
'use strict';

//Votes service used to communicate Votes REST endpoints
angular.module('votes').factory('Votes', ['$resource',
	function($resource) {
		return $resource('votes/:voteId', { voteId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('competitions',['youtube-embed','ngFileUpload']);

'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('core');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('faqs');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('introduces');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('mypages');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('news');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('resultsannounces');
'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('users');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('votes');
'use strict';

// Configuring the Articles module
angular.module('competitions').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', '경연대회', 'competitions', 'dropdown', '/competitions(/create)?');
		Menus.addSubMenuItem('topbar', 'competitions', 'List Competitions', 'competitions');
		Menus.addSubMenuItem('topbar', 'competitions', 'New Competition', 'competitions/create');
	}
]);

'use strict';

//Setting up route
angular.module('competitions').config(['$stateProvider',
	function($stateProvider) {
		// Competitions state routing
		$stateProvider.
		state('listCompetitions', {
			url: '/competitions',
			templateUrl: 'modules/competitions/views/list-competitions.client.view.html'
		}).
		state('createCompetition', {
			url: '/competitions/create',
			templateUrl: 'modules/competitions/views/create-competition.client.view.html'
		}).
		state('viewCompetition', {
			url: '/competitions/:competitionId',
			templateUrl: 'modules/competitions/views/view-competition.client.view.html'
		}).
		state('editCompetition', {
			url: '/competitions/:competitionId/edit',
			templateUrl: 'modules/competitions/views/edit-competition.client.view.html'
		});
	}
]);

'use strict';

// Competitions controller
angular.module('competitions').controller('CompetitionsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Competitions','Comments','Likes',
	function($scope, $stateParams, $location, Authentication, Competitions,Comments,Likes) {
		$scope.authentication = Authentication;
		$scope.likeCount = 0;


		console.log($scope.authentication);

		// Create new Competition
		$scope.create = function() {
			// Create new Competition object
			console.log(this);
			var competition = new Competitions ({
				name: this.name,
				description : this.description,
				phoneNum : this.phoneNum,
				address : this.address,
				country : this.country,
				teamUrl : this.teamUrl,
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
			$scope.competitions = Competitions.query();
		};

		// Find existing Competition
		$scope.findOne = function() {
			$scope.competition = Competitions.get({
				competitionId: $stateParams.competitionId
			});

			$scope.comments = Comments.query({
				competitionId: $stateParams.competitionId
			});

			$scope.likes = Likes.query({
				competitionId: $stateParams.competitionId
			},function(){
				$scope.likeCount = getLikeCount($scope.likes);
				console.log($scope.likeCount);
			});



		};

		$scope.backToList = function(){
			window.history.back();
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
					});
				});


			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});


		}

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

'use strict';

angular.module('competitions').factory('Comments', [
	function() {
		// Comments service logic
		// ...

		// Public API
		return {
			someMethod: function() {
				return true;
			}
		};
	}
]);
'use strict';

//Competitions service used to communicate Competitions REST endpoints
angular.module('competitions').factory('Competitions', ['$resource',
	function($resource) {
		return $resource('competitions/:competitionId', { competitionId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);


angular.module('competitions').factory('Comments', ['$resource',
	function($resource) {
		return $resource('comments/:commentId', { commentId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);

angular.module('competitions').factory('Likes', ['$resource',
	function($resource) {
		return $resource('likes/:likeId', { likeId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);

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
	}
]);
'use strict';

angular.module('core').controller('HeaderController', ['$scope', 'Authentication', 'Menus',
	function($scope, Authentication, Menus) {
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
	}
]);
'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
	}
]);
'use strict';

//Menu service used for managing  menus
angular.module('core').service('Menus', [

	function() {
		// Define a set of default roles
		this.defaultRoles = ['*'];

		// Define the menus object
		this.menus = {};

		// A private function for rendering decision 
		var shouldRender = function(user) {
			if (user) {
				if (!!~this.roles.indexOf('*')) {
					return true;
				} else {
					for (var userRoleIndex in user.roles) {
						for (var roleIndex in this.roles) {
							if (this.roles[roleIndex] === user.roles[userRoleIndex]) {
								return true;
							}
						}
					}
				}
			} else {
				return this.isPublic;
			}

			return false;
		};

		// Validate menu existance
		this.validateMenuExistance = function(menuId) {
			if (menuId && menuId.length) {
				if (this.menus[menuId]) {
					return true;
				} else {
					throw new Error('Menu does not exists');
				}
			} else {
				throw new Error('MenuId was not provided');
			}

			return false;
		};

		// Get the menu object by menu id
		this.getMenu = function(menuId) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Return the menu object
			return this.menus[menuId];
		};

		// Add new menu object by menu id
		this.addMenu = function(menuId, isPublic, roles) {
			// Create the new menu
			this.menus[menuId] = {
				isPublic: isPublic || false,
				roles: roles || this.defaultRoles,
				items: [],
				shouldRender: shouldRender
			};

			// Return the menu object
			return this.menus[menuId];
		};

		// Remove existing menu object by menu id
		this.removeMenu = function(menuId) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Return the menu object
			delete this.menus[menuId];
		};

		// Add menu item object
		this.addMenuItem = function(menuId, menuItemTitle, menuItemURL, menuItemType, menuItemUIRoute, isPublic, roles, position) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Push new menu item
			this.menus[menuId].items.push({
				title: menuItemTitle,
				link: menuItemURL,
				menuItemType: menuItemType || 'item',
				menuItemClass: menuItemType,
				uiRoute: menuItemUIRoute || ('/' + menuItemURL),
				isPublic: ((isPublic === null || typeof isPublic === 'undefined') ? this.menus[menuId].isPublic : isPublic),
				roles: ((roles === null || typeof roles === 'undefined') ? this.menus[menuId].roles : roles),
				position: position || 0,
				items: [],
				shouldRender: shouldRender
			});

			// Return the menu object
			return this.menus[menuId];
		};

		// Add submenu item object
		this.addSubMenuItem = function(menuId, rootMenuItemURL, menuItemTitle, menuItemURL, menuItemUIRoute, isPublic, roles, position) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Search for menu item
			for (var itemIndex in this.menus[menuId].items) {
				if (this.menus[menuId].items[itemIndex].link === rootMenuItemURL) {
					// Push new submenu item
					this.menus[menuId].items[itemIndex].items.push({
						title: menuItemTitle,
						link: menuItemURL,
						uiRoute: menuItemUIRoute || ('/' + menuItemURL),
						isPublic: ((isPublic === null || typeof isPublic === 'undefined') ? this.menus[menuId].items[itemIndex].isPublic : isPublic),
						roles: ((roles === null || typeof roles === 'undefined') ? this.menus[menuId].items[itemIndex].roles : roles),
						position: position || 0,
						shouldRender: shouldRender
					});
				}
			}

			// Return the menu object
			return this.menus[menuId];
		};

		// Remove existing menu object by menu id
		this.removeMenuItem = function(menuId, menuItemURL) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Search for menu item to remove
			for (var itemIndex in this.menus[menuId].items) {
				if (this.menus[menuId].items[itemIndex].link === menuItemURL) {
					this.menus[menuId].items.splice(itemIndex, 1);
				}
			}

			// Return the menu object
			return this.menus[menuId];
		};

		// Remove existing menu object by menu id
		this.removeSubMenuItem = function(menuId, submenuItemURL) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Search for menu item to remove
			for (var itemIndex in this.menus[menuId].items) {
				for (var subitemIndex in this.menus[menuId].items[itemIndex].items) {
					if (this.menus[menuId].items[itemIndex].items[subitemIndex].link === submenuItemURL) {
						this.menus[menuId].items[itemIndex].items.splice(subitemIndex, 1);
					}
				}
			}

			// Return the menu object
			return this.menus[menuId];
		};

		//Adding the topbar menu
		this.addMenu('topbar');
	}
]);
'use strict';

// Configuring the Articles module
angular.module('faqs').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'FAQ', 'faqs', 'dropdown', '/faqs(/create)?');
		Menus.addSubMenuItem('topbar', 'faqs', 'List Faqs', 'faqs');
		Menus.addSubMenuItem('topbar', 'faqs', 'New Faq', 'faqs/create');
	}
]);
'use strict';

//Setting up route
angular.module('faqs').config(['$stateProvider',
	function($stateProvider) {
		// Faqs state routing
		$stateProvider.
		state('listFaqs', {
			url: '/faqs',
			templateUrl: 'modules/faqs/views/list-faqs.client.view.html'
		}).
		state('createFaq', {
			url: '/faqs/create',
			templateUrl: 'modules/faqs/views/create-faq.client.view.html'
		}).
		state('viewFaq', {
			url: '/faqs/:faqId',
			templateUrl: 'modules/faqs/views/view-faq.client.view.html'
		}).
		state('editFaq', {
			url: '/faqs/:faqId/edit',
			templateUrl: 'modules/faqs/views/edit-faq.client.view.html'
		});
	}
]);
'use strict';

// Faqs controller
angular.module('faqs').controller('FaqsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Faqs',
	function($scope, $stateParams, $location, Authentication, Faqs) {
		$scope.authentication = Authentication;

		// Create new Faq
		$scope.create = function() {
			// Create new Faq object
			var faq = new Faqs ({
				name: this.name
			});

			// Redirect after save
			faq.$save(function(response) {
				$location.path('faqs/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Faq
		$scope.remove = function(faq) {
			if ( faq ) { 
				faq.$remove();

				for (var i in $scope.faqs) {
					if ($scope.faqs [i] === faq) {
						$scope.faqs.splice(i, 1);
					}
				}
			} else {
				$scope.faq.$remove(function() {
					$location.path('faqs');
				});
			}
		};

		// Update existing Faq
		$scope.update = function() {
			var faq = $scope.faq;

			faq.$update(function() {
				$location.path('faqs/' + faq._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Faqs
		$scope.find = function() {
			$scope.faqs = Faqs.query();
		};

		// Find existing Faq
		$scope.findOne = function() {
			$scope.faq = Faqs.get({ 
				faqId: $stateParams.faqId
			});
		};
	}
]);
'use strict';

//Faqs service used to communicate Faqs REST endpoints
angular.module('faqs').factory('Faqs', ['$resource',
	function($resource) {
		return $resource('faqs/:faqId', { faqId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
'use strict';

// Configuring the Articles module
angular.module('introduces').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'UNI MUSIC RACE', 'introduces', '/introduces(/create)?');
		// Menus.addSubMenuItem('topbar', '진행일정', '진행일정', 'introduces');
		// Menus.addSubMenuItem('topbar', '모집요강', '모집요강', 'introduces/create');
		// Menus.addSubMenuItem('topbar', '우승자 혜택', '우승자 혜택', 'introduces/create');
		// Menus.addSubMenuItem('topbar', '심사위원', '심사위원', 'introduces/create');
		// Menus.addSubMenuItem('topbar', '문의', '문의', 'introduces/create');
	}
]);
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
'use strict';

// Introduces controller
angular.module('introduces').controller('IntroducesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Introduces',
	function($scope, $stateParams, $location, Authentication, Introduces) {
		$scope.authentication = Authentication;

		// Create new Introduce
		$scope.create = function() {
			// Create new Introduce object
			var introduce = new Introduces ({
				name: this.name
			});

			// Redirect after save
			introduce.$save(function(response) {
				$location.path('introduces/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Introduce
		$scope.remove = function(introduce) {
			if ( introduce ) { 
				introduce.$remove();

				for (var i in $scope.introduces) {
					if ($scope.introduces [i] === introduce) {
						$scope.introduces.splice(i, 1);
					}
				}
			} else {
				$scope.introduce.$remove(function() {
					$location.path('introduces');
				});
			}
		};

		// Update existing Introduce
		$scope.update = function() {
			var introduce = $scope.introduce;

			introduce.$update(function() {
				$location.path('introduces/' + introduce._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Introduces
		$scope.find = function() {
			$scope.introduces = Introduces.query();
		};

		// Find existing Introduce
		$scope.findOne = function() {
			$scope.introduce = Introduces.get({ 
				introduceId: $stateParams.introduceId
			});
		};
	}
]);
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
'use strict';

// Configuring the Articles module
angular.module('mypages').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Mypages', 'mypages', 'dropdown', '/mypages(/create)?');
		Menus.addSubMenuItem('topbar', 'mypages', 'List Mypages', 'mypages');
		Menus.addSubMenuItem('topbar', 'mypages', 'New Mypage', 'mypages/create');
	}
]);
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
'use strict';

// Mypages controller
angular.module('mypages').controller('MypagesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Mypages',
	function($scope, $stateParams, $location, Authentication, Mypages) {
		$scope.authentication = Authentication;

		// Create new Mypage
		$scope.create = function() {
			// Create new Mypage object
			var mypage = new Mypages ({
				name: this.name
			});

			// Redirect after save
			mypage.$save(function(response) {
				$location.path('mypages/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Mypage
		$scope.remove = function(mypage) {
			if ( mypage ) { 
				mypage.$remove();

				for (var i in $scope.mypages) {
					if ($scope.mypages [i] === mypage) {
						$scope.mypages.splice(i, 1);
					}
				}
			} else {
				$scope.mypage.$remove(function() {
					$location.path('mypages');
				});
			}
		};

		// Update existing Mypage
		$scope.update = function() {
			var mypage = $scope.mypage;

			mypage.$update(function() {
				$location.path('mypages/' + mypage._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Mypages
		$scope.find = function() {
			$scope.mypages = Mypages.query();
		};

		// Find existing Mypage
		$scope.findOne = function() {
			$scope.mypage = Mypages.get({ 
				mypageId: $stateParams.mypageId
			});
		};
	}
]);
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
'use strict';

// Configuring the Articles module
angular.module('news').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'News', 'news', 'dropdown', '/news(/create)?');
		Menus.addSubMenuItem('topbar', 'news', 'List News', 'news');
		Menus.addSubMenuItem('topbar', 'news', 'New News', 'news/create');
	}
]);
'use strict';

//Setting up route
angular.module('news').config(['$stateProvider',
	function($stateProvider) {
		// News state routing
		$stateProvider.
		state('listNews', {
			url: '/news',
			templateUrl: 'modules/news/views/list-news.client.view.html'
		}).
		state('createNews', {
			url: '/news/create',
			templateUrl: 'modules/news/views/create-news.client.view.html'
		}).
		state('viewNews', {
			url: '/news/:newsId',
			templateUrl: 'modules/news/views/view-news.client.view.html'
		}).
		state('editNews', {
			url: '/news/:newsId/edit',
			templateUrl: 'modules/news/views/edit-news.client.view.html'
		});
	}
]);
'use strict';

// News controller
angular.module('news').controller('NewsController', ['$scope', '$stateParams', '$location', 'Authentication', 'News',
	function($scope, $stateParams, $location, Authentication, News) {
		$scope.authentication = Authentication;

		// Create new News
		$scope.create = function() {
			// Create new News object
			var news = new News ({
				name: this.name,
				content : this.content
			});

			// Redirect after save
			news.$save(function(response) {
				$location.path('news/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing News
		$scope.remove = function(news) {
			if ( news ) { 
				news.$remove();

				for (var i in $scope.news) {
					if ($scope.news [i] === news) {
						$scope.news.splice(i, 1);
					}
				}
			} else {
				$scope.news.$remove(function() {
					$location.path('news');
				});
			}
		};

		// Update existing News
		$scope.update = function() {
			var news = $scope.news;

			news.$update(function() {
				$location.path('news/' + news._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of News
		$scope.find = function() {
			$scope.news = News.query();
		};

		// Find existing News
		$scope.findOne = function() {
			$scope.news = News.get({ 
				newsId: $stateParams.newsId
			});
		};
	}
]);

'use strict';

//News service used to communicate News REST endpoints
angular.module('news').factory('News', ['$resource',
	function($resource) {
		return $resource('news/:newsId', { newsId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
'use strict';

// Configuring the Articles module
angular.module('resultsannounces').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', '결과발표', 'resultsannounces', 'dropdown', '/resultsannounces(/create)?');
		Menus.addSubMenuItem('topbar', 'resultsannounces', 'List Resultsannounces', 'resultsannounces');
		Menus.addSubMenuItem('topbar', 'resultsannounces', 'New Resultsannounce', 'resultsannounces/create');
	}
]);
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
'use strict';

// Resultsannounces controller
angular.module('resultsannounces').controller('ResultsannouncesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Resultsannounces',
	function($scope, $stateParams, $location, Authentication, Resultsannounces) {
		$scope.authentication = Authentication;

		// Create new Resultsannounce
		$scope.create = function() {
			// Create new Resultsannounce object
			var resultsannounce = new Resultsannounces ({
				name: this.name
			});

			// Redirect after save
			resultsannounce.$save(function(response) {
				$location.path('resultsannounces/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Resultsannounce
		$scope.remove = function(resultsannounce) {
			if ( resultsannounce ) { 
				resultsannounce.$remove();

				for (var i in $scope.resultsannounces) {
					if ($scope.resultsannounces [i] === resultsannounce) {
						$scope.resultsannounces.splice(i, 1);
					}
				}
			} else {
				$scope.resultsannounce.$remove(function() {
					$location.path('resultsannounces');
				});
			}
		};

		// Update existing Resultsannounce
		$scope.update = function() {
			var resultsannounce = $scope.resultsannounce;

			resultsannounce.$update(function() {
				$location.path('resultsannounces/' + resultsannounce._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Resultsannounces
		$scope.find = function() {
			$scope.resultsannounces = Resultsannounces.query();
		};

		// Find existing Resultsannounce
		$scope.findOne = function() {
			$scope.resultsannounce = Resultsannounces.get({ 
				resultsannounceId: $stateParams.resultsannounceId
			});
		};
	}
]);
'use strict';

//Resultsannounces service used to communicate Resultsannounces REST endpoints
angular.module('resultsannounces').factory('Resultsannounces', ['$resource',
	function($resource) {
		return $resource('resultsannounces/:resultsannounceId', { resultsannounceId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
'use strict';

// Config HTTP Error Handling
angular.module('users').config(['$httpProvider',
	function($httpProvider) {
		// Set the httpProvider "not authorized" interceptor
		$httpProvider.interceptors.push(['$q', '$location', 'Authentication',
			function($q, $location, Authentication) {
				return {
					responseError: function(rejection) {
						switch (rejection.status) {
							case 401:
								// Deauthenticate the global user
								Authentication.user = null;

								// Redirect to signin page
								$location.path('signin');
								break;
							case 403:
								// Add unauthorized behaviour 
								break;
						}

						return $q.reject(rejection);
					}
				};
			}
		]);
	}
]);
'use strict';

// Setting up route
angular.module('users').config(['$stateProvider',
	function($stateProvider) {
		// Users state routing
		$stateProvider.
		state('profile', {
			url: '/settings/profile',
			templateUrl: 'modules/users/views/settings/edit-profile.client.view.html'
		}).
		state('password', {
			url: '/settings/password',
			templateUrl: 'modules/users/views/settings/change-password.client.view.html'
		}).
		state('accounts', {
			url: '/settings/accounts',
			templateUrl: 'modules/users/views/settings/social-accounts.client.view.html'
		}).
		state('signup', {
			url: '/signup',
			templateUrl: 'modules/users/views/authentication/signup.client.view.html'
		}).
		state('signin', {
			url: '/signin',
			templateUrl: 'modules/users/views/authentication/signin.client.view.html'
		}).
		state('forgot', {
			url: '/password/forgot',
			templateUrl: 'modules/users/views/password/forgot-password.client.view.html'
		}).
		state('reset-invalid', {
			url: '/password/reset/invalid',
			templateUrl: 'modules/users/views/password/reset-password-invalid.client.view.html'
		}).
		state('reset-success', {
			url: '/password/reset/success',
			templateUrl: 'modules/users/views/password/reset-password-success.client.view.html'
		}).
		state('reset', {
			url: '/password/reset/:token',
			templateUrl: 'modules/users/views/password/reset-password.client.view.html'
		});
	}
]);
'use strict';

angular.module('users').controller('AuthenticationController', ['$scope', '$http', '$location', 'Authentication',
	function($scope, $http, $location, Authentication) {
		$scope.authentication = Authentication;

		// If user is signed in then redirect back home
		if ($scope.authentication.user) $location.path('/');

		$scope.signup = function() {
			$http.post('/auth/signup', $scope.credentials).success(function(response) {
				// If successful we assign the response to the global user model
				$scope.authentication.user = response;

				// And redirect to the index page
				$location.path('/');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};

		$scope.signin = function() {
			$http.post('/auth/signin', $scope.credentials).success(function(response) {
				// If successful we assign the response to the global user model
				$scope.authentication.user = response;

				// And redirect to the index page
				$location.path('/');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);
'use strict';

angular.module('users').controller('PasswordController', ['$scope', '$stateParams', '$http', '$location', 'Authentication',
	function($scope, $stateParams, $http, $location, Authentication) {
		$scope.authentication = Authentication;

		//If user is signed in then redirect back home
		if ($scope.authentication.user) $location.path('/');

		// Submit forgotten password account id
		$scope.askForPasswordReset = function() {
			$scope.success = $scope.error = null;

			$http.post('/auth/forgot', $scope.credentials).success(function(response) {
				// Show user success message and clear form
				$scope.credentials = null;
				$scope.success = response.message;

			}).error(function(response) {
				// Show user error message and clear form
				$scope.credentials = null;
				$scope.error = response.message;
			});
		};

		// Change user password
		$scope.resetUserPassword = function() {
			$scope.success = $scope.error = null;

			$http.post('/auth/reset/' + $stateParams.token, $scope.passwordDetails).success(function(response) {
				// If successful show success message and clear form
				$scope.passwordDetails = null;

				// Attach user profile
				Authentication.user = response;

				// And redirect to the index page
				$location.path('/password/reset/success');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);
'use strict';

angular.module('users').controller('SettingsController', ['$scope', '$http', '$location', 'Users', 'Authentication',
	function($scope, $http, $location, Users, Authentication) {
		$scope.user = Authentication.user;

		// If user is not signed in then redirect back home
		if (!$scope.user) $location.path('/');

		// Check if there are additional accounts 
		$scope.hasConnectedAdditionalSocialAccounts = function(provider) {
			for (var i in $scope.user.additionalProvidersData) {
				return true;
			}

			return false;
		};

		// Check if provider is already in use with current user
		$scope.isConnectedSocialAccount = function(provider) {
			return $scope.user.provider === provider || ($scope.user.additionalProvidersData && $scope.user.additionalProvidersData[provider]);
		};

		// Remove a user social account
		$scope.removeUserSocialAccount = function(provider) {
			$scope.success = $scope.error = null;

			$http.delete('/users/accounts', {
				params: {
					provider: provider
				}
			}).success(function(response) {
				// If successful show success message and clear form
				$scope.success = true;
				$scope.user = Authentication.user = response;
			}).error(function(response) {
				$scope.error = response.message;
			});
		};

		// Update a user profile
		$scope.updateUserProfile = function(isValid) {
			if (isValid) {
				$scope.success = $scope.error = null;
				var user = new Users($scope.user);

				user.$update(function(response) {
					$scope.success = true;
					Authentication.user = response;
				}, function(response) {
					$scope.error = response.data.message;
				});
			} else {
				$scope.submitted = true;
			}
		};

		// Change user password
		$scope.changeUserPassword = function() {
			$scope.success = $scope.error = null;

			$http.post('/users/password', $scope.passwordDetails).success(function(response) {
				// If successful show success message and clear form
				$scope.success = true;
				$scope.passwordDetails = null;
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);
'use strict';

// Authentication service for user variables
angular.module('users').factory('Authentication', [
	function() {
		var _this = this;

		_this._data = {
			user: window.user
		};

		return _this._data;
	}
]);
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
'use strict';

//Setting up route
angular.module('votes').config(['$stateProvider',
	function($stateProvider) {
		// Votes state routing
		$stateProvider.
		state('listVotes', {
			url: '/votes',
			templateUrl: 'modules/votes/views/list-votes.client.view.html'
		}).
		state('createVote', {
			url: '/votes/create',
			templateUrl: 'modules/votes/views/create-vote.client.view.html'
		}).
		state('viewVote', {
			url: '/votes/:voteId',
			templateUrl: 'modules/votes/views/view-vote.client.view.html'
		}).
		state('editVote', {
			url: '/votes/:voteId/edit',
			templateUrl: 'modules/votes/views/edit-vote.client.view.html'
		});
	}
]);
'use strict';

// Votes controller
angular.module('votes').controller('VotesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Votes',
	function($scope, $stateParams, $location, Authentication, Votes) {
		$scope.authentication = Authentication;

		// Create new Vote
		$scope.create = function() {
			// Create new Vote object
			var vote = new Votes ({
				name: this.name
			});

			// Redirect after save
			vote.$save(function(response) {
				$location.path('votes/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Vote
		$scope.remove = function(vote) {
			if ( vote ) { 
				vote.$remove();

				for (var i in $scope.votes) {
					if ($scope.votes [i] === vote) {
						$scope.votes.splice(i, 1);
					}
				}
			} else {
				$scope.vote.$remove(function() {
					$location.path('votes');
				});
			}
		};

		// Update existing Vote
		$scope.update = function() {
			var vote = $scope.vote;

			vote.$update(function() {
				$location.path('votes/' + vote._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Votes
		$scope.find = function() {
			$scope.votes = Votes.query();
		};

		// Find existing Vote
		$scope.findOne = function() {
			$scope.vote = Votes.get({ 
				voteId: $stateParams.voteId
			});
		};
	}
]);
'use strict';

//Votes service used to communicate Votes REST endpoints
angular.module('votes').factory('Votes', ['$resource',
	function($resource) {
		return $resource('votes/:voteId', { voteId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('competitions',['youtube-embed','ngFileUpload']);

'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('core');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('faqs');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('introduces');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('mypages');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('news');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('resultsannounces');
'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('users');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('votes');
'use strict';

// Configuring the Articles module
angular.module('competitions').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', '경연대회', 'competitions', 'dropdown', '/competitions(/create)?');
		Menus.addSubMenuItem('topbar', 'competitions', 'List Competitions', 'competitions');
		Menus.addSubMenuItem('topbar', 'competitions', 'New Competition', 'competitions/create');
	}
]);

'use strict';

//Setting up route
angular.module('competitions').config(['$stateProvider',
	function($stateProvider) {
		// Competitions state routing
		$stateProvider.
		state('listCompetitions', {
			url: '/competitions',
			templateUrl: 'modules/competitions/views/list-competitions.client.view.html'
		}).
		state('createCompetition', {
			url: '/competitions/create',
			templateUrl: 'modules/competitions/views/create-competition.client.view.html'
		}).
		state('viewCompetition', {
			url: '/competitions/:competitionId',
			templateUrl: 'modules/competitions/views/view-competition.client.view.html'
		}).
		state('editCompetition', {
			url: '/competitions/:competitionId/edit',
			templateUrl: 'modules/competitions/views/edit-competition.client.view.html'
		});
	}
]);

'use strict';

// Competitions controller
angular.module('competitions').controller('CompetitionsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Competitions','Comments','Likes',
	function($scope, $stateParams, $location, Authentication, Competitions,Comments,Likes) {
		$scope.authentication = Authentication;
		$scope.likeCount = 0;


		console.log($scope.authentication);

		// Create new Competition
		$scope.create = function() {
			// Create new Competition object
			console.log(this);
			var competition = new Competitions ({
				name: this.name,
				description : this.description,
				phoneNum : this.phoneNum,
				address : this.address,
				country : this.country,
				teamUrl : this.teamUrl,
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
			$scope.competitions = Competitions.query();
		};

		// Find existing Competition
		$scope.findOne = function() {
			$scope.competition = Competitions.get({
				competitionId: $stateParams.competitionId
			});

			$scope.comments = Comments.query({
				competitionId: $stateParams.competitionId
			});

			$scope.likes = Likes.query({
				competitionId: $stateParams.competitionId
			},function(){
				$scope.likeCount = getLikeCount($scope.likes);
				console.log($scope.likeCount);
			});



		};

		$scope.backToList = function(){
			window.history.back();
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
					});
				});


			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});


		}

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

'use strict';

angular.module('competitions').factory('Comments', [
	function() {
		// Comments service logic
		// ...

		// Public API
		return {
			someMethod: function() {
				return true;
			}
		};
	}
]);
'use strict';

//Competitions service used to communicate Competitions REST endpoints
angular.module('competitions').factory('Competitions', ['$resource',
	function($resource) {
		return $resource('competitions/:competitionId', { competitionId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);


angular.module('competitions').factory('Comments', ['$resource',
	function($resource) {
		return $resource('comments/:commentId', { commentId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);

angular.module('competitions').factory('Likes', ['$resource',
	function($resource) {
		return $resource('likes/:likeId', { likeId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);

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
	}
]);
'use strict';

angular.module('core').controller('HeaderController', ['$scope', 'Authentication', 'Menus',
	function($scope, Authentication, Menus) {
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
	}
]);
'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
	}
]);
'use strict';

//Menu service used for managing  menus
angular.module('core').service('Menus', [

	function() {
		// Define a set of default roles
		this.defaultRoles = ['*'];

		// Define the menus object
		this.menus = {};

		// A private function for rendering decision 
		var shouldRender = function(user) {
			if (user) {
				if (!!~this.roles.indexOf('*')) {
					return true;
				} else {
					for (var userRoleIndex in user.roles) {
						for (var roleIndex in this.roles) {
							if (this.roles[roleIndex] === user.roles[userRoleIndex]) {
								return true;
							}
						}
					}
				}
			} else {
				return this.isPublic;
			}

			return false;
		};

		// Validate menu existance
		this.validateMenuExistance = function(menuId) {
			if (menuId && menuId.length) {
				if (this.menus[menuId]) {
					return true;
				} else {
					throw new Error('Menu does not exists');
				}
			} else {
				throw new Error('MenuId was not provided');
			}

			return false;
		};

		// Get the menu object by menu id
		this.getMenu = function(menuId) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Return the menu object
			return this.menus[menuId];
		};

		// Add new menu object by menu id
		this.addMenu = function(menuId, isPublic, roles) {
			// Create the new menu
			this.menus[menuId] = {
				isPublic: isPublic || false,
				roles: roles || this.defaultRoles,
				items: [],
				shouldRender: shouldRender
			};

			// Return the menu object
			return this.menus[menuId];
		};

		// Remove existing menu object by menu id
		this.removeMenu = function(menuId) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Return the menu object
			delete this.menus[menuId];
		};

		// Add menu item object
		this.addMenuItem = function(menuId, menuItemTitle, menuItemURL, menuItemType, menuItemUIRoute, isPublic, roles, position) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Push new menu item
			this.menus[menuId].items.push({
				title: menuItemTitle,
				link: menuItemURL,
				menuItemType: menuItemType || 'item',
				menuItemClass: menuItemType,
				uiRoute: menuItemUIRoute || ('/' + menuItemURL),
				isPublic: ((isPublic === null || typeof isPublic === 'undefined') ? this.menus[menuId].isPublic : isPublic),
				roles: ((roles === null || typeof roles === 'undefined') ? this.menus[menuId].roles : roles),
				position: position || 0,
				items: [],
				shouldRender: shouldRender
			});

			// Return the menu object
			return this.menus[menuId];
		};

		// Add submenu item object
		this.addSubMenuItem = function(menuId, rootMenuItemURL, menuItemTitle, menuItemURL, menuItemUIRoute, isPublic, roles, position) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Search for menu item
			for (var itemIndex in this.menus[menuId].items) {
				if (this.menus[menuId].items[itemIndex].link === rootMenuItemURL) {
					// Push new submenu item
					this.menus[menuId].items[itemIndex].items.push({
						title: menuItemTitle,
						link: menuItemURL,
						uiRoute: menuItemUIRoute || ('/' + menuItemURL),
						isPublic: ((isPublic === null || typeof isPublic === 'undefined') ? this.menus[menuId].items[itemIndex].isPublic : isPublic),
						roles: ((roles === null || typeof roles === 'undefined') ? this.menus[menuId].items[itemIndex].roles : roles),
						position: position || 0,
						shouldRender: shouldRender
					});
				}
			}

			// Return the menu object
			return this.menus[menuId];
		};

		// Remove existing menu object by menu id
		this.removeMenuItem = function(menuId, menuItemURL) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Search for menu item to remove
			for (var itemIndex in this.menus[menuId].items) {
				if (this.menus[menuId].items[itemIndex].link === menuItemURL) {
					this.menus[menuId].items.splice(itemIndex, 1);
				}
			}

			// Return the menu object
			return this.menus[menuId];
		};

		// Remove existing menu object by menu id
		this.removeSubMenuItem = function(menuId, submenuItemURL) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Search for menu item to remove
			for (var itemIndex in this.menus[menuId].items) {
				for (var subitemIndex in this.menus[menuId].items[itemIndex].items) {
					if (this.menus[menuId].items[itemIndex].items[subitemIndex].link === submenuItemURL) {
						this.menus[menuId].items[itemIndex].items.splice(subitemIndex, 1);
					}
				}
			}

			// Return the menu object
			return this.menus[menuId];
		};

		//Adding the topbar menu
		this.addMenu('topbar');
	}
]);
'use strict';

// Configuring the Articles module
angular.module('faqs').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'FAQ', 'faqs', 'dropdown', '/faqs(/create)?');
		Menus.addSubMenuItem('topbar', 'faqs', 'List Faqs', 'faqs');
		Menus.addSubMenuItem('topbar', 'faqs', 'New Faq', 'faqs/create');
	}
]);
'use strict';

//Setting up route
angular.module('faqs').config(['$stateProvider',
	function($stateProvider) {
		// Faqs state routing
		$stateProvider.
		state('listFaqs', {
			url: '/faqs',
			templateUrl: 'modules/faqs/views/list-faqs.client.view.html'
		}).
		state('createFaq', {
			url: '/faqs/create',
			templateUrl: 'modules/faqs/views/create-faq.client.view.html'
		}).
		state('viewFaq', {
			url: '/faqs/:faqId',
			templateUrl: 'modules/faqs/views/view-faq.client.view.html'
		}).
		state('editFaq', {
			url: '/faqs/:faqId/edit',
			templateUrl: 'modules/faqs/views/edit-faq.client.view.html'
		});
	}
]);
'use strict';

// Faqs controller
angular.module('faqs').controller('FaqsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Faqs',
	function($scope, $stateParams, $location, Authentication, Faqs) {
		$scope.authentication = Authentication;

		// Create new Faq
		$scope.create = function() {
			// Create new Faq object
			var faq = new Faqs ({
				name: this.name
			});

			// Redirect after save
			faq.$save(function(response) {
				$location.path('faqs/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Faq
		$scope.remove = function(faq) {
			if ( faq ) { 
				faq.$remove();

				for (var i in $scope.faqs) {
					if ($scope.faqs [i] === faq) {
						$scope.faqs.splice(i, 1);
					}
				}
			} else {
				$scope.faq.$remove(function() {
					$location.path('faqs');
				});
			}
		};

		// Update existing Faq
		$scope.update = function() {
			var faq = $scope.faq;

			faq.$update(function() {
				$location.path('faqs/' + faq._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Faqs
		$scope.find = function() {
			$scope.faqs = Faqs.query();
		};

		// Find existing Faq
		$scope.findOne = function() {
			$scope.faq = Faqs.get({ 
				faqId: $stateParams.faqId
			});
		};
	}
]);
'use strict';

//Faqs service used to communicate Faqs REST endpoints
angular.module('faqs').factory('Faqs', ['$resource',
	function($resource) {
		return $resource('faqs/:faqId', { faqId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
'use strict';

// Configuring the Articles module
angular.module('introduces').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'UNI MUSIC RACE', 'introduces', '/introduces(/create)?');
		// Menus.addSubMenuItem('topbar', '진행일정', '진행일정', 'introduces');
		// Menus.addSubMenuItem('topbar', '모집요강', '모집요강', 'introduces/create');
		// Menus.addSubMenuItem('topbar', '우승자 혜택', '우승자 혜택', 'introduces/create');
		// Menus.addSubMenuItem('topbar', '심사위원', '심사위원', 'introduces/create');
		// Menus.addSubMenuItem('topbar', '문의', '문의', 'introduces/create');
	}
]);
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
'use strict';

// Introduces controller
angular.module('introduces').controller('IntroducesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Introduces',
	function($scope, $stateParams, $location, Authentication, Introduces) {
		$scope.authentication = Authentication;

		// Create new Introduce
		$scope.create = function() {
			// Create new Introduce object
			var introduce = new Introduces ({
				name: this.name
			});

			// Redirect after save
			introduce.$save(function(response) {
				$location.path('introduces/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Introduce
		$scope.remove = function(introduce) {
			if ( introduce ) { 
				introduce.$remove();

				for (var i in $scope.introduces) {
					if ($scope.introduces [i] === introduce) {
						$scope.introduces.splice(i, 1);
					}
				}
			} else {
				$scope.introduce.$remove(function() {
					$location.path('introduces');
				});
			}
		};

		// Update existing Introduce
		$scope.update = function() {
			var introduce = $scope.introduce;

			introduce.$update(function() {
				$location.path('introduces/' + introduce._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Introduces
		$scope.find = function() {
			$scope.introduces = Introduces.query();
		};

		// Find existing Introduce
		$scope.findOne = function() {
			$scope.introduce = Introduces.get({ 
				introduceId: $stateParams.introduceId
			});
		};
	}
]);
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
'use strict';

// Configuring the Articles module
angular.module('mypages').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Mypages', 'mypages', 'dropdown', '/mypages(/create)?');
		Menus.addSubMenuItem('topbar', 'mypages', 'List Mypages', 'mypages');
		Menus.addSubMenuItem('topbar', 'mypages', 'New Mypage', 'mypages/create');
	}
]);
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
'use strict';

// Mypages controller
angular.module('mypages').controller('MypagesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Mypages',
	function($scope, $stateParams, $location, Authentication, Mypages) {
		$scope.authentication = Authentication;

		// Create new Mypage
		$scope.create = function() {
			// Create new Mypage object
			var mypage = new Mypages ({
				name: this.name
			});

			// Redirect after save
			mypage.$save(function(response) {
				$location.path('mypages/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Mypage
		$scope.remove = function(mypage) {
			if ( mypage ) { 
				mypage.$remove();

				for (var i in $scope.mypages) {
					if ($scope.mypages [i] === mypage) {
						$scope.mypages.splice(i, 1);
					}
				}
			} else {
				$scope.mypage.$remove(function() {
					$location.path('mypages');
				});
			}
		};

		// Update existing Mypage
		$scope.update = function() {
			var mypage = $scope.mypage;

			mypage.$update(function() {
				$location.path('mypages/' + mypage._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Mypages
		$scope.find = function() {
			$scope.mypages = Mypages.query();
		};

		// Find existing Mypage
		$scope.findOne = function() {
			$scope.mypage = Mypages.get({ 
				mypageId: $stateParams.mypageId
			});
		};
	}
]);
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
'use strict';

// Configuring the Articles module
angular.module('news').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'News', 'news', 'dropdown', '/news(/create)?');
		Menus.addSubMenuItem('topbar', 'news', 'List News', 'news');
		Menus.addSubMenuItem('topbar', 'news', 'New News', 'news/create');
	}
]);
'use strict';

//Setting up route
angular.module('news').config(['$stateProvider',
	function($stateProvider) {
		// News state routing
		$stateProvider.
		state('listNews', {
			url: '/news',
			templateUrl: 'modules/news/views/list-news.client.view.html'
		}).
		state('createNews', {
			url: '/news/create',
			templateUrl: 'modules/news/views/create-news.client.view.html'
		}).
		state('viewNews', {
			url: '/news/:newsId',
			templateUrl: 'modules/news/views/view-news.client.view.html'
		}).
		state('editNews', {
			url: '/news/:newsId/edit',
			templateUrl: 'modules/news/views/edit-news.client.view.html'
		});
	}
]);
'use strict';

// News controller
angular.module('news').controller('NewsController', ['$scope', '$stateParams', '$location', 'Authentication', 'News',
	function($scope, $stateParams, $location, Authentication, News) {
		$scope.authentication = Authentication;

		// Create new News
		$scope.create = function() {
			// Create new News object
			var news = new News ({
				name: this.name,
				content : this.content
			});

			// Redirect after save
			news.$save(function(response) {
				$location.path('news/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing News
		$scope.remove = function(news) {
			if ( news ) { 
				news.$remove();

				for (var i in $scope.news) {
					if ($scope.news [i] === news) {
						$scope.news.splice(i, 1);
					}
				}
			} else {
				$scope.news.$remove(function() {
					$location.path('news');
				});
			}
		};

		// Update existing News
		$scope.update = function() {
			var news = $scope.news;

			news.$update(function() {
				$location.path('news/' + news._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of News
		$scope.find = function() {
			$scope.news = News.query();
		};

		// Find existing News
		$scope.findOne = function() {
			$scope.news = News.get({ 
				newsId: $stateParams.newsId
			});
		};
	}
]);

'use strict';

//News service used to communicate News REST endpoints
angular.module('news').factory('News', ['$resource',
	function($resource) {
		return $resource('news/:newsId', { newsId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
'use strict';

// Configuring the Articles module
angular.module('resultsannounces').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', '결과발표', 'resultsannounces', 'dropdown', '/resultsannounces(/create)?');
		Menus.addSubMenuItem('topbar', 'resultsannounces', 'List Resultsannounces', 'resultsannounces');
		Menus.addSubMenuItem('topbar', 'resultsannounces', 'New Resultsannounce', 'resultsannounces/create');
	}
]);
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
'use strict';

// Resultsannounces controller
angular.module('resultsannounces').controller('ResultsannouncesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Resultsannounces',
	function($scope, $stateParams, $location, Authentication, Resultsannounces) {
		$scope.authentication = Authentication;

		// Create new Resultsannounce
		$scope.create = function() {
			// Create new Resultsannounce object
			var resultsannounce = new Resultsannounces ({
				name: this.name
			});

			// Redirect after save
			resultsannounce.$save(function(response) {
				$location.path('resultsannounces/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Resultsannounce
		$scope.remove = function(resultsannounce) {
			if ( resultsannounce ) { 
				resultsannounce.$remove();

				for (var i in $scope.resultsannounces) {
					if ($scope.resultsannounces [i] === resultsannounce) {
						$scope.resultsannounces.splice(i, 1);
					}
				}
			} else {
				$scope.resultsannounce.$remove(function() {
					$location.path('resultsannounces');
				});
			}
		};

		// Update existing Resultsannounce
		$scope.update = function() {
			var resultsannounce = $scope.resultsannounce;

			resultsannounce.$update(function() {
				$location.path('resultsannounces/' + resultsannounce._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Resultsannounces
		$scope.find = function() {
			$scope.resultsannounces = Resultsannounces.query();
		};

		// Find existing Resultsannounce
		$scope.findOne = function() {
			$scope.resultsannounce = Resultsannounces.get({ 
				resultsannounceId: $stateParams.resultsannounceId
			});
		};
	}
]);
'use strict';

//Resultsannounces service used to communicate Resultsannounces REST endpoints
angular.module('resultsannounces').factory('Resultsannounces', ['$resource',
	function($resource) {
		return $resource('resultsannounces/:resultsannounceId', { resultsannounceId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
'use strict';

// Config HTTP Error Handling
angular.module('users').config(['$httpProvider',
	function($httpProvider) {
		// Set the httpProvider "not authorized" interceptor
		$httpProvider.interceptors.push(['$q', '$location', 'Authentication',
			function($q, $location, Authentication) {
				return {
					responseError: function(rejection) {
						switch (rejection.status) {
							case 401:
								// Deauthenticate the global user
								Authentication.user = null;

								// Redirect to signin page
								$location.path('signin');
								break;
							case 403:
								// Add unauthorized behaviour 
								break;
						}

						return $q.reject(rejection);
					}
				};
			}
		]);
	}
]);
'use strict';

// Setting up route
angular.module('users').config(['$stateProvider',
	function($stateProvider) {
		// Users state routing
		$stateProvider.
		state('profile', {
			url: '/settings/profile',
			templateUrl: 'modules/users/views/settings/edit-profile.client.view.html'
		}).
		state('password', {
			url: '/settings/password',
			templateUrl: 'modules/users/views/settings/change-password.client.view.html'
		}).
		state('accounts', {
			url: '/settings/accounts',
			templateUrl: 'modules/users/views/settings/social-accounts.client.view.html'
		}).
		state('signup', {
			url: '/signup',
			templateUrl: 'modules/users/views/authentication/signup.client.view.html'
		}).
		state('signin', {
			url: '/signin',
			templateUrl: 'modules/users/views/authentication/signin.client.view.html'
		}).
		state('forgot', {
			url: '/password/forgot',
			templateUrl: 'modules/users/views/password/forgot-password.client.view.html'
		}).
		state('reset-invalid', {
			url: '/password/reset/invalid',
			templateUrl: 'modules/users/views/password/reset-password-invalid.client.view.html'
		}).
		state('reset-success', {
			url: '/password/reset/success',
			templateUrl: 'modules/users/views/password/reset-password-success.client.view.html'
		}).
		state('reset', {
			url: '/password/reset/:token',
			templateUrl: 'modules/users/views/password/reset-password.client.view.html'
		});
	}
]);
'use strict';

angular.module('users').controller('AuthenticationController', ['$scope', '$http', '$location', 'Authentication',
	function($scope, $http, $location, Authentication) {
		$scope.authentication = Authentication;

		// If user is signed in then redirect back home
		if ($scope.authentication.user) $location.path('/');

		$scope.signup = function() {
			$http.post('/auth/signup', $scope.credentials).success(function(response) {
				// If successful we assign the response to the global user model
				$scope.authentication.user = response;

				// And redirect to the index page
				$location.path('/');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};

		$scope.signin = function() {
			$http.post('/auth/signin', $scope.credentials).success(function(response) {
				// If successful we assign the response to the global user model
				$scope.authentication.user = response;

				// And redirect to the index page
				$location.path('/');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);
'use strict';

angular.module('users').controller('PasswordController', ['$scope', '$stateParams', '$http', '$location', 'Authentication',
	function($scope, $stateParams, $http, $location, Authentication) {
		$scope.authentication = Authentication;

		//If user is signed in then redirect back home
		if ($scope.authentication.user) $location.path('/');

		// Submit forgotten password account id
		$scope.askForPasswordReset = function() {
			$scope.success = $scope.error = null;

			$http.post('/auth/forgot', $scope.credentials).success(function(response) {
				// Show user success message and clear form
				$scope.credentials = null;
				$scope.success = response.message;

			}).error(function(response) {
				// Show user error message and clear form
				$scope.credentials = null;
				$scope.error = response.message;
			});
		};

		// Change user password
		$scope.resetUserPassword = function() {
			$scope.success = $scope.error = null;

			$http.post('/auth/reset/' + $stateParams.token, $scope.passwordDetails).success(function(response) {
				// If successful show success message and clear form
				$scope.passwordDetails = null;

				// Attach user profile
				Authentication.user = response;

				// And redirect to the index page
				$location.path('/password/reset/success');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);
'use strict';

angular.module('users').controller('SettingsController', ['$scope', '$http', '$location', 'Users', 'Authentication',
	function($scope, $http, $location, Users, Authentication) {
		$scope.user = Authentication.user;

		// If user is not signed in then redirect back home
		if (!$scope.user) $location.path('/');

		// Check if there are additional accounts 
		$scope.hasConnectedAdditionalSocialAccounts = function(provider) {
			for (var i in $scope.user.additionalProvidersData) {
				return true;
			}

			return false;
		};

		// Check if provider is already in use with current user
		$scope.isConnectedSocialAccount = function(provider) {
			return $scope.user.provider === provider || ($scope.user.additionalProvidersData && $scope.user.additionalProvidersData[provider]);
		};

		// Remove a user social account
		$scope.removeUserSocialAccount = function(provider) {
			$scope.success = $scope.error = null;

			$http.delete('/users/accounts', {
				params: {
					provider: provider
				}
			}).success(function(response) {
				// If successful show success message and clear form
				$scope.success = true;
				$scope.user = Authentication.user = response;
			}).error(function(response) {
				$scope.error = response.message;
			});
		};

		// Update a user profile
		$scope.updateUserProfile = function(isValid) {
			if (isValid) {
				$scope.success = $scope.error = null;
				var user = new Users($scope.user);

				user.$update(function(response) {
					$scope.success = true;
					Authentication.user = response;
				}, function(response) {
					$scope.error = response.data.message;
				});
			} else {
				$scope.submitted = true;
			}
		};

		// Change user password
		$scope.changeUserPassword = function() {
			$scope.success = $scope.error = null;

			$http.post('/users/password', $scope.passwordDetails).success(function(response) {
				// If successful show success message and clear form
				$scope.success = true;
				$scope.passwordDetails = null;
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);
'use strict';

// Authentication service for user variables
angular.module('users').factory('Authentication', [
	function() {
		var _this = this;

		_this._data = {
			user: window.user
		};

		return _this._data;
	}
]);
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
'use strict';

//Setting up route
angular.module('votes').config(['$stateProvider',
	function($stateProvider) {
		// Votes state routing
		$stateProvider.
		state('listVotes', {
			url: '/votes',
			templateUrl: 'modules/votes/views/list-votes.client.view.html'
		}).
		state('createVote', {
			url: '/votes/create',
			templateUrl: 'modules/votes/views/create-vote.client.view.html'
		}).
		state('viewVote', {
			url: '/votes/:voteId',
			templateUrl: 'modules/votes/views/view-vote.client.view.html'
		}).
		state('editVote', {
			url: '/votes/:voteId/edit',
			templateUrl: 'modules/votes/views/edit-vote.client.view.html'
		});
	}
]);
'use strict';

// Votes controller
angular.module('votes').controller('VotesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Votes',
	function($scope, $stateParams, $location, Authentication, Votes) {
		$scope.authentication = Authentication;

		// Create new Vote
		$scope.create = function() {
			// Create new Vote object
			var vote = new Votes ({
				name: this.name
			});

			// Redirect after save
			vote.$save(function(response) {
				$location.path('votes/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Vote
		$scope.remove = function(vote) {
			if ( vote ) { 
				vote.$remove();

				for (var i in $scope.votes) {
					if ($scope.votes [i] === vote) {
						$scope.votes.splice(i, 1);
					}
				}
			} else {
				$scope.vote.$remove(function() {
					$location.path('votes');
				});
			}
		};

		// Update existing Vote
		$scope.update = function() {
			var vote = $scope.vote;

			vote.$update(function() {
				$location.path('votes/' + vote._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Votes
		$scope.find = function() {
			$scope.votes = Votes.query();
		};

		// Find existing Vote
		$scope.findOne = function() {
			$scope.vote = Votes.get({ 
				voteId: $stateParams.voteId
			});
		};
	}
]);
'use strict';

//Votes service used to communicate Votes REST endpoints
angular.module('votes').factory('Votes', ['$resource',
	function($resource) {
		return $resource('votes/:voteId', { voteId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('competitions',['youtube-embed','ngFileUpload']);

'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('core');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('faqs');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('introduces');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('mypages');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('news');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('resultsannounces');
'use strict';

// Use Applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('users');
'use strict';

// Use applicaion configuration module to register a new module
ApplicationConfiguration.registerModule('votes');
'use strict';

// Configuring the Articles module
angular.module('competitions').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', '경연대회', 'competitions', 'dropdown', '/competitions(/create)?');
		Menus.addSubMenuItem('topbar', 'competitions', 'List Competitions', 'competitions');
		Menus.addSubMenuItem('topbar', 'competitions', 'New Competition', 'competitions/create');
	}
]);

'use strict';

//Setting up route
angular.module('competitions').config(['$stateProvider',
	function($stateProvider) {
		// Competitions state routing
		$stateProvider.
		state('listCompetitions', {
			url: '/competitions',
			templateUrl: 'modules/competitions/views/list-competitions.client.view.html'
		}).
		state('createCompetition', {
			url: '/competitions/create',
			templateUrl: 'modules/competitions/views/create-competition.client.view.html'
		}).
		state('viewCompetition', {
			url: '/competitions/:competitionId',
			templateUrl: 'modules/competitions/views/view-competition.client.view.html'
		}).
		state('editCompetition', {
			url: '/competitions/:competitionId/edit',
			templateUrl: 'modules/competitions/views/edit-competition.client.view.html'
		});
	}
]);

'use strict';

// Competitions controller
angular.module('competitions').controller('CompetitionsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Competitions','Comments','Likes',
	function($scope, $stateParams, $location, Authentication, Competitions,Comments,Likes) {
		$scope.authentication = Authentication;
		$scope.likeCount = 0;


		console.log($scope.authentication);

		// Create new Competition
		$scope.create = function() {
			// Create new Competition object
			console.log(this);
			var competition = new Competitions ({
				name: this.name,
				description : this.description,
				phoneNum : this.phoneNum,
				address : this.address,
				country : this.country,
				teamUrl : this.teamUrl,
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
			$scope.competitions = Competitions.query();
		};

		// Find existing Competition
		$scope.findOne = function() {
			$scope.competition = Competitions.get({
				competitionId: $stateParams.competitionId
			});

			$scope.comments = Comments.query({
				competitionId: $stateParams.competitionId
			});

			$scope.likes = Likes.query({
				competitionId: $stateParams.competitionId
			},function(){
				$scope.likeCount = getLikeCount($scope.likes);
				console.log($scope.likeCount);
			});



		};

		$scope.backToList = function(){
			window.history.back();
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
					});
				});


			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});


		}

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

'use strict';

angular.module('competitions').factory('Comments', [
	function() {
		// Comments service logic
		// ...

		// Public API
		return {
			someMethod: function() {
				return true;
			}
		};
	}
]);
'use strict';

//Competitions service used to communicate Competitions REST endpoints
angular.module('competitions').factory('Competitions', ['$resource',
	function($resource) {
		return $resource('competitions/:competitionId', { competitionId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);


angular.module('competitions').factory('Comments', ['$resource',
	function($resource) {
		return $resource('comments/:commentId', { commentId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);

angular.module('competitions').factory('Likes', ['$resource',
	function($resource) {
		return $resource('likes/:likeId', { likeId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);

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
	}
]);
'use strict';

angular.module('core').controller('HeaderController', ['$scope', 'Authentication', 'Menus',
	function($scope, Authentication, Menus) {
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
	}
]);
'use strict';


angular.module('core').controller('HomeController', ['$scope', 'Authentication',
	function($scope, Authentication) {
		// This provides Authentication context.
		$scope.authentication = Authentication;
	}
]);
'use strict';

//Menu service used for managing  menus
angular.module('core').service('Menus', [

	function() {
		// Define a set of default roles
		this.defaultRoles = ['*'];

		// Define the menus object
		this.menus = {};

		// A private function for rendering decision 
		var shouldRender = function(user) {
			if (user) {
				if (!!~this.roles.indexOf('*')) {
					return true;
				} else {
					for (var userRoleIndex in user.roles) {
						for (var roleIndex in this.roles) {
							if (this.roles[roleIndex] === user.roles[userRoleIndex]) {
								return true;
							}
						}
					}
				}
			} else {
				return this.isPublic;
			}

			return false;
		};

		// Validate menu existance
		this.validateMenuExistance = function(menuId) {
			if (menuId && menuId.length) {
				if (this.menus[menuId]) {
					return true;
				} else {
					throw new Error('Menu does not exists');
				}
			} else {
				throw new Error('MenuId was not provided');
			}

			return false;
		};

		// Get the menu object by menu id
		this.getMenu = function(menuId) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Return the menu object
			return this.menus[menuId];
		};

		// Add new menu object by menu id
		this.addMenu = function(menuId, isPublic, roles) {
			// Create the new menu
			this.menus[menuId] = {
				isPublic: isPublic || false,
				roles: roles || this.defaultRoles,
				items: [],
				shouldRender: shouldRender
			};

			// Return the menu object
			return this.menus[menuId];
		};

		// Remove existing menu object by menu id
		this.removeMenu = function(menuId) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Return the menu object
			delete this.menus[menuId];
		};

		// Add menu item object
		this.addMenuItem = function(menuId, menuItemTitle, menuItemURL, menuItemType, menuItemUIRoute, isPublic, roles, position) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Push new menu item
			this.menus[menuId].items.push({
				title: menuItemTitle,
				link: menuItemURL,
				menuItemType: menuItemType || 'item',
				menuItemClass: menuItemType,
				uiRoute: menuItemUIRoute || ('/' + menuItemURL),
				isPublic: ((isPublic === null || typeof isPublic === 'undefined') ? this.menus[menuId].isPublic : isPublic),
				roles: ((roles === null || typeof roles === 'undefined') ? this.menus[menuId].roles : roles),
				position: position || 0,
				items: [],
				shouldRender: shouldRender
			});

			// Return the menu object
			return this.menus[menuId];
		};

		// Add submenu item object
		this.addSubMenuItem = function(menuId, rootMenuItemURL, menuItemTitle, menuItemURL, menuItemUIRoute, isPublic, roles, position) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Search for menu item
			for (var itemIndex in this.menus[menuId].items) {
				if (this.menus[menuId].items[itemIndex].link === rootMenuItemURL) {
					// Push new submenu item
					this.menus[menuId].items[itemIndex].items.push({
						title: menuItemTitle,
						link: menuItemURL,
						uiRoute: menuItemUIRoute || ('/' + menuItemURL),
						isPublic: ((isPublic === null || typeof isPublic === 'undefined') ? this.menus[menuId].items[itemIndex].isPublic : isPublic),
						roles: ((roles === null || typeof roles === 'undefined') ? this.menus[menuId].items[itemIndex].roles : roles),
						position: position || 0,
						shouldRender: shouldRender
					});
				}
			}

			// Return the menu object
			return this.menus[menuId];
		};

		// Remove existing menu object by menu id
		this.removeMenuItem = function(menuId, menuItemURL) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Search for menu item to remove
			for (var itemIndex in this.menus[menuId].items) {
				if (this.menus[menuId].items[itemIndex].link === menuItemURL) {
					this.menus[menuId].items.splice(itemIndex, 1);
				}
			}

			// Return the menu object
			return this.menus[menuId];
		};

		// Remove existing menu object by menu id
		this.removeSubMenuItem = function(menuId, submenuItemURL) {
			// Validate that the menu exists
			this.validateMenuExistance(menuId);

			// Search for menu item to remove
			for (var itemIndex in this.menus[menuId].items) {
				for (var subitemIndex in this.menus[menuId].items[itemIndex].items) {
					if (this.menus[menuId].items[itemIndex].items[subitemIndex].link === submenuItemURL) {
						this.menus[menuId].items[itemIndex].items.splice(subitemIndex, 1);
					}
				}
			}

			// Return the menu object
			return this.menus[menuId];
		};

		//Adding the topbar menu
		this.addMenu('topbar');
	}
]);
'use strict';

// Configuring the Articles module
angular.module('faqs').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'FAQ', 'faqs', 'dropdown', '/faqs(/create)?');
		Menus.addSubMenuItem('topbar', 'faqs', 'List Faqs', 'faqs');
		Menus.addSubMenuItem('topbar', 'faqs', 'New Faq', 'faqs/create');
	}
]);
'use strict';

//Setting up route
angular.module('faqs').config(['$stateProvider',
	function($stateProvider) {
		// Faqs state routing
		$stateProvider.
		state('listFaqs', {
			url: '/faqs',
			templateUrl: 'modules/faqs/views/list-faqs.client.view.html'
		}).
		state('createFaq', {
			url: '/faqs/create',
			templateUrl: 'modules/faqs/views/create-faq.client.view.html'
		}).
		state('viewFaq', {
			url: '/faqs/:faqId',
			templateUrl: 'modules/faqs/views/view-faq.client.view.html'
		}).
		state('editFaq', {
			url: '/faqs/:faqId/edit',
			templateUrl: 'modules/faqs/views/edit-faq.client.view.html'
		});
	}
]);
'use strict';

// Faqs controller
angular.module('faqs').controller('FaqsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Faqs',
	function($scope, $stateParams, $location, Authentication, Faqs) {
		$scope.authentication = Authentication;

		// Create new Faq
		$scope.create = function() {
			// Create new Faq object
			var faq = new Faqs ({
				name: this.name
			});

			// Redirect after save
			faq.$save(function(response) {
				$location.path('faqs/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Faq
		$scope.remove = function(faq) {
			if ( faq ) { 
				faq.$remove();

				for (var i in $scope.faqs) {
					if ($scope.faqs [i] === faq) {
						$scope.faqs.splice(i, 1);
					}
				}
			} else {
				$scope.faq.$remove(function() {
					$location.path('faqs');
				});
			}
		};

		// Update existing Faq
		$scope.update = function() {
			var faq = $scope.faq;

			faq.$update(function() {
				$location.path('faqs/' + faq._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Faqs
		$scope.find = function() {
			$scope.faqs = Faqs.query();
		};

		// Find existing Faq
		$scope.findOne = function() {
			$scope.faq = Faqs.get({ 
				faqId: $stateParams.faqId
			});
		};
	}
]);
'use strict';

//Faqs service used to communicate Faqs REST endpoints
angular.module('faqs').factory('Faqs', ['$resource',
	function($resource) {
		return $resource('faqs/:faqId', { faqId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
'use strict';

// Configuring the Articles module
angular.module('introduces').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'UNI MUSIC RACE', 'introduces', '/introduces(/create)?');
		// Menus.addSubMenuItem('topbar', '진행일정', '진행일정', 'introduces');
		// Menus.addSubMenuItem('topbar', '모집요강', '모집요강', 'introduces/create');
		// Menus.addSubMenuItem('topbar', '우승자 혜택', '우승자 혜택', 'introduces/create');
		// Menus.addSubMenuItem('topbar', '심사위원', '심사위원', 'introduces/create');
		// Menus.addSubMenuItem('topbar', '문의', '문의', 'introduces/create');
	}
]);
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
'use strict';

// Introduces controller
angular.module('introduces').controller('IntroducesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Introduces',
	function($scope, $stateParams, $location, Authentication, Introduces) {
		$scope.authentication = Authentication;

		// Create new Introduce
		$scope.create = function() {
			// Create new Introduce object
			var introduce = new Introduces ({
				name: this.name
			});

			// Redirect after save
			introduce.$save(function(response) {
				$location.path('introduces/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Introduce
		$scope.remove = function(introduce) {
			if ( introduce ) { 
				introduce.$remove();

				for (var i in $scope.introduces) {
					if ($scope.introduces [i] === introduce) {
						$scope.introduces.splice(i, 1);
					}
				}
			} else {
				$scope.introduce.$remove(function() {
					$location.path('introduces');
				});
			}
		};

		// Update existing Introduce
		$scope.update = function() {
			var introduce = $scope.introduce;

			introduce.$update(function() {
				$location.path('introduces/' + introduce._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Introduces
		$scope.find = function() {
			$scope.introduces = Introduces.query();
		};

		// Find existing Introduce
		$scope.findOne = function() {
			$scope.introduce = Introduces.get({ 
				introduceId: $stateParams.introduceId
			});
		};
	}
]);
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
'use strict';

// Configuring the Articles module
angular.module('mypages').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Mypages', 'mypages', 'dropdown', '/mypages(/create)?');
		Menus.addSubMenuItem('topbar', 'mypages', 'List Mypages', 'mypages');
		Menus.addSubMenuItem('topbar', 'mypages', 'New Mypage', 'mypages/create');
	}
]);
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
'use strict';

// Mypages controller
angular.module('mypages').controller('MypagesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Mypages',
	function($scope, $stateParams, $location, Authentication, Mypages) {
		$scope.authentication = Authentication;

		// Create new Mypage
		$scope.create = function() {
			// Create new Mypage object
			var mypage = new Mypages ({
				name: this.name
			});

			// Redirect after save
			mypage.$save(function(response) {
				$location.path('mypages/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Mypage
		$scope.remove = function(mypage) {
			if ( mypage ) { 
				mypage.$remove();

				for (var i in $scope.mypages) {
					if ($scope.mypages [i] === mypage) {
						$scope.mypages.splice(i, 1);
					}
				}
			} else {
				$scope.mypage.$remove(function() {
					$location.path('mypages');
				});
			}
		};

		// Update existing Mypage
		$scope.update = function() {
			var mypage = $scope.mypage;

			mypage.$update(function() {
				$location.path('mypages/' + mypage._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Mypages
		$scope.find = function() {
			$scope.mypages = Mypages.query();
		};

		// Find existing Mypage
		$scope.findOne = function() {
			$scope.mypage = Mypages.get({ 
				mypageId: $stateParams.mypageId
			});
		};
	}
]);
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
'use strict';

// Configuring the Articles module
angular.module('news').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'News', 'news', 'dropdown', '/news(/create)?');
		Menus.addSubMenuItem('topbar', 'news', 'List News', 'news');
		Menus.addSubMenuItem('topbar', 'news', 'New News', 'news/create');
	}
]);
'use strict';

//Setting up route
angular.module('news').config(['$stateProvider',
	function($stateProvider) {
		// News state routing
		$stateProvider.
		state('listNews', {
			url: '/news',
			templateUrl: 'modules/news/views/list-news.client.view.html'
		}).
		state('createNews', {
			url: '/news/create',
			templateUrl: 'modules/news/views/create-news.client.view.html'
		}).
		state('viewNews', {
			url: '/news/:newsId',
			templateUrl: 'modules/news/views/view-news.client.view.html'
		}).
		state('editNews', {
			url: '/news/:newsId/edit',
			templateUrl: 'modules/news/views/edit-news.client.view.html'
		});
	}
]);
'use strict';

// News controller
angular.module('news').controller('NewsController', ['$scope', '$stateParams', '$location', 'Authentication', 'News',
	function($scope, $stateParams, $location, Authentication, News) {
		$scope.authentication = Authentication;

		// Create new News
		$scope.create = function() {
			// Create new News object
			var news = new News ({
				name: this.name,
				content : this.content
			});

			// Redirect after save
			news.$save(function(response) {
				$location.path('news/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing News
		$scope.remove = function(news) {
			if ( news ) { 
				news.$remove();

				for (var i in $scope.news) {
					if ($scope.news [i] === news) {
						$scope.news.splice(i, 1);
					}
				}
			} else {
				$scope.news.$remove(function() {
					$location.path('news');
				});
			}
		};

		// Update existing News
		$scope.update = function() {
			var news = $scope.news;

			news.$update(function() {
				$location.path('news/' + news._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of News
		$scope.find = function() {
			$scope.news = News.query();
		};

		// Find existing News
		$scope.findOne = function() {
			$scope.news = News.get({ 
				newsId: $stateParams.newsId
			});
		};
	}
]);

'use strict';

//News service used to communicate News REST endpoints
angular.module('news').factory('News', ['$resource',
	function($resource) {
		return $resource('news/:newsId', { newsId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
'use strict';

// Configuring the Articles module
angular.module('resultsannounces').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', '결과발표', 'resultsannounces', 'dropdown', '/resultsannounces(/create)?');
		Menus.addSubMenuItem('topbar', 'resultsannounces', 'List Resultsannounces', 'resultsannounces');
		Menus.addSubMenuItem('topbar', 'resultsannounces', 'New Resultsannounce', 'resultsannounces/create');
	}
]);
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
'use strict';

// Resultsannounces controller
angular.module('resultsannounces').controller('ResultsannouncesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Resultsannounces',
	function($scope, $stateParams, $location, Authentication, Resultsannounces) {
		$scope.authentication = Authentication;

		// Create new Resultsannounce
		$scope.create = function() {
			// Create new Resultsannounce object
			var resultsannounce = new Resultsannounces ({
				name: this.name
			});

			// Redirect after save
			resultsannounce.$save(function(response) {
				$location.path('resultsannounces/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Resultsannounce
		$scope.remove = function(resultsannounce) {
			if ( resultsannounce ) { 
				resultsannounce.$remove();

				for (var i in $scope.resultsannounces) {
					if ($scope.resultsannounces [i] === resultsannounce) {
						$scope.resultsannounces.splice(i, 1);
					}
				}
			} else {
				$scope.resultsannounce.$remove(function() {
					$location.path('resultsannounces');
				});
			}
		};

		// Update existing Resultsannounce
		$scope.update = function() {
			var resultsannounce = $scope.resultsannounce;

			resultsannounce.$update(function() {
				$location.path('resultsannounces/' + resultsannounce._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Resultsannounces
		$scope.find = function() {
			$scope.resultsannounces = Resultsannounces.query();
		};

		// Find existing Resultsannounce
		$scope.findOne = function() {
			$scope.resultsannounce = Resultsannounces.get({ 
				resultsannounceId: $stateParams.resultsannounceId
			});
		};
	}
]);
'use strict';

//Resultsannounces service used to communicate Resultsannounces REST endpoints
angular.module('resultsannounces').factory('Resultsannounces', ['$resource',
	function($resource) {
		return $resource('resultsannounces/:resultsannounceId', { resultsannounceId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
'use strict';

// Config HTTP Error Handling
angular.module('users').config(['$httpProvider',
	function($httpProvider) {
		// Set the httpProvider "not authorized" interceptor
		$httpProvider.interceptors.push(['$q', '$location', 'Authentication',
			function($q, $location, Authentication) {
				return {
					responseError: function(rejection) {
						switch (rejection.status) {
							case 401:
								// Deauthenticate the global user
								Authentication.user = null;

								// Redirect to signin page
								$location.path('signin');
								break;
							case 403:
								// Add unauthorized behaviour 
								break;
						}

						return $q.reject(rejection);
					}
				};
			}
		]);
	}
]);
'use strict';

// Setting up route
angular.module('users').config(['$stateProvider',
	function($stateProvider) {
		// Users state routing
		$stateProvider.
		state('profile', {
			url: '/settings/profile',
			templateUrl: 'modules/users/views/settings/edit-profile.client.view.html'
		}).
		state('password', {
			url: '/settings/password',
			templateUrl: 'modules/users/views/settings/change-password.client.view.html'
		}).
		state('accounts', {
			url: '/settings/accounts',
			templateUrl: 'modules/users/views/settings/social-accounts.client.view.html'
		}).
		state('signup', {
			url: '/signup',
			templateUrl: 'modules/users/views/authentication/signup.client.view.html'
		}).
		state('signin', {
			url: '/signin',
			templateUrl: 'modules/users/views/authentication/signin.client.view.html'
		}).
		state('forgot', {
			url: '/password/forgot',
			templateUrl: 'modules/users/views/password/forgot-password.client.view.html'
		}).
		state('reset-invalid', {
			url: '/password/reset/invalid',
			templateUrl: 'modules/users/views/password/reset-password-invalid.client.view.html'
		}).
		state('reset-success', {
			url: '/password/reset/success',
			templateUrl: 'modules/users/views/password/reset-password-success.client.view.html'
		}).
		state('reset', {
			url: '/password/reset/:token',
			templateUrl: 'modules/users/views/password/reset-password.client.view.html'
		});
	}
]);
'use strict';

angular.module('users').controller('AuthenticationController', ['$scope', '$http', '$location', 'Authentication',
	function($scope, $http, $location, Authentication) {
		$scope.authentication = Authentication;

		// If user is signed in then redirect back home
		if ($scope.authentication.user) $location.path('/');

		$scope.signup = function() {
			$http.post('/auth/signup', $scope.credentials).success(function(response) {
				// If successful we assign the response to the global user model
				$scope.authentication.user = response;

				// And redirect to the index page
				$location.path('/');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};

		$scope.signin = function() {
			$http.post('/auth/signin', $scope.credentials).success(function(response) {
				// If successful we assign the response to the global user model
				$scope.authentication.user = response;

				// And redirect to the index page
				$location.path('/');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);
'use strict';

angular.module('users').controller('PasswordController', ['$scope', '$stateParams', '$http', '$location', 'Authentication',
	function($scope, $stateParams, $http, $location, Authentication) {
		$scope.authentication = Authentication;

		//If user is signed in then redirect back home
		if ($scope.authentication.user) $location.path('/');

		// Submit forgotten password account id
		$scope.askForPasswordReset = function() {
			$scope.success = $scope.error = null;

			$http.post('/auth/forgot', $scope.credentials).success(function(response) {
				// Show user success message and clear form
				$scope.credentials = null;
				$scope.success = response.message;

			}).error(function(response) {
				// Show user error message and clear form
				$scope.credentials = null;
				$scope.error = response.message;
			});
		};

		// Change user password
		$scope.resetUserPassword = function() {
			$scope.success = $scope.error = null;

			$http.post('/auth/reset/' + $stateParams.token, $scope.passwordDetails).success(function(response) {
				// If successful show success message and clear form
				$scope.passwordDetails = null;

				// Attach user profile
				Authentication.user = response;

				// And redirect to the index page
				$location.path('/password/reset/success');
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);
'use strict';

angular.module('users').controller('SettingsController', ['$scope', '$http', '$location', 'Users', 'Authentication',
	function($scope, $http, $location, Users, Authentication) {
		$scope.user = Authentication.user;

		// If user is not signed in then redirect back home
		if (!$scope.user) $location.path('/');

		// Check if there are additional accounts 
		$scope.hasConnectedAdditionalSocialAccounts = function(provider) {
			for (var i in $scope.user.additionalProvidersData) {
				return true;
			}

			return false;
		};

		// Check if provider is already in use with current user
		$scope.isConnectedSocialAccount = function(provider) {
			return $scope.user.provider === provider || ($scope.user.additionalProvidersData && $scope.user.additionalProvidersData[provider]);
		};

		// Remove a user social account
		$scope.removeUserSocialAccount = function(provider) {
			$scope.success = $scope.error = null;

			$http.delete('/users/accounts', {
				params: {
					provider: provider
				}
			}).success(function(response) {
				// If successful show success message and clear form
				$scope.success = true;
				$scope.user = Authentication.user = response;
			}).error(function(response) {
				$scope.error = response.message;
			});
		};

		// Update a user profile
		$scope.updateUserProfile = function(isValid) {
			if (isValid) {
				$scope.success = $scope.error = null;
				var user = new Users($scope.user);

				user.$update(function(response) {
					$scope.success = true;
					Authentication.user = response;
				}, function(response) {
					$scope.error = response.data.message;
				});
			} else {
				$scope.submitted = true;
			}
		};

		// Change user password
		$scope.changeUserPassword = function() {
			$scope.success = $scope.error = null;

			$http.post('/users/password', $scope.passwordDetails).success(function(response) {
				// If successful show success message and clear form
				$scope.success = true;
				$scope.passwordDetails = null;
			}).error(function(response) {
				$scope.error = response.message;
			});
		};
	}
]);
'use strict';

// Authentication service for user variables
angular.module('users').factory('Authentication', [
	function() {
		var _this = this;

		_this._data = {
			user: window.user
		};

		return _this._data;
	}
]);
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
'use strict';

//Setting up route
angular.module('votes').config(['$stateProvider',
	function($stateProvider) {
		// Votes state routing
		$stateProvider.
		state('listVotes', {
			url: '/votes',
			templateUrl: 'modules/votes/views/list-votes.client.view.html'
		}).
		state('createVote', {
			url: '/votes/create',
			templateUrl: 'modules/votes/views/create-vote.client.view.html'
		}).
		state('viewVote', {
			url: '/votes/:voteId',
			templateUrl: 'modules/votes/views/view-vote.client.view.html'
		}).
		state('editVote', {
			url: '/votes/:voteId/edit',
			templateUrl: 'modules/votes/views/edit-vote.client.view.html'
		});
	}
]);
'use strict';

// Votes controller
angular.module('votes').controller('VotesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Votes',
	function($scope, $stateParams, $location, Authentication, Votes) {
		$scope.authentication = Authentication;

		// Create new Vote
		$scope.create = function() {
			// Create new Vote object
			var vote = new Votes ({
				name: this.name
			});

			// Redirect after save
			vote.$save(function(response) {
				$location.path('votes/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Vote
		$scope.remove = function(vote) {
			if ( vote ) { 
				vote.$remove();

				for (var i in $scope.votes) {
					if ($scope.votes [i] === vote) {
						$scope.votes.splice(i, 1);
					}
				}
			} else {
				$scope.vote.$remove(function() {
					$location.path('votes');
				});
			}
		};

		// Update existing Vote
		$scope.update = function() {
			var vote = $scope.vote;

			vote.$update(function() {
				$location.path('votes/' + vote._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Votes
		$scope.find = function() {
			$scope.votes = Votes.query();
		};

		// Find existing Vote
		$scope.findOne = function() {
			$scope.vote = Votes.get({ 
				voteId: $stateParams.voteId
			});
		};
	}
]);
'use strict';

//Votes service used to communicate Votes REST endpoints
angular.module('votes').factory('Votes', ['$resource',
	function($resource) {
		return $resource('votes/:voteId', { voteId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);
