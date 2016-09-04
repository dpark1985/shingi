
var h3Framework = angular.module('h3Framework')

.config(['$routeProvider', '$locationProvider',
	function($routeProvider, $locationProvider) {

		var routeConfig = [
			/*	Main	*/
			{url: '/',					 						templateUrl: 'templates/main/index/index.html',						controller: 'indexCtrl', 				controllerAs: 'index'},

			/*	Intro	*/
			{url: '/intro/ceo', 						templateUrl: 'templates/main/intro/ceo.html', 						controller: 'ceoCtrl', 					controllerAs: 'ceo'},
			{url: '/intro/info', 						templateUrl: 'templates/main/intro/info.html', 						controller: 'infoCtrl', 				controllerAs: 'info'},
			{url: '/intro/vision', 					templateUrl: 'templates/main/intro/vision.html', 					controller: 'visionCtrl', 			controllerAs: 'vision'},
			{url: '/intro/history', 				templateUrl: 'templates/main/intro/history.html', 				controller: 'historyCtrl', 			controllerAs: 'history'},
			{url: '/intro/orgchart', 				templateUrl: 'templates/main/intro/org.html', 						controller: 'orgCtrl', 					controllerAs: 'org'},
			{url: '/intro/job', 						templateUrl: 'templates/main/intro/job.html', 						controller: 'jobCtrl', 					controllerAs: 'job'},
			{url: '/intro/location',				templateUrl: 'templates/main/intro/location.html', 				controller: 'locationCtrl', 		controllerAs: 'loc'},

			/*	business	*/
			{url: '/business/cable', 				templateUrl: 'templates/main/business/cable.html', 				controller: 'bCableCtrl', 			controllerAs: 'bCable'},
			{url: '/business/trade', 				templateUrl: 'templates/main/business/trade.html', 				controller: 'bTradeCtrl', 			controllerAs: 'bTrade'},
			{url: '/business/construction',	templateUrl: 'templates/main/business/construction.html',	controller: 'bConstructCtrl', 	controllerAs: 'bConstruct'},
			{url: '/business/realestate', 	templateUrl: 'templates/main/business/realestate.html', 	controller: 'bRealestateCtrl',	controllerAs: 'bRealestate'},

			/*	Product	*/
			{url: '/product/cable', 				templateUrl: 'templates/main/product/cable.html', 				controller: 'pCableCtrl', 			controllerAs: 'pCable'},
			{url: '/product/trade', 				templateUrl: 'templates/main/product/trade.html', 				controller: 'pTradeCtrl', 			controllerAs: 'pTrade'},
			{url: '/product/construction', 	templateUrl: 'templates/main/product/construction.html',	controller: 'pConstructCtrl', 	controllerAs: 'pConstruct'},
			{url: '/product/realestate', 		templateUrl: 'templates/main/product/realestate.html', 		controller: 'pRealestateCtrl',	controllerAs: 'pRealestate'},

			/*	Public Relation	*/
			{url: '/pr/management',					templateUrl: 'templates/main/pr/management.html', 				controller: 'mgmtCtrl', 				controllerAs: 'mgmt'},
			{url: '/pr/cert', 							templateUrl: 'templates/main/pr/cert.html', 							controller: 'certCtrl', 				controllerAs: 'cert'},
			{url: '/pr/iso',		 						templateUrl: 'templates/main/pr/iso.html', 								controller: 'isoCtrl', 					controllerAs: 'iso'},

			/*	Customer Relation	*/
			{url: '/cr/contact', 						templateUrl: 'templates/main/cr/contact.html', 						controller: 'contactCtrl', 			controllerAs: 'contact'},
			{url: '/cr/inquiry', 						templateUrl: 'templates/main/cr/inquiry.html', 						controller: 'inquiryCtrl', 			controllerAs: 'inquiry'},
			{url: '/cr/notice', 						templateUrl: 'templates/main/cr/notice.html', 						controller: 'noticeCtrl', 			controllerAs: 'notice'},
		]

		for(var i=0; i<routeConfig.length; i++){
			$routeProvider.when(routeConfig[i].url, {
				templateUrl: routeConfig[i].templateUrl,
				controller: routeConfig[i].controller,
				controllerAs: routeConfig[i].controllerAs
			});
		}

		$routeProvider.otherwise({
			templateUrl: 'templates/main/common/404.html'
		});

    $locationProvider.html5Mode(true).hashPrefix('!');
}]);
