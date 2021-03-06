'use strict';

// Configuring the Articles module
angular.module('introduces').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'UNI MUSIC RACE?', 'introduces', '/introduces(/create)?');
		Menus.addMenuItem('topbar', '경연대회', 'competitions', 'dropdown', '/competitions(/create)?');

		Menus.addSubMenuItem('topbar', 'competitions', '참가 등록','applyInfo');
		Menus.addSubMenuItem('topbar', 'competitions', '참가자 리스트', 'competitions');
		Menus.addMenuItem('topbar', 'FAQ', 'faqs',  'faqs');

		// Menus.addSubMenuItem('topbar', '진행일정', '진행일정', 'introduces');
		// Menus.addSubMenuItem('topbar', '모집요강', '모집요강', 'introduces/create');
		// Menus.addSubMenuItem('topbar', '우승자 혜택', '우승자 혜택', 'introduces/create');
		// Menus.addSubMenuItem('topbar', '심사위원', '심사위원', 'introduces/create');
		// Menus.addSubMenuItem('topbar', '문의', '문의', 'introduces/create');
	}
]);
