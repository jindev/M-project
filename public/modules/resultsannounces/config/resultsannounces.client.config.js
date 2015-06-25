'use strict';

// Configuring the Articles module
angular.module('resultsannounces').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		//Menus.addMenuItem('topbar', '결과발표', 'resultsannounces', 'dropdown', '/resultsannounces(/create)?');
		Menus.addSubMenuItem('topbar', 'resultsannounces', 'List Resultsannounces', 'resultsannounces');
		Menus.addSubMenuItem('topbar', 'resultsannounces', 'New Resultsannounce', 'resultsannounces/create');
	}
]);
