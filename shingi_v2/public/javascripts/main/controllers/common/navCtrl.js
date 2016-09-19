
var h3Framework = angular.module('h3Framework')

.controller('navCtrl', ['$scope', '$location', function ($scope, $location) {

	var $nav = this;								//ControllerAs
	var menuout = null;							//mouseleave settimeout

	/*	Initialize variables	*/
	$nav.initVariables = function() {
		$nav.menuClicked = false;				//Opens subMenus
		$nav.menuClickedCount = 0;			//MainMenu Click Count
		$nav.subMenu = null;						//SubMenu Object
	};

	/*	menu & submenu config	*/
	$nav.routeConfig = [
		{name:"회사소개", marginTop:"1px", subMenu: [
			{href:"intro/ceo", 							name:"CEO 인사말"},
			{href:"intro/info", 						name:"회사개요"},
			{href:"intro/vision", 					name:"회사비전"},
			{href:"intro/history", 					name:"회사연혁"},
			{href:"intro/orgchart", 				name:"조직도"},
			{href:"intro/job", 							name:"채용정보"},
			{href:"intro/location", 				name:"오시는길"}
		]},
		{name:"사업분야", marginTop:"51px", subMenu: [
			{href:"business/cable", 				name:"케이블사업부"},
			{href:"business/trade", 				name:"무역사업부"},
			{href:"business/construction", 	name:"건설사업부"},
			{href:"business/realestate", 		name:"부동산사업부"}
		]},
		{name:"제품소개", marginTop:"101px", subMenu: [
			{href:"product/cable", 					name:"케이블사업제품"},
			{href:"product/trade", 					name:"무역사업제품"},
			{href:"product/construction", 	name:"건설사업제품"},
			{href:"product/realestate", 		name:"부동산사업제품"}
		]},
		{name:"기업홍보", marginTop:"151px", subMenu: [
			{href:"pr/management", 					name:"윤리경영"},
			{href:"pr/cert", 								name:"보유자격증"},
			{href:"pr/iso", 								name:"ISO인증서"}
		]},
		{name:"고객지원", marginTop:"201px", subMenu: [
			{href:"cr/contact", 						name:"연락처"},
			{href:"cr/inquiry", 						name:"고객문의"},
			{href:"cr/notice", 							name:"공지사항"}
		]},
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

	/*	open submenu if mainmenu is clicked	*/
	$nav.menuClick = function (route) {
		if($nav.subMenu === null || $nav.subMenu.name != route.name || $nav.menuClickedCount === 0){
			$nav.subMenu = route;
			$nav.menuClicked = true;
			$nav.menuClickedCount++;
		} else {
			$nav.menuClicked = false;
			$nav.menuClickedCount = 0;
		}
	};

	/*	close submenu if submenu is clicked	*/
	$nav.subMenuClick = function(){
		$nav.menuClicked = false;
		$nav.menuClickedCount = 0;
	};

	// /*	close submenu if mouseleave	*/
	// $('nav-bar').mouseleave(function(){
	// 		menuout = setTimeout(function() {
	// 		$nav.menuClicked = false;
	// 		$nav.menuClickedCount = 0;
	// 		$scope.$apply();
	// 	}, 1500);
	// });
	//
	// /*	clear settimeout if mouseenter	*/
	// $('nav-bar').mouseenter(function() {
	// 	if(menuout){
	// 		clearTimeout(menuout);
	// 	}
	// });

	/*	Initialize variables	*/
	$nav.initVariables();

}]);
