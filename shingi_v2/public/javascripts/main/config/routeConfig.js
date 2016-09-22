
var h3Framework = angular.module('h3Framework')

.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {

		var koRouteConfig = [
			/*	Main	*/
			{path: '/',					 							templateUrl: 'templates/main/index/index.html',						controller: 'indexCtrl', 				controllerAs: 'index'},

			/*	Intro	*/
			{path: '/intro/ceo', 							templateUrl: 'templates/main/intro/ceo.html', 						controller: 'ceoCtrl', 					controllerAs: 'ceo'},
			{path: '/intro/info', 						templateUrl: 'templates/main/intro/info.html', 						controller: 'infoCtrl', 				controllerAs: 'info'},
			{path: '/intro/vision', 					templateUrl: 'templates/main/intro/vision.html', 					controller: 'visionCtrl', 			controllerAs: 'vision'},
			{path: '/intro/history', 					templateUrl: 'templates/main/intro/history.html', 				controller: 'historyCtrl', 			controllerAs: 'history'},
			{path: '/intro/orgchart', 				templateUrl: 'templates/main/intro/org.html', 						controller: 'orgCtrl', 					controllerAs: 'org'},
			{path: '/intro/job', 							templateUrl: 'templates/main/intro/job.html', 						controller: 'jobCtrl', 					controllerAs: 'job'},
			{path: '/intro/location',					templateUrl: 'templates/main/intro/location.html', 				controller: 'locationCtrl', 		controllerAs: 'loc'},

			/*	business	*/
			{path: '/business/cable', 				templateUrl: 'templates/main/business/cable.html', 				controller: 'bCableCtrl', 			controllerAs: 'bCable'},
			{path: '/business/trade', 				templateUrl: 'templates/main/business/trade.html', 				controller: 'bTradeCtrl', 			controllerAs: 'bTrade'},
			{path: '/business/construction',	templateUrl: 'templates/main/business/construction.html',	controller: 'bConstructCtrl', 	controllerAs: 'bConstruct'},
			{path: '/business/realestate', 		templateUrl: 'templates/main/business/realestate.html', 	controller: 'bRealestateCtrl',	controllerAs: 'bRealestate'},

			/*	Product	*/
			{path: '/product/cable', 					templateUrl: 'templates/main/product/cable.html', 				controller: 'pCableCtrl', 			controllerAs: 'pCable'},
			{path: '/product/trade', 					templateUrl: 'templates/main/product/trade.html', 				controller: 'pTradeCtrl', 			controllerAs: 'pTrade'},
			{path: '/product/construction', 	templateUrl: 'templates/main/product/construction.html',	controller: 'pConstructCtrl', 	controllerAs: 'pConstruct'},
			{path: '/product/realestate', 		templateUrl: 'templates/main/product/realestate.html', 		controller: 'pRealestateCtrl',	controllerAs: 'pRealestate'},

			/*	Public Relation	*/
			{path: '/pr/management',					templateUrl: 'templates/main/pr/management.html', 				controller: 'mgmtCtrl', 				controllerAs: 'mgmt'},
			{path: '/pr/cert', 								templateUrl: 'templates/main/pr/cert.html', 							controller: 'certCtrl', 				controllerAs: 'cert'},
			{path: '/pr/iso',		 							templateUrl: 'templates/main/pr/iso.html', 								controller: 'isoCtrl', 					controllerAs: 'iso'},

			/*	Customer Relation	*/
			{path: '/cr/contact', 						templateUrl: 'templates/main/cr/contact.html', 						controller: 'contactCtrl', 			controllerAs: 'contact'},
			{path: '/cr/inquiry', 						templateUrl: 'templates/main/cr/inquiry.html', 						controller: 'inquiryCtrl', 			controllerAs: 'inquiry'},
			{path: '/cr/notice', 							templateUrl: 'templates/main/cr/notice.html', 						controller: 'noticeCtrl', 			controllerAs: 'notice'},
			{path: '/cr/notice/:noticeId',		templateUrl: 'templates/main/cr/noticeDetail.html', 			controller: 'noticeCtrl', 			controllerAs: 'notice'}
		];

		// var enRouteConfig = [
		// 	/*	Main	*/
		// 	{path: '/en',					 							templateUrl: 'templates/main/index/index.html',						controller: 'indexCtrl', 				controllerAs: 'index'},
		//
		// 	/*	Intro	*/
		// 	{path: '/en/intro/ceo', 						templateUrl: 'templates/main/intro/ceo.html', 						controller: 'ceoCtrl', 					controllerAs: 'ceo'},
		// 	{path: '/en/intro/info', 						templateUrl: 'templates/main/intro/info.html', 						controller: 'infoCtrl', 				controllerAs: 'info'},
		// 	{path: '/en/intro/vision', 					templateUrl: 'templates/main/intro/vision.html', 					controller: 'visionCtrl', 			controllerAs: 'vision'},
		// 	{path: '/en/intro/history', 				templateUrl: 'templates/main/intro/history.html', 				controller: 'historyCtrl', 			controllerAs: 'history'},
		// 	{path: '/en/intro/orgchart', 				templateUrl: 'templates/main/intro/org.html', 						controller: 'orgCtrl', 					controllerAs: 'org'},
		// 	{path: '/en/intro/job', 						templateUrl: 'templates/main/intro/job.html', 						controller: 'jobCtrl', 					controllerAs: 'job'},
		// 	{path: '/en/intro/location',				templateUrl: 'templates/main/intro/location.html', 				controller: 'locationCtrl', 		controllerAs: 'loc'},
		//
		// 	/*	business	*/
		// 	{path: '/en/business/cable', 				templateUrl: 'templates/main/business/cable.html', 				controller: 'bCableCtrl', 			controllerAs: 'bCable'},
		// 	{path: '/en/business/trade', 				templateUrl: 'templates/main/business/trade.html', 				controller: 'bTradeCtrl', 			controllerAs: 'bTrade'},
		// 	{path: '/en/business/construction',	templateUrl: 'templates/main/business/construction.html',	controller: 'bConstructCtrl', 	controllerAs: 'bConstruct'},
		// 	{path: '/en/business/realestate', 	templateUrl: 'templates/main/business/realestate.html', 	controller: 'bRealestateCtrl',	controllerAs: 'bRealestate'},
		//
		// 	/*	Product	*/
		// 	{path: '/en/product/cable', 				templateUrl: 'templates/main/product/cable.html', 				controller: 'pCableCtrl', 			controllerAs: 'pCable'},
		// 	{path: '/en/product/trade', 				templateUrl: 'templates/main/product/trade.html', 				controller: 'pTradeCtrl', 			controllerAs: 'pTrade'},
		// 	{path: '/en/product/construction', 	templateUrl: 'templates/main/product/construction.html',	controller: 'pConstructCtrl', 	controllerAs: 'pConstruct'},
		// 	{path: '/en/product/realestate', 		templateUrl: 'templates/main/product/realestate.html', 		controller: 'pRealestateCtrl',	controllerAs: 'pRealestate'},
		//
		// 	/*	Public Relation	*/
		// 	{path: '/en/pr/management',					templateUrl: 'templates/main/pr/management.html', 				controller: 'mgmtCtrl', 				controllerAs: 'mgmt'},
		// 	{path: '/en/pr/cert', 							templateUrl: 'templates/main/pr/cert.html', 							controller: 'certCtrl', 				controllerAs: 'cert'},
		// 	{path: '/en/pr/iso',		 						templateUrl: 'templates/main/pr/iso.html', 								controller: 'isoCtrl', 					controllerAs: 'iso'},
		//
		// 	/*	Customer Relation	*/
		// 	{path: '/en/cr/contact', 						templateUrl: 'templates/main/cr/contact.html', 						controller: 'contactCtrl', 			controllerAs: 'contact'},
		// 	{path: '/en/cr/inquiry', 						templateUrl: 'templates/main/cr/inquiry.html', 						controller: 'inquiryCtrl', 			controllerAs: 'inquiry'},
		// 	{path: '/en/cr/notice', 						templateUrl: 'templates/main/cr/notice.html', 						controller: 'noticeCtrl', 			controllerAs: 'notice'},
		// 	{path: '/en/cr/notice/:noticeId',		templateUrl: 'templates/main/cr/noticeDetail.html', 			controller: 'noticeCtrl', 			controllerAs: 'notice'}
		// ];


		$locationProvider.html5Mode(false);

		for(var i=0; i<koRouteConfig.length; i++){
			$routeProvider.when(koRouteConfig[i].path, {
				templateUrl:	koRouteConfig[i].templateUrl,
				controller:		koRouteConfig[i].controller,
				controllerAs:	koRouteConfig[i].controllerAs
			});
		};

		// for(var i=0; i<enRouteConfig.length; i++){
		// 	$routeProvider.when(enRouteConfig[i].path, {
		// 		templateUrl:	enRouteConfig[i].templateUrl,
		// 		controller:		enRouteConfig[i].controller,
		// 		controllerAs:	enRouteConfig[i].controllerAs
		// 	});
		// };

		$routeProvider.otherwise({
			templateUrl: 'templates/main/common/404.html'
		});


}]);
