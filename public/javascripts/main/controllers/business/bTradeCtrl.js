var h3Framework = angular.module('h3Framework')

.controller('bTradeCtrl', ['$http', function ($http) {
	var $bTrade = this;

	// cable menu config
	$bTrade.routeConfig = [
		{name: '사업소개', templateUrl: 'templates/main/business/trade/0.html', active: true},
		{name: '사업영역', templateUrl: 'templates/main/business/trade/1.html', active: false}
	];

	// initial page to load
	$bTrade.currentPage = $bTrade.routeConfig[0].templateUrl;


	// clear all active class
	$bTrade.clearActive = function () {
		for(var i=0; i<$bTrade.routeConfig.length; i++){
			$bTrade.routeConfig[i].active = false;
		}
	}

	// SubMenu Click
	$bTrade.toSubMenu = function (index){
		$bTrade.clearActive();
		$bTrade.routeConfig[index].active = true;
		$bTrade.currentPage = $bTrade.routeConfig[index].templateUrl;
	}

}]);
