
var h3Framework = angular.module('h3Framework')

.controller('navCtrl', ['$scope', '$location', '$window', function ($scope, $location, $window) {

	var $nav = this;								//ControllerAs
	var menuout = null;							//mouseleave settimeout

	/*	Initialize variables	*/
	$nav.initVariables = function() {
		$nav.menuClicked = false;				//Opens subMenus
		$nav.subMenu = null;						//SubMenu Object
		$scope.mainContentStyle = {'padding':'0 0px 0 190px', 'min-width': '1100px', 'max-width': '1100px'};
	};

	/*	menu & submenu config	*/
	$nav.routeConfig = [
		{name:"회사소개",  active: false, subMenu: {
			imgSrc: "/images/banner/left-banner1.png",
			routeConfig: [
				{href:"/intro/ceo", 							name:"CEO 인사말", active: false},
				{href:"/intro/info", 						name:"회사개요", active: false},
				{href:"/intro/vision", 					name:"회사비전", active: false},
				{href:"/intro/history", 					name:"회사연혁", active: false},
				{href:"/intro/orgchart", 				name:"조직도", active: false},
				{href:"/intro/job", 							name:"채용정보", active: false},
				{href:"/intro/location", 				name:"오시는길", active: false}
			]
		}},
		{name:"사업분야", active: false, subMenu: {
			imgSrc: "/images/banner/left-banner2.png",
			routeConfig: [
				{href:"/business/cable", 				name:"케이블사업부", active: false},
				{href:"/business/trade", 				name:"무역사업부", active: false},
				{href:"/business/construction", 	name:"건설사업부", active: false},
				{href:"/business/realestate", 		name:"부동산사업부", active: false}
			]
		}},
		{name:"제품소개", active: false, subMenu: {
			imgSrc: "/images/banner/left-banner3.png",
			routeConfig: [
				{href:"/product/cable", 					name:"케이블사업제품", active: false},
				{href:"/product/trade", 					name:"무역사업제품", active: false},
				{href:"/product/construction", 	name:"건설사업제품", active: false},
				{href:"/product/realestate", 		name:"부동산사업제품", active: false}
			]
		}},
		{name:"기업홍보", active: false, subMenu: {
			imgSrc: "/images/banner/left-banner4.png",
			routeConfig: [
				{href:"/pr/management", 					name:"윤리경영", active: false},
				{href:"/pr/cert", 								name:"보유자격증", active: false},
				{href:"/pr/iso", 								name:"ISO인증서", active: false}
			]
		}},
		{name:"고객지원", active: false, subMenu: {
			imgSrc: "/images/banner/left-banner5.png",
			routeConfig: [
				{href:"/cr/contact", 						name:"연락처", active: false},
				{href:"/cr/inquiry", 						name:"고객문의", active: false},
				{href:"/cr/notice", 							name:"공지사항", active: false}
			]
		}},
	];

	/*	change language if language is clicked	*/
	$nav.lang = function(lang){
		if(lang === 'ko'){
			$('.ko').addClass("langActive");
			$('.en').removeClass("langActive");
		} else {
			$('.ko').removeClass("langActive");
			$('.en').addClass("langActive");
		}
	};

	// Clear Main Menu Active
	$nav.clearMainMenuActive = function(){
		for(var i=0; i<$nav.routeConfig.length; i++){
			$nav.routeConfig[i].active = false;
		}
	};

	// Clear Sub Menu Active
	$nav.clearSubMenuActive = function(){
		for(var i=0; i<$nav.routeConfig.length; i++){
			for(var j=0; j<$nav.routeConfig[i].subMenu.routeConfig.length; j++){
				$nav.routeConfig[i].subMenu.routeConfig[j].active = false;
			}
		}
	};

	// Main Menu Click
	$nav.menuClick = function (route) {
		$nav.clearMainMenuActive();
		route.active = true;
		$nav.subMenu = route.subMenu;
		$nav.mainMenu = route;
		$nav.menuClicked = true;
	};

	// SubMenu Click
	$nav.subMenuClick = function(subMenu) {
		$nav.clearSubMenuActive();
		subMenu.active = true;
		$location.path(subMenu.href);
		$scope.mainContentStyle = {'padding':'0 190px 0 325px', 'min-width': '1100px', 'max-width': '1100px'};
	};

	$nav.extraLinkClick = function() {
		$nav.clearMainMenuActive();
		$nav.menuClicked = true;
		$nav.subMenu = {
			imgSrc: "/images/banner/left-banner6.png"
		};
		$nav.mainMenu = {name:"", active: false, subMenu: {
			imgSrc: "/images/banner/left-banner6.png"
		}};
	};

	// Logo Click
	$nav.logoClick = function() {
		$nav.menuClicked = false;
		$nav.clearMainMenuActive();
		$nav.clearSubMenuActive();
	};

	// Resize window and set the menus active status
	$nav.resizeWindownSubMenu = function() {
		$nav.menuClicked = true;
		if($window.innerWidth <= 1190){
			$scope.mainContentStyle = {'padding':'0 0 0 325px', 'min-width': '1100px', 'max-width': '1100px'};
		} else {
			$scope.mainContentStyle = {'padding':'0 190px 0 325px', 'min-width': '1100px', 'max-width': '1100px'};
		}



		if($location.path().split('/')[1]){
			$nav.clearMainMenuActive();
			for(var i=0; i<$nav.routeConfig.length; i++){
				for(var j=0; j<$nav.routeConfig[i].subMenu.routeConfig.length; j++){
					if($nav.routeConfig[i].subMenu.routeConfig[j].href.split('/')[1] === $location.path().split('/')[1]){
						$nav.menuClick($nav.routeConfig[i]);
						break;
					}
				}
			}
		}

		if($location.path().split('/')[2]){
			$nav.clearSubMenuActive();
			for(var i=0; i<$nav.routeConfig.length; i++){
				for(var j=0; j<$nav.routeConfig[i].subMenu.routeConfig.length; j++){
					if($nav.routeConfig[i].subMenu.routeConfig[j].href === $location.path()){
						$nav.routeConfig[i].subMenu.routeConfig[j].active = true;
						break;
					}
				}
			}
		}

		if($location.path().split('/')[1] == 'extra') {
			$nav.extraLinkClick();
		}
	};

	$nav.resizeMainView = function() {
		if($window.innerWidth <= 1680){
			$scope.mainContentStyle = {'padding':'0 0 0 190px', 'width':'100%', 'min-width': '', 'max-width': ''};
		} else {
			$scope.mainContentStyle = {'padding':'0 0 0 190px', 'width':'100%', 'min-width': '', 'max-width': ''};
		}

	}


	/*	Initialize variables	*/
	$nav.initVariables();

	// if browser routes through the pages, the following code will execute.
	$scope.$on('$routeChangeStart', function(next, current){
		if(current.$$route.controllerAs !== 'index'){
			$nav.resizeWindownSubMenu();
		} else {
			$nav.menuClicked = false;
			$nav.resizeMainView();
		}
	});

	// if browser gets refreshed, the following code will execute.
	if($location.path() !== '/'){
		$nav.resizeWindownSubMenu();
	} else {
		$nav.menuClicked = false;
	};



}]);
