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