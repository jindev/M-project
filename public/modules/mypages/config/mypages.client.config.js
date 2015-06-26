'use strict';

// Configuring the Articles module
angular.module('mypages').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Mypages', 'mypages');
		//Menus.addSubMenuItem('topbar', 'mypages', 'List Mypages', 'mypages');
		//Menus.addSubMenuItem('topbar', 'mypages', 'New Mypage', 'mypages/create');
	}
]);
