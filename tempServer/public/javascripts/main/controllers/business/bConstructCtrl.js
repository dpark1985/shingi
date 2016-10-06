var h3Framework = angular.module('h3Framework')

.controller('bConstructCtrl', ['$http', function ($http) {
	var $bConstruct = this;

	// construct menu config
	$bConstruct.routeConfig = [
		{name: '사업소개', templateUrl: 'templates/main/business/construct/0.html', active: true},
		{name: '사업영역', templateUrl: 'templates/main/business/construct/1.html', active: false}
	];

	// clear all active class
	$bConstruct.clearActive = function () {
		for(var i=0; i<$bConstruct.routeConfig.length; i++){
			$bConstruct.routeConfig[i].active = false;
		}
	}

	// SubMenu Click
	$bConstruct.toSubMenu = function (index){
		$bConstruct.clearActive();
		$bConstruct.routeConfig[index].active = true;
		$bConstruct.currentPageUrl = $bConstruct.routeConfig[index].templateUrl;
	}


	// initial page to load
	$bConstruct.currentPageUrl = $bConstruct.routeConfig[0].templateUrl;


}]);
