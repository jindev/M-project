'use strict';

// Configuring the Articles module
angular.module('faqs').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		//Menus.addMenuItem('topbar', 'FAQ', 'faqs', 'dropdown', 'faqs');
		//Menus.addSubMenuItem('topbar', 'faqs', 'List Faqs', 'faqs');
		//Menus.addSubMenuItem('topbar', 'faqs', 'New Faq', 'faqs/create');
	}
]);
